//React
import React, { useState } from "react";

//Function to set domain url while fetching the conversion rate
import { endpointPath } from "../../config/api";

//Currency Convertor Components
import Dropdowns from "./Dropdowns";
import ConvertResult from "./ConvertResult";

//Axios for fetching data
import axios from "axios";

//Array containing dropdown values
import { language } from "../../config/language";
import { btc } from "../../config/btc";

/**
 * Currency Calculator Component
 * @returns
 */

function CurrencyCalculator() {
  const initial = {
    from: "USD",
    into: "btc",
    loading: false,
    amount: 1,
    conversionResult: "",
    conversionRate: "",
  };

  const [state, setState] = useState(initial);

  const [fromdropdown, setFromDropDown] = useState(language); // maintains dropdown options for from currency

  const [todropdown, setToDropdown] = useState(btc); // maintains dropdown options for to currency

  //Function called when convert button is clicked in order to fetch conversion rate
  const convertCurrency = async ({ from, into, amount }) => {
    setState({ ...state, loading: true });
    let url = endpointPath(from, into);
    var conversion_rate;
    axios
      .get(url)
      .then((response) => {
        if (into === "btc") {
          conversion_rate = response.data;
        } else {
          conversion_rate = (1 * 1.0) / response.data;
        }

        const result = conversion_rate * amount;
        setState({
          ...state,
          amount: amount,
          conversionRate: conversion_rate,
          conversionResult: result,
          loading: false,
        });
      })
      .catch((error) => {
        return error;
      });
  };

  //Function to maintain amount value in state whenever amount is changed
  const handleInput = (event) => {
    setState({ ...state, amount: event.target.value });
  };

  //Function to maintain FROM currency in state whenever currency is changed
  const handleFrom = (event) => {
    setState({ ...state, from: event.currentTarget.value });
  };

  //Function to maintain TO currency in state whenever currency is changed
  const handleInto = (event) => {
    setState({ ...state, into: event.currentTarget.value });
  };

  //Function which sets state to initial value when reset button is clicked
  const handleReset = () => {
    setState(initial);
  };

  // Function called when switch icon is clicked
  const handleSwitch = () => {
    const { from, into } = state;
    setState({ ...state, from: into, into: from });
  };

  const { from, into, amount, conversionRate, conversionResult, loading } =
    state;
  return (
    <>
      <div className="flex flex-col w-full justify-around items-center mt-48">
        <h1 className="text-white text-4xl mb-4 montserrat font-bold tracking-wider">
          {" "}
          Currency Convertor
        </h1>
        <div className="convertor-container shadow">
          <input
            className="form-control-lg mt-5 shadow amount bg-dark"
            placeholder="Enter Amount"
            value={amount}
            type="number"
            onChange={handleInput}
          />
          <div className="fromdrop">
            <Dropdowns
              labelName="From"
              handleChange={handleFrom}
              value={from}
              language={fromdropdown}
            ></Dropdowns>
          </div>
          <div
            onClick={() => {
              handleSwitch();
              const temp = todropdown;
              setToDropdown(fromdropdown);
              setFromDropDown(temp);
            }}
            className="mt-4"
          >
            <img
              src={process.env.PUBLIC_URL + `/images/sort.png`}
              className="w-5 cursor-pointer "
            />
          </div>
          <div className="intodrop mt-0">
            <Dropdowns
              labelName="To"
              handleChange={handleInto}
              value={into}
              language={todropdown}
            ></Dropdowns>
          </div>
          <div className="mt-5 text-center">
            <button
              className="btn btn-scolor btn-lg shadow"
              disabled={amount === "0" || amount === "" || amount < 0}
              onClick={() => convertCurrency(state)}
            >
              Convert
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              className="btn btn-rcolor btn-lg shadow"
              text="Reset"
              onClick={handleReset}
            >
              Reset <i className="fas fa-redo-alt"></i>
            </button>
          </div>
          <div className="mt-5 mb-2 text-center">
            <ConvertResult
              Loading={loading}
              result={conversionResult}
              rate={conversionRate}
            ></ConvertResult>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrencyCalculator;
