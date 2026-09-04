# Instalaciones NGR — Sitio web

Sitio web comercial, responsive y sin dependencias de build, desarrollado a partir del
*Brief para desarrollo de página web* de **Instalaciones NGR** (soluciones integrales en Gas LP).

Es HTML/CSS/JS puro (sin framework ni paso de compilación), por lo que puede publicarse
en cualquier hosting estático: GitHub Pages, Netlify, Vercel, cPanel, etc.

## Estructura

```
index.html              Página única con todas las secciones del brief
assets/
  css/styles.css         Estilos (paleta azul marino / blanco / gris + acento naranja)
  js/main.js             Menú móvil, header con sombra al hacer scroll, formulario, adjuntar fotos
  img/logo.png            Logotipo real de Instalaciones NGR (extraído del brief, fondo transparente)
```

## Secciones incluidas (siguiendo el brief punto por punto)

1. Header fijo + menú móvil + botón flotante de WhatsApp
2. Portada / mensaje principal con CTAs "Solicita una cotización" y "Agenda una revisión técnica"
3. ¿Quiénes somos? + respaldo Royal Gas (Instalación + Mantenimiento + Suministro)
4. Servicios: instalaciones, mantenimiento preventivo, mantenimiento correctivo
5. Revisiones técnicas (sección destacada para condominios/administradores)
6. Estaciones de carburación
7. Tanques y equipamiento
8. Cilindros para montacargas
9. Proyectos integrales (proceso 01–07, con Royal Gas como cierre del ciclo)
10. ¿Por qué Instalaciones NGR? (5 íconos)
11. Sectores que atendemos (con selección que enlaza a servicios)
12. Proyectos realizados (galería de ejemplo)
13. Seguridad
14. Formulario de cotización (con adjuntar fotografías)
15. Footer con datos de contacto y separación visual NGR / Royal Gas

## Cómo ver el sitio localmente

No requiere `npm install` ni build. Solo necesitas servir la carpeta:

```bash
python3 -m http.server 8080
# abre http://localhost:8080
```

o con la extensión "Live Server" de VS Code, o cualquier servidor estático.

## Pendientes antes de publicar en producción

El brief pide explícitamente solicitar material real antes de lanzar la página (sección 16).
Este sitio se entrega con **placeholders visuales** (bloques con patrón e ícono) en cada lugar
donde debe ir una fotografía real. Buscar `photo-placeholder` en `index.html`/`styles.css` para
ubicarlos todos.

Checklist antes de salir a producción:

- [ ] Sustituir los `photo-placeholder` por fotografías reales (instalaciones terminadas,
      técnicos uniformados, tanques, estaciones de carburación, etc. — ver lista completa
      en la sección 16 del brief).
- [ ] Actualizar teléfono, correo y número de WhatsApp reales (actualmente usan valores de
      ejemplo `+52 000 000 0000` / `contacto@instalacionesngr.com`) — buscar `520000000000`
      y `contacto@instalacionesngr.com` en `index.html`.
- [ ] Conectar el formulario de cotización a un backend real para recibir los envíos
      (por ejemplo [Formspree](https://formspree.io), Netlify Forms, o un endpoint propio).
      Actualmente el formulario (`#quote-form` en `assets/js/main.js`) valida y muestra un
      mensaje de confirmación en el navegador, pero **no envía los datos a ningún servidor**.
- [ ] Enlazar las redes sociales reales en el footer (Facebook, Instagram, LinkedIn).
- [ ] Publicar cualquier mención a certificaciones/NOM únicamente si NGR cuenta
      documentalmente con ellas (nota explícita del brief, sección 13).
- [ ] Configurar dominio propio y analítica (Google Analytics / Meta Pixel) si se desea medir
      generación de prospectos.

## Publicar en GitHub Pages (rápido)

1. Settings → Pages → Deploy from branch → `main` / `/ (root)`.
2. El sitio queda disponible en `https://<usuario>.github.io/<repo>/`.
