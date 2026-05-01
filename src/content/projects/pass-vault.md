---
title: "Pass Vault Safe"
description: "Sistema de gestión de contraseñas"
technologies: ["Next.js", "Tailwind CSS", "Supabase", "MongoDB", "Prisma", "Bcrypt"]
img: "/projects/pass-vault.webp"
urls:
    live: "https://passvaultsafe.vercel.app/login?callbackUrl=https%3A%2F%2Fpassvaultsafe.vercel.app%2F"
    repo: "https://github.com/Hferpi/password-generator"
---

Desarrollé un **gestor de credenciales robusto** utilizando **Next.js**, enfocado en la **seguridad y la experiencia de usuario**. La aplicación permite almacenar, organizar y generar contraseñas de forma centralizada, garantizando un acceso rápido y privado a la información sensible.

El sistema cuenta con un generador dinámico que permite personalizar la longitud y complejidad de las claves (incluyendo números, letras y caracteres especiales), además de un **sistema de acceso directo mediante enlaces a los sitios web guardados**. La interfaz ha sido construida con **componentes reutilizables** y un diseño Totalmente **Responsive** para asegurar una navegación fluida en cualquier dispositivo.

Aunque el proyecto nació siguiendo la base de TarreDev, **decidí elevar el estándar de seguridad** por iniciativa propia: implementé una **arquitectura de cifrado doble utilizando bcrypt** para el hashing de credenciales de acceso y librerías de **encriptación simétrica** para **proteger los datos almacenados en la base de datos**. De esta forma, incluso en caso de una filtración de la BBDD, la información del usuario permanece ilegible.