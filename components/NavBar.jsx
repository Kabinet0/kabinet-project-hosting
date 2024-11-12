import navbar from "../styles/navbar.module.css";
import Link from 'next/link';

const NavBar = ({ extra_additions, text_color = "#FFFFFF", center_on_mobile = false, text = "PORTMOLIO"}) => {
    const logoPositionClass = center_on_mobile ? navbar.navbar_center : navbar.navbar_right;

    return (
        <header className={navbar.header}>
            <div className={[navbar.header_logo_button, logoPositionClass].join(" ")}>
                <Link href="/" className={[navbar.header_link, logoPositionClass].join(" ")}>
                    <div className={[navbar.header_logo_div, logoPositionClass].join(" ")}>
                        <p style={{color:text_color}} className={navbar.text}>{text}</p>                        
                    </div>
                </Link>
            </div>
            {extra_additions} 
        </header>
    );
};

export default NavBar;