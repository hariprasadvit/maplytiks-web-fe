/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from 'images/logo-tagline.png';

class TermsOfUse extends Component {
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
              <div className="section-title">Terms of Use</div>
              <div className="static-block">
                <div className="static-content">
                  <p>
                    This website: Maplytiks.com (“Website”) is owned and
                    operated by Nanoyotta Technologies Private Ltd (“Company”).
                    The Website contains a state-of- the-art dashboard that
                    provides a dynamic real-time brand measurement and
                    management technology that serves global sports and
                    entertainment stakeholders such as rights holders, brands,
                    agencies and broadcasters. Maplytiks, being the product
                    developed the Company, uses the latest machine learning and
                    computer vision technology to provide clients with a
                    holistic value of their brand exposure on-screen with focus
                    on speed, accuracy and real-time delivery (collectively
                    “Services”). By browsing, viewing, using the Website or the
                    Services provided therein, you consent to and agree to
                    comply with these terms and conditions of use (“Terms” or
                    “Terms of Use”). These Terms together with our Privacy
                    Policy available at [Maplytiks.com/PrivacyPolicy] (“Privacy
                    Policy”) govern the Company’s relationship with you in
                    relation to this Website and the Services.
                  </p>

                  <p>
                    The terms ‘Company’ or ‘us’ or ‘we’ refer to the owners of
                    this Website. The term ‘you’ refers to the user or viewer of
                    our Website.
                  </p>

                  <p>
                    The Company provides the Services subject to the notices,
                    terms, and conditions set forth in these Terms of Use. In
                    addition, when you avail of any of the Services, you will be
                    subject to the rules, guidelines, policies, terms, and
                    conditions applicable to such specific Service, which will
                    be deemed to be incorporated into these Terms of Use by
                    reference. Except where additional terms and conditions are
                    provided which are product and/or service specific, these
                    Terms supersede all previous representations, understandings
                    or agreements and shall prevail notwithstanding any variance
                    with any other terms of any order submitted.
                  </p>

                  <p>
                    By using the Website or any of the Services, you are
                    agreeing to be bound by the Terms of Use. Please read the
                    Terms carefully before registering or using the Website or
                    the Services. If you do not accept the Terms of Use, then
                    you may not use the Website or any of the Services. You
                    agree that any other additional documents that you may be
                    required to enter into to use this Website or to avail the
                    Services are incorporated by reference into these Terms.
                  </p>

                  <p>
                    The Company reserves the right to change or modify the
                    Website, the contents thereof and these Terms of Use at any
                    time without any prior intimation to you. All modifications
                    will be posted on the Website and will become effective
                    immediately upon such posting to the Website. Please review
                    these Terms of Use regularly to remain informed of any
                    change. These Terms were last modified on [11 May 2018].
                  </p>

                  <p>
                    ACCESSING, BROWSING OR OTHERWISE USING THE WEBSITE INDICATES
                    YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS IN THESE
                    TERMS, AS MODIFIED FROM TIME TO TIME. THEREFORE, PLEASE READ
                    THESE TERMS CAREFULLY BEFORE PROCEEDING.
                  </p>

                  <div className="static-title">ELIGIBILITY</div>

                  <ol>
                    <li>
                      You will be eligible to use the Services on the Website
                      only if you are competent to contract under the laws of
                      India.
                    </li>
                    <li>
                      By initiating the registration process as provided for on
                      the Website and accepting these Terms, you represent and
                      warrant to the Company that you are 18 years of age or
                      older, and that you have the right, authority and capacity
                      to use the Website and agree to abide by these Terms. You
                      also represent and warrant to the Company that you will
                      use the Website and the services in a manner consistent
                      with any and all applicable laws and regulations.
                    </li>
                    <li>
                      Use of the Website and/or the Services is not available to
                      persons whose membership has been rejected, suspended or
                      terminated by the Company for any reason whatsoever.
                    </li>
                  </ol>

                  <div className="static-title">
                    REGISTRATION AND MEMBERSHIP
                  </div>

