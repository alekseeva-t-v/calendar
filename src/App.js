import Calendar from './components/Calendar';
import moment from 'moment';
import 'moment/locale/ru';

/**
 * Основной компонент приложения, отвечающий за отображение всех элементов на странице. Дочерний компонент Calendar (элемент календаря)
 *
 */
function App() {
  const now = new Date();
  moment.locale('ru');

  return <Calendar date={now} />;
}

export default App;
