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
          <lay-date-picker v-model="endTime"></lay-date-picker>
        </div>
      </lay-col>

      <lay-col md="8" sm="12" xs="24">
        <div class="grid-demo">
          <p>lay-dropdown-sub-menu</p>
          <lay-dropdown>
            <lay-button type="primary">下拉菜单</lay-button>
            <template #content>
              <lay-dropdown-menu>
                <lay-dropdown-menu-item>
                  <template #prefix>
                    <lay-icon type="layui-icon-list"></lay-icon>
                  </template>
                  <template #default>选项一</template>
                </lay-dropdown-menu-item>
                <lay-dropdown-sub-menu>
                  <template #prefix>
                    <lay-icon type="layui-icon-set-sm"></lay-icon>
                  </template>
                  <template #default>选项二</template>
                  <template #content>
                    <lay-dropdown-menu-item disabled>子菜单一</lay-dropdown-menu-item>
                    <lay-dropdown-menu-item>子菜单二</lay-dropdown-menu-item>
                    <lay-dropdown-sub-menu>
                      <template #default>子菜单三</template>
                      <template #content>
                        <lay-dropdown-menu-item>菜单1</lay-dropdown-menu-item>
                        <lay-dropdown-menu-item>菜单2</lay-dropdown-menu-item>
                        <lay-dropdown-menu-item>菜单3</lay-dropdown-menu-item>
                      </template>
                    </lay-dropdown-sub-menu>
                    <lay-dropdown-sub-menu disabled>
                      <template #default>子菜单四</template>
                      <template #content>
                        <lay-dropdown-menu-item>菜单1</lay-dropdown-menu-item>
                        <lay-dropdown-menu-item>菜单2</lay-dropdown-menu-item>
                        <lay-dropdown-menu-item>菜单3</lay-dropdown-menu-item>
                      </template>
                    </lay-dropdown-sub-menu>
                  </template>
                </lay-dropdown-sub-menu>
                <lay-dropdown-menu-item>
                  <template #prefix>
                    <lay-icon type="layui-icon-share"></lay-icon>
                  </template>
                  <template #default>选项三</template>
                </lay-dropdown-menu-item>
              </lay-dropdown-menu>
            </template>
          </lay-dropdown>
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