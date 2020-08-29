/* JaveScript Document */

function submitForm() {
	document.getElementById("formbox").innerHTML = "Great! Your email has been saved. ";
  }
	
function scrollManager() {
	var gora_ekranu = document.documentElement.scrollTop;
	var dol_ekranu = gora_ekranu + window.innerHeight;
	
	var wysokosc = 1000;
	if(window.innerWidth<1140) wysokosc = 800;
	if(window.innerWidth<600) wysokosc = 600;
	
				// "zanurzenie" headera
	if(gora_ekranu < 600) { 
		document.getElementById("home").style.height = (wysokosc - gora_ekranu/4)+"px";
	  }
				// koniec

	
				// zmiana zablokowanego headera przy scrollu
	if(gora_ekranu > (wysokosc-350)) {
		document.getElementById("header_menu").style.position = "fixed";
		document.getElementById("header_menu").style.background = "#33d2fd";
		document.getElementById("header_menu").style.padding = "0";
	  } else {
		document.getElementById("header_menu").style.position = "relative";
		document.getElementById("header_menu").style.background = "none";
		document.getElementById("header_menu").style.padding = "";
	  }
				
				
				// pojawienie chmurek w sekcji 1
	
	var offset_chmur = 0;
	var element = document.getElementById("clouds");
	do { 
		offset_chmur += element.offsetTop;
		element = element.offsetParent;
	  } while(element != null);
	
	var clouds = document.getElementsByClassName("cloud");
	
	for(var i=0; i<clouds.length; i++) {
		var gora_chmury = offset_chmur + clouds[i].offsetTop;
		var dol_chmury = offset_chmur + clouds[i].offsetTop + clouds[i].offsetHeight;
	
		if( (dol_ekranu > (dol_chmury-50)) && (gora_ekranu < (gora_chmury+50)) )	 	// chmura prawie w całości jest na ekranie 
			clouds[i].style.animation = "appearCloud 2s forwards";
	  }
				// koniec pojawiania chmurek

				
				// pojawienie obrazka w sekcji 3
	var gora_obrazka = 0;
	var element = document.getElementById("codetable");
	do { 
		gora_obrazka += element.offsetTop;
		element = element.offsetParent;
	  } while(element != null);
	
	var dol_obrazka = gora_obrazka + document.getElementById("codetable").offsetHeight;
	
	if( ((dol_ekranu > (dol_obrazka+50)) && (gora_ekranu < gora_obrazka))		// wjechał z dołu lub jest na ekranie
		|| ((gora_ekranu < (gora_obrazka+50)) && (dol_ekranu > dol_obrazka)) )	 	// wjechał z góry lub jest na ekranie (zapobiega uruchomieniu animacji poza ekranem, również jeśli strona załadowana jest ze scrollem poniżej)
		document.getElementById("codetable").style.animation = "appearCodetable 1.5s ease-out forwards";
				// koniec pojawiania obrazka
  }
	