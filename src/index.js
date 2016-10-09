import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan300, cyan500} from 'material-ui/styles/colors';

import FrontPage from './components/FrontPage.js';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: cyan300,
		primary2Color: cyan500,
	},
	appBar: {
		color: cyan300,
		height: 50,
	},
});




const App = () => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<FrontPage/>
	</MuiThemeProvider>
);


ReactDOM.render(
	<App />,
	document.getElementById('front-page')
);
