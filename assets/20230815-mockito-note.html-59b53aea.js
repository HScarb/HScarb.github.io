import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as p,c as i,a as n,b as s,d as t,e}from"./app-1d242e77.js";const l={},u={href:"http://hscarb.github.io/java/20230815-mockito-note.html",target:"_blank",rel:"noopener noreferrer"},k=n("h1",{id:"mockito-note",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mockito-note","aria-hidden":"true"},"#"),s(" Mockito Note")],-1),r={href:"https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/eugenp/tutorials/tree/master/testing-modules/mockito-simple",target:"_blank",rel:"noopener noreferrer"},m={id:"difference-between-doreturn-and-when",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#difference-between-doreturn-and-when","aria-hidden":"true"},"#",-1),v={href:"https://stackoverflow.com/questions/20353846/mockito-difference-between-doreturn-and-when",target:"_blank",rel:"noopener noreferrer"},b=e("<p>In the case of mocked objects, it does not matter if it&#39;s <code>when</code>/<code>thenReturn</code> or <code>doReturn</code>/<code>when</code>. Mocked objects never calls real methods.</p><p>Both approaches behave differently if you use a spied object (annotated with <code>@Spy</code>) instead of a mock (annotated with <code>@Mock</code>):</p><ul><li><code>when(...) thenReturn(...)</code> <strong>makes a real method call</strong> just before the specified value will be returned. So if the called method throws an Exception you have to deal with it / mock it etc. Of course you still get your result (what you define in <code>thenReturn(...)</code>)</li><li><code>doReturn(...) when(...)</code> <strong>does not call the method at all</strong>.</li></ul>",3),g={id:"difference-between-mock-and-injectmocks",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#difference-between-mock-and-injectmocks","aria-hidden":"true"},"#",-1),w={href:"https://stackoverflow.com/questions/16467685/difference-between-mock-and-injectmocks",target:"_blank",rel:"noopener noreferrer"},_=e(`<p><code>@Mock</code> creates a mock. <code>@InjectMocks</code> creates an <strong>instance of the class</strong> and injects the mocks that are created with the <code>@Mock</code> (or <code>@Spy</code>) annotations into this instance.</p><p>Note you must use <code>@RunWith(MockitoJUnitRunner.class)</code> or <code>Mockito.initMocks(this)</code> to initialize these mocks and inject them (JUnit 4).</p><p>With JUnit 5, you must use <code>@ExtendWith(MockitoExtension.class)</code>.</p><h3 id="mock-singleton" tabindex="-1"><a class="header-anchor" href="#mock-singleton" aria-hidden="true">#</a> mock singleton</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">MockitoJUnitRunner<span class="token punctuation">.</span>Silent</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Mock</span>
    <span class="token class-name">Singleton</span> singleton<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Before</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token function">setUpSingletons</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@After</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token function">resetSingletons</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setUpSingletons</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">Field</span> instance <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;instance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instance<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instance<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> singleton<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">resetSingletons</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">Field</span> instance <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;instance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instance<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instance<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y={id:"mocking-exception-throwing",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#mocking-exception-throwing","aria-hidden":"true"},"#",-1),M={href:"https://www.baeldung.com/mockito-exceptions",target:"_blank",rel:"noopener noreferrer"},S=e(`<h4 id="non-void-return-type" tabindex="-1"><a class="header-anchor" href="#non-void-return-type" aria-hidden="true">#</a> Non-Void Return Type</h4><p>First, if our method return type is not <code>void</code>, we can use <code>when().thenThrow()</code>:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">givenNonVoidReturnType_whenUsingWhenThen_thenExceptionIsThrown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MyDictionary</span> dictMock <span class="token operator">=</span> <span class="token function">mock</span><span class="token punctuation">(</span><span class="token class-name">MyDictionary</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">when</span><span class="token punctuation">(</span>dictMock<span class="token punctuation">.</span><span class="token function">getMeaning</span><span class="token punctuation">(</span><span class="token function">anyString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenThrow</span><span class="token punctuation">(</span><span class="token class-name">NullPointerException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token function">assertThrows</span><span class="token punctuation">(</span><span class="token class-name">NullPointerException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> dictMock<span class="token punctuation">.</span><span class="token function">getMeaning</span><span class="token punctuation">(</span><span class="token string">&quot;word&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="void-return-type" tabindex="-1"><a class="header-anchor" href="#void-return-type" aria-hidden="true">#</a> Void Return Type</h4><p>If our method returns <code>void</code>, we&#39;ll use <code>doThrow()</code>:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">givenVoidReturnType_whenUsingDoThrow_thenExceptionIsThrown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MyDictionary</span> dictMock <span class="token operator">=</span> <span class="token function">mock</span><span class="token punctuation">(</span><span class="token class-name">MyDictionary</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">doThrow</span><span class="token punctuation">(</span><span class="token class-name">IllegalStateException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>dictMock<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">anyString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">anyString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token function">assertThrows</span><span class="token punctuation">(</span><span class="token class-name">IllegalStateException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> dictMock<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;word&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;meaning&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),j={id:"checked-exception",tabindex:"-1"},T=n("a",{class:"header-anchor",href:"#checked-exception","aria-hidden":"true"},"#",-1),q={href:"https://stackoverflow.com/questions/3762047/throw-checked-exceptions-from-mocks-with-mockito#answer-48261005",target:"_blank",rel:"noopener noreferrer"},E={href:"https://static.javadoc.io/org.mockito/mockito-core/2.13.0/org/mockito/stubbing/OngoingStubbing.html#thenAnswer-org.mockito.stubbing.Answer-",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,"willAnswer()",-1),R=e(`<p>For example the following works (and doesn&#39;t throw a <code>MockitoException</code> but actually throws a checked <code>Exception</code> as required here) using <code>BDDMockito</code>:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">given</span><span class="token punctuation">(</span>someObj<span class="token punctuation">.</span><span class="token function">someMethod</span><span class="token punctuation">(</span>stringArg1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">willAnswer</span><span class="token punctuation">(</span> invocation <span class="token operator">-&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;abc msg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The equivalent for plain Mockito would to use the <code>doAnswer</code> method</p>`,3),A={id:"mocking-static-methods",tabindex:"-1"},N=n("a",{class:"header-anchor",href:"#mocking-static-methods","aria-hidden":"true"},"#",-1),D={href:"https://www.baeldung.com/mockito-mock-static-methods",target:"_blank",rel:"noopener noreferrer"},I={href:"https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html#static_mocks",target:"_blank",rel:"noopener noreferrer"},W={href:"https://javadoc.io/static/org.mockito/mockito-core/5.4.0/org/mockito/Mockito.html#0.2",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"Foo",-1),V=n("code",null,"foo",-1),F=e(`<h4 id="no-argument-static-method" tabindex="-1"><a class="header-anchor" href="#no-argument-static-method" aria-hidden="true">#</a> No Argument Static Method</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">givenStaticMethodWithNoArgs_whenMocked_thenReturnsMockSuccessfully</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token class-name">StaticUtils</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;Baeldung&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">MockedStatic</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StaticUtils</span><span class="token punctuation">&gt;</span></span> utilities <span class="token operator">=</span> <span class="token class-name">Mockito</span><span class="token punctuation">.</span><span class="token function">mockStatic</span><span class="token punctuation">(</span><span class="token class-name">StaticUtils</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        utilities<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token class-name">StaticUtils</span><span class="token operator">::</span><span class="token function">name</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token string">&quot;Eugen&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token class-name">StaticUtils</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;Eugen&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token class-name">StaticUtils</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;Baeldung&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="static-method-with-arguments" tabindex="-1"><a class="header-anchor" href="#static-method-with-arguments" aria-hidden="true">#</a> Static Method With Arguments</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">givenStaticMethodWithArgs_whenMocked_thenReturnsMockSuccessfully</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token class-name">StaticUtils</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">containsExactly</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">MockedStatic</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StaticUtils</span><span class="token punctuation">&gt;</span></span> utilities <span class="token operator">=</span> <span class="token class-name">Mockito</span><span class="token punctuation">.</span><span class="token function">mockStatic</span><span class="token punctuation">(</span><span class="token class-name">StaticUtils</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        utilities<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">StaticUtils</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token class-name">StaticUtils</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">containsExactly</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token class-name">StaticUtils</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">containsExactly</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>欢迎关注公众号【消息中间件】（middleware-mq），更新消息中间件的源码解析和最新动态！</p><figure><img src="https://scarb-images.oss-cn-hangzhou.aliyuncs.com/img/202205170102971.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,7);function J(z,L){const a=c("ExternalLinkIcon");return p(),i("div",null,[n("p",null,[s("原文地址："),n("a",u,[s("http://hscarb.github.io/java/20230815-mockito-note.html"),t(a)])]),k,n("p",null,[n("a",r,[s("https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/"),t(a)])]),n("p",null,[n("a",d,[s("https://github.com/eugenp/tutorials/tree/master/testing-modules/mockito-simple"),t(a)])]),n("h3",m,[h,s(),n("a",v,[s("difference between doReturn() and when()"),t(a)])]),b,n("h3",g,[f,s(),n("a",w,[s("Difference between @Mock and @InjectMocks"),t(a)])]),_,n("h3",y,[x,s(),n("a",M,[s("Mocking Exception Throwing"),t(a)])]),S,n("h4",j,[T,s(),n("a",q,[s("Checked Exception"),t(a)])]),n("p",null,[s("A workaround is to use a "),n("a",E,[U,t(a)]),s(" method.")]),R,n("h3",A,[N,s(),n("a",D,[s("Mocking Static Methods"),t(a)])]),n("p",null,[n("a",I,[s("https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html#static_mocks"),t(a)])]),n("p",null,[s("When using the "),n("a",W,[s("inline mock maker"),t(a)]),s(", it is possible to mock static method invocations within the current thread and a user-defined scope. This way, Mockito assures that concurrently and sequentially running tests do not interfere. To make sure a static mock remains temporary, it is recommended to define the scope within a try-with-resources construct. In the following example, the "),B,s(" type's static method would return "),V,s(" unless mocked:")]),F])}const P=o(l,[["render",J],["__file","20230815-mockito-note.html.vue"]]);export{P as default};
