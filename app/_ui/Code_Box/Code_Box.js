"use client";
import styles from "./Code_Box.module.css";
import { use, useState } from "react";

function CodeBox() {
    return (
        <div className={styles.code_container}>
            <input
                type='number'
                className={styles.box}
            />
            <input
                type='number'
                className={styles.box}
            />
            <input
                type='number'
                className={styles.box}
            />
            <input
                type='number'
                className={styles.box}
            />
            <input
                type='number'
                className={styles.box}
            />
        </div>
    );
}

export default CodeBox;
