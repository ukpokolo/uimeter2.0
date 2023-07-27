import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services">
        <div className="services-con">
            <div className="services-con-top">
                <p>Why choose UIMETER?</p>
            </div>
            <div className="services-con-bottom">
                <div className="services-1">
                    <div className="services-wrap">
                    <i class="fa-solid fa-hashtag"></i>
                        <p>Pay with USSD</p>
                        <p>"No internet? Buy Electricity by dialing *402*00009548*amount# on any kind of mobile device."</p>
                    </div>
                    <div className="services-wrap">
                    <i class="fa-solid fa-naira-sign"></i>
                        <p>Payments</p>
                        <p>Simplifies end-to-end workflow for your business payout processes; freeing up resources for strategic business engagements</p>
                    </div>
                    <div className="services-wrap">
                    <i class="fa-solid fa-clock"></i>
                        <p>Set Reminders</p>
                        <p>"No internet? Buy Electricity by dialing *402*00009548*amount# on any kind of mobile device."</p>
                    </div>
                </div>
                <div className="services-2">
                <div className="services-wrap">
                <i class="fa-solid fa-building-columns"></i>
                        <p>Pay with Bank Transfers</p>
                        <p>Make payments via our Bank Transfer option and get value immedialtely.</p>
                    </div>
                    <div className="services-wrap">
                    <i class="fa-solid fa-headset"></i>
                        <p>24/7 Customer Support.</p>
                        <p>Enjoy our Customer Service and have your issues resolved anytime- day and night.</p>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services