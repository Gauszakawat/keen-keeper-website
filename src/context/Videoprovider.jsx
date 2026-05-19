import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const videocontext = createContext()

const Videoprovider = ({children }) => {

const [ videooo , setvideooo] = useState([]);

    const videohandle= (currentfrd)=>{
        const isexitfrd = videooo.find(frid=> frid.id === currentfrd.id );

        if(isexitfrd){
            toast.error('The request is already listed');
            return;
        } else{
            setvideooo([...videooo, currentfrd])
            toast.success(`congratulation you have successfully added ${currentfrd.name}`);
        }
        
    };

    const datatext = {
       videooo,
       setvideooo , 
       videohandle 
    };
    
        return <videocontext.Provider value={datatext}>{children}
        </videocontext.Provider>
    
};

export default Videoprovider;