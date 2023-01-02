import { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';


let stopInterval = undefined;

function TimerCounter() {
    const [watch, setwatch] = useState(0);
    const [started, setstarted] = useState(false);

    const [active, setActive] = useState(true);
  

    const startWatch = () => {
        // console.log(startWatch, 'startwatch');
        stopInterval = setInterval(() => {
            setwatch((x) => (x + 1))
        }, 1000)
        setstarted(true);
        setActive(!active);
    }
    const stopWatch = () => {
        clearInterval(stopInterval)
        setstarted(false);
        setActive(!active);
    }

    const resetWatch = () => {
        setwatch(0);
        clearInterval(stopInterval);
        setstarted(false);
        setActive(!active);
    }


    return (

        <div>
            <h1>Start Stop Watch</h1>

            <div className='mt-5 timevalue'>
                {watch}
            </div>

            <ButtonGroup size="lg">
                <Button disabled={started} onClick={startWatch}>Start</Button>
                <Button onClick={stopWatch} 
                className={ active ? "red-btn" : "blue-btn" }
                >Stop</Button>
                <Button onClick={resetWatch}
                
                >Reset</Button>
            </ButtonGroup>

        </div>

    )

}

export default TimerCounter;