import React, { useState } from 'react';
import { X, Sparkles, Send, MapPin, Search, MessageSquare } from 'lucide-react';

interface TownAIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TownAIAssistantModal: React.FC<TownAIAssistantModalProps> = ({
  isOpen,
  onClose
}) => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    {
      sender: 'ai',
      text: "Vanakkam! Welcome to Vaniyambadi360 AI Town Hub. Ask me anything about Vaniyambadi businesses, advocates, biryani joints, leather markets in Khaderpet, schools, or Sub-Registrar procedures!"
    }
  ]);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    "Find reliable electricians & plumbers in Vaniyambadi",
    "Where can I get AC service & fridge repair in Vaniyambadi?",
    "Show me DTCP building plan & civil engineer consultants",
    "Where is the Sub-Registrar office located in Vaniyambadi?",
    "Tell me about Vaniyambadi Biryani history and top spots"
  ];

  const handleSend = async (qText: string) => {
    if (!qText.trim() || loading) return;

    const userMsg = qText.trim();
    setQuestion('');
    setChatHistory(prev => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai/town-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMsg })
      });

      const data = await res.json();
      if (data.answer) {
        setChatHistory(prev => [...prev, { sender: 'ai', text: data.answer }]);
      } else {
        setChatHistory(prev => [...prev, { sender: 'ai', text: "Vaniyambadi has many vibrant local businesses! Try searching by category or area in the top directory bar." }]);
      }
    } catch (err) {
      setChatHistory(prev => [...prev, { sender: 'ai', text: "Sorry, I encountered a temporary connection issue. Please feel free to retry your question!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 text-white rounded-3xl max-w-2xl w-full border border-slate-800 shadow-2xl overflow-hidden my-8 flex flex-col h-[650px]">
        
        {/* Header */}
        <div className="p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-600 to-yellow-500 flex items-center justify-center text-slate-950 font-black shadow-lg">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-amber-400 font-bold text-[10px] uppercase tracking-wider block">
                Gemini 3.6 Flash Powered
              </span>
              <h2 className="text-lg md:text-xl font-black text-white">
                Vaniyambadi AI Town Hub
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Prompts Bar */}
        <div className="p-3 bg-slate-850 border-b border-slate-800/80 overflow-x-auto text-xs">
          <span className="text-slate-400 font-medium block mb-1">Quick Town Queries:</span>
          <div className="flex gap-2">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="bg-slate-800 hover:bg-slate-750 text-amber-300 px-3 py-1 rounded-lg border border-slate-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                ⚡ {p}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 p-4 bg-slate-950/90 overflow-y-auto space-y-3">
          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col max-w-[88%] ${
                msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <div
                className={`rounded-2xl px-4 py-3 text-xs md:text-sm leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-amber-500 text-slate-950 font-semibold rounded-br-none'
                    : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-slate-500 mt-1 px-1">
                {msg.sender === 'user' ? 'You' : 'Vaniyambadi360 AI'}
              </span>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-amber-400 italic">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" />
              <span>Gathering local information for Vaniyambadi...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(question)}
            placeholder="Ask about Vaniyambadi shops, advocates, biryani, or leather..."
            className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
          />
          <button
            onClick={() => handleSend(question)}
            disabled={loading || !question.trim()}
            className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold p-3 rounded-xl transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
