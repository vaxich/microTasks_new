
type StudenrType = {
    id: number
    name: string
    age: number
}

type PropsMetodMapType = {
    students: Array<StudenrType>
}


export const MetodMap = (props: PropsMetodMapType) => {

    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]

    return (
        <div>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    
                    return (
                        <li key={index}>
                            <span> name: {objectFromStudentArray.name}</span>
                            <span> age: {objectFromStudentArray.age}</span>
                        </li>
                    )
                })}

            </ul>
            <table>
                <tr>
                    <th>Number</th>
                    <th>Marka</th>
                    <th>Model</th>
                </tr>
                {topCars.map( (oneCar, index) => {
                    return(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{oneCar.manufacturer}</td>
                            <td>{oneCar.model}</td>
                        </tr>
                    )
                })}
                
            </table>
        </div>
    )
}