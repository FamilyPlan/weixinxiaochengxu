var app = getApp()

Page({
  data:{
    types: [
        {title:'电影',cont:'影院热映',color:'#2384E8',url:'../index/index'},
        {title:'电视',cont:'正在热播',color:'#7A6ADB',url:''},
        {title:'图书',cont:'畅销排行',color:'#9F7860',url:''},
        {title:'同城',cont:'周末活动',color:'#E6467E',url:''},
        {title:'小组',cont:'志趣相投',color:'#2AB8CC',url:''},
        {title:'音乐',cont:'新碟榜',color:'#F48F2E',url:''},
        {title:'阅读',cont:'电子书',color:'#9F7860',url:''},
        {title:'游戏',cont:'虚拟世界',color:'#5774C5',url:''},
        {title:'应用',cont:'玩手机',color:'#596CDD',url:''},
        {title:'东西',cont:'心爱之物',color:'#E1644D',url:''},
        {title:'FM',cont:'红心歌单',color:'#40CFA9',url:''},
        {title:'市集',cont:'购买原创',color:'#42BD56',url:''}
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  formSubmit:function(event){
    console.log("aa");
    var search='https://api.douban.com/v2/movie/search?q='+event.detail.value;
    wx.request({
      url:search,
      header: {
      'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  searchclose:function(){
    wx.navigateBack()
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})