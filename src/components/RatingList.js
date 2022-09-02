import React, {useState} from "react";
import './RatingList.css';
import Icon from './Icon.js';
import { useDrop } from "react-dnd";


const CodeIcons = [
    {
        id: 1,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        id: 2,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
        id: 3,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    {
        id: 4,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    {
        id: 5,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    },
    {
        id: 6,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
        id: 7,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
        id: 8,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg'
    },
    {
        id: 9,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    {
        id: 10,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
    },
    {
        id: 11,
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg'
    }
]

const RatingList = () => {

    const [sTier, setSTier] = useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'icon',
        drop: (item) => addIconToSTier(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })   
    }))

    const addIconToSTier = (id) => {
        const S = CodeIcons.filter((icon) => icon.id === id);
        setSTier((sTier) => ([...sTier, S[0]]));
    }

    return(
        <main className="main-list">
            <section className="code-icons">
                {CodeIcons.map((icon) => {
                    return(
                        <div className='single-icon' style={{border: sTier.includes(icon) ? '1px solid green' : 'none'}}>
                            <Icon id={icon.id} url={icon.url} />
                        </div>
                    )
                })}
            </section>
            <div className="rating-list" ref={drop} style={{border: isOver ? '1px solid black' : 'none', borderRadius: '10px'}}>
                <div className="best-to-worst">
                    <h2>Best to Worst</h2>
                        {sTier.map((icon) => {
                            return(
                                <div className="rating-icon">
                                    <Icon id={icon.id} url={icon.url}/>
                                </div>
                            )
                        })}
                </div>
            </div>
        </main>
    )
}

export default RatingList;