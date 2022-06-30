import { Form, Button, Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function RegisterForm() {
    let navigate = useNavigate()

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        date_of_birth: '',
    })
    const [errorMessage, setErrorMessage] = useState("We'll never share your email with anyone else.");

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isEmailValid = validateEmail(e.target.value);
            console.log(isEmailValid);
            if (!isEmailValid) {
                setErrorMessage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        let regrequest = JSON.stringify(formState);
        console.log(regrequest)
        const responseData =



            await fetch("https://challenge-api.codered.cloud/api/v1/register/", {
                method: "POST",
                mode: "cors",
                body: formState,
                headers: {
                    'Content-Type': 'application/json'
                },

            })
        console.log(responseData)
        navigate("/regcomplete")
    }

    return (
        <>
            <div className='flex-center reg-form'>
                <Form className='rform'>
                    <Row className="mb1">
                        <h2> Register Your Account</h2>
                    </Row>
                    <Row>
                        <Form.Label column lg={2}>
                            Name
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                name="name"
                                onChange={handleChange} />

                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label column lg={2}>
                            Email Address
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={handleChange}
                            />
                            <Form.Text id="passwordHelpBlock" className="passwordHelpBlock" >
                                {errorMessage}
                            </Form.Text>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label column lg={2}>
                            Date of Birth
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                name="date_of_birth"
                                onChange={handleChange}
                            />
                            <Form.Text id="passwordHelpBlock" >
                                Must be 18 years or older. (YYYY-MM-DD)
                            </Form.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label column lg={2}>

                        </Form.Label>
                        <Col className="mt1" >
                            <Button
                                variant="warning"
                                onClick={handleFormSubmit}
                            >SUBMIT</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default RegisterForm