"use client";

import { useState } from "react";
import styles from "./PopUp.module.css";
import Button from "../Button/Button";

export default function PopUp({ startDate, endDate }) {
    return (
        <div className={styles.popup}>
            <h2 className={styles.popup_header}>New verification code sent</h2>
            <p className={styles.popup_text}>
                In a few minutes you will receive the verification code in your
                email.
            </p>
            <div className={styles.popup_buttons}>
                <Button
                    value='Ok'
                    type='terciary'
                    //onClick={}
                />
                <Button
                    value='Ok'
                    type='primary'
                    //onClick={}
                />
            </div>
        </div>
    );
}
