# Node 22 LTS line. Replaces the Coolify nixpacks build, whose nixpkgs node_22 was stuck at 22.11.0.
FROM node:22-alpine AS builder
WORKDIR /build
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
RUN addgroup -S nodejs && adduser -S -G nodejs nextjs
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0 NEXT_TELEMETRY_DISABLED=1
COPY --from=builder --chown=nextjs:nodejs /build/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /build/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /build/public ./public
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
