import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c,a,b as n,d as s,e as t}from"./app-107dc435.js";const i={},l={href:"http://hscarb.github.io/rocketmq/20230324-rocketmq-netty-write-buffer-watermark.html",target:"_blank",rel:"noopener noreferrer"},u=a("h1",{id:"rocketmq-netty-写缓冲区水位配置-nettyserverconfig-writebufferhighwatermark",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#rocketmq-netty-写缓冲区水位配置-nettyserverconfig-writebufferhighwatermark","aria-hidden":"true"},"#"),n(" RocketMQ Netty 写缓冲区水位配置 NettyServerConfig#writeBufferHighWaterMark")],-1),k={href:"https://github.com/apache/rocketmq/issues/3651",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>该改动在服务端<code>NettyServerConfig</code>和客户端配置<code>NettyClientConfig</code>中新增了如下配置项：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// NettySystemConfig.java</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> writeBufferHighWaterMark <span class="token operator">=</span>
        <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token constant">COM_ROCKETMQ_REMOTING_WRITE_BUFFER_HIGH_WATER_MARK_VALUE</span><span class="token punctuation">,</span> <span class="token string">&quot;4194304&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//4M</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> writeBufferLowWaterMark <span class="token operator">=</span>
        <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token constant">COM_ROCKETMQ_REMOTING_WRITE_BUFFER_LOW_WATER_MARK</span><span class="token punctuation">,</span> <span class="token string">&quot;1048576&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1MB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d={href:"https://github.com/apache/rocketmq/issues/3825",target:"_blank",rel:"noopener noreferrer"},m=t(`<hr><p>这两个配置是 netty channel 的配置，原来的默认值分别为 32K 和 64K</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// WriteBufferWaterMark.java</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">DEFAULT_LOW_WATER_MARK</span> <span class="token operator">=</span> <span class="token number">32</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">DEFAULT_HIGH_WATER_MARK</span> <span class="token operator">=</span> <span class="token number">64</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">WriteBufferWaterMark</span> <span class="token constant">DEFAULT</span> <span class="token operator">=</span>
        <span class="token keyword">new</span> <span class="token class-name">WriteBufferWaterMark</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_LOW_WATER_MARK</span><span class="token punctuation">,</span> <span class="token constant">DEFAULT_HIGH_WATER_MARK</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据 Netty 的文档，这两个参数含义如下</p><blockquote><p>WriteBufferWaterMark 用于设置写缓冲区的低水位线和高水位线。</p><p>如果在写缓冲区中排队的字节数超过了高水位线，<code>Channel.isWritable()</code> 将开始返回 false。</p><p>如果在写缓冲区中排队的字节数先超过了高水位线，然后下降到低水位线以下，Channel.isWritable() 将再次开始返回 true。</p></blockquote><p>再看 <code>Channel.isWritable()</code> 的文档</p><blockquote><p>当且仅当I/O线程将立即执行所请求的写操作时返回 true。在此方法返回 false 时提交的写请求将被放入队列，直到I/O线程准备好处理队列中的写请求。</p></blockquote><hr>`,8),_={href:"https://www.liaoxuefeng.com/discuss/1279869501571105/1450880018677794",target:"_blank",rel:"noopener noreferrer"},h=t('<h3 id="write-buffer-water-mark" tabindex="-1"><a class="header-anchor" href="#write-buffer-water-mark" aria-hidden="true">#</a> WRITE_BUFFER_WATER_MARK</h3><p>控制 Netty 中 Write Buffer 的<strong>水位线</strong></p><p>要理解水位线 (wrter mark) 的概念，还要从 Netty 的 channel.write(...) 讲起。</p><p>首先先来根据下面这张图来观察 write 的大致流程</p><figure><img src="https://scarb-images.oss-cn-hangzhou.aliyuncs.com/img/202308061642878.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>首先，我们对一个 Channel 写入的时候，会先将需要 write 的对象封装为任务放入 Queue</p><p>然后，同时 I/O 线程会定时将任务从 Queue 取出来，然后再经过 Pipeline 中各个处理器处理（图中未画出），再将处理结果写入到 Netty Buffer，然后到达操作系统的底层的 TCP 的发送缓冲区。</p><p>最后，TCP 发送缓冲区中的数据会分包发送给对端，就是在这里的对面的 Client 的 TCP 接收缓冲区。</p><p>需要注意的是，如果只是调用 channel.write(..) 方法是，该数据只会暂时存储到 Netty Buffer。在 channel.flush() 被调用后，则会发送信息 flush （即上图中标记为 &quot;F&quot; 的包），在 Netty Buffer 收到了 flush 控制包，才会将 Buffer 冲刷到 TCP Buffer。</p><p>其中，TCP 连接的数据发送一方中的 TCP Buffer (发送缓冲区) 的大小由 SO_SNDBUF 控制，而 Netty Buffer 是&quot;无界&quot;的，且它的位置在堆外内存（Direct Buffer）。</p><p>我们在一开始提到的水位线，则是标记当前 Netty Buffer 所使用的大小的一个值。当 Netty Buffer 的大小到达这个值后，调用 chanel.isWriteable 则会返回 false，且会通过调用业务 handler 的 writabilityChanged 方法来通知上层应用。</p><p>同时水位线还分为高水位线和低水位线，到达高水位线后调用 chanel.isWriteable 则会返回 false ，直到下降到低水位线，调用时才会返回为 true 。</p><p>不过，水位线只是一个警示，并不是实际上限，到达水位线后 Netty Buffer 仍然可以被写入，写入后会在由 Netty 维护的内部缓冲区进行排队。</p><blockquote><p>顺带一提，在之前的 netty 版本中，高水位线通过 WRITE_BUFFER_HIGH_WATER_MARK 设置，低水位线通过 WRITE_BUFFER_LOW_WATER_MARK，但现在已经被标记为 Deprecated，取而代之则是上文介绍的 WRITE_BUFFER_WATER_MARK，通过下列样式进行配置 .option(ChannelOption.WRITE_BUFFER_WATER_MARK, <strong>new</strong> WriteBufferWaterMark(10000, 20000))</p></blockquote><blockquote><p>上面提到的 Netty Buffer 的在 Netty 中的类名为 ChannelOutboundBuffer；TCP Buffer 也叫 socket 发送缓冲区</p></blockquote><hr><p>欢迎关注公众号【消息中间件】（middleware-mq），更新消息中间件的源码解析和最新动态！</p><figure><img src="https://scarb-images.oss-cn-hangzhou.aliyuncs.com/img/202205170102971.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',18);function b(g,y){const e=p("ExternalLinkIcon");return r(),c("div",null,[a("p",null,[n("原文地址："),a("a",l,[n("http://hscarb.github.io/rocketmq/20230324-rocketmq-netty-write-buffer-watermark.html"),s(e)])]),u,a("p",null,[n("RocketMQ 4.9.3 版本中，"),a("a",k,[n("Issue#3651"),s(e)]),n(" 新增了 Netty 缓冲区高低水位的配置。")]),f,a("p",null,[n("一开始的默认低水位为 1M，高水位为 4M，"),a("a",d,[n("Issue#3825"),s(e)]),n(" 将默认值改为 0。支持在配置文件中进行修改。")]),m,a("p",null,[a("a",_,[n("https://www.liaoxuefeng.com/discuss/1279869501571105/1450880018677794"),s(e)])]),h])}const R=o(i,[["render",b],["__file","20230324-rocketmq-netty-write-buffer-watermark.html.vue"]]);export{R as default};
