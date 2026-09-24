// Todo lo editable del sitio está acá.
window.ZEA = {
  whatsapp: "",            // TODO: número con código de país, sin + ni espacios (ej. 5493777000000). Vacío = se ocultan los botones
  whatsappMsg: "Hola Gero! Vengo de la web de ZEA y quiero info de la mentoría",
  instagram: "",           // TODO: usuario sin @. Vacío = se ocultan los botones
  youtube: "",             // TODO: link del canal

  // Un kit por video. Cada uno tiene su página: zea.lat/<slug>
  // youtubeId = lo que va después de "watch?v=" (vacío = muestra la miniatura)
  kits: {
    "kit-anuncios-ia": {
      youtubeId: "",
      fecha: "2026-09-24",
      titulo: "La fábrica de anuncios con IA",
      video: "Hice +$4.917 USD en UN DÍA con anuncios hechos por CLAUDE (sin grabar nada)",
      resumen: "El sistema que muestro en el video: le pasás a Claude un link de la Biblioteca de Anuncios y te devuelve réplicas, UGC con avatar y B-rolls con IA, con voz, subtítulos y música, listos para subir.",
      thumb: "assets/video-2.jpg",
      pdf: "files/kit-video-2.pdf",
      zip: "files/kit-video-2-skills.zip",
      incluye: [
        ["Skill /watch", "Le saca el ADN a un anuncio ganador: guion, hooks, dolores, CTA, B-rolls y prompts para replicarlo."],
        ["Skill /anuncios-ia", "La producción completa: réplica, UGC y B-roll, con karaoke, música, efectos y previsualización."],
        ["Plantilla de claves (.env)", "Dónde van tus claves de kie.ai, Google AI Studio, ElevenLabs y Vmake."],
        ["Tutorial de configuración", "Paso a paso de 1 hora, con el prompt de configuración y el de tu primera tanda."]
      ]
    },
    "kit-ofertas-ganadoras": {
      youtubeId: "",
      fecha: "2026-09-23",
      titulo: "Encontrar, modelar y lanzar ofertas ganadoras",
      video: "De 0 a $3.500 por día vendiendo productos digitales con Claude",
      resumen: "El sistema que muestro en el video: una rutina que cada mañana te trae 15 ofertas que ya venden, la skill para llevarlas a otro mercado y cómo las lanzo y escalo en Meta Ads.",
      thumb: "assets/video-1.jpg",
      pdf: "files/kit-video-1.pdf",
      zip: "files/kit-video-1-skills.zip",
      incluye: [
        ["Skill /cazar", "Encuentra ofertas ganadoras en la Biblioteca de Anuncios con todos mis filtros y puntajes."],
        ["Rutina diaria", "El prompt que corre todas las mañanas y te deja 15 ofertas listas para revisar."],
        ["Skill /modelar", "Lleva una oferta a otro mercado: oferta, landing, tienda y 10 anuncios, con pausas para aprobar."],
        ["SOP CBO madre", "Cómo testeo, cuándo corto, cómo renuevo creativos y la escalera para escalar."]
      ]
    }
  }
};
