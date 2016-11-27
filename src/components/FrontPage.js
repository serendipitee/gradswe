import React from 'react';
import ReactScroll from 'react-scroll';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {FaTwitterSquare, FaFacebookSquare, FaBeer, FaFemale, FaGroup, FaPlug} from 'react-icons/lib/fa';
import '../css/flexboxgrid.css';
import "../css/style.css";
import { gradSweCommittee } from '../committee.js';


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
				title="GradSWE@UIUC"
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
			<div id="section-intro" className="section row middle-xs">
					<div className="col-xs-offset-1 col-xs-8 col-sm-7 col-md-6 col-lg-5">
					<h1 style={{"textTransform":"uppercase"}}>Graduate Society of Women Engineers</h1>
					<h5 className="col-xs-9 no-pad">Promoting diversity and empowering women at the frontier of science and engineering. Join us at the University of Illinois at Urbana-Champaign.</h5>
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
						<div className="col-xs-12 col-sm-10 col-md-8 col-lg-8"><h4>Our Mission</h4><h3><blockquote>Is to promote diversity in graduate education, in engineering and science to enable innovative and creative solutions to the future technical challenges of society.</blockquote></h3></div>
						<div className="col-xs-10 col-sm-6 col-md-6 col-lg-6"><p>GradSWE is a support community for graduate women in science and engineering and for undergraduate women interested in pursuing graduate studies in these fields. We encourage women to pursue graduate studies, support them throughout their graduate education, and help prepare them for their future careers after they complete their degree.</p></div>
					</div>
				</div>

				<div id="section-events">
					<div className="container">
						<div className="row center-xs">
							<div className="col-xs-12"><h3>Explore Grad Life</h3></div>
						</div>
						<div className="row center-xs">
							<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"><h2><FaFemale/></h2>weSTEM Conference</div>
							<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"><h2><FaPlug/></h2>Professional Workshops</div>
							<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"><h2><FaGroup/></h2>Undergraduate Mentoring</div>
							<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"><h2><FaBeer/></h2>Socials</div>
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
			face: 'card unflipped'
		};
	},
	handleClick: function() {
		this.classList.toggle('hover');
	},
	render: function() {
		var yearMajor = this.props.data.year+" in "+this.props.data.major;
		return (
			<div className="flip-container" onTouchStart={this.handleClick}>

			<div className="flipper">
			<Paper zDepth={3}>
			<div className="front">
				<CardMedia
				overlay={<CardTitle title={this.props.data.name} subtitle={this.props.data.title} />}
				>
				<img src={this.props.data.src} alt={this.props.data.name} />
				</CardMedia>
			</div>
			<div className="back">
				<CardTitle title={this.props.data.email} subtitle={yearMajor} />
				<CardText>
				{this.props.data.about}
				</CardText>
			</div>
			</Paper>
			</div>
			</div>
		);
	}
});

var Committee = React.createClass({
	render: function () {

		return (
			<div id="section-committee" className="section no-pad-top">

				<div className="banner row middle-xs center-xs">
					<div className="col-xs-12"><h1>Our Committee</h1></div>
				</div>

				<div className="container">

					<div className="row center-xs">
						<div className="col-xs-12 col-sm-6 col-md-4 no-pad start-xs">
							<MemberCard key={gradSweCommittee[0].id} data={gradSweCommittee[0]}/>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 no-pad start-xs">
							<MemberCard key={gradSweCommittee[1].id} data={gradSweCommittee[1]}/>
						</div>
					</div>
					<br/>
					<div className="row">
						{gradSweCommittee.map(function(member) {
							if(member.id>2) {
							return 	<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 no-pad" key={member.id} ><MemberCard key={member.id} data={member}/></div>
							}
							return ""
						})}
					</div>

				</div>
			</div>
		);
	}
});

