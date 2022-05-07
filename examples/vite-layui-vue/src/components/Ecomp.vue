<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-empty</p>
          <lay-empty></lay-empty>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-exception</p>
          <lay-exception status="401" title="401" describe="暂无相关权限">
            <template #extra>
              <lay-button>刷新</lay-button>
              <lay-button type="primary">返回</lay-button>
            </template>
          </lay-exception>
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