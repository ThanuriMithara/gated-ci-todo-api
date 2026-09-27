# Gated CI Todo API

A simple **Todo REST API** built with Node.js/Express, featuring a **Gated CI/CD Pipeline** using GitHub Actions.

## What is a Gated CI Pipeline?

A gated CI pipeline enforces **sequential quality gates**: each stage must pass before the next one starts. If any gate fails, the pipeline stops — preventing broken code from reaching production.

```
Push/PR --> [Install] --> [Lint Gate] --> [Test Gate] --> [Build Gate]
```

## Pipeline Stages

| Stage | Gate | What it does |
|-------|------|--------------|
| Install | — | Installs npm dependencies |
| Lint | Gate 1 | Checks code quality with ESLint |
| Test | Gate 2 | Runs Jest unit + integration tests |
| Build | Gate 3 | Builds Docker image |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Get all todos |
| POST | `/todos` | Create a new todo (requires `{ "title": "..." }`) |

## Local Development

```bash
# Install dependencies
npm install

# Run the server
npm start

# Run tests
npm test

# Lint code
npm run lint
```

## Docker

```bash
# Build image
docker build -t gated-ci-todo-api .

# Run container
docker run -p 3000:3000 gated-ci-todo-api
```

## Tech Stack

- **Runtime**: Node.js 20
- **Framework**: Express.js
- **Testing**: Jest + Supertest
- **Linting**: ESLint
- **CI/CD**: GitHub Actions
- **Container**: Docker
