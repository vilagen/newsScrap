import React from "react";
import "./style.css"


function Column({onClick, onClick2}) {

    return (

        <div className="vertAlign2" id="politics">

            <button 
            className="buttonGray"
            onClick={onClick}>
            </button>

            <button 
            className="buttonGray"
            onClick={onClick2}>
            </button>

        </div>
    )
}

export default Column


// function Column() {
    
//     return (
//         <Col className="padding-0 vertAlign2" id="politics" xs={4}>

//             <button className="buttonGray"></button>

//         </Col>
//     )
// }

// export default Column