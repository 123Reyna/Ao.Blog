<template>
    <div class="home">
        <article class="newhome" v-cloak >
            <!--lbox begin-->
            <div class="lbox" v-loading="pictLoading" element-loading-background="rgba(247, 245, 245, 0.7)" element-loading-text="Loading..." >
                <!-- <div class="ad whitebg"></div> -->
               
                <div  name="fade" mode="out-in"  class="whitebg bloglist">
                    <h2 class="htitle">最新项目地址
                        <!-- <router-link :to="'/Editor'" class="prev" style="float:right;" rel="prev">
                            Add My Study
                        </router-link> -->
                    </h2>
                    <ul>
                        <!--单图-->
                        <li v-for="i in list" :key="i.bID">
                            <h3 class="blogtitle">
                                <router-link :to="'/content/' + i.bID">
                                   <span  v-cloak>{{ i.btitle }}</span>
                                </router-link>
                            </h3>
                           <a :href="i.burl" target="_blank">链接地址</a>
                            <p class="blogtext" v-text="i.bRemark"></p>
                            <p class="bloginfo"><i class="avatar"></i>
                                <span  v-cloak>{{i.bcategory}}</span>
                                <span  v-cloak>{{formatCreateTime(i)}}</span>
                                <span  v-cloak>【<a href="/">{{i.bsubmitter}}</a>】</span>
                            </p>
                            <a href="/" class="viewmore">更多</a></li>

                    </ul>
                    <nav id="page-nav">
                        <router-link :to="'/?page=' + (page>1?page-1:1)" class="prev" rel="prev">
                            {{(page>1? "pre": "")}}
                        </router-link>
                        <router-link :to="'/?page=' + (page>=TotalCount? TotalCount: page+1)" class="next" rel="next">
                            {{(page>=TotalCount? "": "Next")}}
                        </router-link>
                    </nav>
                </div>
                <!--bloglist end-->
            </div>
            <div class="rbox">
                <div class="card">
                    <h2></h2>
                    <p>Nick：Ao.Reyna</p>
                    <p>Work：.net core &Angular</p>
                    <!-- <p>Add：Peking Haidian</p> -->
                    <p>Email：1282160859@qq.com</p>
                    <ul class="linkmore">
                        <li>
                            <a href="/" target="_blank" class="iconfont icon-zhuye" title="网站地址"></a>
                        </li>
                        <li>
                            <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=1282160859@qq.com" target="_blank" class="iconfont icon-youxiang" title="我的邮箱"></a>
                        </li>
                        <li>
                            <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1282160859&amp;site=qq&amp;menu=yes" target="_blank" class="iconfont icon---" title="QQ联系我"></a>
                        </li>
                        <li>
                            <a href="https://github.com/123Reyna" target="_blank" class="iconfont icon-weixin" title="github"></a>
                        </li>
                    </ul>
                    <!-- <p style="float: left;">过期时间：{{expDate}}</p> -->
                </div>
                <div class="whitebg notice">
                    <h2 class="htitle">网站公告</h2>
                    <img src="../assets/weixin.jpg"/>
                    <!-- <ul>
                        <li></li>
                        <li><a target="_blank"
                               href="https://www.cnblogs.com/laozhang-is-phi/p/9495618.html#autoid-1-0-0">系列教程一：.netcore+vue
                            前后端分离!</a></li>
                        <li><a target="_blank"
                               href="https://www.cnblogs.com/laozhang-is-phi/p/9806335.html#autoid-1-0-0">系列教程二：DDD领域驱动设计</a>
                        </li>
                        <li><a target="_blank"
                               href="https://www.cnblogs.com/laozhang-is-phi/p/10236645.html#autoid-2-1-0">系列教程三：Nuxt
                            TiBug系统</a></li>
                        <li><a target="_blank"
                               href="https://www.cnblogs.com/laozhang-is-phi/p/10438122.html#autoid-2-0-0">系列教程四：VueAdmin
                            后台管理系统</a></li>
                        <li><a target="_blank"
                               href="https://www.cnblogs.com/laozhang-is-phi/p/10483922.html#autoid-3-0-0">系列教程五：IdentityServer4
                            授权服务器</a></li>
                    </ul> -->
                </div>

            </div>
        </article>
        <footer>
            <div class="box">

                <div class="endnav">
                   <div id="footer" style="text-align: center;">
                      Copyright © 2021-2022 Ao.Reyna
                      <br>
                      <!-- <span id="poweredby">Powered by VUE 2.6.10 on Docker &amp; CentOS 7.6 By Jenkins</span> -->
                  </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
// @ is an alias to /src
import util from "../../util/date";

export default {
  name: "home",
  components: {},
  data() {
    return {
      page: 1,
      TotalCount: 1,
      pictLoading: true,
      isShow: true,
      list: [],
      expDate: ""
    };
  },
  created() {
    this.expDate = window.localStorage.getItem("USER_EXP") || "";
  },
  mounted() {
    this.getData();
    this.expDate = window.localStorage.getItem("USER_EXP") || "";
  },
  methods: {
    formatCreateTime: function(row) {
      return !row.bCreateTime || row.bCreateTime == ""
        ? ""
        : util.formatDate.format(new Date(row.bCreateTime), "yyyy-MM-dd");
    },
    getData() {
      var that = this;
      var urlPage = that.$route.query.page;
      if (urlPage) {
        that.page = urlPage;
      }
      this.$api.get("Blog", {},r => {
        this.list = r.data;
        // this.page = r.response.page;
        // this.TotalCount = r.response.pageCount;
         this.isShow = false;
        this.pictLoading = false;
      });
    }
  },
  watch: {
    $route(to) {
      this.list = [];
      this.isShow = true;
      this.page = to.query.page;
      this.getData();
    }
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.viewmore-row {
  float: right;
  background: #12b7de;
  color: #fff;
  border-radius: 3px;
  padding: 0px 10px;
  height: 30px;
}
.bg-purple {
  background: #eaeaea;
  -webkit-animation: loading 1s ease-in-out infinite;
  animation: loading 1s ease-in-out infinite;
}
@keyframes loading {
  0% {
    width: 90%;
  }
  50% {
    width: 100%;
  }
  to {
    width: 90%;
  }
}
[v-cloak] {
  display: none !important;
}
</style>
