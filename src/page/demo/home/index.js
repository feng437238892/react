import React, { Component } from 'react';
import { Scroller, Touchable,Carousel } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import axios from 'axios';
import './index.scss';

class HomePage extends Component {
    
    constructor() {//它就是之前的getInitialState
        super();
        this.state = {
            dataSource:[],
            hasIntro:false
        };
    }

    //数据请求
    componentWillMount(){
        var that=this;
        axios.get('http://chinayj.online/yophp/skill.php')
        .then(function(res){
            //console.log(res.data);
            that.setState({
                dataSource:res.data[0]
        })
        })
        .catch(function(error){
            console.log(error);
        })
        }
    componentDidMount(){

    }

   render() {
        //console.log('两次',++i);
        if(this.state.dataSource.length == 0){
             return (
                <div>数据请求中...</div>
            )
        }else{
            var flag= store("value");
            var age= !flag;
            var arr=this.state.dataSource;
            store('value',age)
            var arr1=[];
            var list=this.state.dataSource[3];
            var colors=["lightblue","lightgreen","pink","#ccc","lightpurple","lightred"]
            //console.log(list);
            for(var index in list){
                var num=Math.floor(Math.random()*6)
                arr1.push(
                    <span className="yo-btn" style={{background:colors[num]}} key={index}>{this.state.dataSource[3][index]}</span>
                )
            };
            return (
              <div className="yo-flex">
                { flag ?
            
                <div className="yo-flex">
                    <Header title="Self-introduction" left={false}/>
                    <Scroller extraClass="flex" onScroll={() => {
                    }}>
                        <div className="m-content">
                            <Touchable touchClass="m-content-active" onTap={() => {
                                yoHistory.push('/list');
                            }}>
                                <div>
                                     <Touchable touchClass="m-content-active" onTap={() => {
                                        yoHistory.push('/list');
                                    }}> 
                                        <div className="Header">
                                            <div className ="headerInfo" >
                                                <p>姓&emsp;&nbsp;&nbsp;名：余&emsp;俊</p>
                                                <p>性&emsp;&nbsp;&nbsp;别：男</p>
                                                <p className="tel">电&emsp;&nbsp;&nbsp;话：13867168479</p>
                                                <p className="weixin">微&emsp;&nbsp;&nbsp;信：yj365699875</p>
                                                <p className="email">QQ邮箱：1938832242@qq.com </p>
                                                <p className="email1">微软邮箱：yujun902014@outlook.com</p>

                                            </div> 
                                            <div className="headerImg" style={{textAlign:"right"}}>
                                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493385267243&di=825d38aa5ee872823e0f0aacfda5fff7&imgtype=0&src=http%3A%2F%2Fs8.rr.itc.cn%2Fr%2FwapChange%2F20166_17_3%2Fa7hxbv41573939210596.jpg" width="105px" height="130px" />
                                            </div>
                                         </div>
                                    </Touchable>
                                </div>

                            </Touchable>
                        </div>
                       <div className="yo-list yo-list-group yo-scroller content">
                    <h3 className="label">身份信息：</h3>
                    <div className="item"><div className="mark">年&emsp;&emsp;龄：</div><div className="flex">24岁</div></div>
                    <div className="item"><div className="mark">生&emsp;&emsp;日：</div><div className="flex">1994年8月</div></div>
                    <div className="item" style={{borderBottom:'solid #ccc 1px'}}><div className="mark">地&emsp;&emsp;址：</div><div className="flex">安徽省、六安市</div></div>
                    
                    <h3 className="label">教育背景：</h3>
                    <div className="item"><div className="mark">学&emsp;&emsp;校：</div><div className="flex">新华学院</div></div>
                    <div className="item"><div className="mark">专&emsp;&emsp;业：</div><div className="flex">软件技术</div></div>
                    <div className="item"><div className="mark">入&emsp;&emsp;学：</div><div className="flex">2012-2016</div></div>
                    <div className="item" style={{borderBottom:'solid #ccc 1px'}}><div className="mark">学&emsp;&emsp;历：</div><div className="flex">本科</div></div>
                
                    <h3 className="label">求职意向：</h3>
                    <div className="item"><div className="mark">求职意向：</div><div className="flex">前端应用开发工程师</div></div>
                    <div className="item"><div className="mark">工作类型：</div><div className="flex">全职</div></div>
                    <div className="item"><div className="mark">地&emsp;&emsp;点：</div><div className="flex">杭州</div></div>
                    <div className="item" style={{borderBottom:'solid #ccc 1px'}}><div className="mark">期望薪资：</div><div className="flex">12000元</div></div> 

                    <h3 className="label">个人兴趣：</h3>
                    <div className="item" style={{borderBottom:'solid #ccc 1px'}}>&emsp;&emsp;喜欢打桌球、智力游戏、听音乐、上网、打乒乓球、健身、跑步等.</div> 

                    <h3 className="label">自我评价：</h3>
                    <div className="item introduce" style={{borderBottom:'solid #ccc 1px'}} >&emsp;&emsp;精通HTML,CSS3.0,熟练使用HTML5,能熟练的对页面做出正确的模块分析以及页面的渲染.有着较丰富的跨浏览器的开发经验,熟练使用Bootstrap,JQuery EasyUI,MUI,yo等主流的前端框架.能使用Jquery进行基本的特效编写,使用javascript对简单的函数进行封装;用react和一些主流框架进行移动端页面的开发.</div> 
                    </div>

                    </Scroller>
                    <Footer/>
                </div>

            : <div className="yo-carousel" height="100%">
                        <Carousel autoplay={false}>
                            <li className="item"><img className="img" src="http://pic.qiantucdn.com/58pic/19/84/18/36i58PIC4D8_1024.jpg" width="100%" height="100%" /></li>  
                            <li className="item"><img className="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493979593&di=8b8ff24dfe4395d66591ad95628e15dd&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5.cache.netease.com%2Fphoto%2F0031%2F2014-09-20%2FA6K9J0G94UUJ0031.jpg" width="100%" height="100%" />
                         <Touchable touchClass="m-content-active" onTap={() => {
                                    yoHistory.push('/');
                                 }}>
                         <span className="yo-btn" id="btn-main">开启旅行</span> 
                         </Touchable>
                            </li>
                            <li className="item"><img className="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493385174115&di=8017c6cb13401925b45d332880d88792&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fc5b5012442a7d93375b18487ad4bd11373f0012b.jpg" width="100%" height="100%" />
                          
                            </li>
                        </Carousel>
                    </div>
                }
            </div>

        )

       }
    }
}

//存数据
function store(name,data){
    if(data){
        return localStorage.setItem(name,data) ;
    }
    
    return localStorage.getItem(name)|| false;  
}

export default HomePage;
