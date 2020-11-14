import React from "react"
import {API} from "../constants/config"

const ShowImage = ({dimension = "100px", item, url}) => (
    <div>
        {item._id &&
            <img 
            src={`${API}/${url}/photo/${item._id}`} 
            alt={item.name} 
            className="mb-3"
            style={{maxHeight: `${dimension}`, maxWidth: `${dimension}`, margin: 0, padding: 0}}
        />}

        {!item._id &&
            <img 
            src={require("../images/logos/car-1.png")} 
            alt={item.name} 
            className="mb-3"
            style={{maxHeight: '100px', maxWidth: '100px', margin: 0, padding: 0}}
        />}
        
    </div>
)

export default ShowImage