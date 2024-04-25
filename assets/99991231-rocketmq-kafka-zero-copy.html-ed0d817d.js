import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as l,c,a as e,b as r,d as t,e as i}from"./app-e3bb0afd.js";const h={},s={href:"http://hscarb.github.io/rocketmq/99991231-rocketmq-kafka-zero-copy.html",target:"_blank",rel:"noopener noreferrer"},_=i('<h1 id="rocketmq-与-kafka-对零拷贝的使用-源码解析" tabindex="-1"><a class="header-anchor" href="#rocketmq-与-kafka-对零拷贝的使用-源码解析" aria-hidden="true">#</a> RocketMQ 与 Kafka 对零拷贝的使用 源码解析</h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><h3 id="用户态和内核态" tabindex="-1"><a class="header-anchor" href="#用户态和内核态" aria-hidden="true">#</a> 用户态和内核态</h3><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',4),d={href:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E9%87%8D%E5%AD%A6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F-%E5%AE%8C/14%20%20%E7%94%A8%E6%88%B7%E6%80%81%E5%92%8C%E5%86%85%E6%A0%B8%E6%80%81%EF%BC%9A%E7%94%A8%E6%88%B7%E6%80%81%E7%BA%BF%E7%A8%8B%E5%92%8C%E5%86%85%E6%A0%B8%E6%80%81%E7%BA%BF%E7%A8%8B%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%EF%BC%9F.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://tech.meituan.com/2017/05/19/about-desk-io.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://xiaolincoding.com/os/8_network_system/zero_copy.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/spongecaptain/SimpleClearFileIO",target:"_blank",rel:"noopener noreferrer"},k={href:"https://time.geekbang.org/column/article/74633",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/cobbliu/archive/2012/03/17/2403973.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://lday.me/2019/09/09/0023_linux_page_cache_and_buffer_cache/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://juejin.cn/post/6854573219157196807",target:"_blank",rel:"noopener noreferrer"},b={href:"https://time.geekbang.org/column/article/541813?cid=100114001",target:"_blank",rel:"noopener noreferrer"},B={href:"https://strikefreedom.top/archives/linux-io-and-zero-copy",target:"_blank",rel:"noopener noreferrer"},x=e("hr",null,null,-1),A=e("p",null,"欢迎关注公众号【消息中间件】（middleware-mq），更新消息中间件的源码解析和最新动态！",-1),C=e("figure",null,[e("img",{src:"https://scarb-images.oss-cn-hangzhou.aliyuncs.com/img/202205170102971.jpg",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function y(q,F){const o=n("ExternalLinkIcon");return l(),c("div",null,[e("p",null,[r("原文地址："),e("a",s,[r("http://hscarb.github.io/rocketmq/99991231-rocketmq-kafka-zero-copy.html"),t(o)])]),_,e("ul",null,[e("li",null,[e("a",d,[r("用户态和内核态：用户态线程和内核态线程有什么区别？"),t(o)])]),e("li",null,[e("a",f,[r("磁盘I/O那些事 - 美团技术团队"),t(o)])]),e("li",null,[e("a",p,[r("什么是零拷贝？ - 小林coding"),t(o)])]),e("li",null,[e("a",u,[r("文件 I/O 简明概述 - Spongecaptain"),t(o)])]),e("li",null,[e("a",k,[r("怎么理解内存中的Buffer和Cache？ - 倪朋飞"),t(o)])]),e("li",null,[e("a",m,[r("linux中普通文件和块设备文件的区别 - CobbLiu"),t(o)])]),e("li",null,[e("a",E,[r("Linux内核Page Cache和Buffer Cache关系及演化历史 - lday"),t(o)])]),e("li",null,[e("a",g,[r("Kafka和RocketMQ底层存储之那些你不知道的事 - yes的练级攻略"),t(o)])]),e("li",null,[e("a",b,[r("性能之道：RocketMQ与Kafka高性能设计对比 - 丁威"),t(o)])]),e("li",null,[e("a",B,[r("Linux I/O 原理和 Zero-copy 技术全面揭秘"),t(o)])])]),x,A,C])}const v=a(h,[["render",y],["__file","99991231-rocketmq-kafka-zero-copy.html.vue"]]);export{v as default};