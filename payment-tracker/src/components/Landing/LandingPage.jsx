import NavLanding from "../NavLanding/NavLanding"
import TemplateImg from "../images/template1.png"
import cardImg01 from "../images/card-img1.webp"
import cardImg02 from "../images/card-img2.webp"
import cardImg03 from "../images/card-img3.webp"
import cardImg04 from "../images/card-img4.webp"
import user01 from "../images/user1.jpg"
import user02 from "../images/user2.jpg"
import user03 from "../images/user3.avif"
import "../LandingPage.css"

export default function LandingPage() {
    return (
        <>
            <NavLanding />
            <div className="landing">
                <div className="landing_header">
                    <h4>TrackFlow</h4>
                    <h2>Invoice</h2>
                </div>
                <div className="first_page">
                    <h1><span className="blue">100% Free GST Invoice Software</span> your business will absolutely love <span className="red">♥</span> software for customer</h1>
                    <p>Create GST invoices and get paid for your hard work. Look professional with Zoho Invoice, online invoicing software built for small business owners. It's free, forever.</p>
                    <button>Get started with TrackFlow</button>
                    <div className="feedback_rating">
                        <div>4.8 / 5</div>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                    </div>
                </div>
                <div className="second_page">
                    <img src="https://www.zoho.com/in/invoice/images/home-new/invoice-secondry-bg-1x.webp" alt="" />
                </div>
                <div className="third_page">
                    <h1>Easy Invoicing, <span className="blue">Instant Payments</span></h1>
                    <div className="invoicing_options">
                        <div className="option">
                            <div className="option_details">
                                <span className="icon"><i className="fa-regular fa-square-plus"></i></span>
                                <span className="option_title">Create</span>
                            </div>
                            <div className="option_desc">Pick an invoice template, add your business logo, customize it, and make it more "you."</div>
                        </div>
                        <div className="option">
                            <div className="option_details">
                                <span className="icon"><i className="fa-brands fa-telegram"></i></span>
                                <span className="option_title">Send</span>
                            </div>
                            <div className="option_desc">Invoice your customers via email, SMS, or as a PDF on WhatsApp or iMessage.</div>
                        </div>
                        <div className="option">
                            <div className="option_details">
                                <span className="icon"><i className="fa-solid fa-circle-arrow-down"></i></span>
                                <span className="option_title">Receive</span>
                            </div>
                            <div className="option_desc">Accept online payments via cards, net banking, and UPI with Zoho Payments and other PGs.</div>
                        </div>
                    </div>
                </div>
                <div className="fourth_page">
                    <h1><span className="blue">Much more</span> than just invoicing</h1>
                    <div className="options_container">
                        <div className="option">
                            <span className="icon"><i className="fa-regular fa-file"></i></span>
                            <div className="option_details">
                                <div className="option_title">Quotes</div>
                                <div className="option_desc">Outline your payment terms, deliverables, and terms of sale in a well-crafted quote. Once approved, automatically convert the quote into an invoice.</div>
                            </div>
                        </div>
                        <div className="option">
                            <span className="icon"><i className="fa-regular fa-clock"></i></span>
                            <div className="option_details">
                                <div className="option_title">Time Tracking</div>
                                <div className="option_desc">Track project hours and charge customers accurately. Your staff can log time from their personal devices, and the total amount owed will be calculated.</div>
                            </div>
                        </div>
                        <div className="option">
                            <span className="icon"><i className="fa-solid fa-file-invoice-dollar"></i></span>
                            <div className="option_details">
                                <div className="option_title">Expenses</div>
                                <div className="option_desc">Track every penny that leaves your business's pockets. Record billable expenses like fuel charges and raw material costs, and convert them into invoices.</div>
                            </div>
                        </div>
                        <div className="option">
                            <span className="icon"><i className="fa-regular fa-bell"></i></span>
                            <div className="option_details">
                                <div className="option_title">Payment Reminders</div>
                                <div className="option_desc">Following up with customers on their due payments is awkward and time-consuming. Send payment reminders using Zoho Invoice and get paid on time.</div>
                            </div>
                        </div>
                        <div className="option">
                            <span className="icon"><i className="fa-regular fa-address-card"></i></span>
                            <div className="option_details">
                                <div className="option_title">Customer Portal</div>
                                <div className="option_desc">Your customers can log in to a portal with a user ID and password where they can view credits, approve quotes, pay invoices, download statements, and more.</div>
                            </div>
                        </div>
                        <div className="option">
                            <span className="icon"><i className="fa-solid fa-arrow-trend-up"></i></span>
                            <div className="option_details">
                                <div className="option_title">Reports</div>
                                <div className="option_desc">Get a comprehensive view of your business performance on the dashboard. Dive deeper with reports on best-selling products, AR aging, top customers, and more.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fifth_page">
                    <div className="left_half">
                        <h1>Choose an invoice template that <span className="blue">suits your style</span></h1>
                        <div className="box">
                            <div>
                                <h2>Multiple</h2>
                                <h3>Templates</h3>
                            </div>
                            <div>
                                <h2>Flexible</h2>
                                <h3>Customization</h3>
                            </div>
                        </div>
                        <button>Create free invoices</button>
                    </div>
                    <div className="right_half">
                        <div className="slide_track">
                            <img src={TemplateImg} alt="Template Image" className="slide" />
                            <img src={TemplateImg} alt="Template Image" className="slide" />
                            <img src={TemplateImg} alt="Template Image" className="slide" />
                            <img src={TemplateImg} alt="Template Image" className="slide" />
                            <img src={TemplateImg} alt="Template Image" className="slide" />
                        </div>
                    </div>
                </div>
                <div className="sixth_page">
                    <h1>Tailor-made for small businesses, <span className="blue">especially yours</span></h1>
                    <div className="cards_container">
                        <div className="card">
                            <img src={cardImg01} alt="card-img" />
                            <div className="title">Entrepreneurs</div>
                            <p>Negotiate, close deals, and get paid</p>
                        </div>
                        <div className="card">
                            <img src={cardImg02} alt="card-img" />
                            <div className="title">Consultants</div>
                            <p>Juggle projects and expenses</p>
                        </div>
                        <div className="card">
                            <img src={cardImg03} alt="card-img" />
                            <div className="title">Agencies</div>
                            <p>Create one-time & recurring invoices</p>
                        </div>
                        <div className="card">
                            <img src={cardImg04} alt="card-img" />
                            <div className="title">Freelancers</div>
                            <p>Manage invoices and track payments</p>
                        </div>
                    </div>
                </div>
                <div className="seventh_page">
                    <div className="feedback_box">
                        <div className="left">
                            <h1>Loved by Indian small businesses</h1>
                            <div className="users_face">
                                <img src={user01} alt="user's image" />
                                <img src={user02} alt="user's image" />
                                <img src={user03} alt="user's image" />
                            </div>
                        </div>
                        <div className="comments">
                            <div className="comment">
                                Zoho Invoice helps us organize financials and gives us the strength to grow as a business by cutting overheads. Providing this free tool reflects Zoho's confidence in young companies like us.
                                Zoho Invoice has helped us save time, reduce errors, and improve cash flow in our business. Overall, Zoho Invoice has become a trusted tool in our business operations.
                            </div>
                            <div className="comment">
                                Zoho Invoice helps us organize financials and gives us the strength to grow as a business by cutting overheads. Providing this free tool reflects Zoho's confidence in young companies like us.
                                Zoho Invoice has helped us save time, reduce errors, and improve cash flow in our business. Overall, Zoho Invoice has become a trusted tool in our business operations.
                                Zoho Invoice makes invoicing easy for anyone without a finance background. It has reduced invoicing and payment collection to just a click.
                            </div>
                            <div className="comment">
                                Zoho Invoice helps us organize financials and gives us the strength to grow as a business by cutting overheads. Providing this free tool reflects Zoho's confidence in young companies like us.
                                Zoho Invoice has helped us save time, reduce errors, and improve cash flow in our business. Overall, Zoho Invoice has become a trusted tool in our business operations.
                                Zoho Invoice makes invoicing easy for anyone without a finance background. It has reduced invoicing and payment collection to just a click.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}