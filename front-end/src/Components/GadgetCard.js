import React from 'react'

function GadgetCard(props) {
    
    return (
        <div className="card m-2 gadget-item">
            <div className="card-body">
                {/* Write Your Code Below */}
                <div>
                  <h1 data-testid={`title-${props.item._id}`}>{props.item.itemName}</h1>
                  <h3 data-testid={`price-${props.item._id}`}>{props.item.price}</h3>
                </div> 
                
            </div>
        </div>
    )
}

export default GadgetCard