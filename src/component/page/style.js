import styled from "styled-components";

const Styles = styled.section`
    position:relative;
    float:left;
    width:calc(100% - 72px);
    padding:30px;
    box-sizing:border-box;
    font-size:16px;
    &:after {
        content:'';
        display:block;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:30px;
        background-color:#dcdee7;
    }
    & .sch_box {
        position:relative;
        width:calc(100%- 40px);
        height:70px;
        border:1px solid #787f98;
        border-radius:7px;
        padding:20px;
        box-sizing:border-box;
        background-color:#f7f8fa;
        & .sch_img {
            position:absolute;
            top:50%;
            right:20px;
            transform:translateY(-50%);
            width:36px;
            height:36px;
            border-radius:50%;
            line-height:36px;
            text-align:center;
            font-size:26px;
            color:#fff;
            background-color:#9b0e0e;
            &:after {
                content:'';
                display:block;
                position:absolute;
                top:67%;
                right:13%;
                width:10px;
                height:3px;
                background-color:#fff;
                transform:rotate(45deg);
            }
        }
        & .sch_item {
            &.onef {
                position:absolute;
                top:50%;
                transform:translateY(-50%);
            }
            & .inputBox {
                height:20px;
                border:1px solid #1f4f6f;
                margin-left:10px;
                & + span {
                    margin-left:40px;
                }
            }
        }
    }
    & .display_grid {
        display:grid;
        grid-template-columns:1fr 1fr 1fr 1fr 1fr;
        list-style-type: none;
        padding:0;
        text-align:center;
        & >li {
            border:1px solid #aaa;
        }
    }
    & canvas {
        border:1px solid #333;
    }
    & .colorChan {
        width:30px;
        height:30px;
        border-radius:50%;
        &.red {
            background-color:red;
        }
        &.orange {
            background-color:orange;
        }
        &.yellow {
            background-color:yellow;
        }
        &.green {
            background-color:green;
        }
        &.blue {
            background-color:blue;
        }
    }
    & .lineChan {
        width:50px;
        height:30px;
    }
    & .face {
        position:relative;
        left:0;
        right:0;
        margin:auto;
        width:800px;
        height:600px;
        border:1px solid #333;
        & .eye {
            position:absolute;
            top:30%;
            width:100px;
            height:100px;
            border:1px solid #333;
            border-radius:50%;
            & .ey {
                position:absolute;
                top:20%;
                width:40px;
                height:40px;
                transform:traslate(-50%, -50%);
                border-radius:50%;
                background-color:#333;
                &.le {
                    left:50%;
                }
                &.re {
                    right:50%;
                }
            }
            &.lf {left:35%;}
            &.ri {right:35%;}
        }
    }
`

export default Styles;
