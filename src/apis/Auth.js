import axios from 'axios';
import {baseLink} from './config';

export const SignInApi = async ({username, password}) => {
  return await axios.patch(`${baseLink}auth/signin`, {username, password});
};
