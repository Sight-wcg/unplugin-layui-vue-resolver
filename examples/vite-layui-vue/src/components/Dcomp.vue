<template>

  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-dropdown</p>
          <lay-dropdown>
            <lay-button type="primary">下拉菜单</lay-button>
            <template #content>
              <lay-dropdown-menu>
                <lay-dropdown-menu-item>选项一</lay-dropdown-menu-item>
                <lay-dropdown-menu-item>选项二</lay-dropdown-menu-item>
                <lay-dropdown-menu-item>选项三</lay-dropdown-menu-item>
              </lay-dropdown-menu>
            </template>
          </lay-dropdown>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-date-picker, input i18问题</p>
          选择的时间：{{ endTime }}
          <!-- <lay-date-picker v-model="endTime"></lay-date-picker> -->
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
const endTime = ref("2022-03-14 17:35:00");
</script>