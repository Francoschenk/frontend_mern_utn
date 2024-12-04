const key= "wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd";

export const getCity= async (id) =>{
    const Base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const querry= `?apikey=${key}&q=${id}`;
    const response = await fetch(Base + querry);
    const data = await response.json();
   
    return data[0]  
};