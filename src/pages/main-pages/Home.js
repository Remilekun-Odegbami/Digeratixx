import React from 'react';
import landingImg from '../../Media/landing-img2.jpg';

export default function Home() {
  return (
      <>
    <section className="container section1">
        <div className="row">
            <div className="col-md-8 mt-4 col-sm-12 home-text">
                <h2 className="sub-header"> Find latest</h2>
                <h1 className="main-header"> Tech Opportunities</h1>
                <p className="text"> According to the AnitaB.org Institute, women make up 28.8% of the tech workforce in 2020, compared to 26.2 percent in 2019, meaning that only one out of every four persons working in IT is female. The numbers are staggering: women hold 14% of software engineering occupations and a quarter (25%) of computer science-related jobs. Furthermore, research reveal that the number of female software engineers has only increased by 2% in the last 21 years. And it's not by chance that there are so few of them. </p>
                <p className="text">STEM fields are still viewed as predominantly male-dominated. According to an MIT study, young individuals are initially interested in STEM areas, but as they get older, they lose interest due to a lack of contact and inspiring female role models and mentors in STEM fields. </p>
                <p className="text">For tech companies, diversity is critical because it allows them to build better products. More imagination leads to innovation and high-quality products when a company's staff is diverse. Please join us to bridge the gap in tech. </p>
                    <div className="home-btn d-flex">
                        <button className='home-btn1 btn-block btn m-1'>Get Started Now</button>
                        <button className='home-btn2 btn-block btn m-1'>Learn More</button>                        
                    </div>
                </div>
            <div className="col-md-4 col-sm-12 mt-sm-5">
            <img class="img-fluid mb-4" src={landingImg} alt="About Us" />
            </div>
        </div>
    </section>
    <section class="section2 communities">
            <div class="container">
                <div class="row">
                    <div class="title">
                        <h2 class="section-title mt-5"> Learn More About Tech Communities </h2>
                        <p className="text mt-5">To bridge the gender imbalance, we need women like you to apply for oipportunities. Start by reading through the list of opportunities available to you in tech by clicking on the images below to read about them.</p>
                    </div>
                    <div class="content">
                        <div class="row mt-4">
                            <div class="col-md-4 col-sm-6 justify-content-around mb-3">
                                <a href="https://www.freecodecamp.org/news/what-is-front-end-development/" target="_blank">
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.inc14Mc5PgXpHzdf_RaHjQHaFN&pid=Api&P=0&w=248&h=174" alt="Front End Develoment" class="img-fluid" />                                     
                                </a>
                            </div>
                            <div class="col-md-4 col-sm-6 justify-content-around mb-3">
                                <a href="https://www.upwork.com/resources/beginners-guide-back-end-development" target="_blank">
                                    <img src="https://tse4.mm.bing.net/th?id=OIP.V7ABEvSzJA-U2aUZgUG-0gHaEa&pid=Api&P=0&w=325&h=194" alt="Back End Development" class="img-fluid" />
                                </a> 
                            </div>
                            <div class="col-md-4 col-sm-6 justify-content-around mb-3">
                                <a href="https://www.geeksforgeeks.org/what-is-full-stack-development/" target="_blank">
                                    <img src="https://tse4.mm.bing.net/th?id=OIP.GF_dOBH7hPCfULtmlOl24QHaDq&pid=Api&P=0&w=355&h=200" alt="Full Stack Development" class="img-fluid" />
                                </a> 
                            </div>
                            <div class="col-md-4 col-sm-6 justify-content-around mb-3">
                                <a href="https://gryphondigitalmining.com/blog/blockchain-development/#:~:text=Blockchain%20development%20is%20a%20broad%20category%20of%20computer,the%20attention%20of%20investors%20over%20the%20past%20decade." target="_blank">
                                    <img src="https://1.bp.blogspot.com/-G_glLYLwCks/WT44Qyjl9vI/AAAAAAAAwlA/nTmBW8l-A98gqzO5ILAYCCVNG5yfk8IBgCK4B/s1600/BlockChain.jpg" alt="Block Chain" class="img-fluid" /> 
                                </a>
                            </div>
                            <div class="col-md-4 col-sm-6 justify-content-around mb-3">
                                <a href="https://www.productplan.com/glossary/product-design/" target="_blank">
                                    <img src="https://image.slidesharecdn.com/productdesign-160926122455/95/product-design-1-638.jpg?cb=1474904922" alt="Product Design" class="img-fluid" />
                                </a> 
                            </div>
                            <div class="col-md-4 col-sm-6 justify-content-around mb-3">
                                <a href="https://www.productplan.com/learn/what-is-product-management/" target="_blank">
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.pzT87GqU8r1M5ywy3b-53QHaE8&pid=Api&P=0&w=355&h=200" alt="Product Management" class="img-fluid" /> 
                                </a>
                            </div>
                            <div class="col-md-4 col-sm-6 justify-content-around mb-3">
                                <a href="https://www.ibm.com/topics/cybersecurity" target="_blank">
                                    <img src="https://tse1.mm.bing.net/th?id=OIP.bKRlyPiil3Rb0hwKL1BHIwHaEn&pid=Api&P=0&w=355&h=200" alt="Cyber Security" class="img-fluid" /> 
                                </a>
                            </div>
                            <div class="col-md-4 col-sm-6 justify-content-around mb-3">
                                <a href="https://www.nist.gov/artificial-intelligence" target="_blank">
                                    <img src="https://tse4.mm.bing.net/th?id=OIP.HjY4-XDU5El6yrLcveTjZQHaEH&pid=Api&P=0&w=348&h=193" alt="Artificial Intelligence" class="img-fluid" />
                                </a>
                            </div>
                            <div class="col-md-4 col-sm-6 justify-content-around mb-3">
                                <a href="https://www.digitalauthority.me/resources/mobile-app-development-guide/" target="_blank">
                                    <img src="https://tse3.mm.bing.net/th?id=OIP.zVl0_r_fzYXIGYhEs7qB9wHaE8&pid=Api&P=0&w=259&h=173" alt="Mobile App Development" class="img-fluid" />
                                </a> 
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        
      </>
  )
}
