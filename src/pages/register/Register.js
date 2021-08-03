import "./Register.css";

function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                     <h3 className="registerLogo">Social Media</h3>
                    <span className="registerDesc">
                        Connect with friends and the world around you on Social-Media
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                         <input type="text" placeholder="user name" className="registerInput"/>
                         <input type="email" placeholder="email" className="registerInput"/>
                         <input type="password" placeholder="password" className="registerInput"/>
                         <input type="password" placeholder="password Again" className="registerInput"/>
                        <button className="loginButton">Sinn Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
