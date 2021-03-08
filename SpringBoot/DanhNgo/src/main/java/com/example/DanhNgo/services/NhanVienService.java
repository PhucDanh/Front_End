package com.example.DanhNgo.services;

import com.example.DanhNgo.DAO.NhanVienDao;
import com.example.DanhNgo.entity.NhanVien;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhanVienService {
    @Autowired
    private NhanVienDao nhanVienDao;
    public List<NhanVien> GetDanhSachNhanVien(){
        return nhanVienDao.GetDanhSachNhanVien();
    }
}
