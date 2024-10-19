// let baseUrl = "http://172.16.112.117:8701"; //8077
let baseUrl = require('../utils/ip').getNetWork().serverip;

// let Authorization = 'Basic bGluOjEyMzEyMw=='
let Authorization = 'Basic bGluOlNtYXJ0QDEyMzQ1Ng=='

let token = wx.getStorageSync('token');
let header = {
  'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  // 'auth-token': token,
  'Authorization': Authorization
}
let header1 = {
  'content-type': 'application/json;charset=utf-8',
  // 'auth-token': token,
  'Authorization': Authorization
}

export function setHeader() {
  header = {
    'content-type': 'application/x-www-form-urlencoded',
    // 'auth-token': token,
    'Authorization': Authorization
  }
}
/**
 * POST 请求
 */
export function post(url, params, loading = true, showToast = true, flag = true) {
  var option = {
    url: url,
    data: params,
    method: 'POST',
    loading,
    showToast,
    flag
  }

  return fetch(option);
}
/**
 * POST 请求
 */
export function post1(url, params, loading = true, showToast = true, flag = true) {
  header1["Authorization"] = wx.getStorageSync('token')
  var option = {
    url: url,
    data: params,
    method: 'POST',
    loading,
    showToast,
    flag
  }
  return fetch(option);
}
/**
 * GET请求
 */
export function get(urls, params, loading = true, showToast = true, callback) {
  header["Authorization"] = wx.getStorageSync('token')
  var option = {
    url: urls,
    data: params,
    method: 'GET',
    loading,
    showToast
  }
  // var code = app.globalData.code;
  // console.log('code:=========' + code)
  // header = {
  //   'content-type': 'application/x-www-form-urlencoded',

  // }

  return fetch(option, callback);
}


export function throttle(fn, interval) {
  var enterTime = 0; //触发的时间
  var gapTime = interval || 300; //间隔时间，如果interval不传值，默认为300ms
  return function () {
    var that = this;
    var backTime = new Date(); //第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(that, arguments);
      enterTime = backTime; //赋值给第一次触发的时间 保存第二次触发时间
    }
  };
}


function fetch(options, callback) {
  let token = wx.getStorageSync('token')
  let _header = (options.method === 'POST') & options.flag ? header1 : header;
  // _header["auth-token"] = token
  if (options.loading) {
    wx.showLoading({
      title: '加载中',
    })
  }
  return new Promise(function (resolve, reject) {
    const requestTask = wx.request({
      url: baseUrl + options.url,
      data: options.data,
      header: _header,
      timeout: 15000,
      method: options.method,
      success: function (res) {
        if (options.loading) {
          wx.hideLoading()
        }
        if (res.data.code != '0000') {
          console.log('接口请求出错：')
          console.log(res)
          if (options.showToast) {
            wx.showToast({
              title: res.data.message ? res.data.message : '接口请求出错',
              mask: true,
              icon: 'none',
              duration: 2000
            })
          }
          reject(res.data);
        }
        resolve(res.data.data)
      },
      fail: function (err) {
        if (options.loading) {
          wx.hideLoading()
        }
        if (err.data === undefined || err.data.message === undefined || err.data.message === null) {
          wx.showModal({
            showCancel: false,
            content: "网络请求出错"
          })
          reject(err);
          return
        }
        wx.showToast({
          title: (err.data.message != undefined || err.data.message != null) ? err.data.message : '加载出错',
          duration: 2000,
          icon: 'error'
        })
      },
    })
  });

}