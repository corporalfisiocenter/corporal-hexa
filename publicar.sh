#!/bin/zsh
# Publica la capa en GitHub Pages (Claude lo ejecuta en el Mac). Uso: ./publicar.sh "mensaje"
cd "$(dirname "$0")"
git add -A && git commit -q -m "${1:-Actualiza capa}" && git push -q origin main && echo "Publicado: https://corporalfisiocenter.github.io/corporal-hexa/capa.js"
