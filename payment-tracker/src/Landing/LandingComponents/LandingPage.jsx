import NavLanding from "./NavLanding";
import TemplateImg from "../images/template1.png";
import cardImg01 from "../images/card-img1.webp";
import cardImg02 from "../images/card-img2.webp";
import cardImg03 from "../images/card-img3.webp";
import cardImg04 from "../images/card-img4.webp";
import user01 from "../images/user1.jpg";
import user02 from "../images/user2.jpg";
import user03 from "../images/user3.avif";
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <>
            <NavLanding />
            <div className="landing">
                {/* Landing Header */}
                <div className="landing_header">
                    <h4>TrackFlow</h4>
                    <h2>Invoice</h2>
                </div>

                {/* First Page - Intro Section */}
                <div className="first_page">
                    <h1>
                        <span className="highlight blue">100% Free GST Invoice Software</span>
                        your business will absolutely love <span className="red">♥</span>
                    </h1>
                    <p>
                        Create GST invoices and get paid for your hard work. Look professional with TrackFlow, online invoicing software built for small business owners. It's free, forever.
                    </p>
                    <button>Get started with TrackFlow</button>
                    <div className="feedback_rating">
                        <div>4.8 / 5</div>
                        {[...Array(5)].map((_, i) => (
                            <span key={i}><i className="fa-solid fa-star"></i></span>
                        ))}
                    </div>
                </div>

                {/* Second Page - Promotional Image */}
                <div className="second_page">
                    <img src="https://www.zoho.com/in/invoice/images/home-new/invoice-secondry-bg-1x.webp" alt="Invoice Promo" />
                </div>

                {/* Third Page - Invoicing Options */}
                <div className="third_page">
                    <h1>Easy Invoicing, <span className="blue">Instant Payments</span></h1>
                    <div className="invoicing_options">
                        {[
                            { icon: "fa-square-plus", title: "Create", description: "Pick an invoice template, add your business logo, and customize it to fit your style." },
                            { icon: "fa-telegram", title: "Send", description: "Invoice your customers via email, SMS, or as a PDF on WhatsApp or iMessage." },
                            { icon: "fa-circle-arrow-down", title: "Receive", description: "Accept online payments via cards, net banking, and UPI with integrated payment gateways." }
                        ].map((option, index) => (
                            <div className="option" key={index}>
                                <div className="option_details">
                                    <span className="icon"><i className={`fa-regular ${option.icon}`}></i></span>
                                    <span className="option_title">{option.title}</span>
                                </div>
                                <div className="option_desc">{option.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fourth Page - Features Section */}
                <div className="fourth_page">
                    <h1><span className="blue">Much more</span> than just invoicing</h1>
                    <div className="options_container">
                        {[
                            { icon: "fa-file", title: "Quotes", description: "Outline terms, deliverables, and convert quotes into invoices seamlessly." },
                            { icon: "fa-clock", title: "Time Tracking", description: "Track project hours and accurately invoice clients." },
                            { icon: "fa-file-invoice-dollar", title: "Expenses", description: "Track billable expenses and convert them into invoices." },
                            { icon: "fa-bell", title: "Payment Reminders", description: "Automated reminders ensure you get paid on time." },
                            { icon: "fa-address-card", title: "Customer Portal", description: "A portal for customers to view, approve, and pay invoices." },
                            { icon: "fa-arrow-trend-up", title: "Reports", description: "Gain insights on performance, top customers, and trends." }
                        ].map((feature, index) => (
                            <div className="option" key={index}>
                                <span className="icon"><i className={`fa-regular ${feature.icon}`}></i></span>
                                <div className="option_details">
                                    <div className="option_title">{feature.title}</div>
                                    <div className="option_desc">{feature.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fifth Page - Templates Slider */}
                <div className="fifth_page">
                    <div className="fifth_container">
                        <div className="left_half">
                            <h1>Choose an invoice template that <span className="blue">suits your style</span></h1>
                            <div className="box">
                                <div><h2>Multiple</h2><p>Templates</p></div>
                                <div><h2>Flexible</h2><p>Customization</p></div>
                            </div>
                            <button>Create free invoices</button>
                        </div>
                        <div className="right_half">
                            <div className="slide_track">
                                {[...Array(5)].map((_, i) => (
                                    <img src={TemplateImg} alt="Template" className="slide" key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sixth Page - User Profiles Section */}
                <div className="sixth_page">
                    <h1>Tailor-made for small businesses, <span className="blue">especially yours</span></h1>
                    <div className="cards_container">
                        {[
                            { img: cardImg01, title: "Entrepreneurs", description: "Negotiate, close deals, and get paid" },
                            { img: cardImg02, title: "Consultants", description: "Juggle projects and expenses" },
                            { img: cardImg03, title: "Agencies", description: "Create one-time & recurring invoices" },
                            { img: cardImg04, title: "Freelancers", description: "Manage invoices and track payments" }
                        ].map((card, index) => (
                            <div className="card" key={index}>
                                <img src={card.img} alt="card-img" />
                                <div className="title">{card.title}</div>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Seventh Page - Testimonials */}
                <div className="seventh_page">
                    <div className="feedback_box">
                        <div className="left">
                            <h1>Loved by Indian small businesses</h1>
                            <div className="users_face">
                                {[user01, user02, user03].map((user, index) => (
                                    <img src={user} alt="user's image" key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="comments">
                            {Array(3).fill("Zoho Invoice helps us organize financials and gives us the strength to grow as a business by cutting overheads. Providing this free tool reflects Zoho's confidence in young companies like us. Zoho Invoice has helped us save time, reduce errors, and improve cash flow in our business. Overall, Zoho Invoice has become a trusted tool in our business operations.").map((comment, index) => (
                                <div className="comment" key={index}>{comment}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
