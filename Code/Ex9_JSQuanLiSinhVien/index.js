function log(string){
    console.log(string);
}

function main(){
    var total = parseFloat((document.getElementById("tongTien")).value);
    var tipMoney = parseFloat((document.getElementById("tienTip")).value);
    var people = parseFloat((document.getElementById("soNguoi")).value);
    var result = total + tipMoney + people;
    log(result);



    var button = document.querySelector('#btnTinhtien');
    var parent_closet = button.closest('.form-group');
    console(button.parentElement);
    //=> DOM tới cha gần nhất với con
    
}

main();


