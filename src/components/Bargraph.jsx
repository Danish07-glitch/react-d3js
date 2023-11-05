import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {csvParse,arc,pie,scaleBand,scaleLinear,csv,max} from 'd3'

const Bargraph = () => {
    const width = 960
    const height = 500
    const margin={top:20,left:20,bottom:20,right:20}
    const [csvData, setcsvData] = useState()

   

    // const xScale=scaleLinear
    

    const csvUrl='https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'
    
    const callApi= async() =>{

        const row=d=>{
            d.Population=+d['2020']
            return d
        }
        const response=await axios.get(csvUrl)
        const parsedData=csvParse(response.data,row)
        setcsvData(parsedData)

    }

    
    useEffect(() => {
        
        const row=d=>{
            d.Population=+d['2020']
            return d
        }
        csv(csvUrl,row).then(data=>setcsvData(data.slice(0,10)))
        
        
    }, [])

    if(!csvData){
        return <div>Loading...</div>
    }
    
    console.log("csvData",csvData?.[0]);

    const yScale=scaleBand()
    .domain(csvData?.map(d=>d.Country))
    .range([0,height])

    const xScale=scaleLinear()
    .domain([0,max(csvData,d=>d.Population)])
    .range([0,width])
    

    return (
    <>
    <svg width={width} height={height}>
        {
            csvData?.map(d=><rect x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()}/>)
        }

    </svg>



    </>
  )
}

export default Bargraph