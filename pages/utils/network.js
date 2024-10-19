let http = require('request')
let api = require('url')
let log = require('../../log')

/**
 * 道面任务类型
 * @param {*} that 
 * @param {*} params 
 */
function dmTaskType(that, params) {
  let url = api.getUrl('pageConf')
  http.post1(url, params, true, true, true).then((res) => {
    console.log(res)
    if (!res) {
      return
    }
    let list = res.records
    if (!list) {
      return
    }
    if (list.length == 0) {
      return
    }
    list.forEach(map => {
      let item = {}
      item.text = map.content
      item.code = map.id
      that.data.tasks.push(item)
    })
    that.setData({
      tasks: that.data.tasks
    })
  }).catch((error) => {
    console.log(error);
    wx.showToast({
      title: error.message,
      icon: 'none'
    })
  })
}

function dmTaskRange(that) {
  let params = { type: 'track' }
  let url = api.getUrl('listInspectionRange')
  http.get(url, params, true, false).then((res) => {
    console.log(res)
    if (!res) {
      return
    }
    let list = res
    if (list.length == 0) {
      return
    }
    list.forEach(it => {
      let m = {}
      m.text = it.name
      m.id = it.id
      that.data.ranges.push(m)
    })
    that.setData({
      ranges: that.data.ranges
    })
    console.log(that.data.ranges)
    wx.hideLoading()
  }).catch((error) => {
    console.log(error);

  })
}
function dmCreateTask(that, params) {
  let url = api.getUrl('saveOrUpdateTrackPatrolTask')
  console.log(url)
  console.log(JSON.stringify(params))
  http.post1(url, params, true, true, true).then((res) => {
    wx.showToast({
      title: '任务已创建成功，请前往公共待领任务查看。',
      icon: 'none'
    })

    wx.navigateBack({
      delta: 1
    })
  }).catch((error) => {
    console.log(error);
    wx.showToast({
      title: '提交失败！请检查数据是否填写完整，或检查网络。',
      icon: 'none'
    })
  })
}
function dmTaskStatistics(that,isPullDown) {
  let a = Date.parse(new Date())
  let url = api.getUrl('taskGroupingStatistics')
  http.get(url, null, true, false).then((res) => {
    console.log(res)
    console.log()
    if (!res) {
      return
    }
    let list = res
    if (list.length == 0) {
      return
    }
    list.forEach((ls, pi) => {
      if(pi > that.data.items.length -1){
        return
      }
      if (ls.label != 'FOD外来物') {
        ls.value.forEach((it, index) => {
          if (it.label == that.data.items[pi].tabs[index].name) {
            if (!it.value) {
              that.data.items[pi].tabs[index].show = false
            } else {
              that.data.items[pi].tabs[index].number = it.value
              that.data.items[pi].tabs[index].show = true
            }
          }
        })
      }
    })
    that.setData({
      items: that.data.items
    })
    let b = Date.parse(new Date())
    console.log('接口用时：',b-a)
    if(isPullDown){
      that.stopRefresh()
    }
    console.log(that.data.items)
  }).catch((error) => {
    console.log(error);

  })
}

