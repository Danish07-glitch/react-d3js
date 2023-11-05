import React, { useState } from 'react'
import { csvParse } from 'd3'


const Third = () => {
    const [first, setfirst] = useState()

    const handleSubmit=(e)=>{
            console.log(csvParse(e.target.value));

    }
    return (

        <>
            <input type="file" accept='.csv' onChange={handleSubmit}/>
            <div>CSV DATA : {first}</div>

        </>
    )

}

export default Third