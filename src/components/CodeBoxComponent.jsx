import React, { useEffect, useState } from 'react'
import AceEditor from 'react-ace'
import { sendCodeToBE } from '../requests/graphRequests'


function CodeBoxComponent() {
    const [textCode, setTextCode] = useState('')
    const [imageURL, setImageURL] = useState('')
    const handleChange = async (text)=> {
        setTextCode(text)
        try{
            const response = await sendCodeToBE(text)
            
            const blob = new Blob([response.data], { type: 'image/png' });
            setImageURL(URL.createObjectURL(blob))
        } catch (error){
            console.log(error);
        }
    }

    return (
    <div className=' border-2 border-black rounded-lg'>
        <div className='flex'>
            <div className='w-1/2  p-1 border-r-2 border-black'>
                <AceEditor
                    mode="javascript" // Modo del editor de código (puedes cambiarlo según el lenguaje deseado)
                    theme="github" // Tema del editor de código
                    onChange={handleChange} // Manejador de cambios
                    name="code-editor" // Nombre del editor
                    editorProps={{ $blockScrolling: true }} // Propiedades del editor
                    style={{ width: '100%', height: '400px' }} // Estilo del editor
                />
                
            </div>
            <div className='w-1/2  flex'>
                {
                    imageURL 
                    && 
                    <div className='self-center w-full'>
                        <img src={imageURL} alt='Imagen' className='mx-auto'/>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default CodeBoxComponent