function dmRepairStatistics(that,type,isPullDown) {
  let url = api.getUrl('repairGroupingStatistics')
  http.get(url, null, true, false).then((res) => {
    console.log(res)
    if (!res) {
      return
    }
    let list = res
    if (list.length == 0) {
      return
    }
    list.forEach((ls, pi) => {
      if (ls.label == type) {
        ls.value.forEach((it, index) => {
          if (it.label == that.data.items[0].tabs[index].name) {
            if (!it.value) {
              that.data.items[0].tabs[index].show = false
            } else {
              that.data.items[0].tabs[index].number = it.value
              that.data.items[0].tabs[index].show = true
            }
          }
        })
      }
    })
    that.setData({
      items: that.data.items
    })
    if(isPullDown){
      wx.stopPullDownRefresh()
    }
    console.log(that.data.items)
  }).catch((error) => {
    console.log(error);

  })
}
function taskList(that, params) {
  console.log('请求参数:'+JSON.stringify(params))
  let url = api.getUrl('getAllTrackPatrolTask')
  http.post1(url, params, true, true, true).then((res) => {
    console.log(res)
    if (!res) {
      return
    }
    let list = res.records

    let pageNo = that.data.pageNo;
    let hasMore = that.data.hasMore;
    let complete = false
    if (res.total > params.pageNo*params.pageSize) {
      hasMore = true
      ++pageNo;
    } else {
      hasMore = false;
      complete = true
    }
    if (res.total == 0) {
      that.setData({
        pageState: 'empty',
        searchLoadingComplete: false,
        items: []
      })
      return
    }
    if (list.length == 0) {
      that.setData({
        pageState: 'empty',
        searchLoadingComplete: false,
        items: []
      })
      return
    }
    if (list) {
      let datas = that.data.items.concat(list)
      that.setData({
        items: datas,
        pageState: 'finish',
        hasMore: hasMore,
        pageNo: pageNo,
        searchLoading: false,
        triggered: false,
        searchLoadingComplete: complete
      })
      that.stopRefresh()
    }
  }).catch((error) => {
    console.log(error);
    wx.showToast({
      title: error.message,
      icon: 'none'
    })
  })
}
function mergeTaskList(that, params) {
  console.log('请求参数:'+JSON.stringify(params))
  let url = api.getUrl('getTrackMergePatrolTask')
  http.post1(url, params, true, true, true).then((res) => {
    console.log(res)
    if (!res) {
      return
    }
    let list = res.records

    let pageNo = that.data.pageNo;
    let hasMore = that.data.hasMore;
    let complete = false
    if (res.total > params.pageNo*params.pageSize) {
      hasMore = true
      ++pageNo;
    } else {
      hasMore = false;
      complete = true
    }
    if (res.total == 0) {
      that.setData({
        pageState: 'empty',
        searchLoadingComplete: false,
        items: []
      })
      return
    }
    if (list.length == 0) {
      that.setData({
        pageState: 'empty',
        searchLoadingComplete: false,
        items: []
      })
      return
    }
    if (list) {
      let datas = that.data.items.concat(list)
      that.setData({
        items: datas,
        pageState: 'finish',
        hasMore: hasMore,
        pageNo: pageNo,
        searchLoading: false,
        triggered: false,
        searchLoadingComplete: complete
      })
      that.stopRefresh()
    }
  }).catch((error) => {
    console.log(error);
    wx.showToast({
      title: error.message,
      icon: 'none'
    })
  })
}
function dmTaskList(that, params) {
  let st =Date.parse(new Date())
  console.log(JSON.stringify(params))
  log.info('请求参数:'+JSON.stringify(params))
  log.setFilterMsg('dmTask')
  let url = api.getUrl('pageTrackPatrolTask')
  http.post1(url, params, true, true, true).then((res) => {
    console.log(res)
    if (!res) {
      return
    }
    let list = res.records

    let pageNo = that.data.pageNo;
    let hasMore = that.data.hasMore;
    let complete = false
    if (res.total > params.pageNo*params.pageSize) {
      hasMore = true
      ++pageNo;
    } else {
      hasMore = false;
      complete = true
    }
    if (res.total == 0) {
      that.setData({
        pageState: 'empty',
        searchLoadingComplete: false,
        items: []
      })
      return
    }
    if (list.length == 0) {
      that.setData({
        pageState: 'empty',
        searchLoadingComplete: false,
        items: []
      })
      return
    }
    if (list) {
      console.log('666666666666')
      let datas = that.data.items.concat(list)
      that.setData({
        items: datas,
        pageState: 'finish',
        hasMore: hasMore,
        pageNo: pageNo,
        searchLoading: false,
        triggered: false,
        searchLoadingComplete: complete
      })
      that.stopRefresh()
      let et = Date.parse(new Date())
      let t = et -st
      console.log('请求时间:',t)
    }
  }).catch((error) => {
    console.log(error);
    wx.showToast({
      title: error.message,
      icon: 'none'
    })
  })
}
function dmRepairList(that, params, type) {
  console.log(JSON.stringify(params))
  log.setFilterMsg('dmRepair')
  log.info('请求参数'+JSON.stringify(params))
  let url = api.getUrl('pageTrackMaintenanceRepair')
  if (type == 'paint') {
    url = api.getUrl('pageTrackMaintenanceMarkline')
  }
  http.post1(url, params, true, true, true).then((res) => {
    console.log(res)
    if (!res) {
      return
    }
    let list = res.records

    let pageNo = that.data.pageNo;
    let hasMore = that.data.hasMore;
    let complete = false
    if (res.total > params.pageNo*params.pageSize) {
      hasMore = true
      ++pageNo;
    } else {
      hasMore = false;
      complete = true
    }
    if (res.total == 0) {
      that.setData({
        pageState: 'empty',
        searchLoadingComplete: false,
        items: []
      })
      return
    }
    if (list.length == 0) {
      that.setData({
        pageState: 'empty',
        searchLoadingComplete: false,
        items: []
      })
      return
    }
    if (list) {
      console.log('666666666666')
      let datas = that.data.items.concat(list)
      that.setData({
        items: datas,
        pageState: 'finish',
        hasMore: hasMore,
        pageNo: pageNo,
        searchLoading: false,
        triggered: false,
        searchLoadingComplete: complete
      })
      that.stopRefresh()
    }
  }).catch((error) => {
    console.log(error);
    wx.showToast({
      title: error.message,
      icon: 'none'
    })
  })
}
function dmFormData(that, params,type) {
  let url = api.getUrl('updateTrackPatrolTaskTaskFormWithPage')
  http.post1(url, params, true, true, true).then((res) => {
    console.log(res)
    wx.showToast({
      title: type == 0?'提交成功':'保存成功',
    })
    if(type == 0){
      wx.navigateBack({
        delta: 2
      })
    }
    
  }).catch((error) => {
    console.log(error);
    wx.showToast({
      title: error.message,
      icon: 'none'
    })
  })
}
module.exports = {
  //道面任务类型
  dmTaskType: dmTaskType,
  dmTaskRange: dmTaskRange,//道面任务范围
  dmCreateTask: dmCreateTask,//道面创建任务
  dmTaskStatistics: dmTaskStatistics,//道面任务
  dmRepairStatistics: dmRepairStatistics,//道面维修统计
  dmTaskList: dmTaskList,//道面任务列表
  dmRepairList: dmRepairList,//道面维修列表
  dmFormData: dmFormData,//道面提交表单
  mergeTaskList: mergeTaskList,//航前一小时任务列表
  taskList: taskList,//航前一小时任务列表
}
