import '../css/cardProduto.css';
import Chaveiro from '../img/chaveiro-de-resina.jpg'

const CardProduto = () => {
    return(
        <div className="container">
            <div>
                <img src={Chaveiro}/>
            </div>
            <div>
                <p className="titulo">Chaveiro de coração em resina</p>
                <p className="subtitulo">R$ 29,90</p>
            </div>
            <div>
                <button className="btn">Eu Quero!</button>
            </div>
        </div>
    );
}

export default CardProduto;