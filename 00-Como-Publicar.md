---
fecha: 2026-10-22
---
# corporal-hexa — capa de la zona de reservas (GitHub Pages)

Proyecto: [[00-Propuesta-Mejora-Reservas-Hexa-2026-10-22]] · mapa [[00-MoC-Codigos]]

- **Cuenta GitHub:** `corporalfisiocenter` (Gmail de Córporal). Repo público: https://github.com/corporalfisiocenter/corporal-hexa
- **URL del script (la que pone Hexa):** `<script src="https://corporalfisiocenter.github.io/corporal-hexa/capa.js" async></script>`
- **Por qué GitHub y no Cloudflare:** los bloqueos de LaLiga a IPs de Cloudflare durante los partidos (decisión de Pablo, 22-oct).
- **Publicar (lo hace Claude):** editar `capa.js` aquí y ejecutar en el Mac `./publicar.sh "mensaje"` (Desktop Commander). GitHub Pages tarda ~1 min en reconstruir y cachea hasta 10 min.
- **Credenciales:** `gh` instalado con Homebrew en el Mac de Pablo y autorizado (OAuth «GitHub CLI», 22-oct-2026, scopes repo/workflow/gist/read:org). El token vive en el llavero del Mac; no se guarda en el vault.
- **Demo/maquetas:** la versión de demostración (con etiqueta DEMO) está en `Corporal/Herramientas/Reservas-Hexa/capa/capa.js`; la de producción es la de esta carpeta (`DEMO = false`).
- **Comprobado 22-oct 13:35:** cargada desde GitHub en la página real de Hexa → saludo, estilo y 4 actividades OK.
- No poner contraseñas ni datos en este repo: es público.
