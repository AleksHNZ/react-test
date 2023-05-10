import MyButton from './MyButton'
import { useState } from 'react'


function MyApp() {

    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return(
        <div>
            <h1>Clicked times</h1>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
        </div>
    )
}

export default MyApp