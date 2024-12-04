import './seccion.css';

function Boton(){
    const handleClickEnBoton=() =>{
        alert("Hiciste click en el botón");
    }
    return(
        
        <div className="Seccion">
        <h1 >boton por debajo</h1>
        <button id="boton" texto="boton interno" onClick={handleClickEnBoton} />

        </div>
    )
}

export default Boton