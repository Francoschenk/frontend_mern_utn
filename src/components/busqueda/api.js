const key= "wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd";
const getCity= async (city) =>{
    const Base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const querry= `?apikey=${key}&${city}`;
    
    
    const response = await fetch('https://dataservice.accuweather.com/locations/v1/cities/search?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd&q=manchester');
    const data = await response.json();
   

    
    console.log(data)
    
    

    };


getCity('manchester')