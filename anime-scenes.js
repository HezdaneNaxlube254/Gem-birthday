/* ============================================================
   anime-scenes.js — ports her-journey-v3 scenes into the site
   Scene code is unchanged from her-journey-v3.html.
   ============================================================ */
(function () {
  const PI = Math.PI;
  const sm = x => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
  const mx = (a, b, k) => a + (b - a) * k;
  const cl = x => Math.max(0, Math.min(1, x));
  const rad = d => d * PI / 180;
  const reach = (a, b) => 58 * Math.cos(rad(a)) + 58 * Math.cos(rad(a + b));

  function rig(o) {
    const sk = '#6b4530', sb = '#58381f', dr = o.dress, H = o.high;
    const leg = (n, c, s) => `<g data-j="t${n}"><path d="M100,150L100,208" stroke="${c}" stroke-width="13" stroke-linecap="round"/><g data-j="s${n}"><path d="M100,208L100,266" stroke="${c}" stroke-width="10.5" stroke-linecap="round"/><g data-j="f${n}"><path d="M96,263L117,266Q124,271 119,277L93,277Z" fill="${s}"/></g></g></g>`;
    const lan = '<g data-j="lan"><circle class="gl" cx="100" cy="176" r="75" fill="url(#lg)"/><rect x="95.5" y="167" width="9" height="13" rx="2" fill="#3a2a1a"/><rect x="97" y="169" width="6" height="9" fill="#ffd68a"/><path d="M100,167V162" stroke="#3a2a1a" stroke-width="1.5"/></g>';
    const arm = (n, c, x) => `<g data-j="u${n}"><path d="M100,86L100,124" stroke="${c}" stroke-width="9" stroke-linecap="round"/><path d="M100,86L100,${H ? 124 : 108}" stroke="${H ? dr : c}" stroke-width="10.5" stroke-linecap="round"/><g data-j="l${n}"><path d="M100,124L100,160" stroke="${H ? dr : c}" stroke-width="8" stroke-linecap="round"/><circle cx="100" cy="163" r="5" fill="${c}"/>${x || ''}</g></g>`;
    let br = '';
    for (let i = 0; i < 3; i++) br += `<g data-j="b${i}"><path d="M${86 + i * 3},${50 + i * 3}Q${76 + i * 5},${80 + i * 8} ${80 + i * 7},${120 + i * 10}" stroke="url(#hr)" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M${86 + i * 3},${50 + i * 3}Q${76 + i * 5},${80 + i * 8} ${80 + i * 7},${120 + i * 10}" stroke="#000" stroke-opacity=".3" stroke-width="6" fill="none" stroke-dasharray="1.6 3.6"/><circle cx="${80 + i * 7}" cy="${124 + i * 10}" r="3" fill="#d9b9f0"/></g>`;
    const acc = {
      crown: '<path d="M90,34L92,22 97,29 102,19 107,29 112,22 114,34Z" fill="#f5e8a8" stroke="#c8a870" stroke-width=".6"/>',
      phones: '<path d="M84,50Q85,24 102,24Q119,24 119,46" stroke="#1a1228" stroke-width="3" fill="none"/><ellipse cx="97" cy="54" rx="5" ry="7" fill="#1a1228"/>',
      flower: '<g transform="translate(94 36)">' + [0, 72, 144, 216, 288].map(a => `<ellipse cy="-3.5" rx="2.2" ry="3.4" fill="#e8d0f0" transform="rotate(${a})"/>`).join('') + '<circle r="1.8" fill="#f5d878"/></g>'
    }[o.acc] || '';
    return `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg"><g data-j="fp"><ellipse cx="100" cy="278" rx="38" ry="5" fill="#000" opacity=".35"/><g data-j="bd">
${leg(2, sb, '#2a1c40')}${leg(1, sk, '#3b2a56')}
<g data-j="sk"><path d="M91,146L110,146Q130,190 140,228Q100,238 60,228Q71,190 91,146Z" fill="${dr}"/><path d="M91,146L110,146Q130,190 140,228Q100,238 60,228Q71,190 91,146Z" fill="url(#sh)"/><path d="M92,170L82,230M100,178L100,234M108,170L118,230" stroke="#000" stroke-opacity=".12" stroke-width="1.2" fill="none"/></g>
<g data-j="tor">${arm(2, sb)}
<path d="M90,86Q86,118 91,150L110,150Q116,118 112,86Z" fill="${sk}"/><path d="M96,70L96,90L106,90L106,70Z" fill="${sk}"/>
<path d="M90,${H ? 88 : 100}Q86,118 91,150L110,150Q116,118 112,${H ? 88 : 100}Z" fill="${dr}"/><path d="M90,${H ? 88 : 100}Q86,118 91,150L110,150Q116,118 112,${H ? 88 : 100}Z" fill="url(#sh)"/><path d="M91,146H110" stroke="#fff" stroke-opacity=".3" stroke-width="3"/>
${o.pk ? '<path d="M80,92Q76,92 76,100V130Q76,136 82,136H92V92Z" fill="#3a2c55"/><path d="M96,90Q100,112 98,128" stroke="#2a1d42" stroke-width="3" fill="none"/>' : ''}
<g data-j="hd">${br}
<path d="M84,48Q84,28 102,28Q120,30 120,48L121,52Q127,58 120,62Q121,67 118,70Q112,78 100,76Q86,70 84,56Z" fill="url(#sk)"/>
<ellipse cx="96" cy="55" rx="3.4" ry="5" fill="#5a3822"/><circle cx="96" cy="61" r="1.6" fill="#e8c878"/>
<ellipse cx="108" cy="60" rx="5" ry="3" fill="url(#bl)"/><path d="M107,44Q112,42 116,44" stroke="#1a0e18" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<g data-j="eo"><ellipse cx="111" cy="50" rx="3.4" ry="2.6" fill="#f3e8e0"/><circle cx="112" cy="50.4" r="1.9" fill="#1c0e06"/><path d="M107,48.4Q111,46 115,48.4" stroke="#120812" stroke-width="1.2" fill="none"/></g>
<path data-j="ec" style="display:none" d="M107.5,50Q111,53.5 114.5,50" stroke="#120812" stroke-width="1.5" fill="none" stroke-linecap="round"/><path data-j="eu" style="display:none" d="M107.5,52Q111,47.5 114.5,52" stroke="#120812" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<path data-j="mS" d="M110,66Q115,70 120,66" stroke="#8a3650" stroke-width="1.7" fill="none" stroke-linecap="round"/><path data-j="mF" style="display:none" d="M111,67H119" stroke="#8a3650" stroke-width="1.7" stroke-linecap="round"/>
<g data-j="mG" style="display:none"><path d="M110,65Q115,75 121,65Z" fill="#3a0f1e"/><path d="M111,66Q115,69 120,66Z" fill="#f7f0ea"/></g><ellipse data-j="mD" style="display:none" cx="118" cy="68" rx="2.3" ry="2.8" fill="#5a1a2e"/>
<path d="M120,46Q120,26 102,25Q82,27 83,52Q83,66 90,72L98,62Q94,40 108,35Q117,35 120,46Z" fill="#2c1842"/>${acc}</g>
${arm(1, sk, o.lantern ? lan : '')}</g></g></g></svg>`;
  }

  const G = (p, A, B, as, bd) => ({
    lg: [-A * Math.sin(p), B * Math.max(0, Math.cos(p)) + 4, -A * Math.sin(p + PI), B * Math.max(0, Math.cos(p + PI)) + 4],
    ar: [as * Math.sin(p), -bd, -as * Math.sin(p), -bd]
  });

  const AC = [
    /* 1 trudging through the dark, stumbling and rising again */
    t => { const p = t * 3.2, s = Math.exp(-((t % 4.5 - 3.2) ** 2) / .06), g = G(p, 15, 34, 0, 0); g.lg[1] += 26 * s; return { lg: g.lg, ar: [-55 + 4 * Math.sin(p), -45, -22, -100], lean: 9 + 11 * s, head: 22, hs: 5 + 2 * Math.sin(p), fl: 1, sx: 1, jy: 0, eye: 'o', mo: 'F' } },
    /* 2 pushing on against the wind toward the sunrise */
    t => { const w = 1 - sm((t - 3.4) / .9), g = sm((t - 3.8) / 1.2) * (1 - sm((t - 7.6) / 1)), q = G(t * 3, 16 * w, 32 * w, 18 * w, 16 * w), y = Math.sin(t * 1.4) * (1 - w); return { lg: q.lg, ar: [mx(q.ar[0], -100, g), mx(q.ar[1], -104, g), mx(q.ar[2], 10, g * .9), mx(q.ar[3], -90, g * .9)], lean: mx(-2, 6, w) + y, head: mx(-4, -16, sm(t / 3.5)), hs: 10 + 5 * Math.sin(t * 2.2), fl: 1.06, sx: 1, jy: 0, eye: 'o', mo: 'S' } },
    /* 3 kneel, pray, rise */
    t => { const k = sm((t - 1) / 1.8) * (1 - sm((t - 7) / 1.5)); return { lg: [0, 92 * k, 0, 92 * k], ar: [-24, -108, -24, -108], lean: 5 * k, head: 10 + 14 * k, hs: 2, fl: 1, sx: 1, jy: 0, eye: 'c', mo: 'S', fk: 1 - k } },
    /* 4 running, never backing down */
    t => { const n = Math.max(...[1.1, 2.5, 3.9, 5.3].map(x => Math.exp(-((t - x - .5) ** 2) / .05))), c = sm((t - 6) / .5) * (1 - sm((t - 8.6) / .4)); return { lg: [-90, 90, -90, 90], ar: [mx(-80 + 6 * Math.sin(t * 2), -150, c), -14, mx(-15, -145, c), mx(-70, -12, c)], lean: mx(8 + 3 * Math.sin(t * 1.5), -2, c), head: mx(10, -6, c) + 8 * n, hs: 3, fl: 1, sx: 1, jy: 0, eye: c > .4 ? 'u' : 'o', mo: c > .4 ? 'G' : 'S', sa: -62 } },
    /* 5 walk to the cake, blow the candles, cheer */
    t => { const w = 1 - sm((t - 3.4) / .8), p = t * 3.4, g = G(p, 16 * w, 32 * w, 22 * w, 20 * w), b = sm((t - 4.4) / .6) * (1 - sm((t - 6.2) / .6)), c = sm((t - 6.6) / .5); return { lg: g.lg, ar: [mx(g.ar[0], -150, c), mx(g.ar[1], -15, c), mx(g.ar[2], -145, c), mx(g.ar[3], -15, c)], lean: 14 * b, head: 6 * b, hs: 4, fl: 1, sx: 1, jy: t > 6.6 ? 7 * Math.abs(Math.sin((t - 6.6) * 8)) : 0, eye: t > 6.6 ? 'u' : 'o', mo: b > .3 ? 'D' : t > 6.6 ? 'G' : 'S' } },
    /* 6 jumping for joy at 22 */
    t => { const w = 7, j = Math.abs(Math.sin(w * t)), a = Math.sin(2 * w * t); return { lg: [-20 * j, 15 + 50 * j, 10 * j, 12 + 40 * j], ar: [-150 + 14 * a, -15, -140 - 12 * a, -18], lean: -2, head: -8, hs: 14 * j + 4, fl: 1 + .35 * j, sx: 1, jy: 60 * j, eye: 'u', mo: 'G' } },
    /* 7 dancing with the sunrise, twirling */
    t => { const w = 3, s = Math.sin(w * t), ph = t % 5, q = cl(ph / 1.1), a = ph < 1.1 ? 2 * PI * sm(q) : 0, tw = ph < 1.1 ? Math.sin(PI * q) : 0; return { lg: [-10 * s, 12 + 10 * Math.max(0, s), 10 * s, 12 + 10 * Math.max(0, -s)], ar: [-125 + 25 * s, -20 - 18 * Math.sin(w * t + 1), -135 - 25 * s, -24], lean: 4 * s - 2, head: -8 + 4 * s, hs: 12 + 8 * Math.sin(w * t + 2), fl: 1 + .5 * tw, sx: Math.cos(a), jy: 3 * Math.abs(s) + 14 * tw, eye: 'u', mo: 'G' } },
    /* 8 grateful: walk, stop, hand on heart */
    t => { const w = 1 - sm((t - 3.4) / 1), g = 1 - w, q = G(t * 2.8, 13 * w, 26 * w, 16 * w, 18 * w); return { lg: q.lg, ar: [mx(q.ar[0], -36, g), mx(q.ar[1], -122, g), mx(q.ar[2], -75, g), mx(q.ar[3], -28, g)], lean: -2 * g, head: -12 * g, hs: 5, fl: 1, sx: 1, jy: 0, eye: g > .5 ? 'c' : 'o', mo: 'S' } },
    /* 9 arms open to the sun */
    t => { const g = sm((t - .8) / 3.2), y = Math.sin(t * 1.5); return { lg: [2 * y, 4, -2 * y, 4], ar: [-148 * g, -8 * g, -160 * g, -6 * g], lean: -3 * g + y, head: -14 * g, hs: 12 + 5 * Math.sin(t * 2), fl: 1.08, sx: 1, jy: 0, eye: g > .6 ? 'o' : 'c', mo: 'S' } }
  ];

  const AC2 = t => { const q = (((t - .4) % 1.4) + 1.4) % 1.4 / 1.4, r = t < 6 ? Math.sin(PI * q) : 0, c = sm((t - 6) / .5) * (1 - sm((t - 8.6) / .4)); return { lg: [-90, 90, -90, 90], ar: [mx(mx(-30, -85, r), -150, c), mx(mx(-30, -10, r), -15, c), mx(-15, -145, c), mx(-60, -12, c)], lean: mx(4 + 10 * r, -2, c), head: mx(12, -6, c), hs: 4, fl: 1, sx: 1, jy: 0, eye: c > .4 ? 'u' : 'o', mo: c > .4 ? 'G' : 'S', sa: -62 } };

  const PX = [
    t => mx(12, 72, cl(t / 9)),
    t => mx(8, 38, sm(t / 4.2)),
    () => 50,
    () => 'calc(50% - 6.5vh)',
    t => 12 + 39 * sm(t / 4.2),
    t => 50 + 9 * Math.sin(t * .7),
    t => mx(30, 66, cl(t / 9)),
    t => 18 + 26 * sm(t / 3.6),
    () => 46
  ];

  const R = (a, b) => a + Math.random() * (b - a);
  const $ = (r, c, st) => { const e = document.createElement('i'); e.className = c; Object.assign(e.style, st); r.appendChild(e); return e; };

  const FX = {
    rain: r => { for (let i = 0; i < 70; i++)$(r, 'r', { left: R(0, 110) + '%', animationDuration: R(.5, .9) + 's', animationDelay: -R(0, 1) + 's', opacity: R(.2, .7) }); },
    bokeh: r => { for (let i = 0; i < 10; i++) { const z = R(30, 110); $(r, 'bk', { width: z + 'px', height: z + 'px', left: R(0, 95) + '%', top: R(0, 90) + '%', animationDuration: R(8, 16) + 's', animationDelay: -R(0, 8) + 's' }); } },
    spark: r => { for (let i = 0; i < 26; i++) { const z = R(2, 4); $(r, 's', { width: z + 'px', height: z + 'px', left: R(0, 100) + '%', top: R(0, 90) + '%', animationDuration: R(1.5, 4) + 's', animationDelay: -R(0, 3) + 's' }); } },
    petal: r => { for (let i = 0; i < 26; i++)$(r, 'c', { width: '9px', height: '6px', background: 'rgba(255,235,250,.85)', borderRadius: '100% 0', left: R(0, 100) + '%', animationDuration: R(9, 16) + 's', animationDelay: -R(0, 14) + 's', '--dx': R(-6, 10) + 'vw' }); },
    conf: (r, h) => { const k = ['#d8b8e8', '#f0d8a8', '#b088c8', '#f8e8f8']; for (let i = 0; i < 44; i++)$(r, 'c' + (h || ''), { width: '6px', height: '10px', background: k[i % 4], left: R(0, 100) + '%', animationDuration: R(4, 8) + 's', animationDelay: -R(0, 8) + 's', '--dx': R(-5, 5) + 'vw' }); },
    confp: r => FX.conf(r, ' hid'),
    balloons: r => { const k = ['rgba(200,140,220,.9)', 'rgba(180,120,210,.85)', 'rgba(240,190,230,.85)']; for (let i = 0; i < 8; i++)$(r, 'bl', { left: (i < 4 ? R(2, 22) : R(76, 94)) + '%', top: R(55, 70) + '%', background: `radial-gradient(circle at 35% 30%,rgba(255,255,255,.55),${k[i % 3]} 60%)`, animationDuration: R(4, 7) + 's', animationDelay: -R(0, 5) + 's' }); },
    flash: r => $(r, 'flash', { inset: 0 })
  };

  const SC = {
    sun: w => $(w, 'sun'), sunr: w => $(w, 'sun sr2', { left: '64%' }), haze: w => $(w, 'hz'), hills2: w => $(w, 'h2'),
    ot: w => { $(w, 'stl', { left: 'calc(50% - 6.5vh)' }); $(w, 'stl k', { left: 'calc(50% + 7vh)' }); $(w, 'tb ot', { left: '50%' }); ['#f4a7b9', '#ffd27a', '#8fd3c8', '#b9a0f0'].forEach((c, k) => $(w, 'blk', { left: 'calc(50% + 1.5vh)', bottom: `calc(10.3vh + ${k * 1.5}vh)`, background: c })); const b = $(w, 'wb');[0, 1, 2, 3].forEach(k => $(b, '', { height: (25 + k * 22) + '%', left: (10 + k * 22) + '%' })); },
    hills: w => $(w, 'hills'), city: w => $(w, 'city'), gd: (w, s) => $(w, 'gd', { background: s.gr }), lamp: (w, s) => $(w, 'lamp', { left: s.lx }), dark: w => $(w, 'dk'), beam: w => $(w, 'bm'),
    lanes: w => { $(w, 'ln', { bottom: '22%' }); $(w, 'ln', { bottom: '40%' }); },
    flowers: (w, s) => { const k = s.fc || ['#b088c8', '#d8b8e8', '#a97acb', '#c8a0d8', '#f0d8a8']; for (let i = 0; i < 46; i++) { const b = R(1, 56), z = 11 - b / 56 * 7; $(w, 'fw', { left: R(0, 98) + '%', bottom: b + '%', width: z + 'px', height: z + 'px', background: k[i % 5], opacity: .9 }); } },
    candles: w => [30, 36, 42, 58, 64, 70].forEach(x => $(w, 'cd', { left: x + '%', bottom: R(6, 30) + '%' })),
    lights: w => { for (let i = 0; i < 18; i++) { const c = ['#ffe2a0', '#f8c8f0', '#fff4d0'][i % 3]; $(w, 'bu', { left: i / 17 * 96 + 2 + '%', top: (5 + 6 * Math.sin(i / 17 * PI)) + '%', background: c, boxShadow: `0 0 10px 3px ${c}`, animationDuration: R(1, 2.5) + 's', animationDelay: -R(0, 2) + 's' }); } },
    table: w => { const t = $(w, 'tb', { left: '56%' }), k = $(t, 'ck');[28, 72].forEach(x => $(k, 'cd', { left: x + '%' })); }
  };

  const S = [
    { bg: 'linear-gradient(#1a1420,#2a1e30 45%,#3b2a46)', sc: ['city', 'gd', 'dark', 'lamp'], fx: ['rain', 'flash'], gr: 'radial-gradient(ellipse 30% 45% at 80% 25%,rgba(255,200,140,.2),transparent 70%),linear-gradient(#1f1628,#0c0811)', lx: '84%', lc: 'rgba(255,205,150,.8)', pc: 'rgba(255,200,140,.4)', f: { dress: '#2b2238', high: 1, lantern: 1 }, p: ['L', 'Through the darkness,<br>I endured…', 'The storms, the tears,<br>the doubts, the silence…<br>I survived.'] },
    { cls: 'dawn', bg: 'linear-gradient(#f4c8b8,#f6a87e 30%,#f8ad6c 50%,#fbcf78 68%,#fde9aa)', sc: ['sunr', 'haze', 'hills2', 'gd', 'flowers'], fx: ['spark'], gr: 'radial-gradient(ellipse 28% 30% at 64% 0,rgba(255,215,130,.6),transparent 70%),linear-gradient(#a79a45,#52622e 40%,#242f1b)', h: '#46512a', fc: ['#ffe08a', '#fff4d0', '#ffb870', '#ffd0a0', '#e8f0a0'], pc: 'rgba(255,200,120,.55)', f: { dress: '#c8a4e0', pk: 1 }, p: ['L', 'But the sun always rises…', 'Past the darkest night,<br>the sun will rise again.<br><br>Things will get better in the end.<em>Keep moving… Pok ilewo!</em>'] },
    { bg: 'linear-gradient(#3a2545,#5a3a70 40%,#7a5490 70%,#4a2e60)', sc: ['gd', 'beam', 'candles'], fx: ['bokeh'], gr: 'linear-gradient(#4a3263,#2a1a3e)', pc: 'rgba(255,215,190,.5)', f: { dress: '#8b5fa5', high: 1 }, p: ['R', 'With faith<br>I kept going…', 'The Lord sees it daily.<br>He will never leave you.<br>The angels will visit you.<br>The good ones will stay.<br>The wicked will run.<br>You are not alone.<em>♡</em>'] },
    { bg: 'linear-gradient(#1f3446,#2c5060 50%,#3a6470)', sc: ['gd', 'ot'], fx: ['bokeh', 'confp'], gr: 'linear-gradient(#6a8a8a,#2f4a52)', pc: 'rgba(255,240,210,.45)', f: { dress: '#eae4f4', high: 1 }, f2: { dress: '#ffb98a' }, p: ['L', 'I am strong…', 'Not because<br>it was easy,<br>but because<br>I never gave up.<br><br>I\'m made for<br>this game.<em>Never<br>backing down.</em>'] },
    { bg: 'linear-gradient(#3a2548,#5a3a70 50%,#7a5490)', sc: ['gd', 'flowers', 'lights', 'table'], fx: ['bokeh', 'confp'], gr: 'linear-gradient(#5a3a78,#33204f)', pc: 'rgba(255,210,150,.5)', f: { dress: '#e0c6ee', acc: 'flower' }, p: ['L', 'At 22…', 'Still here.<br>Still growing.<br>Still dreaming.<br>Still me.<em>♡</em>'] },
    { bg: 'linear-gradient(#b894d8,#8b64b8 45%,#5a3a80)', sc: ['gd', 'lights'], fx: ['bokeh', 'conf', 'balloons'], gr: 'linear-gradient(#7a58a0,#42286a)', pc: 'rgba(255,230,250,.5)', f: { dress: '#e8d0f0', acc: 'crown' }, p: ['R', '<span class="t big">Happy<br>22!</span>', 'Not just<br>an age…<br>but a victory.<em>♡</em>'] },
    { bg: 'linear-gradient(#f8c890,#f0a070 30%,#d87890 55%,#9a5888 78%,#5a3a70)', sc: ['sun', 'hills', 'gd', 'flowers'], fx: ['petal'], gr: 'linear-gradient(#4a3466,#2a1a42)', h: '#3a2550', pc: 'rgba(255,200,150,.5)', f: { dress: '#d4b0ec' }, p: ['L', 'I survived<br>the storm…', 'and now<br>I dance with<br>the sunrise.'] },
    { bg: 'linear-gradient(160deg,#d8b8e8,#b088c8 40%,#8b64b8 75%,#5a3a80)', sc: ['gd', 'flowers'], fx: ['bokeh', 'spark'], gr: 'linear-gradient(#9a78b8,#5e3e88)', pc: 'rgba(255,230,250,.5)', f: { dress: '#e8d0f0', acc: 'crown' }, p: ['R', 'Grateful.<br>Stronger.<br>Happier.<br>Still<br>Moving…', '<em>♡</em><br>Pok ilewo.<br>Loch biro, loch biro…<br>Victory is coming.'] },
    { bg: 'linear-gradient(#e8d0f0,#c8a0e0 30%,#9a6cc0 65%,#5a3a80)', sc: ['gd', 'flowers'], fx: ['petal', 'spark'], gr: 'linear-gradient(#a888c8,#6a4a90)', pc: 'rgba(255,240,250,.55)', f: { dress: '#f0e0f6', acc: 'flower' }, p: ['R', 'Kata mudhho osiko<br>chieng\' nyaka rieny…', 'Even if darkness lingers,<br>the sun must shine.<em>♡</em>'] }
  ];

  function pose(e, P, t) {
    const set = (k, a, x, y) => e[k].setAttribute('transform', `rotate(${a.toFixed(1)} ${x} ${y})`);
    const [a1, b1, a2, b2] = P.lg, [u1, l1, u2, l2] = P.ar, fk = P.fk ?? 1, drop = 116 - Math.max(reach(a1, b1), reach(a2, b2));
    set('t1', a1, 100, 150); set('s1', b1, 100, 208); set('f1', -(a1 + b1) * fk, 100, 266); set('t2', a2, 100, 150); set('s2', b2, 100, 208); set('f2', -(a2 + b2) * fk, 100, 266);
    set('u1', u1, 100, 86); set('l1', l1, 100, 124); set('u2', u2, 100, 86); set('l2', l2, 100, 124); if (e.lan) set('lan', -(u1 + l1), 100, 163);
    set('tor', P.lean, 100, 150); set('hd', P.head, 100, 76);
    for (let k = 0; k < 3; k++) set('b' + k, P.hs * (1 + k * .1) + 3 * Math.sin(t * 3 + k) - (P.head + P.lean) * .85, 88, 52);
    e.sk.setAttribute('transform', `translate(100 146) rotate(${(P.sa ?? (-(a1 + a2) / 5 + P.hs * .3)).toFixed(1)}) scale(${P.fl.toFixed(2)} 1) translate(-100 -146)`);
    e.bd.setAttribute('transform', `translate(0 ${(drop - P.jy).toFixed(1)})`);
    e.fp.setAttribute('transform', `translate(100 0) scale(${P.sx.toFixed(2)} 1) translate(-100 0)`);
    if (e._e != P.eye) { ['o', 'c', 'u'].forEach(k => e['e' + k].style.display = k == P.eye ? '' : 'none'); e._e = P.eye; }
    if (e._m != P.mo) { ['S', 'F', 'G', 'D'].forEach(k => e['m' + k].style.display = k == P.mo ? '' : 'none'); e._m = P.mo; }
  }

  /* ---------------- chapter dispatcher ---------------- */
  const CHAPTER_SCENES = { chapter2: [0, 1], chapter4: [2, 3], chapter6: [4, 5], chapter8: [6, 7], chapter9: [8] };
  const SCENE_MS = 9000;
  const stages = {};

  function buildStage(chapterId) {
    const section = document.getElementById(chapterId);
    if (!section) return null;
    const stageEl = section.querySelector('.anime-stage');
    if (!stageEl) return null;
    const sceneIdxs = CHAPTER_SCENES[chapterId];
    if (!sceneIdxs) return null;
    stageEl.innerHTML = '';
    const scenes = [], figs = [], Es = [];
    sceneIdxs.forEach(gIdx => {
      const s = S[gIdx];
      const e = document.createElement('div');
      e.className = 'scene' + (s.cls ? ' ' + s.cls : '');
      e.style.setProperty('--h', s.h || '#3a2550');
      e.style.setProperty('--lc', s.lc || '#fff');
      e.style.setProperty('--pc', s.pc);
      const mk = (c, h) => { const d = document.createElement('div'); d.className = c; if (h) d.innerHTML = h; e.appendChild(d); return d; };
      mk('bgs').style.background = s.bg;
      const w = mk('world');
      s.sc.forEach(k => SC[k](w, s));
      const f = document.createElement('div');
      f.className = 'fig';
      f.innerHTML = '<i class="pool"></i>' + rig(s.f);
      w.appendChild(f);
      figs.push(f);
      const j = {};
      f.querySelectorAll('[data-j]').forEach(n => j[n.dataset.j] = n);
      Es.push(j);
      const p = document.createElement('div');
      p.className = 'poem ' + s.p[0];
      p.innerHTML = s.p[1].startsWith('<span')
        ? s.p[1] + `<div class="b">${s.p[2]}</div>`
        : `<div class="t">${s.p[1]}</div><div class="b">${s.p[2]}</div>`;
      w.appendChild(p);
      const fx = mk('fxl');
      s.fx.forEach(k => FX[k](fx));
      stageEl.appendChild(e);
      scenes.push(e);
    });
    return { chapterId, sceneIdxs, scenes, figs, Es, currentIdx: -1, startTime: 0, raf: 0 };
  }

  function showScene(inst, idx) {
    inst.scenes.forEach((s, i) => s.classList.toggle('on', i === idx));
    inst.currentIdx = idx;
  }

  function tick(inst, now) {
    const t = (now - inst.startTime) / 1000;
    if (t >= SCENE_MS / 1000) {
      inst.startTime = now;
      showScene(inst, (inst.currentIdx + 1) % inst.scenes.length);
      inst.raf = requestAnimationFrame(n => tick(inst, n));
      return;
    }
    const localIdx = inst.currentIdx;
    const gIdx = inst.sceneIdxs[localIdx];
    const E = inst.Es[localIdx];
    if (E) pose(E, AC[gIdx](t), t);
    const x = PX[gIdx](t);
    inst.figs[localIdx].style.left = typeof x === 'number' ? x + '%' : x;
    if (gIdx === 0) {
      const dk = inst.scenes[localIdx].querySelector('.dk');
      if (dk) dk.style.setProperty('--lx', (x + 5) + '%');
    }
    if (gIdx === 1) {
      const sun = inst.scenes[localIdx].querySelector('.sun');
      const hz = inst.scenes[localIdx].querySelector('.hz');
      const k = sm(t / 8);
      if (sun) { sun.style.transform = `translateY(${((1 - k) * 32 - 3).toFixed(1)}vh)`; sun.style.opacity = (.8 + .2 * k).toFixed(2); }
      if (hz) hz.style.opacity = (.3 + .7 * k).toFixed(2);
    }
    if (gIdx === 4) {
      const sc = inst.scenes[localIdx];
      sc.classList.toggle('pop', t > 5.4);
      sc.querySelectorAll('.ck .cd').forEach(c => c.classList.toggle('out', t > 5.4));
    }
    inst.raf = requestAnimationFrame(n => tick(inst, n));
  }

  function startStage(inst) {
    if (inst.raf) cancelAnimationFrame(inst.raf);
    inst.startTime = performance.now();
    showScene(inst, 0);
    inst.raf = requestAnimationFrame(n => tick(inst, n));
  }
  function stopStage(inst) { if (inst.raf) cancelAnimationFrame(inst.raf); inst.raf = 0; }

  let activeChapter = null;
  function poll() {
    const active = document.querySelector('.chapter.active');
    const id = active ? active.id : null;
    if (id === activeChapter) return;
    if (activeChapter && stages[activeChapter]) stopStage(stages[activeChapter]);
    activeChapter = id;
    if (id && CHAPTER_SCENES[id]) {
      stages[id] = buildStage(id);
      if (stages[id]) startStage(stages[id]);
    }
  }
  setInterval(poll, 250);
  setTimeout(poll, 500);
})();