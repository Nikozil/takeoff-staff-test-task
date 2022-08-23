import { Rule } from 'antd/lib/form';

export const rules: RulesType = {
  email: [
    {
      required: true,
      message: 'Пожалуйста, введите вашу почту',
    },
    {
      type: 'email',
      message: 'Пожалуйста, верную почту!',
    },
  ],
  password: [
    {
      required: true,
      message: 'Пожалуйста, введите пароль',
    },
  ],
};

interface RulesType {
  [key: string]: Rule[];
}
