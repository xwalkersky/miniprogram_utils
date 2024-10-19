const pre = require('../utils/ip').getNetWork().pre;
const socpre = require('../utils/ip').getNetWork().socpre;

const mapurl = require('../utils/ip').getNetWork().mapUrl;
// const pre = '/training/app/';
// export const wsUrl = 'ws://172.16.112.117:8700/training/MessageWebsocket?userId=';
export const wsUrl = require('../utils/ip').getNetWork().socketip;

let url = {
  //以下是webview的地址
  'patrol': '/patrol', //巡检
  'repair': '/repair', //维修
  'home': '/home', //首页图层管理
  'sticky': '/sticky', //接受任务
  'unusual': '/patrol/unusual', //异常上报选点
  'single': '/patrol/single', //首页异常上报
  'buffer': '/jingkong/home/buffer', //缓冲区
  'measure': '/jingkong/home/measure', //测量
  'dmHome': '/daomian', //道面地图
  'dmPatrol': '/daomian/inspection', //道面巡检任务详情页
  'dmMergePatrol': '/daomian/mergeinspection', //道面合并巡检任务详情页
  'dmRepair': '/daomian/dmrepair', //道面修补任务详情页
  'dmSign': '/daomian/dmSign', //道面标志线详情页
  'dmFOD': '/daomian/fod', //fod列表页
  'dmDrawRange': '/daomian/drawRange', // 标志线涂刷的第二步
  'dmSelectPoint': '/daomian/selectPoint', //道面修补和fod的第二步
  'mapCenter': '/mapCenter', //地图中心
  //以下是接口地址
  'loginByPwd': '/authserver/oauth/token', //登录token
  'loginByPwd': '/authserver/oauth/token', //登录token
  'login': '/certification/user/selectUserByToken', //根据token登录
  'loginout': '/certification/user/userLogout', //退出登录
  'webSocket': '/extendServer/comprehensive/websocket/inspectionTrajectoryApplet',
  'getAppResourcesByUser': '/extendServer/geography/common/currency/getAppResourcesByUser',
  'pageInspectionTask': '/extendServer/comprehensive/pipelineInspectionTask/pageInspectionTask', //巡检列表
  'getInspectionTask': '/extendServer/comprehensive/pipelineInspectionTask/getInspectionTask/', //巡检详情
  'pageRepairWorkOrder': '/extendServer/comprehensive/pipelineRepairProject/pageRepairWorkOrder', //维修工单列表
  'pageRepairProject': '/extendServer/comprehensive/pipelineRepairProject/pageRepairProject', //获取维修列表
  'listRepairProject': '/extendServer/comprehensive/pipelineRepairProject/listRepairProject', //获取维修项目
  'getRepairWorkOrder': '/extendServer/comprehensive/pipelineRepairProject/getRepairWorkOrder/', //工单详情
  'PipelineTypeEnum': '/extendServer/comprehensive/common/currency/getEnumsOption/PipelineTypeEnum', //获取管线类型
  'updateInspectionTaskEnd': '/extendServer/comprehensive/pipelineInspectionTask/updateInspectionTaskEnd', //更新巡检任务状态
  'listMessage': '/extendServer/comprehensive/comMessage/listMessage/', //消息列表
  'updateMessageReadBatchIds': '/extendServer/comprehensive/comMessage/updateMessageReadBatchIds', //消息状态变更
  'delMessageBatchIds': '/extendServer/comprehensive/comMessage/delMessageBatchIds', //一键清除
  'uploadFile': '/extendServer/geography/common/file/uploadFile', //上传文件
  'saveOrUpdateRepairWorkOrder': '/extendServer/comprehensive/pipelineRepairProject/saveOrUpdateRepairWorkOrder', //保存工单
  'statisticsTaskStatus': '/extendServer/comprehensive/pipelineInspectionTask/statisticsTaskStatus', //获取数量
  'statisticsWorkOrderStatus': '/extendServer/comprehensive/pipelineRepairProject/statisticsWorkOrderStatus',
  'statisticsLineQuantityByUser': '/extendServer/comprehensive/pipelineInspectionTask/statisticsLineQuantityByUser', //获所有数量
  'saveOrUpdateInspectionTask': '/extendServer/comprehensive/pipelineInspectionTask/saveOrUpdateInspectionTask', //保存巡检结果
  'getInspectionGroup': '/extendServer/comprehensive/comInspectionGroup/getInspectionGroup/', //获取组成员
  'appletInspectionTaskResult': '/extendServer/comprehensive/pipelineInspectionTask/appletInspectionTaskResult',
  'listInspectionGroup': '/extendServer/comprehensive/comInspectionGroup/listInspectionGroup/', //查找组
  'appletPushInspectionFile': '/extendServer/comprehensive/pipelineInspectionTask/appletPushInspectionFile', //管线模块——上传图片
  'getRepairWorkOrder': '/extendServer/comprehensive/pipelineRepairProject/getRepairWorkOrder/', //维修工单详情
  'appletRepairWorkOrderResult': '/extendServer/comprehensive/pipelineRepairProject/appletRepairWorkOrderResult', //上报维修工单结果
  'updateWorkOrderEnd': '/extendServer/comprehensive/pipelineRepairProject/updateWorkOrderEnd', //维修工单退回终止
  'pageAppletRepairWorkOrderByTaskId': '/extendServer/comprehensive/pipelineRepairProject/pageAppletRepairWorkOrderByTaskId/', //关联任务的工单列表
  'delInspectionFile': '/extendServer/comprehensive/pipelineInspectionTask/delInspectionFile/', //删除图片
  'listMaterialByType': '/extendServer/comprehensive/material/listMaterialByType/', //查询用料
  'saveOrUpdateMaterial': '/extendServer/comprehensive/material/saveOrUpdateMaterial', //新增物料
  'saveOrUpdateNavigationalLamplightOut': '/extendServer/comprehensive/inspectionRecordsheet/saveOrUpdateNavigationalLamplightOut', //助航灯光
  'addNavigationalLamplightOut': '/extendServer/comprehensive/inspectionRecordsheet/addNavigationalLamplightOut', //助航灯光
  'saveOrUpdateInspectionCable10kv': '/extendServer/comprehensive/inspectionRecordsheet/saveOrUpdateInspectionCable10kv', //10kv电缆
  'addInspectionCable10kv': '/extendServer/comprehensive/inspectionRecordsheet/addInspectionCable10kv', //新增10kv电缆
  'saveOrUpdateInspectionOutdoorPipeline': '/extendServer/comprehensive/inspectionRecordsheet/saveOrUpdateInspectionOutdoorPipeline', //室外管线巡视记录新增
  'addInspectionOutdoorPipeline': '/extendServer/comprehensive/inspectionRecordsheet/addInspectionOutdoorPipeline', //室外管线巡视记录新增
  'getInspectionOutdoorPipeline': '/extendServer/comprehensive/inspectionRecordsheet/getInspectionOutdoorPipeline/', //室外管线巡视记录详情
  'saveOrUpdateInspectionCommunicationPipeline': '/extendServer/comprehensive/inspectionRecordsheet/saveOrUpdateInspectionCommunicationPipeline', //通信管线巡视记录新增
  'addInspectionCommunicationPipeline': '/extendServer/comprehensive/inspectionRecordsheet/addInspectionCommunicationPipeline', //通信管线巡视记录新增
  'getInspectionCommunicationPipeline': '/extendServer/comprehensive/inspectionRecordsheet/getInspectionCommunicationPipeline/', //通信管线巡视记录详情
  'deleteRepairWorkOrderById': '/extendServer/comprehensive/pipelineRepairProject/deleteRepairWorkOrderById/', //删除工单
  'saveOrUpdateSubstation110kv': '/extendServer/comprehensive/inspectionRecordsheet/saveOrUpdateSubstation110kv', //110线路
  'addSubstation110kv': '/extendServer/comprehensive/inspectionRecordsheet/addSubstation110kv', //110线路
  'getNavigationalLamplightOut': '/extendServer/comprehensive/inspectionRecordsheet/getNavigationalLamplightOut/',
  'getSubstation110kv': '/extendServer/comprehensive/inspectionRecordsheet/getSubstation110kv/',
  'getInspectionCable10kv': '/extendServer/comprehensive/inspectionRecordsheet/getInspectionCable10kv/',
  'jkpageInspectionTask': '/extendServer/comprehensive/headroomInspectionTask/pageInspectionTaskAPP', //净空巡检任务
  'jkstatisticsTaskStatus': '/extendServer/comprehensive/headroomInspectionTask/statisticsTaskStatusAPP', //任务数量
  'pageHeadroomUnusual': '/extendServer/comprehensive/headroomUnusual/pageHeadroomUnusualAPP', //低慢小，异常分页查询
  'statisticsHeadroomUnusualStatus': '/extendServer/comprehensive/headroomUnusual/statisticsHeadroomUnusualStatusAPP/', //低慢小，异常数量
  'saveOrUpdateHeadroomUnusual': '/extendServer/comprehensive/headroomUnusual/saveOrUpdateHeadroomUnusual', //低慢小，异常新增和编辑
  'addStepHeadroomUnusual': '/extendServer/comprehensive/headroomUnusual/addStepHeadroomUnusual', //低慢小，异常新增和编辑
  'getHeadroomUnusual': '/extendServer/comprehensive/headroomUnusual/getHeadroomUnusual/', //低慢小，异常详情查询
  'getHeadroomUnusualAPP': '/extendServer/comprehensive/headroomUnusual/getHeadroomUnusualAPP', //低慢小，异常详情查询
  'headRoomappletPushInspectionFile': '/extendServer/comprehensive/headroomInspectionTask/appletPushInspectionFile', //净空模块推送图片（0：管线巡检任务、1：管线维修工单、2：净空巡检任务结果、3：障碍物、4：低慢小、5：异常发现、6、异常解决）
  'delInspectionFileAPP': '/extendServer/comprehensive/headroomInspectionTask/delInspectionFileAPP', //净空模块删除图片（0：管线巡检任务、1：管线维修工单、2：净空巡检任务结果、3：障碍物、4：低慢小、5：异常发现、6、异常解决）
  'jkgetInspectionTask': '/extendServer/comprehensive/headroomInspectionTask/getInspectionTaskAPP/', //巡检任务详情APP
  'saveOrUpdateEventAPP': '/extendServer/comprehensive/headroomUnusual/saveOrUpdateEventAPP', //新增事件经过
  'deleteEventById': '/extendServer/comprehensive/headroomUnusual/deleteEventById/', //删除事件经过
  'appletListLongitudeLatitude': '/extendServer/comprehensive/headroomInspectionTask/appletListLongitudeLatitude', //查询地图上所有点集合
  'listHeadroomTaskOrder': '/extendServer/comprehensive/headroomInspectionTask/listHeadroomTaskOrder', //净空所有巡检中任务
  'jkupdateTaskStatus': '/extendServer/comprehensive/headroomInspectionTask/updateTaskStatus', //净空任务状态更改
  'headroomObstacleManagerGet': '/extendServer/comprehensive/headroomObstacleManager/get/', //净空障碍物的详情查询
  'jkappletInspectionTaskResult': '/extendServer/comprehensive/headroomInspectionTask/appletInspectionTaskResult', //小程序上报巡检结果
  'appletInspectionTaskFixedPosition': '/extendServer/comprehensive/headroomInspectionTask/appletInspectionTaskFixedPosition', //净空小程序-巡检任务定位记录
  'headroomObstacleManagerSelectPage': '/extendServer/comprehensive/headroomObstacleManager/selectPage', //净空障碍物的分页查询
  'obstacleTemplatePage': '/extendServer/comprehensive/headroomObstacleManager/obstacleTemplatePage', //净空障碍物模板
  'jklistInspectionRange': '/extendServer/comprehensive/inspectionRange/listInspectionRange', //净空范围列表
  'jkgetInspectionRangeById': '/extendServer/comprehensive/inspectionRange/getInspectionRangeById/', //净空根据id查询范围位置
  'listDefaultProject': '/extendServer/comprehensive/headroomInspectionProject/listDefaultProject', //净空根据查询巡检默认填写列表
  'jksaveOrUpdateInspectionTask': '/extendServer/comprehensive/headroomInspectionTask/saveOrUpdateInspectionTask', //净空新增巡检任务
  'selectPeripheryObstacle': '/extendServer/comprehensive/headroomObstacleManager/selectPeripheryObstacle', //获取当前位置3km内的障碍物
  'headroomUploadFileApp': '/extendServer/comprehensive/headroomArchivesManager/uploadFileAPP', //净空异常上传图片，{file,id,type}
  'jkGetInspectionTaskResult': '/extendServer/comprehensive/headroomInspectionTask/getInspectionTaskResult/', //净空巡检任务-查询巡检任务结果
  'jkGetInspectionTaskResultAPP': '/extendServer/comprehensive/headroomInspectionTask/getInspectionTaskResultAPP', //净空巡检任务-查询巡检任务结果
  'selectInspectionTaskFixedPosition': '/extendServer/comprehensive/headroomInspectionTask/selectInspectionTaskFixedPosition', //查询巡检任务定位记录
  'backendTask': '/extendServer/comprehensive/headroomInspectionTask/updateInspectionTaskStop', //查询巡检任务定位记录
  'startRating': '/extendServer/comprehensive/headroomObstacleManager/startRating', //障碍物评定
  'selectPageByCondition': '/extendServer/comprehensive/headroomObstacleManager/selectPageByCondition', //障碍物查询
  'appletObstacle': '/extendServer/comprehensive/headroomInspectionTask/appletObstacle', //保存障碍物
  'stateChange': '/extendServer/comprehensive/pipelineRepairProject/stateChange', //管理员指示
  'listApronTowerPersonnel': '/extendServer/comprehensive/comInspectionGroup/listApronTowerPersonnel', //机坪塔台人员配置-分组返回所有人员列表
  'selectInspectionTaskByAreaAndType': '/extendServer/comprehensive/headroomInspectionTask/selectInspectionTaskByAreaAndType', //净空-根据巡检区域和类型,获取复用任务
  'copyInspectionTask': '/extendServer/comprehensive/headroomInspectionTask/copyInspectionTask', //净空-新建巡检任务
  'deleteHeadroomUnusualById': '/extendServer/comprehensive/headroomUnusual/deleteHeadroomUnusualById/', //净空-删除异常工单
  'pageConf': '/extendServer/comprehensive/trackInspectionPatrolConf/pageConf', //道面任务类型
  'listInspectionRange': '/extendServer/comprehensive/inspectionRange/listInspectionRange', //道面任务范围模板
  'saveOrUpdateTrackPatrolTask': '/extendServer/comprehensive/trackPatrolTask/saveOrUpdateTrackPatrolTask', //新增巡视任务
  'saveOrUpdateTrackPatrolTaskAPP': '/extendServer/comprehensive/trackPatrolTask/saveOrUpdateTrackPatrolTaskAPP', //新增巡视任务
  'taskGroupingStatistics': '/extendServer/comprehensive/trackPatrolTask/taskGroupingStatistics', //道面任务统计
  'repairGroupingStatistics': '/extendServer/comprehensive/trackMaintenanceRepair/taskGroupingStatistics', //道面维修统计
  'pageTrackPatrolTask': '/extendServer/comprehensive/trackPatrolTask/pageTrackPatrolTask', //道面任务列表
  'listTrackInspectionGroup': '/extendServer/comprehensive/comInspectionGroup/listTrackInspectionGroup', //道面人员组查询，根据token获取当前所在组，参数teamType=PATROL -(patrol,巡道队)；MAINTENANCE -(maintenance,维护队)
  'trackStateChange': '/extendServer/comprehensive/trackPatrolTask/trackStateChange', //道面巡视任务- 状态变更
  'dmRepairTrackStateChange': '/extendServer/comprehensive/trackMaintenanceRepair/trackStateChange', //道面-道面修补-状态变更
  'dmMarkLineTrackStateChange': '/extendServer/comprehensive/trackMaintenanceMarkline/trackStateChange', //道面-道面标志线-状态变更
  'pageTrackMaintenanceRepair': '/extendServer/comprehensive/trackMaintenanceRepair/pageTrackMaintenanceRepair', //道面修补任务列表
  'updateTrackPatrolTaskTaskFormWithPage': '/extendServer/comprehensive/trackPatrolTask/updateTrackPatrolTaskTaskFormWithPage', //道面提交表单
  'appletPushTrackPatrolFile': '/extendServer/comprehensive/trackPatrolTask/appletPushTrackPatrolFile', //道面上报图片
  // 'trackStateChange': '/extendServer/comprehensive/trackPatrolTask/trackStateChange',//道面修改状态(重复了)
  'pageTrackMaintenanceMarkline': '/extendServer/comprehensive/trackMaintenanceMarkline/pageTrackMaintenanceMarkline', //道面标志线列表
  'fodsaveOrUpdate': '/extendServer/comprehensive/trackLedgerFod/saveOrUpdate', //新建fod
  'saveOrUpdateTaskInformation': '/extendServer/comprehensive/trackMaintenanceRepair/saveOrUpdateTaskInformation', //道面新建修补
  'saveOrUpdateMarklineInformation': '/extendServer/comprehensive/trackMaintenanceMarkline/saveOrUpdateMarklineInformation', //道面新建标志线
  'saveOrUpdateTaskResult': '/extendServer/comprehensive/trackMaintenanceRepair/saveOrUpdateTaskResult', //道面修补结果
  'saveOrUpdateMarklineResult': '/extendServer/comprehensive/trackMaintenanceMarkline/saveOrUpdateMarklineResult', //道面标志线结果
  'getMaintenanceMarklineInformation': '/extendServer/comprehensive/trackMaintenanceMarkline/getMaintenanceMarklineInformation/', //道面标志线详情
  'getMaintenanceTaskInformation': '/extendServer/comprehensive/trackMaintenanceRepair/getMaintenanceTaskInformation/', //道面修补详情
  'getFodDetail': '/extendServer/comprehensive/trackLedgerFod/get/', //道面fod详情
  'getMaterialByType': '/extendServer/comprehensive/material/getMaterialByType', //道面维修用料
  'delayDescription': '/extendServer/comprehensive/trackPatrolTask/delayDescription', //道面-巡视任务-延时说明填写
  'comMaterialUnitEnum': '/extendServer/comprehensive/common/currency/getEnumsOption/ComMaterialUnitEnum',
  'HeadroomUnusualTaskSourceEnum': '/extendServer/comprehensive/common/currency/getEnumsOption/HeadroomUnusualTaskSourceEnum', //净空任务来源
  'getAllCatalogApp': '/extendServer/comprehensive/inspectionRange/getAllCatalogApp',
  'setUserWeixinOpenid': '/extendServer/comprehensive/common/currency/setUserWeixinOpenid', //获取openid
  'deleteUserWeixinOpenid': '/extendServer/comprehensive/common/currency/deleteUserWeixinOpenid', //置空openid
  'getUserWeixinInfo': '/extendServer/comprehensive/common/currency/getUserWeixinInfo', //获取头像和昵称
  'getTrackInspectionFieldBind': '/extendServer/comprehensive/trackInspectionPatrolConf/getTrackInspectionFieldBind/', //获取头像和昵称
  'getMaintenanceTaskResult': '/extendServer/comprehensive/trackMaintenanceRepair/getMaintenanceTaskResult/', //修补完成时间
  'getMaintenanceMarklineResult': '/extendServer/comprehensive/trackMaintenanceMarkline/getMaintenanceMarklineResult/', //标志线完成时间
  'getMaintenanceMarklineResult': '/extendServer/comprehensive/trackMaintenanceMarkline/getMaintenanceMarklineResult/', //标志线完成时间
  'getTrackPatrolTaskTaskForm': '/extendServer/comprehensive/pipelineInspectionTask/getTrackPatrolTaskTaskForm/', //巡视表单配置表
  'gxupdateTrackPatrolTaskTaskForm': '/extendServer/comprehensive/pipelineInspectionTask/updateTrackPatrolTaskTaskForm', //巡视表单更新
  'getTrackPatrolTaskDetail': '/extendServer/comprehensive/trackPatrolTask/getTrackPatrolTaskTaskFormWithPage/', //巡视表单详情
  //获取新建任务权限
  'getAppPipelineInspectionAuth': '/extendServer/comprehensive/pipelineInspectionTask/getAppPipelineInspectionAuth', //管线新建任务
  //获取新建任务表单
  'getAppPipelineInspectionFormByUserId': '/extendServer/comprehensive/pipelineInspectionTask/getAppPipelineInspectionFormByUserId', //管线新建任务表单
  //获取管线类型
  'getConfByNumber': '/extendServer/comprehensive/trackInspectionPatrolConf/getConfByNumber/', //管线类型
  //新建管线任务
  'gxsaveOrUpdateInspectionTask': '/extendServer/comprehensive/pipelineInspectionTask/saveOrUpdateInspectionTask', //管线任务
  //航前合并任务列表
  'getTrackMergePatrolTask': '/extendServer/comprehensive/trackPatrolTask/getTrackMergePatrolTask',
  //获取所有待巡视列表
  'getAllTrackPatrolTask': '/extendServer/comprehensive/trackPatrolTask/getAllTrackPatrolTask',
  //航前一小时选择成员
  'listTrackMergeInspectionGroup': '/extendServer/comprehensive/comInspectionGroup/listTrackMergeInspectionGroup',
  //合并任务
  'addOrUpdateTrackPatrolMergeTask': '/extendServer/comprehensive/trackPatrolTask/addOrUpdateTrackPatrolMergeTask',
  //根据合并任务id获取所有子任务
  'getTrackPatrolTaskByMergeId': '/extendServer/comprehensive/trackPatrolTask/getTrackPatrolTaskByMergeId/',
  //合并任务详情
  'getMergeTaskMessageByMergeId': '/extendServer/comprehensive/trackPatrolTask/getMergeTaskMessageByMergeId/',
  //合并任务异常说明
  'mergeTaskStateChange': '/extendServer/comprehensive/trackPatrolTask/mergeTaskStateChange',
  //道面获取当前用户所在组的组名
  'getInspectionGroupNameByUid': '/extendServer/comprehensive/comInspectionGroup/getInspectionGroupNameByUid?type=2',
  //获取道面人员管理的所有的组名接口
  'getInspectionGroupName': '/extendServer/comprehensive/comInspectionGroup/getInspectionGroupName?type=2',
  //图片预览地址
  'imagePreUrl':'/extendServer/geography/common/file/downLoadByte/'
}

export function getUrl(key) {
  return pre + url[key];
}
export function getWebSocket(key) {
  return wsUrl + socpre + url[key];
}
export function getMapUrl(key) {
  console.log(mapurl)
  return mapurl + url[key];
}