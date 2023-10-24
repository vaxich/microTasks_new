type PropsBodyType = {
    titleForBody: string
}


export const Body = (props: PropsBodyType) => {
    return (
        <div>
           {props.titleForBody}
        </div>
    )
}