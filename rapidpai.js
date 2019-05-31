var options = { 
	method: 'POST',
  url: API_URL,
  headers: { 
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': API_KEY,
    'header1': 'header-value-1'
  },
  qs: { 
    parameter1: 'parameter-value-1' 
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});