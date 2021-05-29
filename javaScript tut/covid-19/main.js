var total_case=document.getElementById('total-case');
var total_death=document.getElementById('total-death');
var toatl_recoverd=document.getElementById('total-recoverd');

fetch('https://api.covid19api.com/summary').then((covidJson)=>{
    return covidJson.json();
}).then((data)=>{
    console.log(data.Countries[76]);
    total_case.innerHTML=`Total Case <br> ${data.Countries[76].TotalConfirmed}`;
    total_death.innerHTML=`Total Deaths <br> ${data.Countries[76].TotalDeaths}`;
    toatl_recoverd.innerHTML=`Total Recoverd<br> ${data.Countries[76].TotalRecovered}`;
}).catch((e)=>{
    console.log(`The Error:${e}`);
})