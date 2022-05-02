import React, {useState, useRef} from 'react';
import {TitleOne} from './menu1page';

const Menu3page = ({title}) => {

    const leye = useRef(null);
    const reye = useRef(null);
    const [xeye, setXeye] = useState(50);
    const [yeye, setYeye] = useState(50);
    
    const hoverCheck = (e) => {
        setXeye(parseInt((e.pageX-800)/8));
        setYeye(parseInt((e.pageY-200)/6));

        if(setXeye(parseInt((e.pageX-800)/8)) > 80){
            setXeye(80);
        } else if (setXeye(parseInt((e.pageX-800)/8)) < 20) {
            setXeye(20);
        }
        if(setYeye(parseInt((e.pageY-200)/6)) > 80){
            setYeye(80);
        } else if (setYeye(parseInt((e.pageY-200)/6)) < 20) {
            setYeye(20);
        }

        console.log(xeye, yeye);

        leye.current.style.left = xeye+'%';
        reye.current.style.left = xeye+'%';
        leye.current.style.top = yeye+'%';
        reye.current.style.top = yeye+'%';

    }

    const outCursor = () => {
        setXeye(50);
        setYeye(50);
        leye.current.style.left = xeye+'%';
        reye.current.style.left = xeye+'%';
        leye.current.style.top = yeye+'%';
        reye.current.style.top = yeye+'%';
    }
    
    return (
        <div>
            <TitleOne title={title} />
            <h3>- eye hover</h3>
            <div className='face' onMouseMove={hoverCheck} onMouseOut={outCursor}>
                <div className='eye lf'>
                    <div className='ey le' ref={leye}></div>
                </div>
                <div className='eye ri'>
                    <div className='ey re' ref={reye}></div>
                </div>
            </div>
        </div>
    );
};

export default Menu3page;
