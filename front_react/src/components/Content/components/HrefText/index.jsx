import React from "react";
import styles from "./index.module.scss";

const HrefText = ({href,text})=>{
    return(
        <a href={href} style={{ color: "#0077ff", fontSize: "16px" ,  textDecoration:"underline"}}>{text}</a>
    )
}

export default HrefText;