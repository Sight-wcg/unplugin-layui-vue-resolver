<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-line</p>
          <lay-line>🌲 🌲 🌲 🌲</lay-line><br>
          <lay-line contentPosition="left">left 默认</lay-line><br>
          <lay-line contentPosition="right" offset="8%">right 百分比</lay-line><br>
          <lay-line border-style="dashed" border-width="3px">自 定 义 宽 度 和 样 式</lay-line><br>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-layer</p>
          <lay-button @click="changeVisible1" type="primary">基础使用</lay-button>
          <lay-layer title="基础使用" v-model="visible1">
            内容
          </lay-layer>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>layer 函数</p>
          <button @click="layerClick">layer 函数</button>
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
const visible1 = ref(false)
const changeVisible1 = function () {
  visible1.value = !visible1.value
}

const layerClick = function(){
  layer.msg("hello")
}
</script>