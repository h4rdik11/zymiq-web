/* Zymiq site — interactions */

// Scroll progress bar
const progressBar = document.querySelector('.scroll-progress');
const nav = document.querySelector('.nav');

function onScroll() {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
  if (progressBar) progressBar.style.width = pct + '%';

  if (h.scrollTop > 80) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile drawer
const burger = document.querySelector('.hamburger');
const drawer = document.querySelector('.mobile-drawer');
const drawerClose = document.querySelector('.drawer-close');
const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
function openDrawer() {
  drawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
burger?.addEventListener('click', openDrawer);
drawerClose?.addEventListener('click', closeDrawer);
drawerOverlay?.addEventListener('click', closeDrawer);

// Intersection observer for reveal animations
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      // Trigger count-up if stat
      if (e.target.classList.contains('stat')) startCount(e.target);
      // Compliance bar fill
      const fill = e.target.querySelector('.compliance-bar .fill');
      if (fill) {
        const v = fill.getAttribute('data-fill');
        setTimeout(() => fill.style.width = v + '%', 200);
      }
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-clip, .stagger, .stat, .pain-grid, .comp-table, .mock-compliance').forEach(el => io.observe(el));

// Count up
function startCount(el) {
  const target = el.querySelector('.stat-val');
  if (!target) return;
  const raw = target.getAttribute('data-target');
  if (!raw) return;
  const prefix = target.getAttribute('data-prefix') || '';
  const suffix = target.getAttribute('data-suffix') || '';
  const val = parseFloat(raw);
  const duration = 1200;
  const start = performance.now();
  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = val * eased;
    let str;
    if (Number.isInteger(val)) {
      str = Math.round(v).toString();
    } else {
      str = v.toFixed(1);
    }
    target.textContent = prefix + str + suffix;
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Hero word stagger
document.querySelectorAll('.word-stagger').forEach((el, blockIdx) => {
  const text = el.dataset.text || el.textContent;
  el.textContent = '';
  const words = text.split(' ');
  words.forEach((w, i) => {
    const s = document.createElement('span');
    s.innerHTML = w + (i < words.length - 1 ? '&nbsp;' : '');
    s.style.animationDelay = ((blockIdx * words.length + i) * 80) + 'ms';
    el.appendChild(s);
  });
});

// Smooth scroll for nav anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const t = document.querySelector(id);
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeDrawer();
    }
  });
});

// Zymiq column highlight position
function positionZymiqHighlight() {
  const table = document.querySelector('.comp-table');
  if (!table) return;
  const zCell = table.querySelector('th.zymiq-col');
  const highlight = table.querySelector('.zymiq-highlight');
  if (!zCell || !highlight) return;
  const rect = zCell.getBoundingClientRect();
  const parentRect = table.getBoundingClientRect();
  highlight.style.left = (rect.left - parentRect.left) + 'px';
  highlight.style.width = rect.width + 'px';
}
window.addEventListener('resize', positionZymiqHighlight);
window.addEventListener('load', positionZymiqHighlight);
positionZymiqHighlight();
