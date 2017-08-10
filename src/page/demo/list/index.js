import React, { Component } from 'react';
import { List,Carousel} from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import './index.scss';
import axios from 'axios';

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [{ text: null, key: 0}]
        };
    }

    componentWillMount(){
        var that = this;
        axios.get('http://chinayj.online/yophp/skills.php')
          .then(function (response) {
            that.setState({
                dataSource:response.data
            })

            
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    refresh() {
        this.setState({ dataSource: getRandomDataSource(25) });
    }

    fetch() {
        this.setState({ dataSource: this.state.dataSource.concat(getRandomDataSource(15)) });
    }

    render() {

        return (
            <div className="yo-flex">
                <Header title="skills" right={{ title: <i className="yo-ico iconfont icon-saomiao3"></i>, onTap: () => scan() }}/>
                <List
                    ref="list"
                    extraClass="flex"
                    dataSource={this.state.dataSource}
                    renderItem={(item, i) =>
                    <li>
                        <div className="li-left"><img src={item.images} /></div>
                        <div className="li-right">
                            <h3>类型：{item.category}</h3>
                            <div>名称：{item.name}</div>
                            <div className="time">使用时长：{item.time}</div>
                            <div>熟练程度：{item.level}</div>
                            <div>相类似:{item.like}</div>
                        </div>
                    </li> 
                    }
                    onItemTap={(item, i, ds) => {
                        yoHistory.push(`/detail/${item.id}`);
                    }}
                />
                <Footer/>
            </div>
        )
    }
}

let guid = -1;

function getArrayByLength(length) {
    var ret = [];
    for (var i = 0; i < length; i++) {
        ret[i] = null;
    }
    return ret;
}

function getRandomList(size) {
    return getArrayByLength(size).fill(1).map(num => parseInt(Math.random() * 100));
}

function getRandomDataSource(size) {
    return getRandomList(size).map(num => ({ text: num, key: ++guid }));
}

function scan(){
   $.ajax({
        type:'post',
        url:'http://chinayj.online/php/getsign.php',
        data:{
            url:window.location.href
        },
        dataType:'json'
    }).done(function(res){



    wx.config({
        debug: true,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: [
          // 所有要调用的 API 都要加到这个列表中
          'scanQRCode'
        ]
     });
      wx.ready(function () {
            // 在这里调用 API
            wx.scanQRCode({
                needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                  var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                  alert(result);
                }
            });


      });

    })
}

export default Detail;
