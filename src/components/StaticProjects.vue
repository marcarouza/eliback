<template>
   <div ref="staticContent" class="static-content-wrapper"></div>
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 
 export default defineComponent({
   name: 'StaticProjects',
   mounted() {
     // Load the static HTML content
     this.loadStaticContent();
   },
   methods: {
     async loadStaticContent() {
       try {
         // Fetch the static HTML content
         const response = await fetch('/static-projects/index.html');
         const htmlContent = await response.text();
         
         // Parse the HTML content
         const parser = new DOMParser();
         const doc = parser.parseFromString(htmlContent, 'text/html');
         
         // Extract the body content
         const bodyContent = doc.body.innerHTML;
         
         // Set the content to our div
         if (this.$refs.staticContent) {
           this.$refs.staticContent.innerHTML = bodyContent;
           
           // Fix asset paths after content is loaded
           this.$nextTick(() => {
             this.fixAssetPaths();
           });
         }
       } catch (error) {
         console.error('Failed to load static HTML content:', error);
       }
     },
     fixAssetPaths() {
       if (!this.$refs.staticContent) return;
       
       const container = this.$refs.staticContent as HTMLElement;
       
       // Fix image sources
       container.querySelectorAll('img').forEach(img => {
         const src = img.getAttribute('src');
         if (src && !src.startsWith('http') && !src.startsWith('/')) {
           img.setAttribute('src', `/static-projects/assets/${src.replace('./assets/', '')}`);
         }
       });
       
       // Fix CSS links
       container.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
         const href = link.getAttribute('href');
         if (href && !href.startsWith('http') && !href.startsWith('/')) {
           link.setAttribute('href', `/static-projects/assets/${href.replace('./assets/', '')}`);
         }
       });
       
       // Fix script sources
       container.querySelectorAll('script').forEach(script => {
         const src = script.getAttribute('src');
         if (src && !src.startsWith('http') && !src.startsWith('/')) {
           script.setAttribute('src', `/static-projects/assets/${src.replace('./assets/', '')}`);
         }
       });
     }
   }
 });
 </script>
 
 <style scoped>
 .static-content-wrapper {
   width: 100%;
 }
 </style>