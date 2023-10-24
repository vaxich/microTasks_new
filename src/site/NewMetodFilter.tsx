import { statusButtonType } from "./MetodFilter"

type PropscurrentMoneyType = {
    banknots: string
    value: number
    number: string
}

type PropsType = {
    currentMoney: PropscurrentMoneyType[]
    onClickFilterHandler: (banknots: statusButtonType) => void
}


export const NewMetodFilter = (props: PropsType) => {



    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArray.banknots}</span>
                            <span>{objFromMoneyArray.value}</span>
                            <span>{objFromMoneyArray.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.onClickFilterHandler("Dollars")}>Dollars</button>
                <button onClick={() => props.onClickFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={() => props.onClickFilterHandler("ALL")}>ALL</button>
            </div>


        </div>
    )
}