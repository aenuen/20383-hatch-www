<!--
 * @Author: abbott
 * @Date: 2024-08-06 15:04:28
 * @LastEditors: abbott
 * @LastEditTime: 2024-08-07 09:35:52
 * @Description: 
-->
<template>
  <footer>
    <div class="footerWrap">
      <el-row>
        <el-col :span="8">
          <div class="footerLeft">
            <div class="TitleApp">App下载</div>
            <div class="footerIcon">
              <div class="commonIcon apple">
                <div class="text">App Store</div>
                <div class="qrcShow">
                  <img src="@/assets/images/qrc/app.png" />
                  <div class="qrcArrow"></div>
                </div>
              </div>
              <div class="commonIcon android">
                <div class="text">Android</div>
                <div class="qrcShow">
                  <img src="@/assets/images/qrc/app.png" />
                  <div class="qrcArrow"></div>
                </div>
              </div>
            </div>
            <div class="footerChat">
              <div class="WeChatIcon">
                <div class="icon"></div>
                <div class="qrcShow">
                  <img src="@/assets/images/qrc/app.png" />
                  <div class="qrcArrow"></div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="footerRight">
            <div class="TitleEarth">友情链接</div>
            <div class="footerLink">
              <div class="linkItem">
                <div class="title">金融机构网站</div>
                <ul>
                  <li><a href="http://www.ccb.com/" target="_blank" title="中国建设银行">中国建设银行</a></li>
                  <li><a href="http://www.abchina.com/" target="_blank" title="中国农业银行">中国农业银行</a></li>
                  <li><a href="https://www.boc.cn/" target="_blank" title="中国银行">中国银行</a></li>
                  <li><a href="http://www.icbc.com.cn/" target="_blank" title="中国工商银行">中国工商银行</a></li>
                  <li><a href="https://ebank.pingan.com.cn/" target="_blank" title="平安银行">平安银行</a></li>
                </ul>
              </div>
              <div class="linkItem">
                <div class="title">政府机构网站</div>
                <ul>
                  <li><a href="http://www.fujian.gov.cn/" target="_blank" title="福建省人民政府">福建省人民政府</a></li>
                  <li><a href="http://www.np.gov.cn/" target="_blank" title="南平市人民政府">南平市人民政府</a></li>
                  <li><a href="http://fujian.chinatax.gov.cn/npsswj/" target="_blank" title="国家税务总局南平市税务局">国家税务总局南平市税务局</a></li>
                </ul>
              </div>
              <div class="linkItem">
                <div class="title">金融类网站</div>
                <ul>
                  <li><a href="http://www.financeun.com/" target="_blank" title="中国金融网">中国金融网</a></li>
                  <li><a href="http://www.pbc.gov.cn/" target="_blank" title="中国人民银行">中国人民银行</a></li>
                  <li><a href="http://www.cbirc.gov.cn/" target="_blank" title="中国银行保险监督管理委员会">中国银行保险监督管理委员会</a></li>
                  <li><a href="http://www.fjcdi.gov.cn/" target="_blank" title="福建省监察委员会">福建省监察委员会</a></li>
                </ul>
              </div>
            </div>
            <div class="footerCopy">
              <div>技术支持：福建万川信息科技股份有限公司</div>
              <div>ICP备案：<a href="https://beian.miit.gov.cn" target="_blank">闽ICP备19019555号</a></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </footer>
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
  name: 'TheFooter',
  components: {},
  mixin: [],
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
@import './footer.scss';
</style>
