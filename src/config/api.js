export const API_DOMAIN = "https://blockchain.info/tobtc?currency="
export const endpointPath = (from, to) =>{
    if(to==="btc")
    {
    return `${API_DOMAIN}${from}&value=1`;
    }
    else{
        return `${API_DOMAIN}${to}&value=1`;
    }
}

    
