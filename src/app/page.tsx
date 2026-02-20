'use client';  // <-- важно, чтобы работал useEffect

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Проверяем, открыто ли в Telegram Mini App
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();           // Говорим Telegram: страница готова
      tg.expand();          // Разворачиваем на весь экран
      tg.MainButton.setText('Начать тест');  // Можно добавить главную кнопку позже
      tg.MainButton.show();
      console.log('Открыто в Telegram Mini App!');
    } else {
      console.log('Обычный браузер, не Telegram');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-indigo-800 mb-6">
        Психологический профайлинг
      </h1>
      
      <p className="text-xl text-gray-700 text-center max-w-md mb-10">
        Пройди тест из 160 вопросов и узнай свои 3 психотипа + архетип. 
        Получи персональное описание от ИИ!
      </p>

      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-5 px-10 rounded-xl text-xl shadow-lg transition-all"
        onClick={() => alert('Тест скоро начнётся! Пока тестим кнопку 😊')}
      >
        Начать тест
      </button>

      <p className="mt-12 text-sm text-gray-500">
        • Для HR и руководителей Казахстана
      </p>
    </div>
  );
}