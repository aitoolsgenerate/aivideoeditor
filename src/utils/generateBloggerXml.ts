import { ThemeConfig } from '../types/theme';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function generateBloggerXml(config: ThemeConfig): string {
  const brandFull = escapeXml(`${config.brandName} ${config.brandSubtitle}`.trim());
  const heroCategory = escapeXml(config.heroCategory);
  const heroTitle = escapeXml(config.heroTitle);
  const heroExcerpt = escapeXml(config.heroExcerpt);
  const heroAuthor = escapeXml(config.heroAuthor);
  const heroDate = escapeXml(config.heroDate);
  const projectsTitle = escapeXml(config.projectsTitle);
  const projectsDescription = escapeXml(config.projectsDescription);
  const solutionsTitle = escapeXml(config.solutionsTitle);
  const solutionsDescription = escapeXml(config.solutionsDescription);
  const itServicesTitle = escapeXml(config.itServicesTitle);
  const itServicesDescription = escapeXml(config.itServicesDescription);

  return `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' b:templateVersion='1.3.0' expr:dir='data:blog.languageDirection' lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='UTF-8'/>
  <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
  <title><data:blog.pageTitle/></title>
  <b:include data='blog' name='all-head-content'/>
  <link href='https://fonts.googleapis.com' rel='preconnect'/>
  <link crossorigin='' href='https://fonts.gstatic.com' rel='preconnect'/>
  <link href='https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap' rel='stylesheet'/>

  <b:skin><![CDATA[
/* =========================================================
   Blogger Theme: ${brandFull}
   Architecture: Responsive Agency & Editorial Blog Theme
   =========================================================
<Group description="Brand Colors">
  <Variable name="color.crimson" description="Primary Crimson Accent" type="color" default="${config.primaryCrimson}" value="${config.primaryCrimson}"/>
  <Variable name="color.indigo" description="Secondary Indigo Block" type="color" default="${config.secondaryIndigo}" value="${config.secondaryIndigo}"/>
  <Variable name="color.emerald" description="Accent Emerald Panel" type="color" default="${config.accentEmerald}" value="${config.accentEmerald}"/>
  <Variable name="color.action" description="Primary Action Button" type="color" default="${config.actionBlue}" value="${config.actionBlue}"/>
  <Variable name="color.surface" description="Light Slate Surface" type="color" default="#F0F2F7" value="#F0F2F7"/>
  <Variable name="color.ink" description="Primary Body Ink" type="color" default="#111827" value="#111827"/>
</Group>
*/

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  color: $(color.ink);
  background: #ffffff;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 24px;
}

.font-display {
  font-family: 'Oswald', sans-serif;
}

/* Top 3-Color Tri-Stripe */
.tri-stripe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 4px;
  width: 100%;
}
.tri-stripe .s1 { background: $(color.crimson); }
.tri-stripe .s2 { background: $(color.indigo); }
.tri-stripe .s3 { background: $(color.emerald); }

/* Utility Bar */
.utility-bar {
  border-bottom: 1px solid #eef0f4;
  background: #ffffff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4b5563;
}
.utility-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
}
.utility-links {
  display: flex;
  align-items: center;
  gap: 20px;
}
.utility-links a:hover { color: $(color.crimson); }

/* Main Header */
.site-header {
  background: #ffffff;
  border-bottom: 1px solid #eef0f4;
  position: sticky;
  top: 0;
  z-index: 40;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  height: 76px;
}
.brand-lockup {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0f172a;
  color: #ffffff;
  padding: 8px 14px;
  border-radius: 4px;
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;
}
.nav-menu {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.nav-menu a {
  white-space: nowrap;
  transition: color 0.18s ease;
}
.nav-menu a:hover { color: $(color.crimson); }

/* Hero Section */
.hero-wrap {
  position: relative;
  padding: 0;
  background: #ffffff;
}
.hero-crimson-bg {
  background: $(color.crimson);
  width: 86%;
  padding: 64px 0 80px;
  color: #ffffff;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1.08fr;
  gap: 48px;
  align-items: center;
}
.hero-kicker {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.9;
  margin-bottom: 12px;
}
.hero-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.25rem, 4vw, 3.35rem);
  line-height: 1.05;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 18px;
  text-wrap: balance;
}
.hero-excerpt {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255,255,255,0.92);
  margin-bottom: 22px;
  max-width: 48ch;
}
.hero-meta {
  font-size: 12px;
  color: rgba(255,255,255,0.85);
}
.hero-media {
  margin-right: -12%;
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.2);
}
.hero-media img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

/* Split Services + Projects */
.split-band {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.services-panel {
  background: $(color.indigo);
  color: #ffffff;
  padding: 72px 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
}
.service-tile {
  text-align: center;
}
.service-icon {
  width: 68px;
  height: 68px;
  border-radius: 9999px;
  background: #ffffff;
  color: $(color.indigo);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
  font-weight: 700;
}
.service-title {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  letter-spacing: 0.02em;
}
.projects-panel {
  background: $(color.emerald);
  color: #ffffff;
  padding: 72px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.projects-panel h2 {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2rem, 3.2vw, 2.75rem);
  text-transform: uppercase;
  margin-bottom: 18px;
}

/* Alternating Showcase */
.showcase-section {
  padding: 72px 0;
  background: #ffffff;
}
.showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: stretch;
}
.showcase-card {
  background: $(color.indigo);
  color: #ffffff;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.showcase-card h2 {
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  line-height: 1.15;
  text-transform: uppercase;
  margin-bottom: 16px;
}

/* Metrics Strip */
.stats-strip {
  padding: 28px 0 64px;
  background: #ffffff;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.stat-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.stat-num {
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.stat-label {
  font-size: 12px;
  color: #6b7280;
}

/* IT Services Dual Image Band */
.it-band {
  background: $(color.crimson);
  color: #ffffff;
  padding: 72px 0;
}
.it-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 48px;
  align-items: center;
}
.it-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2rem, 3.4vw, 2.85rem);
  line-height: 1.1;
  margin-bottom: 18px;
}
.btn-action {
  display: inline-block;
  background: $(color.action);
  color: #ffffff;
  padding: 12px 26px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  margin-top: 20px;
  transition: opacity 0.18s ease;
}
.btn-action:hover { opacity: 0.92; }

/* Security & Features Grid */
.features-band {
  background: $(color.surface);
  padding: 72px 0;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}
.feature-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 36px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
}
.feature-badge {
  width: 52px;
  height: 52px;
  border-radius: 9999px;
  background: #eef2ff;
  color: $(color.action);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 700;
}
.feature-card h3 {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 8px;
}
.feature-card p {
  font-size: 14px;
  color: #4b5563;
}

/* Blogger Main Post Loop */
.blog-feed-band {
  background: $(color.surface);
  padding: 32px 0 80px;
}
.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.post-card {
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
}
.post-thumb {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #e5e7eb;
}
.post-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post-body {
  padding: 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.post-meta {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 8px;
}
.post-title {
  font-family: 'Oswald', sans-serif;
  font-size: 22px;
  line-height: 1.2;
  margin-bottom: 10px;
}
.post-snippet {
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 16px;
  flex: 1;
}
.show-more-wrap {
  text-align: center;
  margin-top: 40px;
}

/* Single Post View */
.single-post-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 40px;
  border: 1px solid #e5e7eb;
}
.single-post-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.12;
  margin-bottom: 14px;
}
.single-post-content {
  font-size: 16px;
  line-height: 1.8;
  color: #374151;
  margin-top: 24px;
}
.single-post-content p { margin-bottom: 18px; }

/* Footer */
.site-footer {
  background: #ffffff;
  padding: 28px 0;
  border-top: 1px solid #eef0f4;
  font-size: 13px;
  color: #6b7280;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

@media (max-width: 960px) {
  .hero-crimson-bg { width: 100%; }
  .hero-grid, .split-band, .showcase-grid, .it-grid, .features-grid, .posts-grid {
    grid-template-columns: 1fr;
  }
  .hero-media { margin-right: 0; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .nav-menu { display: none; }
}
]]></b:skin>
</head>
<body>
  <!-- Top 3-Color Accent Bar -->
  <div class='tri-stripe'>
    <div class='s1'/>
    <div class='s2'/>
    <div class='s3'/>
  </div>

  <!-- Top Utility Bar -->
  <div class='utility-bar'>
    <div class='container utility-inner'>
      <div class='utility-links'>
        <a expr:href='data:blog.homepageUrl'>Home</a>
        <a href='#about-services'>About</a>
        <a href='#contact'>Contact</a>
      </div>
      <div class='utility-links'>
        <a href='#blog-posts'>Articles</a>
        <a expr:href='data:blog.homepageUrl + &quot;feeds/posts/default&quot;'>RSS</a>
      </div>
    </div>
  </div>

  <!-- Main Navigation Header -->
  <header class='site-header'>
    <div class='container header-inner'>
      <b:section id='header-logo' maxwidgets='1' showaddelement='no'>
        <b:widget id='Header1' locked='true' title='Site Header' type='Header' version='2'>
          <b:includable id='main'>
            <a class='brand-lockup' expr:href='data:blog.homepageUrl'>
              <span><data:title/></span>
            </a>
          </b:includable>
        </b:widget>
      </b:section>

      <nav class='nav-menu'>
        <a expr:href='data:blog.homepageUrl'>Home</a>
        <a href='#services'>Features</a>
        <a href='#solutions'>Solutions</a>
        <a href='#blog-posts'>Blog</a>
      </nav>
    </div>
  </header>

  <!-- Homepage Showcase Sections (Index Pages Only) -->
  <b:if cond='data:blog.pageType == &quot;index&quot;'>
    <!-- Hero Section -->
    <section class='hero-wrap'>
      <div class='hero-crimson-bg'>
        <div class='container'>
          <div class='hero-grid'>
            <div>
              <div class='hero-kicker'>${heroCategory}</div>
              <h1 class='hero-title'>${heroTitle}</h1>
              <p class='hero-excerpt'>${heroExcerpt}</p>
              <div class='hero-meta'>${heroAuthor} &#183; ${heroDate}</div>
            </div>
            <div class='hero-media'>
              <img alt='${heroTitle}' src='https://via.placeholder.com/800x600/1e293b/ffffff?text=Replace+With+Team+Photo'/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services + Our Projects Split -->
    <section class='split-band' id='services'>
      <div class='services-panel'>
        <div class='service-tile'>
          <div class='service-icon'>App</div>
          <div class='service-title'>App Design</div>
        </div>
        <div class='service-tile'>
          <div class='service-icon'>Web</div>
          <div class='service-title'>Web Design</div>
        </div>
        <div class='service-tile'>
          <div class='service-icon'>&lt;/&gt;</div>
          <div class='service-title'>Web Development</div>
        </div>
        <div class='service-tile'>
          <div class='service-icon'>UI</div>
          <div class='service-title'>UI Systems</div>
        </div>
      </div>
      <div class='projects-panel'>
        <h2>${projectsTitle}</h2>
        <p>${projectsDescription}</p>
      </div>
    </section>

    <!-- Alternating Modern Tech Solutions -->
    <section class='showcase-section' id='solutions'>
      <div class='container'>
        <div class='showcase-grid'>
          <div>
            <img alt='${solutionsTitle}' src='https://via.placeholder.com/800x600/0f172a/ffffff?text=Replace+With+Solutions+Photo' style='width:100%;height:100%;object-fit:cover;'/>
          </div>
          <div class='showcase-card'>
            <h2>${solutionsTitle}</h2>
            <p>${solutionsDescription}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Metrics Strip -->
    <section class='stats-strip'>
      <div class='container'>
        <div class='stats-grid'>
          <div class='stat-item'>
            <div>
              <div class='stat-num'>1458</div>
              <div class='stat-label'>Projects Completed</div>
            </div>
          </div>
          <div class='stat-item'>
            <div>
              <div class='stat-num'>1247</div>
              <div class='stat-label'>Cups of Coffee</div>
            </div>
          </div>
          <div class='stat-item'>
            <div>
              <div class='stat-num'>1763</div>
              <div class='stat-label'>Worldwide Clients</div>
            </div>
          </div>
          <div class='stat-item'>
            <div>
              <div class='stat-num'>1763</div>
              <div class='stat-label'>Active Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted IT Services Section -->
    <section class='it-band' id='about-services'>
      <div class='container'>
        <div class='it-grid'>
          <div>
            <h2 class='it-title'>${itServicesTitle}</h2>
            <p>${itServicesDescription}</p>
            <a class='btn-action' href='#blog-posts'>About Us</a>
          </div>
          <div>
            <img alt='Trusted IT Team' src='https://via.placeholder.com/800x600/334155/ffffff?text=Replace+With+Office+Photo' style='border-radius:12px;'/>
          </div>
        </div>
      </div>
    </section>

    <!-- Security & Architecture 2x2 Grid -->
    <section class='features-band'>
      <div class='container'>
        <div class='features-grid'>
          <div class='feature-card'>
            <div class='feature-badge'>01</div>
            <div>
              <h3>Increased &amp; Evolving Threat</h3>
              <p>Proactive security audits and automated scanning protect digital properties before vulnerabilities reach production.</p>
            </div>
          </div>
          <div class='feature-card'>
            <div class='feature-badge'>02</div>
            <div>
              <h3>Continuous Monitoring</h3>
              <p>Real-time uptime checks and Core Web Vitals tracking keep agency publishing feeds fast and resilient.</p>
            </div>
          </div>
          <div class='feature-card'>
            <div class='feature-badge'>03</div>
            <div>
              <h3>Structural Weaknesses</h3>
              <p>Clean semantic markup and modular template variables eliminate brittle CSS overrides and layout regressions.</p>
            </div>
          </div>
          <div class='feature-card'>
            <div class='feature-badge'>04</div>
            <div>
              <h3>Widening Attack Surface</h3>
              <p>Scoped editorial permissions and hardened HTTPS delivery safeguard multi-author workflows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </b:if>

  <!-- Main Blogger Posts Section -->
  <main class='blog-feed-band' id='blog-posts'>
    <div class='container'>
      <b:section id='main' maxwidgets='1' showaddelement='yes'>
        <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2'>
          <b:includable id='main' var='top'>
            <b:if cond='data:view.isMultipleItems'>
              <div class='posts-grid'>
                <b:loop values='data:posts' var='post'>
                  <article class='post-card'>
                    <b:if cond='data:post.featuredImage'>
                      <a class='post-thumb' expr:href='data:post.url'>
                        <img expr:alt='data:post.title' expr:src='data:post.featuredImage'/>
                      </a>
                    </b:if>
                    <div class='post-body'>
                      <div class='post-meta'>
                        <b:if cond='data:post.labels'>
                          <span><data:post.labels.first.name/> &#183; </span>
                        </b:if>
                        <span><data:post.date/></span>
                      </div>
                      <h3 class='post-title'>
                        <a expr:href='data:post.url'><data:post.title/></a>
                      </h3>
                      <p class='post-snippet'>
                        <b:eval expr='snippet(data:post.body, { length: 130, links: false, linebreaks: false })'/>
                      </p>
                      <a class='btn-action' expr:href='data:post.url' style='margin-top:auto;align-self:flex-start;padding:8px 16px;font-size:12px;'>Read Article</a>
                    </div>
                  </article>
                </b:loop>
              </div>

              <div class='show-more-wrap'>
                <b:if cond='data:olderPageUrl'>
                  <a class='btn-action' expr:href='data:olderPageUrl'>Show More</a>
                </b:if>
              </div>
            <b:else/>
              <b:loop values='data:posts' var='post'>
                <article class='single-post-card'>
                  <div class='post-meta'>
                    <data:post.author.name/> &#183; <data:post.date/>
                  </div>
                  <h1 class='single-post-title'><data:post.title/></h1>
                  <div class='single-post-content'>
                    <data:post.body/>
                  </div>
                </article>
              </b:loop>
            </b:if>
          </b:includable>
        </b:widget>
      </b:section>
    </div>
  </main>

  <!-- Footer Accent & Copyright -->
  <div class='tri-stripe'>
    <div class='s1'/>
    <div class='s2'/>
    <div class='s3'/>
  </div>
  <footer class='site-footer' id='contact'>
    <div class='container footer-inner'>
      <div>&#169; <data:blog.title/> &#183; Built for Blogger</div>
      <div>
        <a expr:href='data:blog.homepageUrl'>Back to Top</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}
