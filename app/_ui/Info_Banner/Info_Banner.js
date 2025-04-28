"use client";
import styles from "./Info_Banner.module.css";
import { use, useState } from "react";

function InfoBanner({ prefix, linkText, linkDirectory, suffix }) {
    return (
        <div className={styles.info_container}>
            <p className={styles.info}>
                {prefix}{" "}
                <a
                    className={styles.link}
                    href={linkDirectory}>
                    {linkText}
                </a>{" "}
                {suffix}
            </p>
        </div>
    );
}

export default InfoBanner;
