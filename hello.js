let alisverisListesi=[];

for (let i = 0; true; i++) {
    let urun=prompt("Ürün adı giriniz.Ürünleriniz yeterliyse bitir yazınız");
    if (urun.toLowerCase()==='bitir') {
        break;
    }
    else{
        alisverisListesi[alisverisListesi.length]=urun
    }
}

console.log("Alışveriş Listesi:",alisverisListesi);
