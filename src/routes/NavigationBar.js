import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = ()=>{
    return (
        <div className={styles.nav_container}>
            <div><NavLink  to="/" className={({isActive})=>(isActive?styles.active:styles.nav_item)} >🌍 Home</NavLink></div>
            <div><NavLink to="/spacecrafts" className={({isActive})=>(isActive?styles.active:styles.nav_item)} >🚀 Spacecrafts</NavLink></div>
            <div><NavLink  to="/planets" className={({isActive})=>(isActive?styles.active:styles.nav_item)}>🪐 Planets</NavLink></div>
        </div>
    );
}
export default NavigationBar;

