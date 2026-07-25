// =================================
// MOBILE MENU
// =================================


const menuBtn =
document.getElementById(
"menu-toggle"
);



const nav =
document.getElementById(
"main-nav"
);



if(menuBtn){


menuBtn.onclick=function(){


nav.classList.toggle(
"active"
);


};


}






// =================================
// HASH NAVIGATION
// =================================


function handleRoute(){


let hash =
location.hash;



if(!hash){

location.hash="home";

return;

}



document
.querySelectorAll(
"section"
)
.forEach(section=>{


section.style.display="none";


});





const page =
document.querySelector(hash);



if(page){


page.style.display="block";


}



}




window.addEventListener(
"hashchange",
handleRoute
);



window.addEventListener(
"load",
handleRoute
);








// =================================
// SMOOTH SCROLL
// =================================


document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.onclick=function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


target.scrollIntoView({

behavior:"smooth"

});


}



};


});








// =================================
// CONTACT FORM
// =================================


const form =
document.getElementById(
"contact-form"
);



if(form){


form.addEventListener(
"submit",

function(e){


e.preventDefault();



alert(
"Message sent successfully!"
);



form.reset();


});


}
