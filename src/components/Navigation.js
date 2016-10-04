import React from 'react';
import '../materialize.css';


var Navigation = React.createClass({
	handleClick: function(event) {
		var sect = document.getElementById("section-"+event.currentTarget.id);
		sect.scrollIntoView(true);
	},
	render: function() {
		return (
			<ul id="mainMenu" className="tabs">
				<li className="tab" id="intro" onClick={this.handleClick}>Home</li>
				<li className="tab" id="about" onClick={this.handleClick}>About</li>
				<li className="tab" id="committee" onClick={this.handleClick}>Committee</li>
				<li className="tab" id="sponsors" onClick={this.handleClick}>Sponsors</li>
				<li className="tab" id="contact" onClick={this.handleClick}>Contact</li>
			</ul>
		);
	}
});


export default Navigation;
