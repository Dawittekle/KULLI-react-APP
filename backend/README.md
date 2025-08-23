# Uber-like Backend Starter (Express + PostgreSQL)

This is a **minimal learning project** showing how to build a ride-hailing style backend with Node.js, Express, and PostgreSQL.
Use it as a base to learn, extend, and experiment — not production-ready yet.

## Features (MVP)
- User registration & login (riders and drivers)
- Drivers toggle online/offline and update live location
- Riders request a ride; nearest online driver is assigned (very naive)
- Ride lifecycle: assigned → arrived → in_progress → completed/cancelled
- Simple fare estimate/compute using straight-line distance (Haversine)
- Basic JWT auth, rate limiting, CORS, and structured error handling
- Socket.IO scaffold for realtime updates

## Stack
- Node.js + Express
- PostgreSQL (no PostGIS; using floats + Haversine function)
- Socket.IO (realtime skeleton)
- docker-compose for local Postgres & Redis


## Quick Start

1. **Prereqs**
   - Node.js 18+ and npm
   - Docker Desktop (or Docker Engine)

2. **Clone/unzip** this folder, then copy `.env.example` to `.env` and edit:
   ```bash
   cp .env.example .env
   # Update JWT_SECRET etc.
   ```

3. **Start Postgres (and Redis) with Docker Compose**
   ```bash
   docker compose up -d
   ```

4. **Install deps and init DB schema**
   ```bash
   npm install
   npm run db:init
   ```

5. **Run the API**
   ```bash
   npm run dev
   # Server: http://localhost:4000
   # Healthcheck: GET /health
   ```

## API (sample calls)

### Register (rider)
```bash
curl -X POST http://localhost:4000/auth/register -H "Content-Type: application/json" -d '{
  "role":"rider","name":"Alice","phone":"+251900000001","password":"secret123"
}'
```

### Register (driver)
```bash
curl -X POST http://localhost:4000/auth/register -H "Content-Type: application/json" -d '{
  "role":"driver","name":"Bob","phone":"+251900000002","password":"secret123"
}'
```

### Login
```bash
TOKEN=$(curl -s -X POST http://localhost:4000/auth/login -H "Content-Type: application/json" -d '{
  "phone":"+251900000001","password":"secret123"
}' | jq -r .token)
```

### Driver goes online and updates location
```bash
DRIVER_TOKEN=$(curl -s -X POST http://localhost:4000/auth/login -H "Content-Type: application/json" -d '{
  "phone":"+251900000002","password":"secret123"
}' | jq -r .token)

curl -X POST http://localhost:4000/drivers/online -H "Authorization: Bearer $DRIVER_TOKEN"
curl -X POST http://localhost:4000/drivers/location -H "Authorization: Bearer $DRIVER_TOKEN" -H "Content-Type: application/json" -d '{
  "lat":8.9806,"lng":38.7578
}'
```

### Rider requests a ride
```bash
curl -s -X POST http://localhost:4000/rides/request -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" -d '{
  "pickup":  {"lat":8.9806,"lng":38.7578,"address":"Addis Ababa"},
  "dropoff": {"lat":8.995,"lng":38.79,"address":"Bole"}
}'
```

### Accept / Start / Complete
```bash
RIDE_ID=... # from /rides/request response

curl -X POST http://localhost:4000/rides/$RIDE_ID/accept -H "Authorization: Bearer $DRIVER_TOKEN"
curl -X POST http://localhost:4000/rides/$RIDE_ID/start -H "Authorization: Bearer $DRIVER_TOKEN"
curl -X POST http://localhost:4000/rides/$RIDE_ID/complete -H "Authorization: Bearer $DRIVER_TOKEN"
```

## Project Structure
```
src/
  app.js
  server.js
  realtime.js
  middleware/
    auth.js
  routes/
    auth.js
    me.js
    drivers.js
    rides.js
  services/
    matchmaking.js
  utils/
    db.js
    db_init.js
sql/
  schema.sql
```

## Notes & Next Steps
- **Do not** use straight-line distance in production; integrate a routing service (e.g., OSRM) for road distance & ETA.
- Add phone-based OTP, email verification, and admin workflows for driver onboarding.
- Add **payments** (integration with a PSP), **receipts**, and **invoices**.
- Add **Redis** for queues and Socket.IO adapter if you scale to multiple instances.
- Replace floats with **PostGIS** types + spatial index for proper geosearch.
- Write unit/integration tests (Jest + Supertest) and add CI.
- Improve security: stronger validation, per-route rate limits, audit logging, etc.
- Containerize the Node app and deploy (Render, Fly.io, Railway, AWS, etc.).

---

Generated on 2025-08-23T20:24:49.296637Z
