<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-backtop</p>
          <div class="wrapper" style="width:400px; height:400px;">
            <div id="scrollContent"
              style="overflow-y:auto; overflow-x:auto; width:400px; height:400px;background-color:whitesmoke;">
              <lay-panel v-for="(n, index) in 50" :key="n" style="margin:10px;padding:10px;">内容</lay-panel>
            </div>
            <lay-backtop target="#scrollContent" :showHeight="100" :bottom="30" position="absolute"></lay-backtop>
          </div>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-badge</p>
          <lay-badge theme="orange">橙</lay-badge>&nbsp;
          <lay-badge theme="green">绿</lay-badge>&nbsp;
          <lay-badge theme="cyan">青</lay-badge>&nbsp;
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-button-group</p>
          <lay-button-group>
            <lay-button type="primary">原始按钮</lay-button>
            <lay-button>默认按钮</lay-button>
          </lay-button-group>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-breadcrumb</p>
          <lay-breadcrumb>
            <lay-breadcrumb-item title="工作空间"></lay-breadcrumb-item>
            <lay-breadcrumb-item title="控制台"></lay-breadcrumb-item>
            <lay-breadcrumb-item title="访问量"></lay-breadcrumb-item>
          </lay-breadcrumb>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>组件名</p>
          <lay-badge type="dot"></lay-badge>&nbsp;
          <lay-badge type="dot" theme="orange"></lay-badge>&nbsp;
          <lay-badge type="dot" theme="green"></lay-badge>&nbsp;
          <lay-badge type="dot" ripple></lay-badge>&nbsp;
          <lay-badge type="dot" theme="orange" ripple></lay-badge>&nbsp;
          <lay-badge type="dot" theme="green" ripple></lay-badge>&nbsp;
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