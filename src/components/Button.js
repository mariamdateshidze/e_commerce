import { useState } from "react";
import {AiOutlineHeart } from 'react-icons/ai';


function Button(){
    const [btnState, setBtnState] = useState(false)

    function handleClick(){
        setBtnState(btnState => !btnState);
    }

    let toggleClassClick = btnState ? ' active' :'';
    return(
        <button className={`btn${toggleClassClick}` }
        onClick={handleClick}>
        <AiOutlineHeart />
        </button>
    )
}

export default Button;