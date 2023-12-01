import { useState } from "react"


export default function AddName(props){
    const [user,setUser]=useState()

    return(
        
        <>
        <form>
            <input 
            placeholder="User name"
            type="text"
            value={user}
            onChange={e=>{setUser(e.target.value)}}
            />
            
            <button type="submit" onClick={props.HandleSubmit}>Sign in</button>
        </form>
        </>
    )
}