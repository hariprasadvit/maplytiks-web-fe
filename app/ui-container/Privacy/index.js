/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from 'images/logo-tagline.png';

class Privacy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
      // showMore: false,
    };
    this.onScroll = this.onScroll.bind(this);
  }

  static propTypes = {
    history: PropTypes.object,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < screen.height - 120;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  menuToggle() {
    const menu = document.getElementById('menu');
    const menuStyle = getComputedStyle(menu);
    if (menuStyle.opacity === '0') {
      menu.style.opacity = '1';
      menu.classList.add('show');
    } else {
      menu.style.opacity = '0';
      menu.classList.remove('show');
    }
    const toggleMenu = document.getElementById('menu-toggle');
    toggleMenu.classList.toggle('show');
  }

  render() {
    return (
      // Main Wrapper Starts
      <div className="main-wrapper">
        {/* Header Starts */}
        {/* <header id="header" className={this.state.isTop ? '' : 'sticky'}> */}
        <header
          id="header"
          className={this.state.isTop ? '' : 'sticky'}
          style={{ paddingTop: 15, paddingBottom: 10, background: '#081621' }}
        >
          <div className="container">
            <div className="row space-between">
              <div
                className="header-left"
                onClick={() => this.props.history.push('/')}
              >
                <img src={logo} alt="" />
              </div>
              <div className="header-right">
              
              </div>
            </div>
          </div>
        </header>
        {/* Header Ends */}

        {/* Body Wrapper Starts */}
        <div className="about-wrapper">
          <div id="principles" className="twentieth-block">
            <div className="container">
              <div className="section-title">Privacy Policy</div>
              <div className="static-block">
                <div className="static-content">
                  <p>
                    This website Maplytiks.com (“Website”) is owned and operated
                    by Nanoyotta Technologies Private Ltd (“Company”). The term
                    “you” refers to the user or viewer of our Website.
                  </p>
                  <p>
                    Your privacy is important to us. We recognize the personal
                    nature of the information provided by you and the importance
                    of protecting this information through this privacy policy
                    (“Policy”). This Policy sets out the nature and type of
                    information the Company collects from users for the purpose
                    of the services, the usage and disclosure of such
                    information, and the safety and security measures adopted by
                    the Company to safeguard the information. By using our
                    Services, you unequivocally agree to allow us to process
                    information in accordance with this Policy. Kindly be
                    informed that this Policy is subject to change at any time,
                    and we advise you to keep tracking the Policy to be updated
                    on its terms. You agree that any other additional documents
                    that you may be required to enter into to use this Website
                    or to avail the Services are incorporated by reference into
                    this Policy.
                  </p>
                  <p>
                    Please note that this Policy is only applicable to the users
                    of the Website and information and data gathered on the
                    Website and not to any other information or third party
                    website. You are hereby advised to read this Policy
                    carefully and fully understand the nature and purpose of
                    gathering and/or collecting sensitive, personal and other
                    information and the usage, disclosure and sharing of such
                    information. By viewing or accessing the Website and/or the
                    Services, you hereby also consent to the Company sharing
                    information with third party service providers responsible
                    for the delivery of the Services and to the transfer and/or
                    storage of user information and data across borders. In
                    addition, your use of the Services shall be subject to the
                    notices, terms, and conditions set forth in this Policy, the
                    Terms of Use and, where applicable, the agreement executed
                    between you and the Company.
                  </p>
                  <p>
                    Terms not defined in this Policy will have the meaning
                    ascribed to them in the Company’s Terms of Use for the
                    Website, as available at [www.maplytiks.com/TermsofUse].
                    This Policy was last modified on [11 May 2018].
                  </p>
                  <ol>
                    <li>
                      <div className="static-subtitle">
                        THIS POLICY EXPLAINS
                      </div>
                      <ol className="sublist">
                        <li>
                          the information we may collect about you online;
                        </li>
                        <li>
                          the use and role of cookies and similar technologies
                          on our Website;
                        </li>
                        <li>
                          how we will protect and use information we collect
                          about and from you;
                        </li>
                        <li>
                          the circumstances in which we might disclose your
                          details to anyone else;
                        </li>
                        <li>
                          when we may use your details to contact you; and
                        </li>
                        <li>
                          how you can be sure the information we hold about you
                          is accurate and current.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="static-subtitle">
                        INFORMATION COLLECTED
                      </div>
                      <ol className="sublist">
                        <li>
                          We collect both personal and non-personal information
                          at the time of registering with the Website, or during
                          the course of using the Services. In general, you can
                          visit our Website without revealing your identity or
                          any personal information about yourself. However, you
                          may not be able to access certain areas (e.g.,
                          Maplytiks Dashboard) or Services that require
                          registration or need you to reveal your identity
                          and/or other information about you. Please note that
                          minors are prohibited from using the Services and the
                          Company is committed to not collecting Personal
                          Information from any minors viewing the Website.
                        </li>
                        <li>
                          Information that we collect from you will vary
                          depending upon the activity you seek to engage in and
                          may include your name, date of birth, organization,
                          website, email address, place of residence, financial
                          information (where appropriate) and mobile number. In
                          addition, we may collect demographic information such
                          as information about your computer, location (through
                          GPS), hardware, software, platform, media, Internet
                          Protocol (IP) address and connection, and other data
                          by means of briefing sheet including but not limited
                          to details of the project, brands, matches and
                          broadcast, for the purpose of providing the Services.
                          We may combine demographic information with Personal
                          Information to tailor our offerings or web pages,
                          including advertising subject matter, to suit your
                          preferences or interests.
                        </li>
                        <li>
                          The Service/s may collect payment card information at
                          any time henceforth. However, such information shall
                          be collected and processed by a third party processor
                          and the Website does not have possession of such
                          information.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="static-subtitle">
                        PERSONAL INFORMATION
                      </div>
                      <ol className="sublist">
                        <li>
                          Personal Information means any information that may be
                          used to identify you and that is not otherwise
                          publicly available, including, but not limited to,
                          your first and last name, organization, website, email
                          address, phone number, place of residence or other
                          contact information (“Personal Information”).
                        </li>
                        <li>
                          While non-personal information is anonymous
                          information such as the information sought under the
                          briefing sheet or the type of device you used and its
                          operating system, pages accessed most frequently, how
                          pages are used, applications downloaded, or such terms
                          entered. Automatic Tracking Internet Protocol Address
                          is one method of automatically collecting information
                          about your activities online. Further, the service may
                          utilize web beacons, pixel tags, cookies, embedded
                          links, and other commonly used information gathering
                          tools.
                        </li>
                        <li>
                          We collect Personal Information from you when you
                          register for any of our Services or otherwise
                          voluntarily choose to contact us and provide such
                          information. When you register with the Website, we
                          will collect certain Personal Information from you in
                          order to provide you with a user account to utilize
                          the Services. If you wish to subscribe to our
                          marketing materials, we will use your name and email
                          address to send materials to you.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="static-subtitle">
                        SENSITIVE PERSONAL INFORMATION
                      </div>
                      <ol className="sublist">
                        <li>
                          Sensitive Personal Information (“SPI”) means such
                          personal information which consists of information
                          relating to your password or financial information
                          (such as bank account details or credit card numbers).
                        </li>
                        <li>
                          Except for your account password and any SPI that you
                          choose to provide as part of your profile, the Company
                          does not collect any SPI in the course of providing
                          the Services. Any SPI collected by the Company shall
                          not be disclosed to any third party without your
                          express consent, save as otherwise set out in this
                          Policy or the Terms of Use or as provided in a
                          separate written agreement between the Company and you
                          or as required by law. It is clarified that this
                          condition shall not apply to publicly available
                          information, including SPI, in relation to you on the
                          Website.
                        </li>
                        <li>
                          However, you acknowledge that in the course of
                          providing the Services, the Company may receive SPI,
                          either when you voluntarily choose to update your
                          profile with information related to your identity,
                          physical and physiological condition or financial
                          information and you hereby consent and agree to allow
                          the Company to store and display the SPI collected in
                          this manner on the Website and disclose it in
                          accordance with the terms of this Policy.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="static-subtitle">USE OF INFORMATION</div>
                      <ol className="sublist">
                        <li>
                          We will use the information provided to us only for
                          the purpose of delivering our Services. The
                          information you provide to us helps us ensure that the
                          content you see and receive from us is relevant to
                          you. We may also use Personal Information for
                          auditing, research and analysis and to improve our
                          Services. When we use third parties to assist us in
                          processing your Personal Information, we require that
                          they comply with our Policy and any other appropriate
                          confidentiality and security measures. We may also
                          share such information with third parties in limited
                          circumstances, including when complying with legal
                          process, preventing fraud or imminent harm and
                          ensuring security of our network and services. We will
                          not share your personal information with third parties
                          unless otherwise indicated, or use your information
                          for any other purpose without your consent unless
                          legally required to do so.
                        </li>
                        <li>
                          You can view and/or change the personal information
                          you have provided to us at any time by clicking on the
                          "Profile" link in the Website, as and when such a
                          feature is enabled.
                        </li>
                        <li>
                          We use reasonable administrative, technical, personnel
                          and physical measures to safeguard personally
                          identifiable information in our possession against
                          loss, theft and unauthorized use, disclosure or
                          modification. We also employ procedures to protect
                          your information from any unauthorized access.
                          However, keeping in mind the vulnerability of
                          information stored online, we only strive to protect
                          the information provided by you to us, we do not
                          warrant the security of such information.
                        </li>
                        <li>
                          The email address you provide through our registration
                          process enables us to send you a digest of updates.
                          This subscription is entirely opt-in by the user.
                          Subscribers can opt-out of this digest at any time by
                          clicking the "Unsubscribe" link that is present on
                          every email at the very bottom of the newsletter. You
                          volunteer your email address and other identifying
                          information at the time of registration to our service
                          plans. We use your email address to inform you if
                          there is activity on your profile and we can use it to
                          send reports of our findings in the means opted by
                          you. We may at times request your participation in a
                          survey. We will not provide your email addresses to
                          any third party otherwise than for the purpose of data
                          analytics and advertising,
                        </li>
                        <li>
                          We also use information you give us through surveys to
                          help our advertisers target the audience they want to
                          reach and to provide you with potentially interesting
                          advertisements. The only exceptions to the foregoing
                          are that we may disclose personally identifiable
                          information.
                          <ol className="sublist">
                            <li>
                              in response to legal process, for example, in
                              response to a court order or subpoena,
                            </li>
                            <li>
                              in response to a law enforcement agency's request,
                              or where we believe it is necessary to
                              investigate, prevent, or take actions regarding
                              illegal activities, suspected fraud, situations
                              involving potential threats to the physical safety
                              of another person, violations of our Terms of Use,
                              or as otherwise required by law, or
                            </li>
                            <li>
                              in the event we are acquired by or merged with
                              another company.
                            </li>
                          </ol>
                        </li>
                        <li>
                          Non-personally identifiable information (such as
                          stated in Clause 3 above) may be shared in aggregate
                          form on our Website or with our advertisers, business,
                          or marketing partners but your personally identifiable
                          information will never be disclosed to them.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="static-subtitle">COOKIE POLICY</div>
                      <ol className="sublist">
                        <li>
                          Some of our web pages and Services may also utilize
                          “cookies” and other tracking technologies. A “cookie”
                          is a small text file that may be used, for example, to
                          collect information about your activity on our
                          Website. Some cookies and other technologies may serve
                          to recall Personal Information previously indicated by
                          you.
                        </li>
                        <li>
                          Most browsers allow you to control cookies, including
                          whether or not to accept them and how to remove them.
                          You may set most browsers to notify you if you receive
                          a cookie, or you may choose to block cookies with your
                          browser, but please note that if you choose to erase
                          or block your cookies, you may need to re-enter
                          certain information to gain access to certain parts of
                          the Website.
                        </li>
                        <li>
                          Tracking technologies may automatically record
                          information such as Internet domain and host names;
                          other information about your geographic location; IP
                          addresses; browser software and operating system
                          types; CPU type; your manner of connecting to the
                          Internet (e.g., connection speed through narrowband or
                          broadband access); click paths; dates and times that
                          our Website is accessed; and duration of use of our
                          Services.
                        </li>
                        <li>
                          Our use of cookies and other tracking technologies
                          allows us to improve our Website and Services and
                          consequently your experience with it. We may also
                          analyze information that does not include Personal
                          Information for trends and statistics.
                        </li>
                        <li>
                          Services provided by the third parties where you have
                          an account or use these Services, which allow to share
                          information, watch videos and so on, are subject to
                          the privacy policy of those third party service
                          providers. Such Services enable us to provide enhanced
                          functionality and more features on the Website and
                          platform, but the use of the data collected through
                          these cookies by third parties are under the rule of
                          their privacy policy.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="static-subtitle">
                        LINKS TO OTHER WEBSITES
                      </div>
                      <p>
                        Our Website may contain links to other third party
                        websites of interest. However, once you click on these
                        links you will leave our Website. You should note that
                        we do not have any control over such third party
                        websites. Because we cannot control the activities of
                        third parties, we cannot accept responsibility for any
                        use of your Personal Information by such third parties
                        while visiting such sites and such sites are not
                        governed by this Policy. You should exercise caution and
                        look at the privacy policy applicable to the website in
                        question before providing any Personal Information.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">
                        CONFIDENTIALITY AND SECURITY
                      </div>
                      <ol className="sublist">
                        <li>
                          We will keep confidential and protect your Personal
                          Information except where disclosure is required or
                          permitted by law.
                        </li>
                        <li>
                          We follow generally accepted industry standards to
                          protect the SPI and Personal Information submitted to
                          us, both during transmission and, once we receive it,
                          for storage and disposal. When you enter sensitive
                          information on our registration or order forms, we
                          encrypt that information using secure socket layer
                          technology (SSL). All information we gather is
                          securely stored within databases controlled by us. The
                          databases are stored on servers secured behind a
                          firewall; access to the servers is password-protected
                          and is strictly limited. However, no method of
                          transmission over the Internet, or method of
                          electronic storage, is 100% secure. Therefore, while
                          we strive to use commercially acceptable means to
                          protect your SPI and Personal Information, we cannot
                          guarantee its absolute security.
                        </li>
                        <li>
                          We limit access to SPI and Personal Information to
                          employees, agents, advisors and consultants who we
                          believe reasonably need to come into contact with that
                          information to provide products or Services to you or
                          in order to do their jobs.
                        </li>
                        <li>
                          Third parties provide certain Services available on
                          our Website and on our behalf. We may provide
                          information, including Personal Information, to
                          third-party service providers to help us deliver our
                          products, information, and Services efficiently and
                          effectively. Service providers are also an important
                          means by which we maintain our Website and mailing
                          lists. We will take reasonable steps to ensure that
                          these third- party service providers are obligated to
                          protect Personal Information on our behalf through
                          confidentiality agreements and otherwise. We do not
                          intend to transfer Personal Information without your
                          consent to third parties who are not bound to act on
                          our behalf unless such transfer is legally required.
                          Similarly, it is against our policy to sell Personal
                          Information collected online without consent.
                        </li>
                        <li>
                          If you choose to provide us with your SPI Personal
                          Information, we may transfer that SPI and Personal
                          Information from your country or jurisdiction to other
                          countries or jurisdictions around the world. Your SPI
                          and Personal Information may be collected and stored
                          on servers located in such countries as we may
                          disclose from time to time.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="static-subtitle">CONTACTING YOU</div>
                      <p className="text-b">
                        We may contact you using the Personal Information you
                        have given us:
                      </p>
                      <ol className="sublist">
                        <li>
                          in relation to the functioning of any service you have
                          signed up for in order to ensure that we can deliver
                          the Services to you;
                        </li>
                        <li>
                          in relation to any transaction entered by you on our
                          Website;
                        </li>
                        <li>
                          where you have opted to receive further
                          correspondence;
                        </li>
                        <li>
                          where you have issued a query or requested information
                          from us;
                        </li>
                        <li>
                          for delivery of newsletters you have subscribed to;
                        </li>
                        <li>
                          to invite you to participate in surveys, opinion
                          polls, etc., about our Services or otherwise
                          (participation is always voluntary); and
                        </li>
                        <li>
                          to provide you information about our new products and
                          Services.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="static-subtitle">CHANGE OF CONTROL</div>
                      <p className="text-b">
                        In the event that ownership or control of the Company
                        was to change, your SPI and Personal Information may be
                        transferred. If such a transfer results in a material
                        change in the use of your SPI and Personal Information,
                        the Company will provide notice about the choices you
                        have to decline to permit such a transfer.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">ACCURACY</div>
                      <p className="text-b">
                        To the extent that you do provide us with Personal
                        Information and SPI, we wish to maintain accurate and
                        current Personal Information and SPI. Where we collect
                        Personal Information from you in the course of providing
                        Services, should you need to update or correct that
                        Personal Information, please contact us and we will make
                        reasonable efforts to incorporate the changes in your
                        Personal Information that we hold as soon as
                        practicable. You can obtain the information we currently
                        hold on you by emailing the Company at
                        [info@nanoyotta.com]. We will use our best efforts to
                        send you the information within 14 days of receipt of
                        your email.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">
                        TERMINATION OF USER ACCOUNT
                      </div>
                      <p className="text-b">
                        In the event that you choose to terminate and delete
                        your user account with the Company, or if your account
                        has been terminated for any other reason, such as a
                        violation of the Terms of Use, the Company shall within
                        a reasonable time, delete and remove all SPI and
                        Personal Information that you may have submitted and
                        stored in your account with the Website. You acknowledge
                        and agree that generic, non- personally identifiable
                        information may continue to be stored and/or displayed
                        by the Company as a part of any surveys or research or
                        tabulations compiled on the Website.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">
                        CONSENT; AMENDMENTS; LAW
                      </div>
                      <ol className="sublist">
                        <li>
                          By using this Website and the Services, you consent to
                          the terms of this Policy and to our use and management
                          of Personal Information for the purposes and in the
                          manner herein provided. Should this Policy change, we
                          intend to take every reasonable step to ensure that
                          these changes are brought to your attention by posting
                          all changes prominently on our Website for a
                          reasonable period of time.
                        </li>
                        <li>
                          Your visit and any dispute over privacy are subject to
                          this Policy. The said Policy shall be governed by and
                          construed in accordance with the laws of India
                          Further, it is irrevocably and unconditionally agreed
                          that the courts of Indiashall have exclusive
                          jurisdiction to entertain any proceedings in relation
                          to any disputes arising out of this Policy.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="static-subtitle">RETENTION OF DATA</div>
                      <ol className="sublist">
                        <li>
                          We reserve the right to retain data in perpetuity to
                          enable us to respond
                        </li>
                        <li>to legal process, or</li>
                        <li>
                          in response to a law enforcement agency's request, or
                          where we believe it is necessary to investigate,
                          prevent, or take actions against illegal activities,
                          suspected fraud, situations involving potential
                          threats to the physical safety of another person,
                          violations of our Terms of Use, or as otherwise
                          required by law.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Starts */}

          <footer id="footer">
            <div className="footer-bottom">
              <div className="footer-bottom-left">
                <div className="footer-brand">
                  <img src={logo} alt="" />
                </div>
                <div className="footer-copyright">Maplytiks &copy; 2019</div>
              </div>
              <div className="footer-bottom-right">
                <ul className="footer-legal">
                  <li>
                    <a href="index.html">Glossary</a>
                  </li>
                  <li>
                    <a href="index.html">Terms of Use</a>
                  </li>
                  <li>
                    <a href="index.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
          {/* Footer Ends */}
        </div>
        {/* Body Wrapper Ends */}
      </div>
      // Main Wrapper Ends
    );
  }
}

export default Privacy;
