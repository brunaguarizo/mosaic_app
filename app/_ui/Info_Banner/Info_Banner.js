"use client";
import styles from "./Info_Banner.module.css";
import LinkButton from "../Link_Button/Link_Button";
import { use, useState } from "react";

function InfoBanner({ prefix, linkText, linkDirectory, suffix }) {
    return (
        <div className={styles.info_container}>
            <p className={styles.info}>
                {prefix}
                <span className={styles.link}>
                    <LinkButton
                        LinkText={linkText}
                        linkDirectory={linkDirectory}
                    />
                </span>
                {suffix}
            </p>
        </div>
    );
}

export default InfoBanner;
