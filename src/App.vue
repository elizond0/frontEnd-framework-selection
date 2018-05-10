<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed"> 
                <Menu :active-name="activemenu" theme="dark" width="auto" :class="menuitemClasses">
                    <router-link to="/">
                        <MenuItem name="/">
                            <Icon type="ios-navigate"></Icon>
                            <span>首页</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/grid">
                        <MenuItem name="/grid">
                            <Icon type="ios-navigate"></Icon>
                            <span>栅格</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/form">
                        <MenuItem name="/form">
                            <Icon type="search"></Icon>
                            <span>表单</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/table">
                        <MenuItem name="/table">
                            <Icon type="search"></Icon>
                            <span>表格</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/others">
                        <MenuItem name="/others">
                            <Icon type="search"></Icon>
                            <span>其他</span>
                        </MenuItem>
                    </router-link>
                </Menu>
            </Sider>
            <Layout>
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="min-height: 600px">
                          <router-view></router-view>
                        </div>
                    </Card>
                </Content>
            </Layout> 
        </Layout>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
      activemenu: "/"
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    menuList() {
      let path = this.$route.matched[0].path;
      this.activemenu = path || "/";
      console.log(path);
    }
  },
  mounted() {
    this.menuList();
  }
};
</script>

<style scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>