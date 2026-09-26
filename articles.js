// 提示词：
// 任务：生成JS模板字符串内使用的HTML正文片段。
// 约束：
// 1. 只输出HTML，不要content=、不要JS代码、不要```标记；
// 2. 禁止内容里出现反引号`；
// 3. 超链接<a>必须加 target="_blank"；
// 4. img标签写上alt描述，使用picsum图片链接；
// 5. 支持段落、二级标题、三级标题、有序列表、无序列表、引用块、粗体、斜体、行内代码；
// 6. 排版段落间距符合网页阅读习惯。
// 文章主题：【文章主题】
const articles = [
{
title:"🌎 Github",
date:"2026-09-25",
desc:"开启世界的方式",
content:`
<h2>GitHub 是什么</h2>
<p>GitHub 是全球最流行的代码托管与协作平台之一，基于 Git 版本控制系统构建。开发者可以在上面创建仓库，管理代码历史，追踪问题，合并分支，并与来自世界各地的人一起完成项目。它不仅是存放代码的地方，也逐渐成为开源文化、技术学习和团队协作的重要基础设施。</p>
<h2>核心功能</h2>
<p>GitHub 的功能围绕仓库展开，常见能力包括：</p>
<ul>
  <li><strong>代码托管</strong>：支持公开和私有仓库，方便备份与分享。</li>
  <li><strong>版本控制</strong>：通过 Git 记录每次修改，随时回退和对比。</li>
  <li><strong>Issue 跟踪</strong>：用问题列表管理需求、缺陷和讨论。</li>
  <li><strong>Pull Request</strong>：以合并请求的方式审查代码，保证质量。</li>
  <li><strong>Actions</strong>：自动化测试、构建和部署流程。</li>
  <li><strong>Pages</strong>：免费发布静态网站，适合文档和博客。</li>
</ul>
<h3>为什么开发者喜欢它</h3>
<p>GitHub 的社交属性让代码不再孤立。你可以关注感兴趣的项目，给仓库点星，参与讨论，甚至通过 <em>fork</em> 和 <em>pull request</em> 直接贡献代码。对于初学者来说，阅读优秀项目的源码和提交记录，是提升工程能力的有效途径。</p>
<blockquote>
  <p>开源不是一种许可证，而是一种协作方式。GitHub 让这种方式变得触手可及。</p>
</blockquote>
<h3>典型使用场景</h3>
<ol>
  <li>个人项目管理：用仓库记录学习笔记、练手项目和配置。</li>
  <li>团队协作：通过分支、PR 和代码审查完成多人开发。</li>
  <li>开源贡献：给喜欢的项目提 issue，修复 bug，完善文档。</li>
  <li>持续集成：配置 <code>workflow</code> 文件，自动运行测试和部署。</li>
</ol>
<h2>快速上手建议</h2>
<p>想开始使用 GitHub，可以先注册账号，创建一个新仓库，然后安装 Git 并配置用户名和邮箱。常用命令如 <code>git clone</code>、<code>git add</code>、<code>git commit</code>、<code>git push</code> 值得优先掌握。遇到问题时，可以查阅 <a href="https://docs.github.com" target="_blank">GitHub 官方文档</a>，也可以浏览 <a href="https://github.com/explore" target="_blank">Explore 页面</a> 发现优质项目。</p>
<p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9VaWMwUzFyNW82T3QzMTF5bmtobWJhSWhxYVdWNGM3b2ljbVh0aWNpY0c0T3E5aWNTQWZta3JBZGo2UEg4TzI3d0dMb2lhUnJJSDBLOExFV1NiVXo3TUxDZmN4dy82NDA?x-oss-process=image/format,png" alt="GitHub 代码协作与开源项目示意图"></p>
<p>总的来说，GitHub 既是工具，也是社区。它让代码管理更规范，让协作更透明，也让学习技术变得更有参与感。无论你是学生、独立开发者还是团队成员，善用 GitHub 都会显著提升你的开发效率与影响力。</p>
`
}
,
{
title:"编程技巧：从可读到可维护的代码实践",
date:"2026-09-26",
desc:"写出既能让机器执行、又能让人轻松理解的优雅代码，提升代码可读性与可维护性。",
content:`
<h2>编程技巧：从可读到可维护</h2>
<p>很多程序员写代码时只关注“能跑”，但真正优秀的代码，应该在几个月后自己或同事再看时，依然能<strong>快速理解</strong>。编程技巧的核心，不是炫技，而是<strong>降低认知负担</strong>。</p>
<img src="https://so1.360tres.com/t01ae9a4c3b1c724dfd.jpg" alt="程序员在屏幕上编写代码的场景">
<h3>一、命名即文档</h3>
<p>变量、函数、类的名字，应该直接表达意图。比如 <code>getUserById</code> 比 <code>getData</code> 好得多。好的命名能减少大量注释，因为<em>代码本身就在说话</em>。</p>
<ul>
  <li>避免无意义缩写，如 <code>tmp</code>、<code>data1</code></li>
  <li>布尔值用 <code>is</code>、<code>has</code>、<code>can</code> 开头</li>
  <li>函数名用动词短语，类名用名词短语</li>
</ul>
<h3>二、小函数与单一职责</h3>
<p>一个函数只做一件事。当函数超过一屏时，就该考虑拆分。小函数更容易测试、复用和调试。记住：<strong>短小即是美</strong>。</p>
<blockquote>
  <p>任何傻瓜都能写出计算机能理解的代码，只有优秀的程序员才能写出人能理解的代码。</p>
</blockquote>
<p>—— Martin Fowler</p>
<h3>三、善用注释与文档</h3>
<p>注释应解释<em>为什么</em>，而不是<em>做什么</em>。代码本身已经说明了“做什么”，注释要补充背景、约束和边界条件。</p>
<ol>
  <li>对复杂算法写出思路</li>
  <li>对公共 API 写清楚参数和返回值</li>
  <li>对临时方案注明 TODO 和原因</li>
</ol>
<h3>四、持续重构</h3>
<p>重构不是项目末期的一次性工作，而是日常习惯。每次修改代码时，顺手改善一点结构。推荐阅读《重构：改善既有代码的设计》，并结合单元测试保证安全。</p>
<p>更多编程实践可参考 <a href="https://refactoring.com/" target="_blank">Refactoring 官网</a> 和 <a href="https://developer.mozilla.org/zh-CN/" target="_blank">MDN Web 文档</a>。</p>
<p>编程技巧千千万，但核心始终是：<strong>写给人看，顺便让机器执行</strong>。坚持这些原则，你的代码会越来越优雅。</p>
`
}
];
