import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import Navigate from './navigate';
import { Provider } from 'react-redux'
import store from './store/store';

export default function App() {

  return (
    <Provider store={store}>
      <Navigate />
    </Provider>

  );
}
