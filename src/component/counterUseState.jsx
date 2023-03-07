import React, { useState } from 'react'

const CounterUseState = () => {
    const [count, setcount] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {setcount(count + 1)}}>Increase</button>
        </div>
    )
}
                                            
export default CounterUseState