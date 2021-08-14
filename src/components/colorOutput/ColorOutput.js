export default function ColorOutput({colors}){
    // let rgbDivBG = `rgba(${colors.red},${colors.green},${colors.blue},1);`
        return(
        <div className="RGBDiv" style={{backgroundColor:'rgba(' + colors.red + ',' + colors.green + ',' + colors.blue + ',1)'}}>
            <h4>RGB</h4>
            <span className="RGB RGB-red">{colors.red} </span>
            <span className="RGB RGB-green">{colors.green} </span>
            <span className="RGB RGB-blue">{colors.blue} </span>
        </div> 
    )
}