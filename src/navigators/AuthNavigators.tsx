import React from 'react';
import {observer} from 'mobx-react';

import AppStack from './AppStack';

function AuthNavigators() {
  return <AppStack />;
}
export default observer(AuthNavigators);
