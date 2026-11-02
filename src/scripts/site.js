(function(){
  var wait = function(ms){ return new Promise(function(r){ setTimeout(r, ms); }); };
  /* Header hairline once the page scrolls */
  var header = document.querySelector('.site-header');
  var onScroll = function(){ header.classList.toggle('scrolled', window.scrollY > 4); };
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  /* Scroll reveals: short stagger within each group */
  var revealIO = new IntersectionObserver(function(entries){
    var batch = entries.filter(function(e){ return e.isIntersecting; });
    batch.forEach(function(e, i){
      var el = e.target;
      if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', Math.min(i, 5) * 50 + 'ms');
      el.classList.add('in');
      revealIO.unobserve(el);
    });
  }, {rootMargin:'0px 0px -8% 0px', threshold:0.12});
  document.querySelectorAll('[data-reveal]').forEach(function(el){ revealIO.observe(el); });

  /* ---------- Waitlist forms ---------- */
  document.querySelectorAll('[data-waitlist]').forEach(function(form){
    var wrap = form.closest('[data-form-wrap]');
    var input = form.querySelector('input[type="email"]');
    var honeypot = form.querySelector('input[name="website"]');
    var btn = form.querySelector('button');
    var label = btn.querySelector('.label');
    var msg = wrap.querySelector('.form-msg');

    function setError(text){
      msg.textContent = text;
      form.classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
    }
    function clearError(){
      msg.textContent = '';
      form.classList.remove('invalid');
      input.removeAttribute('aria-invalid');
    }
    input.addEventListener('input', function(){ if (form.classList.contains('invalid')) clearError(); });

    form.addEventListener('submit', async function(e){
      e.preventDefault();
      input.value = input.value.trim();
      if (!input.value){ setError('Enter your email to join the waitlist.'); input.focus(); return; }
      if (!input.checkValidity() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value)){ setError('That email doesn\'t look right. Check it and try again.'); input.focus(); return; }
      clearError();

      btn.disabled = true; btn.classList.add('is-loading'); form.setAttribute('aria-busy', 'true');
      label.textContent = 'Joining…';
      try {
        /* Signups go to a Google Apps Script. It sends no CORS headers, so the request is
           no-cors and the response is opaque: a resolved fetch counts as sent, a network failure rejects. */
        var body = new URLSearchParams({
          email: input.value,
          source: 'website',
          website: honeypot ? honeypot.value : ''
        });
        await fetch(form.getAttribute('action'), { method:'POST', mode:'no-cors', body:body });
        wrap.setAttribute('data-state', 'success');
        wrap.querySelector('.success').focus && wrap.querySelector('.success').setAttribute('tabindex', '-1');
      } catch (err) {
        setError('We couldn\'t add you just now. Check your connection and try again.');
      } finally {
        btn.disabled = false; btn.classList.remove('is-loading'); form.removeAttribute('aria-busy');
        label.textContent = 'Join the waitlist';
      }
    });
  });
})();
