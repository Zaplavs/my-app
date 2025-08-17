// src/data/courses/html/lesson21.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Code, CheckCircle, HelpCircle, Play, Save } from 'lucide-react';
// Импортируем список частей
import { subLessonIds as initialSubLessonIds } from './lesson21/index.js';

const Lesson21Wrapper = () => {
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [subLessonComponent, setSubLessonComponent] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [completed, setCompleted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const subLessonIds = initialSubLessonIds;

  // Загрузка компонента текущей части
  useEffect(() => {
    let isMounted = true;
    const loadCurrentSubLesson = async () => {
      if (subLessonIds.length === 0 || currentPartIndex < 0 || currentPartIndex >= subLessonIds.length) {
         setSubLessonComponent(() => () => <div className="text-gray-500">Нет доступных частей или индекс вне диапазона.</div>);
         return;
      }

      const currentSubLessonId = subLessonIds[currentPartIndex];
      setSubLessonComponent(null);

      try {
        // Путь относительно этого файла: './lesson21/part1.jsx'
        const module = await import(`./lesson21/${currentSubLessonId}.jsx`);
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
      if (subLessonIds.length === 0 || currentPartIndex < 0 || currentPartIndex >= subLessonIds.length) return;
      const currentSubLessonId = subLessonIds[currentPartIndex];
      // Предполагаем slug = 'html' и lessonId = 21 для этого урока
      const storageKeySuffix = `21_${currentSubLessonId}`;
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
  }, [currentPartIndex]);

  // --- Обработчики для части урока ---
  const handleSaveCodeForPart = () => {
     if (subLessonIds.length === 0 || currentPartIndex < 0 || currentPartIndex >= subLessonIds.length) return;
    const currentSubLessonId = subLessonIds[currentPartIndex];
    // Предполагаем slug = 'html' и lessonId = 21
    const storageKeySuffix = `21_${currentSubLessonId}`;
    setIsSaving(true);
    localStorage.setItem(`lesson_${'html'}_${storageKeySuffix}_code`, userCode);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const handleCompleteForPart = () => {
     if (subLessonIds.length === 0 || currentPartIndex < 0 || currentPartIndex >= subLessonIds.length) return;
    const currentSubLessonId = subLessonIds[currentPartIndex];
    // Предполагаем slug = 'html' и lessonId = 21
    const storageKeySuffix = `21_${currentSubLessonId}`;
    const newCompleted = !completed;
    setCompleted(newCompleted);
    localStorage.setItem(`lesson_${'html'}_${storageKeySuffix}_completed`, newCompleted.toString());
  };

  // --- Навигация между частями ---
  const goToPreviousPart = () => {
    setCurrentPartIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const goToNextPart = () => {
    setCurrentPartIndex(prevIndex => Math.min(prevIndex + 1, subLessonIds.length - 1));
  };

  const currentSubLessonId = subLessonIds.length > 0 ? subLessonIds[currentPartIndex] : null;

  if (subLessonIds.length === 0) {
    return (
      <div className="space-y-6 text-center py-10">
        <p className="text-gray-500">Для этого урока пока не создано частей.</p>
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
Lesson21Wrapper.hasSubLessons = true;
// Эти свойства могут использоваться LessonPage, если он будет их поддерживать
// Lesson21Wrapper.title = "Название урока 21";
// Lesson21Wrapper.duration = "XX мин";
// Lesson21Wrapper.difficulty = "Уровень сложности";

export default Lesson21Wrapper;