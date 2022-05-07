<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-skeleton,引入 lay-icon</p>
          <lay-skeleton :rows="4" :loading="loading" animated>
            <p style="margin-bottom: 18px">1 layui-vue , 基 于 vue 3.0 的 桌 面 端 组 件 库 , layui 的 另 一 种 呈 现 方 式</p>
            <p style="margin-bottom: 18px">2 layui-vue , 基 于 vue 3.0 的 桌 面 端 组 件 库 , layui 的 另 一 种 呈 现 方 式</p>
            <p style="margin-bottom: 18px">3 layui-vue , 基 于 vue 3.0 的 桌 面 端 组 件 库 , layui 的 另 一 种 呈 现 方 式</p>
            <p style="margin-bottom: 18px">4 layui-vue , 基 于 vue 3.0 的 桌 面 端 组 件 库 , layui 的 另 一 种 呈 现 方 式</p>
          </lay-skeleton>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-switch</p>
          <lay-switch v-model="switchRef"></lay-switch>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-select, bdage需要显式引入</p>
          <lay-select v-model="selectRef">
            <lay-select-option value="1" label="学习"></lay-select-option>
            <lay-select-option value="2" label="编码"></lay-select-option>
            <lay-select-option value="3" label="运动"></lay-select-option>
          </lay-select>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-slider, 引入 tooltip</p>
          <lay-slider :max="88" v-model="sliderRef" :disabled="false"></lay-slider>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-step, 显式引入 icon</p>
          <div>
            <lay-step :active="active">
              <lay-step-item></lay-step-item>
              <lay-step-item></lay-step-item>
              <lay-step-item></lay-step-item>
              <lay-step-item></lay-step-item>
            </lay-step>
            <div style="margin-top: 10px">
              <lay-button size="xs" @click="previous">上一步</lay-button>
              <lay-button size="xs" @click="nexts">下一步</lay-button>
            </div>
          </div>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-split-panel</p>
          <lay-split-panel style="height: 300px">
            <lay-split-panel-item>A</lay-split-panel-item>
            <lay-split-panel-item>B</lay-split-panel-item>
            <lay-split-panel-item>C</lay-split-panel-item>
          </lay-split-panel>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-scroll</p>
          <lay-scroll height="200px" style="background-color:whitesmoke;">
            <lay-panel v-for="(n, index) in 50" :key="n" style="margin:10px;padding:10px;">内容</lay-panel>
          </lay-scroll>
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
const loading = ref(true)
const switchRef = ref(true);
const selectRef = ref(null);
const sliderRef = ref(50)

const active = ref(-1);
const nexts = () => {
  if (active.value++ >= 3) active.value = 0
};
const previous = () => {
  if (active.value-- === 0) active.value = 0
};
</script>