import React from 'react'


const image = {
    "marginBottom": "30px",
    "width": "60px"
}

/**
 * Displays spinner whenever conversion rate is being fetched
 * @returns
 */

function Spinner() {
    return (
        <div className='text-center'>
            <img src="/images/spinner.gif" alt="" style={image} />
        </div>
    )
}

export default Spinner
