import './styles.scss';
import {ReactNode} from 'react'
import { useAuth } from '../../hooks/useAuth';
import cx from 'classnames';
import ss from './assets/images/empty-questions.svg'


type QuestionProps = {
    content: string;
    author: {
        name: string,
        avatar:string;
    }
    children?: ReactNode; 
    isAnswered?:boolean;
    isHightLighted?: boolean;
}

export function Question({
    content,
    isAnswered = false,
    isHightLighted = false,
    children
}: QuestionProps) {

    const {user} = useAuth();
    
    return(
        <div className={cx(
            'question',
            {answered : isAnswered},
            {hightLighted: isHightLighted && !isAnswered}
            )}>

            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={user?.avatar} alt ={user?.name}/>
                    <span>{user?.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div>
    );
}