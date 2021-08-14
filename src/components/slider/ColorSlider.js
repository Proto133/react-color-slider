export default function ColorSlider({name,value, updateColors}){
    return (
        <div className="sliderDiv">
            <span className="sliderTitle" name={name}>{name}</span>
            <br/>
            <label id="minLbl">0</label>
            <input 
            id={name} 
            type="range" 
            value={value} 
            name={name} 
            min="0" 
            max="255" 
            onChange={(event)=>updateColors(name,event.target.value)}/>
            <label id="maxlbl">255</label>
                 </div>
    )
}