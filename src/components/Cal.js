import React, { Component} from 'react'

const cal = ({count, onClickIn, onClickDe}) => {
    return (
        <div>
            <button onClick={()=> onClickIn() }>+</button>
            {count}
            <button onClick={() => onClickDe() }>-</button>
        </div>
    )
}

export default cal