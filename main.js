/* ═══════════════════════════════════════════════════════
   SWAYAM JADHAV — PORTFOLIO SCRIPTS
   ═══════════════════════════════════════════════════════ */

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ── PROJECT FILTER TABS ── */
document.querySelectorAll('.filter-tab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.filter-tab').forEach(function(t) {
      t.classList.remove('active');
    });
    tab.classList.add('active');
    /* TODO: add filter logic when you add data-category attributes to project cards */
  });
});


/* ── CERTIFICATIONS FLIP CARDS ── */
/* Update this array with your real certifications */
var certs = [
  {
    issuer:    'Google',
    name:      'Google UX Design Certificate',
    date:      'Mar 2024',
    id:        'GGL-UX-2024-XXXX',
    badgeBg:   '#E6F1FB',
    badgeText: '#0C447C',
    verify:    'https://coursera.org/verify/XXXX'
  },
  {
    issuer:    'Coursera',
    name:      'Full-Stack Web Development',
    date:      'Jan 2024',
    id:        'CRS-FS-2024-XXXX',
    badgeBg:   '#EAF3DE',
    badgeText: '#27500A',
    verify:    'https://coursera.org/verify/XXXX'
  },
  {
    issuer:    'NPTEL',
    name:      'Programming in Java',
    date:      'Oct 2023',
    id:        'NPTEL-JAVA-2023',
    badgeBg:   '#FAEEDA',
    badgeText: '#633806',
    verify:    'https://nptel.ac.in/noc/verify'
  },
  {
    issuer:    'Meta',
    name:      'React Developer Basics',
    date:      'Aug 2023',
    id:        'META-RCT-2023-XXXX',
    badgeBg:   '#EEEDFE',
    badgeText: '#3C3489',
    verify:    'https://coursera.org/verify/XXXX'
  },
  {
    issuer:    'AWS',
    name:      'Cloud Practitioner Essentials',
    date:      'Jun 2023',
    id:        'AWS-CLD-2023-XXXX',
    badgeBg:   '#FAECE7',
    badgeText: '#712B13',
    verify:    'https://aws.amazon.com/verification'
  },
  {
    issuer:    'GitHub',
    name:      'GitHub Foundations',
    date:      'May 2023',
    id:        'GH-FND-2023-XXXX',
    badgeBg:   '#F1EFE8',
    badgeText: '#444441',
    verify:    'https://www.credly.com/badges/XXXX'
  }
];

var certsGrid = document.getElementById('certsGrid');

if (certsGrid) {
  certs.forEach(function(c) {
    var card = document.createElement('div');
    card.className = 'flip-card';
    card.innerHTML =
      '<div class="flip-inner">' +
        '<div class="flip-front">' +
          '<span class="issuer-badge" style="background:' + c.badgeBg + ';color:' + c.badgeText + '">' + c.issuer + '</span>' +
          '<div class="cert-name">' + c.name + '</div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center">' +
            '<span class="cert-date">' + c.date + '</span>' +
            '<span class="flip-hint">↻ flip</span>' +
          '</div>' +
        '</div>' +
        '<div class="flip-back">' +
          '<div>' +
            '<div class="back-label">Credential ID</div>' +
            '<div class="back-val">' + c.id + '</div>' +
          '</div>' +
          '<div>' +
            '<div class="back-label">Issued by</div>' +
            '<div class="back-val" style="font-size:14px">' + c.issuer + '</div>' +
            '<a class="verify-link" href="' + c.verify + '" target="_blank" rel="noopener">↗ Verify credential</a>' +
          '</div>' +
        '</div>' +
      '</div>';
    card.addEventListener('click', function() {
      card.classList.toggle('flipped');
    });
    certsGrid.appendChild(card);
  });
}


/* ── ACTIVE NAV HIGHLIGHT ON SCROLL ── */
var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  var scrollY = window.scrollY;
  sections.forEach(function(section) {
    var top    = section.offsetTop - 80;
    var bottom = top + section.offsetHeight;
    var id     = section.getAttribute('id');
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(function(link) {
        link.style.color = link.getAttribute('href') === '#' + id
          ? 'var(--text-main)'
          : '';
      });
    }
  });
});


