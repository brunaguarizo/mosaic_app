// type: primary, secondary, warning
// disabled: boolean
// icon: icon
// size: small / default / large
// value: text
// onClick: function

import styles from "./Button.module.css";

export default function Button({
    type,
    isDisabled = false,
    icon,
    size,
    value,
    onClick,
}) {
    const buttonClasses = classNames(styles.button, {
        [styles.small]: size === "small",
        [styles.large]: size === "large",
        [styles.primary]: type === "primary",
        [styles.secondary]: type === "secondary",
        [styles.disabled]: isDisabled,
        [styles.error]: type === "warning",
    });

    return (
        <input
            className={buttonClasses}
            type='button'
            value={value}
            onClick={onClick}
        />
    );
}