                  <ol>
                    <li>
                      You can visit the Website, register yourself and create a
                      user id and password with the Website. Initially, however,
                      we shall create the user id and password and facilitate
                      the signup process.
                    </li>
                    <li>
                      Additionally, you will have to check the box confirming
                      that you have read and agreed to these Terms of Use and
                      the Company’s Privacy Policy available at
                      [Maplytiks.com/PrivacyPolicy].
                    </li>
                    <li>
                      nformation sought at the time of registration may include
                      your name, date of birth, mobile number, financial
                      information (such as bank account details or credit card
                      numbers), email address, and place of residence. Further,
                      additional information will also be required by means of
                      briefing sheet including but not limited to details of the
                      project, brands, matches and broadcast, for the purpose of
                      providing the Services.
                    </li>
                    <li>
                      You warrant that all the information provided by you are
                      true, accurate and complete. All such information provided
                      by you shall be kept confidential in accordance with our
                      Privacy Policy. You hereby agree to immediately inform the
                      Company of any change that you may make with regard to the
                      information provided to the Company.
                    </li>
                    <li>
                      When you register at our Website, you will create a
                      password and a user id, which will provide you access to
                      the Services and materials available at the Website,
                      unless revoked by us for any reason. Your account is for
                      your sole, personal use, you may not authorise others to
                      use your account nor may you assign or otherwise transfer
                      your account to any other person or entity. You are
                      responsible for the security of your password and will be
                      solely liable for any use or unauthorised use under such
                      password. You agree to be responsible for and to
                      indemnify, defend and hold us and our officers, directors,
                      employees, agents, licensors, and suppliers, harmless from
                      any injury, loss or damage we incur on account of any
                      unauthorised use of your login name or password.
                    </li>
                    <li>
                      Where the engagement has been terminated either for cause
                      or by reason of elapse of time, which terms shall more
                      fully be detailed in the service level agreement executed
                      with the Company, your access to the dashboard shall be
                      suspended after a certain period from the date of such
                      termination, which period shall also be determined in the
                      said agreement.
                    </li>
                    <li>
                      The Company reserves the right to terminate your user
                      account if it finds that you are in breach of the
                      eligibility criteria set out above or violate any of the
                      Terms set out herein, in its sole and absolute
                      determination.
                    </li>
                  </ol>

                  <div className="static-title">WEBSITE CONTENT</div>

                  <ol>
                    <li>
                      This Website is controlled and operated by the Company.
                      All materials, including illustrations, statements,
                      opinions, suggestions, information, ideas, comments,
                      documents, questions, notes, proposals, views, messages,
                      tags, photographs, products, images, artwork, designs,
                      text, graphics, logos, button icons, images, audio and
                      video clips and software (collectively, “Content”) are
                      protected by copyrights, trademarks and other intellectual
                      property rights that are owned and controlled by us or by
                      other parties that have licensed their material to us.
                    </li>
                    <li>
                      Except where otherwise agreed in writing with the Company,
                      material on the Website is solely for reference. You must
                      not copy, reproduce, republish, upload, post, transmit or
                      distribute such material in any way, including by e-mail
                      or other electronic means and whether directly or
                      indirectly and you must not assist any other person to do
                      so.
                    </li>
                    <li>
                      Without the prior written consent of the Company,
                      modification of the materials, use of the materials on any
                      other website or networked computer environment or use of
                      the materials for any purpose other than for the purpose
                      mentioned in clause 3.2 is a violation of the copyrights,
                      trademarks and other proprietary rights, and is
                      prohibited.
                    </li>
                  </ol>

                  <div className="static-title">
                    CONTENT SUBMITTED TO THE WEBSITE
                  </div>

                  <ol>
                    <li>
                      You may be required to submit certain material to us, in
                      addition to the information required under briefing sheet.
                      By submitting any such material, you hereby grant the
                      Website a transferrable, sub-licensable, non-exclusive,
                      worldwide, royalty-free license to use, modify, display,
                      perform, distribute, translate and create derivative works
                      from any such material, including without limitation
                      distributing part or all of the material in any media
                      format through any media channels owned or operated by the
                      Company. You further understand and agree that the use of
                      such material in the manner aforesaid is solely in the
                      process of providing the Services.
                    </li>
                    <li>
                      By submitting any material to the Website, you hereby
                      agree, warrant and represent that: (a) the material does
                      not contain proprietary or confidential information, and
                      the provision of the material is not a violation of any
                      third-party’s rights; (b) all such material is accurate
                      and true, and (c) you are not entitled to compensation or
                      attribution from the Website in exchange for the material.
                    </li>
                    <li>
                      You acknowledge that the Website is under no obligation to
                      maintain the Service, or any information, materials,
                      submissions, or other matter you submit, post or make
                      available to or on the Service. We reserve the right to
                      withhold, remove and or discard any such material.
                    </li>
                    <li>
                      We undertake to keep all the materials submitted by you,
                      confidential and not to disclose it to anyone except to
                      our affiliates, officers, directors, employees, and
                      professional advisers, third party service providers, for
                      the purpose of Services, or where requested or required by
                      any court of competent jurisdiction or any competent
                      judicial, governmental supervisory or regulatory
                      authority.
                    </li>
                  </ol>

