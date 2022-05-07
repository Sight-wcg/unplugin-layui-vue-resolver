<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-ripple</p>
          <lay-ripple trigger="mouseenter">
            <lay-button>mouseenter</lay-button>
          </lay-ripple>
          <p>always:</p>
          <lay-ripple type="out" trigger="always" borderRadius="50%" color="#009688">
            <div style="border-radius:50%;background-color:#009688;width:8px;height:8px"></div>
          </lay-ripple>
          <p>mouseenter:</p>
          <lay-ripple type="out" trigger="mouseenter" borderRadius="50%" color="#009688" spread-width="50px">
            <div style="border-radius:50%;background-color:#009688;width:20px;height:20px"></div>
          </lay-ripple><br>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-radio</p>
          <lay-form>
            <lay-radio v-model="selected1" name="action" label="1">写作</lay-radio>
            <lay-radio v-model="selected1" name="action" label="2">画画</lay-radio>
            <lay-radio v-model="selected1" name="action" label="3">运动</lay-radio>
          </lay-form>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-rate</p>
          <lay-rate v-model="rateRef"></lay-rate>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-result</p>
          <lay-result></lay-result>
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
const selected1 = ref("1");
const rateRef = ref(0);
</script>