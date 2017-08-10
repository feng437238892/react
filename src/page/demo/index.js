import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from '$router';
import HomePage from './home';
import yoHistory from '../../common/history';

/*import TabsControl from "../home/tabsControl.js"*/

const List = require.async('./list');
const Detail = require.async('./detail');
const Modden =require.async('./project');
const Work =require.async('./work');

const Root = () => (
    <Router history={yoHistory}>
        <Route path="/">
       		 <IndexRoute component={HomePage}>
        	</IndexRoute>
            <Route path="list" getComponent={List} />
            <Route path="detail/:id" getComponent={Detail}/>
            <Route path="project" getComponent={Modden}/>
            <Route path="work" getComponent={Work}/>
        </Route>
    </Router>
);


/*class TabComponent extends React.Component{
    render(  ){
        return(
            <div className="container">
                <TabsControl>
                    <div name = "first">
                        第一帧
                    </div>
                    <div name = "second">
                        第二帧
                    </div>
                    <div name = "third">
                        第三帧
                    </div>
                </TabsControl>
            </div>
        )
    }
}*/

ReactDOM.render(<Root />, document.getElementById('root'));
