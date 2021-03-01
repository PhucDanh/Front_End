

document.getElementById('btnXacNhan').onclick = function(){
    let nhanVien = new NhanVien();
    nhanVien.maNhanVien = document.getElementById('maNhanVien').value;
    nhanVien.tenNhanVien = document.getElementById('tenNhanVien').value;
    let ChucVu = document.getElementById('chucVu');
    nhanVien.tenChucVu = ChucVu.options[ChucVu.selectedIndex].innerHTML;
    nhanVien.hsChucVu = parseFloat(document.getElementById('chucVu').value);
    nhanVien.luongCoBan = parseFloat(document.getElementById('luongCoBan').value);
    nhanVien.soGioLam = parseFloat(document.getElementById('soGioLam').value);

    console.log(nhanVien.tenChucVu);
    console.log(nhanVien.hsChucVu);
    console.log(nhanVien.luongCoBan);
    console.log(nhanVien.tongLuong());

    document.getElementById('txtMaNhanVien').innerHTML = nhanVien.maNhanVien;
    document.getElementById('txtTenNhanVien').innerHTML = nhanVien.tenNhanVien;
    document.getElementById('txtChucVu').innerHTML = nhanVien.tenChucVu;
    document.getElementById('txtTongLuong').innerHTML = nhanVien.tongLuong();
    document.getElementById('txtXepLoai').innerHTML = nhanVien.xepLoai();

    document.getElementById('tblNhanVien').innerHTML += addRow(nhanVien);
}

var addRow = function(nhanVien){
    let content = `
    <tr>
        <td scope="col">${nhanVien.maNhanVien}</td>
        <td scope="col">${nhanVien.tenNhanVien}</td>
        <td scope="col">${nhanVien.tenChucVu}</td>
        <td scope="col">${nhanVien.hsChucVu}</td>
        <td scope="col">${nhanVien.luongCoBan}</td>
        <td scope="col">${nhanVien.tongLuong()}</td>
        <td scope="col">${nhanVien.soGioLam}</td>
        <td scope="col">${nhanVien.xepLoai()}</td>
        <td><button class="btn btn-danger">Delete</button></td>
    </tr>    
    `;
    return content;   
}

