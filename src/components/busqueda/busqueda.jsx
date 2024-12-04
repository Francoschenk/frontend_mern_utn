import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCity } from "./api.jsx";

function ListaLugares(){
    // const [id, setId]= useState("");
    const [id,setId]= useState([]);
    const [data, setData]= useState(null);
    const [loading, setLoading]= useState(true);
    const [error, setError]=useState(null);
    

    useEffect(()=>{
    const fetchData=async()=>{
    try{
        // const data=await getCity();
        
        const response=await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd&q=${id}`);
        // setCity(data);
        
        // setLoading(false);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }    
        const result=await response.json();
        setData(result);//almacena la data del estado
        // setCity(id);
    }catch (error){
        
        setError(error);
    }finally{
        setLoading(false);
    }
    };
    fetchData();
    },[])
    // const hols='london';
    const hols="manchester";


    console.log(data);

 const l=0;
    const v=false;
    const frase="";
    function disco(){
        const l=23;
        return (
            l+1,
            v==true
        )
    };
    disco();
    console.log(id)
    const mel=JSON.stringify(data,null,2);
    if (id.length>=5) {
        console.log("funcionando",v) 
    } else {
        console.log("precio",data)
    }   
    const hola="paris"; 
    ;
    
    if (loading) return <p> cargando...</p>;

    if (error) return <p> Error: {error.message} {data}</p>;
    
//value={id} onChange={(e)=> setCity(e.target.value)}
// onChange={(e) => setCiudadId(e.target.value)} placeholder="Ingresa el ID de la ciudad"
    
    return(  
        <div>
            <h2>lista de ciudad</h2>
            <form className="city">
            <label htmlFor="idd">ggggg</label>
            <input type="text" className="city" value={id}
             onChange={(e) => setId(e.target.value)} 
             placeholder="Ingresa el ID de la  ciudad"></input> 
            
            </form>
            <p id="hola">esto es el id:{id}</p>
            <button className="ZZZ" onClick={(e) => console.log(data)}></button>
            <p>{l}</p>           
            <p>{v}</p>
            
            <p>{mel}</p>
        </div> 
    )

}


export default ListaLugares;


{/* <p>{JSON.stringify(data[0].TimeZone,null)}</p>  */}
            {/* <p>{today}</p> */}
            {/* <pre>{JSON.stringify(data,null,2)}</pre> */}


// console.log('fetchlugares('manchester'))

// https://dataservice.accuweather.com/locations/v1/cities/search?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd&q=manchester
// https://www.youtube.com/watch?v=kOmOyz5WNQA
// https://d1lb3lf90ja1l2.cloudfront.net/89129642921/89129642921-meeting-56bca440-b4f0-4cbb-972c-dc95f19f8010.mp4
// https://youtu.be/je3FTTunyp4
// https://github.com/public-apis/public-apis?tab=readme-ov-file#geocoding
// https://react-bootstrap.netlify.app/docs/components/carousel/





