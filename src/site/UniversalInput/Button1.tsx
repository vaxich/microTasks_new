
type ButtonPropsType = {
    name: string
    callBack: () => void
}


export const Button1 = (props: ButtonPropsType) => {

const onClickButtonHandler = () => {
    props.callBack()
}

    return (
        <div>
            <div>
                <button onClick={onClickButtonHandler}>{props.name}</button>
            </div>
        </div>
            
       
    )
}