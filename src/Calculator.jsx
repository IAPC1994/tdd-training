import { useState } from "react";
import { evaluate } from "mathjs";

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const rows = [
    [7,8,9],
    [4,5,6],
    [1,2,3],
    [0]
]
export const operations = ['+','-','*','/']
export const equalSign = '='
export const clearInput = 'C'

export const Calculator = () => {
    const [value, setValue] = useState('');

    const createHandleValue = buttonValue => () => setValue(value.concat(buttonValue));

    return (
        <div>
            <h1>Calculator</h1>
            <input type="text" value={ value } readOnly />
            <div role="grid">
                {
                    rows.map((row, index) => (
                        <div key={index} role="row">
                            { row.map( number => (
                                <button onClick={createHandleValue(number)} key={number}>{number}</button>
                            ))}
                        </div>
                    ))
                }  

                {
                    operations.map( operation => (
                        <button onClick={ createHandleValue(operation) } key={operation}>{operation}</button>
                    ))
                } 
                <button onClick={() => setValue(evaluate(value).toString())}>{equalSign}</button>
                <button onClick={() => setValue('')}>{clearInput}</button>
            </div>
        </div>
    )
}