import Calendar from './components/Calendar';
import moment from 'moment'
import 'moment/locale/ru'

import './App.css';

function App() {
  const now = new Date();
  moment.locale('ru');

  return (
    <Calendar date={now} />
  );
}

export default App;
