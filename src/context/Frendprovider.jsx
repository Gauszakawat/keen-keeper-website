import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const Frendcontext = createContext()

const Frendprovider = ({children }) => {

const [ forcall , setforcall] = useState([]);

    const callhandle= (currentfrd)=>{
        const isexitfrd = forcall.find(frid=> frid.id === currentfrd.id );

        if(isexitfrd){
            toast.error('The request is already listed');
            return; 
        } else{
            setforcall([...forcall, currentfrd])
            toast.success(`congratulation you have successfully added ${currentfrd.name}`);

        }
        // console.log(spicialdata,'ha ha ha');
    };

    const data = {
       forcall,
       setforcall , 
       callhandle 
    };
    
        return <Frendcontext.Provider value={data}>{children}
        </Frendcontext.Provider>
    
};

export default Frendprovider;