/* ── BLOG / DEV NOTES ── */
/* Update this array with your real blog posts */
var blogPosts = [
  {
    emoji:    '🔐',
    thumbBg:  '#EDE6D8',
    cat:      'Next.js',
    catBg:    '#FAEEDA',
    catText:  '#633806',
    title:    'How I built JWT auth from scratch in Next.js',
    excerpt:  'Cookies, HS256, and why I stopped using next-auth for this project.',
    date:     'Apr 2025',
    readTime: '5 min read',
    content:  '<p>When building the Achievers Club Portal, I needed role-based auth without the overhead of a third-party library. Here\'s how I did it using <code>jose</code> for JWT signing and HTTP-only cookies for storage.</p><p>The key insight was handling the middleware in <code>proxy.ts</code> — verifying the token on every protected route before it even hits the page component. This keeps the auth logic centralised and easy to audit.</p>'
  },
  {
    emoji:    '🎨',
    thumbBg:  '#D8E4ED',
    cat:      'CSS',
    catBg:    '#EEEDFE',
    catText:  '#3C3489',
    title:    'Dark mode without the flash — a Tailwind approach',
    excerpt:  'The ThemeScript trick that prevents the dreaded white flash on page load.',
    date:     'Mar 2025',
    readTime: '3 min read',
    content:  '<p>Dark mode sounds easy until you hit the flash-of-wrong-theme problem. The fix: inject a tiny inline <code>ThemeScript</code> in your <code>_document.tsx</code> that reads <code>localStorage</code> and applies the class synchronously — before the browser paints.</p>'
  },
  {
    emoji:    '🤖',
    thumbBg:  '#E8EDD8',
    cat:      'AI',
    catBg:    '#EAF3DE',
    catText:  '#27500A',
    title:    'From Anthropic to Gemini to Groq — finding a free AI API',
    excerpt:  'My journey through three AI providers while building Achibot.',
    date:     'Apr 2025',
    readTime: '4 min read',
    content:  '<p>Building Achibot, the AI chatbot for the Achievers Club Portal, was supposed to be the easy part. Spoiler: it wasn\'t.</p><p>Anthropic requires a paid account. Gemini kept throwing model-naming errors. I finally landed on Groq\'s free tier with <code>llama-3.3-70b-versatile</code> — fast, free, and reliable for a club chatbot.</p>'
  }
];

var blogGrid    = document.getElementById('blogGrid');
var readerOverlay = document.getElementById('readerOverlay');
var readerClose   = document.getElementById('readerClose');

if (blogGrid) {
  blogPosts.forEach(function(p) {
    var card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML =
      '<div class="blog-thumb" style="background:' + p.thumbBg + '">' + p.emoji + '</div>' +
      '<div class="blog-body">' +
        '<div class="blog-meta">' +
          '<span class="blog-cat" style="background:' + p.catBg + ';color:' + p.catText + '">' + p.cat + '</span>' +
          '<span class="blog-date">' + p.date + '</span>' +
        '</div>' +
        '<div class="blog-title">' + p.title + '</div>' +
        '<div class="blog-excerpt">' + p.excerpt + '</div>' +
        '<div class="blog-footer">' +
          '<span class="read-time">⏱ ' + p.readTime + '</span>' +
          '<span class="read-more">Read →</span>' +
        '</div>' +
      '</div>';

    card.addEventListener('click', function() {
      document.getElementById('rCat').textContent         = p.cat;
      document.getElementById('rCat').style.background   = p.catBg;
      document.getElementById('rCat').style.color        = p.catText;
      document.getElementById('rTitle').textContent      = p.title;
      document.getElementById('rDate').textContent       = p.date;
      document.getElementById('rTime').textContent       = p.readTime;
      document.getElementById('rContent').innerHTML      = p.content;
      readerOverlay.classList.add('open');
    });

    blogGrid.appendChild(card);
  });
}

if (readerClose) {
  readerClose.addEventListener('click', function() {
    readerOverlay.classList.remove('open');
  });
}

if (readerOverlay) {
  readerOverlay.addEventListener('click', function(e) {
    if (e.target === readerOverlay) readerOverlay.classList.remove('open');
  });
}