import React, {useState, useEffect} from "react";
import { useParams, Navigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import styles from "./Spacecraft.module.css";
import { useLoading } from "../context/hook";
import Loading from "../components/Loading";
import { DEFAULT_PIC_URL } from "../context/defaults";

const Spacecraft = () =>{
    const {id} = useParams();
    const [data, setData] = useState(0);
    const [isLoading, showLoading, hideLoading] = useLoading();

    useEffect(()=>{
        const getCraftById = async (id)=>{
            showLoading();
            try{
                let res = await SpaceTravelApi.getSpacecraftById({id});
                if(!res.isError){
                    setData(data => res.data);
                    console.log("id: ", id);
                    console.log("data:", res.data);
                }
            }
            catch(err){
                console.log(err);
            }
            finally{
                hideLoading();
            }
        };
        getCraftById(id);
    }, []);

    return (
        <>
            {isLoading && <Loading />}
            
            {data === null? <Navigate to="/spacecrafts" />: 
            data !== 0 && <div className={styles.page}>
                <div className={styles.image}
                                     style={{backgroundImage:`url("${data.pictureUrl===null? DEFAULT_PIC_URL: data.pictureUrl}")`}}>
                </div>
                <div className={styles.info}>
                    <div className={styles.info_left}>
                        <ul>
                            <li>Name: {data.name}</li>
                            <li>Capacity: {data.capacity}</li>
                        </ul>
                    </div>
                    <div className={styles.info_right}>
                        <p>Description:</p>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Spacecraft;