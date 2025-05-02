"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./PopUp.module.css";
import Button from "../Button/Button";

export default function PopUp({
    onClose,
    children,
    buttonText = "Ok",
    buttonType = "primary",
    secondaryButtonText,
    secondaryButtonType = "orange",
    onSecondaryButtonClick,
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <>
            <div
                className={styles.popup_overlay}
                onClick={onClose}></div>
            <div className={styles.popup}>
                {children}
                <div className={styles.popup_buttons}>
                    {secondaryButtonText && (
                        <Button
                            value={secondaryButtonText}
                            type={secondaryButtonType}
                            onClick={onSecondaryButtonClick}
                        />
                    )}
                    <Button
                        value={buttonText}
                        type={buttonType}
                        onClick={onClose}
                    />
                </div>
            </div>
        </>,
        document.body
    );
}
