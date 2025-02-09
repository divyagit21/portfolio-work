import React, { useState } from 'react'

const Type = () => {
    const [para, setPara] = useState('')
    const [total, setTotal] = useState('An organized and motivated individual, eager to utilize time management and organizational skills across diverse settings.Seeking entry-level opportunities to enhance abilities while contributing to company growth.')
    useState(() => {
        let idx=0;
        const handleText = () => {
            if (idx < total.length) {
            setPara(para+total.slice(0,idx));
            idx++;
            }
            else{
                clearInterval(id);
            }            
        }
        const id = setInterval(handleText, 100)
        return ()=>clearInterval(id);
        handleText();
    }, [total])
    return (
        <div>
            {para}
        </div>
    )
}

export default Type
