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


/* ── OPEN SOURCE CONTRIBUTIONS ── */
/* Update this array with your real contributions */
var osContributions = [
  {
    repo:   'facebook/react',
    status: 'merged',
    desc:   'Fixed a typo in the hooks documentation that caused confusion around the useEffect dependency array.',
    pr:     '#PR-28741 · docs fix',
    tags:   ['documentation', 'good first issue']
  },
  {
    repo:   'vercel/next.js',
    status: 'merged',
    desc:   'Added a missing TypeScript return type to the getServerSideProps example in the official docs.',
    pr:     '#PR-51203 · docs fix',
    tags:   ['TypeScript', 'documentation']
  },
  {
    repo:   'tailwindlabs/tailwindcss',
    status: 'open',
    desc:   'Reported a reproducible bug where the dark mode class strategy conflicts with SSR hydration in certain Next.js setups.',
    pr:     '#Issue-9812 · bug report',
    tags:   ['bug', 'needs triage']
  }
];

var osGrid    = document.getElementById('osGrid');
var osTotal   = document.getElementById('osTotal');
var osMerged  = document.getElementById('osMerged');
var osRepos   = document.getElementById('osRepos');

var statusLabels = { merged: 'Merged', open: 'Open', closed: 'Closed' };
var statusClass  = { merged: 'status-merged', open: 'status-open', closed: 'status-closed' };

if (osGrid) {
  osContributions.forEach(function(c) {
    var card = document.createElement('div');
    card.className = 'os-card';

    var tagsHtml = c.tags.map(function(t) {
      return '<span class="os-tag">' + t + '</span>';
    }).join('');

    card.innerHTML =
      '<div class="os-card-top">' +
        '<span class="os-repo">⌥ ' + c.repo + '</span>' +
        '<span class="os-status ' + statusClass[c.status] + '">' + statusLabels[c.status] + '</span>' +
      '</div>' +
      '<div class="os-desc">' + c.desc + '</div>' +
      '<div class="os-pr">' + c.pr + '</div>' +
      '<div class="os-tags">' + tagsHtml + '</div>';

    osGrid.appendChild(card);
  });

  /* Update stats dynamically from data */
  var mergedCount = osContributions.filter(function(c) { return c.status === 'merged'; }).length;
  var uniqueRepos = new Set(osContributions.map(function(c) { return c.repo; })).size;

  if (osTotal)  osTotal.textContent  = osContributions.length;
  if (osMerged) osMerged.textContent = mergedCount;
  if (osRepos)  osRepos.textContent  = uniqueRepos;
}


/* ── GITHUB STATS ── */
/* Replace with your actual GitHub username */
var GITHUB_USERNAME = 'svjadhav2010-hub';

var LANG_COLORS = {
  'JavaScript': '#F0DB4F', 'TypeScript': '#3178C6', 'Python':     '#3572A5',
  'HTML':       '#E44D26', 'CSS':        '#563D7C', 'Shell':       '#89E051',
  'C++':        '#F34B7D', 'Java':       '#B07219', 'Go':          '#00ADD8',
  'Vue':        '#41B883', 'default':    '#8B6A3E'
};

function ghColor(lang) { return LANG_COLORS[lang] || LANG_COLORS['default']; }

