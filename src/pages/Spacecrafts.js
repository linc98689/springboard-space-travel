import React, {useState, useEffect} from "react";
import styles from "./Spacecrafts.module.css";
import SpaceTravelApi from "../services/SpaceTravelApi";
import ErrorMessage from "../components/ErrorMessage";
import SpacecraftBrief from "../components/SpacecraftBrief";

const Spacecrafts =  ()=>{
    const [crafts, setCrafts] = useState([]);
    useEffect(()=>{
        const getSpacecrafts = async ()=>{
            try{
                let rs = await SpaceTravelApi.getSpacecrafts();
                if(!rs.isError){
                    console.log("res:", rs.data);
                    setCrafts(data => [...rs.data]);
                }else{
                    console.error(rs.data);
                }
            }catch(e){
                console.error(e);
            }  
        };

        getSpacecrafts();
        
    }, []);
    
    return (
        <>
         {crafts.length >0 && 
            
            <div className={styles.page}>
                <div className={styles.build}>
                    Build a Spacecraft
                </div>
                {crafts.map(sc=>{
                    return <SpacecraftBrief data={sc.data} key={sc.id} />
                }
                )}
            </div>}
        </>
      
    );
}
 

export default Spacecrafts;