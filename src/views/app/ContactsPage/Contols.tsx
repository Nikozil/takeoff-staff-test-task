import { Button } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import { selectedIdType } from '.';

const Contols: React.FC<IControls> = ({ setSelectedId }) => {
  const addHandler = () => setSelectedId('new');

  return (
    <section className="contacts-page__controls">
      <Button type="primary" onClick={addHandler}>
        Добавить запись
      </Button>
    </section>
  );
};

export default Contols;
interface IControls {
  setSelectedId: Dispatch<SetStateAction<selectedIdType>>;
}
