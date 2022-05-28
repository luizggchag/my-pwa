import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerta from "./Alerta";

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [alerta, setAlerta] = useState({ status: "", message: "" });

    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem("MYPWA/usuario");

    return (
        <div>
            {!isAuth ? (
                <div style={{ padding: '8px' }}>
                    <div>
                        <Alerta alerta={alerta} />
                        <h3> Faça Login Para Continuar</h3>
                        <div>Usuário</div>
                        <input onChange={e => setUsuario(e.target.value)} value={usuario} />
                        <br />
                        <div>Senha</div>
                        <input onChange={e => setSenha(e.target.value)} value={senha} />
                        <br />
                        <div style={{ padding: '4px' }}> </div>
                        <div >
                            <button onClick={
                                () => {
                                    if (usuario === "luiz" && senha === "123") {
                                        localStorage.setItem("MYPWA/usuario", usuario);
                                        navigate('/');
                                        window.location.reload(false);
                                    } else {
                                        setAlerta({ status: "error", message: "Usuário ou senha incorreta!" });
                                    }
                                }
                            }>Entrar</button>
                        </div>


                    </div>
                </div>
            ) : (
                <div>
                    <button onClick={
                        () => {
                            localStorage.removeItem("MYPWA/usuario");
                            navigate('/login');
                            window.location.reload(false);
                        }
                    }>Logout</button>
                </div>
            )}
        </div>
    )
}

export default Login;