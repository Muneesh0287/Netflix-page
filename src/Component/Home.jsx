import React from 'react'
import logo from '../Assets/images/logo.png'
import downicon from '../Assets/images/down-icon.png'
import img1 from '../Assets/images/feature-1.png'
import img2 from '../Assets/images/feature-2.png'
import img3 from '../Assets/images/feature-3.png'
import img4 from '../Assets/images/feature-4.png'


const Home = () => {
  return (
    <div>
       {/* ----------header------------------ */}
       <div className="heder">
                <nav className='nav'>
                    <img src={logo} className='logo' />
                    <div>
                        <button className='language-btn'>English <img src={downicon} /></button>

                        <button>Sighin</button>
                    </div>
                </nav>
                <div className="header-content">
                    <h1>Unlimited movies, TV shows and more</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form className='email-signup'>
                        <input type="email" placeholder='Email address' required />
                        <button type='submit'>Get Starter</button>
                    </form>
                </div>
            </div>
            {/* -------------------main--------------------------- */}
            <div className="features">
                <div className="row">
                    <div className="text-col">
                        <h2>Enjoy on your TV</h2>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className="img-col">
                        <img src={img1} alt='1' />
                    </div>
                </div>
                {/* --------------------------------- */}
                <div className="row">
                    <div className="img-col">
                        <img src={img2} alt='1' />
                    </div>
                    <div className="text-col">
                        <h2>Download your shows to watch offline</h2>
                        <p>Save your favourites easily and always have something to watch.</p>
                    </div>

                </div>
                {/* -------------------------- */}
                <div className="row">
                    <div className="text-col">
                        <h2>Watch everywhere</h2>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="img-col">
                        <img src={img3} alt='1' />
                    </div>
                </div>
                {/* ----------------------- */}
                <div className="row">
                    <div className="img-col">
                        <img src={img4} alt='1' />
                    </div>
                    <div className="text-col">
                        <h2>Create profiles for kids</h2>
                        <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>

                </div>
            </div>
            {/* ----------------questions----------------------- */}
            <div className="faq">
                <h2>Frequently Asked Questions</h2>
                <ul className="accordian">
                    <li>
                        <input type="radio" name='accordian' id='first' />
                        <label for="first" className='label'>What is Netflix?</label>
                        <div className="content">
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordian' id='second' />
                        <label for="second" className='label'>How much natflix cost?</label>
                        <div className="content">
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordian' id='third' />
                        <label for="third" className='label'>Where can I watch?</label>
                        <div className="content">
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordian' id='forth' />
                        <label for="forth" className='label'>How di I cancel?</label>
                        <div className="content">
                            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordian' id='fifth' />
                        <label for="fifth" className='label'>What can I watch on Netflix?</label>
                        <div className="content">
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordian' id='sixth' />
                        <label for="sixth" className='label'>Is Netflix good for kids?</label>
                        <div className="content">
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                        </div>
                    </li>
                </ul>
                <small>Ready to watch? Enter your email to create or restart your membership.</small>
                <form className='email-signup'>
                    <input type="email" placeholder='Email address' required />
                    <button type='submit'>Get Starter</button>
                </form>
            </div>
            {/* ---------------------footer----------------------- */}
            <div className="footer">
                <h2>Questions? Call 000-800-919-1694</h2>
                <div className="row">
                    <div className="col">
                        <a href="#">FAQ</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Speed Test</a>

                    </div>
                    <div className="col">
                        <a href="#">Help Centre</a>
                        <a href="#">Jobs</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Legal Notices</a>
                    </div>
                    <div className="col">
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Only on Netflix</a>
                    </div>
                    <div className="col">
                        <a href="#">Media Centre</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <button className='language-btn'>English <img src={downicon} /></button>
                <p className='copyright-text'>Netflix India</p>
            </div>
    </div>
  )
}

export default Home
