import styles from "./User_info.module.css";

export default function UserInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <svg
                    className={styles.avatar}
                    width='367'
                    height='367'
                    viewBox='0 0 367 367'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle
                        cx='183.5'
                        cy='183.5'
                        r='183.5'
                        fill='#FFDA01'
                    />
                    <ellipse
                        cx='123.271'
                        cy='181.248'
                        rx='54.0368'
                        ry='114.828'
                        fill='#080808'
                    />
                    <ellipse
                        cx='253.86'
                        cy='181.248'
                        rx='54.0368'
                        ry='114.828'
                        fill='#080808'
                    />
                    <path
                        d='M132.84 185.188L68.2495 219.311L68.2495 151.065L132.84 185.188Z'
                        fill='#FFDA01'
                    />
                    <path
                        d='M263.429 185.188L198.839 219.311L198.839 151.065L263.429 185.188Z'
                        fill='#FFDA01'
                    />
                </svg>
                <div className={styles.content}>
                    <p className={styles.name}>Justin Pham</p>
                    <p className={styles.email}>justinpham@gmail.com</p>
                </div>
            </div>
            <svg
                className={styles.icon}
                width='32'
                height='33'
                viewBox='0 0 32 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M5 15.1667C4.44772 15.1667 4 14.719 4 14.1667V5.5C4 4.94772 4.44772 4.5 5 4.5H13.6667C14.219 4.5 14.6667 4.94772 14.6667 5.5V14.1667C14.6667 14.719 14.219 15.1667 13.6667 15.1667H5ZM6.66667 12.5H12V7.16667H6.66667V12.5ZM5 28.5C4.44772 28.5 4 28.0523 4 27.5V18.8333C4 18.2811 4.44772 17.8333 5 17.8333H13.6667C14.219 17.8333 14.6667 18.281 14.6667 18.8333V27.5C14.6667 28.0523 14.219 28.5 13.6667 28.5H5ZM6.66667 25.8333H12V20.5H6.66667V25.8333ZM18.3333 15.1667C17.7811 15.1667 17.3333 14.719 17.3333 14.1667V5.5C17.3333 4.94772 17.781 4.5 18.3333 4.5H27C27.5523 4.5 28 4.94772 28 5.5V14.1667C28 14.719 27.5523 15.1667 27 15.1667H18.3333ZM20 12.5H25.3333V7.16667H20V12.5ZM25.3333 28.5V25.8333H28V28.5H25.3333ZM17.3333 20.5V17.8333H20V20.5H17.3333ZM20 23.1667V20.5H22.6667V23.1667H20ZM17.3333 25.8333V23.1667H20V25.8333H17.3333ZM20 28.5V25.8333H22.6667V28.5H20ZM22.6667 25.8333V23.1667H25.3333V25.8333H22.6667ZM22.6667 20.5V17.8333H25.3333V20.5H22.6667ZM25.3333 23.1667V20.5H28V23.1667H25.3333Z' />
            </svg>
        </div>
    );
}
