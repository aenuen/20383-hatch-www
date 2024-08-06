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
      <div class="telephone">服务热线：400-0883655</div>
    </div>
  </header>
</template>
<script>
// api
// components
// data
import navAry from './navAry'
// filter
// function
// mixin
// plugins
// settings
export default {
  name: 'TheHeader',
  components: {},
  mixins: [],
  data() {
    return {
      logoName: '万川汇泽综合服务与产业孵化平台',
      navAry,
    }
  },
  created() {},
  methods: {
    openPage(url) {
      window.open(url, '_blank')
    },
  },
}
</script>
<style lang="scss" scoped>
@import './header.scss';
</style>
