<template>
  <header>
    <div class="header-wrap">
      <div class="logo">
        <nuxt-link to="/" :title="logoName"><img src="@/assets/images/logo.png" :alt="logoName" /></nuxt-link>
      </div>
      <nav>
        <ul class="main-menu">
          <li v-for="(item, index) in navAry" :key="index">
            <nuxt-link v-if="item.link.indexOf('http') === -1" :to="item.link">{{ item.name }}</nuxt-link>
            <a v-else :href="item.link" target="_blank">{{ item.name }}</a>
            <template v-if="item.son">
              <i class="el-icon-caret-bottom" style="color: #fff"></i>
              <ul class="dropdown-menu">
                <li v-for="(value, key) in item.son" :key="key">
                  <nuxt-link v-if="value.link.indexOf('http') === -1" :to="value.link">{{ value.name }}</nuxt-link>
                  <a v-else :href="value.link" target="_blank">{{ value.name }}</a>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
// api
// components
// data
// filter
// function
// mixin
// plugins
// settings
export default {
  name: 'ComponentsTheHeader',
  data() {
    return {
      logoName: '万川汇泽综合服务与产业孵化平台',
      navAry: [
        {
          name: '网站首页',
          link: '/',
        },
        {
          name: '金融产品',
          link: '',
          son: [
            { name: '票据贴现', link: 'http://www.163.com' },
            { name: '贷款', link: '' },
            { name: '保险', link: '' },
            { name: '融资担保', link: '' },
            { name: '商业保理', link: '' },
            { name: '综合业务', link: '' },
          ],
        },
        { name: '金融机构', link: '' },
        { name: '电子保函', link: '' },
        { name: '供应链金融', link: '' },
        { name: '电商平台', link: '' },
        {
          name: '政策指南',
          link: '',
          son: [
            { name: '新闻资讯', link: '' },
            { name: '政策法规', link: '' },
            { name: '机构动态', link: '' },
            { name: '公告台', link: '' },
          ],
        },
        {
          name: '关于我们',
          link: '',
          son: [
            { name: '公司简介', link: '' },
            { name: '反馈意见', link: '' },
            { name: '下载APP', link: '' },
            { name: '联系我们', link: '' },
          ],
        },
      ],
    }
  },
  methods: {
    openPage(url) {
      window.open(url, '_blank')
    },
  },
}
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 480px;
  background: url('~assets/images/banner.jpg') no-repeat center center;
  .header-wrap {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  }
  nav {
    ul,
    li {
      list-style: none;
    }
    .main-menu {
      display: flex;
      > li {
        padding-right: 20px;
        min-width: 100px;
        height: 35px;
        display: flex;
        a {
          display: block;
          color: #fff;
          line-height: 35px;
        }
      }
    }
    .dropdown-menu {
      display: none;
    }
  }
}
</style>
