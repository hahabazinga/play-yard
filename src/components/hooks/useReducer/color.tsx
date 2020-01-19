import React, {createContext } from 'react';

export const UPDATE_COLOR = 'update_color';
export interface ActionType {
    type: typeof UPDATE_COLOR;
    color: string
}
const ColorContext = createContext('blue');

export const reducer = (state: string, action: ActionType) => {
    switch(action.type){
        case 'update_color': 
        return action.color;
        default:
            return state
    }
}

export const ColorProvider: React.FC = (props) => {
    return (
        <ColorContext.Provider value='bule'>
        {props.children}
        </ColorContext.Provider>
    )
}