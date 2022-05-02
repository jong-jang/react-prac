import styled from "styled-components";

const Styles = styled.header`
    display:flex;
    align-items: center;
    width:100%;
    height:60px;
    border-bottom:1px solid #333;
    background-color:#9b0e0e;
    & h1 {
        flex-shrink: 0;
        width:100px;
        margin:0;
        margin-left:20px;
        line-height:50px;
        text-align:center;
        & a {
            color:#000;
            text-decoration:none;
        }
    }
    & .sch_area {
        flex-shrink: 0;
        position:relative;
        width:275px;
        height:30px;
        & .sch_box {
            position:absolute;
            left:0;
            
            & input {
                width: 236px;
                height: 27px;
                border: 2px solid #9b0e0e;
                border-radius: 30px;
                padding: 0px 10px 0px 10px;
                box-sizing:border-box;
            }
        }
        & .sch_btn {
            position:absolute;
            right:0;
            
            & button {
                width: 29px;
                height: 26px;
                border: 0px none;
                border-radius: 13px;
                cursor: pointer;
                color: #485374;
                font-size:20px;
                background: #fff;
            }
            &:after {
                content:'ㅇ';
                display:block;
                position:absolute;
                top:-3px;
                right:25%;
                font-size:20px;

            }
            &:before {
                content:'';
                display:block;
                position:absolute;
                top:62%;
                right:15%;
                width:10px;
                height:2px;
                background-color:#000;
                transform:rotate(45deg);

            }
        }
    }
    & .user_area {
        display:flex;
        flex-basis:100%;
        align-items: center;
        justify-content:flex-end;
        color:#fff;
        & .ala_img {
            margin-right:20px;
        }
        & .user_text {
            margin-right:20px;
        }
        & .log_btn {
            border:1px solid #fff;
            padding:5px 13px;
            border-radius:30px;
            margin-right:20px;
            
        }
    }
    
`

export default Styles;