"use client";
import styles from "./Task_List.module.css";
import { useState } from "react";

function TaskList({ Tasks }) {
    return (
        <div className={styles.list_container}>
            <ol className={styles.list_column}>
                {Tasks.map((tasks, index) => (
                    <li
                        key={index}
                        className={styles.list_item}>
                        {tasks}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TaskList;
