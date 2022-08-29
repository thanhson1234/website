   let modal = document.getElementById("myModal");
    let create1 = document.getElementById("MyBtn");
    let span = document.getElementsByClassName("close")[0];
    class thongTin{
        id;
        img;
        name;
        price;
        constructor(id, img, name, price) {
            this.id = id;
            this.name = name;
            this.img = img;
            this.price = price;
        }
    }
    let gai1 =new thongTin(0,"https://memehay.com/meme/20210930/ga-fan-mu-gay-o-o-o-o.jpg","Thách đấu","800$")
    let gai2 =new thongTin(1,"https://i.pinimg.com/236x/a1/a3/a4/a1a3a4ffc80db3f289a8cb10cbc47534.jpg","Cao thủ","700$")
    let gai3 =new thongTin(2,"https://i.pinimg.com/474x/3e/0b/0e/3e0b0e138d78f1dce413f469e94d1be3.jpg","Kim cương","600$")
    let gai4 =new thongTin(3,"https://bloganchoi.com/wp-content/uploads/2019/09/cat-iv.jpg","Bạch kim","500$")
    let gai5 =new thongTin(4,"https://sentayho.com.vn/wp-content/uploads/2020/10/meo-vang-vao-nha.jpg","Vàng","400$")
    let gai6 =new thongTin(5,"https://dogily.vn/wp-content/uploads/2021/09/tai-cup-shaded.jpg","Bạc","300$")
    let gai7 =new thongTin(6,"https://kenh14cdn.com/k:dpA6uSv3GtBzvbRT7Y4EBtfN37yCA/Image/2013/11/meotuyet2-27224/chum-anh-20-chu-meo-de-thuong-nhat-khi-mua-dong-den.jpg","Đồng","200$")
    let gai8 =new thongTin(7,"https://cdn.pixabay.com/photo/2015/05/07/19/19/kitten-756956_960_720.jpg","Sắt","100$")

     let gai = [gai1,gai2,gai3,gai4,gai5,gai6,gai7,gai8];
    function clickBtn () {
        let check = false
        let search = document.getElementById("timkiem").value;
        for (let i = 0; i < gai.length; i++) {
            if (gai[i].name === search) {
                check = true
                modal.style.display = "block";
                let str = "<div class=\"card\" style=\"width: 18rem;\">\n" +
                    "                                <img class=\"card-img-top\"\n" +
                    "                                     src= " + gai[i].img +
                    "                                     alt=\"Card image cap\">\n" +
                    "                                <div class=\"card-body\">\n" +
                    "                                    <h5 class=\"card-title\"> " + gai[i].name + "</h5>\n" +
                    "                                    <p class=\"card-text\">" + gai[i].price + "</p>\n" +
                    "                                    <button>Thêm giỏ hàng</button>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>";

                document.getElementById("pTimKiem").innerHTML = str
                break;
            }
        }
        if (check === false) {
            alert("Mời nhập lại");
        }
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    let gioHang=[]

   function hienThiGH(){
        let gh = ""
       for (let i = 0; i< gioHang.length; i++){
           gh += '  <tr>\n' +
               '                            <td><img class="class-img" sizes="100px" src="'+gioHang[i].img+'   " alt="">'+gioHang[i].name+'</td>\n' +
               '                            <td><p class="card-text">'+gioHang[i].price+'</p></td>\n' +
               '                            <td> <input style="width: 100px;outline: none" type="number" value="1"min="0"></td>\n' +
               '                            <td style="cursor: pointer" onclick="xoaGioHang('+i+')">Xóa</td>\n' +
               '\n' +
               '                        <tr>'
       }

       document.getElementById("gioHang").innerHTML = gh;
   }
   function themGioHang(id){

        gioHang.push(gai[id]);
       hienThiGH();

   }
   function xoaGioHang(id){
        gioHang.splice(id, 1);
        hienThiGH()

   }
















   //      /------------------------/
   // const btn = document.querySelectorAll("button")
   // btn.forEach(function (button, index) {
   //     button.addEventListener("click", function (event) {
   //         {
   //             let btnItem = event.target;
   //             let product = btnItem.parentElement;
   //             let productImg = product.querySelector("img").src;
   //             let productName = product.querySelector("h5").innerText;
   //             let productPrice = product.querySelector("span").innerText;
   //             addcart(productPrice, productImg, productName)
   //         }
   //     })
   // })
   // function addcart(productPrice, productImg, productName) {
   //     let addtr = document.createElement("tr");
   //     let cartItem = document.querySelectorAll("tbody tr");
   //     for (let i = 0; i < cartItem.length; i++) {
   //         let producctT = document.querySelectorAll(".title")
   //         if (producctT[i].innerHTML === productName) {
   //             alert("sản phẩm của bạn đã có trong giỏ hàng")
   //             return;
   //         }
   //     }
   //     let trcontent = ' <tr>\n' +
   //         '                <td style="display: flex; align-items: center"><img style="width: 70px" src="' + productImg + '" alt=""><span class="title">' + productName + '</span></td>\n' +
   //         '                <td><span class="prices">' + productPrice + '</span><sup>đ</sup></td>\n' +
   //         '                <td><input style="width: 40px; outline: none" type="number" value="1" min="1"></td>\n' +
   //         '                <td style="cursor: pointer"><span class="cart-delete">Xóa</span></td>\n' +
   //         '            </tr>'
   //     addtr.innerHTML = trcontent
   //     let cartTable = document.querySelector("tbody");
   //     cartTable.append(addtr)
   //     carttotal();
   //     deleteCart()
   // }
   // // ...............tính tổng..............
   // function carttotal() {
   //     let cartItem = document.querySelectorAll("tbody tr");
   //     let totalC = 0;
   //     for (let i = 0; i < cartItem.length; i++) {
   //         let inputValue = cartItem[i].querySelector("input").value
   //         let productPrice = cartItem[i].querySelector(".prices").innerHTML
   //         let totalA = inputValue * productPrice * 1000;
   //         totalC = totalC + totalA
   //
   //     }
   //     let cartTotalA = document.querySelector(".price-total span");
   //     let cartPrice = document.querySelector(".other img ")
   //     cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
   //     cartPrice.innerHTML = totalC.toLocaleString('de-DE')
   //     inputchange()
   // }
   // // .....xóa..........
   // function deleteCart() {
   //     let cartItem = document.querySelectorAll("tbody tr");
   //     for (let i = 0; i < cartItem.length; i++) {
   //         let producctT = document.querySelectorAll(".cart-delete")
   //         producctT[i].addEventListener("click", function (event) {
   //             let cartDelete = event.target;
   //             let cartItemR = cartDelete.parentElement.parentElement
   //             console.log(cartItemR)
   //             cartItemR.remove()
   //             carttotal()
   //         })
   //     }
   // }
   // // ..............thêm ô input..........
   // function inputchange() {
   //     let cartItem = document.querySelectorAll("tbody tr");
   //  }
