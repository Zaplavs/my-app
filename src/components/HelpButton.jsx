// src/components/HelpButton.jsx
import { Link } from 'react-router-dom';

const HelpButton = () => {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
      <Link
        to="/help"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
      >
        Нужна помощь?
      </Link>
      <Link
        to="/help"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
      >
        Нашли ошибку?
      </Link>
    </div>
  );
};

export default HelpButton;