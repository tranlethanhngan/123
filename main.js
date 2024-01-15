var object = {
    hoTen: "",
    email: "",
    diaChi: "",
    soDienThoai: "",
    yeuCau: "",
    tensanpham: "",
    giaTien: ""
}

$("#btn-1").on("click", function(){
    console.log("Khách hàng chọn mua Cushion YSL");
    alert("Đã cho vào giỏ hàng 1 sản phẩm Cushion YSL");
    $("#btn-1").removeClass("btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-2").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-3").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-4").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-5").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-6").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    object.tensanpham = "Cushion YSL";
    object.giaTien = "1.200.000VND";
})

$("#btn-2").on("click", function(){
    console.log("Khách hàng chọn mua Serum Jomalone");
    alert("Đã cho vào giỏ hàng 1 sản phẩm Serum Jomalone");
    $("#btn-2").removeClass("btn").addClass("btn-success btn bg-main w-100")
    $("#btn-1").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-3").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-4").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-5").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-6").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    object.tenBanh = "Serum Jomalone";
    object.giaTien = "560.000VND";
})

$("#btn-3").on("click", function(){
    console.log("Khách hàng chọn mua sản phẩm Clay Mask");
    alert("Đã cho vào giỏ hàng 1 sản phẩm Clay Mask");
    $("#btn-3").removeClass("btn").addClass("btn-sdanger btn bg-main w-100")
    $("#btn-1").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-2").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-4").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-5").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-6").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    object.tenBanh = "Clay Mask";
    object.giaTien = "900.000VND";
})

$("#btn-4").on("click", function(){
    console.log("Khách hàng chọn mua sản phẩm Set Skincare");
    alert("Đã cho vào giỏ hàng 1 Set Skincare");
    $("#btn-4").removeClass("btn").addClass("btn-success btn bg-main w-100")
    $("#btn-1").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-3").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-2").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-5").removeClass("btn-dangerbtn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-6").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    object.tenBanh = "Set Skincare";
    object.giaTien = "1.200.000";
})

$("#btn-5").on("click", function(){
    console.log("Khách hàng chọn mua sản phẩm Set Blossom Cream");
    alert("Đã hết hàng ");
    $("#btn-5").removeClass("btn bg-main w-100").addClass("btn-success btn bg-main w-100")
    $("#btn-1").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-3").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-4").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-2").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-6").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    object.tenBanh = "Set Blossom Cream";
    object.giaTien = "240.000VND";
})

$("#btn-6").on("click", function(){
    console.log("Khách hàng chọn mua sản phẩm SunCream");
    alert("Đã cho vào giỏ hàng 1 sản phẩm SunCream");
    $("#btn-6").removeClass("btn").addClass("btn-success btn bg-main w-100")
    $("#btn-1").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-3").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-4").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-5").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    $("#btn-2").removeClass("btn-danger btn bg-main w-100").addClass("btn bg-main w-100")
    object.tenBanh = "SunCream";
    object.giaTien = "360.000VND";
})

$("#btn-0").on("click", function(){
    console.log(object)
    alert("Thanh toán thành công!")
    $("#btn-0").removeClass("btn-danger").addClass("btn-warning")
})

$("#btn-send").on("click", function(){
    object.hoTen = document.getElementById("inp-hoTen").value
    object.email = document.getElementById("inp-email").value
    object.soDienThoai = document.getElementById("inp-soDienThoai").value
    object.diaChi = document.getElementById("inp-diaChi").value
    object.yeuCau = document.getElementById("inp-yeuCau").value
    console.log(object)
    alert("Đặt hàng thành công!")
    $("#btn-send").removeClass("btn-success").addClass("btn-warning")
})