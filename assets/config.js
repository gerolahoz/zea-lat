// Todo lo editable del sitio está acá.
window.ZEA = {
  whatsapp: "5493777272762",   // con código de país (54 + 9 + área + número), sin + ni espacios
  whatsappMsg: "Hola Gero! Vengo de YouTube y quiero info de la mentoría",
  instagram: "gerolahoz",
  youtube: "",             // TODO: link del canal (vacío = se oculta)

  // Un kit por video. Cada uno tiene su página: zea.lat/<slug> (ej. zea.lat/anuncios)
  kits: {
    "cazar": {
      fecha: "2026-09-25",
      titulo: "Cómo encuentro productos ganadores",
      video: "así encuentro productos ganadores (Claude los busca por mí)",
      resumen: "Todo lo del video: los criterios para saber si una oferta vale la pena, la skill /cazar que busca ofertas ganadoras en la Biblioteca de Anuncios y la rutina que lo hace sola todas las mañanas a las 8:00.",
      preview: "assets/kit3-preview.png",
      pdf: "files/kit-video-3.pdf",
      zip: "files/kit-video-3-skills.zip",
      incluye: [
        ["Hoja de criterios", "Qué tiene que cumplir, qué descartar, el puntaje de 0 a 4 y a qué país llevarla."],
        ["Skill /cazar", "Busca en 9 países, filtra con todos mis criterios y ordena por prioridad."],
        ["Rutina diaria 8:00", "El prompt que corre solo todas las mañanas y te deja 15 ofertas."],
        ["Prompts de feedback", "Cómo entrenarla con Sí / No y cómo pasarle ofertas que encontrás vos."]
      ]
    },
    "anuncios": {
      fecha: "2026-09-24",
      titulo: "La fábrica de anuncios con IA",
      video: "hice +$4.917 USD en un día con anuncios hechos por Claude",
      resumen: "El sistema que muestro en el video: le pasás a Claude un link de la Biblioteca de Anuncios y te devuelve réplicas, UGC con avatar y B-rolls con IA, con voz, subtítulos y música, listos para subir.",
      preview: "assets/kit2-preview.png",
      pdf: "files/kit-video-2.pdf",
      zip: "files/kit-video-2-skills.zip",
      incluye: [
        ["Skill /watch", "Le saca el ADN a un anuncio ganador: guion, hooks, dolores, CTA, B-rolls y prompts para replicarlo."],
        ["Skill /anuncios-ia", "La producción completa: réplica, UGC y B-roll, con karaoke, música, efectos y previsualización."],
        ["Plantilla de claves (.env)", "Dónde van tus claves de kie.ai, Google AI Studio, ElevenLabs y Vmake."],
        ["Tutorial de configuración", "Paso a paso de 1 hora, con el prompt de configuración y el de tu primera tanda."]
      ]
    },
    "ofertas": {
      fecha: "2026-09-23",
      titulo: "Encontrar, modelar y lanzar ofertas ganadoras",
      video: "el proceso para facturar USD 3.500 por día con productos digitales",
      resumen: "El sistema que muestro en el video: una rutina que cada mañana te trae 15 ofertas que ya venden, la skill para llevarlas a otro mercado y cómo las lanzo y escalo en Meta Ads.",
      preview: "assets/kit1-preview.png",
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
