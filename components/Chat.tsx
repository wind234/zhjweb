import React, { useState } from 'react';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const newMessages = [...messages, `用户: ${input}`];
      setMessages(newMessages);
      setInput('');

      // 调用AI聊天API
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });
        const data = await response.json();
        setMessages([...newMessages, `AI: ${data.reply}`]);
      } catch (error) {
        console.error('Error fetching AI response:', error);
        setMessages([...newMessages, 'AI: 抱歉，出现了错误。']);
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.startsWith('AI') ? 'ai' : 'user'}`}>
            {msg}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="输入你的消息..." 
          onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }}
        />
        <button onClick={handleSend}>发送</button>
      </div>
      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          height: 500px;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
        }
        .messages {
          flex: 1;
          overflow-y: auto;
          margin-bottom: 10px;
        }
        .message {
          padding: 8px;
          margin-bottom: 5px;
          border-radius: 4px;
        }
        .user {
          background-color: #e1ffc7;
          align-self: flex-start;
        }
        .ai {
          background-color: #c7d1ff;
          align-self: flex-end;
        }
        .input-container {
          display: flex;
        }
        input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          margin-left: 10px;
          padding: 8px 16px;
          border: none;
          background-color: #4caf50;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default Chat;