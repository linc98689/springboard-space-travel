import React from "react";
import styles from "./Planet.module.css";
import { DEFAULT_PIC_URL_1 as DEFAULT_PIC_URL }  from "../context/defaults";

const Planet = ({planet, crafts})=>{
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