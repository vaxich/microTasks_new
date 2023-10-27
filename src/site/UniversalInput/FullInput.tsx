import { ChangeEvent, useState } from "react"

export type PropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: PropsType) => {

   let [title, setTitle] = useState("")

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
            
            setTitle(event.currentTarget.value)
            
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle("")
    }


    return (
        <div>
            <div>
                <input value={title} onChange={onChangeInputHandler}  />
                <button onClick={onClickButtonHandler}>+</button>
            </div>
            
        </div>
    )
}