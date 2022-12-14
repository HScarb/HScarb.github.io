(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{630:function(e,_,r){"use strict";r.r(_);var t=r(17),v=Object(t.a)({},(function(){var e=this,_=e.$createElement,r=e._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"rocketmq-消费者-1-概念和消费流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-消费者-1-概念和消费流程"}},[e._v("#")]),e._v(" RocketMQ 消费者（1）概念和消费流程")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#rocketmq-消费者-1-概念和消费流程"}},[e._v("RocketMQ 消费者（1）概念和消费流程")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-背景"}},[e._v("1. 背景")])]),r("li",[r("a",{attrs:{href:"#_2-概念简述"}},[e._v("2. 概念简述")]),r("ul",[r("li",[r("a",{attrs:{href:"#_2-1-消费组概念与消费模式"}},[e._v("2.1 消费组概念与消费模式")]),r("ul",[r("li",[r("a",{attrs:{href:"#_2-1-1-消费组"}},[e._v("2.1.1 消费组")])]),r("li",[r("a",{attrs:{href:"#_2-1-2-广播消费模式-broadcasting"}},[e._v("2.1.2 广播消费模式（BROADCASTING）")])]),r("li",[r("a",{attrs:{href:"#_2-1-3-集群消费模式-clustering"}},[e._v("2.1.3 集群消费模式（CLUSTERING）")])])])]),r("li",[r("a",{attrs:{href:"#_2-2-消费者拉取消息模式"}},[e._v("2.2 消费者拉取消息模式")]),r("ul",[r("li",[r("a",{attrs:{href:"#_2-2-1-pull"}},[e._v("2.2.1 Pull")])]),r("li",[r("a",{attrs:{href:"#_2-2-2-push"}},[e._v("2.2.2 Push")])]),r("li",[r("a",{attrs:{href:"#_2-2-3-pop"}},[e._v("2.2.3 POP")])])])]),r("li",[r("a",{attrs:{href:"#_2-3-队列负载机制与重平衡"}},[e._v("2.3 队列负载机制与重平衡")]),r("ul",[r("li",[r("a",{attrs:{href:"#_2-3-1-队列负载机制"}},[e._v("2.3.1 队列负载机制")])]),r("li",[r("a",{attrs:{href:"#_2-3-2-重平衡-rebalance"}},[e._v("2.3.2 重平衡（Rebalance）")])])])]),r("li",[r("a",{attrs:{href:"#_2-4-消费端高可靠"}},[e._v("2.4 消费端高可靠")]),r("ul",[r("li",[r("a",{attrs:{href:"#_2-4-1-重试-死信机制"}},[e._v("2.4.1 重试-死信机制")])]),r("li",[r("a",{attrs:{href:"#_2-4-2-队列负载机制与重平衡"}},[e._v("2.4.2 队列负载机制与重平衡")])])])]),r("li",[r("a",{attrs:{href:"#_2-5-并发消费与顺序消费"}},[e._v("2.5 并发消费与顺序消费")])]),r("li",[r("a",{attrs:{href:"#_2-6-消费进度保存和提交"}},[e._v("2.6 消费进度保存和提交")])])])]),r("li",[r("a",{attrs:{href:"#_3-消费流程"}},[e._v("3. 消费流程")])]),r("li",[r("a",{attrs:{href:"#参考资料"}},[e._v("参考资料")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"_1-背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[e._v("#")]),e._v(" 1. 背景")]),e._v(" "),r("p",[e._v("RocketMQ 的消费可以算是 RocketMQ 的业务逻辑中最复杂的一块。这里面涉及到许多消费模式和特性。本想一篇文章写完，写到后面发现消费涉及到的内容太多，于是决定分多篇来写。本文作为消费系列的第一篇，主要讲述 RocketMQ 消费涉及到的模式和特性，也会概括性地讲一下消费流程。")]),e._v(" "),r("p",[e._v("我将 RocketMQ 的消费流程大致分成 4 个步骤")]),e._v(" "),r("ol",[r("li",[e._v("重平衡")]),e._v(" "),r("li",[e._v("消费者拉取消息")]),e._v(" "),r("li",[e._v("Broker 接收拉取请求后从存储中查询消息并返回")]),e._v(" "),r("li",[e._v("消费者消费消息")])]),e._v(" "),r("p",[e._v("每个步骤都会用一篇文章来讲解。")]),e._v(" "),r("p",[e._v("先了解一下 RocketMQ 消费涉及到地概念")]),e._v(" "),r("h2",{attrs:{id:"_2-概念简述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-概念简述"}},[e._v("#")]),e._v(" 2. 概念简述")]),e._v(" "),r("h3",{attrs:{id:"_2-1-消费组概念与消费模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-消费组概念与消费模式"}},[e._v("#")]),e._v(" 2.1 消费组概念与消费模式")]),e._v(" "),r("p",[e._v("和大多数消息队列一样，RocketMQ 支持两种消息模式：集群消费（Clustering）和广播消费（Broadcasting）。在了解它们之前，需要先引入消费组的概念。")]),e._v(" "),r("h4",{attrs:{id:"_2-1-1-消费组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-消费组"}},[e._v("#")]),e._v(" 2.1.1 消费组")]),e._v(" "),r("p",[e._v("一个消费者实例即是一个消费者进程，负责消费消息。单个消费者速度有限，在实际使用中通常会采用多个消费者共同消费同样的 Topic 以加快消费速度。这多个消费同样 Topic 的消费者组成了消费者组。")]),e._v(" "),r("p",[e._v("消费组是一个逻辑概念，它包含了多个同一类的消费者实例，通常这些消费者都消费同一类消息（都消费相同的 Topic）且消费逻辑一致。")]),e._v(" "),r("p",[e._v("消费组的引入是用来在消费消息时更好地进行负载均衡和容错。")]),e._v(" "),r("h4",{attrs:{id:"_2-1-2-广播消费模式-broadcasting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-广播消费模式-broadcasting"}},[e._v("#")]),e._v(" 2.1.2 广播消费模式（BROADCASTING）")]),e._v(" "),r("p",[e._v("广播消费模式即全部的消息会广播分发到所有的消费者实例，每个消费者实例会收到全量的消息（即便消费组中有多个消费者都订阅同一 Topic）。")]),e._v(" "),r("p",[e._v("如下图所示，生产者发送了 5 条消息，每个消费组中的消费者都收到全部的 5 条消息。")]),e._v(" "),r("p",[e._v("广播模式使用较少，适合各个消费者都需要通知的场景，如刷新应用中的缓存。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://scarb-images.oss-cn-hangzhou.aliyuncs.com/knowledge/2022/07/1658682241264.png",alt:"广播消费模式"}})]),e._v(" "),r("blockquote",[r("p",[e._v("注意事项：")]),e._v(" "),r("ol",[r("li",[e._v("广播消费模式下不支持 "),r("strong",[e._v("顺序消息")]),e._v("。")]),e._v(" "),r("li",[e._v("广播消费模式下不支持 "),r("strong",[e._v("重置消费位点")]),e._v("。")]),e._v(" "),r("li",[e._v("每条消息都需要"),r("strong",[e._v("被相同订阅逻辑的多台机器处理")]),e._v("。")]),e._v(" "),r("li",[r("strong",[e._v("消费进度在客户端维护")]),e._v("，出现重复消费的概率稍大于集群模式。如果消费进度文件丢失，存在消息丢失的可能。")]),e._v(" "),r("li",[e._v("广播模式下，消息队列 RocketMQ 版保证每条消息至少被每台客户端消费一次，但是并"),r("strong",[e._v("不会重投消费失败的消息")]),e._v("，因此业务方需要关注消费失败的情况。")]),e._v(" "),r("li",[e._v("广播模式下，"),r("strong",[e._v("客户端每一次重启都会从最新消息消费")]),e._v("。客户端在被停止期间发送至服务端的消息将会被自动跳过，请谨慎选择。")]),e._v(" "),r("li",[e._v("广播模式下，每条消息都会被大量的客户端重复处理，因此推荐尽可能使用集群模式。")]),e._v(" "),r("li",[e._v("广播模式下服务端不维护消费进度，所以消息队列 RocketMQ 版控制台不支持消息堆积查询、消息堆积报警和订阅关系查询功能。")])])]),e._v(" "),r("h4",{attrs:{id:"_2-1-3-集群消费模式-clustering"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-集群消费模式-clustering"}},[e._v("#")]),e._v(" 2.1.3 集群消费模式（CLUSTERING）")]),e._v(" "),r("p",[e._v("集群消费模式下，"),r("strong",[e._v("同一 Topic 下的一条消息只会被同一消费组中的一个消费者消费")]),e._v("。也就是说，消息被负载均衡到了同一个消费组的多个消费者实例上。")]),e._v(" "),r("p",[e._v("更具体一点，在同一消费组中的不同消费者会根据负载机制来平均地订阅 Topic 中的每个 Queue。（默认 AVG 负载方式）")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://scarb-images.oss-cn-hangzhou.aliyuncs.com/knowledge/2022/07/1658682241525.png",alt:"广播消费模式"}})]),e._v(" "),r("p",[e._v("RocketMQ 默认使用集群消费模式，这也是大部分场景下会使用到的消费模式。")]),e._v(" "),r("h3",{attrs:{id:"_2-2-消费者拉取消息模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-消费者拉取消息模式"}},[e._v("#")]),e._v(" 2.2 消费者拉取消息模式")]),e._v(" "),r("h4",{attrs:{id:"_2-2-1-pull"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-pull"}},[e._v("#")]),e._v(" 2.2.1 Pull")]),e._v(" "),r("p",[e._v("指消费者"),r("strong",[e._v("主动拉取消息")]),e._v("进行消费，主动从 Broker 拉取消息，主动权由消费者应用控制。")]),e._v(" "),r("h4",{attrs:{id:"_2-2-2-push"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-push"}},[e._v("#")]),e._v(" 2.2.2 Push")]),e._v(" "),r("p",[e._v("指 "),r("strong",[e._v("Broker 主动将消息 Push 给消费者")]),e._v("，Broker 收到消息就会主动推送到消费者端。该模式的消费实时性较高，也是主流场景中普遍采用的消费形式。")]),e._v(" "),r("p",[e._v("消费者组中的消费者实例会根据预设的负载均衡算法对 Topic 中的 Queue 进行均匀的订阅，每个 Queue 最多只能被一个消费者订阅。")]),e._v(" "),r("p",[e._v("在 RocketMQ 中，Push 消费其实也是由 Pull 消费（拉取）实现。Push 消费只是通过客户端 API 层面的封装让用户感觉像是 Broker 在推送消息给消费者。")]),e._v(" "),r("h4",{attrs:{id:"_2-2-3-pop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-pop"}},[e._v("#")]),e._v(" 2.2.3 POP")]),e._v(" "),r("p",[e._v("RocketMQ 5.0 引入的新消费形式，是 Pull 拉取的另一种实现。也可以在 Push 模式下使用 POP 拉取消息，甚至可以和 Push 模式共同使用（分别消费重试 Topic 和普通 Topic）。")]),e._v(" "),r("p",[e._v("POP 与 Pull 可以通过一个开关实时进行切换。POP 模式下，Broker 来控制每个消费者消费的队列和拉取的消息，把重平衡逻辑从客户端移到了服务端。")]),e._v(" "),r("p",[e._v("主要解决了原来 Push 模式消费的以下痛点：")]),e._v(" "),r("ul",[r("li",[e._v("富客户端：客户端逻辑比较重，多语言支持不友好")]),e._v(" "),r("li",[e._v("队列独占：Topic 中的一个 Queue 最多只能被 1 个 Push 消费者消费，消费者数量无法无限扩展。且消费者 hang 住时该队列的消息会堆积。")]),e._v(" "),r("li",[e._v("消费后更新 offset：本地消费成功才会提交 offset")])]),e._v(" "),r("p",[e._v("RocketMQ 5.0 的轻量化 gRPC 客户端就是基于 POP 消费模式开发")]),e._v(" "),r("h3",{attrs:{id:"_2-3-队列负载机制与重平衡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-队列负载机制与重平衡"}},[e._v("#")]),e._v(" 2.3 队列负载机制与重平衡")]),e._v(" "),r("p",[e._v("在集群消费模式下，消费组中的消费者共同消费订阅的 Topic 中的所有消息，这里就存在 Topic 中的队列如何分配给消费者的问题。")]),e._v(" "),r("h4",{attrs:{id:"_2-3-1-队列负载机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-队列负载机制"}},[e._v("#")]),e._v(" 2.3.1 队列负载机制")]),e._v(" "),r("p",[e._v("RocketMQ Broker 中的队列负载机制将一个 Topic 的不同队列按照算法尽可能平均地分配给消费者组中的所有消费者。RocketMQ 预设了多种负载算法供不同场景下的消费。")]),e._v(" "),r("p",[e._v("AVG：将队列按数量平均分配给多个消费者，按 Broker 顺序先分配第一个 Broker 的所有队列给第一个消费者，然后给第二个。")]),e._v(" "),r("p",[e._v("AVG_BY_CIRCLE：将 Broker 上的队列轮流分给不同消费者，更适用于 Topic 在不同 Broker 之间分布不均匀的情况。")]),e._v(" "),r("p",[e._v("默认采用 AVG 负载方式。")]),e._v(" "),r("h4",{attrs:{id:"_2-3-2-重平衡-rebalance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-重平衡-rebalance"}},[e._v("#")]),e._v(" 2.3.2 重平衡（Rebalance）")]),e._v(" "),r("p",[e._v("为消费者分配队列消费的这一个负载过程并不是一劳永逸的，比如当消费者数量变化、Broker 掉线等情况发生后，原先的负载就变得不再均衡，此时就需要重新进行负载均衡，这一过程被称为重平衡机制。")]),e._v(" "),r("p",[e._v("每隔 20s，RocketMQ 会进行一次检查，检查队列数量、消费者数量是否发生变化，如果变化则触发消费队列重平衡，重新执行上述负载算法。")]),e._v(" "),r("h3",{attrs:{id:"_2-4-消费端高可靠"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-消费端高可靠"}},[e._v("#")]),e._v(" 2.4 消费端高可靠")]),e._v(" "),r("h4",{attrs:{id:"_2-4-1-重试-死信机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-重试-死信机制"}},[e._v("#")]),e._v(" 2.4.1 重试-死信机制")]),e._v(" "),r("p",[e._v("在实际使用中，消息的消费可能出现失败。RocketMQ 拥有重试机制和死信机制来保证消息消费的可靠性。")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("正常消费：消费成功则提交消费位点")])]),e._v(" "),r("li",[r("p",[e._v("重试机制：如果正常消费失败，消息会被消费者发回 Broker，放入重试 Topic： "),r("code",[e._v("%RETRY%消费者组")]),e._v("。最多重试消费 16 次，重试的时间间隔逐渐变长。（消费者组会自动订阅重试 Topic）。")]),e._v(" "),r("blockquote",[r("p",[e._v("这里地延迟重试采用了 RocketMQ 的延迟消息，重试的 16 次时间间隔为延迟消息配置的每个延迟等级的时间（从第三个等级开始）。如果修改延迟等级时间的配置，重试的时间间隔也会相应发生变化。但即便延迟等级时间间隔配置不足 16 个，仍会重试 16 次，后面按照最大的时间间隔来重试。")])])]),e._v(" "),r("li",[r("p",[e._v("死信机制：如果正常消费和重试 16 次均失败，消息会保存到死信 Topic "),r("code",[e._v("%DLQ%消费者组")]),e._v(" 中，此时需人工介入处理")])])]),e._v(" "),r("h4",{attrs:{id:"_2-4-2-队列负载机制与重平衡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-队列负载机制与重平衡"}},[e._v("#")]),e._v(" 2.4.2 队列负载机制与重平衡")]),e._v(" "),r("p",[e._v("当发生 Broker 挂掉或者消费者挂掉时，会引发重平衡，可以自动感知有组件挂掉的情况并重新调整消费者的订阅关系。")]),e._v(" "),r("h3",{attrs:{id:"_2-5-并发消费与顺序消费"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-并发消费与顺序消费"}},[e._v("#")]),e._v(" 2.5 并发消费与顺序消费")]),e._v(" "),r("p",[e._v("在消费者客户端消费时，有两种订阅消息的方式，分别是并发消费和顺序消费。广播模式不支持顺序消费，仅有集群模式能使用顺序消费。")]),e._v(" "),r("p",[e._v("需要注意的是，这里所说的顺序消费指的是队列维度的顺序，即在消费一个队列时，消费消息的顺序和消息发送的顺序一致。如果一个 Topic 有多个队列， 是不可能达成 Topic 级别的顺序消费的，因为无法控制哪个队列的消息被先消费。Topic 只有一个队列的情况下能够实现 Topic 级别的顺序消费。")]),e._v(" "),r("p",[e._v("具体顺序生产和消费代码见 "),r("a",{attrs:{href:"https://github.com/apache/rocketmq/blob/master/docs/cn/RocketMQ_Example.md#2-%E9%A1%BA%E5%BA%8F%E6%B6%88%E6%81%AF%E6%A0%B7%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[e._v("顺序生产的方式为串行生产，并在生产时指定队列。")]),e._v(" "),r("p",[e._v("并发消费的方式是调用消费者的指定 "),r("code",[e._v("MessageListenerConcurrently")]),e._v(" 作为消费的回调类，顺序消费则使用 "),r("code",[e._v("MessageListenerOrderly")]),e._v(" 类进行回调。处理这两种消费方式的消费服务也不同，分别是 "),r("code",[e._v("ConsumeMessageConcurrentlyService")]),e._v(" 和 "),r("code",[e._v("ConsumeMessageOrderlyService")]),e._v("。")]),e._v(" "),r("p",[e._v("顺序消费的大致原理是依靠两组锁，一组在 Broker 端（Broker 锁），锁定队列和消费者的关系，保证同一时间只有一个消费者在消费；在消费者端也有一组锁（消费队列锁）以保证消费的顺序性。")]),e._v(" "),r("h3",{attrs:{id:"_2-6-消费进度保存和提交"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-消费进度保存和提交"}},[e._v("#")]),e._v(" 2.6 消费进度保存和提交")]),e._v(" "),r("p",[e._v("消费者消费一批消息完成之后，需要保存消费进度。如果是集群消费模式，还需要将消费进度让其他消费者知道，所以需要提交消费进度。这样在消费者重启或队列重平衡时可以根据消费进度继续消费。")]),e._v(" "),r("p",[e._v("不同模式下消费进度保存方式的不同：")]),e._v(" "),r("ol",[r("li",[e._v("广播模式：保存在"),r("strong",[e._v("消费者本地")]),e._v("。因为每个消费者都需要消费全量消息消息。在 "),r("code",[e._v("LocalfileOffsetStore")]),e._v(" 当中。")]),e._v(" "),r("li",[e._v("集群模式：保存在 "),r("strong",[e._v("Broker，同时消费者端缓存")]),e._v("。因为一个 Topic 的消息只要被消费者组中的一个消费者消费即可，所以消息的消费进度需要统一保存。通过 "),r("code",[e._v("RemoteBrokerOffsetStore")]),e._v(" 存储。")])]),e._v(" "),r("p",[e._v("集群模式下，消费者端有定时任务，定时将内存中的消费进度提交到 Broker，Broker 也有定时任务将内存中的消费偏移量持久化到磁盘。此外，消费者向 Broker 拉取消息时也会提交消费偏移量。注意，消费者线程池提交的偏移量是线程池消费的这一批消息中偏移量最小的消息的偏移量。")]),e._v(" "),r("ol",[r("li",[e._v("消费完一批消息后将消息消费进度存在本地内存")]),e._v(" "),r("li",[e._v("消费者中有一个定时线程，每 5s 将内存中所有队列的消费偏移量提交到 Broker")]),e._v(" "),r("li",[e._v("Broker 收到消费进度先缓存到内存，有一个定时任务每隔 5s 将消息偏移量持久化到磁盘")]),e._v(" "),r("li",[e._v("消费者向 Broker 拉取消息时也会将队列的消息偏移量提交到 Broker")])]),e._v(" "),r("h2",{attrs:{id:"_3-消费流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-消费流程"}},[e._v("#")]),e._v(" 3. 消费流程")]),e._v(" "),r("p",[e._v("这张图是阿里云的文章讲解消费时用到的，能够清晰地表示客户端 Push 模式并发消费流程。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://scarb-images.oss-cn-hangzhou.aliyuncs.com/knowledge/2022/07/1658682241560.png",alt:""}})]),e._v(" "),r("p",[e._v("从左上角第一个方框开始看")]),e._v(" "),r("ol",[r("li",[e._v("消费者启动时唤醒重平衡服务 "),r("code",[e._v("RebalanceService")]),e._v("，重平衡服务是客户端开始消费的起点。")]),e._v(" "),r("li",[e._v("重平衡服务会周期性（每 20s）执行重平衡方法 "),r("code",[e._v("doRebalance)")]),e._v("，查询所有注册的 Broker，根据注册的 Broker 数量为自身分配负载的队列 "),r("code",[e._v("rebalanceByTopic()")])]),e._v(" "),r("li",[e._v("分配完队列后，会为每个分配到的新队列创建一个消息拉取请求 "),r("code",[e._v("pullRequest")]),e._v("，这个拉取请求中保存一个处理队列 "),r("code",[e._v("processQueue")]),e._v("，即图中的红黑树（"),r("code",[e._v("TreeMap")]),e._v("），用来保存拉取到的消息。红黑树保存消息的顺序。")]),e._v(" "),r("li",[e._v("消息拉取线程应用生产-消费模式，用一个线程从拉取请求队列 "),r("code",[e._v("pullRequestQueue")]),e._v(" 中弹出拉取请求，执行拉取任务，将拉取到的消息放入处理队列。")]),e._v(" "),r("li",[e._v("拉取请求在一次拉取消息完成之后会复用，重新被放入拉取请求队列 "),r("code",[e._v("pullRequestQueue")]),e._v(" 中")]),e._v(" "),r("li",[e._v("拉取完成后，在 "),r("code",[e._v("NettyClientPublicExecutorThreadPool")]),e._v(" 线程池异步处理结果，将拉取到的消息放入处理队列，然后调用 "),r("code",[e._v("consumeMessageService.submitConsumeRequest")]),e._v("，将处理队列和 多个消费任务提交到消费线程池。每个消费任务消费 1 批消息（1 批默认为 1 条）")]),e._v(" "),r("li",[e._v("每个消费者都有一个消费线程池 "),r("code",[e._v("consumeMessageThreadPool")]),e._v(" ，默认有 20 个消费线程。")]),e._v(" "),r("li",[e._v("消费线程池的每个消费线程会尝试从消费任务队列中获取消费请求，执行消费业务逻辑 "),r("code",[e._v("listener.consumeMessage")]),e._v("。")]),e._v(" "),r("li",[e._v("消费完成后，如果消费成功，则更新偏移量 "),r("code",[e._v("updateOffset")]),e._v("（先更新到内存 "),r("code",[e._v("offsetTable")]),e._v("，定时上报到 Broker。Broker 端也先放到内存，定时刷盘）。")])]),e._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/apache/rocketmq/blob/master/docs/cn/design.md#42-consumer%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档——设计"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/RocketMQ%20%E5%AE%9E%E6%88%98%E4%B8%8E%E8%BF%9B%E9%98%B6%EF%BC%88%E5%AE%8C%EF%BC%89/08%20%E6%B6%88%E6%81%AF%E6%B6%88%E8%B4%B9%20API%20%E4%B8%8E%E7%89%88%E6%9C%AC%E5%8F%98%E8%BF%81%E8%AF%B4%E6%98%8E.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("RocketMQ 实战与进阶——丁威"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.baiyp.ren/RocketMQ%E6%B6%88%E8%B4%B9%E6%B6%88%E6%81%AF.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("RocketMQ消费消息——白云鹏"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/f071d5069059",target:"_blank",rel:"noopener noreferrer"}},[e._v("消息中间件—RocketMQ消息消费（一）——癫狂侠"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://kunzhao.org/docs/rocketmq/rocketmq-message-receive-flow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RocketMQ 消息接受流程——赵坤"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/360911990",target:"_blank",rel:"noopener noreferrer"}},[e._v("RocketMQ 消息消费——贝贝猫"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.aliyun.com/article/801815",target:"_blank",rel:"noopener noreferrer"}},[e._v("RocketMQ 5.0 POP 消费模式探秘"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/4757079f871f",target:"_blank",rel:"noopener noreferrer"}},[e._v("RocketMQ消息消费源码分析"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/daimingbao/article/details/120231289",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rocketmq消费消息原理——服务端技术栈"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://47.100.139.123/blog/article/89",target:"_blank",rel:"noopener noreferrer"}},[e._v("RocketMQ——4. Consumer 消费消息——Kong"),r("OutboundLink")],1)])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("欢迎关注公众号【消息中间件】（middleware-mq），更新消息中间件的源码解析和最新动态！")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://scarb-images.oss-cn-hangzhou.aliyuncs.com/img/202205170102971.jpg",alt:""}})])])}),[],!1,null,null,null);_.default=v.exports}}]);