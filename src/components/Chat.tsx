import { useState } from "react";
import { useChat, fetchServerSentEvents } from "@tanstack/ai-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Chat() {
  const [input, setInput] = useState("");

  const baseURL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "https://aes-portfolio-kt82.onrender.com";

  const { messages, sendMessage, isLoading } = useChat({
    connection: fetchServerSentEvents(`${baseURL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput("");
    }
  };

  const ChatMessage = ({ content }: { content: string }) => {
    return (
      <div className="flex flex-col gap-3 text-gray-300">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    );
  };

  return (
    <div className="p-5 md:p-0">
      <div className="flex flex-col bg-white/7 backdrop-blur-3xl h-120  md:size-120 rounded-lg">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 w-full border-white">
            Ask me a question!{" "}
            <span className="text-sm font-light">
              Limited to 20 prompts per day. :(
            </span>
          </h2>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.role === "assistant" ? "text-blue-400" : "text-white"
              }`}
            >
              <div className="font-semibold mb-1">
                {message.role === "assistant" ? "Assistant" : "You"}
              </div>

              <div>
                {message.parts.map((part, idx) => {
                  if (part.type === "thinking") {
                    return (
                      <div
                        key={idx}
                        className="text-sm text-gray-500 italic mb-2"
                      >
                        💭 Thinking: {part.content}
                      </div>
                    );
                  }

                  if (part.type === "text") {
                    return <ChatMessage key={idx} content={part.content} />;
                  }

                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border-2 border-purple-400 rounded-lg hover:border-purple-300 transition"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-6 py-2 bg-purple-700 text-white rounded-lg disabled:opacity-50 hover:bg-purple-600 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="flex gap-3 flex-col mt-2">
        <button
          onClick={() => setInput("What are your projects?")}
          className="p-1 w-full bg-purple-800 rounded-lg font-bold cursor-pointer"
        >
          Tell me about your projects.
        </button>
        <button
          onClick={() => setInput("What progamming languages are you familiar with?")}
          className="p-1 w-full bg-purple-800 rounded-lg font-bold cursor-pointer"
        >
          What progamming languages are you familiar with?
        </button>
        <button
          onClick={() =>
            setInput("Can you tell me about your past work experience?")
          }
          className="p-1 w-full bg-purple-800 rounded-lg font-bold cursor-pointer"
        >
          Can you tell me about your past work experience?
        </button>
      </div>
    </div>
  );
}
