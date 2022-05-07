<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-tab</p>
          <lay-tab v-model="current">
            <lay-tab-item title="选项一" id="1">
              <div style="padding:20px">选项一</div>
            </lay-tab-item>
            <lay-tab-item title="选项二" id="2">
              <div style="padding:20px">选项二</div>
            </lay-tab-item>
          </lay-tab>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-transition</p>
          <lay-button @click="changeVisible">开始</lay-button>
          <lay-transition>
            <lay-card title="标题" v-if="visible">内容</lay-card>
          </lay-transition>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-textarea</p>
          <lay-textarea placeholder="请输入描述" v-model="data1"></lay-textarea>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-table</p>
          <lay-table :columns="columns1" :dataSource="dataSource1"></lay-table>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-timeline</p>
          <lay-timeline>
            <lay-timeline-item title="2021年，layui vue 里程碑版本 1.0 发布" simple></lay-timeline-item>
            <lay-timeline-item title="2017年，layui 里程碑版本 2.0 发布" simple></lay-timeline-item>
            <lay-timeline-item title="2016年，layui 首个版本发布" simple></lay-timeline-item>
            <lay-timeline-item title="2015年，layui 孵化" simple></lay-timeline-item>
          </lay-timeline>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-tree</p>
          <lay-tree :data="data" :onlyIconControl="iconCtrl" :showLine="showLine" :showCheckbox="showCheckbox"
            collapseTransition v-model:checkedKeys="checkedKeys" @node-click="handleClick" :disabled="disabled">
          </lay-tree>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-transfer, 引入 button,checkbox</p>
          <lay-transfer :dataSource="dataSource2"></lay-transfer>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-tooltip</p>
          <lay-tooltip content="假装这里有文字提示">
            <lay-button>tooltip</lay-button>
          </lay-tooltip>
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

const dataSource2 = [{ id: '1', title: '易大师' }, { id: '2', title: '战争之王' }]

const current = ref("1")

const visible = ref(true);

const changeVisible = () => {
  visible.value = !visible.value;
}

const data1 = ref("文本域")

const columns1 = [
  {
    title: "账户",
    width: "200px",
    key: "username"
  }, {
    title: "密码",
    width: "180px",
    key: "password"
  }, {
    title: "年龄",
    width: "180px",
    key: "age"
  }
]

const dataSource1 = [
  { username: "root", password: "root", age: "18" },
  { username: "woow", password: "woow", age: "20" }
]

// tree
const data = ref([{
  title: '一级1',
  id: 1,
  field: 'name1',
  checked: true,
  spread: true,
  children: [{
    title: '二级1-1 可允许跳转',
    id: 3,
    field: 'name11',
    href: 'https://www.layui.com/',
    children: [{
      title: '三级1-1-3',
      id: 23,
      field: '',
      children: [{
        title: '四级1-1-3-1',
        id: 24,
        field: '',
        children: [{
          title: '五级1-1-3-1-1',
          id: 30,
          field: ''
        },
        {
          title: '五级1-1-3-1-2',
          id: 31,
          field: ''
        }]
      }]
    },
    {
      title: '三级1-1-1',
      id: 7,
      field: '',
      children: [{
        title: '四级1-1-1-1 可允许跳转',
        id: 15,
        field: '',
        href: 'https://www.layui.com/doc/'
      }]
    },
    {
      title: '三级1-1-2',
      id: 8,
      field: '',
      children: [{
        title: '四级1-1-2-1',
        id: 32,
        field: ''
      }]
    }]
  },
  {
    title: '二级1-2',
    id: 4,
    spread: true,
    children: [{
      title: '三级1-2-1',
      id: 9,
      field: '',
      disabled: true
    },
    {
      title: '三级1-2-2',
      id: 10,
      field: ''
    }]
  },
  {
    title: '二级1-3',
    id: 20,
    field: '',
    children: [{
      title: '三级1-3-1',
      id: 21,
      field: ''
    },
    {
      title: '三级1-3-2',
      id: 22,
      field: ''
    }]
  }]
},
{
  title: '一级2',
  id: 2,
  field: '',
  spread: true,
  children: [{
    title: '二级2-1',
    id: 5,
    field: '',
    spread: true,
    children: [{
      title: '三级2-1-1',
      id: 11,
      field: ''
    },
    {
      title: '三级2-1-2',
      id: 12,
      field: ''
    }]
  },
  {
    title: '二级2-2',
    id: 6,
    field: '',
    children: [{
      title: '三级2-2-1',
      id: 13,
      field: ''
    },
    {
      title: '三级2-2-2',
      id: 14,
      field: '',
      disabled: true
    }]
  }]
},
{
  title: '一级3',
  id: 16,
  field: '',
  children: [{
    title: '二级3-1',
    id: 17,
    field: '',
    fixed: true,
    children: [{
      title: '三级3-1-1',
      id: 18,
      field: ''
    },
    {
      title: '三级3-1-2',
      id: 19,
      field: ''
    }]
  },
  {
    title: '二级3-2',
    id: 27,
    field: '',
    children: [{
      title: '三级3-2-1',
      id: 28,
      field: ''
    },
    {
      title: '三级3-2-2',
      id: 29,
      field: ''
    }]
  }]
}]);

const iconCtrl = ref(false);
const showLine = ref(true);
const clickNode = ref(null);
const showCheckbox = ref(true);
const checkedKeys = ref([1]);
const disabled = ref(false);

function handleClick(node) {
  clickNode.value = node
}
// tree结束
</script>