import React, {useState, useEffect} from "react";
import styles from "./Spacecrafts.module.css";
import SpaceTravelApi from "../services/SpaceTravelApi";
import SpacecraftBrief from "../components/SpacecraftBrief";
import {useLoading} from "../context/hook";
import Loading from "../components/Loading";
import { Link  } from "react-router-dom";

const Spacecrafts =  ()=>{
    const [crafts, setCrafts] = useState([]);
    const [isLoading, showLoading, hideLoading] = useLoading();

    useEffect(()=>{
        const getSpacecrafts = async ()=>{
            showLoading();
            try{
                let rs = await SpaceTravelApi.getSpacecrafts();
                if(!rs.isError){
                    setCrafts(data => [...rs.data]);
                }else{
                    console.error(rs.data);
                }
            }catch(e){
                console.error(e);
            }  
            finally{
                hideLoading();
           };
        };

        getSpacecrafts();
        
    }, []);
    
    return (
        <>
         {crafts.length >0 && 
            
            <div className={styles.page}>
                <div >
                    <Link className={styles.build} to="/spacecraft/build">🏗️Build a Spacecraft</Link> 
                </div>
                <div className={styles.craft_list}>
                {crafts.map(sc=>{
                    return <SpacecraftBrief data={sc} key={sc.id} />})}
                </div>
            </div>
         }
         {isLoading && <Loading />}
        </>
      
    );
}
 

export default Spacecrafts;