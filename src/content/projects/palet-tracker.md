---
title: "Palet Tracker"
description: "Web para gestionar palets de carga"
category: "saas"
technologies: ["React", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "Prisma"]
img: "/projects/palet-tracker.webp"
urls:
    live: "https://arondai.vercel.app/"
    repo: "https://github.com/Hferpi/arondai"
---

Proyecto **SaaS funcional**: Se identificó un **problema real y se desarrolló una solución completa**. El programa proporciona un seguimiento tanto de los palés como de su contenido; es útil porque **gestiona varios estados, permitiendo localizar la carga** si sigue en fábrica, si está en el camión o si ha llegado a su destino.

Por cada palé se completa un formulario con el objetivo de identificar el contenido, el origen y el destino. Al finalizar, genera una **etiqueta tipo A4 imprimible que sirve como localizador**. Cada palé es único: se genera un código basado en el momento de su creación y su contenido.

La aplicación dispone de una **versión móvil con un escáner para leer el código QR generado**, permitiendo actualizar el estado del palé o consultar su información en tiempo real.

BBDD desplegada en railway