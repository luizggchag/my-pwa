import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem("MYPWA/usuario");

    return (
        <div>
            {!isAuth ? (
                <p>
                    <div>
                        <div>Usuário</div>
                        <input onChange={e => setUsuario(e.target.value)} value={usuario} />
                        <button onClick={
                            () => { 
                                localStorage.setItem("MYPWA/usuario", usuario);
                                navigate('/');
                            }
                        }>Login</button>
                    </div>
                </p>
            ) : (
                <p>
                        <button onClick={
                            () => { 
                                localStorage.removeItem("MYPWA/usuario");
                                navigate('/login');
                            }
                        }>Logout</button>                    
                </p>
            )}
        </div>
    )
}

export default Login;