<template>
  <header :class="isTop ? '' : 'isTop'">
    <div class="header-wrap">
      <div class="top">
        <div class="logo">
          <nuxt-link to="/" :title="logoName">
            <img src="@/assets/images/logo.png" :alt="logoName" />
          </nuxt-link>
        </div>
        <div class="telephone">服务热线：400-0883655</div>
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
      isTop: true, // 初始化为true，表示在顶部
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  created() {},
  methods: {
    handleScroll() {
      this.isTop = window.scrollY === 0
    },
  },
}
</script>
<style lang="scss" scoped>
@import './header.scss';
</style>
