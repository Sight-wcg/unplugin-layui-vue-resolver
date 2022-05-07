<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>组件名</p>
          <lay-menu v-model:selectedKey="selectedKey" v-model:openKeys="openKeys1">
            <lay-menu-item id="1">首页</lay-menu-item>
            <lay-menu-item id="2">首页</lay-menu-item>
            <lay-menu-item id="3">首页</lay-menu-item>
            <lay-sub-menu id="7">
              <template #title>
                首页
              </template>
              <lay-menu-item id="8">首页</lay-menu-item>
              <lay-menu-item id="9">首页</lay-menu-item>
              <lay-sub-menu title="菜单" id="10">
                <template #title>
                  首页
                </template>
                <lay-menu-item id="11">首页</lay-menu-item>
                <lay-menu-item id="12">首页</lay-menu-item>
                <lay-menu-item id="13">首页</lay-menu-item>
              </lay-sub-menu>
            </lay-sub-menu>
          </lay-menu>
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
const selectedKey = ref("5")
const openKeys1 = ref(["7"])  
</script>