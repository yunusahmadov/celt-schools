import React from 'react';
import Toolbar from './Toolbar';
import Header from '../pages/Courses/Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import ErrorContent from './ErrorContent';

const ErrorPage = () => {
  return (
    <body className="inner-page">
    <div className="full-width-header">
       <Toolbar/>
     <Header/>
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
