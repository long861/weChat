// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        name: 'Lucky',
        sex: '女',
        message: '你是谁'
      },
      {
        name: 'Jack',
        sex: '男',
        message: '我是Jack'
      },
      {
        name: 'Friker',
        sex: '男',
        message: '我是Friker'
      },
      {
        name: 'Srice',
        sex: '女',
        message: 'Srice is me'
      },
      {
        name: 'Tom',
        sex: '男',
        message: '你是Srice?'
      },
      {
        name: 'Ming Li',
        sex: '男',
        message: '这就是命运'
      },
    ],
    message: [
      {
        title: '第七个小矮人',
        message: '乐观善良的7个小矮人原本过着简单快乐的生活，不料诅咒公主的巫婆利用小矮人进入.'
      },
      {
        title: '第七个小矮人',
        message: '乐观善良的7个小矮人原本过着简单快乐的生活，不料诅咒公主的巫婆利用小矮人进入.'
      },
      {
        title: '第七个小矮人',
        message: '乐观善良的7个小矮人原本过着简单快乐的生活，不料诅咒公主的巫婆利用小矮人进入.'
      }
    ],
    color: [],
    actions: [{
        name: '删除',
        color: '#fff',
        fontsize: '20',
        width: 100,
        icon: 'like',
        background: '#ed3f14'
      },
      {
        name: '置顶',
        width: 100,
        color: '#80848f',
        fontsize: '20',
        icon: 'undo'
      }
    ],
    toggle: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var arr = ['red', 'green', 'blue', 'default', 'yellow'];
    var arr2 = [];
    var length = this.data.list.length;
    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * 5);
      console.log('-----', index)
      console.log('****', arr[index])
      arr2.push(arr[index]);
    }
    console.log('=====', arr2)
    this.setData({
      color: arr2
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})