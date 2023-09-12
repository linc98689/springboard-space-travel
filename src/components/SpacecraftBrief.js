import React from "react";
import {Link, useNavigate} from "react-router-dom";
import styles from "./SpacecrafteBrief.module.css";
import { DEFAULT_PIC_URL } from "../context/defaults";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "../components/Loading";
import {useLoading} from "../context/hook";

const SpacecraftBrief = ({data}) =>{
    const [isLoading, showLoading, hideLoading] = useLoading();
    const navigate = useNavigate();
    const handleDestroy = async (evt) =>{
        showLoading();
        let name = evt.target.id.substring(1);
        await SpaceTravelApi.destroySpacecraftById({id:name});
        navigate("/home");
        hideLoading();
    };

    return (
        <div className={styles.container}>
            <div className={styles.content_left}>
                <Link className={styles.link} to={`/spacecraft/${data.id}`}>
                    <div className={styles.craft_image} 
                    style={{backgroundImage:`url("${data.pictureUrl===null? DEFAULT_PIC_URL: data.pictureUrl}")`}}></div>
                </Link>
                <div className={styles.craft_brief}>
                    <ul>
                        <li>name: {data.name}</li>
                        <li>capacity: {data.capacity}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.content_right} onClick={handleDestroy} id={"*"+data.id} >🎆Destroy</div>
            {isLoading && <Loading />}
        </div>
    );
};

export  default SpacecraftBrief;