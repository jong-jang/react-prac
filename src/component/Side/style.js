import styled from "styled-components";

const Styles = styled.aside`
    float:left;
    width:70px;
    height:calc(100% - 61px);
    border-right: 2px solid #333;
    text-align:center;
    background-color:#3b444f;
    color:#fff;
    & .sidebar {
      list-style:none;
      padding:0;
      margin:0;
      > li{
        width:70px;
        height:60px;
        border-radius: 0px;
        border-top: 0px none;
        border-right: 0px none;
        border-bottom: 1px solid rgba(255,255,255,0.50);
        border-left: 0px none;
        line-height:60px;
        color: #fff;
        background: transparent;
        & a {
          color:#000;
          text-decoration:none;
          &:hover {
            color:#afc;
          }
        }
        & .list {
          position:relative;
          top:-62px;
          left:-130px;
          z-index:1;
          width:200px;
          height:calc(100vh - 61px);
          border-right:2px solid #000;
          color:#000;
          overflow-y:scroll;
          & > ul {
            padding:5px;
            list-style-type:none;
            & dt {
              text-align:left;
            }
            & dd {
              height:40px;
              margin:0;
              line-height:40px;
              background-color:#F4F4F4;
              &:first-child {
                border-top:2px solid #ccc;
              }
              &+dd {
                border-top:1px solid #aaa;
              }
            }
          }
        }
        & button {
          width:100%;
          height:100%;
          background-color:inherit;
          cursor:pointer;
          color:#fff;
          border:0;
          &:hover {
            color:#caf;
          }
        }
      }
    }
    & .ext_btn {
      position:relative;
      z-index:3;
      width:20px;
      left:70px;
      top:15%;

      & button {
        width:100%;
        height:73px;
        border-radius:0 10px 10px 0;
        border:none;
        cursor:pointer;
        background-color:#000;
        color:#fff;
      }
    }
    &::before {
      content:'';
      display:block;
      clear:both;
    }
`

export default Styles;
