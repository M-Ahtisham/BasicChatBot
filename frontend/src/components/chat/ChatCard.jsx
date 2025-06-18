import React, { useState } from 'react';
import MessageList from './MessageList';

export default function ChatCard() {
  const [messages, setMessages] = useState([
    { from: 'bot', type: 'text', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: 'user', type: 'text', text: input },
      { from: 'bot', type: 'text', text: "Thanks for your message!" },
    ]);
    setInput('');
  };

  return (
    <div className="w-full h-[600px] flex flex-col bg-white/90 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden">
      <MessageList messages={messages} />
      <div className="flex p-3 border-t bg-white">
        <input
          className="flex-1 px-4 py-2 border rounded-l-md outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-md"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
