import { Form, Button } from 'react-bootstrap'

const EditQuantityForm = (props) => {
    const { inventoryToUpdate, handleChange, handleSubmit } = props
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='amount'>Quantity</Form.Label>
                    <Form.Control
                        type='number'
                        name='amount'
                        defaultValue={inventoryToUpdate.amount}
                        placeholder='Enter amount'
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className='m-2' variant='primary' size='sm' type='submit'>Edit Amount</Button>
            </Form>
        </div>
    )
}

export default EditQuantityForm