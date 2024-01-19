//array dimulai dr 0 dst
const prompt =require('prompt-sync')();
let warna1="hijau"
let warna2="merah"
let warna3="biru"
let warna =["hijau","merah","biru","kuning","merah","biru"]
console.log(warna);
console.log(warna[2]); //panggil array ke 2 
console.log(warna.length); //panggil panjang array dimulai dr 0

warna[2]="hitam" //ubah item di array ke 2
console.log('data sebelum', warna); 
warna.push("putih"); //tmbh 1 warna putih di taruh di plg blkg
console.log('data sesudah push', warna);
warna.pop(); //hapus array plg blkg
warna.shift(); //hapus array plg dpn
warna.unshift("ungu"); //tambah 1 array di taruh plg dpn
console.log(warna);

//array function foreach
//Warna.forEach(function(item){
//    console.log(item)})

//arrow function foreach
warna.forEach((item)=>console.log('panggil isi array warna', item));

let angka= [1,3,6,7,8]
let result = angka.filter((a)=>a>2) //function expression filter angka yg > 2
console.log(result); //hasil 3,6,7,8

//map melakukan modifikasi penghitungan di array
let hasil = angka.map((item)=>{
    return item+2; //isi array angka semua di tmbh 2
})
console.log(hasil);

//concat menggabungkan 2 array
const mammal = ["dog","cat"];
const bird = ["eagle", "penguin"];
const gabung =mammal.concat(bird);
console.log(gabung);

//modifikasi array dgn duplikat array
//kt tdk bs pakai array2=array1 krn ini apapun yg di ubah di array1 atau array2 akan slg menpengaruhi
//kt bs pake fungsi spread operator dgn fungsi array2=[...array1] 
//maka ketika ada perubahan pada array2, array1(data ori) tidak ikut berubah

let warnaku=["hijau","biru"]
let warnaBaru=[...warnaku]
warnaBaru.push("kuning")
console.log('data ori warna', warnaku);
console.log('data warna di modif', warnaBaru);

//modifikasi dgn sort. namaArray.sort((a,b)=>a-b) 
//jd modifikasi a-b itu ascending kecil ke besar, b-a itu descneding besar ke kecil

let angkaBaru =[2,5,3,7,9];
let sort=angkaBaru.sort((a,b)=>b-a) //descending
console.log(sort);

//buatkan contoh dari foreach,map,filter,find,sort
//buatkan fizbuzz menggunakan map atau foreach

console.log("CHALLENGE");
let contoh = [1,2,3,4,5]
contoh.forEach((item)=>console.log(item));
let contohMap=contoh.map((item)=> {return item+2});
console.log('isi array +2',contohMap);

let contohFilter = contoh.filter(cekAngka);
let angkaMu;
function cekAngka(angkaMu) {
  return angkaMu>=3;
}
console.log(contohFilter);

console.log(contoh.find(cekAngka));
console.log(contoh.sort((a,b)=>b-a));

//contoh fizzbus pake map
let data2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
data2.map((item) => {
    if (item % 3 == 0 && item % 5 == 0){
        console.log("Fizzbuzz", item);
    }
    else if (item % 3 == 0) {
        console.log("Fizz", item);
    }
    else if (item % 5 == 0) {
        console.log("Buzz", item);
    }
    else {
        console.log(item);
    }
})

//map dgn bantuan fungsi for 
const arr = [];
for (let i = 1; i <= 50; i++) 
{
    arr.push(i);
}
let result1 = arr.map((data) => {
    if (data % 3 == 0 && data % 5 == 0) {
        console.log(data, 'FizzBuzz');
    } else if (data % 3 == 0) {
        console.log(data, 'Fizz');
    } else if (data % 5 == 0) {
        console.log(data, 'Buzz');
    }
})

//mencari nama buah yg ada keyword tertentu
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const keyword = 'rry';
const filteredFruits = fruits.filter(fruit => fruit.includes(keyword));
console.log(filteredFruits);

//latihan pakai map
// arrayBaru = arraySumber.map((parameterArray)=>{return data yg mau diubah})
// kl isi data mau diubah pake map, tp kl cm mau masukin data aja bs pakai forEach
let dataNama =["Mariana","Day-Day","Erni","Djumi"];
let dataNama2=["Amin","Herry","Arniwaty"]
let namaLengkap=dataNama.map((nama)=>{
    return nama+" Djum";
})
console.log(namaLengkap);

//latihan pakai forEach
//untuk cetak kluar isi data 
let namaSaja=dataNama.forEach((nama)=>{ console.log(nama);})

//latihan sort

let sortSaja=dataNama.sort() //kecil ke besar
console.log('sort kecil ke besar ',sortSaja);

let sortLagi=dataNama.reverse()
console.log('sort reverse besar ke kecil',sortLagi);

let adaHuruf= prompt("masukkan huruf dicari :")
let filterSaja=dataNama.filter((namaNya)=>namaNya.includes(adaHuruf));
console.log('Filter nama yg ada huruf',adaHuruf, filterSaja);

//concat
let gabungNama=dataNama.concat(dataNama2)
console.log(gabungNama);

let cariHuruf =prompt('masukkan huruf yg dicari :')
let filterLagi=gabungNama.filter((GabNama=>GabNama.includes(cariHuruf)))
console.log(filterLagi);

//soal data fizz bus dgn jumlah data dr input sndiri

let data1=prompt("isi angka pertama :")
let data=prompt("isi angka kedua :")
let tampungAngka=[];
for (let j=data1;j<=data;j++)
{
    tampungAngka.push(j);
}

let hitFizzbus = tampungAngka.map((item)=>
{
if (item%3==0 && item%5==0)
{
    console.log(item,"FIZZBUS");
}
else if (item%3==0)
{
    console.log(item,"FIZZ");
}
else if (item%5==0)
{
    console.log(item,"BUS");
}}
)

//soal tambahan buat array yg menghitung angka genap sndiri dan angka ganjil sndiri
let genap=0 
let ganjil=0
let tampungGen=[];
let tampungGan=[];
//console.log(typeof ganjil); cek tipe data
let hitAngka=tampungAngka.map((item)=>
{
    if(item%2==0)
    {
        genap=genap+item;
        tampungGen.push(item)
        return genap;
    }
    else
    {
        ganjil=Number(ganjil+item);
        tampungGan.push(item);
        return ganjil;
    }
})

console.log('data ganjil',tampungGan, '=', ganjil);
console.log('data genap',tampungGen, '=' ,genap);

//latihan merapikan tulisan ascending
let tulisan = prompt('masukan kata :')
let jadiArray=Array.from(tulisan); //merubah input tulisan menjadi array
console.log(jadiArray);
let sortArray=jadiArray.sort();
console.log('disort dr a-z',sortArray);

//latihan array delete huruf a dan ganti dengan huruf e

let contohNama =["mariana","day-day","djumi"];
let sumber=prompt('ganti huruf apa?');
let ganti=prompt('ganti dgn huruf apa?');
//kl replace cm ganti 1 huruf
//kl replaceAll ganti smua yg ketemu
var newNama =contohNama.map(item=>item.replaceAll(sumber,ganti));
console.log(newNama);
newNama=contohNama.map(item=>item +" djum");
console.log(newNama);