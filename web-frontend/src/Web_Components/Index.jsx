import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Index() {
  return (
  <div>
	<Navbar/>
<div className="hero-wrap" style={{backgroundImage: `url('web/images/bg_1.jpg')`}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
          <div className="col-lg-6 col-md-6 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"> Business Leaders <br/><span>Conference 2019</span></h1>
            <p className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="icon-calendar mr-2"></span>20-23 November 2019 - Los Angeles CA</p>
            <div id="timer" className="d-flex">
						  <div className="time" id="days"></div>
						  <div className="time pl-3" id="hours"></div>
						  <div className="time pl-3" id="minutes"></div>
						  <div className="time pl-3" id="seconds"></div>
						</div>
          </div>
          <div className="col-lg-2 col"></div>
          <div className="col-lg-4 col-md-6 mt-0 mt-md-5">
          	<form action="#" className="request-form ftco-animate">
          		<h2>Join Conference</h2>
	    				<div className="form-group">
	    					<input type="text" className="form-control" placeholder="Enter your Name"/>
	    				</div>
	    				<div className="form-group">
	    					<input type="text" className="form-control" placeholder="Enter your Email"/>
	    				</div>
    					<div className="form-group">
	    					<input type="text" className="form-control" placeholder="Enter your Phone"/>
	    				</div>
	    				<div className="form-group">
								<div className="checkbox">
								   <label><input type="checkbox" value="" className="mr-2"/> I have read and accept the terms and conditions</label>
								</div>
							</div>
	            <div className="form-group">
	              <input type="submit" value="Join now" className="btn btn-primary py-3 px-4"/>
	            </div>
	    			</form>
          </div>
        </div>
      </div>
    </div>

    <section className="ftco-section services-section bg-primary">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-placeholder"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Venue</h3>
                <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-world"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Transport</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>    
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-hotel"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Hotel</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-cooking"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Restaurant</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>
   	
		<section className="ftco-section ftco-no-pt ftco-no-pb">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundimage: `url(web/images/about.jpg):`}}>
					</div>
					<div className="col-md-7 wrap-about py-md-5 ftco-animate">
	          <div className="heading-section mb-5 pt-5 pl-md-5">
	          	<div className="pr-md-5 mr-md-5">
		            <h2 className="mb-4">What is all about us?</h2>
	            </div>

	            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
	            <p><a href="#" className="btn btn-primary">Join now</a></p>
	          </div>
					</div>
				</div>
			</div>
		</section>


		<section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <h2 className="mb-3">Conference Schedule</h2>
          </div>
        </div>
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
		
		<section className="ftco-section ftco-gallery ftco-no-pt">
    	<div className="container-fluid px-4">
    		<div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <h2 className="mb-3">Conference Gallery</h2>
          </div>
        </div>
    		<div className="row">
					<div className="col-md-3 ftco-animate">
						<a href="images/image_1.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_1.jpg);`}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-instagram"></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="images/image_2.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_2.jpg);`}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-instagram"></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="images/image_3.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_3.jpg);`}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-instagram"></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="images/image_4.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_4.jpg);`}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-instagram"></span>
    					</div>
						</a>
					</div>
        </div>
    	</div>
    </section>

    <section className="ftco-section testimony-section ftco-no-pt">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <h2 className="mb-3">Happy Clients</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                <div className="user-img mb-4" style={{backgroundImage: `url(web/images/person_1.jpg)`}}>
                  </div>
                  <div className="text pt-4">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Roger Scott</p>
                    <span className="position">Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                  <div className="user-img mb-4" style={{backgroundImage: `url(web/images/person_2.jpg)`}}>
                  </div>
                  <div className="text pt-4">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Roger Scott</p>
                    <span className="position">Interface Designer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                  <div className="user-img mb-4" style={{backgroundImage: `url(web/images/person_3.jpg)`}}>
                  </div>
                  <div className="text pt-4">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Roger Scott</p>
                    <span className="position">UI Designer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                  <div className="user-img mb-4" style={{backgroundImage: `url(web/images/person_1.jpg)`}}>
                  </div>
                  <div className="text pt-4">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Roger Scott</p>
                    <span className="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                  <div className="user-img mb-4" style={{backgroundImage: `url(web/images/person_1.jpg)`}}>
                  </div>
                  <div className="text pt-4">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Roger Scott</p>
                    <span className="position">System Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="ftco-section ftco-no-pt">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4">Conference Ticket Pricing</h2>
          </div>
        </div>
        <div className="row">
	        <div className="col-md-4 ftco-animate">
	          <div className="block-7">
	            <div className="text-center">
	            <h2 className="heading">Personal</h2>
	            <span className="price"><sup>$</sup> <span className="number">85</span></span>
	            <span className="excerpt d-block">per month</span>
	            
	            <h3 className="heading-2 my-4">Enjoy All The Features</h3>
	            
	            <ul className="pricing-text">
	              <li>Conference Seats</li>
	              <li>Free Wifi</li>
	              <li>Coffee Breaks</li>
	              <li>Lunch</li>
	              <li>Workshops</li>
	              <li>One Speakers</li>
	              <li>Papers</li>
	            </ul>

	            <a href="#" className="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
	            </div>
	          </div>
	        </div>
	        <div className="col-md-4 ftco-animate">
	          <div className="block-7 active">
	            <div className="text-center">
	            <h2 className="heading">Small Team</h2>
	            <span className="price"><sup>$</sup> <span className="number">200</span></span>
	            <span className="excerpt d-block">per month</span>
	            
	            <h3 className="heading-2 my-4">Enjoy All The Features</h3>
	            
	            <ul className="pricing-text">
	              <li>Conference Seats</li>
	              <li>Free Wifi</li>
	              <li>Coffee Breaks</li>
	              <li>Lunch</li>
	              <li>Workshops</li>
	              <li>One Speakers</li>
	              <li>Papers</li>
	            </ul>

	            <a href="#" className="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
	            </div>
	          </div>
	        </div>
	        <div className="col-md-4 ftco-animate">
	          <div className="block-7">
	            <div className="text-center">
	            <h2 className="heading">Family Pack</h2>
	            <span className="price"><sup>$</sup> <span className="number">499</span></span>
	            <span className="excerpt d-block">per month</span>
	            
	            <h3 className="heading-2 my-4">Enjoy All The Features</h3>
	            
	            <ul className="pricing-text">
	              <li>Conference Seats</li>
	              <li>Free Wifi</li>
	              <li>Coffee Breaks</li>
	              <li>Lunch</li>
	              <li>Workshops</li>
	              <li>One Speakers</li>
	              <li>Papers</li>
	            </ul>

	            <a href="#" className="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
	            </div>
	          </div>
	        </div>
	      </div>
      </div>
    </section>


    <section className="ftco-section ftco-no-pt ftco-no-pb">
    	<div className="container">
    		<div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <h2 className="mb-1">Conference Speakers</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-6 d-flex align-items-stretch">
        		<div className="speaker ftco-animate d-flex align-items-stretch">
	        		<div className="img" style={{backgroundImage: `url(web/images/staff-3.jpg);`}}>
	        			<div className="text text-absolute">
		        			<h3>Robert Bonner</h3>
		        			<span className="position">Businessmen</span>
		        			<ul className="ftco-social mt-3">
		                <li><a href="#"><span className="icon-twitter"></span></a></li>
		                <li><a href="#"><span className="icon-facebook"></span></a></li>
		                <li><a href="#"><span className="icon-instagram"></span></a></li>
		              </ul>
		        		</div>
	        		</div>
	        	</div>
        	</div>
        	<div className="col-md-6">
        		<div className="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
	        		<div className="img" style={{backgroundImage: `url(web/images/staff-1.jpg);`}}></div>
	        		<div className="text pl-4">
	        			<h3>Kyle Bochs</h3>
	        			<span className="position">Businessman</span>
	        			<p>A small river named Duden flows by their place and supplies</p>
	        			<ul className="ftco-social">
	                <li><a href="#"><span className="icon-twitter"></span></a></li>
	                <li><a href="#"><span className="icon-facebook"></span></a></li>
	                <li><a href="#"><span className="icon-instagram"></span></a></li>
	              </ul>
	        		</div>
	        	</div>
	        	<div className="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
	        		<div className="img" style={{backgroundImage: `url(web/images/staff-2.jpg);`}}></div>
	        		<div className="text pl-4">
	        			<h3>Arnold Thompson</h3>
	        			<span className="position">Businessman</span>
	        			<p>A small river named Duden flows by their place and supplies</p>
	        			<ul className="ftco-social">
	                <li><a href="#"><span className="icon-twitter"></span></a></li>
	                <li><a href="#"><span className="icon-facebook"></span></a></li>
	                <li><a href="#"><span className="icon-instagram"></span></a></li>
	              </ul>
	        		</div>
	        	</div>
	        	<div className="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
	        		<div className="img" style={{backgroundImage: `url(web/images/staff-3.jpg);`}}></div>
	        		<div className="text pl-4">
	        			<h3>Ryan Sy</h3>
	        			<span className="position">Businessman</span>
	        			<p>A small river named Duden flows by their place and supplies</p>
	        			<ul className="ftco-social">
	                <li><a href="#"><span className="icon-twitter"></span></a></li>
	                <li><a href="#"><span className="icon-facebook"></span></a></li>
	                <li><a href="#"><span className="icon-instagram"></span></a></li>
	              </ul>
	        		</div>
	        	</div>
	        	<div className="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
	        		<div className="img" style={{backgroundImage: `url(web/images/staff-4.jpg);`}}></div>
	        		<div className="text pl-4">
	        			<h3>Alysa Derick</h3>
	        			<span className="position">Businesswoman</span>
	        			<p>A small river named Duden flows by their place and supplies</p>
	        			<ul className="ftco-social">
	                <li><a href="#"><span className="icon-twitter"></span></a></li>
	                <li><a href="#"><span className="icon-facebook"></span></a></li>
	                <li><a href="#"><span className="icon-instagram"></span></a></li>
	              </ul>
	        		</div>
	        	</div>
        	</div>
        </div>
    	</div>
    </section>

    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
          	<div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: `url('web/images/image_1.jpg');`}}>
              </a>
              <div className="text pt-4">
              	<div className="meta mb-3">
                  <div><a href="#">July. 14, 2019</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
                <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
          	<div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: `url('web/images/image_2.jpg');`}}>
              </a>
              <div className="text pt-4">
              	<div className="meta mb-3">
                  <div><a href="#">July. 14, 2019</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
                <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
          	<div className="blog-entry">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: `url('web/images/image_3.jpg');`}}>
              </a>
              <div className="text pt-4">
              	<div className="meta mb-3">
                  <div><a href="#">July. 14, 2019</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
                <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
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
