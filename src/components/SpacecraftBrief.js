import React from "react";
import styles from "./SpacecrafteBrief.module.css";

const SpacecraftBrief = ({data}) =>{
    const DEFAULT_PIC_URL = "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80";
    
    return (
        <div className={styles.container}>
            <div className={styles.content_left}>
                <div className={styles.craft_image} 
                style={{backgroundImage:`url("${data.pictureUrl===null? DEFAULT_PIC_URL: data.pictureUrl}")`}}></div>
                <div className={styles.craft_brief}>
                    <ul>
                        <li>name: {data.name}</li>
                        <li>capacity: {data.capacity}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.content_right}>🎆Destroy</div>
        </div>
    );
};

export  default SpacecraftBrief;