import React from 'react';
import Head from 'next/head';
import Chat from '../components/Chat';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>AI聊天网站</title>
        <meta name="description" content="一个基于Next.js 14的AI聊天网站主页" />
      </Head>
      <header className="header">
        <h1>欢迎来到AI聊天网站</h1>
      </header>
      <main className="main">
        <Chat />
      </main>
      <footer className="footer">
        <p>© 2023 AI聊天网站. 版权所有.</p>
      </footer>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .header, .footer {
          background-color: #f5f5f5;
          padding: 20px;
          text-align: center;
        }
        .main {
          flex: 1;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;