# Build stage - 'builder'를 명시적으로 지정
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Production stage
FROM nginx:alpine

# 기존 nginx.conf의 user와 pid 지시문 제거
RUN sed -i '/user/d' /etc/nginx/nginx.conf && \
    sed -i '/pid/d' /etc/nginx/nginx.conf

# 커스텀 nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 빌드된 파일 복사
COPY --from=builder /app/build /usr/share/nginx/html/

# 로그 및 필요한 디렉토리 생성과 권한 설정
RUN mkdir -p /tmp/nginx /var/log/nginx && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    chown -R nginx:nginx /tmp/nginx && \
    chmod -R 755 /tmp/nginx

USER nginx
EXPOSE 80
EXPOSE 3000

# pid 파일 위치를 CMD에서 지정
CMD ["nginx", "-g", "daemon off;pid /tmp/nginx/nginx.pid;"]