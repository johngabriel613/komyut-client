import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";

const ChatBox = () => {
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello Komyut'er! I will be your personal route assistant. How may I help you today?",
      sender: "ChatGPT"
    }
  ])

  const API_KEY = "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";

  async function handleSend(message){
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true)
    
    await processMessage(newMessages);
  }

  async function processMessage(chatMessages){
    let apiMessages = chatMessages.map(messageObject => {
      let role = "";

      if(messageObject.sender === "ChatGPT") {
        role = "assistant"
      }else{
        role = "user"
      }

      return {role: role, content: messageObject.message}
    })

    const systemMessage = {
      role: "system",
      content: "You are a helpful assistant that can guide me what transportation route do i need to take along metro manila"
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-type": 'application/json'
      },
      body: JSON.stringify(apiRequestBody)
    }).then(data => {
      return data.json()
    }).then(data => {
      setMessages([
        ...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }
      ])
      setIsTyping(false)
    })
  }

  return (
    <div className="h-[400px] w-full max-w-[350px]">
      <div className="w-full flex-center gap-1 bg-slate-700 px-4 py-2 rounded-tr-md rounded-tl-md font-semibold text-slate-200">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
        </span>
        Komyut AI
      </div>
      <MainContainer className="my-chat-container">
        <ChatContainer>
          <MessageList typingIndicator={isTyping ? <TypingIndicator content="typing"/> : null}>
            {messages.map((message, i) => {
              return <Message key={i} model={message}/>
            })}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend}/>
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default ChatBox
