import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as c,c as t,a as e,b as o,d as s,e as l}from"./app-107dc435.js";const d={},n={href:"http://hscarb.github.io/rocketmq/20220618-rocketmq-memory-store.html",target:"_blank",rel:"noopener noreferrer"},h=l('<h1 id="rocketmq-memory-store" tabindex="-1"><a class="header-anchor" href="#rocketmq-memory-store" aria-hidden="true">#</a> RocketMQ Memory Store</h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><h2 id="概要设计" tabindex="-1"><a class="header-anchor" href="#概要设计" aria-hidden="true">#</a> 概要设计</h2><h3 id="整体流程" tabindex="-1"><a class="header-anchor" href="#整体流程" aria-hidden="true">#</a> 整体流程</h3><figure><img src="https://scarb-images.oss-cn-hangzhou.aliyuncs.com/knowledge/2022/06/1655913092679.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>首先需要在 Broker 中创建 Topic，并指定为内存存储的 Topic。</p><ol><li>生产者发送生产请求</li><li><code>SendMessageProcessor</code> 处理生产请求 <ol><li>根据请求的 Topic 获取 <code>TopicConfig</code></li><li>判断该 Topic 是否是内存 Topic</li><li>如果不是，走原有 <code>DefaultMessageStore</code> 存储</li><li>如果是，走 <code>MemoryMessageStore</code> 存储</li></ol></li><li>消费者发送拉取消息请求</li><li><code>PullMessageProcessor</code> 处理拉取消息请求 <ol><li>根据请求的 Topic 获取 <code>TopicConfig</code></li><li>判断该 Topic 是否是内存 Topic</li><li>如果不是，走原有 <code>DefaultMessageStore</code> 取消息</li><li>如果是，走 <code>MemoryMessageStore</code> 取消息</li></ol></li></ol><h2 id="详细设计" tabindex="-1"><a class="header-anchor" href="#详细设计" aria-hidden="true">#</a> 详细设计</h2><h3 id="整体流程顺序图" tabindex="-1"><a class="header-anchor" href="#整体流程顺序图" aria-hidden="true">#</a> 整体流程顺序图</h3><figure><img src="https://scarb-images.oss-cn-hangzhou.aliyuncs.com/knowledge/2022/06/1655913092893.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="类设计" tabindex="-1"><a class="header-anchor" href="#类设计" aria-hidden="true">#</a> 类设计</h3><h4 id="memorymessagestore" tabindex="-1"><a class="header-anchor" href="#memorymessagestore" aria-hidden="true">#</a> MemoryMessageStore</h4><figure><img src="https://scarb-images.oss-cn-hangzhou.aliyuncs.com/knowledge/2022/06/1655913092916.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>为 <code>MemoryMessageStore</code> 设置一个存储阈值，为内存中存储的消息总大小，默认为可用内存的 75%</p></li><li><p><code>messageQueueMap</code>：一个 <code>HashMap</code>，Key 是 Topic 名称，Value 是 Disruptor 存储的 <code>MessageExtBrokerInner</code> 消息队列</p></li><li><p><code>messageTotalSize</code>：记录保存的消息总大小</p></li><li><p><code>putMessage</code>：将消息根据 Topic 放入指定队列，如果超过消息总大小阈值，则从该 Topic 中删除一条消息。如果该 Topic 为空，则删除一条保存最久的消息</p></li></ul><h4 id="topicconfig" tabindex="-1"><a class="header-anchor" href="#topicconfig" aria-hidden="true">#</a> TopicConfig</h4><ul><li><code>boolean memory</code>：是否是内存 Topic</li></ul><h4 id="brokercontroller" tabindex="-1"><a class="header-anchor" href="#brokercontroller" aria-hidden="true">#</a> BrokerController</h4><ul><li><code>memoryTopicEnable</code>：是否启动内存 Topic 功能，默认 false</li></ul><hr><p>欢迎关注公众号【消息中间件】（middleware-mq），更新消息中间件的源码解析和最新动态！</p><figure><img src="https://scarb-images.oss-cn-hangzhou.aliyuncs.com/img/202205170102971.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',21);function m(p,g){const a=r("ExternalLinkIcon");return c(),t("div",null,[e("p",null,[o("原文地址："),e("a",n,[o("http://hscarb.github.io/rocketmq/20220618-rocketmq-memory-store.html"),s(a)])]),h])}const b=i(d,[["render",m],["__file","20220618-rocketmq-memory-store.html.vue"]]);export{b as default};
