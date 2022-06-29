import { Form, Row } from 'react-bootstrap'

function RegComplete() {

    return (
        <div className='flex-center reg-form'>
            <Form className='rform'>
                <Row className="mb1">
                    <h2> Register Your Account</h2>
                </Row>
                <Row className="mt3">
                    <h4 className='thanks'> Thank You!</h4>
                    <h4 className='thanks'> We have received your registration, and will respond in 3-5 business days.</h4>
                </Row>

            </Form>
        </div>
    )
}


export default RegComplete