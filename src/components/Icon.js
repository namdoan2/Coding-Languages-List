import React from "react";
import { useDrag } from "react-dnd";
import './Icon.css';

const Icon = ({id, url}) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'icon',
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return(
        <>
            <img 
            src={url} 
            alt="coding language icon" 
            width='100px' 
            ref={drag} 
            style={{border: isDragging ? '1px solid green': 'none'}}
            />
        </>
    )
}

export default Icon;