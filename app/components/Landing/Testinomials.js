/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import kellen from 'images/kellen.png';
import dennis from 'images/dennis.png';
import jason from 'images/jason.png';
import paul from 'images/paul.jpg';
import Slider from 'react-slick';

const Testinomials = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: '20px',
          arrows: false,
        },
      },
    ],
  };
  return (
    // <div>
    //   <div>
    <div className="tenth-block block">
      {/* <div className="container"> */}
      <div className="title title-lg">Testimonials</div>
      <Slider {...settings}>
        <div className="testimonials-sec">
          <div className="testimonials-sec-inner">
            <div className="testimonials-left">
              <img src={paul} alt="User" />
            </div>
            <div className="testimonials-right">
              <div className="testimonials-client">Paul Scoringe</div>
              <div className="testimonials-message">
                Maplytiks worked in a proactive and collaborative manner,
                implementing their robust Computer Vision technology to measure
                the brand media value for Hockey New Zealand's sponsors from the
                inaugural FIH 2019 Pro League. We had never done this before, so
                were eagerly awaiting the results. What impressed me was their
                unique thought process towards analyzing and interpreting
                in-depth sponsorship data and taking the initiative by
                identifying potential incremental value for us and our brand
                partners.
              </div>
              <div className="testimonials-company">
                General Manager - Marketing and Brands @ Hockey New Zealand
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-sec">
          <div className="testimonials-sec-inner">
            <div className="testimonials-left">
              <img src={kellen} alt="User" />
            </div>
            <div className="testimonials-right">
              <div className="testimonials-client">Kellen Williams</div>
              <div className="testimonials-message">
                As the global challenger agency, we recognize the key traits for
                an organization to become one of the leaders in the global
                sports business industry. Through our journey to provide
                best-in-class service for our clients, we seek to partner with
                promising, up-and-coming companies in the industry who provide
                undeniable value. I'm excited to share that our first experience
                working with Maplytiks has been a memorable one. Maplytiks
                provided a detailed brand analytics and sponsorship valuation
                report for one of our key clients in the United States, and
                helped formulate the go-to-market sponsorship price points for
                the upcoming season.
              </div>
              <div className="testimonials-company">
                Strategic Marketing &amp; Partnerships @ CSM LeadDog
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-sec">
          <div className="testimonials-sec-inner">
            <div className="testimonials-left">
              <img src={dennis} alt="User" />
            </div>
            <div className="testimonials-right">
              <div className="testimonials-client">Dennis Cousins</div>
              <div className="testimonials-message">
                Maplytiks is a trustworthy and value-driven sponsorship
                analytics advisory that assisted Cricket Ireland in evaluating
                the true value of our sponsorship assets. Their insightful
                report helped secure a renewal commitment from one of our key
                sponsors. I highly recommend Maplytiks, and look forward to
                working with them in the future.
              </div>
              <div className="testimonials-company">
                Commercial Director @ Cricket Ireland
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-sec">
          <div className="testimonials-sec-inner">
            <div className="testimonials-left">
              <img src={jason} alt="User" />
            </div>
            <div className="testimonials-right">
              <div className="testimonials-client">Jason Nath</div>
              <div className="testimonials-message">
                It was a pleasure working with the team at Maplytiks, who helped
                evaluate the value of brand sponsorships for U Mumba. Maplytiks
                in-depth and accurate analysis helped showcase the value to our
                sponsors, and their data insights will assist us in optimizing
                our commercial inventory for future seasons.
              </div>
              <div className="testimonials-company">
                Vice President – Marketing @ U Sports
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* </div> */}
    </div>
    //   </div>
    // </div>
  );
};

export default Testinomials;
