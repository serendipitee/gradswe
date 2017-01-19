import React from 'react';
import ReactScroll from 'react-scroll';
import AppBar from 'material-ui/AppBar';
// import Paper from 'material-ui/Paper';
import {CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {FaTwitterSquare, FaFacebookSquare, FaInstagram, FaBriefcase, FaHashtag, FaGroup, FaPlug, FaGlobe} from 'react-icons/lib/fa';
import '../css/flexboxgrid.css';
import "../css/style.css";
import { gradSweCommittee } from '../committee.js';
import { gradSweSponsors } from '../sponsors.js';



var Link		= ReactScroll.Link;
var scroll 		= ReactScroll.animateScroll;

var NavigationTop = React.createClass({
	// handleClick: function(event) {
	// 	var sect = document.getElementById("section-"+event.currentTarget.id);
	// 	sect.scrollIntoView({behavior: "smooth"});
	// },
	handleTouchTap: function() {
		scroll.scrollToTop();
	},
	test: function() {
		alert("hi");
	},
	render: function() {
		var appTabs = (
			<div id="mainMenu">
			<ul>
				<li><Link activeClass="active-link" to="section-about" spy={true} smooth={true} duration={500} isDynamic={true}>About</Link></li>
				<li><Link activeClass="active-link" to="section-committee" spy={true} smooth={true} duration={500} isDynamic={true}>Committee</Link></li>
				<li><Link activeClass="active-link" to="section-sponsors" spy={true} smooth={true} duration={500} isDynamic={true}>Sponsors</Link></li>
				<li><Link activeClass="active-link" to="section-contact" spy={true} smooth={true} duration={500} isDynamic={true}>Contact</Link></li>
			</ul>
			</div>
		);
		return (
			<AppBar
				title="GradSWE@Illinois"
				style={{"position":"fixed"}}
				iconElementLeft={<b></b>}
				iconElementRight={appTabs}
				onTitleTouchTap={this.handleTouchTap}
			>
			</AppBar>
		);
	}
});

var FrontPage = React.createClass({
	render: function() {
		return (
			<div>
				<NavigationTop />
				<Header />
				<About />
				<Committee />
				<Sponsors />
				<Footer />
			</div>
		);
	}
});

var Header = React.createClass({
	render: function () {
		return (
			<div id="section-intro" className="section">
				<div className="row middle-xs">
					<div className="col-xs-offset-1 col-xs-8 col-sm-7 col-md-6 col-lg-5">
					<h1 style={{"textTransform":"uppercase"}}>Graduate Society of Women Engineers</h1>
					<h5 className="col-xs-9 no-pad">Promoting diversity and empowering women at the frontiers of science and engineering. Join us at the University of Illinois at Urbana-Champaign.</h5>
					</div>
				</div>
			</div>
		);
	}
});


var About = React.createClass({
	render: function () {
		return (
			<div id="section-about" className="section no-pad-bottom">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-10 col-md-8 col-lg-8"><h4>Our Mission</h4><h3><blockquote>Is to promote diversity in graduate education in science and engineering, enabling a diverse workforce ready to tackle society's greatest technological challenges with innovation and creativity.</blockquote></h3></div>
						<div className="col-xs-10 col-sm-6 col-md-6 col-lg-6"><p>We are a support community and advocate for graduate women in science and engineering as well as undergraduate women interested in pursuing graduate studies in these fields. We encourage women to pursue graduate school, support them throughout their graduate education, and help prepare them for their future careers. GradSWE is an inclusive organization and welcomes participation from women and men in STEM.</p></div>
					</div>
				</div>

				<div id="section-events">
					<div className="container">
						<div className="row center-xs">
							<div className="col-xs-12"><h3>Explore Grad Life</h3></div>
						</div>
						<div className="row center-xs">
							<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><h2><FaGroup/></h2><h5>Undergraduate Outreach</h5>
								<p>Inform and inspire undergraduate SWE members by answering their questions about graduate school and the application process during our informal coffee chats. Coffee chats are organized monthly and focus on different topics from taking the GREs to finding a graduate studies advisor.</p>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><h2><FaPlug/></h2><h5>Professional Development</h5>
								<p>Monthly lunches focus on topics from learning creativity as a skill to best practices for successful interdisciplinary research. Invited speakers come from all over campus, including Research Park, as well as our corporate sponsors.</p>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><h2><FaGlobe/></h2><h5>weSTEM Conference</h5>
								<p>Our Women Empowered in STEM or weSTEM conference is a one-day event for current and future STEM leaders to inspire one another to excel in her discipline and develop solutions for next generation of technological challenges faced by our global community. </p>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><h2><FaBriefcase/></h2><h5>iFEAT Program</h5>
								<p>iFEAT is a program started by GradSWE in 2014 to prepare women graduate students and post doctoral students for the faculty application process. The program includes seminars and peer review sessions, empowering participants to create highly competitive personal application materials.</p>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><h2><FaHashtag/></h2><h5>Social Events</h5>
								<p>Come hang out with us! Our social events committee organizes regular activities, including happy hours, ice skating, and laser tag competitions!</p>
							</div>
						</div>
					</div>
				</div>

				<div id="sweekly">
					<div className="container">
						<div className="row">
							<div className="col-xs-8"><h4>GradSWEekly</h4></div>
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<p>Add yourself to our mailing list. You will receive our GradSWE weekly emails detailing upcoming events and important announcements.</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
								<RaisedButton label="Sign up" primary={true} fullWidth={true} href="https://docs.google.com/a/illinois.edu/forms/d/e/1FAIpQLScH-iYwqBBlmISc56Fs24Bu7ytAVVHx6wfYIDrG_zNZKQMHaw/viewform"/>
							</div>
						</div>
					</div>
				</div>

			</div>


		);
	}
});



var MemberCard = React.createClass({

	getInitialState: function() {
		return {
			open: false
		};
	},
	handleOpen: function() {
		this.setState({open: true});
	},

	handleClose: function() {
		this.setState({open: false});
	},

	render: function() {
		var yearMajor = this.props.data.year+" in "+this.props.data.major;

		return (
			<div>
				<CardMedia
				onTouchTap={this.handleOpen}
				overlay={<CardTitle title={this.props.data.name} subtitle={this.props.data.title} />}
				>
				<img src={this.props.data.src} alt={this.props.data.name} />
				</CardMedia>
				<Dialog
				title={<CardTitle title={this.props.data.email} subtitle={yearMajor} />}
				modal={false}
				open={this.state.open}
				onRequestClose={this.handleClose}>
					<CardText>{this.props.data.about}</CardText>
				</Dialog>
			</div>
		);
  	}
});

var Committee = React.createClass({
	render: function () {

		return (
			<div id="section-committee" className="section no-pad-top">

				<div className="banner row middle-xs center-xs">
					<div className="row middle-xs center-xs"><div className="col-xs-12"><h1>Our Committee</h1></div></div>
				</div>

				<div className="container">

					<div className="row center-xs">
						<div className="col-xs-12 col-sm-6 col-md-3 no-pad start-xs">
							<MemberCard key={gradSweCommittee[0].id} data={gradSweCommittee[0]}/>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3 no-pad start-xs">
							<MemberCard key={gradSweCommittee[1].id} data={gradSweCommittee[1]}/>
						</div>
					</div>
					<br/>
					<div className="row">
						{gradSweCommittee.map(function(member) {
							if(member.id>2) {
							return 	<div className="col-xs-12 col-sm-4 col-md-3 no-pad" key={member.id} ><MemberCard key={member.id} data={member}/></div>
							}
							return ""
						})}
					</div>

				</div>
			</div>
		);
	}
});



var CorpSponsorsByLevel = React.createClass({
	render: function () {
		return (
			<div className="row middle-xs">
				{this.props.data.map(function(sponsor) {
					return 	<div className="col-xs-12 col-sm-3" key={sponsor.src}><img src={sponsor.src} alt={sponsor.name} style={{"maxHeight":"25vh", "maxWidth":"100%"}} /></div>
				})}
			</div>
		);
	}
});

var IlliniSponsorsByLevel = React.createClass({
	render: function () {
		return (
			<div className="row no-pad">
				{this.props.data.map(function(sponsor) {
					return 	<div className="col-xs-12 col-sm-3" key={sponsor.src}><small><a href={sponsor.src} target="_blank">{sponsor.name}</a></small></div>
				})}
			</div>
		);
	}
});


var Sponsors = React.createClass({
	render: function () {
		return (
			<div id="section-sponsors" className="section no-pad">
				<div className="banner2 row middle-xs center-xs">
					<div className="row middle-xs center-xs"><div className="col-xs-12"><h1>Thank you to our sponsors</h1></div></div>
				</div>
				<div className="container">
				<div className="row"><h5 style={{"textTransform":"uppercase"}}>Corporate Sponsors</h5></div>
				{
					Object.keys(gradSweSponsors[0]).map(function(key) {
						return 	<div key={key}><div className="row"><p style={{"textTransform":"capitalize"}}>{key}</p></div><CorpSponsorsByLevel data={gradSweSponsors[0][key]}/></div>
					})
				}
				<div className="row"><h5 style={{"textTransform":"uppercase"}}>Illinois Sponsors</h5></div>
				{
					Object.keys(gradSweSponsors[1]).map(function(key) {
						return 	<div key={key}><div className="row"><p style={{"textTransform":"capitalize"}}>{key}</p></div><IlliniSponsorsByLevel data={gradSweSponsors[1][key]}/></div>
					})
				}



				</div>

				<div className="banner3">

					<div className="container">
						<div className="row center-xs start-sm">
							<div className="col-xs-12 col-sm-8 start-sm"><h1>Become our sponsor</h1></div>
						</div>
						<div className="row center-xs start-sm">
							<div className="col-xs-10 col-sm-6 col-md-5 col-lg-5 start-sm">
								<p>Help us grow our community and continue to support women in STEM by becoming a GradSWE sponsor! Contact us at <b>gradswe-funding@illinois.edu</b> to learn more about sponsorship levels and the benefits of sponsoring GradSWE.</p>
							</div>
						</div>
					</div>

				</div>



			</div>
		);
	}
});

var Footer = React.createClass({
	render: function() {
		return (
			<footer id="section-contact" className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<h6 className="white-text">Contact Us</h6>
							<p>Engineering Hall 110A<br/>1308 W Green St. Urbana, IL 61801<br/>217.244.8867</p>
							<h4><a href="https://www.facebook.com/groups/GradSWE.Illinois/" target="_blank"><FaFacebookSquare/></a><a href="https://twitter.com/GradSWEillinois/" target="_blank"><FaTwitterSquare/></a><a href="https://www.instagram.com/gradsweillinois/" target="_blank"><FaInstagram/></a>
							</h4>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<h6 className="white-text">Resources</h6>
							<ul>
								<li><a href="https://swegrad.wordpress.com/" target="_blank">National SWE Graduate Blog</a></li>
								<li><a href="http://societyofwomenengineers.swe.org/" target="_blank">National SWE Organization</a></li>
								<li><a href="http://societyofwomenengineers.illinois.edu/" target="_blank">SWE at Illinois</a></li>
								<li><a href="http://ec.illinois.edu/" target="_blank">Engineering Council</a></li>
								<li><a href="http://engineering.illinois.edu/" target="_blank">College of Engineering</a></li>
								<li><a href="http://researchpark.illinois.edu/" target="_blank">Research Park</a></li>
								<li><a href="http://www.grad.illinois.edu/" target="_blank">The Graduate College</a></li>
								<li><a href="http://mckinley.illinois.edu/" target="_blank">McKinley Health Center</a></li>
								<li><a href="https://campusrec.illinois.edu/" target="_blank">Campus Recreation</a></li>
								<li><a href="https://krannertcenter.com/" target="_blank">Krannert Center</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer-copyright">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-6">© 2016-2017 Copyright Graduate Society of Women Engineers.</div>
							<div className="col-xs-12 col-sm-6 end-sm">University of Illinois at Urbana-Champaign</div>
						</div>
					</div>
				</div>
			</footer>


		);
	}

});


export default FrontPage;
