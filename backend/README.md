# LearnLoop AI — Backend

FastAPI backend for LearnLoop AI.

## Getting started

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

## Endpoints

| Method | Path    | Description              |
| ------ | ------- | ------------------------ |
| GET    | /health | Health check             |
| POST   | /chat   | Chat endpoint (stub)     |

## Project structure

```
backend/
├── main.py          # App entry point + CORS config
├── routers/         # Route handlers grouped by feature
├── schemas/         # Request/response data models (Pydantic)
└── requirements.txt # Python dependencies
```
