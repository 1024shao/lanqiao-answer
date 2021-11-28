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

  // 186  134-139  150-152
  function isPhone(phoneNumber) {
     
  }

  

  module.exports = isPhone; //请勿删除