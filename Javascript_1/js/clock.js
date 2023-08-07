let userName = prompt("Please name and surname enter :", "example: Kader Ergin");//Girilen ad soyad bilgisi(Entered first and last name)
userName = userName.toLowerCase().split(" ");
firstName = userName[0][0].toUpperCase() + userName[0].slice(1);                //Girilen ad bilgisinin ilk harfi buyuk soyadinin hepsini buyuk harf yapar
lastName = userName[1][0].toUpperCase() + userName[1].slice(1).toUpperCase();  //(The first letter of the entered name is capitalized, making the last name all capital letters)

let span = document.querySelector("#myName");   //Girilen ad soyad bilgisi sec,yazı rengi beyaz olsun
span.innerHTML = `${firstName} ${lastName}`;   //(Select the entered name and surname information, the text color should be white)
span.style = `color:white;`;                

function showTime() {
  const today = new Date();
  let y = today.getFullYear();  //Kullanıcının giris yaptigi saat ve tarih bilgisini dondürebilmek icin degisken tanimlama 
  let a = today.getMonth()+1;  //(Defining variables to return the time and date the user logged in)
  let d = today.getDate();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  div = document.getElementById("myClock");
  div.innerHTML =
  `<p style="border-bottom: 7px solid orange">${h}:${m}:${s}</p> 
  <p style="font-size: 2.8rem;">${d}.${a}.${y}</p>`;   //ilk satirda saat bilgiisi altında turuncu cizgi olsun ikinci satirda gun ay yil bilgisi(tarih bilgisi boyutunuda belirle) gosterilsin
  setTimeout(showTime, 1000);                         //Let there be an orange line under the time information on the first line, and the day month year information on the second line.
}                                                    //1000 milisaniye sonra fonksiyonu calistirir(Executes the function after 1000 milliseconds)                                        

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;                                   // 10'dan kucukse sayilarin onune sifir ekle(Add zero to ten of the numbers if less than 10)
  } 
  return i;
}

showTime();
