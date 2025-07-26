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
            <h1 class="text-subtitle">Privacy Policy</h1>

            <p>At Carbo (carbo.com), your privacy is important to us. This Privacy Policy outlines what information we collect, how we use it, and your rights regarding your personal data.</p>

            <h2 class="text-subtitle">1. Information We Collect</h2>
            <p>Carbo does not collect any personally identifiable information from users. The site functions without the need to track individual users or gather personal data such as names, email addresses, or IP addresses.</p>

            <h2 class="text-subtitle">2. Data Sources and Estimations</h2>
            <p>All the carbon usage data presented on Carbo is derived from publicly available sources, estimation techniques, and inbuilt models. These data are generalized and are not linked to individual users or their specific behaviors.</p>

            <h2 class="text-subtitle">3. Cookies and Tracking</h2>
            <p>Carbo does not use cookies or tracking technologies to monitor user behavior. Your visit to the site remains anonymous.</p>

            <h2 class="text-subtitle">4. Third-Party Services</h2>
            <p>Carbo does not share any information with third parties. As no user data is collected, there is no data to share or sell.</p>

            <h2 class="text-subtitle">5. Security</h2>
            <p>Although no personal data is collected, Carbo follows standard security practices to ensure the integrity and reliability of its content and estimation models.</p>

            <h2 class="text-subtitle">6. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and the updated date will be posted below.</p>

            <p><strong>Last Updated:</strong> July 26, 2025</p>

            <h2 class="text-subtitle">7. Contact</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at
              <a class="custom-link" href="https://bsky.app/profile/krishgames.bsky.social" target="_blank" rel="noopener noreferrer">
                https://bsky.app/profile/krishgames.bsky.social
              </a>
            </p>
        </div>

      </div>
  
      <div class="buttons-box">
        <button class="stats-button" @click="navigate?.('Carbon')">Home</button>
        <button class="stats-button" @click="navigate?.('PrivacyPolicy')">Privacy Policy</button>
        <button class="stats-button" @click="navigate?.('About')">About</button>
    </div>
  
    </main>
  </template>