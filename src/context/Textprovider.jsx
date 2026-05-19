import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const Textcontext = createContext()

const Textprovider = ({children }) => {

const [ fortext , setfortext] = useState([]);

    const texthandle= (currentfrd)=>{
        const isexitfrd = fortext.find(frid=> frid.id === currentfrd.id );

        if(isexitfrd){
            toast.error('The request is already listed');
            return;
        } else{
            setfortext([...fortext, currentfrd])
            toast.success(`congratulation you have successfully added ${currentfrd.name}`);
        }
        
    };

    const datatext = {
       fortext,
       setfortext , 
       texthandle 
    };
    
        return <Textcontext.Provider value={datatext}>{children}
        </Textcontext.Provider>
    
};

export default Textprovider;