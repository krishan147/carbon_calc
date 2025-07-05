<script setup lang="ts">
import '@/assets/main.css';
import { onMounted, ref } from 'vue';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { getTable } from './utils/Access.js'

const products = ref<Product[]>([]);
  const expandedTitleIndex = ref<number | null>(null);

type Product = {
  title: string;
  imgUrl: string;
  category_name: string;
  carbon_to_manufacture: string;
  carbon_one_year: string;
  carbon_break_even_use_years: string;
  target_use_years: string;
};

onMounted(async () => {
  const response = await getTable("iphone"); 
  products.value = (response || []).slice(0, 10);
});

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
    <p>Check how much carbon your products use!</p>
    <input class="input-box" type="text" id="fname" name="fname" placeholder="Search for a product here...">

    <div class="results-box">
      <div>
        <div 
          v-for="(product, index) in products" 
          :key="index" 
          class="product-box"
        >
          <div class="product-image">
            <img 
              :src="product.imgUrl" 
              :alt="product.imgUrl" 
            />
          </div>
          
          <div class="product-description">
            <div
              class="product-title"
              :title="product.title"
              @click="showPopup(product.title)"
              @mouseenter="showPopup(product.title)"
            >
              {{ truncate(product.title, 45) }} - {{ truncate(product.category_name) }}
            </div>

            <!-- Centered Popup -->
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
      <div class="carbon-box">Carbo’s CO₂: 84.5K</div>
      <div class="hits-box">Hits: 3,434</div>
      <div class="searches-box">Searches: 231</div>
    </div>

    <div class="buttons-box">
      <button class="stats-button">Home</button>
      <button class="stats-button">Privacy Policy</button>
      <button class="stats-button">About</button>
    </div>



  </main>
</template>
