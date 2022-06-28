
function Footer() {
    return (
        <footer>
            <div className="flex-evenly">
                <ul className="footer-lists">
                    <li className="list-header">Products</li>
                    <li>Cyborgs</li>
                    <li>Space Ships</li>
                    <li>Weapons</li>
                    <li>Lab-grown food</li>
                </ul>
                <ul className="footer-lists">
                    <li className="list-header">Service</li>
                    <li>Hospitals</li>
                    <li>Police Force</li>
                    <li>Internet</li>
                    <li>Private military</li>
                </ul>
                <ul className="footer-lists">
                    <li className="list-header">Legal</li>
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                    <li>Report a violation</li>
                    <li>Contact Us</li>
                </ul>

                <div className="flex align-center"> Copyright 2041, OCP Inc. <br></br> All rights reserved.</div>
            </div>
            <div className="trademark flex-center"> OCP: The only choice for your consumer needs. ™</div>
        </footer >
    )
}

export default Footer