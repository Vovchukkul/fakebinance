import "./WhyUs.scss";
import Slaider from '../components/slaider/slaider'
import Header from './../components/header/header'
import Footer from './../components/footer/footer'
import firstPhoto from "./../images/firstPhoto.jpg";
import secondPhoto from "./../images/SecondPhoto.jpg";
import highStandart from "./../images/highStandart.svg";
import Simplicity from "./../images/Simplicity.svg";
import transparency from "./../images/transparency.svg";
import invetion from "./../images/invetion.svg";

function WhyUs() {
    return (
        <div className="wrapper">
            
            <Header/>

             <main className="main">
                <h2 className="main__title">
                    <span className="blueText">Easy Transaction </span>
                    with Tradiant
                </h2>
                <p className="main__caption">
                    Confused about what to trade? When trading at Tradiant, you can use analytical tools from<br />
                    various well-known providers to get price movement reports, the latest market news, and<br />
                    other important information you need when trading.</p>
                <a href="#" className="main__button">
                    Get started
                </a>
             </main>


             <section className="section__whyUs">
                <div className="section__whyUs__content">
                    <p className="section__whyUs__caption">Why Us?</p>
                    <h3 className="section__whyUs__title">
                        A <span className="blueText">Friendly Platform <br/></span>
                        for Beginner Traders
                    </h3>
                    <p className="section__whyUs__text">
                        Many people want to trade forex, but have a hard time understanding<br/>
                        the basics and how to trade forex. Therefore, Tradiant presents an<br/>
                        online-based interactive educational platform to help you learn to<br/>
                        trade. The educational content is made light and concise so that a<br/>
                        novice trader can learn to trade from scratch in 1 hour.
                    </p>

                    <a href="#" className="section__whyUs__button">Learn more</a>
                </div>

                <img src={firstPhoto} alt="" className="section__whyUs__image"/>
             </section>

             <section className="section__whyUs section__whyUs__second">
                <div className="section__whyUs__content">
                    <p className="section__whyUs__caption">Why Us?</p>
                    <h3 className="section__whyUs__title">
                        <span className="blueText">Additional Benefits</span> off <br/>
                        Trading at Tradiant
                    </h3>
                    <p className="section__whyUs__text">
                    Every time you transact at Tradiant, you earn Tradiant Rewards points<br />
                    which can be exchanged for various travel, gadget, lifestyle, and<br/>
                    automotive gifts. This program applies to all Live Standard Account<br/>
                    customers. If trading on a Demo Account you don't get a prize, yes.
                    </p>

                    <a href="#" className="section__whyUs__button">Learn more</a>
                </div>

                <img src={secondPhoto} alt="" className="section__whyUs__image"/>
             </section>

             <section className="section__advantages">
                <h3 className="section__advantages__title">
                    Additional advantages from <span className="blueText">Tradiant</span>
                </h3>
                <p className="section__advantages__text">
                    At Tradiant, you will benefit from us, such as many conveniences in transactions, user-friendly transparency,<br/> 
                    and many others
                </p>

                <div className="section__advantages__cards">
                    <div className="section__advantages__cards__item">
                        <img src={highStandart} alt="" id="cards__image" />
                        <h4 className="section__advantages__cards__item__title">High standards</h4>
                        <p className="section__advantages__cards__item_text">
                            At Tradiant, we have high<br/>
                            standards, all forms of<br/>
                            transactions will be processed<br/>
                            professionally, so that Tradiant<br/>
                            users feel safe and<br/>
                            comfortable
                        </p>
                    </div>

                    <div className="section__advantages__cards__item">
                        <img src={Simplicity} alt="" id="cards__image" />
                        <h4 className="section__advantages__cards__item__title">Simplicity</h4>
                        <p className="section__advantages__cards__item_text">
                            We guarantee the ease of <br/>
                            transactions at Tradiant, so <br/>
                            that users will have <br/>
                            convenience in transactions
                        </p>
                    </div>

                    <div className="section__advantages__cards__item">
                        <img src={transparency} alt="" id="cards__image" />
                        <h4 className="section__advantages__cards__item__title">Transparency</h4>
                        <p className="section__advantages__cards__item_text">
                            We will report all forms of <br/>
                            transactions as they are, <br/>
                            transparency is very important <br/>
                            to grow the trust of Tradiant <br/>
                            users
                        </p>
                    </div>

                    <div className="section__advantages__cards__item">
                        <img src={invetion} alt="" id="cards__image" />
                        <h4 className="section__advantages__cards__item__title">Invention</h4>
                        <p className="section__advantages__cards__item_text">
                            Tradiant is the result of the <br/>
                            production, refinement, or <br/>
                            development of the original <br/>
                            invention. It is also continuous <br/>
                            and continuously developing <br/>
                            in a better direction.
                        </p>
                    </div>
                </div>
             </section>

             <section className="section__testimonials">
                <h3 className="section__testimonials__title">Testimonials</h3>
                <p className="section__testimonials__caption">
                    Millions of global traders have chosen Tradiant as their stock broker of choice and here are their thoughts after<br/>
                    trading with Tradiant:
                </p>

                <Slaider />
             </section>

            <Footer />
        </div>
    )
}

export default WhyUs;