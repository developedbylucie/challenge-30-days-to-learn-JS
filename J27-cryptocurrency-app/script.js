let settings = {
    "async" : true,
    "scrossDomain" : true,
    "url" : "https://pro-api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method" : "GET",
    "headers" : {}
}
$.ajax(settings).done(function(response){
    console.log(response)
})