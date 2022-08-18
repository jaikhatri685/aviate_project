import React from 'react'
import Spinner from './Spinner'


function ConvertResult({ Loading, result, rate }) {
    return (
        <>
            {Loading ? (
                <Spinner />
            ) : (
                result &&
                rate && (
                    <>
                        <h1 className="result">{(Math.round(result*100000)/100000)}</h1>
                    
                    </>
                )
            )}
        </>
    )
}

export default ConvertResult
