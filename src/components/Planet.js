import React from "react";
import styles from "./Planet.module.css";

const Planet = ({planet, crafts})=>{
    const DEFAULT_PIC_URL = "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80";

    return (
        <div className={styles.container}>
            <div className={styles.planet}>
                <div className={styles.planet_image} 
                style={{backgroundImage:`url("${planet.pictureUrl}")`}}>
                </div>
                <div className={styles.planet_brief}>
                    <ul>
                        <li>{planet.name}</li>
                        <li>{planet.currentPopulation}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.crafts}>
                {crafts.length>0 && crafts.map((c)=>(
                    <div key={c.id}>
                        <div className={styles.craft_image} 
                        style={{backgroundImage: `url("${c.pictureUrl === null? DEFAULT_PIC_URL: 
                        c.pictureUrl}")`}}></div>
                         <ul>
                             <li>{c.name}</li>
                             <li>{c.capacity}</li>
                         </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planet;