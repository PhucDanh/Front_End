package com.example.DanhNgo.entity;

import org.springframework.stereotype.Component;

@Component
public class NhanVien {
    private int maNhanVien;
    private String tenNhanVien;
    private String tenChucVu;
    private int heSoChucVu;
    private int luongCoBan;
    private int soGioLamTrongThang;

    public NhanVien(int maNhanVien, String tenNhanVien, String tenChucVu, int heSoChucVu, int luongCoBan, int soGioLamTrongThang) {
        this.maNhanVien = maNhanVien;
        this.tenNhanVien = tenNhanVien;
        this.tenChucVu = tenChucVu;
        this.heSoChucVu = heSoChucVu;
        this.luongCoBan = luongCoBan;
        this.soGioLamTrongThang = soGioLamTrongThang;
    }

    public NhanVien() {
    }

    public int getMaNhanVien() {
        return maNhanVien;
    }

    public void setMaNhanVien(int maNhanVien) {
        this.maNhanVien = maNhanVien;
    }

    public String getTenNhanVien() {
        return tenNhanVien;
    }

    public void setTenNhanVien(String tenNhanVien) {
        this.tenNhanVien = tenNhanVien;
    }

    public String getTenChucVu() {
        return tenChucVu;
    }

    public void setTenChucVu(String tenChucVu) {
        this.tenChucVu = tenChucVu;
    }

    public int getHeSoChucVu() {
        return heSoChucVu;
    }

    public void setHeSoChucVu(int heSoChucVu) {
        this.heSoChucVu = heSoChucVu;
    }

    public int getLuongCoBan() {
        return luongCoBan;
    }

    public void setLuongCoBan(int luongCoBan) {
        this.luongCoBan = luongCoBan;
    }

    public int getSoGioLamTrongThang() {
        return soGioLamTrongThang;
    }

    public void setSoGioLamTrongThang(int soGioLamTrongThang) {
        this.soGioLamTrongThang = soGioLamTrongThang;
    }
}
