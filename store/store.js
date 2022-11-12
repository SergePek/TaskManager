import { configureStore } from '@reduxjs/toolkit'
import  taskReduser  from './reduser';

export default configureStore({
  reducer: {
    task:taskReduser
  }
})