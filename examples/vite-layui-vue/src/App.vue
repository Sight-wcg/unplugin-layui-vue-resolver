<script setup lang="ts">
import type { Component } from 'vue';
import Acomp from './components/Acomp.vue';
import Bcomp from "./components/Bcomp.vue";
import Ccomp from "./components/Ccomp.vue";
import Dcomp from "./components/Dcomp.vue";
import Ecomp from "./components/Ecomp.vue";
import Fcomp from "./components/Fcomp.vue";
import Hcomp from "./components/Hcomp.vue";
import Icomp from "./components/Icomp.vue";
import Kcomp from "./components/Kcomp.vue";
import Lcomp from "./components/Lcomp.vue";
import Mcomp from "./components/Mcomp.vue";
import Ncomp from "./components/Ncomp.vue";
import Pcomp from "./components/Pcomp.vue";
import Qcomp from "./components/Qcomp.vue";
import Rcomp from "./components/Rcomp.vue";
import Scomp from "./components/Scomp.vue";
import Tcomp from "./components/Tcomp.vue";
import Ucomp from "./components/Ucomp.vue";

//import './public.css'

const comps: Record<string, Component> = {
  Acomp,
  Bcomp,
  Ccomp,
  Dcomp,
  Ecomp,
  Fcomp,
  Hcomp,
  Icomp,
  Kcomp,
  Lcomp,
  Mcomp,
  Ncomp,
  Pcomp,
  Qcomp,
  Rcomp,
  Scomp,
  Tcomp,
  Ucomp,
}

const currentComp = ref("Acomp")
</script>

<template>
  <div>
    <lay-tab v-model="currentComp" type="brief">
      <lay-tab-item v-for="(_, comp) in comps" :title="comp" :id="comp">
        <component :is="comps[currentComp]" />
      </lay-tab-item>
    </lay-tab>
  </div>
</template>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.grid-demo {
  padding: 10px;
  height: 30vh;
  border-radius: 2px;
  /* text-align: center; */
  border: 1px solid black;
}

.grid-demo>p {
  line-height: 50px;
}
</style>