async function loadGitHubStats() {
  var loadingEl = document.getElementById('ghLoading');
  var contentEl = document.getElementById('ghContent');
  var errorEl   = document.getElementById('ghError');

  if (!loadingEl) return;

  try {
    var userRes  = await fetch('https://api.github.com/users/' + GITHUB_USERNAME);
    var reposRes = await fetch('https://api.github.com/users/' + GITHUB_USERNAME + '/repos?per_page=100&sort=pushed');

    if (userRes.status === 403) throw new Error('rate limit');
    if (!userRes.ok) throw new Error('User not found: ' + GITHUB_USERNAME);

    var user  = await userRes.json();
    var repos = await reposRes.json();

    loadingEl.style.display = 'none';
    contentEl.style.display = 'block';

    /* Overview stats */
    document.getElementById('ghRepos').textContent     = user.public_repos;
    document.getElementById('ghFollowers').textContent = user.followers;
    document.getElementById('ghFollowing').textContent = user.following;
    document.getElementById('ghGists').textContent     = user.public_gists;
    document.getElementById('ghCreated').textContent   = new Date(user.created_at).getFullYear();
    document.getElementById('ghProfileLink').href      = user.html_url;

    var totalStars = repos.reduce(function(s, r) { return s + r.stargazers_count; }, 0);
    document.getElementById('ghStars').textContent = totalStars;

    var ownRepos = repos.filter(function(r) { return !r.fork; });
    document.getElementById('ghPinnedCount').textContent = Math.min(ownRepos.length, 6);

    /* Language breakdown */
    var langCount = {};
    repos.forEach(function(r) {
      if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
    });
    var langSorted = Object.entries(langCount)
      .sort(function(a, b) { return b[1] - a[1]; })
      .slice(0, 5);
    var langTotal = langSorted.reduce(function(s, l) { return s + l[1]; }, 0);
    var langRow   = document.getElementById('langRow');

    langSorted.forEach(function(l) {
      var pct = Math.round((l[1] / langTotal) * 100);
      var div = document.createElement('div');
      div.className = 'gh-lang-item';
      div.innerHTML =
        '<div class="gh-lang-dot" style="background:' + ghColor(l[0]) + '"></div>' +
        '<span class="gh-lang-name">' + l[0] + '</span>' +
        '<div class="gh-lang-bar-wrap">' +
          '<div class="gh-lang-bar" style="width:' + pct + '%;background:' + ghColor(l[0]) + '"></div>' +
        '</div>' +
        '<span class="gh-lang-pct">' + pct + '%</span>';
      langRow.appendChild(div);
    });

    /* Commit activity graph — approximated from repo push dates */
    var now    = new Date();
    var months = [];
    for (var i = 11; i >= 0; i--) {
      var d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({ label: d.toLocaleString('default', { month: 'short' }), count: 0 });
    }
    repos.forEach(function(r) {
      if (!r.pushed_at) return;
      var pushed = new Date(r.pushed_at);
      var diff   = (now.getFullYear() - pushed.getFullYear()) * 12 + (now.getMonth() - pushed.getMonth());
      if (diff >= 0 && diff < 12) months[11 - diff].count++;
    });

    var maxCount    = Math.max.apply(null, months.map(function(m) { return m.count; })) || 1;
    var totalPushes = months.reduce(function(s, m) { return s + m.count; }, 0);
    document.getElementById('ghTotalCommits').textContent = totalPushes + ' pushes';

    var graphEl  = document.getElementById('commitGraph');
    var labelsEl = document.getElementById('monthLabels');

    months.forEach(function(m) {
      var heightPct = Math.round((m.count / maxCount) * 100);

      var bar = document.createElement('div');
      bar.className    = 'gh-bar';
      bar.style.height = Math.max(heightPct, 6) + '%';
      bar.title        = m.label + ': ' + m.count + ' pushes';
      graphEl.appendChild(bar);

      var lbl = document.createElement('div');
      lbl.className   = 'gh-month-lbl';
      lbl.textContent = m.label;
      labelsEl.appendChild(lbl);
    });

  } catch (err) {
    if (loadingEl) loadingEl.style.display = 'none';
    if (errorEl) {
      errorEl.style.display = 'block';
      /* Show more helpful message for rate limiting */
      errorEl.textContent = err.message && err.message.includes('rate')
        ? 'GitHub API rate limit reached. Stats will load on next visit.'
        : 'Could not load GitHub stats. Check your username in main.js or try again later.';
    }
    console.error('GitHub stats error:', err);
  }
}

loadGitHubStats();


