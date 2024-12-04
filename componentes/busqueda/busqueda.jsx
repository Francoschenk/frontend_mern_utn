import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './busqueda.css'

function ListaLugares() {
    const [id, setId] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (id.length === 0) {
                setData(null);
                setLoading(false);
                return;
            }
            try {
                const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd&q=${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]); // Añadimos id como dependencia


    const curretDate=new Date();
    const hotel="hoteles en ";
    const hoteles=hotel+id;

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Buscador de Posibles Lugares de viaje</h2>
            <form className="city">
                <label htmlFor="idd">Busque una ciudad</label>
                <input
                    type="text"
                    className="city"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Ingresa el nombre de la ciudad"
                />
            </form>

            {data && data.length > 0 ? (
                <div className="containercarta">
                    <Card className="carta" style={{ width: '67%' }}>
                        <Card.Body>
                            <Card.Title>{id}</Card.Title>
                            <Card.Text>
                                Pais de la ciudad: {data[0].Country.LocalizedName}
                            </Card.Text>
                            <Card.Text>
                                Continente de la ciudad: {data[0].Region.LocalizedName}
                            </Card.Text>
                            <Card.Text>
                                Distrito/Provincia/Estado: {data[0].AdministrativeArea.EnglishName}
                            </Card.Text>
                            <p>{curretDate.toDateString()}</p>
                        <Button className="separar" variant="primary" as="a" href={`https://www.google.com/search?q=${hoteles}`} >Buscar hoteles</Button>
                        </Card.Body>
                    </Card> 

                </div>
            ) : (
                <p>No se encontraron resultados</p>
            )}
        </div>
    );
}

export default ListaLugares;