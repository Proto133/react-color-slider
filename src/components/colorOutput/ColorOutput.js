export default function ColorOutput({value}){
    let RGBDiv = document.querySelector('.RGBDiv')
    RGBDiv.style.backgroundColor = `rgba(${value.red},${value.green},${value.blue},1)`
        return(
        <div>
            <span className="RGB RGB-red">{value.red} </span>
            <span className="RGB RGB-green">{value.green} </span>
            <span className="RGB RGB-blue">{value.blue} </span>
        </div> 
    )
}