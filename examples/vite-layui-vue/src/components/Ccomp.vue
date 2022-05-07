<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-container</p>
          <lay-container>
            <div style="background-color: aquamarine;">容器</div>
          </lay-container>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-card</p>
          <div class="card-container">
            <lay-card title="卡片标题">卡片内容</lay-card>
          </div>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-checkbox,被优化到 selectOption</p>

          <lay-form>
            <lay-checkbox name="like" skin="primary" v-model="checkedRef" label="1"></lay-checkbox>
            <lay-checkbox name="like" label="1" v-model="checkedRef">普通</lay-checkbox>
          </lay-form>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-color-picker</p>
          <lay-color-picker v-model="color"></lay-color-picker>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-collapse</p>
          <lay-collapse v-model="openKeys">
            <lay-collapse-item title="标题" id="1"> 内容 </lay-collapse-item>
            <lay-collapse-item title="标题" id="2"> 内容 </lay-collapse-item>
            <lay-collapse-item title="标题" id="3"> 内容 </lay-collapse-item>
          </lay-collapse>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-carousel</p>
          <lay-carousel v-model="active1">
            <lay-carousel-item id="1">
              <div
                style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#79C48C;">
                条目一</div>
            </lay-carousel-item>
            <lay-carousel-item id="2">
              <div
                style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#79C48C;">
                条目二</div>
            </lay-carousel-item>
          </lay-carousel>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-count-up</p>
          <h1 style="padding:20px 15px; font-family: sans-serif">
            <lay-count-up :startVal="0" :endVal="3600" :decimalPlaces="2"></lay-count-up>
          </h1>
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
const checkedRef = ref(true);
const color = ref("#009688");
const openKeys = ref(["1"])

const active1 = ref("1")
</script>

<style>
.card-container {
  background: whitesmoke;
  padding: 20px;
}
</style>