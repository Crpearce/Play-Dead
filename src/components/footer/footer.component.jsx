import "./footer.styles.css";
import spotify from '../../assets/logos.png'

const Footer = () => {
    return (
        <div>
            <img src={spotify} alt='spotify logo' className="logo"/>
        </div>
    );
}

export default Footer;
