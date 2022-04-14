import React from 'react';
import moment from 'moment';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

import './TodoHeader.css';

const TodoHeader = ()=>{
    const weekDay = moment().format('LL');
    const date = moment().date();

    return(
        <div>
            <div>
                <div className='todos-count'>
                    <span></span>
                    <div>
                        <span>Tasks</span>
                        <span>total count</span>
                    </div>
                    <div>
                        <span>{weekDay}</span>
                        <span>{date}</span>
                    </div>
                </div>
                <div className='add-todo'>
                    <AddToPhotosIcon color='error' />
                </div>
            </div>
        </div>
    )
}

export default TodoHeader;