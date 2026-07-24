import { useNavigate } from 'react-router-dom'
import { BookOpen, NotebookPen, HelpCircle, Mic, Code2, CalendarDays, Rocket, Sparkles } from 'lucide-react'

const modes = [
  { id: 'learn', label: 'Learn', desc: 'Understand any concept simply', icon: BookOpen, color: 'from-blue-500 to-cyan-400' },
  { id: 'notes', label: 'Notes', desc: 'Turn topics into clean notes', icon: NotebookPen, color: 'from-emerald-500 to-teal-400' },
  { id: 'quiz', label: 'Quiz', desc: 'Practice with MCQs', icon: HelpCircle, color: 'from-orange-500 to-amber-400' },
  { id: 'viva', label: 'Viva', desc: 'Prep for oral exams', icon: Mic, color: 'from-rose-500 to-pink-400' },
  { id: 'coding_mentor', label: 'Coding Mentor', desc: 'Understand & debug code', icon: Code2, color: 'from-violet-500 to-purple-400' },
  { id: 'study_planner', label: 'Study Planner', desc: 'Build a study timetable', icon: CalendarDays, color: 'from-indigo-500 to-blue-400' },
  { id: 'career_roadmap', label: 'Career Roadmap', desc: 'Plan your career path', icon: Rocket, color: 'from-red-500 to-orange-400' },
]

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
            <Sparkles size={14} className="text-blue-400" />
            Your AI-powered study companion
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            LearnLoop AI
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            One companion for everything academic — learn, revise, plan, and grow.
          </p>
        </div>

        {/* Mode Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modes.map((mode) => {
            const Icon = mode.icon
            return (
              <button
                key={mode.id}
                onClick={() => navigate(`/chat/${mode.id}`)}
                className="group relative text-left bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mode.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{mode.label}</h3>
                <p className="text-sm text-gray-400">{mode.desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home