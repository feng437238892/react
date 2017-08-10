import React, { Component } from 'react';
import { EnvView } from '$router';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="yo-footer">
                <section className="yo-tab yo-tab-view m-tabview" >
                    <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/');

                        }}>
                        <div className="item item-y-ico "><i className="yo-ico iconfont icon-geren1"></i>简介 </div>
                    </Touchable>
                    <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/list');
                        }}>
                        <div className="item item-y-ico " touchClass="m-content-active"><i className="yo-ico iconfont icon-skill1"></i>技能 </div>
                    </Touchable>
                    <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/work');
                        }}>
                    <div className="item item-y-ico" touchClass="m-content-active"><i className="yo-ico iconfont icon-gongzuo1"></i>工作 </div>
                    </Touchable>
                    <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/project');
                        }}>
                    <div className="item item-y-ico" touchClass="m-content-active"><i className="yo-ico iconfont icon-xiangmu1"></i>项目 </div>
                    </Touchable>

                </section>
            </footer>
        )
    }
}

/*Header.defaultProps = {
    title: '标题',
    left: {
        title: '&#xf07d;',
        onTap: function () {
            yoHistory.go(-1)
        }
    }
}*/

export default Footer;
