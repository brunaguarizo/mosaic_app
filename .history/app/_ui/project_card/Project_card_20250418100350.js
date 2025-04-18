import styles from "./Project_card.module.css";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";

function ProjectCard() {
    // Control menu dropdown
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Show or not the menu dropdown
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className={styles.card__container}>
            <div className={styles.card__menu}>
                <svg
                    className={styles.card__icon}
                    width='34'
                    height='28'
                    viewBox='0 0 34 28'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={toggleMenu}
                    style={{ cursor: "pointer" }}>
                    <path d='M9 20C8.71667 20 8.47917 19.9042 8.2875 19.7125C8.09583 19.5208 8 19.2833 8 19C8 18.7167 8.09583 18.4792 8.2875 18.2875C8.47917 18.0958 8.71667 18 9 18H25C25.2833 18 25.5208 18.0958 25.7125 18.2875C25.9042 18.4792 26 18.7167 26 19C26 19.2833 25.9042 19.5208 25.7125 19.7125C25.5208 19.9042 25.2833 20 25 20H9ZM9 15C8.71667 15 8.47917 14.9042 8.2875 14.7125C8.09583 14.5208 8 14.2833 8 14C8 13.7167 8.09583 13.4792 8.2875 13.2875C8.47917 13.0958 8.71667 13 9 13H25C25.2833 13 25.5208 13.0958 25.7125 13.2875C25.9042 13.4792 26 13.7167 26 14C26 14.2833 25.9042 14.5208 25.7125 14.7125C25.5208 14.9042 25.2833 15 25 15H9ZM9 10C8.71667 10 8.47917 9.90417 8.2875 9.7125C8.09583 9.52083 8 9.28333 8 9C8 8.71667 8.09583 8.47917 8.2875 8.2875C8.47917 8.09583 8.71667 8 9 8H25C25.2833 8 25.5208 8.09583 25.7125 8.2875C25.9042 8.47917 26 8.71667 26 9C26 9.28333 25.9042 9.52083 25.7125 9.7125C25.5208 9.90417 25.2833 10 25 10H9Z' />
                </svg>

                                {/* Menu dropdown */}
                                {isMenuOpen && (
                    <div className={styles.dropdown__menu}>
                        <ul className={styles.dropdown__list}>
                            <li className={styles.dropdown__item}>Editar projeto</li>
                            <li className={styles.dropdown__item}>Ver detalhes</li>
                            <li className={styles.dropdown__item}>Compartilhar</li>
                            <li className={styles.dropdown__item}>Excluir</li>
                        </ul>
                    </div>
                )}
            </div>
            </div>
            {/* Change this to the actual progress circle*/}
            <svg
                width='65'
                height='64'
                viewBox='0 0 65 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M64.5 32C64.5 49.6731 50.1731 64 32.5 64C14.8269 64 0.5 49.6731 0.5 32C0.5 14.3269 14.8269 0 32.5 0C50.1731 0 64.5 14.3269 64.5 32ZM6.9 32C6.9 46.1385 18.3615 57.6 32.5 57.6C46.6385 57.6 58.1 46.1385 58.1 32C58.1 17.8615 46.6385 6.4 32.5 6.4C18.3615 6.4 6.9 17.8615 6.9 32Z'
                    fill='white'
                />
                <path
                    d='M32.5 3.2C32.5 1.43269 33.9362 -0.0165716 35.6947 0.159867C38.8011 0.471548 41.851 1.23674 44.7459 2.43586C48.6283 4.04401 52.1559 6.40111 55.1274 9.37259C58.0989 12.3441 60.456 15.8717 62.0641 19.7541C63.2633 22.6491 64.0285 25.6989 64.3401 28.8053C64.5166 30.5638 63.0673 32 61.3 32C59.5327 32 58.1206 30.5618 57.9003 28.8083C57.6156 26.5431 57.0286 24.3214 56.1513 22.2033C54.8648 19.0974 52.9791 16.2752 50.6019 13.8981C48.2248 11.5209 45.4026 9.63521 42.2967 8.34868C40.1786 7.47135 37.9569 6.88438 35.6917 6.59974C33.9382 6.3794 32.5 4.96731 32.5 3.2Z'
                    fill='#2B5FFC'
                />
                <path
                    d='M23.907 36.1193C23.3445 36.1193 22.843 36.0227 22.4027 35.8295C21.9652 35.6364 21.6172 35.3679 21.3587 35.0241C21.103 34.6776 20.9638 34.2756 20.9411 33.8182H22.0149C22.0376 34.0994 22.1342 34.3423 22.3047 34.5469C22.4751 34.7486 22.6982 34.9048 22.9737 35.0156C23.2493 35.1264 23.5547 35.1818 23.8899 35.1818C24.2649 35.1818 24.5973 35.1165 24.8871 34.9858C25.1768 34.8551 25.4041 34.6733 25.5689 34.4403C25.7337 34.2074 25.8161 33.9375 25.8161 33.6307C25.8161 33.3097 25.7365 33.027 25.5774 32.7827C25.4183 32.5355 25.1854 32.3423 24.8786 32.2031C24.5717 32.0639 24.1967 31.9943 23.7536 31.9943H23.0547V31.0568H23.7536C24.1001 31.0568 24.4041 30.9943 24.6655 30.8693C24.9297 30.7443 25.1357 30.5682 25.2834 30.3409C25.4339 30.1136 25.5092 29.8466 25.5092 29.5398C25.5092 29.2443 25.4439 28.9872 25.3132 28.7685C25.1825 28.5497 24.9979 28.3793 24.7592 28.2571C24.5234 28.1349 24.245 28.0739 23.924 28.0739C23.6229 28.0739 23.3388 28.1293 23.0717 28.2401C22.8075 28.348 22.5916 28.5057 22.424 28.7131C22.2564 28.9176 22.1655 29.1648 22.1513 29.4545H21.1286C21.1456 28.9972 21.2834 28.5966 21.5419 28.2528C21.8004 27.9062 22.1385 27.6364 22.5561 27.4432C22.9766 27.25 23.4382 27.1534 23.9411 27.1534C24.4808 27.1534 24.9439 27.2628 25.3303 27.4815C25.7166 27.6974 26.0135 27.983 26.2209 28.3381C26.4283 28.6932 26.532 29.0767 26.532 29.4886C26.532 29.9801 26.4027 30.3991 26.1442 30.7457C25.8885 31.0923 25.5405 31.3324 25.1001 31.4659V31.5341C25.6513 31.625 26.0817 31.8594 26.3913 32.2372C26.701 32.6122 26.8558 33.0767 26.8558 33.6307C26.8558 34.1051 26.7266 34.5312 26.468 34.9091C26.2124 35.2841 25.8629 35.5795 25.4197 35.7955C24.9766 36.0114 24.4723 36.1193 23.907 36.1193ZM31.4453 36.1193C30.8033 36.1193 30.2564 35.9446 29.8047 35.5952C29.353 35.2429 29.0078 34.733 28.7692 34.0653C28.5305 33.3949 28.4112 32.5852 28.4112 31.6364C28.4112 30.6932 28.5305 29.8878 28.7692 29.2202C29.0107 28.5497 29.3572 28.0384 29.8089 27.6861C30.2635 27.331 30.8089 27.1534 31.4453 27.1534C32.0817 27.1534 32.6257 27.331 33.0774 27.6861C33.532 28.0384 33.8786 28.5497 34.1172 29.2202C34.3587 29.8878 34.4794 30.6932 34.4794 31.6364C34.4794 32.5852 34.3601 33.3949 34.1214 34.0653C33.8828 34.733 33.5376 35.2429 33.0859 35.5952C32.6342 35.9446 32.0874 36.1193 31.4453 36.1193ZM31.4453 35.1818C32.0817 35.1818 32.576 34.875 32.9283 34.2614C33.2805 33.6477 33.4567 32.7727 33.4567 31.6364C33.4567 30.8807 33.3757 30.2372 33.2138 29.706C33.0547 29.1747 32.8246 28.7699 32.5234 28.4915C32.2251 28.2131 31.8658 28.0739 31.4453 28.0739C30.8146 28.0739 30.3217 28.3849 29.9666 29.0071C29.6115 29.6264 29.4339 30.5028 29.4339 31.6364C29.4339 32.392 29.5135 33.0341 29.6726 33.5625C29.8317 34.0909 30.0604 34.4929 30.3587 34.7685C30.6598 35.044 31.022 35.1818 31.4453 35.1818ZM40.5476 34.3636V33.9034C40.5476 33.5852 40.6129 33.294 40.7436 33.0298C40.8771 32.7628 41.0703 32.5497 41.3232 32.3906C41.5788 32.2287 41.8885 32.1477 42.2521 32.1477C42.6214 32.1477 42.9311 32.2287 43.1811 32.3906C43.4311 32.5497 43.62 32.7628 43.7479 33.0298C43.8757 33.294 43.9396 33.5852 43.9396 33.9034V34.3636C43.9396 34.6818 43.8743 34.9744 43.7436 35.2415C43.6158 35.5057 43.4254 35.7187 43.1726 35.8807C42.9226 36.0398 42.6158 36.1193 42.2521 36.1193C41.8828 36.1193 41.5717 36.0398 41.3189 35.8807C41.0661 35.7187 40.8743 35.5057 40.7436 35.2415C40.6129 34.9744 40.5476 34.6818 40.5476 34.3636ZM41.4169 33.9034V34.3636C41.4169 34.6278 41.4794 34.8651 41.6044 35.0753C41.7294 35.2827 41.9453 35.3864 42.2521 35.3864C42.5504 35.3864 42.7607 35.2827 42.8828 35.0753C43.0078 34.8651 43.0703 34.6278 43.0703 34.3636V33.9034C43.0703 33.6392 43.0107 33.4034 42.8913 33.196C42.772 32.9858 42.5589 32.8807 42.2521 32.8807C41.9538 32.8807 41.7393 32.9858 41.6087 33.196C41.4808 33.4034 41.4169 33.6392 41.4169 33.9034ZM36.201 29.3693V28.9091C36.201 28.5909 36.2663 28.2997 36.397 28.0355C36.5305 27.7685 36.7237 27.5554 36.9766 27.3963C37.2322 27.2344 37.5419 27.1534 37.9055 27.1534C38.2749 27.1534 38.5845 27.2344 38.8345 27.3963C39.0845 27.5554 39.2734 27.7685 39.4013 28.0355C39.5291 28.2997 39.593 28.5909 39.593 28.9091V29.3693C39.593 29.6875 39.5277 29.9801 39.397 30.2472C39.2692 30.5114 39.0788 30.7244 38.826 30.8864C38.576 31.0455 38.2692 31.125 37.9055 31.125C37.5362 31.125 37.2251 31.0455 36.9723 30.8864C36.7195 30.7244 36.5277 30.5114 36.397 30.2472C36.2663 29.9801 36.201 29.6875 36.201 29.3693ZM37.0703 28.9091V29.3693C37.0703 29.6335 37.1328 29.8707 37.2578 30.081C37.3828 30.2884 37.5987 30.392 37.9055 30.392C38.2038 30.392 38.4141 30.2884 38.5362 30.081C38.6612 29.8707 38.7237 29.6335 38.7237 29.3693V28.9091C38.7237 28.6449 38.6641 28.4091 38.5447 28.2017C38.4254 27.9915 38.2124 27.8864 37.9055 27.8864C37.6072 27.8864 37.3928 27.9915 37.2621 28.2017C37.1342 28.4091 37.0703 28.6449 37.0703 28.9091ZM36.5249 36L42.5249 27.2727H43.4964L37.4964 36H36.5249Z'
                    fill='#141414'
                />
            </svg>
            {/* end of the progress circle*/}
            <p className={styles.card__title}>Eggs and Bacon</p>
            <Tag />

            <p className={styles.card__text}>
                A set of logos and posters for a new, trendy brunch cafe who’s
                main market is millennials in Vancouver.
            </p>
            <div className={styles.date}>
                <svg
                    className={styles.date__icon}
                    width='18'
                    height='20'
                    viewBox='0 0 18 20'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z' />
                </svg>
                <p className={styles.card__text}>01 May, 2025 - 15 May, 2025</p>
            </div>
            <Button
                value='Primary Button'
                type='primary'
                //onClick={}
            />
        </div>
    );
}
export default ProjectCard;
