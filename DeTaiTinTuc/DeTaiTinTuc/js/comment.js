$(document).ready(()=>{
   var coment_user=[];
  

    
   
   $('.send_comnent').click(()=>{
    var noidung_comment=$('.text_coment').val();
    var  user_imgs="../imgweb/doraemon.jpg";
    var namuser="Trầm Hồ"
    var dates=new Date();
    
       var comment={
           name:"Trầm Hồ",
           user_img:user_imgs,
           date:dates,
           contentext:noidung_comment
           
       }
       coment_user.push(comment);
  
       localStorage.setItem('dateuser_comnets',JSON.stringify(coment_user))
     console.log(  JSON.parse(localStorage.getItem('dateuser_comnets')))
       var html=` <div class=" contaner_commnet mt-5">
       <div class="user_comment">
           <img src=${user_imgs} alt="">
           <div class="coment_right">
               <h6>${namuser}</h6>
               <p>${dates}</p>
           </div>
          
       </div>
       <p class="noidung_comment">${noidung_comment}</p>
   </div>`
    $('.body_coment').append(html);
   })

   JSON.parse(localStorage.getItem('dateuser_comnets')).forEach(coments => {
       
    var html1=` <div class=" contaner_commnet mt-5">
    <div class="user_comment">
        <img src=${coments.user_img} alt="">
        <div class="coment_right">
            <h6>${coments.name}</h6>
            <p>${coments.date}</p>
        </div>
       
    </div>
    <p class="noidung_comment">${coments.contentext}</p>
</div>`

        $('.body_coment').append(html1);
   });


  
  
    


})