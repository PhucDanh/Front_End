// console.log('test');
console.log(axios);
var nhanVien2 = new NhanVien();

var addNhanVien = function(nhanVien){
    let promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien`,
        method: "POST",
        data: nhanVien,
        reponseType: "json",
    })

    promise.then(function(result){
        console.log("OK");
        console.log(result.data);
        getNhanVien();
    })

    promise.catch(function(error){
        console.log('error');
    })
}

var getNhanVien = function(){
    let promise = axios({
        url: `http://192.168.0.114:8080/NhanVien`,
        method: "GET",
        reponseType: "json",
    })

    promise.then(function(result){
        console.log("OK");
        console.log(result.data);
        showTable(result.data);
    })

    promise.catch(function(error){
        console.log('error');
    })
}

var delNhanVien = function(number){
    let promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${number}`,
        method: "DELETE",
        reponseType: "json",    
    })

    promise.then(function(result){
        console.log("OK");
        console.log(result.data);
        getNhanVien();  
    })

    promise.catch(function(error){
        console.log('error');
    })
}

var getNhanVien2 = function(number){
    let promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=${number}`,
        method: "GET",
        reponseType: "json",
    })

    promise.then(function(result){
        console.log("OK");
        console.log(result.data);
        Object.assign(nhanVien2,result.data);
        updateInformation(result.data);
    })

    promise.catch(function(error){
        console.log('error');
    })
}

document.getElementById('btnCapNhat').onclick = function(event){

    let nhanVien1 = new NhanVien;
    nhanVien1.maNhanVien = validate.isNumber("#maNhanVien", "ma nhan vien");
    nhanVien1.tenNhanVien = validate.isEmail("#tenNhanVien", "ten nhan vien");
    nhanVien1.soGioLam = parseFloat(validate.inRange("#soGioLam", 50, 200,"so gio lam ngoai range"));
    nhanVien1.luongCoBan = parseFloat(validate.inRange("#luongCoBan", 1000, 2000,"luong co ban ngoai range"));
    let ChucVu = document.getElementById("chucVu");
    nhanVien1.tenChucVu = ChucVu.options[ChucVu.selectedIndex].innerHTML;
    nhanVien1.heSoChucVu = parseFloat(ChucVu.value);

    nhanVien1.soGioLamTrongThang = nhanVien1.soGioLam;
    nhanVien1.chucVu = nhanVien1.tenChucVu;

    let promise = axios({   
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=${nhanVien1.maNhanVien}`,
        method: "PUT",
        data: nhanVien1,
        reponseType: "json",
    })

    promise.then(function(result){
        console.log("OK");
        console.log(result.data);
        getNhanVien();
    })

    promise.catch(function(error){
        console.log('error');
    })
}

getNhanVien();
