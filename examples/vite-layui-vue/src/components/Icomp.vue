<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-icon</p>
          <lay-icon type="layui-icon-face-smile" color="red"></lay-icon> &nbsp;
          <lay-icon type="layui-icon-face-smile" color="orange"></lay-icon> &nbsp;
          <lay-icon type="layui-icon-face-smile" color="green"></lay-icon> &nbsp;
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>xxx-xxx-icon</p>
          <AlignCenterIcon></AlignCenterIcon>
          <DiamondIcon></DiamondIcon>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-iput,i18问题</p>
          <lay-input v-model="data1"></lay-input>

        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-input-number,i18问题</p>
          <!-- <lay-input-number v-model="data1"></lay-input-number> -->
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-icon-picker,显式引入 dropdown</p>
          <lay-icon-picker type="layui-icon-face-smile"></lay-icon-picker>
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
const data1 = ref(1);
</script>