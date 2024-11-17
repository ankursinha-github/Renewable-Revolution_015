import SiteLogo from "../images/Logo.webp"
import "./LandingPage.css"
import { Link } from "react-router-dom"

export default function NavLanding () {
    return (
        <div className="nav_landing">
            <img src={SiteLogo} alt="website logo" />
            <div className="auth_options">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Signup</button></Link>
            </div>
        </div>
    )
}