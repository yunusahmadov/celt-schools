import { useEffect, useState } from "react";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
        <button onClick={scrollToTop}>
        <i className="fa fa-chevron-up"></i>
        
        </button>
      </div>
    );
  }
  export default  ScrollToTopButton