// Animate in website
$(document).ready(function(){
    $(".centered h2").animate({
        left: '50%',
        opacity: 1
    },2000)
    $(".centered p").animate({
        right: '0',
        opacity: 1
    },2000)


// Scroll To Required section
$(window).scroll(function(){
    let scrollTop =$(window).scrollTop();
    if(scrollTop > 600)
        {
            $("#btnUp").fadeIn(500);
        }
    else
        {
            $("#btnUp").fadeOut(520);
        }
})
// Scroll links in navbar with sections
$('a[href^="#"]').click(function() {
    let hash = $(this).attr('href');
    let top=$(hash).offset().top;
    let heightNavbar = $("nav").outerHeight();
      $('html, body').animate({
        scrollTop: top-heightNavbar
      }, 1000);
      return false;
  });
// scroll top when you click btn in the button
$("#btnUp").click(function(){
    $("body").animate({ scrollTop:0} , 1500)
})
// Show & Hidden Form LogIn
$(".myBtn").click(function(){
    $('#Login, #logIn').show();
  });
  // Close login
$("#logIn i").click(function(){
    $('#Login, #logIn').hide();
})

// Show & Hidden Form signUp
$("#btn-signUp").click(function(){
    $('#SignUp, #Form_SignUp').show();
  });
   // Close signUp
$("#Form_SignUp i").click(function(){
    $('#SignUp, #Form_SignUp').hide();
})

/*
When click login button:-
    1/  Hiden the form
    2/  Show the Link profile in navbar
    3/  Hidden login in navbar
    4/  Hidden signUp in navbar
    5/ Show LogOut
*/
$(".ShowBrofile").click(function(){
    $("#Login").hide();
    $('.removeAndDisplay').show().addClass("active");
    $(".myBtn").hide();
    $("#btn-signUp").hide();
    $('#logOut').show();
});

/*
    When click SignUp:-
        1/ hidden form SignUp
        1/ show Profile 
        2/ hidden signUp button 
        3/ hidden logOut
*/
$('#SignUpBtn').click(function(){
    $("#SignUp").hide();
    $('.removeAndDisplay').show().addClass("active");
    $("#btn-signUp").hide();
    $(".myBtn").hide();
});
/*
    When click logOut:-
        1/ hidden Profile 
        2/ show signUp button 
        3/ show logOut
*/
$('#logOut').click(function(){
    $('.removeAndDisplay').hide()
    $("#btn-signUp").show();
    $(".myBtn").show();
});



/* profile */
var TitleInp = document.getElementById("Title");
var YourNoticeInp = document.getElementById("YourNotice");
var addBtn = document.getElementById("addBtn");

var productsCon ;

if(localStorage.getItem("productsCon") == null)
    {
        productsCon = [];
    }
else
    {
        productsCon =JSON.parse( localStorage.getItem("productsCon"));
        displayData();

    }



$("#addBtnShow").click(function(){

    $("#Profile").slideToggle(2000 )
    $(".profileSection").slideToggle(1500)
})

$('#addBtn').click(function(){
    addProduct();
    displayData();
    clearForm();
});

function addProduct()
{
    var product = 
        {
            Title:TitleInp.value,
            Notice:YourNoticeInp.value
        }
    productsCon.push(product);
    
localStorage.setItem("productsCon",JSON.stringify(productsCon));
    
}

function displayData()
{
    var cols="";
    for(var i = 0 ; i<productsCon.length ; i++)
        {
        cols +='<div class="col-md-4"> <div class="product"><h3 class "plus">'+productsCon[i].Title+'</h3><p>'+productsCon[i].Notice+'</p><button class="btn btn-danger" onclick="deleteProduct('+i+')">delete</button></div></div>'    
        }
    document.getElementById("rowData").innerHTML = cols;
}
function deleteProduct(id)
{
    
    productsCon.splice(id,1);
localStorage.setItem("productsCon",JSON.stringify(productsCon));
    
    displayData();

}
function clearForm()
{
    
   var inputs= document.getElementsByClassName("form-control");
    
    for(var i= 0 ; i <inputs.length ; i++)
        {
            inputs[i].value = "";
        }
}

let lis = $("#options-container ul li");
let colors = ['orange' , 'lightgreen' , '#09c' , 'teal' , 'aqua', 'balck']


for(let i= 0 ; i< colors.length ; i++)
    {
        lis.eq(i).css("backgroundColor" , colors[i])
    }

lis.click(function(){
    
    let color = $(this).css("backgroundColor");
    $(".product").css("backgroundColor" , color)
    localStorage.setItem("productsCon",JSON.stringify(productsCon));
    
})
   
})
