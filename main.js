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