                  <div className="static-title">USE OF SERVICES</div>

                  <ol>
                    <li>
                      You agree that you will not violate any applicable law or
                      regulation in connection with your use of the Service.
                    </li>
                    <li>
                      You agree not to distribute, upload, download, post, email
                      or otherwise transmit any content that:
                      <ol className="sublist">
                        <li>
                          is unlawful, harmful, threatening, abusive, vulgar,
                          harassing, defamatory, obscene, pornographic, profane,
                          indecent, inflammatory, libellous, tortious, hateful;
                          or encourages another to engage in anything unlawful;
                        </li>
                        <li>
                          is libellous, defamatory, pornographic, obscene, lewd,
                          indecent, inappropriate, invasive of privacy or
                          publicity rights, abusing, harassing, threatening,
                          bullying or otherwise objectionable;
                        </li>
                        <li>
                          racially, ethnically, socially, politically, legally,
                          morally, religiously objectionable or otherwise
                          objectionable; or
                        </li>
                        <li>
                          contains a virus or any other similar programs or
                          software which may damage the operation of the
                          Website; or violates the rights of any party or
                          infringes upon the patent, trademark, trade secret,
                          copyright, or other intellectual property right of any
                          party (including rights of privacy or publicity).
                        </li>
                      </ol>
                    </li>
                    <li>
                      You further agree that you will not do any of the
                      following.
                      <ol className="sublist">
                        <li>
                          modify, adapt, translate, copy, reverse engineer,
                          decompile or disassemble any portion of the Service or
                          the Website;
                        </li>
                        <li>
                          interfere with or disrupt the operation of the
                          Service, including restricting or inhibiting any other
                          person from using the Service by means of hacking or
                          defacing;
                        </li>
                        <li>
                          transmit to or make available in connection with the
                          Service any denial of service attack, virus, worm,
                          Trojan horse or other harmful code or activity;
                        </li>
                        <li>
                          attempt to probe, scan or test the vulnerability of a
                          system or network or to breach security or
                          authentication measures without proper authorization;
                        </li>
                        <li>
                          take any action that imposes, or may impose, in our
                          sole discretion, an unreasonable or disproportionately
                          large load on our infrastructure;
                        </li>
                        <li>
                          harvest or collect the email address or other contact
                          information of other users of the Service;
                        </li>
                        <li>
                          scrape or collect content from the Service via
                          automated means;
                        </li>
                        <li>
                          submit, post or make available false, incomplete or
                          misleading information to the Service, or otherwise
                          provide such information to the Website; or,
                        </li>
                        <li>
                          impersonate any other person or business, or claim an
                          account associated with another individual or entity.
                        </li>
                      </ol>
                    </li>
                    <li>
                      You are not licensed to access any portion of the Service
                      that is not public, and you may not attempt to override
                      any security measures in place on the Service.
                    </li>
                    <li>
                      You hereby grant the Website permission to add content to
                      your user profile at its sole discretion, by uploading
                      content found on the website link that you post as your
                      official website or public profile in order to increase
                      the quality or presentation of your profile.
                    </li>
                    <li>
                      The Company will make all determinations as to what
                      content is appropriate in its sole discretion. It may
                      include, edit or remove any content at any time without
                      prior notice.
                    </li>
                    <li>
                      Notwithstanding the foregoing rules, the Website’s
                      unlimited right to terminate your access to the Service
                      shall not be limited to violations of these Terms.
                    </li>
                  </ol>

                  <div className="static-title">RESERVED RIGHTS</div>

