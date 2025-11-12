import { Provider } from 'react-redux'
import store from './store/store'
import { Container,Typography } from '@mui/material';
import './App.css'
import { HabitTrackerForm } from './components/habitTrackerForm';
import { HabitLlist } from './components/HabitLlist';

function App() {


  return (
    <Provider store={store}>
    <Container maxWidth='md'>
      <Typography component="h1" variant='h2' align='center'>
      Habit Tracker
      </Typography>
    <HabitTrackerForm/>
    <HabitLlist/>
    </Container>
    </Provider>
  )
}

export default App
