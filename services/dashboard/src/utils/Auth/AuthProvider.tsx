import React from "react"
import { useUserSession } from "@graphql/cache/userState"
import history from '@utils/Router/history'

export const AuthProvider = ({ children }) => {
  const user = useUserSession()
  if (!user.accessToken && !user.refreshToken) {
    return history.push('/login');
  } else return children;
}
