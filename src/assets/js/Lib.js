// 正则截取url上需要的参数,使用方法直接在app.js里引用,然后在vue页面里this.getQueryString()即可
export function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
 // 用于移动端点击300ms延迟问题,但是有个小问题,在pc端需要点击2下,所以,慎用
    // import FastClick from 'fastclick';
    // FastClick.attach(document.body);

//时间过滤器
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
  if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

//url取值
export function getParamString(name) {
		var url = window.location.href;
		var paramString = url.substring(url.indexOf("?") + 1, url.length)
				.split("&");
		var param = null;
		var value = null;
		for ( var i = 0; i < paramString.length; i++) {
			param = paramString[i];
			if (param.substring(0, param.indexOf("=")) == name) {
				value = param.substring(param.indexOf("=") + 1, param.length);
				return value;
			}
		}
		return null;
	}

