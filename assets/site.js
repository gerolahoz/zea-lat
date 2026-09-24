(function(){
  var Z = window.ZEA;
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function ext(a){ a.target = "_blank"; a.rel = "noopener"; }
  function hide(sel){ document.querySelectorAll(sel).forEach(function(e){ if (e.hasAttribute("data-keep")) return; (e.closest("[data-wrap]") || e).style.display = "none"; }); }

  // Kit: la página declara <body data-kit="slug">
  var slug = document.body.getAttribute("data-kit");
  var k = slug && Z.kits[slug];
  if (k){
    document.getElementById("k-titulo").textContent = k.titulo;
    document.getElementById("k-resumen").textContent = k.resumen;
    document.getElementById("k-video").textContent = "Tocá la vista previa para abrir el PDF · Kit del video: " + k.video;
    document.getElementById("k-pdf").href = k.pdf;
    document.getElementById("k-zip").href = k.zip;
    document.getElementById("k-inc").innerHTML = k.incluye.map(function(i, n){
      return '<div class="inc"><span class="n">0' + (n+1) + '</span><div><h3>' + esc(i[0]) + '</h3><p>' + esc(i[1]) + '</p></div></div>';
    }).join("");
    document.getElementById("k-player").innerHTML =
      '<a href="' + esc(k.pdf) + '" target="_blank" rel="noopener"><img src="' + esc(k.preview) + '" alt="Vista previa del PDF: ' + esc(k.titulo) + '"></a>';
  }

  // Contacto: si falta el dato, el botón no se muestra
  if (Z.whatsapp){
    document.querySelectorAll("[data-wa]").forEach(function(a){
      a.href = "https://api.whatsapp.com/send/?phone=" + Z.whatsapp + "&text=" + encodeURIComponent(Z.whatsappMsg).replace(/%20/g, "+") + "&type=phone_number&app_absent=0"; ext(a);
    });
  } else hide("[data-wa]");
  if (Z.instagram) document.querySelectorAll("[data-ig]").forEach(function(a){ a.href = "https://instagram.com/" + Z.instagram; ext(a); });
  else hide("[data-ig]");
  if (Z.youtube) document.querySelectorAll("[data-yt]").forEach(function(a){ a.href = Z.youtube; ext(a); });
  else hide("[data-yt]");
  var y = document.getElementById("y"); if (y) y.textContent = new Date().getFullYear();
})();
