import React, { Component } from 'react';
import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import './index.scss';

import axios from 'axios';


class DetailPage extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [{ text: null, key: 0}]
        };
    }
    
    componentWillMount(){
        var that = this;
        var id=this.props.params.id
        axios.get('http://chinayj.online/yophp/skills.php')
          .then(function (response) {
            that.setState({
                dataSource:response.data[id-1]
            })  
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    render() {
        return (
            <div className="yo-flex">
                <Header title="详情页"/>
                <Scroller extraClass="flex" onScroll={() => {
                }}>
                    <div className="yo-card">
                        <div className="extra">
                            <img className="img-cover" src={this.state.dataSource.images} style={{width:100+'%',height:300+'px'}} alt="待加载更多图片"/>
                        </div>
                        <div className="bd">
                            <h3 className="titleh">{this.state.dataSource.category}</h3>
                            <div className="bord">
                                <p className="desc">{this.state.dataSource.name}</p>
                                <p className="desc1">{this.state.dataSource.word}</p>
                            </div>
                        </div>
                    </div>
                </Scroller>
                <Footer/>
            </div>
        )
    }
}

export default DetailPage;
