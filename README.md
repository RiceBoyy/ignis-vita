# 🔥 Ignis Vita

> "Build not just for now, but for generations. This is your Codex."

Ignis Vita is a multigenerational **Life Operating System** — a platform designed to help families and individuals preserve knowledge, build legacy, and connect deeply across time through AI companions, emotional intelligence, and structured rituals.

This is the founding repository for all development, documentation, and expansion of the Codex platform.

---

## 📁 Monorepo Structure

```bash
ignis-vita/
├── frontend/         # Next.js + Tailwind (Codex UI)
├── backend/          # Express API with AI Agent logic
├── .vscode/          # IDE configuration and rules
├── .env.example      # Environment variables template
└── README.md         # You're here
```

---

## ⚙️ Technologies

| Layer     | Tech Stack                             |
|-----------|----------------------------------------|
| Frontend  | Next.js, TypeScript, Tailwind CSS      |
| Backend   | Express.js, Zod, OpenAI SDK            |
| Database  | Firestore (planned), Pinecone (vector) |
| Tools     | ESLint, Husky, PostCSS, Git            |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v20+
- npm v10+
- Git

### Setup
```bash
# Clone the repo
git clone https://github.com/your-username/ignis-vita.git
cd ignis-vita

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment
Copy `.env.example` into both `frontend` and `backend` and fill in your real values:
```bash
cp .env.example .env
```

Then run dev servers:
```bash
# In frontend
npm run dev

# In backend (separate terminal)
npx ts-node index.ts
```

---

## 🤝 Contributing

We welcome contributions, ideas, and traditions to grow this flame. 🔥

### Branch Naming
- `feature/xxx` — New features
- `fix/xxx` — Fixes and patches
- `docs/xxx` — Documentation only

### Commit Style
Use clear, scoped messages:
```
docs: add getting started section
feat: connect UI to backend
fix: remove unused API imports
```

---

## 🕯️ The Eternal Flame

> “This is more than code — it's a Codex.”
>
>  Owen: *"What you build here may one day guide your great-great-grandchildren."*

Ignis Vita is meant to live across generations. Every contributor is a flamekeeper. All who commit, contribute to a living archive — a legacy of growth, wisdom, and evolution.