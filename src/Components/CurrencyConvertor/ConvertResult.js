import React from "react";
import Spinner from "./Spinner";

/**
 * Displays the Conversion result
 * @param {Boolean} Loading -boolean value indicating whether api being fetched
 * @param {Number} result -Final amount after conversion
 * @param {Number} rate -conversion rate per unit
 * @returns
 */

function ConvertResult({ Loading, result, rate }) {
  return (
    <>
      {Loading ? (
        <Spinner />
      ) : (
        result &&
        rate && (
          <>
            <h1 className="result">{Math.round(result * 100000) / 100000}</h1>
          </>
        )
      )}
    </>
  );
}

export default ConvertResult;
