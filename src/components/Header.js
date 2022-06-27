import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="flex-between">
            <div className="flex align-center">
                <img src={logo} alt="OCP logo"></img>
                <h1 className="nav-item">
                    Omni Consumer Products
                </h1>
            </div>
            <nav className="flex">
                <div className="nav-item">About</div>
                <div className="nav-item">Products</div>
                <div className="nav-item">Register</div>
            </nav>
        </header>
    )
}

export default Header;