function bind(cardno, password) {
    //Todo:补充代码
 
}
$(document).ready(function() {
    $("#btnsubmit").click(function() {
        //卡号
        let cardno = $("#exampleInputCardno").val();
        //密码
        let password = $("#exampleInputPassword").val();
        bind(cardno, password);
    });
});