'use strict';
import "../css/style";

var Main = React.createClass({
    render: function () {
        return (
            <div className="whole-page">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
