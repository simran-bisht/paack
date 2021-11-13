/* eslint-disable prettier/prettier */
import {createStore} from 'redux';
import delivery from './reducer';

const store = createStore(delivery);
export default store;