                  <ol>
                    <li>
                      Without limitation to all other rights, we expressly
                      reserve the right at any time to:
                      <ol className="sublist">
                        <li>Modify the terms of these Terms;</li>
                        <li>
                          Change the Website, including eliminating or
                          discontinuing any content on or feature of the
                          Website, and/or adding new features, categories,
                          business models, offerings;
                        </li>
                        <li>
                          Terminate the membership/user account of any member
                          that does not comply with these terms;
                        </li>
                        <li>
                          Expressly quote our association with you for the
                          purpose of promotion of our products and Services.
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div className="static-title">WAIVERS</div>

                  <p>
                    You hereby waive any rights, whether existing or acquired in
                    future, that are attributable to you under any applicable
                    law, including (without limitation) any law, regulation or
                    order concerned with privacy or personality rights, in
                    relation to the matters contemplated herein, without any
                    claim for compensation.
                  </p>

                  <div className="static-title">LINKS TO OTHER WEBSITES</div>

                  <p>
                    Please note that this Website and certain information
                    delivered to you as part of the Services may contain links
                    provided by third parties. Any website, information or
                    Services accessed by or as a result of following such third
                    party links is at your sole risk. The content viewed through
                    any third party links is not endorsed in any manner by the
                    Company. The Company shall not be responsible for or liable
                    in any manner whatsoever for the content provided by such
                    third party links. Further, the accuracy of the content
                    provided through third party links has not been verified by
                    the Company and we provide no warranties with respect to the
                    same. Any information collected on websites visited through
                    such third party links is subject to the privacy policies of
                    such third party websites.
                  </p>

                  <div className="static-title">
                    WARRANTY AND LIABILITY DISCLAIMER
                  </div>

                  <ol>
                    <li>
                      The Company is constantly endeavoring to improve the
                      quality of Services provided to you. Due to this, the form
                      and nature of Services provided may change from time to
                      time without any prior notice to you. The Company reserves
                      the right to introduce and initiate new features,
                      functionalities, components to the Website and/or change,
                      alter, modify, suspend, discontinue or remove the existing
                      ones without any prior notice to you. Further, the Company
                      is entitled to discontinue (either permanently or
                      temporarily) one or more of the Services provided or
                      terminate the Website without any prior notice to you. The
                      Company may also prescribe certain limits on the use of
                      the Website and/or services or storage of Content and/or
                      user Content at its sole discretion without any prior
                      notice to you while at all times complying with the
                      Privacy Policy. In consideration for the Company granting
                      you access to and use of the Website and Services, you
                      agree that the Company and its third party providers and
                      partners may place such advertising on the Services or in
                      connection with the display of Content or information from
                      the Services, whether submitted by them or others.
                    </li>
                    <li>
                      The Website, all the materials and services, included on
                      or otherwise made available to you through this Website is
                      provided by the Company “as is” and “as available” basis
                      without any representation or warranties, express or
                      implied except otherwise specified in writing. Without
                      prejudice to the forgoing paragraph, the Company does not
                      warrant that:
                      <ol className="sublist">
                        <li>
                          This Website will be constantly available, or
                          available at all; or
                        </li>
                        <li>
                          The quality of any products, services, information or
                          other material that you obtain through Website or
                          Services will meet your expectations.
                        </li>
                      </ol>
                    </li>
                    <li>
                      The Company, to the fullest extent permitted by law,
                      disclaims all warranties, whether express or implied,
                      including the warranty of merchantability, fitness for
                      particular purpose and non-infringement. The Company makes
                      no warranties about the accuracy, reliability,
                      completeness, or timeliness of the content, services,
                      software, text, graphics and links.
                    </li>
                    <li>
                      The Company does not warrant that this Website;
                      information, content, materials, or services included on
                      or otherwise made available to you through this Website;
                      their servers; or electronic communication sent from by
                      the Company are free of viruses or other harmful
                      components. The Company utilises safeguards and industry
                      best practices to protect the Website from hackers,
                      sniffers and malicious modification tools, however, it
                      does not warrant that the Website or the Services shall be
                      completely safe from such attacks at any period of time.
                      You acknowledge and agree that the Company cannot and does
                      not pre-screen or approve any information or
                      advertisements provided by a third party that is or may be
                      available through the Website (“Third Party Information”),
                      but that the Company has the right, in its sole and
                      absolute discretion, to refuse, delete or move any Third
                      Party Information that is or may be available through the
                      Website, for violating these Terms and such violation
                      being brought to Company’s knowledge or for any other
                      reason or no reason at all.
                    </li>
                  </ol>

