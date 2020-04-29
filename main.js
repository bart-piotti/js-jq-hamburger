//Aggiunge classe .active (display block) all'hamburger menu
$("header a i").click(function()
    {
	  $(".hamburger-menu").toggleClass("active");
    }
);


//Rimuove classe .active (display block) all'hamburger menu
$(".hamburger-menu.a.i").click(function()
    {
	  $(".hamburger-menu").toggleClass("active");
    }
);
