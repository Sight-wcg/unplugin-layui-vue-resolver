<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-fullscreen</p>
          <lay-fullscreen v-slot="{ enter, exit, toggle, isFullscreen }">
            <lay-button type="normal" @click="enter()">进入全屏</lay-button>
            <lay-button type="normal" @click="exit()">退出</lay-button>
            <lay-button type="warm" @click="toggle()">切换: {{ isFullscreen ? "退出" : "进入全屏" }}</lay-button>
          </lay-fullscreen>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-field</p>
          <lay-field title="标题">内容</lay-field>
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
</script>