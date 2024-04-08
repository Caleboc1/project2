import React from 'react'
import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine 
    height="100vh"
    projectID="
    8ef30078-42a0-4a43-9177-4ebda5285d5a"
    userName="cakpomughe@gmail.com"
    userSecret="Damn0903"
    renderChatFeed={(chatAppProps) => <ChatFeed  {... chatAppProps} />}
    />
  )
}

export default App
