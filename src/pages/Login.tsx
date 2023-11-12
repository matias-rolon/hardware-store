import {useState} from 'react'
import './styles/login.css'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigation = useNavigate()
    const emailAdmin = "admin";
    const passwordAdmin = "1234";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e : any) => {
        e.preventDefault();

        if (password === passwordAdmin && email === emailAdmin) {
            navigation('/back-office');
        } else {
            alert("Las contraseñas y el correo electrónico no coinciden");
        }
    };

    return (
        <>
            <div className="contain-login align">
                <div className="grid">
                    <div className="navbar-brand-container-login">
                        <a className="navbar-brand-login logo-login" href="#">AMK SRL</a>
                        <p className="navbar-brand-login subtext-login with-line">FERRETERIA Y SEGURIDAD INDUSTRIAL</p>
                    </div>
                    <form action="https://httpbin.org/post" method="POST" className="form login"
                        onSubmit={handleSubmit}>
                        <div className="form__field">
                            <label htmlFor="login__username">
                                <svg className="icon">
                                    <use xlinkHref="#icon-user"></use>
                                </svg>
                                <span className="hidden">Username</span>
                            </label>
                            <input id="login__username" type="text" name="username" className="form__input input-login" placeholder="Username" required
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }/>
                        </div>
                        <div className="form__field">
                            <label htmlFor="login__password">
                                <svg className="icon">
                                    <use xlinkHref="#icon-lock"></use>
                                </svg>
                                <span className="hidden">Password</span>
                            </label>
                            <input id="login__password" type="password" name="password" className="form__input input-login" placeholder="Password" required
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }/>
                        </div>
                        <div className="form__field">
                            <input className='input-login' type="submit" value="Sign In"/>
                        </div>
                    </form>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icons">
                    <symbol id="icon-lock" viewBox="0 0 1792 1792">
                        <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/>
                    </symbol>
                    <symbol id="icon-user" viewBox="0 0 1792 1792">
                        <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"/>
                    </symbol>
                </svg>

            </div>
        </>
    )
}
