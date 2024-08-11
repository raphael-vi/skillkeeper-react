import axios from "axios";
import { useEffect, useState } from "react";

function FieldsList(){
    const [fields, setFields] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        //Let's define the url
        const apiUrl = "http://localhost:8080/fields"
        axios.get(apiUrl)
            .then(response =>{
                setFields(response.data);
            })
            .catch(error =>{
                console.error('Error fetching fields:', error);
                setError('Failed to fetch fields');
            });
    }, []); // This empty dependency array tells React to run the effect only once after the first render

    return(
        <div>
            <h2>Fields</h2>
            {error && <p>{error}</p>}
            <ul>
                {fields.map(field =>(
                    <li key = {field.id}>{field.name}</li>
                ))}
            </ul>
        </div>
    
    );
}
export default FieldsList;

