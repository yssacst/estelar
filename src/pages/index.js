import CardProduto from "../components/cardProduto";
import Footer from "../components/footer";
import Menu from "../components/menu";
import '../css/index.css';
import Logo from '../img/Ativo 4.png';

const Index = () =>{
    return(
        <div className="box-principal">
            <header>
                 <img src={Logo} className="logo"/> 
                <Menu/>
            </header>
            <main>
                <div className="box-produtos">
                    <CardProduto/>
                    <CardProduto/>
                    <CardProduto/>
                    <CardProduto/>
                    <CardProduto/>
                    <CardProduto/>
                    <CardProduto/>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
        );
}
export default Index;