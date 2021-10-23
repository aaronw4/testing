import React, { useState } from "react";

const List = (props) => {
    const [numbers, setNumbers] = useState(props.items)

    function whenClicked(value) {
        let index = numbers.indexOf(value)
        let first = numbers[index]
        let second = numbers.slice(0, index)
        let third = numbers.slice(index + 1)
        setNumbers([first].concat(second).concat(third))
    }
    
    return(
        <div>
            <ul>
                {numbers.map(num => (
                    <li key={num} onClick={() => whenClicked(num)}>{num}</li>
                ))}
            </ul>
        </div>
    );
  }

export default List