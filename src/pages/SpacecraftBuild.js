import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import styles from "./SpacecraftBuild.module.css";
import SpaceTravelApi from "../services/SpaceTravelApi";

const SpacecraftBuild = () =>{
    const buildCraft = async (craft)=>{
        if(craft.pictureUrl === "" || craft.pictureUrl === undefined)
            craft.pictureUrl = null;
        await SpaceTravelApi.buildSpacecraft(craft);
    };
    const handleChange = (evt)=>{
        let name  = evt.target.name;
        let value = evt.target.value;
        setFormData(data => ({...data, [name]: value}));
    };

    const handleSubmit = async (evt)=>{
        evt.preventDefault();
        await buildCraft({...formData});
        navigate("/spacecrafts");
    };

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    return (
        <div className={styles.page}>
            <Link to='/spacecrafts' className={styles.link}>back 👈</Link>
            <form className={styles.form}>
                <input className={styles.input_text} name="name" placeholder="name" onChange={handleChange} />
                
                <input className={styles.input_text} name="capacity" placeholder="capacity" onChange={handleChange}  />

                <textarea className={styles.input_text} name="description" placeholder="description" onChange={handleChange} />

                <input className={styles.input_text} name="pictureUrl" placeholder="picture URL" onChange={handleChange} />

                <button className={styles.button_build} type="submit" onClick={handleSubmit}>build 🏗️</button>
            </form>
        </div>
    );
};

export default SpacecraftBuild;