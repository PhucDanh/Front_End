var NhanVien = function(){
    this.maNhanVien = "";
    this.tenNhanVien = "";
    this.tenChucVu = "";
    this.hsChucVu = 0;
    this.luongCoBan = 0;
    this.soGioLam = 0;
    this.tongLuong = function(){
        let result = this.hsChucVu * this.luongCoBan;
        return result;
    }

    this.xepLoai = function () {
        var soGioLam = this.soGioLam;
        const factor = 10;
        const obset = 50;
        const max = 120;
        const min = 50;
        var type = ["trung binh", "trung binh", "trung binh", "kha", "kha", "gioi", "gioi", "xuat sac"];
        if(soGioLam > max) {
            soGioLam = max;
        } else if (soGioLam <= min) {
            soGioLam = min;
            return "khong xep loai";
        }
        
        var index = Math.round(((soGioLam - obset) / factor) - 0.5);
        return type[index];
    }
    
}