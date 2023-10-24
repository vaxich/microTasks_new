
type PropsHeaderType = {
    title: string
}


export const Header = (props: PropsHeaderType) => {
    return (
            <div>
                {props.title}
            </div>
    )
}