import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="flex-between">
            <Link to={'/'}>
                <div className="flex align-center">
                    <img src={logo} alt="OCP logo"></img>
                    <h1 className="omni">
                        Omni Consumer Products
                    </h1>
                </div>
            </Link>
            <nav className="flex">
                <div className="nav-item">About</div>
                <div className="nav-item">Products</div>
                <Link to={'/register'}>
                    <div className="nav-item">Register</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header;