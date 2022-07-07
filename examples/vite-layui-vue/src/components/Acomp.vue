<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-avatar</p>
          <lay-avatar-list>
            <lay-avatar src="../assets/logo.png" radius></lay-avatar>
            <lay-avatar src="../assets/logo.png" radius></lay-avatar>
            <lay-avatar src="../assets/logo.png" radius></lay-avatar>
            <lay-avatar src="../assets/logo.png" radius></lay-avatar>
          </lay-avatar-list>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>组件名</p>
          <div style="width:100%;height:100px">
            <lay-affix :target="target" :offset="0" position="bottom" v-if="target">
              <lay-button type="normal">固定在最底部</lay-button>
            </lay-affix>
          </div>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>组件名</p>

        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>组件名</p>

        </div>
      </lay-col>
    </lay-row>
  </lay-container>
</template>

<script setup lang="ts">
const target = ref()
nextTick(() => {
  target.value = document.querySelector("body");
})
</script>