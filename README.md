# agency-demo-hello-world

Pilot demo for the agency hosting portal at `demo.almostimpossible.agency`.
Validates the full Cloudflare → Hetzner → Coolify → Traefik → Next.js path.

Live: <https://hello-world.demo.almostimpossible.agency>

## Local dev

```
npm install
npm run dev
```

## Deployment

Auto-deployed via Coolify (VM 200) on push to `main`.
- Domain: `hello-world.demo.almostimpossible.agency`
- TLS: shared `*.demo.almostimpossible.agency` wildcard (Traefik resolver `letsencrypt-wildcard`)
- Build pack: Nixpacks (auto-detected Next.js)
