# Claude Code 批量内容生成指南

## 🎯 任务概述

使用 Claude Code + AI 协作开发模式，批量生成 20 个 SEO 优化的内容页面。

## 📋 内容计划（初期 20 页）

### 菲律宾外教指南 (10 页)
1. **How to Choose a Teacher** ✅ (已生成)
2. **Top 10 Online Tutors in Philippines** (待生成)
3. **Teacher Qualifications Explained**
4. **One-to-One vs. Group Classes**
5. **Average Cost of Online English Lessons**
6. **TEFL vs. TESOL Certification**
7. **How to Interview a Potential Teacher**
8. **Red Flags When Choosing a Teacher**
9. **Native vs. Non-Native English Teachers**
10. **Setting Up Your First Lesson**

### 游学指南 (10 页)
1. **Study Abroad in Philippines: Complete Guide**
2. **Top English Schools in Cebu**
3. **Best Time to Study in Philippines**
4. **How Much Does It Cost to Study in Philippines?**
5. **Visa Requirements for English Students**
6. **Accommodation Options in Philippines**
7. **What to Pack for Study Abroad**
8. **Sample Daily Schedule in English School**
9. **How to Make Friends While Studying Abroad**
10. **Career Benefits of Studying in Philippines**

## 🛠️ 文件结构

```
content/
├── teacher/
│   ├── sample.mdx (已存在)
│   ├── top-10-online-tutors.mdx (待生成)
│   ├── qualifications-explained.mdx
│   ├── one-to-one-vs-group.mdx
│   ├── average-cost.mdx
│   ├── tefl-vs-tesol.mdx
│   ├── interview-questions.mdx
│   ├── red-flags.mdx
│   ├── native-vs-nonnative.mdx
│   └── first-lesson-setup.mdx
│
└── study-abroad/
    ├── complete-guide.mdx
    ├── schools-in-cebu.mdx
    ├── best-time-to-study.mdx
    ├── cost-breakdown.mdx
    ├── visa-requirements.mdx
    ├── accommodation-options.mdx
    ├── packing-list.mdx
    ├── daily-schedule.mdx
    ├── making-friends.mdx
    └── career-benefits.mdx
```

## 📝 每个 .mdx 文件的必要元素

### Frontmatter
```yaml
---
title: "Article Title"
description: "SEO-optimized description (160 characters max)"
slug: "url-slug"
category: "teacher" or "study-abroad"
date: "2026-05-15"
keywords: ["keyword1", "keyword2", "keyword3"]
readingTime: 6  # 预计阅读时间（分钟）
---
```

### 内容结构（推荐）

```markdown
# [H1 标题]

[开场段落 - 解释这篇文章的价值]

## [主要部分 1]

[详细内容...]

### [子部分]

[内容...]

## [主要部分 2]

[详细内容...]

## 常见问题

- **Q: ...?**
  A: ...

## 总结

[总结要点]
```

### SEO 检查清单

- [ ] 标题包含主要关键词
- [ ] Meta description 包含关键词和价值主张
- [ ] 文章至少 800+ 字
- [ ] 有合理的标题层级 (H1 → H2 → H3)
- [ ] 内部链接：至少 3-5 个指向其他文章的链接
- [ ] 列表/表格：适当使用列表和表格提高可读性
- [ ] 外链：引用可信来源
- [ ] 代码/引用：适当使用 blockquote 和 code 片段

## 🤖 使用 Claude Code 生成

### 方法 1: 逐个生成（质量优先）

**Prompt 示例**：

```
我需要你创建一篇 SEO 优化的 Markdown 文章。

标题: "Top 10 Online English Tutors in the Philippines"
关键词: online tutors, philippines, english teachers, online teaching
字数: 1500+
格式: .mdx frontmatter + 内容

要求:
1. 详细分析 10 个知名菲律宾在线英语教师平台/个人
2. 包含每个老师的特点、费用、学生评价
3. 添加比较表格
4. 包含如何联系和报名的步骤
5. SEO 友好的内部链接（链接到其他相关文章）
6. 包含 FAQ 部分（最少 3 个常见问题）

返回完整的 .mdx 文件内容，包括 frontmatter。
```

