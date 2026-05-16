# 🤖 新 AI 执行提示词模板

**用途**: 复制这个提示词，给任何新的 AI (Claude / GPT-4 / Gemini) 执行内容生成  
**目标**: 批量生成高质量的中文 SEO 内容  
**格式**: Markdown .mdx 文件，可直接部署到 Next.js 站点

---

## 📝 执行提示词（复制粘贴使用）

```
你好！我需要你为我的英语学习平台生成高质量的中文 SEO 文章。

【项目背景】
- 平台: 1000-island.com/resource （菲律宾英语学习资源中心）
- 目标客户: 中国学生、工作人士、家长
- 目标: 90 天内发布 105 个高质量中文内容，驱动 SEO 流量

【任务】
生成指定主题的中文文章，格式为 .mdx 文件（Markdown + frontmatter）

【文章主题列表】
[在下方粘贴要生成的文章列表，格式见下]

【生成标准】

## 内容标准
- 字数: 1200-1500 字
- 语言: 中文，针对中国读者
- 风格: 实用、友好、有见地
- 结构: 清晰的逻辑，3-5 个主要部分

## SEO 标准
- Title: 包含主关键词 + 修饰词（"完整指南", "对比", "TOP 10" 等）
- Keywords: 3-5 个相关关键词
- Description: 120-160 字，自然包含关键词
- 关键词密度: 1-2%（自然分布）

## 内容元素
- ✅ 至少 1 个对比表格（如果是对比文章）
- ✅ 至少 3-5 个内部链接（指向相关文章，使用相对路径 /resource/[category]/[slug]）
- ✅ 至少 3 个常见问题（FAQ）部分
- ✅ 对标竞争对手（查看百度搜索结果前 3，确保内容更全面）

## Frontmatter 格式
```markdown
---
title: "文章标题（包含关键词）"
slug: "url-slug"
category: "teacher" / "study-abroad" / "exam" / "workplace" / "comparison" / "faq"
description: "160 字以内的 SEO 描述"
keywords: ["关键词1", "关键词2", "关键词3"]
date: "2026-05-16"
readingTime: 8
---
```

## 内容结构示例
```markdown
---
title: "..."
slug: "..."
category: "..."
description: "..."
keywords: [...]
date: "2026-05-16"
readingTime: 8
---

# H1 标题（和 title 相同）

[开场段落：为什么这篇文章重要？3-4 句话]

## 核心内容部分 1

[详细内容，300+ 字]

### 子部分 1.1

[细节说明]

## 核心内容部分 2

[详细内容，300+ 字]

### 子部分 2.1

[细节说明]

## 对比表格（如适用）

| 对比项 | 选项 A | 选项 B | 选项 C |
|--------|--------|--------|--------|
| 价格 | $ | $$ | $$$ |
| ...   | ... | ... | ... |

## 常见问题（FAQ）

**Q: 问题1？**
A: 详细回答...（50+ 字）

**Q: 问题2？**
A: 详细回答...（50+ 字）

**Q: 问题3？**
A: 详细回答...（50+ 字）

## 相关文章

- [内部链接1](/resource/teacher/related-article-1)
- [内部链接2](/resource/study-abroad/related-article-2)
- [内部链接3](/resource/comparison/related-article-3)

## 总结

[总结 2-3 个核心要点，推荐用户采取行动]
```

【文章列表格式】
对每篇文章，提供以下信息：
```
1. 标题: "文章标题"
   关键词: ["kw1", "kw2", "kw3"]
   分类: "teacher" / "study-abroad" / "exam"
   特殊要求: "对比表格", "排名", "完整指南", 等
```

【内部链接建议】
在生成文章时，参考以下相关文章，添加内部链接：

**如果是外教相关页面**，链接到：
- /resource/teacher/how-to-choose
- /resource/teacher/tefl-vs-tesol
- /resource/teacher/tutoring-costs
- /resource/teacher/red-flags
- /resource/teacher/interview-questions

**如果是游学相关页面**，链接到：
- /resource/study-abroad/complete-guide
- /resource/study-abroad/city-comparison
- /resource/study-abroad/school-ranking
- /resource/study-abroad/cost-breakdown
- /resource/study-abroad/vs-online

**如果是对比页面**，链接到：
- 相关的两个被对比对象的详细页面

【生成要求】

1. 返回格式：完整的 .mdx 文件，可直接保存和使用
2. 多篇文章：用 --- 分隔多个文章
3. 质量检查：
   - [ ] 是否包含 frontmatter？
   - [ ] 字数是否 1200+ 字？
   - [ ] 是否有对比表格或列表？
   - [ ] 是否有 3+ 个内部链接？
   - [ ] 是否有 3+ 个 FAQ？
   - [ ] 是否有清晰的 H1/H2/H3 结构？
   - [ ] 关键词是否自然分布？

【特殊提示】
- 写给中国读者：使用中文，理解中国学生的需求和痛点
- 实用导向：给出具体的数字、案例、步骤
- 诚实透明：说出优点和缺点，建立信任
- 引用数据：如果提到数字/统计，说明来源
- 不要堆砌关键词：关键词要自然融入，不要生硬

【提交格式】
生成完成后，返回所有 .mdx 文件内容，用 --- 分隔。

我会把这些文件保存为：
- content/teacher/[slug].mdx
- content/study-abroad/[slug].mdx
- 等等

【文章列表（粘贴要生成的文章）】

[在这里粘贴要生成的文章列表，如下]
```

