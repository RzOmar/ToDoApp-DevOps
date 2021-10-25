import React, {useState} from 'react';

const inpuArea = () => {
    const[inputtext,setinputtext]= useState("");
    return (
        <div className="form">
            <input type="text" />
            <button>
                <span>Add</span>
            </button>
            
        </div>
    )
}

export default inpuArea
