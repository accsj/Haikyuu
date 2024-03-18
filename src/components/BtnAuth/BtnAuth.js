import '../../assets/styles/BtnAuth.css'

export default function BtnAuth() {
    return (
        <div className="login-register">
            <a href="/login">
                <button className="login">Log in</button>
            </a>
            <a href="/register">
                <button className="register">Registro</button>
            </a>
        </div>
    )
}