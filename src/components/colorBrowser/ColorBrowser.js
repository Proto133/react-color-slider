import ColorSlider from '../slider/ColorSlider'
import ColorOutput from '../colorOutput/ColorOutput'
import React, {useState} from 'react'

export default function ColorBrowser(){
const [colors, setColors] = useState({
    red: 55,
    green: 155,
    blue: 55
})

function updateColors(name, value){
setColors({...colors, [name]: value})
}
    return(
        <div>
            <ColorSlider value={colors.red} name="red" updateColors={updateColors} />
            <ColorSlider value={colors.green} name="green" updateColors={updateColors} />
            <ColorSlider value={colors.blue} name="blue" updateColors={updateColors} />
            <div className="RGBDiv">
            <h4>RGB</h4>
            <ColorOutput value={colors}/>
            </div>
        </div>
    )
}