import { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validarDatos = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (password.length < 6) {
            alert("El password debe tener al menos 6 caracteres.");
            return;
        }
        if (password !== confirmPassword) {
            alert("El password y la confirmación deben ser iguales.");
            return;
        }

        alert("¡Registro exitoso!");
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={validarDatos}>
                <h2>Registro</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar Contraseña</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default Register;