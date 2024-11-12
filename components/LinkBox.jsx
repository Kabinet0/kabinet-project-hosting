import styles from "@/styles/link-box.module.css"
import Link from "next/link";
import Image from "next/image";

function LinkBox({title_text, href = "../", categoryColor, gradient_angle = 15, minWidth = 280, height = 484, animDelay = 0, slideRight = false}) {
    const animClass = slideRight ? styles.button_anim_2 : styles.button_anim_1;
    
    return (
        <div className={[styles.button_div, animClass].join(" ")} style = {{animationDelay: animDelay + "s", minWidth: minWidth + "px", height: height + "px", background: "linear-gradient("+ gradient_angle + "deg, " + categoryColor + " 0%, " + "var(--c0)" + " 100%)"}}>
            {/* <Image 
                src = {banner_image} 
                onLoad={(e) => e.target.style.opacity = "1"}
                width = {1280}
                height = {720}
                className={[styles.button_image, "easeImageload"].join(" ")}
                alt = {title_text}
            /> */}
            {/* <div className={styles.button_image_gradient}/>
            <div className={styles.category_color_mask_gradient} style = {{background: "linear-gradient(90deg, " + faded_color + " 49%, " + categoryColor + " 100%)"}}/> */}
            <h2 className={styles.button_title}>{title_text}</h2>
            <div className={styles.button_icon_holder_div}>
                <img src = "/svg_assets/arrow_icon_dark.svg" className={styles.button_corner_icon_image}/>
            </div>
            <Link className={styles.link} href = {href} ></Link>
        </div>
    );
}

export default LinkBox;