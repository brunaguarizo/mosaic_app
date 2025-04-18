import classNames from "classnames";
import styles from "./Notification_Box.module.css";

function NotificationBox({
    notificationHeading,
    notificationBody,
    type,
    image,
    time,
}) {
    const NotificationClasses = classNames(styles.primary, {
        [styles.secondary]: type === "secondary",
    });

    const timeClasses = classNames(styles.time, {
        [styles.timePrimary]: type !== "secondary",
        [styles.timeSecondary]: type === "secondary",
    });

    return (
        <div className={NotificationClasses}>
            <img
                className={styles.notification_image}
                src={`/notification/${image}.svg`}
            />
            <div className={styles.column}>
                <h1 className={styles.notification_heading}>
                    {notificationHeading}
                </h1>
                <p className={styles.notification_body}>{notificationBody}</p>
            </div>
            <div className={timeClasses}>{time}</div>
        </div>
    );
}

export default NotificationBox;
