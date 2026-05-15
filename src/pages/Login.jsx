import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validarLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (password.length < 6) {
            alert("El password debe tener al menos 6 caracteres.");
            return;
        }

        alert("¡Login exitoso!");
    };

    return (
        <div className="auth-container">
            <form class="auth-form" onSubmit={validarLogin}>
                <h2>Login</h2>
                <div class="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        class="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        class="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;