const network = 1; // 1 外网 2 内网 3 现场 4个人 5现场公网ip
var ip = {
  ipNet: network,
  serverip: '',
  socketip: '',
  pre: '',
  socpre: '',
  mapUrl: '',
  imagePreUrl: '',
}


function showToast(str) {
  wx.showToast({
    title: str,
    icon: 'none'
  })
}

export function getNetWork() {
  switch (network) {
    case 1:
      ip.serverip = "https://www.southsmart.com";
      ip.socketip = "wss://www.southsmart.com";
      ip.pre = "/nanningsgeocserver";
      ip.socpre = '/ningsgeocserver';
      ip.mapUrl = 'https://www.southsmart.com/nanningAppletNet/#';
      ip.imagePreUrl = 'https://www.southsmart.com/nanningAppletNet';
      showToast('正在使用公司外网服务器')
      break;
    case 2:
      ip.serverip = "http://172.16.123.100:33000";
      ip.socketip = "ws://172.16.123.100:33000";
      ip.pre = "/sgeocserver";
      ip.socpre = '/sgeocserver';
      ip.mapUrl = 'http://172.16.11.16:8888/nanningAppletNet/#';
      ip.imagePreUrl = 'http://172.16.11.16:8888/nanningAppletNet';
      showToast('正在使用公司内网服务器')
      break;
    case 3:
      ip.serverip = "https://jpxj.nnairport.com";
      ip.socketip = "wss://jpxj.nnairport.com";
      ip.pre = "/appSgeocserver";
      ip.socpre = '/appSocketSgeocserver';
      ip.mapUrl = 'https://jpxj.nnairport.com/nanningAppletNetJpxj/#';
      ip.imagePreUrl = 'https://jpxj.nnairport.com/nanningAppletNet';
      showToast('正在使用现场服务器')
      break;
    case 4:
      // ip.serverip = "http://172.16.124.14:33012";
      ip.serverip = "http://172.16.124.102:33012";
      ip.socketip = "ws://172.16.124.14:33000";
      ip.pre = "/sgeocserver";
      ip.socpre = '/sgeocserver';
      ip.mapUrl = 'https://www.southsmart.com/nanningAppletNet/#';
      ip.imagePreUrl = 'https://www.southsmart.com/nanningAppletNet';
      showToast('正在使用内部服务器')
      break;
    case 5:
      // ip.serverip = "http://172.16.124.14:33012";
      ip.serverip = "http://116.252.81.221:8092";
      ip.socketip = "ws://116.252.81.221:8092";
      ip.pre = "/sgeocserver";
      ip.socpre = '/ningsgeocserver';
      ip.mapUrl = 'http://116.252.81.221:8092/nanningAppletNet/#';
      ip.imagePreUrl = 'http://116.252.81.221:8092/nanningAppletNet';
      showToast('正在使用公网服务器')
      break;
    default:
      break;
  }
  return ip;
}