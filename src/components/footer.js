import '../css/footer.css'
import Logo from '../img/Ativo 5.png'
const Footer = () => {
    return(
        <div className="footer">
            <div>
                <img src={Logo}/>
            </div>
            <div>
                <h2 className="title">Contato</h2>
                <div>
                    <p  className="subtitle">Instagram</p>
                    <p className="subtitle">WhatsApp</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;