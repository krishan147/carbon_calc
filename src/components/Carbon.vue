<script setup lang="ts">
import '@/assets/main.css';
import { onMounted, ref } from 'vue';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { getTable, getStats } from './utils/Access.js'
import { inject } from 'vue';

const navigate = inject<(page: string) => void>('navigate');

const products = ref<Product[]>([]);
const stats = ref<Stats[]>([]);
const searchTerm = ref<string>(''); 
const loading = ref<boolean>(false);

onMounted(async () => {
  const response = await getStats(); 
  stats.value = response

});

type Stats = {
  carbo_co2: string;
  hits: string;
  searches: string;
}


type Product = {
  title: string;
  imgurl: string;
  category_name: string;
  carbon_to_manufacture: string;
  carbon_one_year: string;
  carbon_break_even_use_years: string;
  target_use_years: string;
};

async function fetchProducts() {
  if (!searchTerm.value.trim()) {
    products.value = [];
    return;
  }
  loading.value = true; 
  products.value = []; 

  try {
    const response = await getTable(searchTerm.value.trim());
    products.value = (response || []).slice(0, 10);
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    loading.value = false;
    const updatedStats = await getStats();
    stats.value = updatedStats;
  }
}
function handleKeyup(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    fetchProducts();
  }
}

function truncate(text: string, maxLength: number): string {

  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}

const visiblePopupText = ref<string | null>(null);
let popupTimeout: ReturnType<typeof setTimeout> | null = null;

function showPopup(text: string) {
  visiblePopupText.value = text;

  if (popupTimeout) {
    clearTimeout(popupTimeout);
  }

  popupTimeout = setTimeout(() => {
    visiblePopupText.value = null;
    popupTimeout = null;
  }, 2000); 
}

</script>

<template>
  <main>
    <h1>CARBO</h1>
    <p>Check how much carbon your products use</p>
    <input v-model="searchTerm" class="input-box" type="text" id="fname" name="fname" placeholder="Search for a product here" @keyup="handleKeyup"/>
      <button class="stats-button" @click="fetchProducts">Submit</button>

    <div class="results-box">
        <div v-if="loading" class="loader-container">
          <div class="loader">
              <div class="loader-text">Searching</div>
          </div>
        </div>
      <div>
        <div 
          v-for="(product, index) in products" 
          :key="index" 
          class="product-box"
        >
          <div class="product-image">
            <img 
              :src="product.imgurl" 
              :alt="product.imgurl" 
            />
          </div>
          
          <div class="product-description">
            <div
              class="product-title"
              :title="product.title"
              @click="showPopup(product.title)"
              @mouseenter="showPopup(product.title)"
            >
              {{ truncate(product.title, 45) }} - {{ product.category_name }}
            </div>

            <div
              v-if="visiblePopupText"
              class="popup-center"
            >
              {{ visiblePopupText }}
            </div>
            <br />

            <div class="product-data">

              <div class="product-title">Footprint & offset</div>
              <br />
              <div class="product-bullets">
                <li>{{ product.carbon_to_manufacture }} CO₂e to manufacture</li>
                <li>{{ product.carbon_one_year }} CO₂e/year charging</li>
                <li>{{ product.carbon_break_even_use_years }} to offset manufacture</li>
                <li>aim for {{ product.target_use_years }}</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-box">
      <div class="carbon-box">{{ stats[0]?.carbo_co2 }}</div>
      <div class="hits-box">{{ stats[0]?.hits }}</div>
      <div class="searches-box">{{ stats[0]?.searches }}</div>
    </div>

    <div class="buttons-box">
      <button class="stats-button" @click="navigate?.('Carbon')">Home</button>
      <button class="stats-button" @click="navigate?.('PrivacyPolicy')">Privacy Policy</button>
      <button class="stats-button" @click="navigate?.('About')">About</button>
    </div>



  </main>
</template>
