import {Link,Router, Route, IndexRoute, useRouterHistory} from "react-router";

var NavBar = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
  },
  return(){
    history.go(-1);
  },
  goHome(){
    this.context.router.push('/');
  },
    render: function () {

      let nav_left_dom = "" ,nav_right_dom = "";
      if(this.props.navLeft){
        nav_left_dom = (
          <span>
            <span className={"icon "+this.props.navLeft.icon}></span>
            {this.props.navLeft.dec}
          </span>
        )
      }
      if(this.props.navRight){
        nav_right_dom = (
          <span>
            <span className={"icon "+this.props.navRight.icon}></span>
            {this.props.navRight.dec}
          </span>
        )
      }

        return (
          <header className="bar bar-nav">
            <a className="button button-link button-nav pull-left"
               href="javascript:;"
               data-transition='slide-out'
               onClick={this.return}
               >
              {nav_left_dom}
            </a>
            <h1 className="title">{this.props.title}</h1>
            <a className="button button-link button-nav pull-right"
               href="javascript:;" data-transition='slide-out'
               onClick={this.goHome}
               >
              {nav_right_dom}
            </a>
          </header>
        );
    }
});

module.exports = NavBar;
