<script setup lang="ts">
import '@/assets/main.css';
import { inject } from 'vue';

const navigate = inject<(page: string) => void>('navigate');

</script>


<template>
    <main>
      <h1>CARBO</h1>
      <p>Check how much carbon your products use!</p>
      <div class="results-box">

        <div class="text-general">
            Carbo allows you to check how much CO² your products use. It is built using a number of data sources and models to estimate CO² and the number of years you should use a product before the carbon is offset.
        </div>

        <div class="text-general">
            -
        </div>

        <div class="text-general">
            If you have any questions, contact us here:

            <a class="custom-link" href="https://bsky.app/profile/krishanv.bsky.social" target="_blank" rel="noopener noreferrer">
              https://bsky.app/profile/krishanv.bsky.social
            </a>
        </div>
        <div class="text-general">
            -
        </div>
        <div class="text-general">
            This is version 1.011.
        </div>
        
      </div>
  
      <div class="buttons-box">
        <button class="stats-button" @click="navigate?.('Carbon')">Home</button>
        <button class="stats-button" @click="navigate?.('PrivacyPolicy')">Privacy Policy</button>
        <button class="stats-button" @click="navigate?.('About')">About</button>
    </div>
  
    </main>
  </template>