<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-upload,button 需要显式引入</p>
          <lay-upload @done="getUploadFile" @choose="beginChoose">
            <template #preview>
              <div v-for="(item, index) in picList" :key="`demo1-pic-'${index}`">
                <img :src="item" />
              </div>
            </template>
          </lay-upload>
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
const picList = ref([]);
const filetoDataURL = (file, fn) => {
  const reader = new FileReader();
  reader.onloadend = function (e) {
    fn(e.target.result);
  };
  reader.readAsDataURL(file);
};
const getUploadFile = (files) => {
  if (Array.isArray(files) && files.length > 0) {
    files.forEach((file, index, array) => {
      filetoDataURL(file, (res) => {
        console.log(res);
        picList.value.push(res);
        console.log(picList.value);
      });
    });
  }
};
const beginChoose = (e) => {
  console.log("beginChoose", e);
};
</script>