import React from 'react'

import { arc } from 'd3'

const First = () => {

    const width = 960
    const height = 500
    const centerX = width / 2
    const centerY = height / 2
    const strokeWidth = 10
    const eyeOffsetX = 50
    const eyeOffsetY = 40
    const eyeRadius = 20
    const mouthWidth=10
    const mouthRadius=60
    const mouthArc = arc().innerRadius(mouthRadius).outerRadius(mouthRadius+mouthWidth).startAngle(Math.PI/2).endAngle(Math.PI *3/2 )



    return (
        <div>
            {/* <svg width={width} height={height}>
        
                <circle cx={centerX} cy={centerY} r={centerY / 2 - strokeWidth / 2} fill="yellow" stroke="black" stroke-width={strokeWidth} />
                <circle cx={centerX - eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeRadius} fill="black" stroke="black" stroke-width="3" />
                <circle cx={centerX + eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeRadius} fill="black" stroke="black" stroke-width="3" />
            <path d={mouthArc()}/>
                
            </svg> */}

            {/* <svg width={width} height={height}>
                <g transform={`translate(${centerX},${centerY})`}>

                <circle  r={centerY / 2 - strokeWidth / 2} fill="yellow" stroke="black" stroke-width={strokeWidth} />
                <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" stroke="black" stroke-width="3" />
                <circle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" stroke="black" stroke-width="3" />
            <path d={mouthArc()}/>
                </g>
            </svg> */}
            <div style={{background:'pink'}}> 

            <svg width='960' height='500' color='blue' background='yellow'>
                <circle cx='0' cy='250' r='30'/>

            </svg>
            </div>

            
        </div>

    )
}

export default First