### 方法 2: 批量生成（快速迭代）

**Prompt 示例**：

```
我需要批量生成 5 篇英语文章。使用下面的 JSON 输入：

[
  {
    "title": "TEFL vs. TESOL Certification",
    "slug": "tefl-vs-tesol",
    "keywords": ["TEFL", "TESOL", "teaching certification"],
    "category": "teacher"
  },
  ...
]

对于每篇文章：
1. 生成 1000+ 字的原创内容
2. 包含 frontmatter 配置
3. 添加比较表格
4. 包含常见问题部分
5. SEO 优化

返回格式: 完整的 .mdx 文件，用 --- 分隔多个文件
```

## 📊 内容质量保证

### 检查清单

生成后，验证每篇文章：

- [ ] **准确性**: 所有信息是否准确（特别是费用、资格、链接）
- [ ] **可读性**: 句子清晰吗？有没有冗余？
- [ ] **SEO**: 关键词分布是否自然？
- [ ] **链接**: 内部链接是否有效且相关？
- [ ] **格式**: Markdown 格式正确吗？
- [ ] **用户意图**: 是否回答了用户的问题？

### 修改建议

如果文章不理想，给 Claude Code 的修改 prompt：

```
这篇文章关于 [title] 需要改进：

1. 费用信息应该基于 2026 年的实际价格
2. 添加更多对比表格
3. 加入真实学生评价或案例
4. 简化技术术语（面向初学者）
5. 添加行动 CTA（Call to Action）

请重新生成改进后的版本。
```

## 🔄 本地预览

### 在部署前在本地测试

```bash
# 1. 将生成的 .mdx 文件放入 /content 目录
cp generated-file.mdx ./content/teacher/

# 2. 启动本地开发服务器
npm run dev

# 3. 访问 http://localhost:3000/resource/teacher/[slug]
# 验证：
# - 页面是否正确渲染？
# - 链接是否工作？
# - Meta 信息是否显示？
```

## 📤 部署流程

```bash
# 1. 添加所有新文件
git add content/

# 2. 提交
git commit -m "Add 5 new teacher guides and 5 study abroad articles"

# 3. 推送到 GitHub
git push

# 4. 等待 Vercel 自动部署（2-3 分钟）
# 检查 Vercel Dashboard 中的部署状态
```

## 💡 内容扩展思路

### 下一阶段（第 2 批 20 页）

1. **对比文章** (Comparison Pages)
   - Online vs. In-Person Learning
   - One-on-One vs. Group Classes
   - Philippines vs. Other Countries for English Study

2. **FAQ 页面** (FAQ with Schema)
   - Common Questions about Studying in Philippines
   - Visa and Logistics FAQs
   - Cost and Payment FAQs

3. **深度指南** (Ultimate Guides)
   - Complete IELTS Preparation Guide
   - Professional English for Workplace
   - English for Specific Purposes (ESP)

4. **地区指南** (Location Guides)
   - Studying English in Manila
   - Studying English in Cebu
   - Studying English in Other Cities

## 🎯 优先级

**Phase 1** (现在): 完成 20 个核心内容页
**Phase 2** (1 周后): 生成 20 个对比和 FAQ 页面
**Phase 3** (2 周后): 生成 30+ 个长尾关键词变种页面

## 📞 故障排除

### 页面生成后没有显示

检查：
1. 文件是否在正确的目录？(`/content/[category]/`)
2. Frontmatter 格式是否正确？
3. slug 是否唯一？
4. 提交并推送到 GitHub？
5. Vercel 构建是否成功？

### SEO 页面没有被索引

当前设置中，robots.txt 禁止所有爬虫。要启用索引：

```robots.txt
User-agent: *
Allow: /

Sitemap: https://1000-island.com/resource/sitemap.xml
```

---

**准备好开始生成内容了吗？** 让我知道你想从哪篇文章开始！
