import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <div className="main-btn">
                    <Link to='/login' target="_blank"  rel="noreferrer">  <button className="login-btn">Login</button></Link>
                       <Link to='/register' target="_blank" rel="noopener noreferrer"> <button className="signup-btn">SignUp</button></Link>
                    </div>
                    <div className="heading">
                        <h5>READ THIS FIRST</h5>
                        <h1>Yay! SpaceX Plans to launch
                        <br />
                            satellite Internet network
                    </h1>
                        <p>SpaceX CEO Elon Musk has revealed Plans
                        <br />
                            to send a constellation of 700 low-orbit
                        <br />
                            statellites
                    </p>
                       <a href="https://edition.cnn.com/us/live-news/spacex-launch-07-25-18" target="_blank" rel="noopener noreferrer"> <button>Start reading</button></a>
                    </div>
                </div>
                <div className="trend">
                    <h5>TRENDING STORIES</h5>
                    <a href="https://www.dezeen.com/architecture" target="_blank" rel="noopener noreferrer"><button>ARCHITECTURE&ensp; ✥</button></a>
                </div>
                <div className="trend-story">
                    <div className="story1">
                        <div className="story1-image">
                            <img src={require('./Images/jellyfish.jpg')} height="250px" width="320px" alt="room" />
                        </div>
                        <div className="write1">
                            <p>What do Jellyfish and the worlds
                                <br />
                                tallest building have in common?
                            </p>
                            <hr />
                            <div className="bio">
                                <div>
                                    <img src={require('./Images/homepics.png')} height="50px" width="50px" alt="room" />
                                </div>
                                <div className="bio-h4">
                                    <h4>Mr Bryan</h4>
                                    <p>22 hrs ago    .    2 min read</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="story2">
                        <div className="story2-image">
                            <img src={require('./Images/lyodhouse.jpg')} height="250px" width="320px" alt="room" />
                        </div>
                        <div className="write2">
                            <p className="adjust1">Frank Llyod Wright houses, our
                                <br />
                                selection
                            </p>
                            <hr />
                            <div className="bio">
                                <div>
                                    <img src={require('./Images/Annabel.jpg')} height="50px" width="50px" alt="room" />
                                </div>
                                <div className="bio-h4">
                                    <h4>Miss Annabel Golden</h4>
                                    <p>22 hrs ago    .    2 min read</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="story3">
                        <div className="story3-image">
                            <img src={require('./Images/stringio.jpg')} height="250px" width="320px" alt="room" />
                        </div>
                        <div className="write3">
                            <p className="adjust1">My favorite from World Press
                                <br />
                                Photo '15 exhibition
                            </p>
                            <hr />
                            <div className="bio">
                                <div>
                                    <img src={require('./Images/bryan.jpg')} height="50px" width="50px" alt="room" />
                                </div>
                                <div className="bio-h4">
                                    <h4>Mr Alfred Chimereze</h4>
                                    <p>22 hrs ago    .    2 min read</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="medium">
                    <div className="medium-pics">
                        <img src={require('./Images/story.png')} height="470px" width="650px" alt="story" />
                    </div>
                    <div className="medium-write">
                        <h5>MEDIUM SPOTLIGHT</h5>
                        <h1>How Taylor Swift Saved
                         <br />
                            Apple Music
                     </h1>
                        <p>
                            Taylor Alison Swift is An American Singer-Songwriter.
                         <br />
                            Raised in Wyomissing, Pennsylvania, she moved to
                         <br />
                            Nashville, Tennessee, at the age of 14 to pursue a
                         <br />
                            career in country music.
                     </p>
                        <a href="https://www.news.com.au/news/how-taylor-swift-inspired-apple-music/news-story/f916b3ebd6e5423ae4290964ddc6c086" target="_blank" rel="noopener noreferrer"><button>Read more</button></a>
                    </div>
                </div>
                <div className="published">
                    <h5>RECENTLY PUBLISHED</h5>
                    <button>NEWEST FIRST&ensp; ✥</button>
                </div>
                <div className="pub-first">
                    <div className="pub-image">
                        <img src={require('./Images/facebookoffice.jpg')} height="210px" width="270px" alt="pub" />
                    </div>
                    <div className="pub-blog">
                        <h5>10 Things You Probably Did Not
                          <br />
                            Know About Facebook
                      </h5>
                        <h2>As the world watches for new products and
                          <br />
                            announcements here 10 existing...
                      </h2>
                        <hr />
                        <div className="blog">
                            <div>
                                <img src={require('./Images/facebooklogo.png')} height="50px" width="50px" alt="room" />
                            </div>
                            <div className="blog-h4">
                                <h4>Facebook <span>in</span> Company culture</h4>
                                <p>22 hrs ago    .    2 min read</p>
                            </div>

                        </div>
                    </div>
                    <div className="info">
                        <h4><span>MORE FROM</span> FACEBOOK</h4>
                        <p>Social network &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp; ⟶</p>
                        <hr />
                        <p>Most Appreciated behance Projects: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp; &emsp; ⟶ </p>
                        <p>Monthly Roundup </p>
                        <hr />
                        <p>10 ways to get more friends &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp; &emsp;⟶ </p>
                    </div>
                </div>
                <div className="pub-second">
                    <div className="pub-image">
                        <img src={require('./Images/oculus.jpg')} height="210px" width="270px" alt="pub" />
                    </div>
                    <div>
                        <div className="pub-blog">
                            <h5>Oculus Rift: Step Into the Game
                          <br />
                                By Oculus
                      </h5>
                            <h2>Oculus is making possible to experience anything,
                          <br />
                                anywhere, through the power of virtual reality.
                      </h2>
                            <hr />
                            <div className="blog">
                                <div>
                                    <img src={require('./Images/mylogo.png')} height="50px" width="50px" alt="room" />
                                </div>
                                <div className="blog-h4">
                                    <h4>Oculus <span>in</span> Development</h4>
                                    <p>1 day ago    .    7 min read</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <h4><span>MORE FROM</span> OCULUS</h4>
                            <p>Immersive VR experiences &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ⟶</p>
                            <hr />
                            <p>What Oculus VR did to change the &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp; &emsp; &emsp; ⟶ </p>
                            <p>reality perception </p>
                            <hr />
                            <p>The most interesting games &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;⟶ </p>
                        </div>
                    </div>
                </div>
                <div className="pub-third">
                    <div className="pub-image">
                        <img src={require('./Images/starwars.jpeg')} height="210px" width="270px" alt="pub" />
                    </div>
                    <div>
                        <div className="pub-blog">
                            <h5>My first reaction to Star Wars
                          <br />
                                The Force Awakens
                      </h5>
                            <h2>American epic space opera film directed,
                          <br />
                                co-produced, and co-written by j.j.Abrams.
                      </h2>
                            <hr />
                            <div className="blog">
                                <div>
                                    <img src={require('./Images/Kylo.png')} height="50px" width="50px" alt="room" />
                                </div>
                                <div className="blog-h4">
                                    <h4>Kylo Ren <span>in</span> Movies</h4>
                                    <p>3 days ago    .    5 min read</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <h4><span>MORE FROM</span> KYLO REN</h4>
                            <p>My top Star Wars characters &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp; ⟶</p>
                            <hr />
                            <p>Lightsaber or How I Learned to Stop &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp; &emsp; &emsp; ⟶ </p>
                            <p>Worrying and love the plasma stick </p>
                            <hr />
                            <p>Are stormtroopers really dumb? &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;⟶ </p>
                        </div>
                    </div>
                </div>
                <div className="write-story">
                    <h1>Start writing your story</h1>
                    <a href="https://community.yourstory.com/editor" target="_blank" rel="noopener noreferrer"> <button>Start Now  &ensp;&ensp;➣</button></a>
                </div>
                <div className="footer">
                    <p className="p-about">About</p>
                    <p className="p-help">Help</p>
                    <p className="p-career">Careers</p>
                    <p className="p-publish">Publishers</p>
                    <p className="p-brand">Brands</p>
                    <p className="p-blog">Blog</p>
                    <p className="p-develope">Developers</p>
                    <p className="p-privacy">Privacy</p>
                    <p className="p-terms">Terms</p>
                </div>
            </div>
        )
    }
}

export default Home;