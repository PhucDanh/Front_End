package com.example.DanhNgo.controller;

import com.example.DanhNgo.entity.NhanVien;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.example.DanhNgo.services.NhanVienService;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/NhanVien")
public class NhanVienController {
    @Autowired
    private NhanVienService nhanVienService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<NhanVien> GetDanhSachNhanVien(){
        return nhanVienService.GetDanhSachNhanVien();
    }
}
