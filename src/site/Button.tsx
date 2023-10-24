import { log } from "console"
import { MouseEvent } from "react"

type PropsUniversalButtonType = {
    name: string
    callBack: ()=>void
}


export const Button = () => {


    const onClickHandler = (name: string) => {
        console.log(name)
    }

    // const foo1 =() => {
    //         //ничего не передавать
    //         console.log(200100);

    // }
    // const foo2 =(number: number) => {
    //     // gthtlfnm 100200
    //     console.log(number);ы

    // }

    return (
        <div>
            {/* <button onClick={ (event) => {console.log("hello")}}>MyYoutubeCanel-1</button> */}
            {/* <button onClick={ (event:MouseEvent<HTMLButtonElement>)=>onClickHandler("Vasia")}>MyYoutubeCanel-1</button> */}
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Ivan")}>MyYoutubeCanel-2</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Pavel")}>MyYoutubeCanel-3</button>

            {/* <button onClick={foo1}>1</button> если НИЧЕГО не передаём в функцию */}
            {/* <button onClick={ (event:MouseEvent<HTMLButtonElement>) => {foo2(100200)}}>2</button> если передаём в функцию */}
        </div>

    )
}


export const UniversalButton = (props: PropsUniversalButtonType) => {

    const onClickHandler = () => {
        props.callBack()

    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}