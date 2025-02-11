import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"
import styles from "./Login.module.scss"
function Login() {
    return (

        <main>
            <section className={styles.containerImagem}>
                <img src={Capa} alt="Navio com carregado de Container" />
            </section>
            <section className={styles.containerForms}>
                <img src={Logo} alt="Logo da WIlson SOns" />
                <h1>Boas vindas ao Novo Portal SISPAR</h1>
                <p>Sistemas de Emissão de Boletos e Parcelamentos</p>

                <form action="">

                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="password" name="password" id="senha" placeholder="Senha" />

                    <a href="">Esqueci minha senha</a>

                    <div>
                        <button className={styles.buttonEntrar}>Entrar</button>
                        <button className={styles.buttonCriar}>Criar conta</button>
                    </div>

                </form>
            </section>
        </main>

    )
}
export default Login