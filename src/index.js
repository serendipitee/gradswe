import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FrontPage from './components/FrontPage.js';


const App = () => (
	<MuiThemeProvider>
		<FrontPage/>
	</MuiThemeProvider>
);


ReactDOM.render(
	<App />,
	document.getElementById('front-page')
);
