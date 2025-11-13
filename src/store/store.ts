import { configureStore } from '@reduxjs/toolkit'
import habitReducer from './habit-slice'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("habitState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Failed to load state from localStorage", err);
    return undefined;
  }
};


const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("habitState", serializedState);
  } catch (err) {
    console.error("Failed to save state to localStorage", err);
  }
};

const persistedState = loadState();



const store =  configureStore({
  reducer: {
    habits:habitReducer,
  },

   preloadedState: persistedState,
}) 



let saveTimeout: ReturnType<typeof setTimeout>;
store.subscribe(() => {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    saveState({
      habits: store.getState().habits,
    });
  }, 300);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



export default store;