
//import Reflux from 'reflux';
//import GithubStore from "../stores/GithubStore";
import {Link,Router, Route, IndexRoute, useRouterHistory} from "react-router";
import NavBar from "../components/common/NavBar";

var Home = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
      return {

      };
    },
    componentDidMount: function () {
      jTouch('.touch');
    },
    componentDidUpdate(){

    },
    link(which_router){
        this.context.router.push('/'+which_router+'_page');
    },
    render: function () {

      let component_config = [
        {order:0 ,name:'swipe'},
        {order:1 ,name:'upPushfresh'}
      ];
        return (
             <div className='page page-current'>
               <NavBar
                  title={'hello,我是云菜谱'}
                  navRight={{icon:'icon-search'}}
                  />
               <div className="content">
                 <div className="list-block">
                    <ul>
                    {
                      component_config.map((item,key)=>{
                        return(
                          <li className="item-content item-link touch" onClick={this.link.bind(null,item.name)} key={key}>
                            <div className="item-media"><i className="icon icon-f7"></i></div>
                            <div className="item-inner">
                              <div className="item-title">路由{key+1}</div>
                              <div className="item-after">我是{item.name}组件</div>
                            </div>
                          </li>
                        )
                      })
                    }
                    </ul>
                  </div>
                </div>

                <div className="mask"></div>
                {this.props.children}
              </div>
        );
    }
});

module.exports = Home;
