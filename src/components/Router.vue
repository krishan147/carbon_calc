<template>
    <component :is="pages[currentPage]" />
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, provide } from 'vue';
  import Carbon from './Carbon.vue';
  import About from './About.vue';
  import PrivacyPolicy from './PrivacyPolicy.vue';
  
  export default defineComponent({
    name: 'Router',
    components: {
      Carbon,
      About,
      PrivacyPolicy
    },
    setup() {
      const currentPage = ref('Carbon');
  
      const pages: Record<string, any> = {
        Carbon,
        About,
        PrivacyPolicy
      };
  
      provide('navigate', (page: string) => {
        if (pages[page]) {
          currentPage.value = page;
        } else {
          console.warn(`Unknown page: ${page}`);
        }
      });
  
      return { currentPage, pages };
    },
  });
  </script>
  