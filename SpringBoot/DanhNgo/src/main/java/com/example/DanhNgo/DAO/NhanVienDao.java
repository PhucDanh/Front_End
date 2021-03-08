package com.example.DanhNgo.DAO;

import com.example.DanhNgo.entity.NhanVien;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class NhanVienDao {
    static List<NhanVien> danhSachNhanVien = null;
    static {
        danhSachNhanVien = new ArrayList<NhanVien>();
        danhSachNhanVien.add(new NhanVien(1234,"nam","Giam Doc",3,1000000,150));
        danhSachNhanVien.add(new NhanVien(4321,"dat","Giam Doc",3,1000000, 120));
    }

    public List<NhanVien> GetDanhSachNhanVien(){
        return danhSachNhanVien;
    }
}
