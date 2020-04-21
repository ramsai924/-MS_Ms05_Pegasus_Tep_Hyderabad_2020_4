fetch('https://corona.lmao.ninja/v2/countries/India')
.then(response=>{
   return response.json()
})
.then(data =>{
    console.log(data); 
    document.getElementById('totalDeaths').textContent += data.deaths;
    document.getElementById('totalCases').textContent += data.cases;
    document.getElementById('activeCases').textContent += data.active;

    document.getElementById('todayCases').textContent += data.todayCases;
    document.getElementById('tests').textContent += data.tests;

})