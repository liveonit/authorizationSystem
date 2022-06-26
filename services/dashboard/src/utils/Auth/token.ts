import {userState} from "@graphql/cache/userState"
import { parseJwt } from "@utils/general/parseJwt";
import history from '@utils/Router/history'

export const getToken = async () => {
  const user = userState.get()
  if (!user.accessToken && !user.refreshToken) {
    return history.push('/login');
  }
  if (!user.accessToken) {
    const refreshToken = parseJwt(user.refreshToken);
    console.log(refreshToken);
    return refreshToken;
  }

}
