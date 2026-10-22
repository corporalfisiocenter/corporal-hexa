/* Capa Córporal para Hexa · v1.0 (22-oct-2026)
   Solo añade estilo y contenido; NO toca enlaces ni formularios de reserva.
   Si algo falla (o Cloudflare/Google no responden), Hexa se queda como siempre. */
(function () {
  if (window.__crpCapa) return; window.__crpCapa = 1;
  var FLOW = 'https://script.google.com/macros/s/AKfycbxJywXAqbZxteXn4i-pU0g98VNQyN-tyGPaNk1Ox32Jvl_7BYC72ZBBEEaSUHG-P1Pxaw/exec?action=flow';
  var DEMO = false;
  try {
    var r = (new URLSearchParams(location.search).get('r') || 'clases/index').replace('%2F', '/');
    var css = `
#crpCapa,.crp *{box-sizing:border-box}
html body{background:#f4f4f4!important;color:#575656;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased}
body .wrap>.container{max-width:640px;margin:0 auto;padding:0 16px 40px!important}
body .wrap>.container>div:first-of-type{background:#fff;margin:0 -16px 18px!important;padding:12px 16px;border-bottom:1px solid #e6e6e6}
body .wrap>.container>div:first-of-type img{max-width:120px!important}
body .btn-default.btn-sm{border:0;background:none;color:#808285;font-size:13px;box-shadow:none}
body h1{font-size:22px;font-weight:600;color:#58595b;margin:6px 0 14px;line-height:1.25}
body .btn-primary{background:#fff;border:1px solid #d6d6d6;color:#58595b;border-radius:999px;padding:8px 16px;font-size:14px}
body .btn-success.btn-lg{display:block;width:100%;background:#58595b!important;border:0!important;border-radius:14px!important;font-size:18px!important;padding:16px!important;line-height:1.3;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,.08)}
body .site-login>br{display:none}
body .site-login>p{color:#808285;font-size:14px;margin:14px 0 10px}
body .container-fluid{padding:0}
body .container-fluid .row{margin:0 -6px}
body .container-fluid .row>[class*=col-]{padding:0 6px}
body div.tarjeta{background:#fff!important;border-radius:14px!important;padding:0!important;margin-bottom:10px;box-shadow:0 1px 4px rgba(0,0,0,.06);overflow:hidden;min-height:0}
body a.tarjeta{background:#fff!important;color:#575656!important;margin:0!important;padding:14px 16px 12px 18px!important;border-left:6px solid var(--crpc,#06b2a9);min-height:0;border-radius:0!important}
body a.tarjeta p{margin:0 0 2px;font-size:14px}
body a.tarjeta .crp-h{font-size:13px;color:#808285}
body a.tarjeta .crp-n{font-size:17px;font-weight:600;color:#58595b;margin:2px 0}
body a.tarjeta .crp-pl{display:inline-block;margin-top:6px;font-size:12px;background:#f1f1f1;border-radius:999px;padding:3px 10px}
body .tarjeta[data-crp-centro]{display:flex!important;align-items:center;justify-content:space-between;background:#fff!important;color:#58595b!important;font-size:18px;font-weight:600;padding:18px!important;border-left:6px solid var(--crpc,#06b2a9)}
body .tarjeta[data-crp-centro] small{display:block;font-size:13px;font-weight:400;color:#808285;margin-top:2px}
body .tarjeta[data-crp-centro]:after{content:"›";font-size:26px;color:#b0b0b0}
body .ui-datepicker{width:100%!important;border:0!important;border-radius:14px;padding:10px;box-shadow:0 1px 4px rgba(0,0,0,.06);font-family:inherit}
body .ui-datepicker .ui-datepicker-header{background:#fff;border:0;color:#58595b;font-weight:600}
body .ui-datepicker td a,body .ui-datepicker td span{text-align:center!important;border:0!important;background:#f4f4f4!important;border-radius:10px;padding:10px 0!important;font-size:15px;color:#575656!important}
body .ui-datepicker td .ui-state-highlight{background:#e6f6f5!important;color:#06b2a9!important;font-weight:600}
.crp-sec{margin:26px 0 8px}
.crp-sec h2{font-size:16px;font-weight:600;color:#58595b;margin:0 0 10px;display:flex;justify-content:space-between;align-items:baseline}
.crp-sec h2 a{font-size:13px;font-weight:400;color:#808285}
.crp-rail{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;margin:0 -16px;padding:2px 16px 8px;-webkit-overflow-scrolling:touch}
.crp-card{flex:0 0 78%;max-width:280px;scroll-snap-align:start;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.06);color:#575656!important;text-decoration:none!important;display:flex;flex-direction:column}
.crp-card img{width:100%;height:120px;object-fit:cover;display:block;background:#e6e6e6}
.crp-card .b{padding:12px 14px 14px}
.crp-card .t{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#06b2a9;font-weight:600}
.crp-card .h{font-size:15px;font-weight:600;color:#58595b;margin:3px 0 4px;line-height:1.3}
.crp-card .m{font-size:13px;color:#808285}
.crp-card .w{font-size:12px;color:#c0392b;margin-top:4px}
.crp-sheet{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:9999;display:flex;align-items:flex-end;justify-content:center}
.crp-sheet .in{background:#fff;width:100%;max-width:520px;border-radius:18px 18px 0 0;overflow:hidden;animation:crpUp .25s ease-out}
.crp-sheet img{width:100%;height:170px;object-fit:cover;display:block}
.crp-sheet .b{padding:16px 18px 22px}
.crp-sheet .bt{display:block;text-align:center;background:#58595b;color:#fff!important;border-radius:12px;padding:13px;font-weight:600;margin-top:14px;text-decoration:none!important}
.crp-sheet .x{display:block;text-align:center;color:#808285;margin-top:10px;font-size:14px;background:none;border:0;width:100%}
@keyframes crpUp{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}
.crp-ok{display:inline-flex;width:34px;height:34px;border-radius:50%;background:#e6f6f5;color:#06b2a9;align-items:center;justify-content:center;font-size:18px;margin-right:10px;vertical-align:middle}
body a.crp-btn{display:block;width:100%;background:#58595b!important;border:0!important;border-radius:14px;padding:14px;font-size:16px;font-weight:600;margin-top:14px}
body .site-login .row h4{margin:0}
body div.tarjeta.crp-solo{border-left:6px solid var(--crpc,#06b2a9);padding:14px 16px 12px 18px!important;color:#575656!important;min-height:0!important}
body .crp-solo .crp-h{font-size:13px;color:#808285;margin:0}
body .crp-solo .crp-n{font-size:17px;font-weight:600;color:#58595b;margin:2px 0}
body .crp-alert{background:#fff;border:0;border-radius:14px;color:#575656;padding:16px;box-shadow:0 1px 4px rgba(0,0,0,.06)}
body a.crp-btn,body button.crp-btn{display:block;width:100%;margin:10px 0 0!important}
body a.crp-btn.crp-btn-no,body button.crp-btn.crp-btn-no{background:#fff!important;color:#b03a2e!important;border:1px solid #e2c4c0!important}
.crp-demo{position:fixed;left:8px;bottom:8px;z-index:10000;background:#58595b;color:#fff;font-size:11px;padding:4px 8px;border-radius:6px;opacity:.85}`;
    var st = document.createElement('style'); st.id = 'crpCapa'; st.textContent = css; document.head.appendChild(st);
    var $ = function (s, c) { return (c || document).querySelector(s); }, $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };
    var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    $$('.btn-success.btn-lg br').forEach(function (b) { b.replaceWith(' '); });

    // Tarjetas de clase (elegir clase, reservado y Mis clases): mismo enlace, solo se reordena el texto
    $$('a.tarjeta, div.tarjeta').forEach(function (a) {
      if (a.tagName === 'DIV') { if ($('a.tarjeta', a)) return; a.classList.add('crp-solo'); }
      var col = a.style.backgroundColor || (a.parentNode && a.parentNode.style.backgroundColor) || '';
      if (col) a.style.setProperty('--crpc', col);
      var ps = $$('p', a), h4 = $('h4', a);
      if (h4) {
        var v = {}; ps.forEach(function (p) { var m = p.innerText.match(/^\s*([^:]+):\s*([\s\S]*)$/); if (m) v[m[1].trim().toLowerCase()] = m[2].replace(/\s+/g, ' ').trim(); });
        var nom = h4.textContent.replace(/^\s*Clase:\s*/i, '').trim();
        var fe = (v.fecha || '').replace(/-\d{4}$/, '').replace('-', '/');
        a.innerHTML = '<p class="crp-h">' + esc(fe) + (v.horario ? ' · ' + esc(v.horario) : '') + '</p><p class="crp-n">' + esc(nom) + '</p><p class="crp-h">' + esc([v.centro, v.fisioterapeuta].filter(Boolean).join(' · ')) + '</p>';
      } else if (ps.length >= 3) {
        ps[0].className = 'crp-h'; ps[0].textContent = ps[0].textContent.replace(/^Horario:\s*/i, '');
        ps[1].className = 'crp-n'; ps[1].textContent = ps[1].textContent.replace(/\s*!\s*$/, '');
        var last = ps[ps.length - 1]; if (/plazas/i.test(last.textContent)) last.className = 'crp-pl';
      }
    });
    // Pantalla «Apuntado/a!»
    if (r === 'clases/apuntado') {
      var h = $('h1'); if (h) h.innerHTML = '<span class="crp-ok">✓</span>¡Reserva hecha!<br><span style="font-size:15px;font-weight:400;color:#808285">Te esperamos en clase</span>';
      $$('a.btn-success').forEach(function (b) { b.classList.add('crp-btn'); });
    }

    // Anular clase (r=clases/eliminar): confirmación y «borrado correctamente»
    if (r === 'clases/eliminar') {
      var ok = $('.alert-success'), h = $('h1');
      if (ok) {
        if (h) h.innerHTML = '<span class="crp-ok">✓</span>Clase anulada';
        var x = $('.close', ok); if (x) x.remove(); ok.classList.add('crp-alert');
      } else if (h) { h.textContent = '¿Anular esta clase?'; }
      $$('.btn-success,.btn-danger,.btn-primary').forEach(function (b) { b.classList.add('crp-btn'); if (b.classList.contains('btn-danger')) b.classList.add('crp-btn-no'); });
    }
    // Elegir centro: direcciones
    var dir = { 1: ['Muntaner', 'C/ Muntaner, 442'], 2: ['Sarrià', 'C/ Francesc Carbonell, 21-23'], 3: ['Gala Placídia', 'C/ de Regàs, 8'] };
    if (r === 'clases/escoge-centro') {
      $$('a[href*="escoge-dia"]').forEach(function (a) {
        var c = (a.getAttribute('href').match(/centro=(\d)/) || [])[1]; if (!dir[c]) return;
        a.classList.add('tarjeta'); a.setAttribute('data-crp-centro', c);
        a.innerHTML = '<span>' + dir[c][0] + '<small>' + dir[c][1] + '</small></span>';
      });
    }

    // Mis clases: saludo corto + actividades
    if (r === 'clases/index' || r === 'clases') {
      var h1 = $('h1'); if (h1 && /Mis Clases:/i.test(h1.textContent)) {
        var nom = h1.textContent.split(':')[1].trim().split(/\s+/)[0];
        h1.innerHTML = 'Hola, ' + esc(nom.charAt(0) + nom.slice(1).toLowerCase()) + '<br><span style="font-size:15px;font-weight:400;color:#808285">Tus clases reservadas</span>';
      }
      var ctl = new AbortController(); setTimeout(function () { ctl.abort(); }, 6000);
      fetch(FLOW, { signal: ctl.signal }).then(function (x) { return x.json(); }).then(function (j) {
        var acts = (j && j.actividades || []).slice(0, 6); if (!acts.length) return;
        var f = function (a) { var d = new Date(a.inicio); return d.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' }) + ' · ' + a.hora_inicio + ' h'; };
        var pr = function (a) { return /^\d+$/.test(a.precio) ? a.precio + ' €' : a.precio; };
        var sec = document.createElement('div'); sec.className = 'crp-sec crp';
        sec.innerHTML = '<h2>Próximas actividades en Córporal <a href="https://www.corporalfisiocenter.com/flow" target="_blank">Ver todas</a></h2><div class="crp-rail">' +
          acts.map(function (a) {
            var w = a.restantes === 0 ? 'Completa · lista de espera' : (a.restantes <= 5 ? '¡Quedan ' + a.restantes + ' plazas!' : '');
            return '<a class="crp-card" target="_blank" href="' + esc(a.enlace) + '">' + (a.imagen ? '<img loading="lazy" alt="" src="' + esc(a.imagen) + '">' : '') +
              '<div class="b"><div class="t">' + esc(a.tipo) + '</div><div class="h">' + esc(a.titulo) + '</div><div class="m">' + esc(f(a)) + ' · ' + esc(pr(a)) + '</div>' + (w ? '<div class="w">' + w + '</div>' : '') + '</div></a>';
          }).join('') + '</div>';
        var box = $('.site-login') || $('.wrap>.container'); box.appendChild(sec);
      }).catch(function () {});
    }
    if (DEMO) { var d = document.createElement('div'); d.className = 'crp-demo'; d.textContent = 'DEMO · solo en tu navegador'; document.body.appendChild(d); }
  } catch (e) { var s = document.getElementById('crpCapa'); if (s) s.remove(); }
})();
