/**
 * 给商品价格加补0
 * @param {*} value 
 */
const addZero=function(value){
    var value=Math.round(parseFloat(value)*100)/100;
    var xsd=value.toString().split(".");
    if(xsd.length==1){
        value=value.toString()+".00";
        return value;
    }
    if(xsd.length>1){
        if(xsd[1].length<2){
            value=value.toString()+"0";
        }
        return value;
    }
}
const NullStr=function(str){
	if((str+'' === '')||(str == null)||(str == undefined)){
		return '--';
	}else{
		return str;
	}
}
function two(n) {
	return n < 10 ? '0' + n : '' + n;
}
export const getTime = (time, sp, istrue, isweek) => {
	var b;
	if(time==null){
		return '';
	}
	if(time.length == 10) {
		time = time + "000";
	}
	var a = parseInt(time);
	if(time == '') {
		b = new Date();
	} else {
		b = new Date(a);
	}
	var year = b.getFullYear();
	var mouth = b.getMonth() + 1;
	var day = b.getDate();
	var h = b.getHours();
	var m = b.getMinutes();
	var s = b.getSeconds();
	var c = year + sp + two(mouth) + sp + two(day);
	var w = b.getDay(); 
	var weeks = {         
		"1" : "周一",         
		"2" : "周二",         
		"3" : "周三",         
		"4" : "周四",         
		"5" : "周五",         
		"6" : "周六",         
		"0" : "周日"        
		}; 
	if(istrue) {
		c = c + " " + two(h) + ":" + two(m);
		c = isweek ? c + ' '+ weeks[w]:c
		return c;
	} else {
		c = isweek ? c + ' '+ weeks[w]:c
		return c;
	}
}
const getTimer = (stringTime) => {
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var month = day * 30;
    var time1 = new Date().getTime();//当前的时间戳
    console.log(time1);
    var time2 = Date.parse(new Date(stringTime));//指定时间的时间戳
    console.log(time2);
    var time = time1 - time2;

    var result = null;
    if (time < 0) {
    } else if (time / month >= 1) {
        result = getTime(time2,'-',true)
    } else if (time / week >= 1) {
        result = getTime(time2,'-',true)
    } else if (time / day >= 1) {
        result = parseInt(time / day) + "天前";
    } else if (time / hour >= 1) {
        result = parseInt(time / hour) + "小时前";
    } else if (time / minute >= 1) {
        result = parseInt(time / minute) + "分钟前";
    } else {
        result = "刚刚发布！";
    }
    return result;
}

export default {
    addZero,
    NullStr,
    getTimer
}
