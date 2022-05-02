import React, {memo} from 'react';


export const TitleOne = ({title}) => {
    return (
        <div>
            <h2>ㅡ {title}</h2>
        </div>
    );
}
const TitleTwo = ({title_t}) => {
    return (
        <div>
            <h3>{title_t}</h3>
        </div>
    );
}

const InputText = ({text}) => {
    return (
        <span className="input_text">{text}</span>
    );
};

const InputBox = () => {
    return (
        <input type='text' className='inputBox'></input>
    );
}

const SchImg = () => {
    return (
        <div className="sch_img">ㅇ</div>
    );
};

const DisplayGrid = () => {

    return (
        <ul class="display_grid">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            <li>32</li>
            <li>33</li>
            <li>34</li>
            <li>35</li>
            <li>36</li>
            <li>37</li>
            <li>38</li>
            <li>39</li>
            <li>40</li>
        </ul>
    );
}

const SchBox = () => {

    return (
        <div className="sch_box">
            <div class="sch_item onef">
                <InputText text={'조회조건2'}/>
                <InputBox />
                <InputText text={'조회조건1'}/>
                <InputBox />
            </div>
            <SchImg />
        </div>
    );
};

const Menu1page = ({title}) => {
    return (
        <>
            <TitleOne title={title}/>
            <SchBox />
            <TitleTwo title_t={'= 마스터그리드'} />
            <DisplayGrid />
            <TitleTwo title_t={'- 서브그리드'} />
            <DisplayGrid />
        </>
    );
};

export default memo(Menu1page);