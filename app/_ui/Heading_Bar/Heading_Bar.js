"use client";
import classNames from "classnames";
import styles from "./Heading_Bar.module.css";
import Searchbar from "../Search_Bar/Search_Bar";
import { useRouter, usePathname } from "next/navigation";

function Headingbar({ heading, type, pagination }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleBack = () => {
        const currentPage = pathname.split("/").pop();

        if (currentPage === "Task1") {
            router.push("/ProjectSteps/WanderWorks/ProjectName");
        } else if (currentPage === "Task2") {
            router.push("/ProjectSteps/WanderWorks/Task1");
        } else if (currentPage === "Task3") {
            router.push("/ProjectSteps/WanderWorks/Task2");
        } else if (currentPage === "Done") {
            router.push("/ProjectSteps/WanderWorks/Task3");
        } else {
            router.back();
        }
    };

    if (type === "navigation") {
        return (
            <div className={styles.contentInner}>
                <div className={styles.navigationRow}>
                    <div
                        className={styles.backIcon}
                        onClick={handleBack}>
                        <svg
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className={styles.icon}>
                            <path
                                d='M11.4 16.9935L16.3 21.8935C16.5 22.0935 16.5958 22.3268 16.5875 22.5935C16.5792 22.8601 16.475 23.0935 16.275 23.2935C16.075 23.4768 15.8417 23.5726 15.575 23.581C15.3083 23.5893 15.075 23.4935 14.875 23.2935L8.275 16.6935C8.175 16.5935 8.10417 16.4851 8.0625 16.3685C8.02083 16.2518 8 16.1268 8 15.9935C8 15.8601 8.02083 15.7351 8.0625 15.6185C8.10417 15.5018 8.175 15.3935 8.275 15.2935L14.875 8.69346C15.0583 8.51012 15.2875 8.41846 15.5625 8.41846C15.8375 8.41846 16.075 8.51012 16.275 8.69346C16.475 8.89346 16.575 9.13096 16.575 9.40596C16.575 9.68096 16.475 9.91846 16.275 10.1185L11.4 14.9935H22.575C22.8583 14.9935 23.0958 15.0893 23.2875 15.281C23.4792 15.4726 23.575 15.7101 23.575 15.9935C23.575 16.2768 23.4792 16.5143 23.2875 16.706C23.0958 16.8976 22.8583 16.9935 22.575 16.9935H11.4Z'
                                fill='#141414'
                            />
                        </svg>
                    </div>
                    <div className={styles.heading}>{heading}</div>
                    <div className={styles.pagination}>{pagination}</div>
                </div>
            </div>
        );
    }

    if (type === "heading") {
        return (
            <div className={styles.contentInner}>
                <div className={styles.row}>
                    <div className={styles.heading}>{heading}</div>
                    <button className={styles.iconButton}>
                        <Searchbar
                            type='secondary'
                            inputView={"invisible"}
                        />
                    </button>
                </div>
            </div>
        );
    }

    if (type === "search") {
        return (
            <div className={styles.contentInner}>
                <div className={styles.row}>
                    <div className={styles.heading}>{heading}</div>
                    <button className={styles.iconButton}>
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className={styles.icon}>
                            <path
                                d='M8.2123 9.65808L2.40869 15.4617C2.19155 15.6788 1.91519 15.7874 1.5796 15.7874C1.24402 15.7874 0.96766 15.6788 0.750518 15.4617C0.533376 15.2445 0.424805 14.9682 0.424805 14.6326C0.424805 14.297 0.533376 14.0207 0.750518 13.8035L6.55413 7.9999L0.750518 2.19629C0.533376 1.97915 0.424805 1.70279 0.424805 1.3672C0.424805 1.03162 0.533376 0.755257 0.750518 0.538115C0.96766 0.320973 1.24402 0.212402 1.5796 0.212402C1.91519 0.212402 2.19155 0.320973 2.40869 0.538115L8.2123 6.34173L14.0159 0.538115C14.2331 0.320973 14.5094 0.212402 14.845 0.212402C15.1806 0.212402 15.4569 0.320973 15.6741 0.538115C15.8912 0.755257 15.9998 1.03162 15.9998 1.3672C15.9998 1.70279 15.8912 1.97915 15.6741 2.19629L9.87048 7.9999L15.6741 13.8035C15.8912 14.0207 15.9998 14.297 15.9998 14.6326C15.9998 14.9682 15.8912 15.2445 15.6741 15.4617C15.4569 15.6788 15.1806 15.7874 14.845 15.7874C14.5094 15.7874 14.2331 15.6788 14.0159 15.4617L8.2123 9.65808Z'
                                fill='#141414'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    return null;
}

export default Headingbar;
