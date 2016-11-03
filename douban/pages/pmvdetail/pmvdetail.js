var app = getApp()

Page({
  data:{
    title:'',
    cont:[],
    index:0,
    kindurl:''
  },
  onLoad:function(options){
    var that=this;
    var kind=options.title,kindurl='https://api.douban.com/v2/movie/'+options.url;
     wx.request({
      url: kindurl,
      data: {
        start:0,
        count:9
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          title:kind,
          cont:res.data.subjects,
          kindurl:kindurl
        })
      }
    })
  },
  loadMore:function(e){
    console.log("e"+e);
    var that=this;
    var kindurl=that.data.kindurl,contNew=that.data.cont,startflag=(that.data.index+1)*9;
    wx.request({
      url: kindurl,
      data: {
        start:startflag,
        count:9
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        var m=res.data.subjects;
        if(m.length>0){
          for(var i in m){
            contNew.push(m[i]);
          }
          that.setData({
              cont:contNew
          })
        }else{
          return false;
        }
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})