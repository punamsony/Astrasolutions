import React from "react";
import './App.css';
//import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import slick carousel 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const App =()=>{
const SliderSettings = {
    infinite: true,
    speed: 500, // slide speed
    slidesToShow: 3, // slide to show one time 3 on the webpage
    slidesToScroll: 1, //slide 1 or move 1 image
  };
  return (
 <>
  {/* Logo section */}
    <nav className="navbar">
    <div className="container">
    <a className="navbar-brand" href="#">
      <img className="logo" src="https://astrasolutions.com.np/wp-content/uploads/2023/06/logo_final_smaller.png" alt="" width="238" height="auto" />
    </a>

    {/* CREATE NAVBAR SECTION */}
    <ul className="nav">
    <li className="nav-item">
      <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Solutions</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Resources</a>
    </li>
    <li className="nav-item">
      <a class="nav-link" href="#">Contact Us</a>
    </li>
    </ul>
    <button className="sign"> <img className="signinimg" src="assets/image/signin.png" />SIGN IN/UP </button>
    </div>
  </nav>

<section className="section">
<div>
<div className="main1">
    <div className="harness"><h2 className="h2">Harness the power of Payment technology to expand your business</h2></div>
    <div className="paragraph"><p className="p">Astra Solutions stands as a pinnacle of innovation, security, adaptability, cost-efficiency, and resilience among the diverse array of processing platforms currently prevalent in the market.</p></div>
    <div className="contacts"><button className="cont">Contact Us</button></div>
  </div>
    <div className="overlapimg">
     <img className="img1" src="/assets/image/circle.png" />
    <img  className="img2" src="https://astrasolutions.com.np/wp-content/uploads/2023/07/7-3-2023-Anuj-Dai-UI-Animation-GIF.gif" />
  </div>
  </div>
  </section>
{/**For circle */}
<section className="section1">
<div className="circle">
<svg>
  <circle cx="80" cy="80" r="70" fill="#ebf1f6" />
</svg> 
 {/**then next same section */}
</div>
  <div>
    <img  className="girl" src="https://astrasolutions.com.np/wp-content/uploads/2023/06/astra-solutions-woman-payment-1328x1536.webp" />
  </div>
  <div className="make">
    <h2 className="h22">Make online payments a breeze with our intuitive platform</h2>
  </div>
  <div className="at">
    <p className="p22">At our core, we uphold the belief that actions speak louder than words. We prefer to let our solutions and services do the talking while you focus on what truly matters—your business. Nevertheless, allow us to share a glimpse into our organization. We offer a comprehensive suite of solutions designed to empower your business to accept payments.
<br />
<br />
Our out-of-the-box payment solutions cater to a wide range of industries, ensuring a seamless fit for your unique requirements. Our unwavering commitment revolves around making your payment processes effortlessly functional.  We acknowledge the intricacies that surround payments, and we’re dedicated to simplifying the complexities for you. Our team of seasoned professionals, deeply rooted within the local landscape, stands ready to guide you through every step of the journey.  Rest assured, we are here to provide unparalleled support and expertise, enabling you to navigate the realm of payments with confidence.</p>
  </div>
</section>
{/*For section 2 */}
<section className="section2">
 <div className="container">
      <div className="box-container">
      <div className="box">
      <img src="/assets/image/img1.png" />
      <h3>Value for Money</h3>
      <p>Our standardized rates and easy-to-understand pricing framework are evident and devoid of any covert shocks. Accompanied by swift settlement, we are here to bolster your development. </p>
  </div>
      <div className="box">
      <img src="/assets/image/img2.png" />
      <h3>Cybersecurity and Fraud Solutions</h3>
      <p>Ensuring your customers' peace of mind, we prioritize their security with PCI DSS level 1 card data protection and utilize fraud protection tools to screen incoming transactions </p>
  </div>
      <div className="box">
      <img src="/assets/image/img3.png" />
      <h3>Reliable Processing Gateway </h3>
      <p>Ensuring your customers' peace of mind, we prioritize their security with PCI DSS level 1 card data protection and utilize fraud protection tools to screen incoming transactions.  </p>
  </div>
    <div className="box">
    <img src="/assets/image/img4.png" />
    <h3>Flexible</h3>
    <p>Embrace the advantages of our unique customization capability, characterized by its intuitive management interface, ensuring you remain in control of the customer experience.  </p>
  </div>
  </div>
  </div>
 </section>
  
  {/*for next section */}
   <section>
  <div className="support">
    <h2 className="h222">Support a wide variety of payment methods.</h2>
  </div>
  <div className="as">
    <p className="ppp">As a merchant, we empower you to seamlessly embrace a wide range of international and local payment methods across multiple product channels. Unlock the potential to accept diverse payment options with ease and efficiency, catering to the preferences of your global customer base.</p>
  </div>

  {/**now next slider section */}
  <div className="slider-section">
    <Slider {...SliderSettings}  className="c2">
      <div className="carousel">
        <img className="c1" src="/assets/image/c1.png" />
      </div>
      <div className="carousel">
        <img className="c1" src="/assets/image/c2.png" />
      </div>
      <div className="carousel">
        <img className="c1" src="/assets/image/c3.png" />
      </div>
      <div className="carousel">
        <img className="c1" src="/assets/image/c4.png" />
      </div>
      <div className="carousel">
        <img className="c1" src="/assets/image/c5.png" />
      </div>
      <div className="carousel">
        <img className="c1" src="/assets/image/c6.png" />
      </div>
    </Slider>
</div>
</section>


  {/*for frame */}
<section className="section3">
<div className="frame">
</div>
  <div>
    <img className="man"src="https://astrasolutions.com.np/wp-content/uploads/2023/06/Astra-Learn-Morebutton.webp" />
  </div>
  <div className="unlock">
    <h2 className="h2222">Unlock the full potential of your business with our powerful and versatile payment suite</h2>
  </div>
  <div className="learn">
    <button className="learn-More">Learn More</button>
  </div>
</section>

{/**footer paragraph section */}
<section>
  <div>
    <p className="we">We are backed by a trusted partner with a proven track record of facilitating online transactions for over 600 million cards. Having powered over 1 billion payments and support a wide range of payment options, totaling more than 270 choices.
</p>
  </div>
</section>
{/* footer section */}
<section className="footersection">
  <footer>
        <div className="foot">
        <ul className="footer">
          <img className="src"src="https://astrasolutions.com.np/wp-content/uploads/2022/07/astralogowhitesmall.png " />
            <p className="astra">Astra solutions stands as a pinnacle of innovation, security, adaptability, cost-efficiency, and resilience among the diverse array of processing platforms currently prevalent in the market.</p>
            <div className="facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
</div>
</ul>
          <div className="get">
            <ul className="footer">
              <h2 className="heading">Get in Touch</h2>
                <p className="para">Bandipur Building, Putalisadak,Kathmandu, Nepal</p>
                <a>info@astrasolutions.com.np</a>
                <br />
                <a>+977 01 4544203</a>            
            </ul>
            </div>

            <div>
            <ul className="footer">
              <h2 className="heading">Learn More </h2>
                <p className="para">
                  About Us
                  Documentation
                  Careers
                  FAQs
                  Privacy Policy
                  </p>
                
                <br />

                            
            </ul>
            </div>
            <div>
            <ul className="footer">
              <h2 className="heading">Our Newsletter</h2>
                <p className="para">Stay up-to-date with the latest from Astra Solutions.</p>
                <form className="d-flex" role="search">
        <input className="email" type="search" placeholder="Email Address" aria-label="Search" />
     <button className="join">Join</button>
      </form>
        </ul>
</div>
  </div>
</footer>
</section>

 </>
  )

}

export default App;