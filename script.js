// XML request helps to issue a network call
// creare an instance of xml-http-request

var request = new XMLHttpRequest();

//open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//send the request
request.send();

//load the response once it is DOMMatrixReadOnly
request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
//1. Get all the countries from Asia continent /region using Filter function 
     const asianCountries = data.filter(ele=>ele.region ==='Asia');
     console.log(asianCountries.name)
//1.b. Print the names of all asian countries
     asianCountries.forEach(element => {
         console.log(element.name)
     });

//2. Get all the countries with population of less than 2 lacs using Filter function
     const lowPopulation = data.filter(ele=>ele.population<200000)
     console.log(lowPopulation)
//3. Print the following details name, capital, flag using forEach function 
     data.forEach(ele => console.log(ele.name, ele.capital, ele.flag))
//4. Print the total population of countries using reduce function
        const sum = data.reduce(function(accumulator, currentValue)
        {return accumulator + currentValue.population},0)
      console.log(sum)
//5. Print the country which use US Dollars as currency.
     const dollarCountries = data.filter((item)=>{
         let flag =false
         item.currencies.forEach(element=>{
             if(element.code==='USD')
             flag = true
         });
         if(flag == true)
         return true
         else
         return false
     });
     console.log(dollarCountries)
}