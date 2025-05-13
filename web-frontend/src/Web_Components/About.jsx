import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
  return (
    
    <div>
      <Navbar/>
       <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage:`url('web/images/bg_2.jpg');`}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div className="col-md-9 ftco-animate pb-5">
            <h1 className="mb-3 bread">About Us</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>About us <i className="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>
   	
		<section className="ftco-section ftco-no-pt ftco-no-pb">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(web/images/about.jpg);`}}>
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

		<section className="ftco-counter img" id="section-counter">
    	<div className="container">
    		<div className="row">
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 text-center py-4 bg-primary mb-4">
              <div className="text">
              	<div className="icon d-flex justify-content-center align-items-center">
              		<span className="flaticon-guest"></span>
              	</div>
                <strong className="number" data-number="30">0</strong>
                <span>Speakers</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 text-center py-4 bg-primary mb-4">
              <div className="text">
              	<div className="icon d-flex justify-content-center align-items-center">
              		<span className="flaticon-handshake"></span>
              	</div>
                <strong className="number" data-number="200">0</strong>
                <span>Sponsor</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 text-center py-4 bg-primary mb-4">
              <div className="text">
              	<div className="icon d-flex justify-content-center align-items-center">
              		<span className="flaticon-chair"></span>
              	</div>
                <strong className="number" data-number="2500">0</strong>
                <span>Total Seats</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 text-center py-4 bg-primary mb-4">
              <div className="text">
              	<div className="icon d-flex justify-content-center align-items-center">
              		<span className="flaticon-idea"></span>
              	</div>
                <strong className="number" data-number="40">0</strong>
                <span>Topics</span>
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>
		
		<section className="ftco-section ftco-gallery">
    	<div className="container-fluid px-4">
    		<div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <h2 className="mb-3">Conference Gallery</h2>
          </div>
        </div>
    		<div className="row">
					<div className="col-md-3 ftco-animate">
						<a href="web/images/image_1.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_1.jpg);`}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-instagram"></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="web/images/image_2.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_2.jpg);`}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-instagram"></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="web/images/image_3.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_3.jpg);`}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-instagram"></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="web/images/image_4.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_4.jpg);`}}>
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
