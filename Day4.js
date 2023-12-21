function hello(){
    return "hallo guys"; //harus di return nilai yg mau kt ambil
}
console.log (hello());

function hitung(){
    let data =1+2;
    return data;
}
console.log(hitung());

function hitung2(a,b){
    let data2=a+b;
    return data2;
}
console.log(hitung2(4,5));

//function cek ongkir
//user mamasukkan parameter nama wilayah , jatim 15000, jabar 10000
//output jumlah ongkir untuk wilayah 10000
function cekOngkir (wilayah){
    let hasil
    if(wilayah === "jawa barat"){
        //console.log (`jumlah ongkir untuk ${wilayah} 10000`)
        hasil = `jumlah ongkir untuk ${wilayah} 10000`
    } else {
        //console.log (`jumlah ongkir untuk ${wilayah} 15000`)
        hasil = `jumlah ongkir untuk ${wilayah} 15000`
    }
    return hasil; //mengembalikan nilai
}
console.log (cekOngkir ("jawa timur"));
console.log (cekOngkir ("jawa barat"));

function sayHi (name){
return name;
}
console.log(sayHi("Mariana"));

//buat function untuk menghitung diskon
//jika hari jumat diskon 10000
//data produk
function cekDiskon(hari) {
    if(hari==="jumat"){
        diskon = 10000;
    }
    else {diskon = 0}
    return diskon;
    
}
console.log(cekDiskon("senin"));
console.log(cekDiskon("jumat"));

//user bayar dgn uang tunai 50000
//diskon jumat berkah
//2 paramater untuk simpan hari dan nominal uang pembeli
// output : nama produk, subtotal, diskon dan kembali
let product = [ //array
{
    nama : "ultra milk",
    harga : 6900
},
{
    nama : "Chitato",
    harga : 11500
}
]
function hitungTransaksi(hari,tunai){
    let transaksi={ //object
        product:product,
        subtotal: product[0].harga+product[1].harga,
        diskon:0,
        tunai:tunai,
        kembali:0
    }
    if (hari==="jumat"){
        transaksi.diskon = 10000;
    }
    transaksi.total=transaksi.subtotal-transaksi.diskon;
    transaksi.kembali=tunai-transaksi.total;
    return transaksi
}

console.log(hitungTransaksi("jumat",50000));
console.log (hitungTransaksi("kamis",100000));

// function declaration vs function expression

//function declaration
console.log("function declarasi bs dipanggil sblm dideklarasi functionnya :" +hallo());

function hallo(){
    return "hallo";
}
console.log(hallo());

//function expression ada variablenya
const sayHai = function () {
    return "hello world"
}
console.log(sayHai()); //function ini bs dipanggil stlh dibuat..jd cm bs dibawah dr function

//arrow function =>
const sapaSaya = () => "nama saya mariana"
console.log(sapaSaya());

const hitungSaya = (a,b) =>a+b 
console.log(hitungSaya(5,5));

//challenge : Jika nila lbh dr 80 nilainya A, 70-79 = B, 60-69 = c, 50-59 = D, >59 = E

function hasilUjian(nilai){
    let hasil;
    if (nilai >= 80) {
        hasil = "A";
    }
    else if (nilai <= 79 && nilai >= 70){
        hasil = "B"
    }
    else if (nilai <= 69 && nilai >= 60){
        hasil = "C"
    }
    else if (nilai <= 59 && nilai >= 50){
        hasil = "D"
    }
    else {hasil ="E"}
    return hasil;

}
console.log(hasilUjian(30));

//atau
//let grade =(nilai>=80)?"A":(nilai>=70)?"B":(nilai>=60)?"C":(nilai>=50)?"D":"E";
//console.log(grade(80));

//challenge grab car perjalanan
// 1-5 km pertama = 10000 dan 1 km selanjutnya 1500
// input : nama pemesan, dari dan ke, jarak, metode pembayaran
// output : nama pemesan, dari dan ke , jarak , total, diskon,metode pembayaran
// untuk jarak diatas 15km diskon 10%

function ojol(namaPemesan,dariMana,keMana,jarakTujuan,MetodeBayar){
    let strukOjol = {
        Pemesan:namaPemesan,
        Alamat:dariMana,
        Tujuan:keMana,
        Jarak:jarakTujuan,
        Total:0,
        Diskon:0,
        Metode_Bayar:MetodeBayar
    }
    if(jarakTujuan <=5){
        strukOjol.Total=10000;
    }
    else if (jarakTujuan>=15){
        let Tampung;
        Tampung = (jarakTujuan-5)*1500;
        strukOjol.Total=(10000+Tampung)*0.9;
    }
    else{
        let Tampung1;
        Tampung1 = (jarakTujuan-5)*1500;
        strukOjol.Total=10000+Tampung1;
    }
    //return strukOjol.Jarak=`${jarakTujuan} km`;
    return strukOjol;
}
console.log (ojol("Mariana","The Mansion","MOI",16,"Tunai"));