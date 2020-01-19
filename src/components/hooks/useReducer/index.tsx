import React, { useReducer } from 'react';
import { Button } from 'antd';
import { reducer } from './color';


const FontArea = () => {
    const [color, dispatch] = useReducer(reducer, 'blue');

    return (
        <>
            <div style={{ color }}>字体颜色为： {color}</div>
            <Button onClick={() => dispatch({type:'update_color', color: 'red'})}>红色</Button>
            <Button onClick={() => dispatch({type:'update_color', color: 'green'})}>绿色</Button>
        </>
    )
}

export default FontArea;