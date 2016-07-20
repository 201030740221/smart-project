
//import Reflux from 'reflux';
//import GithubStore from "../stores/GithubStore";
import {Link,Router, Route, IndexRoute, useRouterHistory} from "react-router";
import NavBar from "../components/common/NavBar";
import ReactSwipe from "../components/common/Swipe";

var Index = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
      return {

      };
    },
    componentDidMount: function () {

    },
    componentDidUpdate(){

    },
    render: function () {
      const swipeOptions = {
          auto: 3000,
          speed: 300,
          disableScroll: true,
          continuous: true,
          callback() {
              console.log('slide changed');
          },
          transitionEnd() {
              console.log('ended transition');
          }
      };
        return (
             <div className='page page-current'>
               <NavBar
                  title={'hello,我是swipe组件'}
                  navLeft={{icon:'icon-left',dec:'返回'}}
                  navRight={{icon:'icon-home'}}
                  />
               <div className="content">
                 <div>
                   <div className="row no-gutter">
                     <div className="col-20">
                        <ul className="menu-tags">
                          <li>ff</li>
                          <li>ff</li>
                        </ul>
                     </div>
                     <div className="col-80 menu-content">
                       <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                       {
                         [1,2,3].map((item,key)=>{
                           return(
                             <div key={key}>PANE {item}</div>
                           )
                         })
                       }
                       </ReactSwipe>
                     </div>
                   </div>
                 </div>
               </div>

                {this.props.children}
              </div>
        );
    }
});

module.exports = Index;