/* ── TERMINAL EASTER EGG ── */
(function() {
  var overlay  = document.getElementById('termOverlay');
  var termBody = document.getElementById('termBody');
  var termInput= document.getElementById('termInput');
  var termClose= document.getElementById('termClose');

  if (!overlay) return;

  var CMDS = {
    help: function() {
      return [
        { t: 't-info',    v: 'Available commands:' },
        { t: 't-output',  v: '  whoami          — who is Swayam?' },
        { t: 't-output',  v: '  ls projects     — list all projects' },
        { t: 't-output',  v: '  skills          — tech stack' },
        { t: 't-output',  v: '  contact         — get in touch' },
        { t: 't-output',  v: '  cat about.txt   — about me' },
        { t: 't-output',  v: '  open github     — open GitHub profile' },
        { t: 't-output',  v: '  open linkedin   — open LinkedIn' },
        { t: 't-output',  v: '  clear           — clear terminal' },
        { t: 't-output',  v: '  sudo hire swayam — ;)' },
      ];
    },
    whoami: function() {
      return [
        { t: 't-success', v: 'Swayam Jadhav' },
        { t: 't-output',  v: 'B.E. CSE Student — KKWIEER, Nashik, Maharashtra' },
        { t: 't-output',  v: 'Full-Stack Developer | Open to internships & freelance' },
        { t: 't-output',  v: 'Building things that live on the internet since 2022.' },
      ];
    },
    'ls projects': function() {
      return [
        { t: 't-info',   v: 'drwxr-xr-x  achievers-club-portal/    [live]' },
        { t: 't-info',   v: 'drwxr-xr-x  student-task-manager/      [private]' },
        { t: 't-info',   v: 'drwxr-xr-x  ai-image-generator/        [private]' },
        { t: 't-output', v: '3 projects found. Visit #projects to learn more.' },
      ];
    },
    skills: function() {
      return [
        { t: 't-info',   v: 'Languages :  JavaScript  TypeScript  Python  C++' },
        { t: 't-info',   v: 'Frontend  :  React  Next.js  Tailwind CSS  HTML  CSS' },
        { t: 't-info',   v: 'Backend   :  Node.js  Express.js' },
        { t: 't-info',   v: 'Database  :  MySQL  TiDB  MongoDB' },
        { t: 't-info',   v: 'Tools     :  Git  GitHub  Vercel  Figma  Postman' },
      ];
    },
    contact: function() {
      return [
        { t: 't-output', v: 'email     swayamvjadhav2010@gmail.com' },
        { t: 't-output', v: 'phone     +91 91465 31857' },
        { t: 't-output', v: 'github    github.com/svjadhav2010-hub' },
        { t: 't-output', v: 'linkedin  linkedin.com/in/swayam-jadhava15b1397' },
        { t: 't-output', v: 'location  Nashik, Maharashtra, India' },
      ];
    },
    'cat about.txt': function() {
      return [
        { t: 't-output', v: "I'm a 3rd-year CSE student who loves turning ideas into" },
        { t: 't-output', v: 'real-world digital products. I build full-stack web apps,' },
        { t: 't-output', v: 'take on real client projects, and am always learning.' },
        { t: 't-output', v: 'Currently: building achieversnashik.in.' },
      ];
    },
    'open github': function() {
      window.open('https://github.com/svjadhav2010-hub', '_blank');
      return [{ t: 't-success', v: 'Opening GitHub profile...' }];
    },
    'open linkedin': function() {
      window.open('https://www.linkedin.com/in/swayam-jadhava15b1397/', '_blank');
      return [{ t: 't-success', v: 'Opening LinkedIn...' }];
    },
    'sudo hire swayam': function() {
      return [
        { t: 't-success', v: '[sudo] Great choice! Initiating hire sequence...' },
        { t: 't-output',  v: 'Checking availability........... Available ✓' },
        { t: 't-output',  v: 'Sending offer to swayamvjadhav2010@gmail.com' },
        { t: 't-success', v: 'Done. Best decision you made today.' },
      ];
    },
    clear: function() { return null; }
  };

  function addLine(type, text) {
    var div = document.createElement('div');
    div.className = 'term-line ' + type;
    div.textContent = text;
    termBody.appendChild(div);
    termBody.scrollTop = termBody.scrollHeight;
  }

  function initTerminal() {
    termBody.innerHTML = '';
    addLine('t-success', 'Welcome to Swayam\'s portfolio terminal v1.0.0');
    addLine('t-output',  'Type "help" to see available commands.');
    addLine('t-output',  '─────────────────────────────────────────────');
  }

  function runCmd(raw) {
    var cmd = raw.trim().toLowerCase();
    addLine('t-prompt', 'swayam@portfolio ~ $ ' + raw);

    if (cmd === 'clear') { termBody.innerHTML = ''; return; }
    if (cmd === '')      { return; }

    var fn = CMDS[cmd];
    if (fn) {
      fn().forEach(function(l) { addLine(l.t, l.v); });
    } else {
      addLine('t-error', 'command not found: ' + raw + '. Type "help" for options.');
    }

    termInput.value = '';
    termInput.focus();
  }

  function openTerminal() {
    overlay.classList.add('open');
    initTerminal();
    setTimeout(function() { termInput.focus(); }, 50);
  }

  function closeTerminal() {
    overlay.classList.remove('open');
  }

  /* Nav button trigger */
  var navBtn = document.getElementById('navTerminalBtn');
  if (navBtn) {
    navBtn.addEventListener('click', function() {
      overlay.classList.contains('open') ? closeTerminal() : openTerminal();
    });
  }

  /* Keyboard trigger: ` or / */
  document.addEventListener('keydown', function(e) {
    var tag = document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.key === '`' || e.key === '/') {
      e.preventDefault();
      overlay.classList.contains('open') ? closeTerminal() : openTerminal();
    }
    if (e.key === 'Escape') closeTerminal();
  });

  termInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') runCmd(this.value);
    if (e.key === 'Escape') closeTerminal();
  });

  termClose.addEventListener('click', closeTerminal);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeTerminal();
  });
})();


