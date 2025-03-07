import Home from "../../assets/Header/botão - Home.png"
import Historico from "../../assets/Header/Botão - Histórico.png"
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png"
import Reembolso from "../../assets/Header/Botão - Reembolso.png"
import Sair from "../../assets/Header/Botão - Sair.png"
import People from "../../assets/Header/image.png"
import FecharHearder from "../../assets/Header/imagem-fechar-header.png"
import styles from "./NavBar.module.scss"
import {useNavigate} from "react-router-dom"
import { useState } from "react"


function NavBar() {

    const navigate = useNavigate()
    const [status, setStatus] = useState("fechado")
    
function click() {
    if (status === "fechado"){
        setStatus("aberto")
    } 
    else {
        setStatus("fechado")
    }
}

    return (
        <nav className={`${styles.navBarEstilo} ${styles[status]}`}>
            <button onClick={() => click()}>
                <img src={FecharHearder} alt="Botão abrir e fechar" />
            </button>

            <section>
                <img src={People} alt="Foto Perfil" />

                <div>
                    <button onClick={() => {
                        navigate("/reembolsos");
                    }}>
                    <img src={Home} alt="Botão do Home" />
                    </button>

                    <button onClick={() => { navigate("/solicitacao") }}>
                        <img src={Reembolso} alt="Botão Reembolso" />
                    </button>

                    <button onClick={() => {navigate("/reembolsos")}}>
                        <img src={Pesquisa} alt="Botão Pesquisa" />
                    </button>

                    <button onClick={() => {navigate ("/solicitacao")}}>
                        <img src={Historico} alt="Botão Histórico" />
                    </button>
                </div>
            </section>



            <button className={styles.buttonSair} onClick={() => { navigate("/") }}>
                <img src={Sair} alt="Botão Sair" />
            </button>
        </nav>
    );
}

export default NavBar;