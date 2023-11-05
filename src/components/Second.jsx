import React, { useState,useCallback, useEffect } from 'react'
import csvfile from '../assets/csvfile.csv'
import json from '../assets/abc.json'
import axios from 'axios'
import {csvParse,arc,pie} from 'd3'

const Second = () => {
  const width = 960
  const height = 500
  const centerX = width / 2
  const centerY = height / 2

    const [mousePosition, SetmousePostion] = useState({x:480,y:250})
    // console.log("csvfile",json);
    const [CSVData, setCSVData] = useState()
    const [dataCSV, setdataCSV] = useState({
        "rows":0,
        "columns":0,
        "size":""
    })
    console.log("CSVData",CSVData);
    console.log("dataCSV",dataCSV);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://gist.githubusercontent.com/Danish07-glitch/33fd124d6799d1068fc87b80f9783d73/raw/8775cfd8d5e8cd9c4174e8201b0284eec50ada41/colors.csv'); // Adjust the path to your CSV file
            console.log(response.data);
            const data = csvParse(response.data);
            setCSVData(data);
            setdataCSV({
                rows:data.length,
                columns:data.columns.length,
                size:`${response.data.length/1024} KB`

            })
          } catch (error) {
            console.error('Error reading CSV file:', error);
          }
        };
    
        fetchData();
      }, []);
      const pieArc = arc().innerRadius(0).outerRadius(width)

    const onMouseHover=useCallback((event)=>{
        const {clientX,clientY}=event
        SetmousePostion({x: clientX , y : clientY })

    },[mousePosition])

    // console.log(CSVData[0]);

  return (
    <>

        <div>
          <p>{dataCSV.rows}</p>
          <p>{dataCSV.columns}</p>
          <p>{dataCSV.size}</p>
          </div>  
          {/* 1st example */}
          {/* <svg width={width} height={height}>
                <g transform={`translate(${centerX},${centerY})`}>
                  {
                  CSVData &&  CSVData.map((data,id)=>(
                      <path fill={data['RGB hex value']} d={pieArc({
                        startAngle:(id/CSVData.length)*2*Math.PI,
                        endAngle:((id+1)/CSVData.length)*2*Math.PI
                      })}/>
                    ))
                  }
                
                </g>
          </svg> */}

          {/* Second example */}

          <svg width={width} height={height}>
                <g transform={`translate(${centerX},${centerY})`}>
                  {
                  CSVData && pie()(CSVData)?.map((data,id)=>(
                      <path fill={data['RGB hex value']} d={pieArc({
                        startAngle:(id/CSVData.length)*2*Math.PI,
                        endAngle:((id+1)/CSVData.length)*2*Math.PI
                      })}/>
                    ))
                  }
                
                </g>
          </svg>

    </>
  )
}

export default Second