var Sponsors = React.createClass({
	render: function () {
		return (
			<div id="section-sponsors" className="section no-pad">
				<div className="banner2 row middle-xs center-xs">
					<div className="col-xs-12"><h1>Thank you to our sponsors</h1></div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xs-2"><h6>Gold Sponsors</h6></div>
						<div className="col-xs-10 row middle-xs">
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/coe.png" alt="College of Engineering at Illinois" style={{"width":"100%"}} /></div>
						</div>
					</div>
					

					<div className="row">
						<div className="col-xs-2"><h6>Silver Sponsors</h6></div>
						<div className="col-xs-10 row middle-xs">
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/mechse.png" alt="Mechanical Science and Engineering at Illinois" style={{"width":"100%"}} /></div>
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/cee.png" alt="Civil and Environmental Engineering at Illinois" style={{"width":"100%"}} /></div>
						</div>
					</div>


					<div className="row">
						<div className="col-xs-2"><h6>Bronze Sponsors</h6></div>
						<div className="col-xs-10 row middle-xs">
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/cs.png" alt="Computer Science at Illinois" style={{"width":"100%"}} /></div>
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/chbiomolecular.png" alt="Chemical and Biomolecular Engineering at Illinois" style={{"width":"100%"}} /></div>
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/gradcollege.png" alt="The Graduate College at Illinois" style={{"width":"100%"}} /></div>
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/AgBio_scale.png" alt="Agricultural and Biological Engineering at Illinois" style={{"width":"100%"}} /></div>
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/Caterpillar-logo_scale.jpg" alt="Caterpillar"  style={{"width":"100%"}} /></div>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-2"><h6>Basic Sponsors</h6></div>
						<div className="col-xs-10 row middle-xs">
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/ihsi.png" alt="Interdisciplinary Health Sciences Initiative at Illinois" style={{"width":"100%"}} /></div>
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/beckman.jpg" alt="Beckman Institute" style={{"width":"100%"}} /></div>
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/igb.jpg" alt="Carl R. Woese Institute for Genomic Biology" style={{"width":"100%"}} /></div>
							<div className="col-xs-12 col-sm-4"><img src="../images/sponsors/ise.png" alt="Industrial and Enterprise Systems Engineering at Illinois" style={{"width":"100%"}} /></div>
						</div>
					</div>

				</div>

				<div className="banner3 row middle-xs">

					<div className="container">
						<div className="row center-xs start-sm">
							<div className="col-xs-12 col-sm-8 start-sm"><h1>Become our sponsor</h1></div>
						</div>
						<div className="row center-xs start-sm">
							<div className="col-xs-10 col-sm-6 col-md-5 col-lg-5 start-sm">
								<p>Contact us at weSTEMcorporate@gmail.com to find out more about our sponsorship options.</p>
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
							<h4><a href="https://www.facebook.com/groups/GradSWE.Illinois/" target="_blank"><FaFacebookSquare/></a><a href="https://twitter.com/GradSWEillinois" target="_blank"><FaTwitterSquare/></a></h4>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<h6 className="white-text">Resources</h6>
							<ul>
								<li><a href="#" target="_blank">weSTEM</a></li>
								<li><a href="https://swegrad.wordpress.com/" target="_blank">National SWE Graduate Blog</a></li>
								<li><a href="http://societyofwomenengineers.illinois.edu/" target="_blank">Undergraduate SWE</a></li>
								<li><a href="http://www.grad.illinois.edu/" target="_blank">The Graduate College</a></li>
								{/*<li><a href="http://www.grad.illinois.edu/extfellowships" target="_blank">Office of External Fellowships</a></li>*/}
								<li><a href="http://mckinley.illinois.edu/" target="_blank">McKinley Health Center</a></li>
								<li><a href="https://campusrec.illinois.edu/" target="_blank">Campus Recreation</a></li>
								<li><a href="https://krannertcenter.com/" target="_blank">Kranner Center</a></li>
								<li><a href="http://www.uofiassemblyhall.com/" target="_blank">Assembly Hall</a></li>
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
