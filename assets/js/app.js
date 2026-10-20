/* ==========================================================================
   邓俊浩 · 作品集 交互脚本
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------ data */
  var RENDERS = [
    { s: 'workshop-hero', t: '老旧工作坊 · 主视觉', c: 'Interior / 室内叙事' },
    { s: 'temple-01', t: '神社参道 01', c: 'Exterior / 建筑与地形' },
    { s: 'alley-01', t: '废弃小巷 01', c: 'Exterior / 植被与废墟' },
    { s: 'factory', t: '朋克工厂', c: 'Industrial / 大尺度' },
    { s: 'space-city', t: '太空都市计划', c: 'Concept / 概念场景' },
    { s: 'workshop-01', t: '老旧工作坊 01', c: 'Interior / 道具陈设' },
    { s: 'workshop-02', t: '老旧工作坊 02', c: 'Interior / 木构细节' },
    { s: 'workshop-03', t: '老旧工作坊 03', c: 'Interior / 窗光' },
    { s: 'workshop-04', t: '老旧工作坊 04', c: 'Interior / 长焦压缩' },
    { s: 'workshop-05', t: '老旧工作坊 05', c: 'Interior / 工作台' },
    { s: 'workshop-06', t: '老旧工作坊 06', c: 'Interior / 材质近景' },
    { s: 'workshop-07', t: '老旧工作坊 07', c: 'Interior / 层次' },
    { s: 'workshop-08', t: '老旧工作坊 08', c: 'Interior / 光线' },
    { s: 'workshop-09', t: '老旧工作坊 09', c: 'Interior / 陈设' },
    { s: 'temple-02', t: '神社参道 02', c: 'Exterior / 参道' },
    { s: 'temple-03', t: '神社参道 03', c: 'Exterior / 石灯' },
    { s: 'temple-04', t: '神社参道 04', c: 'Exterior / 入口' },
    { s: 'maple', t: '秋枫林', c: 'Nature / 秋季植被' },
    { s: 'bamboo', t: '竹林小径', c: 'Nature / 逆光' },
    { s: 'forest', t: '林间光束', c: 'Nature / 体积光' },
    { s: 'alley-02', t: '废弃小巷 02', c: 'Exterior / 潮湿材质' },
    { s: 'church-stairs', t: '废弃教堂阶梯', c: 'Exterior / 遗迹' },
    { s: 'highway', t: '废弃公路', c: 'Exterior / 道路' }
  ];

  var VIDEOS = [
    { f: 'renders-alley', t: '废弃小巷', c: '场景漫游 · 雨后' },
    { f: 'renders-temple', t: '寺庙前', c: '场景漫游 · 晨光' },
    { f: 'renders-maple', t: '古风枫叶林', c: '场景漫游 · 秋' },
    { f: 'renders-bamboo', t: '竹林', c: '场景漫游 · 逆光' },
    { f: 'renders-factory', t: '朋克工厂', c: '场景漫游 · 工业' },
    { f: 'renders-workshop-layers', t: '老旧工作坊 · 分层演示', c: '白模与模块分层' },
    { f: 'renders-workshop-grade', t: '老旧工作坊 · 调色成片', c: '后期调色对比' }
  ];

  var CONTEST = [
    { f: 'taikong', t: '太空都市计划', c: '金砖国家技能大赛 · XR 虚拟制片', img: 'assets/img/covers/taikong.webp' },
    { f: 'gongwei', t: '工位上的勇者', c: '金砖国家技能大赛 · 竞赛作品', img: 'assets/img/covers/gongwei.webp' },
    { f: 'zhuihun', t: '渡魂巡吏', c: '未来设计师 · 广东省赛区二等奖', img: 'assets/img/covers/zhuihun.webp' }
  ];

  var PROJECTS = [
    { f: 'zhuihun', t: '渡魂巡吏', c: '个人项目 · 策划 / 程序 / 关卡', img: 'assets/img/covers/zhuihun.webp' },
    { f: 'zhulang', t: '悟空 · 逐浪奇旅', c: '项目实录 · 同工作室', img: 'assets/img/covers/zhulang.webp' },
    { f: 'menggui', t: '悟空 · 猛鬼夜市', c: '项目实录 · 同工作室', img: 'assets/img/covers/menggui.webp' },
    { f: 'yulong', t: '悟空 · 御龙骑士', c: '项目实录 · 同工作室', img: 'assets/img/covers/yulong.webp' },
    { f: 'rpg', t: 'RPG 战斗 Demo', c: '学习习作 · C++ 教程', img: 'assets/img/covers/rpg.webp' }
  ];

  var CERTS = [
    { s: 'brics-final', t: '金砖国家技能发展与技术创新大赛 · XR 虚拟制片 二等奖', l: '2025 / 国家级' },
    { s: 'brics-qual', t: '金砖国家技能发展与技术创新大赛 · 预选赛', l: '2025 / 国家级' },
    { s: 'haochuangyi', t: '中国好创意 · 数字艺术设计大赛 优秀奖', l: '2026 / 国家级' },
    { s: 'design-2025', t: '广东省职业院校技能大赛 · 数字艺术设计 二等奖', l: '2025 / 省级' },
    { s: 'fdesign-13', t: '第 13 届未来设计师 · 广东省赛区 二等奖', l: '2025 / 省级' },
    { s: 'guoqing', t: '国青杯高校艺术设计作品展 一等奖', l: '2025 / 省级' },
    { s: 'golddolphin', t: '金海豚奖 · 21 天游戏开发大赛《社鼓神像》完赛', l: '完赛证书' }
  ];

  /* --------------------------------------------------------------- helpers */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* --------------------------------------------------------- render grids */
  function renderRenders() {
    var box = document.querySelector('[data-grid="renders"]');
    if (!box) return;
    RENDERS.forEach(function (r, i) {
      var b = el('button', 'item');
      b.setAttribute('data-item', 'image');
      b.setAttribute('data-src', 'assets/img/renders/full/' + r.s + '.webp');
      b.setAttribute('data-title', r.t);
      b.setAttribute('data-sub', r.c);
      b.setAttribute('aria-label', '查看 ' + r.t);
      b.innerHTML =
        '<span class="item__thumb">' +
          '<span class="item__no">' + String(i + 1).padStart(2, '0') + '</span>' +
          '<img src="assets/img/renders/thumb/' + r.s + '.webp" alt="' + r.t + '" loading="lazy" decoding="async">' +
        '</span>' +
        '<span class="item__meta"><h4>' + r.t + '</h4><span>' + r.c.split(' / ')[0] + '</span></span>';
      box.appendChild(b);
    });
  }

  function videoCard(v, i) {
    var b = el('button', 'item vitem');
    b.setAttribute('data-item', 'video');
    b.setAttribute('data-src', 'assets/video/' + v.f + '.mp4');
    b.setAttribute('data-title', v.t);
    b.setAttribute('data-sub', v.c);
    b.setAttribute('aria-label', '播放 ' + v.t);
    var thumb = v.img || ('assets/video/poster/' + v.f + '.jpg');
    b.innerHTML =
      '<span class="item__thumb">' +
        '<span class="item__no">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<img src="' + thumb + '" alt="' + v.t + '" loading="lazy" decoding="async">' +
        '<span class="item__vt"><i></i></span>' +
      '</span>' +
      '<span class="vitem__body"><h4>' + v.t + '</h4><p>' + v.c + '</p></span>';
    return b;
  }

  function renderVideos() {
    var box = document.querySelector('[data-grid="videos"]');
    if (!box) return;
    VIDEOS.forEach(function (v, i) { box.appendChild(videoCard(v, i)); });
    var c = document.querySelector('[data-grid="contest"]');
    CONTEST.forEach(function (v, i) { c.appendChild(videoCard(v, i)); });
    var p = document.querySelector('[data-grid="projects"]');
    PROJECTS.forEach(function (v, i) { p.appendChild(videoCard(v, i)); });
  }

  function renderCerts() {
    var box = document.querySelector('[data-grid="certs"]');
    if (!box) return;
    CERTS.forEach(function (c) {
      var b = el('button', 'cert');
      b.setAttribute('data-item', 'image');
      b.setAttribute('data-src', 'assets/img/certs/' + c.s + '.webp');
      b.setAttribute('data-title', c.t);
      b.setAttribute('data-sub', c.l);
      b.setAttribute('data-contain', '1');
      b.innerHTML = '<img src="assets/img/certs/' + c.s + '.webp" alt="' + c.t + '" loading="lazy" decoding="async">' +
        '<figcaption>' + c.t + '<span>' + c.l + '</span></figcaption>';
      box.appendChild(b);
    });
  }

  renderRenders();
  renderVideos();
  renderCerts();

  /* ----------------------------------------------------------------- tabs */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var key = tab.getAttribute('data-tab');
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      document.querySelectorAll('.panel').forEach(function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-panel') === key);
      });
    });
  });

  /* --------------------------------------------------------------- header */
  var header = document.getElementById('header');
  var hero = document.getElementById('hero');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var sections = navLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  var ticking = false;

  function updateNav(y) {
    var bottom = y + window.innerHeight >= document.documentElement.scrollHeight - 60;
    var probe = y + window.innerHeight * 0.42;
    var current = null;
    if (!bottom) {
      sections.forEach(function (s) {
        var abs = s.getBoundingClientRect().top + y;
        if (abs <= probe) current = s;
      });
    }
    navLinks.forEach(function (a) {
      a.classList.toggle('is-active', !!current && a.getAttribute('href') === '#' + current.id);
    });
  }

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('is-solid', y > 40);
    if (!reduceMotion && hero) {
      var media = document.getElementById('heroMedia');
      if (media && y < window.innerHeight * 1.2) {
        media.style.transform = 'translate3d(0,' + (y * 0.16).toFixed(2) + 'px,0) scale(1.04)';
      }
    }
    updateNav(y);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* --------------------------------------------------------- scroll reveal */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          revObs.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (n) { revObs.observe(n); });
  } else {
    revealEls.forEach(function (n) { n.classList.add('is-in'); });
  }

  /* ------------------------------------------------------ hover previews */
  var hoverTimer = null;

  function attachPreview(card) {
    var src = card.getAttribute('data-preview');
    if (!src) return;

    card.addEventListener('mouseenter', function () {
      hoverTimer = setTimeout(function () {
        if (card.querySelector('.pcard__video')) return;
        var v = document.createElement('video');
        v.className = 'pcard__video';
        v.muted = true;
        v.loop = true;
        v.playsInline = true;
        v.setAttribute('playsinline', '');
        v.preload = 'auto';
        v.src = src;
        card.querySelector('.pcard__media').appendChild(v);
        var play = v.play();
        if (play && play.then) {
          play.then(function () { card.classList.add('is-playing'); }).catch(function () {});
        }
        v.addEventListener('playing', function () { card.classList.add('is-playing'); });
      }, 160);
    });

    card.addEventListener('mouseleave', function () {
      clearTimeout(hoverTimer);
      card.classList.remove('is-playing');
      var v = card.querySelector('.pcard__video');
      if (v) {
        v.pause();
        v.removeAttribute('src');
        v.load();
        v.remove();
      }
    });

    card.addEventListener('click', function () {
      openLb([{ type: 'video', src: src, title: card.querySelector('.pcard__title').firstChild.nodeValue.trim(), sub: '' }], 0);
    });
    card.style.cursor = 'pointer';
  }

  document.querySelectorAll('.pcard[data-preview]').forEach(attachPreview);

  /* ------------------------------------------------------------- lightbox */
  var lb = document.getElementById('lightbox');
  var lbStage = document.getElementById('lbStage');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  var lbClose = document.getElementById('lbClose');
  var lbList = [];
  var lbIndex = 0;

  function collect(node) {
    var panel = node.closest('.panel');
    var scope = panel || node.closest('section') || document;
    return Array.prototype.slice.call(scope.querySelectorAll('[data-item]')).map(function (n) {
      return {
        type: n.getAttribute('data-item'),
        src: n.getAttribute('data-src'),
        title: n.getAttribute('data-title') || '',
        sub: n.getAttribute('data-sub') || '',
        contain: n.getAttribute('data-contain') === '1'
      };
    });
  }

  function openLb(list, index) {
    lbList = list;
    lbIndex = index || 0;
    showLb();
    lb.classList.add('is-open');
    document.body.classList.add('is-locked');
  }

  function showLb() {
    var item = lbList[lbIndex];
    if (!item) return;
    lbStage.innerHTML = '';
    var media;
    if (item.type === 'video') {
      media = document.createElement('video');
      media.src = item.src;
      media.controls = true;
      media.autoplay = true;
      media.playsInline = true;
      media.setAttribute('playsinline', '');
    } else {
      media = document.createElement('img');
      media.src = item.src;
      media.alt = item.title;
      if (item.contain) { media.style.background = '#0b0d10'; media.style.padding = '14px'; media.style.maxWidth = 'min(78vw, 1100px)'; }
    }
    lbStage.appendChild(media);

    var cap = el('div', 'lb__cap');
    cap.innerHTML = '<b>' + item.title + '</b><span>' + (item.sub || '') + '</span>';
    lbStage.appendChild(cap);

    var multi = lbList.length > 1;
    lbPrev.style.display = multi ? '' : 'none';
    lbNext.style.display = multi ? '' : 'none';
    cap.style.display = 'flex';
  }

  function closeLb() {
    lb.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    var v = lbStage.querySelector('video');
    if (v) { v.pause(); }
    setTimeout(function () { if (!lb.classList.contains('is-open')) lbStage.innerHTML = ''; }, 420);
  }

  function step(dir) {
    if (lbList.length < 2) return;
    lbIndex = (lbIndex + dir + lbList.length) % lbList.length;
    showLb();
  }

  document.addEventListener('click', function (e) {
    var node = e.target.closest('[data-item], [data-lightbox]');
    if (!node) return;
    if (node.hasAttribute('data-lightbox')) {
      var figs = Array.prototype.slice.call(node.closest('.scenes').querySelectorAll('.scene__media'));
      var list = figs.map(function (f) {
        return {
          type: 'image',
          src: f.getAttribute('data-lightbox'),
          title: f.getAttribute('data-title') || '',
          sub: f.getAttribute('data-sub') || ''
        };
      });
      openLb(list, figs.indexOf(node));
      return;
    }
    var list2 = collect(node);
    var idx = list2.findIndex(function (it) { return it.src === node.getAttribute('data-src'); });
    openLb(list2, idx < 0 ? 0 : idx);
  });

  lbClose.addEventListener('click', closeLb);
  lbPrev.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  lbNext.addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target === lbStage) closeLb();
  });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  /* -------------------------------------------------------- hero video mg */
  var hv = document.getElementById('heroVideo');
  if (hv) {
    var tryPlay = hv.play();
    if (tryPlay && tryPlay.catch) tryPlay.catch(function () {
      hv.setAttribute('poster', 'assets/video/poster/hero.jpg');
    });
  }

})();
