<script setup lang="ts">
import '@/assets/main.css';
import { onMounted, ref } from 'vue';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { get_table } from './utils/Access.js'

const client = generateClient<Schema>();
const response = ref<string | null>(null);

// async function sendPrompt(prompt: string) {
//   response.value = await openRouter(prompt);
//   console.log(response.value);
// }

// sendPrompt("hello")

</script>

<template>
  <main>
    <h1>CARBO</h1>
    <p>Check how much carbon your products use!</p>
    <input class="input-box" type="text" id="fname" name="fname" placeholder="Search for a product here...">

    <div class="results-box">



      <div class="product-box">
        <div class="product-image">
          <img src="https://www.pngplay.com/wp-content/uploads/9/IPhone-Transparent-Image-Background-PNG.png" alt="Product Image" />
        </div>
        <div class="product-description">
          <div class="product-title">iPhone 5 128GB Black</div>
          <br>

          <div class="product-data">
            <p>
              aluminum. glass. lightning.  
              launched 2012. 112g. 4-inch retina.  
              a6 chip. 8mp cam. 128gb custom config.
            </p>
            
            <div class="product-title">Footprint & offset</div>
            <ul>
              <li>~75kg CO₂e to manufacture</li>
              <li>~10–15kg CO₂e/year charging</li>
              <li>2.5 years use = offset manufacture</li>
              <li>aim for 4–5+ years use</li>
            </ul>
          </div>
        </div>
      </div>




      <div class="product-box">
        <div class="product-image">
          <img src="https://www.pngplay.com/wp-content/uploads/9/IPhone-Transparent-Image-Background-PNG.png" alt="Product Image" />
        </div>
        <div class="product-description">
          <div class="product-title">iPhone 5 128GB Black</div>
          <div class="product-data">
            <p>
              aluminum. glass. lightning.  
              launched 2012. 112g. 4-inch retina.  
              a6 chip. 8mp cam. 128gb custom config.
            </p>

            <div class="product-title">Footprint & offset</div>
            <ul>
              <li>~75kg CO₂e to manufacture</li>
              <li>~10–15kg CO₂e/year charging</li>
              <li>2.5 years use = offset manufacture</li>
              <li>aim for 4–5+ years use</li>
            </ul>
          </div>
        </div>
      </div>




      <div class="product-box">
        <div class="product-image">
          <img src="https://www.pngplay.com/wp-content/uploads/9/IPhone-Transparent-Image-Background-PNG.png" alt="Product Image" />
        </div>
        <div class="product-description">
          <div class="product-title">iPhone 5 128GB Black</div>
          <div class="product-data">
            <p>
              aluminum. glass. lightning.  
              launched 2012. 112g. 4-inch retina.  
              a6 chip. 8mp cam. 128gb custom config.
            </p>

            <div class="product-title">Footprint & offset</div>
            <ul>
              <li>~75kg CO₂e to manufacture</li>
              <li>~10–15kg CO₂e/year charging</li>
              <li>2.5 years use = offset manufacture</li>
              <li>aim for 4–5+ years use</li>
            </ul>
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
./utils/Access