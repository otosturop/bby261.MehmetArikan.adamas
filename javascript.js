var kelimeler = [
    { kelime: 'dürtmek', ipucu: 'Ucu sivri bir şeyle veya elle hafifçe itmek' },
    { kelime: 'pazarlık', ipucu: 'Ticari söz düellosu' },
    { kelime: 'arıtım evi', ipucu: 'Rafineri sözcüğünün türkçe kökenli karşılığı' },
	{ kelime: 'enkaz', ipucu: 'Bir yıkımın geride bıraktıkları' },
    { kelime: 'veri tabanı', ipucu: 'Akademik makaleleri içeren elektronik kaynaklar.' },
    { kelime: 'gül kurusu', ipucu: 'Mora çalan pembe' },
	{ kelime: 'milli irade', ipucu: 'Ulusça kullanılan ve hiçbir gücün etkileyemeyeceği kuvvet.'}
];

var secim =kelimesec();
var secilenkelime=secim[0];
var secilenipucu=secim[1];
var harfsayisi=secilenkelime.length;
var hatasayisi=0;

var saklikelime=new Array();
function goster()
  {
      for(var i=0;i<harfsayisi;i++)
        { 
         saklikelime[i]=' _ ';
            saklikelime[secilenkelime.indexOf(" ")]= ' - ' ;
         document.getElementById('soru').innerHTML += "<b>" + saklikelime[i] + "</b>";
        }
         document.getElementById('ipucu').innerHTML += "<b>" + secilenipucu + "</b>";
     
  }


function kelimesec() 
   {
    var secilen= Math.floor(Math.random()*kelimeler.length)
    return [kelimeler[secilen].kelime, kelimeler[secilen].ipucu]
   }

function tikla(hucreID)
   {  
       var sayac=0;
       for(var i=0;i<harfsayisi;i++)
           {
              var harfsırası=secilenkelime.indexOf(hucreID,i);
                 saklikelime[harfsırası]=hucreID;
               document.getElementById("soru").innerHTML=saklikelime.join("&nbsp");
           }
       
        var dizi=new Array();
       
       for(z=0;z<harfsayisi;z++){
         var harfler=secilenkelime.charAt(z);
             
           dizi[z]=harfler;
       }
       for(q=0;q<harfsayisi;q++)
       {
           
           if(dizi[q]==hucreID)
            { 
               document.getElementById("uyari").innerHTML ="harf var";
                if(saklikelime.indexOf(" _ ") ==-1)
     
                {  
                    document.getElementById('uyari').innerHTML = "TEBRİKLER KAZANDIZ :)";
                    document.getElementById('resim').innerHTML = "";
                }  
                
               break;
            }
           
         else if (dizi[q]!=hucreID )
           {   
               sayac++;      
           }
       
      
      }
       if(sayac==harfsayisi)
       {
           hatasayisi++;
           harfyok();
       }
    
       
   }
    
        


function harfyok(){
    
    document.getElementById("uyari").innerHTML="harf yok";
    
    adamAs(); 
    if(hatasayisi==6)
    {
		document.getElementById('uyari').innerHTML = "ADAM ASILDI!!";
		document.getElementById('resim').innerHTML = "";
    
    } 
}

function hide(obj) 
{
    obj.style.display="none";
}


function adamAs(){
	switch(hatasayisi) {
    	case 0:
        	document.getElementById("man").src="img/adam1.png"
        break;
    	case 1:
        	document.getElementById("man").src="img/adam2.jpg"
        break;
		case 2:
			document.getElementById("man").src="img/adam3.png"
		break;
		case 3:
			document.getElementById("man").src="img/adam4.jpg"
		break;
		case 4:
			document.getElementById("man").src="img/adam5.png"
		break;
		case 5:
			document.getElementById("man").src="img/adam6.jpg"
		break;
		case 6:
			document.getElementById("man").src="img/adam7.png"
		break;
	}
}





