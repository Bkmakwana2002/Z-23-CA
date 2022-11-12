import { useState, useEffect } from 'react'
import { getAuth } from "firebase/auth";

export default function useToken() {
    const [token, setToken] = useState('')
    useEffect(() => {
        return getAuth(user => {
            if (user) {
                user.getIdToken(true)
                    .then(latestToken => setToken(latestToken))
                    .catch(err => console.log(err))
            }
        })
    }, [])
    return token
}