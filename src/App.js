import React from 'react'
import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  //this is basically saying if you're not logged in or there is no username.
if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
    height="100vh"
    projectID="
    8ef30078-42a0-4a43-9177-4ebda5285d5a"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed  {... chatAppProps} />}
    />
  )
}

export default App
