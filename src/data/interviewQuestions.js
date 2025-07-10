// Импортируем вопросы по языкам
import python from './languages/python';
import javascript from './languages/javascript';
import csharp from './languages/csharp';
import java from './languages/java';
import cpp from './languages/cpp';

// Объединяем в один объект
const interviewQuestions = {
  python,
  javascript,
  csharp,
  java,
  cpp
};

// Экспортируем как значение
export { interviewQuestions };