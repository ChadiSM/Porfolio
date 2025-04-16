<script setup>

import Introduccion from './components/Introduccion.vue'

import Botones from './components/botones.vue';
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <div class="about-container">
    <div class="dynamic-border">
      <div class="about-content">
         
      </div>
    </div>
  </div>
 
<router-view></router-view>
</template>

<style >

html{
 
   background-image: linear-gradient(15deg,#f4f8fa 0%, #7b8c94 50%, #0f2c30 100%);
     box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.5); /* Sombra que simula el borde LED */
  background: linear-gradient(90deg, #9caaaa, #405d7c, #051618);
}








</style>

 