function validateForm() {
    // 获取表单元素的值
    var username = document.querySelector("input[name='name']").value;

if (usernameValue==""){
    printError(username,"请输入用户名");
}
else{
    removeError(username);
}}

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
if(username == "" || username == null){
    printError("nameErr", "用户名不能为空");
    // return false;
}