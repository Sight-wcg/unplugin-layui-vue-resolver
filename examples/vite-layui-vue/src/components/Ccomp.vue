<template>
  <lay-container fluid>
    <lay-row space="10">
      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-container</p>
          <lay-container>
            <div style="background-color: aquamarine;">容器</div>
          </lay-container>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-card</p>
          <div class="card-container">
            <lay-card title="卡片标题">卡片内容</lay-card>
          </div>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-checkbox,被优化到 selectOption</p>

          <lay-form>
            <lay-checkbox name="like" skin="primary" v-model="checkedRef" label="1"></lay-checkbox>
            <lay-checkbox name="like" label="1" v-model="checkedRef">普通</lay-checkbox>
          </lay-form>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-color-picker</p>
          <lay-color-picker v-model="color"></lay-color-picker>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-collapse</p>
          <lay-collapse v-model="openKeys">
            <lay-collapse-item title="标题" id="1"> 内容 </lay-collapse-item>
            <lay-collapse-item title="标题" id="2"> 内容 </lay-collapse-item>
            <lay-collapse-item title="标题" id="3"> 内容 </lay-collapse-item>
          </lay-collapse>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-carousel</p>
          <lay-carousel v-model="active1">
            <lay-carousel-item id="1">
              <div
                style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#79C48C;">
                条目一</div>
            </lay-carousel-item>
            <lay-carousel-item id="2">
              <div
                style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#79C48C;">
                条目二</div>
            </lay-carousel-item>
          </lay-carousel>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-count-up</p>
          <h1 style="padding:20px 15px; font-family: sans-serif">
            <lay-count-up :startVal="0" :endVal="3600" :decimalPlaces="2"></lay-count-up>
          </h1>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-cascader</p>
          <lay-cascader :options="options" v-model="value" placeholder="点我试一试" style="width:250px">
          </lay-cascader>
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
const checkedRef = ref(true);
const color = ref("#009688");
const openKeys = ref(["1"])

const active1 = ref("1")

const value = ref(null)
const options = [
  {
    value: "Guide",
    label: "指南",
    children: [
      {
        value: "shejiyuanze",
        label: "设计原则",
        children: [
          {
            value: "yizhi",
            label: "一致",
          },
          {
            value: "fankui",
            label: "反馈",
          },
          {
            value: "xiaolv",
            label: "效率",
          },
          {
            value: "kekong",
            label: "可控",
          },
        ],
      },
      {
        value: "daohang",
        label: "导航",
        children: [
          {
            value: "cexiangdaohang",
            label: "侧向导航",
          },
          {
            value: "dingbudaohang",
            label: "顶部导航",
          },
        ],
      },
    ],
  },
  {
    value: "Components",
    label: "组件",
    children: [
      {
        value: "basic",
        label: "Basic",
        children: [
          {
            value: "layout",
            label: "Layout 布局",
          },
          {
            value: "color",
            label: "Color 色彩",
          },
          {
            value: "typography",
            label: "Typography 字体",
          },
          {
            value: "icon",
            label: "Icon 图标",
          },
          {
            value: "button",
            label: "Button 按钮",
          },
        ],
      },
      {
        value: "form",
        label: "Form",
        children: [
          {
            value: "radio",
            label: "Radio 单选框",
          },
          {
            value: "checkbox",
            label: "Checkbox 多选框",
          },
          {
            value: "input",
            label: "Input 输入框",
          },
          {
            value: "input-number",
            label: "InputNumber 计数器",
          },
          {
            value: "select",
            label: "Select 选择器",
          },
          {
            value: "cascader",
            label: "Cascader 级联选择器",
          },
          {
            value: "switch",
            label: "Switch 开关",
          },
          {
            value: "slider",
            label: "Slider 滑块",
          },
          {
            value: "time-picker",
            label: "TimePicker 时间选择器",
          },
          {
            value: "date-picker",
            label: "DatePicker 日期选择器",
          },
          {
            value: "datetime-picker",
            label: "DateTimePicker 日期时间选择器",
          },
          {
            value: "upload",
            label: "Upload 上传",
          },
          {
            value: "rate",
            label: "Rate 评分",
          },
          {
            value: "form",
            label: "Form 表单",
          },
        ],
      },
      {
        value: "data",
        label: "Data",
        children: [
          {
            value: "table",
            label: "Table 表格",
          },
          {
            value: "tag",
            label: "Tag 标签",
          },
          {
            value: "progress",
            label: "Progress 进度条",
          },
          {
            value: "tree",
            label: "Tree 树形控件",
          },
          {
            value: "pagination",
            label: "Pagination 分页",
          },
          {
            value: "badge",
            label: "Badge 标记",
          },
        ],
      },
      {
        value: "notice",
        label: "Notice",
        children: [
          {
            value: "alert",
            label: "Alert 警告",
          },
          {
            value: "loading",
            label: "Loading 加载",
          },
          {
            value: "message",
            label: "Message 消息提示",
          },
          {
            value: "message-box",
            label: "MessageBox 弹框",
          },
          {
            value: "notification",
            label: "Notification 通知",
          },
        ],
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "menu",
            label: "NavMenu 导航菜单",
          },
          {
            value: "tabs",
            label: "Tabs 标签页",
          },
          {
            value: "breadcrumb",
            label: "Breadcrumb 面包屑",
          },
          {
            value: "dropdown",
            label: "Dropdown 下拉菜单",
          },
          {
            value: "steps",
            label: "Steps 步骤条",
          },
        ],
      },
      {
        value: "others",
        label: "Others",
        children: [
          {
            value: "dialog",
            label: "Dialog 对话框",
          },
          {
            value: "tooltip",
            label: "Tooltip 文字提示",
          },
          {
            value: "popover",
            label: "Popover 弹出框",
          },
          {
            value: "card",
            label: "Card 卡片",
          },
          {
            value: "carousel",
            label: "Carousel 走马灯",
          },
          {
            value: "collapse",
            label: "Collapse 折叠面板",
          },
        ],
      },
    ],
  },
  {
    value: "Resource",
    label: "资源",
    children: [
      {
        value: "axure",
        label: "Axure Components",
      },
      {
        value: "sketch",
        label: "Sketch Templates",
      },
      {
        value: "jiaohu",
        label: "组件交互文档",
      },
    ],
  },
];
</script>

<style>
.card-container {
  background: whitesmoke;
  padding: 20px;
}
</style>