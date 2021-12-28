import { useEffect, useState } from 'react'
import './ColorPicker.css'

const ColorPicker = () => {

    const [color, setColor] = useState("")

    const cambiarColor = (e) => {
        setColor(e.target.value)
        e.target.parentElement.parentElement.parentElement.style.background = color
    }
    
    return (  

        <div className='d-flex justify-content-center contenedorColorPicker'>
            <div className='bg-white p-4 border border-dark'>
                <h1 className='titleColorPicker'>Color Picker</h1>
                <div className='d-flex'>
                    <input type="color" onChange={(e) => cambiarColor(e)}/>
                    <input className='mx-3' type="text" defaultValue={color} readOnly />
                </div>
            </div>
        </div>
    );
}
 
export default ColorPicker;