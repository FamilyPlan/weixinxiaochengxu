// 豆瓣同城
var app = getApp()
Page({
  data:{
    localtion:'World',
    china:[],
    hotAct:[],
    musicList:['小型现场','音乐会','演唱会','音乐节'],
    dramaList:['话剧','音乐剧','舞剧','歌剧','戏曲','其他'],
    partyList:['生活','摄影','外语','桌游','交友','集市','美食'],
    movieList:['主题放映','影展','影院活动'],
    othersList:['讲座','展览','运动','旅行','公益','赛事','课程','亲子'],
    musicCont:[],
    dramaCont:[],
    partyCont:[],
    movieCont:[],
    lectureCont:[],
    showCont:[],
    otherCont:[],
    ticket:[],
    brand:[],
    sponsor:[],
    autoplay:true,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(options){
    var that=this;
    wx.request({
      url: 'https://api.douban.com/v2/loc/list',
      data: {
        start:0,
        count:100
      },
      method: 'GET', 
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          china:res.data.locs
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){},
  navLoc:function(event){
    var that=this;
    var id=parseInt(event.currentTarget.dataset.id),uid=event.currentTarget.dataset.uid,name=event.currentTarget.dataset.name;
    that.setData({
      localtion:name
    });
    // 1、获取当前城市的热门活动
    wx.request({
      url: 'https://api.douban.com/v2/event/list?loc='+uid,
      data: {},
      method: 'GET', 
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          hotAct:res.data.events
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    // 2、获取音乐的信息
    wx.request({
      url: 'https://api.douban.com/v2/event/list?loc='+uid+'&type=music',
      data: {
        start:0,
        count:6
      },
      method: 'GET', 
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          musicCont:res.data.events
        });
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    // 3、获取戏剧的信息
    wx.request({
      url: 'https://api.douban.com/v2/event/list?loc='+uid+'&type=drama',
      data: {
        start:0,
        count:6
      },
      method: 'GET', 
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          dramaCont:res.data.events
        });
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    // 4、获取聚会的信息
    wx.request({
      url: 'https://api.douban.com/v2/event/list?loc='+uid+'&type=party',
      data: {
        start:0,
        count:6
      },
      method: 'GET', 
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          partyCont:res.data.events
        });
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    // 5、获取电影的信息
    wx.request({
      url: 'https://api.douban.com/v2/event/list?loc='+uid+'&type=movie',
      data: {
        start:0,
        count:6
      },
      method: 'GET', 
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          movieCont:res.data.events
        });
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})