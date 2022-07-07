<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-panel</p>
          <lay-panel>
            <div style="padding: 30px;">面板</div>
          </lay-panel>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>组件名</p>

        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-progress</p>
          <lay-progress percent="70"></lay-progress>
          <br>
          <lay-progress percent="60"></lay-progress>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-page,i18错误</p>
          <lay-page v-model="currentPage" :limit="limit" @limit="limit = $event" :total="total" :show-page="showPage">
          </lay-page>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-page-header</p>
          <lay-page-header content="详情页面"></lay-page-header>
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
const limit = ref(20)
const total = ref(100)
const showPage = ref(true)
const currentPage = ref(2);
</script>