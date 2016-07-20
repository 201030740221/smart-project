
var Index = React.createClass({
  componentDidMount: function () {
    this.scrollHandle();
  },
  //up pull刷新
  scrollHandle(){
      let self = this;
      $(".push-refresh").scroll(function(){
          var $this =$(this),
               viewH =$(this).height(),//可见高度
               contentH =$(this).get(0).scrollHeight,//内容高度
               scrollTop =$(this).scrollTop();//滚动高度
               if(contentH>viewH){
                  if((contentH - viewH - scrollTop) == 0) { //到达底部100px时,加载新内容
                  //if(scrollTop/(contentH -viewH)>=0.95){ //到达底部100px时,加载新内容
                      $('.load_more').show();
                      if(self.props.callback){
                        self.props.callback(true);
                      }

                  }else{
                      return;
                  }
               }

      })

  },
    render: function () {
        return (
            <div className="push-refresh">
                {this.props.children}
                <div className="load_more" style={{display:'none'}}>
                  <div className="spinner">
                    <div className="spinner-container container1">
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                      <div className="circle3"></div>
                      <div className="circle4"></div>
                    </div>
                    <div className="spinner-container container2">
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                      <div className="circle3"></div>
                      <div className="circle4"></div>
                    </div>
                    <div className="spinner-container container3">
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                      <div className="circle3"></div>
                      <div className="circle4"></div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
});

module.exports = Index;
