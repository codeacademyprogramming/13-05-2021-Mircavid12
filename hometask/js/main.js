

var teklik = [
  "",
  "bir",
  "iki",
  "üç",
  "dörd",
  "beş",
  "altı",
  "yeddi",
  "səkkiz",
  "doqquz",
];
var onluq = [
  "on",
  "iyirmi",
  "otuz",
  "qırx",
  "əlli",
  "altmış",
  "yetmiş",
  "səksən",
  "doxsan",
];
var yuzluk = [
    "",
    "iki",
    "üç",
    "dörd",
    "beş",
    "altı",
    "yeddi",
    "səkkiz",
    "doqquz",
  ];

function numberToWord(num) {
  var str = num.toString();
  var strLength = num.toString().length;
  var word ;
  if(num==0 && strLength==1){
    word="sıfır";
}
  if(strLength==1 && num!=0){
      word=teklik[num];
  }
  if(strLength==2){
    word=onluq[parseInt(str[0])-1] +" "+ teklik[parseInt(str[1])];
  }
  if(strLength==3){
    if(str[1]=="0"){
        word=yuzluk[parseInt(str[0])-1] +" yüz " + teklik[parseInt(str[2])];
    }
    else{
        word=yuzluk[parseInt(str[0])-1] +" yüz "+ onluq[parseInt(str[1])-1] + " "+ teklik[parseInt(str[2])];
    }
  }
  return word;
}
function resize(number){
    if(number>1000 && number<1000000 && number%1000!=0){
        return numberToWord((number-number%1000)/1000) + " min " + numberToWord(number%1000);
    }
    if(number>1000 && number<1000000 && number%1000==0){
        return numberToWord((number-number%1000)/1000) + " min";
    }
    if(number==1000){
        return "min";
    }
    if(number>1000000){
        return "OVER LIMIT"
    }
    else{
        return numberToWord(number);
    }
}

console.log(resize(1000000));