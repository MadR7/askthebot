import { ChatWrapper } from "@/components/chat-wrapper"
import {ragChat} from "@/lib/rag-chat"
import { redis } from "@/lib/redis"
import { cookies } from "next/headers"

interface PageProps{
    params: {
        url: string | string[] | undefined
    }
}
function reconstructUrl({url}: {url: string[]}){
    const decodedComponents = url.map((component) => decodeURIComponent(component))
    return decodedComponents.join("/")
}

const Page = async({params}: PageProps) =>{
    const sessionCookie= cookies().get("sessionID")?.value 
    const reconstructedUrl = reconstructUrl({url: params.url as string[]})

    const sessionID = (reconstructUrl + "--" + sessionCookie).replace(/\//g, "")
    const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl)

    const initialMessages = await ragChat.history.getMessages({amount:10, sessionId: sessionID})

    if (!isAlreadyIndexed){
        await ragChat.context.add({
            type: "html",
            source: reconstructedUrl,
            config: {chunkOverlap: 50, chunkSize:200}, 
        })

        await redis.sadd("indexed-urls", reconstructedUrl)

    }
    
    return <ChatWrapper sessionID={sessionID} initialMessages={initialMessages}/>
}

export default Page