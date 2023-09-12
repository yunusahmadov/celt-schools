import React from 'react';
import Toolbar from './Toolbar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import ErrorContent from './ErrorContent';
import Header from '../pages/MainPage/Header';
import RightMenuToggle from '../pages/MainPage/RightMenuToggle';

const ErrorPage = () => {
  return (
    <body className="home1">
    <div className="full-width-header">
     <Header/>
     <RightMenuToggle/> 
     </div>
     <Breadcrumbs   
   pageName={"Error Page"}
   />
   <ErrorContent/>
      
   <Footer/>
     </body>
  );
};

export default ErrorPage;
