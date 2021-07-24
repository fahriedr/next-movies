import React, {useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserContext } from '../context/userContext'

const AboutPage = (props) => {
  const state = useSelector(state => state)
  const { userState, userDispatch } = useContext(UserContext)

  console.log(userState)
  console.log(state)

    return (
        <div>
            <h1>About Page</h1>
        </div>
    )
}

export default AboutPage
