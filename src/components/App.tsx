import React, {ReactElement} from 'react';

import Layout from './Layout';
import Routes from './Routes';

export default function App(): ReactElement {

  return (
    <Layout>
      <Routes />
    </Layout>
  )
}
