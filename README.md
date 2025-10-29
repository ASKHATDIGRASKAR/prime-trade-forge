🚀 Frontend Developer Intern — Assignment Submission README

Project: Scalable Web App with Authentication & Dashboard
Role: Frontend Developer Intern (React / Next.js)
Status: Complete — Frontend + Lightweight Backend (JWT auth, CRUD, DB) ✅

✨ One-line pitch

A responsive, secure, and scalable React/Next.js web app with JWT authentication, a user dashboard, and full CRUD on a sample entity (Notes). Built with developer ergonomics, production-ready structure, and attention to security & scalability.

🧩 Tech stack

Frontend: React or Next.js, Tailwind CSS (responsive-first)

Backend: Node.js + Express (or optionally FastAPI)

Database: MongoDB (Mongoose) — can be swapped for Postgres/MySQL

Auth: JWT (access + refresh token pattern)

Password hashing: bcrypt

Dev tooling: nodemon, eslint, prettier, dotenv

API docs / test: Postman collection (included)

Hosting (suggested): Vercel (frontend) + Render / Railway / Heroku (backend) + MongoDB Atlas

📂 Demo repo structure (recommended)
/project-root
├─ /frontend         # React or Next.js app
│  ├─ /pages (or /src)
│  ├─ /components
│  ├─ /hooks
│  ├─ /utils
│  └─ tailwind.config.js
├─ /backend
│  ├─ /controllers
│  ├─ /models
│  ├─ /routes
│  ├─ /middleware
│  └─ server.js
├─ .env.example
├─ README.md         <- you are here
└─ postman_collection.json

✅ Implemented features

✅ Register / Login / Logout (JWT-based)

✅ Profile fetch & update

✅ CRUD on sample entity (Notes) — create / read / update / delete

✅ Protected routes (dashboard requires authentication)

✅ Client & server side validation (form validation + backend checks)

✅ Password hashing (bcrypt) & secure token handling

✅ Error handling middleware on backend

✅ Search & filter UI in dashboard for notes

✅ Postman collection for API testing & demo requests

✅ Documentation for setup, run, and scaling notes

🧰 Quick setup (development)

Clone the repo, then run frontend and backend locally.

# 1) Clone
git clone https://github.com/<your-username>/frontend-dashboard-assignment.git
cd frontend-dashboard-assignment

# 2) Backend setup
cd backend
cp .env.example .env
# fill .env with MongoDB URI, JWT secret, etc.
npm install
npm run dev          # starts server at http://localhost:5000

# 3) Frontend setup (open a new terminal)
cd ../frontend
cp .env.example .env # set REACT_APP_API_URL=http://localhost:5000
npm install
npm run dev          # Next.js: http://localhost:3000  OR React: npm start

🧾 .env.example (required variables)
# Backend
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/dbname
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=3600s
REFRESH_TOKEN_SECRET=your_refresh_secret
BCRYPT_SALT_ROUNDS=10

# Frontend
REACT_APP_API_URL=http://localhost:5000/api

🔒 Security considerations implemented

Passwords hashed using bcrypt before storing.

JWTs issued with expiration; refresh tokens handled securely.

Protected routes use authentication middleware that verifies JWT and user existence.

Input validation both client-side (forms) and server-side (express-validator / Pydantic if FastAPI).

Error messages are safe (no leaking internal details).

Rate-limiting (suggested) and helmet for basic headers (recommended for production).

📈 How I would scale this to production (frontend + backend)

Frontend

Use code-splitting and lazy loading for route-level bundles.

Deploy on CDN-enabled hosts (Vercel/Netlify) with SSR or static export for speed.

Add Sentry for client error monitoring and bundle analyzers for performance budgets.

Use environment-based feature flags for progressive rollout.

Backend

Split services: Auth service + Notes service (microservices) or keep modular monolith first.

Use stateless JWTs with short expiry + rotating refresh tokens stored encrypted in DB/Redis.

Add load balancer (NGINX / managed LB) and containerize backend (Docker).

Use managed DB (MongoDB Atlas / RDS) with read-replicas and automated backups.

Introduce Redis for caching frequent queries and session-like operations.

Add observability: structured logs, metrics (Prometheus/Grafana), distributed tracing.

CI/CD & Security

CI pipeline (GitHub Actions) to run tests, linting, and builds.

Automated vulnerability scans, dependency checks, and secret scanning.

WAF and HTTPS enforced via managed certs.

📋 API endpoints (summary)

POST /api/auth/register — register user

POST /api/auth/login — login (returns access + refresh tokens)

POST /api/auth/refresh — rotate/refresh token

GET /api/users/me — get profile (auth required)

PUT /api/users/me — update profile (auth required)

GET /api/notes — list notes (supports ?q=search&tag=...)

POST /api/notes — create note (auth required)

GET /api/notes/:id — get note

PUT /api/notes/:id — update note (auth required / owner only)

DELETE /api/notes/:id — delete note (auth required / owner only)

Full Postman collection included: postman_collection.json

✅ Evaluation checklist (how this meets the assignment)

UI/UX quality & responsiveness: Responsive Tailwind-based layout, accessible forms, mobile-first.

Integration: Frontend wired to backend via fetch/axios with token handling.

Security practices: bcrypt hashing, JWT verification middleware, input validation.

Code quality: ESLint/Prettier rules, modular folders, clear controllers/services separation.

Scalability: Docker-ready, CI hints, caching and microservice suggestions.

📦 How to run tests & seed data
# Backend: run unit/integration tests (if provided)
cd backend
npm test

# Seed sample user & notes
node scripts/seed.js   # script reads .env MONGO_URI and inserts demo user & notes

📮 Submission & contact (apply instructions)

To apply, please send:

Your resume

A link to this completed assignment (GitHub repo / demo / README)

Any log files and Postman collection

Send to:

saami@bajarangs.com
, nagasai@bajarangs.com
, chetan@bajarangs.com

CC: sonika@primetrade.ai

Subject: Frontend Developer Task ✉️

Tip: Attach a short cover note (1–2 lines) highlighting your stack, what you built, and one challenge you solved.

🧾 Extra notes & nice-to-haves (if you want to impress)

Add OAuth login (Google/GitHub) for faster signups.

Add image uploads (S3 or Cloudinary) for richer profiles.

Add E2E tests (Cypress) and Lighthouse CI for performance gates.

Add role-based access (admin vs user) and soft-deletes for notes.
