import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

export default function MessageList({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 scrollbar-hidden">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} from={msg.from} type={msg.type} text={msg.text} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
