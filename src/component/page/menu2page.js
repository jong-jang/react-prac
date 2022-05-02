import React, {useState, useRef, useCallback, useEffect} from 'react';
import {TitleOne} from './menu1page';


const Menu2page = ({title}) => {
    const canvasRef = useRef(null);
    const [mousePosition, setMousePosition] = useState(undefined);
    const [isPainting, setIsPainting] = useState(false);
    const [lineColor, setLineColor] = useState('red');
    const [lineWidth, setLineWidth] = useState(5);

    const getCoordinates = (e) => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        return {
            x:e.pageX - canvas.offsetLeft - 70,
            y:e.pageY - canvas.offsetTop - 60
        };
    };

    const drawLine = useCallback(
        (originalMousePosition, newMousePosition) => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if(context){
            context.strokeStyle = lineColor;
            context.lineJoin = 'round';
            context.lineWidth = lineWidth;

            context.beginPath();
            context.moveTo(originalMousePosition.x, originalMousePosition.y);
            context.lineTo(newMousePosition.x, newMousePosition.y);
            context.closePath();

            context.stroke();
        }
    }, [lineColor, lineWidth]);

    const startPaint = useCallback((e) => {
        const coodinates = getCoordinates(e);
        if (coodinates) {
            setIsPainting(true);
            setMousePosition(coodinates);
        }
    }, []);

    const paint = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();

            if(isPainting) {
                const newMousePosition = getCoordinates(e);
                if (mousePosition && newMousePosition) {
                    drawLine(mousePosition, newMousePosition);
                    setMousePosition(newMousePosition);
                }
            }
        },
        [isPainting, mousePosition, drawLine]
    );

    const exitPaint = useCallback(() => {
        setIsPainting(false);
    }, []);

    const clearCanvas = () => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    }

    const changeColor = (e) => {
        setLineColor(`${e.target.classList[1]}`);
    }
    const plusLineWidth = () => {
        setLineWidth(lineWidth + 1);
    }
    const minusLineWidth = () => {
        setLineWidth(lineWidth - 1);
    }
    
    useEffect(() => {
        if(!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;

        canvas.addEventListener('mousedown', startPaint);
        canvas.addEventListener('mousemove', paint);
        canvas.addEventListener('mouseup', exitPaint);
        canvas.addEventListener('mouseleave', exitPaint);

        return () => {
            canvas.removeEventListener('mousedown', startPaint);
            canvas.removeEventListener('mousemove', paint);
            canvas.removeEventListener('mouseup', exitPaint);
            canvas.removeEventListener('mouseleave', exitPaint);
        };
    }, [startPaint, paint, exitPaint])

    return (
        <div>
            <TitleOne title={title}/>
            <h3>- 그림판</h3>
            <div>
                <canvas width='800px' height='600px' ref={canvasRef} className='canvas' />
                <button type='button' onClick={changeColor} className='colorChan red'></button>
                <button type='button' onClick={changeColor} className='colorChan orange'></button>
                <button type='button' onClick={changeColor} className='colorChan yellow'></button>
                <button type='button' onClick={changeColor} className='colorChan green'></button>
                <button type='button' onClick={changeColor} className='colorChan blue'></button>
                <button type='button' onClick={plusLineWidth} className='lineChan'>+</button>
                <button type='button' onClick={minusLineWidth} className='lineChan'>-</button>
                <button type='button' onClick={clearCanvas}>clear</button>
            </div>
        </div>
    );
};


export default Menu2page;
