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
                   https://phplaravel-944849-3287799.cloudwaysapps.com/api/v1/high-sch-accepted-students?page=1
        axios.get(`https://phplaravel-944849-3287799.cloudwaysapps.com/api/v1/high-sch-accepted-students?page=2`)
        .then(resp=>{
            console.log(resp.data)
            setStudentState(resp.data)
            console.log(resp.data);
        })
    },[showMore])

    console.log(studentState.length);
    const language=useSelector((state=>state.language.value))
  return (
    <body class="home1">
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
    <div className="student-container">
        {
            studentState?.map((data, i)=>{
                return(
                    
                    <StudentCard key={i} data={data}/>
                )
            })
        }
    </div>
    <div className='loadMoreCont'>
        {
            studentState.length % 20==0?
            <div className="showmore" onClick={plusShowMore}>LOAD MORE</div>:''
        }
        {
            showMore !==1 ?
        <div className="showless" onClick={minusShowLess}>SHOW LESS</div>:''

        }
    </div>
             
    {/* <!-- Partner End --> */}
   
    {/* <!-- Footer Start --> */}
    <Footer/>
    {/* <!-- Footer End --> */}

    {/* <!-- start scrollUp  --> */}
    <div id="scrollUp">
        <i class="fa fa-angle-up"></i>
    </div>
    
    <div aria-hidden="true" class="modal fade search-modal" role="dialog" tabindex="-1">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="fa fa-close"></span>
        </button>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="search-block clearfix">
                    <form>
                        <div class="form-group">
                            <input class="form-control" placeholder="eg: Computer Technology" type="text"/>
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