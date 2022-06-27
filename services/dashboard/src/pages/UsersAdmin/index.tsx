import React from 'react';

import SimpleTabs from '../../components/SimpleTabs/SimpleTabs';
import Roles from './Roles';
import Users from './Users';
import Permissions from './Permissions';
const UsersAdmin = () => {
  return (
    <>
      <SimpleTabs
        tabObjects={[
          { title: 'Users', page: Users },
          { title: 'Roles', page: Roles },
          { title: 'Permissions', page: Permissions },
        ]}
      />
    </>
  );
};

export default UsersAdmin;
