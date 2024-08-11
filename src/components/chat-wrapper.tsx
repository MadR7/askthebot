"use client"

import { Message, useChat } from "ai/react"
import { Messages } from "./messages"
import { ChatInput } from "./chat-input"

export const ChatWrapper = ({
    sessionID,
    initialMessages,
}:{
    sessionID:string,
    initialMessages:Message[]
}) =>{
    const {messages, handleInputChange, handleSubmit, input, setInput} = useChat({
        api: "/api/chat-stream",
        body: { sessionID },
        initialMessages,
    })
    return(
        <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
            <div className="flex flex-col gap-2 text-black bg-zinc-800 justify-between flex-1">
                <Messages messages = {messages} />
            </div>
            <ChatInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} setInput={setInput}/>
            </div>
     )
}