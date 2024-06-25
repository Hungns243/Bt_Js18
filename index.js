let mangSoNguyen = [];
let mangSoNguyenMoi = [];

document.getElementById("formNhapMang").onsubmit = function (event) {
    event.preventDefault();
    console.log("su kien submit button");

    let nhapSoNguyen = document.getElementById("nhapSoNguyen").value * 1;
    mangSoNguyen.push(nhapSoNguyen);
    console.log(mangSoNguyen);
    document.getElementById("ketQuaMang").innerHTML = `Mang so nguyen N: [${mangSoNguyen}]`;

    //reset input
    event.target.reset();
};

//1: Hàm tính Tổng các số dương
document.querySelector(".btn-warning").onclick = function () {
    console.log("button");
    let tongSoDuong = 0;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            tongSoDuong += mangSoNguyen[i];
            console.log(tongSoDuong);
        }
    }
    //xuat ket qua
    document.getElementById("ketQuaTinhTong").innerHTML = tongSoDuong;
};

//2: Hàm tính Đếm có bao nhiêu số dương trong mảng
document.getElementById("btn-demSoDuong").onclick = function () {
    //su dung phuong thuc filter
    let demSoDuong = mangSoNguyen.filter(number => number > 0).length;

    //xuat ket qua
    document.getElementById("ketQuaDemSoDuong").innerHTML = demSoDuong;
    
};

//3:
document.getElementById("btn-soNhoNhat").onclick = function () {

    let soNhoNhat = Math.min(...mangSoNguyen);

    //xuat ket qua
    document.getElementById("ketQuaNhoNhat").innerHTML = soNhoNhat;
};

//4:
document.getElementById("btn-soDuongNhoNhat").onclick = function () {

    
    let soDUong = Math.min(...mangSoNguyen.filter(number => number > 0));
    

    //xuat ket qua
    document.getElementById("ketQua4").innerHTML = soDUong;
};

//5:
document.getElementById("btn-soChan").onclick = function () {

    let soChanCuoiCung = -1;
    for (let i = mangSoNguyen.length - 1; i >= 0; i--) {
        if (mangSoNguyen[i] % 2 === 0) {
            soChanCuoiCung = mangSoNguyen[i];
            break;
        }
        
    }
    
    //xuat ket qua
    document.getElementById("ketQua5").innerHTML = soChanCuoiCung;
};

//6:
document.getElementById("btn-hoanDoi").onclick = function () {

    
    let viTri1 = document.getElementById("viTriDauTien").value * 1;
    let viTri2 = document.getElementById("viTriThuHai").value * 1;

    let hoanDoi = [...mangSoNguyen];
    [hoanDoi[viTri1], hoanDoi[viTri2]] = [hoanDoi[viTri2], hoanDoi[viTri1]];
    
    
    //xuat ket qua
    document.getElementById("ketQua6").innerHTML = `Mang sau khi doi cho la: ${hoanDoi}`;
};
//7:
document.getElementById("btn-tangDan").onclick = function () {

    let mangTangDan = [...mangSoNguyen].sort((a,b) => a-b);
    
    
    //xuat ket qua
    document.getElementById("ketQua7").innerHTML = `Mang tang dan: ${mangTangDan}`;
};

//8;
document.getElementById("btn-soNguyenTo").onclick = function () {

    function isPrime(num) {
        if (num <= 1) return false; // Số nhỏ hơn hoặc bằng 1 không phải là số nguyên tố
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; // Nếu num chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của nó, thì không phải số nguyên tố
        }
        return true;
    }

    let soNguyenTo = mangSoNguyen.find((num) => isPrime(num)) || -1;
    
    //xuat ket qua
    document.getElementById("ketQua8").innerHTML = `So nguyen to dau tien cua mang la: ${soNguyenTo}`;
};

//9:
document.getElementById("formNhapSoNguyen").onsubmit = function (event) {
    event.preventDefault();

    let soNguyenMoi = document.getElementById("nhapSoNguyen9").value * 1;
    mangSoNguyenMoi.push(soNguyenMoi);
    
    event.target.reset();
    document.getElementById("ketQuaMangMoi").innerHTML = `Mang so nguyen moi la: ${mangSoNguyenMoi}`;
};

document.getElementById("btn-demSoNguyen").onclick = function () {
    let soLuongSoNguyen = mangSoNguyenMoi.filter((num) => Number.isInteger(num)).length;

    document.getElementById("ketQua9").innerHTML = soLuongSoNguyen;
};

//10 
document.getElementById("btn-soSanh").onclick = function () {
    let soDuong = mangSoNguyenMoi.filter((num) => num > 0).length;
    let soAm = mangSoNguyenMoi.filter((num) => num < 0).length;
    let ketQuaSoSanh = "";
    if (soDuong > soAm) {
        ketQuaSoSanh = "So duong > so am"
    } else if (soDuong < soAm) {
        ketQuaSoSanh = "So duong < so am"
    } else {
        ketQuaSoSanh = "So duong = so am"
    }

    document.getElementById("ketQua10").innerHTML = ketQuaSoSanh;
};

