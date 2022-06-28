import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Register() {

    return (
        <div >
            <h2 className="flex-center">Register Your Account</h2>
            <p id="reg-paragraph" className="flex-center"> Create an account to access products, orders, and billing information.</p>
            <div className="flex-center">
                <Link to={'./register'}><Button variant="warning" > REGISTER</Button></Link>
            </div>
        </div>
    )
}
export default Register