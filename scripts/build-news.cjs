const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

// --- НАСТРОЙКИ ---
const SITE_URL = 'https://tirlogistica.ru';
const NEWS_SOURCE_DIR = './news';
const NEWS_OUTPUT_DIR = './news';
const NEWS_LIST_FILE = './news.html';
const SITEMAP_FILE = './sitemap.xml';

// --- ПРОСТОЙ MARKDOWN-ПАРСЕР ---
function parseMarkdown(text) {
  return text
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\n\n/gim, '</p><p>')
    .replace(/^(?!<)(.+)$/gim, '<p>$1</p>')
    .replace(/<p><h/gim, '<h')
    .replace(/<\/h(\d)><\/p>/gim, '</h$1>')
    .replace(/<p><li>/gim, '<ul><li>')
    .replace(/<\/li><\/p>/gim, '</li></ul>')
    .replace(/<p><blockquote>/gim, '<blockquote>')
    .replace(/<\/blockquote><\/p>/gim, '</blockquote>');
}

// --- ПАРСЕР ФРОНТМАТТЕРА ---
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };
  
  const metaText = match[1];
  const body = match[2];
  const meta = {};
  
  metaText.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      meta[key.trim()] = valueParts.join(':').trim();
    }
  });
  
  return { meta, body };
}

