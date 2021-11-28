// "  abc  " ----> "abc  " ----> "abc"
function trim(txt) {
  var afterTrimTxt = txt.replace(/^\s*/, "").replace(/\s*$/, "");
  return afterTrimTxt;
}

function isEmail(email) {
  //验证规则：5-10个字符@1个或多个以上字符，以com、net、org结尾
  var regExp = /^\w{5,10}@\w+\.(com|net|org)$/;

  var flag = regExp.test(email);

  return flag;
}



/*
  正则最最最基本使用:
    创建一个正则对象 / (内容) /  例如: const reg = /^123/
    校验正则:   reg.test(x)   这里x表示待校验的字符串
    匹配符:
        [a-z] ：匹配小写字母从a-z中的任一字符
        [A-Z] ：匹配大写字母从A-Z中的任一字符
        [0-9] ：匹配数字从0-9任一字符，相当于\d
        [0-9a-z] ：匹配数字从0-9或小写字母从a-z任一字符
        [0-9a-zA-Z] ：匹配数字从0-9，小写字母从a-z或者是大写字母从A-Z的任一字符
        [abcd] ：匹配字符abcd中的任一字符
   定位符:
    ^ 匹配输入字符串的开始位置（以***开始）
    $ 匹配输入字符串的结束位置（以***结束）
*/
// 186  134-139  150-152
function isPhone(phoneNumber) {
  return /^(186|13[4-9]|15[0-2])/.test(phoneNumber)
}



module.exports = isPhone; //请勿删除