                  <div className="static-title">ACCURACY OF INFORMATION</div>

                  <p>
                    The information presented on this Website has been compiled
                    by the Company from various sources including from external
                    sources. No representation is made or warranty given as to
                    the completeness or accuracy of such information. This
                    Website may contain typographical errors, incomplete or out
                    of date information. The Company reserves the right to make
                    changes to the Content, user Content and information on this
                    Website, or to the Services described therein, or update
                    such information at any time without notice, but the Company
                    makes no commitment to correct or update this information.
                  </p>

                  <div className="static-title">PROPRIETARY RIGHTS</div>

                  <p>
                    The Company is the exclusive owner of all software,
                    algorithm, graphics, designs and all copyrights, trademarks
                    and other intellectual property or proprietary rights
                    contained on or used in connection with Service.
                  </p>

                  <div className="static-title">INTELLECTUAL PROPERTY</div>

                  <ol>
                    <li>
                      The Website’s graphics, logos, names, designs, page
                      headers, button icons, scripts, and service names are
                      trademarks, trade names and/or trade dress of the Company.
                      The look and feel of the Service (including color
                      combinations, button shapes, layout, design and all other
                      graphical elements) are protected by Indian copyright and
                      trademark law. All product names, names of services,
                      trademarks and service marks (“Marks”) are the property of
                      the Company or the property of their respective owners, as
                      indicated. You may not use the Marks or copyrights for any
                      purpose whatsoever other than as permitted by these Terms.
                    </li>
                    <li>
                      You acknowledge that the software used to provide the
                      Service, and all enhancements, updates, upgrades,
                      corrections and modifications to the software, all
                      copyrights, patents, trade secrets, or trademarks or other
                      intellectual property rights protecting or pertaining to
                      any aspect of the software (or any enhancements,
                      corrections or modifications) and any and all
                      documentation therefor, are and shall remain the sole and
                      exclusive property of the Company and/or its licensors, as
                      the case may be. These Terms do not convey title or
                      ownership to you, but instead gives you only the limited
                      rights set forth herein.
                    </li>
                  </ol>

                  <div className="static-title">LICENSE TO THE COMPANY</div>

                  <p>
                    The Service will provide you with an opportunity to share
                    and upload details relating to your intellectual property
                    rights that you own, including but not limited to Content.
                    You hereby grant Company a perpetual license to use,
                    republish, copy, perform and distribute your Content and
                    screen name, including any intellectual property contained
                    therein, in any medium now known or hereinafter developed
                    without payment or compensation to you and without seeking
                    any further approval from you as part of the Service or in
                    support of the Service through advertising and marketing.
                    You acknowledge that nothing contained within your Content
                    would require us to seek permission of a third party in
                    order to use the Content as described in these Terms. You
                    also agree to waive any moral rights, or right to any
                    residual payment associated with Content if such Content is
                    published, sold, distributed, or otherwise commercially
                    exploited.
                  </p>

                  <div className="static-title">LIMITATION OF LIABLITY</div>

                  <ol>
                    <li>
                      In no event will the Company, its officers, directors,
                      employees or agents, be liable under any theory of tort,
                      contract, strict liability or other legal or equitable
                      theory for
                      <ol className="sublist">
                        <li>
                          any direct, indirect, special, incidental, or other
                          consequential damages, (ii)
                        </li>
                        <li>
                          costs of cover, exemplary, punitive, personal
                          injury/wrongful death,
                        </li>
                        <li>lost profits, lost data, lost opportunities,</li>
                        <li>error or inaccuracies in Services,</li>
                        <li>unauthorised access or use of our servers,</li>
                        <li>
                          any bugs or viruses which may be transmitted to our
                          server by any third party,
                        </li>
                        <li>
                          users’ submissions and Content regardless of whether
                          or not we have been advised of the possibility of such
                          damages. Notwithstanding anything stated above, our
                          aggregate liability, if any, arising out of these
                          Terms or the Service shall not exceed the aggregate
                          amount of fees actually collected by us from you for
                          the Services.
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div className="static-title">INDEMNITY</div>

