// src/data/courses/html/lesson1.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Code, CheckCircle, HelpCircle, Play, Save } from 'lucide-react';

const Lesson1Wrapper = () => {
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [subLessonComponent, setSubLessonComponent] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [completed, setCompleted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [subLessonIds, setSubLessonIds] = useState([]); // Состояние для списка частей

  // Загрузка списка частей при монтировании компонента
  useEffect(() => {
    let isMounted = true;
    const loadSubLessonList = async () => {
      const ids = [];
      let index = 1;
      let hasMore = true;

      while (hasMore && isMounted) {
        try {
          // Пытаемся импортировать часть. Если она существует, импорт пройдет успешно.
          await import(`./lesson1/part${index}.jsx`);
          ids.push(`part${index}`);
          index++;
        } catch (err) {
          // Если часть не найдена, прекращаем цикл
          if (err.message && (err.message.includes('Failed to fetch') || err.message.includes('Cannot find module'))) {
            hasMore = false;
          } else {
            // Другая ошибка - логируем, но продолжаем
            console.warn(`Ошибка при проверке наличия части part${index}:`, err);
            hasMore = false; // На случай непредвиденных ошибок, останавливаем цикл
          }
        }
      }
      if (isMounted) {
        setSubLessonIds(ids);
        // Если части найдены, устанавливаем начальную часть
        if (ids.length > 0 && !subLessonComponent) {
            setCurrentPartIndex(0); // Установим начальный индекс после загрузки списка
        }
      }
    };

    loadSubLessonList();

    return () => { isMounted = false; };
  }, []); // Зависимости: пустой массив, так как это инициализация

  // Загрузка компонента текущей части
  useEffect(() => {
    let isMounted = true;
    const loadCurrentSubLesson = async () => {
      if (subLessonIds.length === 0 || currentPartIndex >= subLessonIds.length) {
        setSubLessonComponent(() => () => <div className="text-gray-500">Нет доступных частей или индекс вне диапазона.</div>);
        return;
      }

      const currentSubLessonId = subLessonIds[currentPartIndex];
      setSubLessonComponent(null); // Сброс перед загрузкой

      try {
        const module = await import(`./lesson1/${currentSubLessonId}.jsx`);
        if (isMounted) {
          setSubLessonComponent(() => module.default);
        }
      } catch (err) {
        console.error(`Ошибка загрузки части урока ${currentSubLessonId}:`, err);
        if (isMounted) {
          setSubLessonComponent(() => () => <div className="text-red-500">Ошибка загрузки части урока '{currentSubLessonId}'.</div>);
        }
      }
    };

    // --- Загрузка состояния для текущей части ---
    const loadStateForCurrentPart = () => {
      if (subLessonIds.length === 0) return; // Нечего загружать
      const currentSubLessonId = subLessonIds[currentPartIndex];
      const storageKeySuffix = `1_${currentSubLessonId}`; // '1' - это lessonId
      const savedCode = localStorage.getItem(`lesson_${'html'}_${storageKeySuffix}_code`);
      if (savedCode !== null) {
        setUserCode(savedCode);
      } else {
        setUserCode('');
      }
      const savedCompleted = localStorage.getItem(`lesson_${'html'}_${storageKeySuffix}_completed`);
      if (savedCompleted === 'true') {
        setCompleted(true);
      } else {
        setCompleted(false);
      }
    };

    loadStateForCurrentPart();
    loadCurrentSubLesson();

    return () => { isMounted = false; };
  }, [currentPartIndex, subLessonIds]); // Зависимости: currentPartIndex, subLessonIds

  // --- Обработчики для части урока ---
  const handleSaveCodeForPart = () => {
    if (subLessonIds.length === 0) return;
    const currentSubLessonId = subLessonIds[currentPartIndex];
    const storageKeySuffix = `1_${currentSubLessonId}`;
    setIsSaving(true);
    localStorage.setItem(`lesson_${'html'}_${storageKeySuffix}_code`, userCode);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const handleCompleteForPart = () => {
    if (subLessonIds.length === 0) return;
    const currentSubLessonId = subLessonIds[currentPartIndex];
    const storageKeySuffix = `1_${currentSubLessonId}`;
    const newCompleted = !completed;
    setCompleted(newCompleted);
    localStorage.setItem(`lesson_${'html'}_${storageKeySuffix}_completed`, newCompleted.toString());
  };

  // --- Навигация между частями ---
  const goToPreviousPart = () => {
    setCurrentPartIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const goToNextPart = () => {
    // Предполагаем, что список subLessonIds уже загружен
    setCurrentPartIndex(prevIndex => Math.min(prevIndex + 1, Math.max(subLessonIds.length - 1, 0)));
  };

  const currentSubLessonId = subLessonIds.length > 0 ? subLessonIds[currentPartIndex] : null;
  const partTitle = currentSubLessonId ? `Часть: ${currentSubLessonId}` : (subLessonIds.length > 0 ? 'Загрузка...' : 'Нет частей');

  // Обработка случая, когда список частей еще не загружен
  if (subLessonIds.length === 0) {
    return (
      <div className="space-y-6 text-center py-10">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
        <p className="text-gray-400">Поиск частей урока...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Навигация по частям */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <button
          onClick={goToPreviousPart}
          disabled={currentPartIndex <= 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            currentPartIndex > 0
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Предыдущая часть
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Часть {currentPartIndex + 1} из {subLessonIds.length}</span>
        </div>

        <button
          onClick={goToNextPart}
          disabled={currentPartIndex >= subLessonIds.length - 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            currentPartIndex < subLessonIds.length - 1
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          Следующая часть
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Отображение загруженной части */}
      {subLessonComponent ? (
        React.createElement(subLessonComponent, {
          userCode,
          setUserCode,
          completed,
          setCompleted,
          handleSaveCode: handleSaveCodeForPart,
          handleComplete: handleCompleteForPart,
          isSaving,
          partId: currentSubLessonId,
        })
      ) : (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
          <p className="text-gray-400">Загрузка части урока '{currentSubLessonId}'...</p>
        </div>
      )}
    </div>
  );
};

// Флаг для LessonPage
Lesson1Wrapper.hasSubLessons = true;
Lesson1Wrapper.title = "Основы HTML";
Lesson1Wrapper.duration = "45 мин";
Lesson1Wrapper.difficulty = "Начальный";

export default Lesson1Wrapper;