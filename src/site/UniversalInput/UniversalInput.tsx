import { useState } from "react"
//import { FullInput } from "./FullInput"
import { Input } from "./Input"
import { Button1 } from "./Button1"




type MessageType = {
    message: string
}

export const UniversalInput = () => {

    let [message, setMessage] = useState<Array<MessageType>>([
        { message: "message1" },
        { message: "message2" },
        { message: "message3" },
    ])

    let [title, setTitle] = useState("")

    const addMessage = (title: string) => {

        setMessage([ { message: title }, ...message])
        
    }

    return (
        <div>
            {/* <Input setTitle = {setTitle} title = {title}/> */}
            <Button1 name={"+"} callBack={ () => {}}/>
            {/* <FullInput
                addMessage={addMessage}
            /> */}
            {message.map((el, index) => {
                return (
                    <div key={index}> {el.message}</div>
                )
            })}
        </div>
    )
}


