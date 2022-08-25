import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
            <div>
                <div className='col-sm-10 col-md-8 mx-auto mt-5 p-5 ui-container' style={{textAlign: "center"}}>
                    <h2>Are you sure you want to sign out?</h2>
                    <ButtonGroup>
                        <Button variant='danger' size='lg' onClick={onSignOut}>
                            Sign Out
                        </Button>
                        <Button variant='warning' size='lg' onClick={onCancel}>
                            Return
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
		</>
	)
}

export default SignOut
