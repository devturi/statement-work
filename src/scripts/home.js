(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var wait = function(ms){ return new Promise(function(r){ setTimeout(r, ms); }); };
  /* ---------- Hero demo: rows extract one by one ---------- */
  var demo = document.getElementById('demo');
  var rows = Array.prototype.slice.call(demo.querySelectorAll('.ledger tbody tr'));
  var pRows = Array.prototype.slice.call(demo.querySelectorAll('.p-row'));
  var scan = demo.querySelector('.scan');
  var status = demo.querySelector('[data-status]');
  var total = rows.length;
  var visible = true;

  function showAll(){
    rows.forEach(function(r){ r.classList.remove('out'); r.classList.add('in'); });
    pRows.forEach(function(p){ p.classList.add('read'); });
    demo.classList.add('done'); demo.classList.remove('running');
    status.textContent = total + ' transactions';
  }
  function whenVisible(){
    return new Promise(function(resolve){
      (function check(){ if (visible && !document.hidden) resolve(); else setTimeout(check, 300); })();
    });
  }
  function moveScan(i){
    var p = pRows[i];
    scan.style.height = (p.offsetHeight + 2) + 'px';
    scan.style.transform = 'translateY(' + (p.offsetTop - 1) + 'px)';
  }
  async function loop(){
    while (true){
      if (reduce.matches){ showAll(); return; }
      await whenVisible();
      demo.classList.remove('done');
      demo.classList.add('running');
      for (var i = 0; i < total; i++){
        await whenVisible();
        moveScan(i);
        status.textContent = 'Extracting ' + (i + 1) + ' of ' + total;
        await wait(300);
        pRows[i].classList.add('read');
        rows[i].classList.remove('out');
        rows[i].classList.add('in');
        await wait(260);
      }
      demo.classList.remove('running');
      demo.classList.add('done');
      status.textContent = total + ' transactions';
      await wait(3600);
      await whenVisible();
      rows.forEach(function(r){ r.classList.add('out'); r.classList.remove('in'); });
      pRows.forEach(function(p){ p.classList.remove('read'); });
      await wait(450);
      rows.forEach(function(r){ r.classList.remove('out'); });
    }
  }
  new IntersectionObserver(function(entries){ visible = entries[0].isIntersecting; }, {threshold:0.2}).observe(demo);
  reduce.addEventListener && reduce.addEventListener('change', function(){ if (reduce.matches) showAll(); });
  setTimeout(loop, 450);

  /* ---------- Ask: live chat ---------- */
  var log = document.getElementById('chat-log');
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var convo = [
    { q:'What did we spend on software subscriptions in Q2?',
      a:'<span class="num">$1,842.30</span> across 14 charges. Adobe and AWS make up 68% of it, and AWS jumped by <span class="num">$214</span> in June after an added instance.' },
    { q:'Any duplicate charges last month?',
      a:'One. Two identical Adobe Creative Cloud charges of <span class="num">$52.99</span>, both posted on Aug 8. Everything else appears once.' },
    { q:'Did any bank fees go up this year?',
      a:'Yes. The monthly maintenance fee went from <span class="num">$12.00</span> to <span class="num">$18.00</span> starting in July. Wire fees stayed flat at <span class="num">$25.00</span>.' }
  ];
  var busy = false, played = false;

  function bubble(cls, html){
    var d = document.createElement('div');
    d.className = 'msg ' + cls + ' enter';
    d.innerHTML = html;
    log.appendChild(d);
    while (log.children.length > 4) log.removeChild(log.firstElementChild);
    return d;
  }
  async function ask(i){
    if (busy) return;
    busy = true;
    chips.forEach(function(c, k){ c.setAttribute('aria-pressed', k === i ? 'true' : 'false'); });
    var fast = reduce.matches;
    bubble('msg-q', convo[i].q);
    await wait(fast ? 0 : 260);
    var t = bubble('msg-a', '<span class="typing" aria-label="Answering"><i></i><i></i><i></i></span>');
    t.style.padding = '0';
    await wait(fast ? 150 : 900);
    t.remove();
    bubble('msg-a', convo[i].a);
    busy = false;
  }
  chips.forEach(function(c){
    c.addEventListener('click', function(){ played = true; ask(+c.dataset.q); });
  });
  /* Replay the first exchange live when the chat scrolls into view */
  new IntersectionObserver(function(entries, io){
    if (!entries[0].isIntersecting || played) return;
    io.disconnect(); played = true;
    if (reduce.matches) return;
    log.innerHTML = '';
    setTimeout(function(){ ask(0); }, 250);
  }, {threshold:0.5}).observe(document.getElementById('chat'));
})();
