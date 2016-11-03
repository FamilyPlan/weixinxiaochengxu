//index.js
//获取应用实例
// var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    num:8.2,
    hotmv:[],
    commv:[],
    topmv:[],
    tags:[
      {name:"经典",url:'top250',title:'经典电影'},
      {name:"冷门佳片",url:'/search?tag=underrated',title:'冷门佳片'},
      {name:"豆瓣高分",url:'doubantop',title:'豆瓣高分电影'},
      {name:"动作",url:'action',title:'动作电影'},
      {name:"喜剧",url:'comedy',title:'喜剧电影'},
      {name:"爱情",url:'love',title:'爱情电影'},
      {name:"悬疑",url:'mystery',title:'悬疑电影'},
      {name:"恐怖",url:'horror',title:'恐怖电影'},
      {name:"科幻",url:'scifi',title:'科幻电影'},
      {name:"治愈",url:'sweet',title:'治愈电影'},
      {name:"文艺",url:'artfilm',title:'文艺电影'},
      {name:"成长",url:'youth',title:'成长电影'},
      {name:"动画",url:'animation',title:'动画电影'},
      {name:"华语",url:'chinese',title:'华语电影'},
      {name:"欧美",url:'western',title:'欧美电影'},
      {name:"韩国",url:'korean',title:'韩国电影'},
      {name:"日本",url:'japanese',title:'日本电影'}],
    topTemp:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    // 获取热映电影
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {
        start:0,
        count:10
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          hotmv:res.data.subjects
        })
      }
    })
    //即将上映
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon',
      data: {
        start:0,
        count:10
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          commv:res.data.subjects
        })
      }
    })
    //即将上映
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250',
      data: {
        start:0,
        count:10
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          topmv:res.data.subjects
        })
      }
    })
  },
  navToDatail:function(event){
    var urlTo=event.target.dataset.url,title=event.target.dataset.cont;
    wx.navigateTo({
      url: '../pmvdetail/pmvdetail?url='+urlTo+'&title='+title
    })
  }
})