/* ── DARK MODE TOGGLE ── */
(function() {
  var btn  = document.getElementById('themeToggle');
  var root = document.getElementById('htmlRoot');

  if (!btn || !root) return;

  btn.addEventListener('click', function() {
    var isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
})();


/* ── SKILL RADAR CHART ── */
(function() {
  var canvas = document.getElementById('radarChart');
  var legend = document.getElementById('radarLegend');
  if (!canvas || typeof Chart === 'undefined') return;

  var skills = [
    { label: 'Frontend',  value: 90, desc: 'React, Next.js, Tailwind, HTML/CSS' },
    { label: 'Backend',   value: 75, desc: 'Node.js, Express.js, REST APIs' },
    { label: 'Databases', value: 70, desc: 'MySQL, TiDB, MongoDB' },
    { label: 'DevOps',    value: 65, desc: 'Git, GitHub, Vercel, Linux' },
    { label: 'Languages', value: 80, desc: 'JS, TypeScript, Python, C++' },
    { label: 'UI / UX',   value: 72, desc: 'Figma, design systems, accessibility' },
  ];

  /* Build legend */
  if (legend) {
    skills.forEach(function(s) {
      var item = document.createElement('div');
      item.className = 'radar-legend-item';
      item.innerHTML =
        '<div class="radar-legend-score">' + s.value + '</div>' +
        '<div>' +
          '<div class="radar-legend-name">' + s.label + '</div>' +
          '<div class="radar-legend-desc">' + s.desc + '</div>' +
        '</div>';
      legend.appendChild(item);
    });
  }

  /* Draw chart */
  new Chart(canvas, {
    type: 'radar',
    data: {
      labels: skills.map(function(s) { return s.label; }),
      datasets: [{
        label: 'Skill level',
        data:  skills.map(function(s) { return s.value; }),
        backgroundColor:    'rgba(196,147,63,0.15)',
        borderColor:        '#C4933F',
        borderWidth:        2,
        pointBackgroundColor: '#C4933F',
        pointBorderColor:   '#fff',
        pointBorderWidth:   2,
        pointRadius:        5,
        pointHoverRadius:   7,
      }]
    },
    options: {
      responsive:          true,
      maintainAspectRatio: true,
      animation: { duration: 1400, easing: 'easeInOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) { return ' ' + ctx.raw + ' / 100'; }
          }
        }
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: { stepSize: 25, display: false },
          grid:       { color: 'rgba(139,106,62,0.12)' },
          angleLines: { color: 'rgba(139,106,62,0.12)' },
          pointLabels: {
            font:  { size: 12, family: "'DM Sans', sans-serif" },
            color: '#7A6A58',
          }
        }
      }
    }
  });
})();