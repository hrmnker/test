



let main_day = document.getElementsByClassName('main__day');
var main_option = document.getElementsByClassName('main__option');
var main_triangle = document.getElementsByClassName('main__triangle')
var i =0;
main_day[0].onclick = function(){
    i++;
  
   console.log(i)
   if(i%2 == 0){  //判定条件余数为0时为偶数
       
        main_option[0].style.display = 'block';
        main_triangle[0].style.display = 'block';
   }else{
        
        main_option[0].style.display = 'none';
        main_triangle[0].style.display = 'none';
        

   }  
}