---

## 🎯 使用步骤

### Step 1: 准备文章列表

从 `CONTENT_STRATEGY_PLAN.md` 中选择你想要生成的文章，格式化为：

```
1. 标题: "如何选择菲律宾在线英语外教？"
   关键词: ["菲律宾外教", "选择老师", "在线英语"]
   分类: "teacher"
   特殊要求: "完整指南、包含对比表格"

2. 标题: "菲律宾在线英语外教 TOP 10"
   关键词: ["在线外教", "菲律宾", "排名"]
   分类: "teacher"
   特殊要求: "排名列表、详细评价、包含费用"

3. 标题: "TEFL vs TESOL：哪个认证更好？"
   关键词: ["TEFL", "TESOL", "教学资格"]
   分类: "teacher"
   特殊要求: "对比表格、详细分析"

... （继续）
```

### Step 2: 给新 AI 提供提示词

复制上面的完整提示词，粘贴给新 AI（如 Claude、GPT-4、Gemini），然后在 `【文章列表（粘贴要生成的文章）】` 处粘贴你的文章列表。

### Step 3: 生成文件

新 AI 会返回完整的 .mdx 文件，用 --- 分隔。

### Step 4: 保存和部署

```bash
# 把返回的文件内容分别保存为：
content/teacher/how-to-choose.mdx
content/teacher/top-10-tutors.mdx
content/teacher/tefl-vs-tesol.mdx
... 等等

# 推送到 GitHub
git add content/
git commit -m "Add 20 content pages"
git push

# Vercel 自动构建和部署
```

---

## 📊 预期输出示例

当你给新 AI 提供上面的提示词 + 文章列表时，它会返回类似这样的内容：

```
---
title: "如何选择菲律宾在线英语外教？完整指南"
slug: "how-to-choose"
category: "teacher"
description: "菲律宾在线英语外教怎么选？本指南介绍选择外教的 7 个关键因素、常见误区、以及如何进行试课，帮你找到最适合的英语老师。"
keywords: ["菲律宾外教", "选择老师", "在线英语"]
date: "2026-05-16"
readingTime: 8
---

# 如何选择菲律宾在线英语外教？完整指南

正在找菲律宾在线英语外教？选对老师是英语学习成功的 50% 的关键...

[完整内容...]

## 常见问题

**Q: 菲律宾外教和欧美外教有什么区别？**
A: [回答...]

**Q: 第一课怎么试课？**
A: [回答...]

**Q: 如何判断外教是否适合我？**
A: [回答...]

## 相关文章

- [菲律宾在线英语外教 TOP 10](/resource/teacher/top-10-tutors)
- [找外教必知的 8 个红旗信号](/resource/teacher/red-flags)
- [TEFL vs TESOL：哪个认证更好？](/resource/teacher/tefl-vs-tesol)

---

---
title: "菲律宾在线英语外教 TOP 10"
slug: "top-10-tutors"
category: "teacher"
...

[下一篇文章...]

---

[更多文章...]
```

---

## 💡 优化建议

### 如果流量不理想

1. **检查关键词**: 用 ahrefs / semrush 验证搜索量
2. **对标竞争**: 查看排名前 3 的文章，看是否内容更全面
3. **优化链接**: 增加内部链接，建立集群
4. **更新内容**: 每月更新 1-2 个高流量页面

### 如果需要扩展

1. **增加长尾关键词**: 同一个主题做 3-5 个变种页面
2. **制作对比页面**: 任何两个概念都可以对比
3. **建立 FAQ 集合**: 收集用户问题，做专门的 FAQ 页面

---

## 🎉 完成标志

✅ 当你完成以下步骤时，内容第一阶段完成：

- [ ] 生成 10 个外教指南页面
- [ ] 生成 10 个游学指南页面
- [ ] 所有页面上线到 Vercel
- [ ] 每篇页面都有 3+ 个内部链接
- [ ] 检查 SEO 元数据（title, meta, keywords）
- [ ] 本地测试无误

下一步：启用 SEO（修改 robots.txt）+ 在官网添加导航链接

---

**使用这个提示词，任何 AI 都能生成高质量的中文 SEO 内容！** 🚀
