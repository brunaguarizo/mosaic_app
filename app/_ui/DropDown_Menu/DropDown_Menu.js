import styles from "@/app/_ui/DropDown_Menu/DropDown_Menu.module.css";

export default function DropDownMenu({
    ActionText,
    DeleteText,
    onActionClick,
    onDeleteClick,
}) {
    return (
        <div className={styles.dropdown__menu}>
            <ul className={styles.dropdown__list}>
                <li
                    className={styles.dropdown__item}
                    onClick={onActionClick}>
                    {ActionText}
                </li>
                <li
                    className={styles.dropdown__item}
                    onClick={onDeleteClick}>
                    {DeleteText}
                </li>
            </ul>
        </div>
    );
}
