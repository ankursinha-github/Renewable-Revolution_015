import SiteLogo from "../images/SiteLogo.jpeg"
import "../LandingPage.css"

export default function NavLanding () {
    return (
        <div className="nav_landing">
            <img src={SiteLogo} alt="website logo" />
            <div className="auth_options">
                <button>Login</button>
                <button>Signup</button>
            </div>
        </div>
    )
}