"use client";

import { useState } from "react";
import styles from "./Date_PopUp.module.css";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const years = [2025, 2026, 2027, 2028, 2029, 2020];

export default function DateRangePicker() {
    const [selectedMonth, setSelectedMonth] = useState(4); // May
    const [selectedYear, setSelectedYear] = useState(2025);
    const [selectedDates, setSelectedDates] = useState([3, 13]);

    const generateCalendar = () => {
        const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();
        const daysInMonth = new Date(
            selectedYear,
            selectedMonth + 1,
            0
        ).getDate();

        const blanks = Array(firstDay).fill(0);
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

        return [...blanks, ...days];
    };

    const handleDateClick = (day) => {
        if (!day) return;
        const updated = [...selectedDates];
        if (updated.length === 2) updated.length = 0;
        updated.push(day);
        setSelectedDates(updated.sort((a, b) => a - b));
    };

    const isInRange = (day) => {
        if (typeof day !== "number" || selectedDates.length < 2) return false;
        return day > selectedDates[0] && day < selectedDates[1];
    };

    return (
        <div className={styles.popupContainer}>
            <div className={styles.popup}>
                <h2 className={styles.title}>Please select a new range</h2>
                <div className={styles.selects}>
                    <select
                        className={styles.select}
                        value={selectedMonth}
                        onChange={(e) =>
                            setSelectedMonth(Number(e.target.value))
                        }>
                        {months.map((month, idx) => (
                            <option
                                key={month}
                                value={idx}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <select
                        className={styles.select}
                        value={selectedYear}
                        onChange={(e) =>
                            setSelectedYear(Number(e.target.value))
                        }>
                        {years.map((year) => (
                            <option
                                key={year}
                                value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.calendar}>
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <div
                            key={day}
                            className={styles.dayLabel}>
                            {day}
                        </div>
                    ))}
                    {generateCalendar().map((day, idx) => (
                        <div
                            key={idx}
                            className={`
                ${styles.dayCell}
                ${day === 0 ? styles.empty : ""}
                ${selectedDates.includes(day) ? styles.selected : ""}
                ${isInRange(day) ? styles.inRange : ""}
              `}
                            onClick={() => handleDateClick(day)}>
                            {day === 0 ? "" : day}
                        </div>
                    ))}
                </div>
                <div className={styles.actions}>
                    <button className={styles.cancel}>Cancel</button>
                    <button className={styles.save}>Save</button>
                </div>
            </div>
        </div>
    );
}
