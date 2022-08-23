import { LoginValues } from 'redux/actions/Auth';
import service from './service';

const AuthService: IAuthService = {
  login: (data) => {
    return service({
      url: '/auth/login/',
      method: 'post',
      data,
    });
  },

  logout: () => {
    return service({
      url: '/auth/logout/',
      method: 'post',
    });
  },
};

export default AuthService;

export type TokenType = { token: string };

interface IAuthService {
  login: (data: LoginValues) => Promise<TokenType>;
  logout: () => void;
}
