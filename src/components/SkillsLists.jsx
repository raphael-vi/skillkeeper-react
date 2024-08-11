import axios from "axios";
import { useEffect, useState } from "react";

function SkillsList(){
    const [skills, setSkills] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        //Let's define the url
        const apiUrl = "http://localhost:8080/skills"
        axios.get(apiUrl)
            .then(response =>{
                setSkills(response.data);
            })
            .catch(error =>{
                console.error('Error fetching skills:', error);
                setError('Failed to fetch skills');
            });
    }, []); // This empty dependency array tells React to run the effect only once after the first render

    return(
        <div>
            <h2>Skills</h2>
            {error && <p>{error}</p>}
            <ul>
                {skills.map(skill =>(
                    <li key = {skill.id}>{skill.name}</li>
                ))}
            </ul>
        </div>
    
    );
}
export default SkillsList;

