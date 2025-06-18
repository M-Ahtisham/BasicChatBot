import React from 'react';
import ChatCard from './ChatCard';
import Background from './Background'; //REMINDER TO TWEAK

export default function ChatContainer() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 via-indigo-300 to-indigo-500 p-4 overflow-hidden">
      <Background />
      <div className="relative z-10 w-full max-w-2xl">
        <ChatCard />
      </div>
    </div>
  );
}
