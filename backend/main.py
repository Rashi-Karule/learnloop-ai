from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

MODE_PROMPTS = {
    "learn": "You are a friendly teacher. Explain the concept the student asks about in simple, clear terms with examples.",
    "notes": "You are a note-making assistant. Convert the given topic into short, well-structured bullet-point notes.",
    "quiz": "You are a quiz generator. Create 5 multiple choice questions with 4 options each and mark the correct answer, based on the topic given.",
    "viva": "You are a viva examiner. Generate 5 viva (oral exam) questions with brief expected answers, based on the topic given.",
    "coding_mentor": "You are a coding mentor. Explain the given code line by line in simple terms, and point out any issues.",
    "study_planner": "You are a study planner. Create a day-wise study timetable based on the subjects/goals given.",
    "career_roadmap": "You are a career advisor. Create a step-by-step roadmap for the career goal given.",
}

class ChatRequest(BaseModel):
    mode: str
    message: str

@app.post("/chat")
def chat(req: ChatRequest):
    system_prompt = MODE_PROMPTS.get(req.mode, "You are a helpful assistant.")
    
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": req.message},
        ],
    )
    
    return {"response": response.choices[0].message.content}

@app.get("/")
def root():
    return {"status": "backend is running"}