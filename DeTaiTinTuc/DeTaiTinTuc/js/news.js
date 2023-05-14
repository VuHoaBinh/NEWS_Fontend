
window.addEventListener("scroll",()=>{
    const heder=document.querySelector("#header");
    heder.classList.toggle("sticky",window.scrollY>0);
    
})

document.querySelector(".search_click").addEventListener("click",
()=>{
    var iconsearch=document.querySelector(".uil-search");
    var clicksearchadd=document.querySelector(".search_click");
    iconsearch.classList.toggle("uil-times");
    document.querySelector(".form_search").classList.toggle("active");
}
)
//duw lu tin tuc header
var headertintuc=[

    {
        id:"01",
        thoigian:"16:40",
        noidung:" Diễn viên hài Tam Thanh tiết lộ cuộc sống hôn nhân với vợ kém 20 tuổi"
    }
    ,
    {
        id:"001",
        thoigian:"6:40",
        noidung:" Diễn viên hài Tam Thanh tiết lộ cuộc sống hôn nhân với vợ kém 20 tuổi"
    }
,  {
    id:"01",
    thoigian:"1:40",
    noidung:" Diễn viên hài Tam Thanh tiết lộ cuộc sống hôn nhân với vợ kém 20 tuổi"
}

,  {
    id:"01",
    thoigian:"2:40",
    noidung:" Diễn viên hài Tam Thanh tiết lộ cuộc sống hôn nhân với vợ kém 20 tuổi"
}


    ,
    {
        id:"02",
        thoigian:"6:30",
        noidung:" Những sản phẩm đẹp hút hồn từ cây cỏ vườn nhà của chàng trai trẻ"
    }
    ,{
        id:"03",
        thoigian:"12:40",
        noidung:" Triệt phá các đường dây cho vay nặng lãi dọa con nợ ‘không trả tiền không sống yên’"
    }
    ,{
        id:"04",
        thoigian:"10:50",
        noidung:"Người 'chèo xuồng 18 ngày đi Ấn Độ thăm vợ' về Việt Nam: Gầy, đen đi nhiều"
    },
    {
        id:"05",
        thoigian:"12:30",
        noidung:" Những sản phẩm đẹp hút hồn từ cây cỏ vườn nhà của chàng trai trẻ"
    },
    
   
]

var htmlheader=""
headertintuc.forEach((value)=>{
    var texvalue=` <div class="contern_text">
    <p class="tg">${value.thoigian}</p>
    <a href="./TrangTinTuc/html/trangchitiet.html" class="contant_news">
     ${value.noidung}
    </a>
</div>`
htmlheader+=texvalue

})
document.querySelector('.content_all_new_header').innerHTML=(htmlheader);

$("#yeuthich").click(()=>{
    $(".spend_360_contents_yeuthich").show();
    $(".spend_360_content_hientai").hide();
})


$("#moinhat").click(()=>{
    $(".spend_360_contents_yeuthich").hide();
    $(".spend_360_content_hientai").show();
})

