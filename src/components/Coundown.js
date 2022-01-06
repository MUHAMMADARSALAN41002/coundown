import React, { useState } from 'react'
import './Coundown.css'

const Coundown = () => {

    const [time, settime] = useState(25);
    const [interv, setinterv] = useState();
    const [bkcolor, setbkcolor] = useState('lightgreen');
    const [color, setcolor] = useState('black');
    const [sta, setsta] = useState(true);
    const [pas, setpas] = useState(false);
    const [res, setres] = useState(false);

    const start = () => {
        const timer = setInterval(run, 1000)
        setinterv(timer)
        setsta(false)
        setpas(true)
    }

    let timer = time;

    const run = () => {
        timer--;

        if (timer < 0) {
            clearInterval(interv)
            setsta(false)
            setpas(false)
            setres(false)
        }
        else {
            if (timer === 20) {
                setbkcolor('black')
                setcolor('white')
            }
            if (timer === 10) {
                setbkcolor('yellow')
                setcolor('black')
            }
            if (timer === 5) {
                setbkcolor('white')
            }

            return settime(timer)
        }
    }

    const pause = () => {
        setpas(false)
        setres(true)
        clearInterval(interv)
    }

    const resume = () => {
        setpas(true)
        setres(false)
        const timer = setInterval(run, 1000)
        setinterv(timer)
    }

    const reset = () => {
        clearInterval(interv)
        setbkcolor('lightgreen')
        setcolor('black')
        setres(false)
        setpas(false)
        setsta(true)
        settime(25)
    }

    return (
        <div className="container" style={{ backgroundColor: bkcolor, color: color }}>
            <h1 style={{ color: color }}>Downward Timer</h1>
            <div className='timer' style={{ border: `2px solid ${color}` }}>
                <h1 style={{ textAlign: 'center', color: color }}>{time}</h1>
                {sta ? <button onClick={start}>Start</button> : null}
                {pas ? <button onClick={pause}>Pause</button> : null}
                {res ? <button onClick={resume}>Resume</button> : null}
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default Coundown;