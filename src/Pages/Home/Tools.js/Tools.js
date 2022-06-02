import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch("data.json").then(res => res.json()).then(data => setTools(data))
    }, [])
    tools.length=6

    return (
        <>
        <h2 className="text-center nav-custom-font text-4xl font-bold mt-24 mb-10">We Provide Awesome <span className="text-secondary">Tools</span></h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center bg-white gap-5'>
            {tools.map(tool => <Tool tool={tool} />)}
        </div>
        </>
    );
};

export default Tools;