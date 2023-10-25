import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Breadcrumbs from '../Events/EventBread'
import Toolbar from '../../components/Toolbar'
import StudentsBreadcrumbs from './StudentsBreadcrumbs'
import Header from '../MainPage/Header'
import RightMenuToggle from '../MainPage/RightMenuToggle'
import Preloader from '../../components/Preloader'
import StudentCard from './StudentCard'
import { useSelector } from 'react-redux'
import axios from 'axios'

function StudentsPage() {
    const [studentState, setStudentState] = useState([])
    const [showMore, setShowMore] = useState(1)

    const plusShowMore = () => {
        setShowMore(prevShowMore => prevShowMore + 1);
      };

      const minusShowLess = () => {
        setShowMore(prevShowLess => prevShowLess -1);
      };
    useEffect(()=>{
                
        axios.get(`https://phplaravel-944849-3287799.cloudwaysapps.com/api/v1/high-sch-accepted-students?page=1`)
        .then(resp=>{
            console.log(resp.data)
            setStudentState(resp.data)
            console.log(resp.data);
        })
    },[showMore])

    console.log(studentState.length);
    const language=useSelector((state=>state.language.value))
  return (
    <body className="home1">
    {/* <Preloader/> */}
      <div className="full-width-header">
		<Header/>
      </div>
      <StudentsBreadcrumbs
    pageName={language.grads}
    pageTitle={language.studPageTitle}
    />
	<RightMenuToggle/>
    {/* <!--Full width header End--> */}
    <div className="container">
            <div className="student-container">
        {
            studentState?.map((data, i)=>{
                return(
                    
                    <StudentCard key={i} data={data}/>
                )
            })
        }
    </div>
    </div>

    <div className='loadMoreCont'>
        {/* {
            studentState.length % 20==0?
            <div className="showmore" onClick={plusShowMore}>LOAD MORE</div>:''
        }
        {
            showMore !==1 ?
        <div className="showless" onClick={minusShowLess}>SHOW LESS</div>:''

        } */}
    </div>
             
    {/* <!-- Partner End --> */}
   
    {/* <!-- Footer Start --> */}
    <Footer/>
    {/* <!-- Footer End --> */}

    {/* <!-- start scrollUp  --> */}
    <div id="scrollUp">
        <i className="fa fa-angle-up"></i>
    </div>
    
    <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabindex="-1">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className="fa fa-close"></span>
        </button>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="search-block clearfix">
                    <form>
                        <div className="form-group">
                            <input className="form-control" placeholder="eg: Computer Technology" type="text"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


</body>
  )
}

export default StudentsPage