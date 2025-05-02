"use client";

import { useState } from "react";
import styles from "./Date_PopUp.module.css";
import Button from "../Button/Button";

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

export default function DatePicker({
    startDate,
    endDate,
    onChange,
    onSave,
    onCancel,
}) {
    const [selectedMonth, setSelectedMonth] = useState(startDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(startDate.getFullYear());
    const [selectedDates, setSelectedDates] = useState([
        startDate.getDate(),
        endDate.getDate(),
    ]);
    const [showMonthList, setShowMonthList] = useState(false);
    const [showYearList, setShowYearList] = useState(false);

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

        if (updated.length === 2) {
            const newStartDate = new Date(
                selectedYear,
                selectedMonth,
                updated[0]
            );
            const newEndDate = new Date(
                selectedYear,
                selectedMonth,
                updated[1]
            );
            onChange([newStartDate, newEndDate]);
        }
    };

    const isInRange = (day) => {
        if (typeof day !== "number" || selectedDates.length < 2) return false;
        return day > selectedDates[0] && day < selectedDates[1];
    };

    return (
        <div className={styles.popupContainer}>
            <div className={styles.popup}>
                <h2 className={styles.title}>Please select a new range</h2>

                <div className={styles.dropdownWrapper}>
                    <div
                        className={styles.dropdown}
                        onClick={() => setShowMonthList(!showMonthList)}>
                        <span>{months[selectedMonth]}</span>
                        <span className={styles.arrow}>▾</span>
                        {showMonthList && (
                            <ul className={styles.dropdownList}>
                                {months.map((month, idx) => (
                                    <li
                                        key={month}
                                        onClick={() => {
                                            setSelectedMonth(idx);
                                            setShowMonthList(false);
                                        }}>
                                        {month}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div
                        className={styles.dropdown}
                        onClick={() => setShowYearList(!showYearList)}>
                        <span>{selectedYear}</span>
                        <span className={styles.arrow}>▾</span>
                        {showYearList && (
                            <ul className={styles.dropdownList}>
                                {years.map((year) => (
                                    <li
                                        key={year}
                                        onClick={() => {
                                            setSelectedYear(year);
                                            setShowYearList(false);
                                        }}>
                                        {year}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
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

                <div
                    className={styles.actions}
                    style={{ display: "flex", gap: "var(--space-regular)" }}>
                    <Button
                        type='secondary'
                        value='Cancel'
                        onClick={onCancel}
                    />
                    <Button
                        type='primary'
                        value='Save'
                        onClick={onSave}
                    />
                </div>
            </div>
        </div>
    );
}
