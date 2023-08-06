const t=JSON.parse('{"key":"v-715e41b9","path":"/rocketmq/99991231-rocketmq-timer.html","title":"Rocketmq 5.0 任意时间定时消息（RIP-43） 原理详解 & 源码解析","lang":"zh-CN","frontmatter":{"title":"Rocketmq 5.0 任意时间定时消息（RIP-43） 原理详解 & 源码解析","author":"Scarb","date":"9999-12-31T00:00:00.000Z","description":"原文地址：http://hscarb.github.io/rocketmq/99991231-rocketmq-timer.html (http://hscarb.github.io/rocketmq/99991231-rocketmq-timer.html) 1. 背景 1.1 概念和应用场景 延迟消息（定时消息）即消息到达消息队列服务端后不会马上投...","head":[["meta",{"property":"og:url","content":"https://hscarb.github.io/rocketmq/99991231-rocketmq-timer.html"}],["meta",{"property":"og:site_name","content":"金甲虫的博客"}],["meta",{"property":"og:title","content":"Rocketmq 5.0 任意时间定时消息（RIP-43） 原理详解 & 源码解析"}],["meta",{"property":"og:description","content":"原文地址：http://hscarb.github.io/rocketmq/99991231-rocketmq-timer.html (http://hscarb.github.io/rocketmq/99991231-rocketmq-timer.html) 1. 背景 1.1 概念和应用场景 延迟消息（定时消息）即消息到达消息队列服务端后不会马上投..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-17T16:05:07.000Z"}],["meta",{"property":"article:author","content":"Scarb"}],["meta",{"property":"article:published_time","content":"9999-12-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-17T16:05:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rocketmq 5.0 任意时间定时消息（RIP-43） 原理详解 & 源码解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"9999-12-31T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-17T16:05:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Scarb\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[{"level":3,"title":"1.1 概念和应用场景","slug":"_1-1-概念和应用场景","link":"#_1-1-概念和应用场景","children":[]},{"level":3,"title":"1.2 延迟消息与定时消息","slug":"_1-2-延迟消息与定时消息","link":"#_1-2-延迟消息与定时消息","children":[]},{"level":3,"title":"1.2 任意时间定时消息的使用","slug":"_1-2-任意时间定时消息的使用","link":"#_1-2-任意时间定时消息的使用","children":[]}]},{"level":2,"title":"2. 概述","slug":"_2-概述","link":"#_2-概述","children":[{"level":3,"title":"2.1 任意时间定时消息的难点","slug":"_2-1-任意时间定时消息的难点","link":"#_2-1-任意时间定时消息的难点","children":[]},{"level":3,"title":"2.2 设计思路","slug":"_2-2-设计思路","link":"#_2-2-设计思路","children":[]}]},{"level":2,"title":"3.","slug":"_3","link":"#_3","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1689609907000,"updatedTime":1689609907000,"contributors":[{"name":"ScarbWin","email":"jjhfen00@163.com","commits":1}]},"readingTime":{"minutes":5.83,"words":1748},"filePathRelative":"rocketmq/99991231-rocketmq-timer.md","localizedDate":"9999年12月31日","autoDesc":true,"excerpt":""}');export{t as data};