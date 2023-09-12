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
         // return object with planet id as key, and array of crafts currently located at the planet
        const getPcMap = () =>{
            const mp = {};
            const keySet = new Set(planets.map(p => p.id));
            for(let i of keySet)
                mp[i] = [];
            for(let i of allCrafts)
                mp[i.currentLocation].push(i);
            return mp;
        };

        // planets
        const getPlanets = async ()=>{
            showLoading();
            try{
               let res = await SpaceTravelApi.getPlanets();
                if(!res.isError){
                    setPlanets(data=>[...res.data]);
                }
                else{
                    console.log(res.data);
                }
            }
            catch(e){
                console.error(e);
            }
        };

        //crafts
        const getCrafts = async ()=>{
            try{
               let res = await SpaceTravelApi.getSpacecrafts();
                if(!res.isError){
                    setAllCrafts(data=>[...res.data]);
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
       

        getPlanets();
        getCrafts();
        setPcMap(data => ({...getPcMap()}));

        hideLoading();

    }, [planets, allCrafts]);

    return (
        <>
        <div className={styles.page}>
                {planets.length>0 && planets.map((pl)=>(
                    <Planet planet={pl} key={pl.id} crafts={pcMap[pl.id] === undefined? []: pcMap[pl.id]}/>
                ))}
        </div>
        { <Loading />}
       </>
    );
};

export default Planets;