import React, { useState } from 'react'

const SubscribeButton = (props) => {
    const [display, setDisplay] = useState(false)
    //Above is how I had it set up but the testing app wouldnt allow useState()

    function whenClicked() {
        setDisplay(!display)
    }
    
    return(
        <div>
            <button onClick={() => whenClicked()}>
                Click to suscribe!
            </button>
            {
                display ? 
                <p>Thank you for subscribing!</p> :
                null
            }

        </div>
    )
};

export default SubscribeButton