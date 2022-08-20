import CharacterContainer from "./CharacterContainer"

const UserHome = (props) => {
    const user = props.user

    return (
        <CharacterContainer user={user}/>
    )

}




export default UserHome