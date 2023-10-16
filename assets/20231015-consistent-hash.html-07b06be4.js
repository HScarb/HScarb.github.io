const t=JSON.parse('{"key":"v-78f525a3","path":"/other/20231015-consistent-hash.html","title":"一致性哈希 原理和实现","lang":"zh-CN","frontmatter":{"title":"一致性哈希 原理和实现","author":"Scarb","date":"2023-10-15T00:00:00.000Z","description":"原文地址：http://hscarb.github.io/other/20231015-consistent-hash.html (http://hscarb.github.io/other/20231015-consistent-hash.html) 1. 背景 1.1 使用场景 在分布式系统（数据分片）中，为了提高系统容量，就会将数据水平切分到不同...","head":[["meta",{"property":"og:url","content":"https://hscarb.github.io/other/20231015-consistent-hash.html"}],["meta",{"property":"og:site_name","content":"金甲虫的博客"}],["meta",{"property":"og:title","content":"一致性哈希 原理和实现"}],["meta",{"property":"og:description","content":"原文地址：http://hscarb.github.io/other/20231015-consistent-hash.html (http://hscarb.github.io/other/20231015-consistent-hash.html) 1. 背景 1.1 使用场景 在分布式系统（数据分片）中，为了提高系统容量，就会将数据水平切分到不同..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T17:11:58.000Z"}],["meta",{"property":"article:author","content":"Scarb"}],["meta",{"property":"article:published_time","content":"2023-10-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-11T17:11:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一致性哈希 原理和实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-11T17:11:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Scarb\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[{"level":3,"title":"1.1 使用场景","slug":"_1-1-使用场景","link":"#_1-1-使用场景","children":[]},{"level":3,"title":"1.1 什么是一致性哈希算法","slug":"_1-1-什么是一致性哈希算法","link":"#_1-1-什么是一致性哈希算法","children":[]}]},{"level":2,"title":"2. 概要设计","slug":"_2-概要设计","link":"#_2-概要设计","children":[{"level":3,"title":"2.1 哈希环","slug":"_2-1-哈希环","link":"#_2-1-哈希环","children":[]},{"level":3,"title":"2.2 不均衡问题和虚拟节点","slug":"_2-2-不均衡问题和虚拟节点","link":"#_2-2-不均衡问题和虚拟节点","children":[]}]},{"level":2,"title":"3. 详细设计","slug":"_3-详细设计","link":"#_3-详细设计","children":[{"level":3,"title":"3.1 哈希算法","slug":"_3-1-哈希算法","link":"#_3-1-哈希算法","children":[]},{"level":3,"title":"3.2 哈希环","slug":"_3-2-哈希环","link":"#_3-2-哈希环","children":[]},{"level":3,"title":"3.3 添加和删除节点","slug":"_3-3-添加和删除节点","link":"#_3-3-添加和删除节点","children":[]},{"level":3,"title":"3.4 路由","slug":"_3-4-路由","link":"#_3-4-路由","children":[]}]},{"level":2,"title":"4. Java 实现","slug":"_4-java-实现","link":"#_4-java-实现","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1697044318000,"updatedTime":1697044318000,"contributors":[{"name":"ScarbWin","email":"jjhfen00@163.com","commits":1}]},"readingTime":{"minutes":7.05,"words":2114},"filePathRelative":"other/20231015-consistent-hash.md","localizedDate":"2023年10月15日","autoDesc":true,"excerpt":""}');export{t as data};
