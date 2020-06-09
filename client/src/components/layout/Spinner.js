import React, { Fragmnet } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragmnet>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragmnet>
);
