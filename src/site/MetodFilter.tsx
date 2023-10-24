import { useState } from "react"
import { NewMetodFilter } from "./NewMetodFilter"

export type statusButtonType = "Dollars" | "RUBLS" | "ALL"

export const MetodFilter = () => {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [statusButton, setStatusButton] = useState<statusButtonType>("ALL")

    let currentMoney = money

    if (statusButton === "Dollars") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "Dollars")
    }

    if (statusButton === "RUBLS") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "RUBLS")
    }

    const onClickFilterHandler = (banknots: statusButtonType) => {
        setStatusButton(banknots);

    }


    return (
        <NewMetodFilter
            currentMoney={currentMoney}
            onClickFilterHandler={onClickFilterHandler}
        />
    )
}