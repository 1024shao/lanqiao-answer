function bind(cardno, password) {
  //Todo:补充代码
  $.ajax({
    url: 'js/cardnolist.json',
    method: 'get',
    success: function (res) {
      const data = res.cardnolist.filter(item => item.cardno === cardno && item.password === password);
      if (data.length > 0) {
        document.getElementById('tip1').classList.remove('fade')
        document.getElementById('tip2').classList.add('fade')
      } else {
        document.getElementById('tip1').classList.add('fade')
        document.getElementById('tip2').classList.remove('fade')
      }
    }
  })
}
$(document).ready(function () {
  $("#btnsubmit").click(function () {
    //卡号
    let cardno = $("#exampleInputCardno").val();
    //密码
    let password = $("#exampleInputPassword").val();
    bind(cardno, password);
  });
});