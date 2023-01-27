// const fetch = require('node-fetch');

const subtableURL = 'https://fitness-calculator.p.rapidapi.com/foodids/subtablenames?tablename=Su10';

const subtable = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

fetch(subtableURL, subtable)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));