import { type } from '@testing-library/user-event/dist/type'
import {useState} from 'react'
import '../styles/button.scss';

import {ButtonHTMLAttributes} from 'react'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

export function Button({isOutlined = false, ...props}:ButtonProps){

    return (
        <button className={`button ${isOutlined ? 'outlined': ''  }`} {...props}/>
    )   
}

