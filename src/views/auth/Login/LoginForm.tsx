import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { rules } from 'config/forms/LoginFormConfig';
import { LoginValues, signIn } from 'redux/actions/Auth';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import {
  selectIsLoading,
  selectIsWrongAuthenticated,
} from 'redux/selectors/Auth';
import CustomSpin from 'components/shared-components/CustomSpin';

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const showWrongAuthenticatedWarning = useAppSelector(
    selectIsWrongAuthenticated
  );
  const isLoading = useAppSelector(selectIsLoading);

  const onLogin = (values: LoginValues) => {
    dispatch(signIn(values));
  };

  return (
    <section className="login-form">
      <Form layout="vertical" name="login-form" onFinish={onLogin}>
        <Form.Item name="email" label="Почта" rules={rules.email}>
          <Input prefix={<MailOutlined />} />
        </Form.Item>

        <Form.Item name="password" label="Пароль" rules={rules.password}>
          <Input.Password />
        </Form.Item>

        {showWrongAuthenticatedWarning && (
          <div className="login-form__warning">Введите верные данные</div>
        )}

        {isLoading ? (
          <div className="login-form__spin">
            <CustomSpin />
          </div>
        ) : (
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Вход
            </Button>
          </Form.Item>
        )}
      </Form>
    </section>
  );
};

export default LoginForm;
