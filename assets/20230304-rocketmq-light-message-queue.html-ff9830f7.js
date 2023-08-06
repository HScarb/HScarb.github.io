const e=JSON.parse('{"key":"v-589d225e","path":"/rocketmq/20230304-rocketmq-light-message-queue.html","title":"RocketMQ 轻量级队列 Light Message Queue（RIP-28）原理详解 & 源码解析","lang":"zh-CN","frontmatter":{"title":"RocketMQ 轻量级队列 Light Message Queue（RIP-28）原理详解 & 源码解析","author":"Scarb","date":"2023-03-04T00:00:00.000Z","description":"原文地址：http://hscarb.github.io/rocketmq/20230304-rocketmq-light-message-queue.html (http://hscarb.github.io/rocketmq/20230304-rocketmq-light-message-queue.html) 1. 背景 1.1 引入原因 在 R...","head":[["meta",{"property":"og:url","content":"https://hscarb.github.io/rocketmq/20230304-rocketmq-light-message-queue.html"}],["meta",{"property":"og:site_name","content":"金甲虫的博客"}],["meta",{"property":"og:title","content":"RocketMQ 轻量级队列 Light Message Queue（RIP-28）原理详解 & 源码解析"}],["meta",{"property":"og:description","content":"原文地址：http://hscarb.github.io/rocketmq/20230304-rocketmq-light-message-queue.html (http://hscarb.github.io/rocketmq/20230304-rocketmq-light-message-queue.html) 1. 背景 1.1 引入原因 在 R..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-06T13:09:36.000Z"}],["meta",{"property":"article:author","content":"Scarb"}],["meta",{"property":"article:published_time","content":"2023-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-06T13:09:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ 轻量级队列 Light Message Queue（RIP-28）原理详解 & 源码解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-06T13:09:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Scarb\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[{"level":3,"title":"1.1 引入原因","slug":"_1-1-引入原因","link":"#_1-1-引入原因","children":[]},{"level":3,"title":"1.2 使用方法","slug":"_1-2-使用方法","link":"#_1-2-使用方法","children":[]}]},{"level":2,"title":"2. 概要设计","slug":"_2-概要设计","link":"#_2-概要设计","children":[{"level":3,"title":"2.1 当前痛点","slug":"_2-1-当前痛点","link":"#_2-1-当前痛点","children":[]},{"level":3,"title":"2.1 实现思想","slug":"_2-1-实现思想","link":"#_2-1-实现思想","children":[]}]},{"level":2,"title":"3. 详细设计","slug":"_3-详细设计","link":"#_3-详细设计","children":[{"level":3,"title":"3.1 消息生产和消费","slug":"_3-1-消息生产和消费","link":"#_3-1-消息生产和消费","children":[]},{"level":3,"title":"3.2 CommitLog 分发到 LMQ","slug":"_3-2-commitlog-分发到-lmq","link":"#_3-2-commitlog-分发到-lmq","children":[]}]},{"level":2,"title":"4. 源码解析","slug":"_4-源码解析","link":"#_4-源码解析","children":[{"level":3,"title":"4.1 查询 LMQ 偏移量","slug":"_4-1-查询-lmq-偏移量","link":"#_4-1-查询-lmq-偏移量","children":[]},{"level":3,"title":"4.2 分发 LMQ","slug":"_4-2-分发-lmq","link":"#_4-2-分发-lmq","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1678108176000,"updatedTime":1678108176000,"contributors":[{"name":"Scarb","email":"jjhfen00@163.com","commits":1}]},"readingTime":{"minutes":8.34,"words":2501},"filePathRelative":"rocketmq/20230304-rocketmq-light-message-queue.md","localizedDate":"2023年3月4日","autoDesc":true,"excerpt":""}');export{e as data};