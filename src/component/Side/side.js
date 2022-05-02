import React, {useState, memo} from 'react';
import Styles from './style';
import {Link} from 'react-router-dom';

const Sider = ({setOnsec, setTitle}) => {

    const [listleft, setListleft] = useState('listoff');
    const [btnleft, setBtnleft] = useState('btnoff');
    
    const onClick = (e) => {
        e.preventDefault();

        if(e.target.innerHTML === '0') {
            e.target.innerHTML = '1';
            setListleft('liston');
            setBtnleft('btnon');
            setOnsec('onsec')
        } else {
            e.target.innerHTML = '0';
            setListleft('listoff');
            setBtnleft('btnoff');
            setOnsec('offset')
        }
    }

    const linkClick = (e) => { setTitle(e.target.innerText); }

    return (
            <>
                <Styles>
                    <ul className="sidebar">
                        <li>
                            <button type="button">menu</button>
                            <div className={`list ${listleft}`}>
                                <ul>
                                    <li>
                                        <dl>
                                            <dt>컴포넌트</dt>
                                            <dd><Link onClick={linkClick} to="/static">page 1</Link></dd>
                                            <dd><Link onClick={linkClick} to="/form">drawLine</Link></dd>
                                            <dd><Link onClick={linkClick} to="/button">eye</Link></dd>
                                            <dd><Link onClick={linkClick} to="/tab">Tab</Link></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>영역별 레이아웃</dt>
                                            <dd></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>화면패턴</dt>
                                            <dd></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>화면패턴</dt>
                                            <dd></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>화면패턴</dt>
                                            <dd></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>화면패턴</dt>
                                            <dd></dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>화면패턴</dt>
                                            <dd></dd>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button type="button">menu2</button>
                        </li>
                        <li>
                            <button type="button">menu3</button>
                        </li>
                        <li>
                            <button type="button">menu4</button>
                        </li>
                    </ul>
                    <div className={`ext_btn ${btnleft}`}>
                        <button type="button" onClick={onClick}>0</button>
                    </div>
                </Styles>
            </>
    )
}

export default memo(Sider);
