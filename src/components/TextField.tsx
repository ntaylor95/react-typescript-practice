import React, { useState } from 'react';
import { Book } from '../data/book'

const TextField: React.FC<Book> = ({title}) => {
    const [count, setCount] = useState<number | null>(5);
    const handleChange = (e:any) => {
        console.log(e.target.value);
        setCount(parseInt(e.target.value));
    }

    return (
        <div>
            <h1>{title}</h1>
            <h2>{`The total number is books is ${count}`}</h2>
            <input onChange={handleChange} className="input-field text" type='text'></input>
        </div>
    )
}

export default TextField;