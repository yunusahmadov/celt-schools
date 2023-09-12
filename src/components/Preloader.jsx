import React, { useState, useEffect } from 'react';

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Устанавливаем isLoading в false после 1 секунды (1000 миллисекунд)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Очистка таймера при размонтировании компонента
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    // Показываем прелоадер только в течение 1 секунды после загрузки страницы
     (
      <div className="book_preload" style={isLoading?{opacity:1,visibility:"visible"}:{opacity:0,visibility:"hidden"}}>
        <div className="book">
          <div className="book__page"></div>
          <div className="book__page"></div>
          <div className="book__page"></div>
        </div>
      </div>
    ) 
  );
}

export default Preloader;