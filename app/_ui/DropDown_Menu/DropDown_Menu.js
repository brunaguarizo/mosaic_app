import styles from "@/app/_ui/DropDown_Menu/DropDown_Menu.module.css";

export default function DropDownMenu({
    ActionText,
    DeleteText,
    onActionClick,
    onDeleteClick,
    onEditClick,
}) {
    return (
        <div className={styles.dropdown__menu}>
            <ul className={styles.dropdown__list}>
                <li
                    className={styles.dropdown__item}
                    onClick={onEditClick}>
                    Edit Project
                </li>
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
