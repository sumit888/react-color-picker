import React, {useState} from 'react'
function ColorPicker(){

    //State Handler
    const[color, setColor] = useState("#fff")

    //onChange color Handler

    function colorHandler(event){
        setColor(event.target.value)
    }

    return(<>
        <h1>HEX Color Picker</h1>      

        <div className="color-container"> 

            <div className="color-box" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            
            <label>Select Color:<br />
                <input type="color" value={color} onChange={colorHandler} />                
            </label> 

            <p style={{fontWeight: "bold", marginTop: "1rem"}}>HexCode: {color}</p>

        </div>
    </>)
}

export default ColorPicker