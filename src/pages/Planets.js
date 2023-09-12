import React, {useState, useEffect} from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import styles from "./Planets.module.css";
import Planet from "../components/Planet";
import {useLoading} from "../context/hook";
import Loading from "../components/Loading";

const Planets = () =>{
   
    const [planets, setPlanets] = useState([]);
    const [allCrafts, setAllCrafts] = useState([]);
    const [pcMap, setPcMap] = useState({});
    const [isLoading, showLoading, hideLoading] = useLoading();

    useEffect(()=>{
        // planets and crafts
        const getDB= async ()=>{
            showLoading();
            try{
               let res = await SpaceTravelApi.getDB();
                if(!res.isError){
                    setPlanets(data=>[...res.data.planets]);
                    setAllCrafts(data=>[...res.data.spacecrafts]);
                    setPcMap(data => ({...res.data.pcmap}));
                }
                else{
                    console.log(res.data);
                }
            }
            catch(e){
                console.error(e);
            }
            finally{
                hideLoading();
            }
        };

        getDB();

    }, []);

    return (
        <>
        <div className={styles.page}>
                {planets.length>0 && planets.map((pl)=>(
                    <Planet planet={pl} key={pl.id} crafts={pcMap[pl.id] === undefined? []: pcMap[pl.id]}/>
                ))}
        </div>
        {isLoading && <Loading />}
       </>
    );
};

export default Planets;