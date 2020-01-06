import * as React from 'react';
import { useFetchUserList } from '../../../hooks/useEffectAsync';
import { Card, Spin, Alert, Button } from 'antd';
import { UserType } from '../../../fakeApi/user';

const EffectAsyncPage: React.FC = () => {
  const { data, refetch, loading, error } = useFetchUserList<UserType>();
  return (
    <Card>
      {loading ? (
        <>
          <Spin />
          <br />
        </>
      ) : (
        <>
          {error ? <Alert message={error} closable type="error"></Alert> : <></>}
          <p>姓名：{data && data.name}</p>
          <p>年龄：{data && data.age}</p>
          <p>生日：{data && data.birthday}</p>
        </>
      )}
      <Button onClick={refetch} disabled={loading}>
        refetch
      </Button>
    </Card>
  );
};

export default EffectAsyncPage;
