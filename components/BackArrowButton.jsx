import Link from "next/link";
import styles from "@/styles/back-arrow-button.module.css"

const BackArrowButton = ({href, className}) => {
    return (
        <div id={styles.mobile_back_button_div}>
            <Link href = {href} className={styles.back_link}>
                <img src = "/svg_assets/back_arrow.svg" className={styles.arrowIcon}/>
                <p>Back</p>
            </Link>
        </div>
    );
}

export default BackArrowButton;