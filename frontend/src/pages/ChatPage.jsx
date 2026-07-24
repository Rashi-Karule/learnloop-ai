import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Send, Loader2 } from 'lucide-react'

const modeLabels = {
  learn: 'Learn',
  notes: 'Notes',
  quiz: 'Quiz',
  viva: 'Viva',
  coding_mentor: 'Coding Mentor',
  study_planner: 'Study Planner',
  career_roadmap: 'Career Roadmap',
}

function ChatPage() {
  const { mode } = useParams()
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!input.trim() || loading) return
    setLoading(true)
    setResponse('')
    try {
const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
          method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, message: input }),
      })
      const data = await res.json()
      setResponse(data.response)
    } catch (err) {
      setResponse('Error: could not reach backend. Make sure the server is running.')
    }
    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-6 py-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={16} />
          Back to modes
        </button>

        <h1 className="text-3xl font-bold mb-8">{modeLabels[mode] || mode}</h1>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 mb-6">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your topic or question..."
            rows={4}
            className="w-full bg-transparent outline-none resize-none placeholder-gray-500 text-gray-100"
          />
          <div className="flex justify-end mt-3">
            <button
              onClick={handleSubmit}
              disabled={loading || !input.trim()}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl font-medium transition-all"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Thinking...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Submit
                </>
              )}
            </button>
          </div>
        </div>

        {response && (
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 whitespace-pre-wrap leading-relaxed text-gray-200 animate-[fadeIn_0.3s_ease-in]">
            {response}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatPage