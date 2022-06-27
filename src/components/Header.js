import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="flex-between">
            <div>
                <img src={logo} alt="OCP logo"></img>
                Omni Consumer Products</div>
            <nav className="flex">
                <div>About</div>
                <div>Products</div>
                <div>Register</div>
            </nav>
        </header>
    )
}

export default Header;