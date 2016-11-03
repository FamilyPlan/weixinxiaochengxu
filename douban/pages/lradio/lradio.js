var app = getApp()

Page({
  data:{
    loginFlag:'登录发广播'    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // 获取当前登录用户的信息
    wx.request({
      url: 'https://api.douban.com/v2/user/~me',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res);
      },
      fail: function() {
        // fail
        console.log('fail');
      },
      complete: function() {
        // complete
         console.log('complete');
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