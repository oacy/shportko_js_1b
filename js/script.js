var arr = new  Array(5);

for (var i=1; i<=5; i++) {
    var name='Введите имя №'+i;
    arr[i]=prompt(name);
}

var UserName;
var Message;
var tr=false;

UserName=prompt("Введите имя пользователя");

for (var i=1; i<=5; i++){
    if(arr[i]==UserName){
        Message=UserName+' , вы успешно вошли'
        alert(Message);
        tr=true;
    }
}

if (tr==false){
    Message='Пользователь с именем "' + UserName + '" не зарегистрирован в системе'
    alert(Message)
}
