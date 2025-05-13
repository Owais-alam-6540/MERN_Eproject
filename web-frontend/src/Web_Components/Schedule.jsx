import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Schedule() {
  return (
    <div>
		<Navbar/>
          <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: `url('web/images/bg_2.jpg');` }}data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div className="col-md-9 ftco-animate pb-5">
            <h1 className="mb-3 bread">Conference Schedule</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Schedule <i className="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>
   	
		<section className="ftco-section">
			<div className="container">
        <div className="ftco-schedule">
					<div className="row">
            <div className="col-md-3 nav-link-wrap text-center text-md-right">
	            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
	              <a className="nav-link ftco-animate active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">First Day <span>21 July 2019</span></a>

	              <a className="nav-link ftco-animate" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Second Day <span>22 July 2019</span></a>

	              <a className="nav-link ftco-animate" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Third Day <span>23 July 2019</span></a>

	            </div>
	          </div>
	          <div className="col-md-9 tab-wrap">
	            
	            <div className="tab-content" id="v-pills-tabContent">

	              <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
	              	<div className="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: `url(web/images/staff-1.jpg);`}}></div>
	              		<div className="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span className="time">09:00 am - 4:30 pm</span>
	              			<p className="location"><span className="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 className="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span className="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div className="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: `url(web/images/staff-2.jpg);`}}></div>
	              		<div className="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span className="time">09:00 am - 4:30 pm</span>
	              			<p className="location"><span className="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 className="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span className="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div className="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: `url(web/images/staff-3.jpg);`}}></div>
	              		<div className="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span className="time">09:00 am - 4:30 pm</span>
	              			<p className="location"><span className="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 className="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span className="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              </div>

	              <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
	              	<div className="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: `url(web/images/staff-4.jpg);`}}></div>
	              		<div className="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span className="time">09:00 am - 4:30 pm</span>
	              			<p className="location"><span className="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 className="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span className="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div className="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: `url(web/images/staff-1.jpg);`}}></div>
	              		<div className="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span className="time">09:00 am - 4:30 pm</span>
	              			<p className="location"><span className="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 className="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span className="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div className="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: `url(web/images/staff-2.jpg);`}}></div>
	              		<div className="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span className="time">09:00 am - 4:30 pm</span>
	              			<p className="location"><span className="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 className="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span className="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              </div>
	              <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
	              	<div className="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: `url(web/images/staff-3.jpg);`}}></div>
	              		<div className="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span className="time">09:00 am - 4:30 pm</span>
	              			<p className="location"><span className="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 className="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span className="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div className="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: `url(web/images/staff-4.jpg);`}}></div>
	              		<div className="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span className="time">09:00 am - 4:30 pm</span>
	              			<p className="location"><span className="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 className="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span className="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div className="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: `url(web/images/staff-1.jpg);`}}></div>
	              		<div className="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span className="time">09:00 am - 4:30 pm</span>
	              			<p className="location"><span className="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 className="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span className="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              </div>
	            </div>
	          </div>
	        </div>
        </div>
			</div>
		</section>
		
		
		<section className="ftco-section-parallax ftco-section ftco-no-pt">
      <div className="parallax-img d-flex align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-lg-7 text-center heading-section ftco-animate">
              <h2>Subcribe to our Newsletter</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              <div className="row d-flex justify-content-center mt-4 mb-4">
                <div className="col-md-8">
                  <form action="#" className="subscribe-form">
                    <div className="form-group d-flex">
                      <input type="text" className="form-control" placeholder="Enter email address"/>
                      <input type="submit" value="Subscribe" className="submit px-3"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	<Footer/>
    </div>
  )
}