// --- ШАБЛОН СТРАНИЦЫ НОВОСТИ ---
function pageTemplate(meta, htmlContent) {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title} | TIRLogistica</title>
  <meta name="description" content="${meta.description || meta.title}">
  <meta name="keywords" content="${meta.keywords || ''}">
  <link rel="canonical" href="${SITE_URL}/news/${meta.slug}.html">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', system-ui, sans-serif; color: #1a1a1a; line-height: 1.7; background: #fff; }
    .container { max-width: 800px; margin: 0 auto; padding: 0 24px; }
    header { position: sticky; top: 0; z-index: 100; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #eee; }
    .header-inner { max-width: 1200px; margin: 0 auto; padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; }
    .logo { font-size: 22px; font-weight: 800; color: #0a2540; text-decoration: none; }
    .logo span { color: #f97316; }
    nav a { margin-left: 28px; text-decoration: none; color: #444; font-size: 15px; font-weight: 500; }
    nav a:hover { color: #f97316; }
    .btn-header { background: #f97316; color: #fff; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 14px; text-decoration: none; margin-left: 28px; }
    article { padding: 60px 0; }
    article h1 { font-size: 36px; font-weight: 800; color: #0a2540; margin-bottom: 16px; line-height: 1.2; }
    article time { display: block; color: #64748b; font-size: 14px; margin-bottom: 32px; }
    article h2 { font-size: 26px; font-weight: 700; color: #0a2540; margin: 32px 0 16px; }
    article h3 { font-size: 20px; font-weight: 700; color: #0a2540; margin: 24px 0 12px; }
    article p { margin-bottom: 16px; font-size: 17px; color: #334155; }
    article ul, article ol { margin: 16px 0 16px 24px; }
    article li { margin-bottom: 8px; font-size: 17px; color: #334155; }
    article blockquote { border-left: 4px solid #f97316; padding-left: 20px; margin: 24px 0; color: #64748b; font-style: italic; }
    article a { color: #f97316; text-decoration: none; }
    article a:hover { text-decoration: underline; }
    .back-link { display: inline-block; margin-top: 40px; padding: 12px 24px; background: #f97316; color: #fff; border-radius: 8px; text-decoration: none; font-weight: 600; }
    .back-link:hover { background: #ea580c; }
    footer { background: #0a2540; color: #94a3b8; padding: 40px 0; text-align: center; font-size: 14px; margin-top: 80px; }
    footer strong { color: #fff; }
    @media (max-width: 768px) {
      article h1 { font-size: 26px; }
      nav { display: none; }
    }
  </style>
</head>
<body>

<header>
  <div class="header-inner">
    <a href="/" class="logo">TIR<span>Logistica</span></a>
    <nav>
      <a href="/#services">Услуги</a>
      <a href="/#steps">Как работаем</a>
      <a href="/#destinations">Направления</a>
      <a href="/transport.html">Типы авто</a>
      <a href="/dokumenty.html">Документы</a>
      <a href="/news.html">Новости</a>
      <a href="/#contacts">Контакты</a>
    </nav>
    <a href="/#cta" class="btn-header">Оставить заявку</a>
  </div>
</header>

<article>
  <div class="container">
    <h1>${meta.title}</h1>
    <time>${meta.date}</time>
    <div class="content">
      ${htmlContent}
    </div>
    <a href="/news.html" class="back-link">← Все новости</a>
  </div>
</article>

<footer>
  <div class="container">
    <strong>JINGXIANG COMMERCE SERVICE (SHANDONG) CO., LTD</strong><br>
    TIR-перевозки Россия → Китай | Китай → Россия
  </div>
</footer>

</body>
</html>`;
}

// --- ГЛАВНАЯ ФУНКЦИЯ ---
async function buildNews() {
  console.log('🚀 Начинаю сборку новостей...');
  
  const files = glob.sync(`${NEWS_SOURCE_DIR}/*.md`)
    .filter(f => !path.basename(f).startsWith('_'));
  
  if (files.length === 0) {
    console.log('⚠️ Нет новостей для сборки');
    return;
  }
  
  const newsList = [];
  
  for (const file of files) {
    const rawContent = fs.readFileSync(file, 'utf-8');
    const { meta, body } = parseFrontmatter(rawContent);
    
    const slug = path.basename(file, '.md');
    meta.slug = slug;
    meta.title = meta.title || slug;
    meta.date = meta.date || new Date().toISOString().split('T')[0];
    
    const htmlContent = parseMarkdown(body);
    const finalHtml = pageTemplate(meta, htmlContent);
    
    const outputFile = path.join(NEWS_OUTPUT_DIR, `${slug}.html`);
    fs.outputFileSync(outputFile, finalHtml);
    
    newsList.push({
      slug,
      title: meta.title,
      date: meta.date,
      description: meta.description || ''
    });
    
    console.log(`✅ Создана: ${slug}.html`);
  }
  
  // Сортируем по дате (новые сверху)
  newsList.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // --- ГЕНЕРАЦИЯ СТРАНИЦЫ /news.html ---
  const newsListHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Новости логистики Россия-Китай | TIRLogistica</title>
  <meta name="description" content="Актуальные новости логистики, таможни и международной торговли. Обновления по маршрутам Россия-Китай.">
  <link rel="canonical" href="${SITE_URL}/news.html">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', system-ui, sans-serif; color: #1a1a1a; line-height: 1.6; background: #fff; }
    .container { max-width: 1000px; margin: 0 auto; padding: 0 24px; }
    header { position: sticky; top: 0; z-index: 100; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #eee; }
    .header-inner { max-width: 1200px; margin: 0 auto; padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; }
    .logo { font-size: 22px; font-weight: 800; color: #0a2540; text-decoration: none; }
    .logo span { color: #f97316; }
    nav a { margin-left: 28px; text-decoration: none; color: #444; font-size: 15px; font-weight: 500; }
    nav a:hover { color: #f97316; }
    .btn-header { background: #f97316; color: #fff; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 14px; text-decoration: none; margin-left: 28px; }
    .page-hero { background: linear-gradient(135deg, #0a2540 0%, #1a3a5c 100%); color: #fff; padding: 60px 0 40px; }
    .page-hero h1 { font-size: 38px; font-weight: 800; margin-bottom: 12px; }
    .page-hero p { font-size: 17px; color: #cbd5e1; }
    .news-grid { padding: 60px 0; }
    .news-card { background: #f8fafc; border-radius: 16px; padding: 32px; border: 1px solid #e2e8f0; margin-bottom: 20px; transition: all 0.3s; }
    .news-card:hover { border-color: #f97316; box-shadow: 0 12px 32px rgba(249,115,22,0.08); }
    .news-card time { display: block; color: #64748b; font-size: 14px; margin-bottom: 12px; }
    .news-card h2 { font-size: 22px; font-weight: 700; color: #0a2540; margin-bottom: 12px; }
    .news-card h2 a { color: #0a2540; text-decoration: none; }
    .news-card h2 a:hover { color: #f97316; }
    .news-card p { color: #64748b; font-size: 15px; margin-bottom: 16px; }
    .news-card .read-more { color: #f97316; font-weight: 600; text-decoration: none; font-size: 15px; }
    .news-card .read-more:hover { text-decoration: underline; }
    footer { background: #0a2540; color: #94a3b8; padding: 40px 0; text-align: center; font-size: 14px; }
    footer strong { color: #fff; }
    @media (max-width: 768px) {
      .page-hero h1 { font-size: 28px; }
      nav { display: none; }
    }
  </style>
</head>
<body>

<header>
  <div class="header-inner">
    <a href="/" class="logo">TIR<span>Logistica</span></a>
    <nav>
      <a href="/#services">Услуги</a>
      <a href="/#steps">Как работаем</a>
      <a href="/#destinations">Направления</a>
      <a href="/transport.html">Типы авто</a>
      <a href="/dokumenty.html">Документы</a>
      <a href="/news.html">Новости</a>
      <a href="/#contacts">Контакты</a>
    </nav>
    <a href="/#cta" class="btn-header">Оставить заявку</a>
  </div>
</header>

<section class="page-hero">
  <div class="container">
    <h1>Новости логистики</h1>
    <p>Актуальные новости таможни, логистики и международной торговли Россия-Китай.</p>
  </div>
</section>

<section class="news-grid">
  <div class="container">
    ${newsList.map(news => `
      <div class="news-card">
        <time>${news.date}</time>
        <h2><a href="/news/${news.slug}.html">${news.title}</a></h2>
        <p>${news.description}</p>
        <a href="/news/${news.slug}.html" class="read-more">Читать далее →</a>
      </div>
    `).join('')}
  </div>
</section>

<footer>
  <div class="container">
    <strong>JINGXIANG COMMERCE SERVICE (SHANDONG) CO., LTD</strong><br>
    TIR-перевозки Россия → Китай | Китай → Россия
  </div>
</footer>

</body>
</html>`;
  
  fs.writeFileSync(NEWS_LIST_FILE, newsListHtml);
  console.log(`✅ Создана страница /news.html со списком (${newsList.length} новостей)`);
  
  // --- ОБНОВЛЕНИЕ SITEMAP.XML ---
  const sitemapUrls = [
    { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE_URL}/transport.html`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE_URL}/dokumenty.html`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${SITE_URL}/news.html`, priority: '0.8', changefreq: 'daily' },
    ...newsList.map(n => ({
      loc: `${SITE_URL}/news/${n.slug}.html`,
      priority: '0.6',
      changefreq: 'monthly'
    }))
  ];
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <priority>${u.priority}</priority>
    <changefreq>${u.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;
  
  fs.writeFileSync(SITEMAP_FILE, sitemapXml);
  console.log(`✅ Обновлён sitemap.xml (${sitemapUrls.length} URL)`);
  
  console.log('🎉 Готово!');
}

buildNews().catch(err => {
  console.error('❌ Ошибка:', err);
  process.exit(1);
});
