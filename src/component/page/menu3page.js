import React, {useState, useRef} from 'react';
import {TitleOne} from './menu1page';

const Menu3page = ({title}) => {

    const leye = useRef(null);
    const reye = useRef(null);
    const [xeye, setXeye] = useState(50);
    const [yeye, setYeye] = useState(50);
    
    const hoverCheck = (e) => {
        setXeye(parseInt((e.pageX-100)/8));
        setYeye(parseInt((e.pageY-200)/6));

        if(setXeye(parseInt((e.pageX-100)/8)) > 100){
            setXeye(100);
        } else if (setXeye(parseInt((e.pageX-100)/8)) < 0) {
            setXeye(0);
        }
        if(setYeye(parseInt((e.pageY-200)/6)) > 100){
            setYeye(100);
        } else if (setYeye(parseInt((e.pageY-200)/6)) < 0) {
            setYeye(0);
        }

        console.log(xeye, yeye);

        leye.current.style.left = xeye+'%';
        reye.current.style.left = xeye+'%';
        leye.current.style.top = yeye+'%';
        reye.current.style.top = yeye+'%';

    }
    
    return (
        <div>
            <TitleOne title={title} />
            <h3>- eye hover</h3>
            <div className='face' onMouseMove={hoverCheck}>
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
