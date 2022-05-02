import React from 'react';
import Styles from './style';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <Styles>
            <h1><Link to="/">logo</Link></h1>
            <div className="sch_area">
                <div className="sch_box">
                    <input type="text" />
                </div>
                <div className="sch_btn">
                    <button type="button"></button>
                </div>
            </div>
            <div className="user_area">
                <div className="ala_img">
                    ㅇ
                </div>
                <div className="user_text">
                    홍길동(디지털혁신TF 영업 Part)
                </div>
                <div className="log_btn">로그아웃</div>
            </div>
        </Styles>
    )
}

export default Header;