                  <ol>
                    <li>
                      You agree to defend, indemnify and hold harmless the
                      Company, its officers, directors, employees, and agents,
                      from and against any and all claims, damages, obligations,
                      losses, liabilities, costs or debt, and expenses
                      (including but not limited to legal fees) arising from:
                      <ol className="sublist">
                        <li>
                          any breach by you of any of the terms of these Terms,
                          your Content,
                        </li>
                        <li>
                          your use of materials or features available on the
                          Service (except to the extent a claim is based upon
                          infringement of a third party right by materials
                          created by Company) or
                        </li>
                        <li>
                          a violation by you of applicable law or any agreement
                          or terms with a third party to which you are subject.
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div className="static-title">MISCELLANEOUS</div>

                  <ol>
                    <li>
                      <div className="static-subtitle">Waiver</div>
                      <p>
                        These Terms of Use contain the entire understanding of
                        the parties with respect to the subject matter contained
                        herein and supersedes all prior agreements and
                        understandings both oral and written between the parties
                        with respect to such subject matter.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">Governing Law</div>
                      <p>
                        These Terms of Use shall be governed and construed by
                        the laws of India. The parties irrevocably consent to
                        the exclusive jurisdiction of courts of Chennai only.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">Dispute Resolution</div>
                      <p>
                        Any and all disputes, controversies or claims arising
                        out of or in connection with or in relation to these
                        Terms shall be referred to the sole arbitrator chosen by
                        the Company, under the Arbitration and Conciliation Act,
                        1996, as amended. The decision of the arbitrator shall
                        be final and binding on the parties. The governing law
                        of the arbitration shall be the substantive laws of
                        India. The seat of arbitration shall be Chennai. The
                        proceedings of arbitration shall be conducted in
                        English. The provisions of this clause shall survive the
                        termination or expiry of these Terms.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">
                        Information Gathered and Tracked
                      </div>
                      <p>
                        Information submitted through all feedback forms on the
                        Website is stored in a database. Specifically, we store
                        the name, e-mail address, contact number of and social
                        networking account names supplied by visitors to our
                        Website to send out certain messages or information,
                        including but not limited to addition of a new feature,
                        suspension of an existing feature. Such messages or
                        information, may at times, require an appropriate reply
                        from you. Further, we also store financial information
                        of users who have purchased products or services from
                        Website. We also use such information to send out
                        occasional promotional materials, including alerts on
                        new services available. We guarantee that personal
                        information about users will not be provided to any
                        third party without their consent.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">Notice</div>
                      <p>
                        All notices given by you or required under these Terms
                        shall be in writing and addressed to info@nanoyotta.com.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">Severability</div>
                      <p>
                        If any paragraph, sub-paragraph, or provision of these
                        Terms, or the application of such paragraph, sub
                        paragraph, or provision is held invalid by a court of
                        competent jurisdiction, the remainder of these Terms,
                        and the application of such paragraph, sub paragraph or
                        provision to persons, or circumstances other than those
                        with respect to which it is held invalid shall not be
                        affected.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">
                        Entire Understanding
                      </div>
                      <p>
                        These Terms constitute the entire and only understanding
                        and agreement between the parties hereto with respect to
                        the subject matter hereof. All prior and contemporaneous
                        understandings, discussions or agreements with respect
                        to said subject matter are expressly superseded by these
                        Terms.
                      </p>
                    </li>
                    <li>
                      <div className="static-subtitle">Assignment</div>
                      <p>
                        The Company may assign its rights under these Terms, in
                        whole or in part, to any person or entity at any time
                        with or without your consent. You shall not assign your
                        rights under these Terms without the Company’s prior
                        written consent and any unauthorised assignment by you
                        shall be null and void.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Starts */}

          <footer id="footer">
            <div className="footer-top">
              {/* <div className="footer-top-left">
                <ul className="footer-quick-links">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="index.html">About</a>
                  </li>
                  <li>
                    <a href="index.html">How it works</a>
                  </li>
                  <li>
                    <a href="index.html">Why us</a>
                  </li>
                  <li>
                    <a href="index.html">Projects</a>
                  </li>
                </ul>
                <ul className="footer-social-links">
                  <li>
                    <a href="http://www.facebook.com">
                      <Icon path={mdiTwitter} size={0.8} />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.facebook.com">
                      <Icon path={mdiLinkedin} size={0.8} />
                    </a>
                  </li>
                </ul>
              </div>
   */}
            </div>

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

export default TermsOfUse;
