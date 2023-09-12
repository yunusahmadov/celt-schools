import React from 'react'

function StudentCard() {
  return (
    <div class="col-lg-3 col-md-6 col-xs-6">
    <div class="team-item">
        <div class="team-img">
            <a href="#"><img src="https://www.supershazzer.com/wp-content/uploads/2015/12/Camera-270x270.png" alt="" /></a>
            {/* <div class="social-icon">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
            </div> */}
        </div>
        <div class="team-body">
            <a href="teachers-single.html"><h3 class="name">Md. Abdur Rahid</h3></a>
            <span class="designation">Science</span>
        </div>
    </div>						
</div>
  )
}

export default StudentCard