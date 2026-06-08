# ─────────────────────────────────────────────
#  GodotCraft Portfolio — Dockerfile
#  Usa Nginx Alpine para servir el sitio estático
#  Uso: docker build -t godotcraft . && docker run -p 8080:80 godotcraft
# ─────────────────────────────────────────────
FROM nginx:alpine

# Copiar el portafolio al directorio raíz de Nginx
COPY . /usr/share/nginx/html

# Configuración mínima de Nginx
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    # Headers necesarios para exportaciones web de Godot (WASM) \
    location ~* \.(wasm|pck)$ { \
        add_header Cross-Origin-Opener-Policy "same-origin"; \
        add_header Cross-Origin-Embedder-Policy "require-corp"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
