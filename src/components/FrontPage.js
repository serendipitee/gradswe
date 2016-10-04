import React from 'react';
import { gradSweCommittee } from '../committee.js';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import '../css/flexboxgrid.css';
import '../css/material-icons.css';
import "../css/style.css";




var FrontPage = React.createClass({
	render: function() {
		return (
			<div>
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
					<div className="col-xs-offset-1 col-xs-5">
					<h1 className="title-intro">Graduate Society of Women Engineers</h1>
					<p className="col-xs-9 no-pad">Promoting diversity and empowering women at the frontier of science and engineering. Join us at the University of Illinois at Urbana-Champaign.</p>
					</div>
			</div>
		);
	}
});


var About = React.createClass({
	render: function () {
		return (
			<div id="section-about" className="section">
				<div className="container">

					<div className="row">
						<div className="col s12"><h3 className="center-align">Our mission is to promote diversity in graduate education, in engineering and science to enable innovative and creative solutions to the future technical challenges of society.</h3></div>
						<div className="col s10 offset-s1"><h5>GradSWE is a support community for graduate women in science and engineering and for undergraduate women interested in pursuing graduate studies in these fields. We encourage women to pursue graduate studies, support them throughout their graduate education, and help prepare them for their future careers after they complete their degree. GradSWE advocates for women in graduate education so that they can confidently excel at the frontier of scientific advancement.</h5></div>
					</div>


				</div>
			</div>
		);
	}
});


// var MemberCard = React.createClass({
// 	render: function() {
// 		return (

// 			<div className="col s12 m6 l6">
// 				<div className="card horizontal hoverable">
// 					<div className="card-image">
// 						<img src={this.props.data.src} alt={this.props.data.name}/>
// 						<span className="card-title">{this.props.data.name}, {this.props.data.title}</span>
// 					</div>
// 					<div className="card-content"><p>{this.props.data.year} in {this.props.data.major}</p><p>{this.props.data.email}</p></div>
// 				</div>
// 			</div>

// 		);
// 	}
// });

var MemberCard = React.createClass({
	render: function() {
		var yearMajor = this.props.data.year+" in "+this.props.data.major;
		return (

				<Card>
				<CardMedia
				overlay={<CardTitle title={this.props.data.name} subtitle={this.props.data.title} />}
				>
				<img src={this.props.data.src} alt={this.props.data.name}/>
				</CardMedia>
				<CardTitle title={yearMajor} subtitle={this.props.data.email} actAsExpander={true} showExpandableButton={true} />
				<CardText expandable={true}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				</CardText>
				</Card>

		);
	}
});

var Committee = React.createClass({
	render: function () {

		return (
			<div id="section-committee" className="section">
				<div className="container">

					<div className="row center-xs">
						<div className="col-lg-12">
						<h3>Meet the Committee</h3>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-6 no-pad">
							<MemberCard key={gradSweCommittee[0].id} data={gradSweCommittee[0]}/>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 no-pad">
							<MemberCard key={gradSweCommittee[1].id} data={gradSweCommittee[1]}/>
						</div>
					</div>
					<div className="row">
						{gradSweCommittee.map(function(member) {
							if(member.id>2) {
							return 	<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 no-pad"><MemberCard key={member.id} data={member}/></div>
;
							}
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
			<div id="section-sponsors" className="section">

				<div className="container">
				<div className="row center-align">
				<div className="col s12">
				<h3>Thank you to our Sponsors</h3>
				</div>
				</div>
					<div className="row">
						<div className="col s12 m6 l6"><h5>GradSWE@UIUC is proudly sponsored by Akuna Capital, Capital One, and Grainger. Their support is integral to the success of our committee goals.</h5></div>
						<div className="col s12 m6 l6"><h5>If your company is interested in sponsoring us, please contact our Co-Corporate Chairs: {gradSweCommittee[2].email}, {gradSweCommittee[3].email}</h5></div>
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
						<div className="col s12 l6">
							<h5 className="white-text">Contact Us</h5>
							<p className="grey-text text-lighten-4">103C Engineering Hall<br/>1308 W. Green Street<br/>Urbana, IL 61801<br/>217.244.3828</p>
							<p className="grey-text text-lighten-4">eweek@ec.illinois.edu</p>
						</div>
						<div className="col s12 l4 offset-l2 ">
							<h5 className="white-text">Follow Us</h5>
							<ul>
							<li><a className="grey-text text-lighten-3" href="https://www.facebook.com/EWeekUIUC/" target="_blank">Facebook</a></li>
							<li><a className="grey-text text-lighten-3" href="https://twitter.com/eweekuiuc!" target="_blank">Twitter</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer-copyright">
					<div className="container">
					© 2016-2017 Copyright Engineering Council. All Rights Reserved.
					<span className="grey-text text-lighten-4 right">University of Illinois at Urbana-Champaign</span>
					</div>
				</div>
			</footer>


		);
	}

});


export default FrontPage;
