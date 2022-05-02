import React, {useState} from 'react';
import './App.css';
import Header from './component/Header/header';
import Sider from './component/Side/side';
// import {Layout} from 'antd';
import {Routes, Route} from 'react-router-dom';
import Home from './component/page/home';
import Menu1page from './component/page/menu1page';
import Menu2page from './component/page/menu2page';
import Menu3page from './component/page/menu3page';
import Menu4page from './component/page/menu4page';
import Styles from './component/page/style';

function App() {
  const [onsec, setOnsec] = useState('');
  const [title, setTitle] = useState('Home');

  return (
      <div className="container">
          <Header />
          <Sider setOnsec={setOnsec} setTitle={setTitle}/>
              <Styles className={onsec}>
                <Routes>
                  <Route path="/" exact={true} element={<Home />}/>
                  <Route path="/static" element={<Menu1page title={title}/>} />
                  <Route path="/form" element={<Menu2page title={title}/>}/>
                  <Route path="/button" element={<Menu3page title={title}/>}/>
                  <Route path="/tab" element={<Menu4page title={title}/>}/>
                </Routes>
              </Styles>
      </div>
  );
}

export default App;
