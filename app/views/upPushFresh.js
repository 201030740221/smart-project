import NavBar from "../components/common/NavBar";
import PushRefresh from "../components/common/PushRefresh";

var index = React.createClass({
  getInitialState: function () {
    let _arr = [];
    for(let i=0; i<40; i++){
      _arr.push("page_"+i);
    }
    return {
      arr:_arr
    };
  },
  componentDidMount: function () {

  },
  getCallBack(data){
    console.log(data);
    let self = this;
    let arr = this.state.arr;
    let new_arr = [];
    if(data){
      new_arr = arr.concat(999);
      setTimeout(function(){
        self.setState({
          arr: new_arr
        })
        $(".load_more").hide();
      },2000);
    }


  },
    render: function () {
      let arr = this.state.arr||[];
        return (
          <div className='page page-current'>
            <NavBar
               title={'hello,我是upPushFresh组件'}
               navLeft={{icon:'icon-left',dec:'返回'}}
               navRight={{icon:'icon-home'}}
               />
            <div className="content">
              <PushRefresh callback={this.getCallBack}>
                {
                  arr.map((item,key)=>{
                    return(
                      <div>{item}</div>
                    )
                  })
                }
              </PushRefresh>
            </div>
          </div>
        );
    }
});

module.exports = index;
