console.log("1. contoh looping print 5x 'Hai binarian'");
for(let data=0;data<10;data++)
{
    console.log("hai binarian",data, "x");
}

//buatkan looping 1-10 kemudian tuliskan ganjil
console.log(" ");
console.log("2. Memisahakan bilangan ganjil dan genap");
for(let i=1;i<=10;i++)
{
    if(i%2==0)
    {console.log(i, "genap");}
    else{
        console.log(i, "ganjil");
    }
}

//buat looping hitung isi dlm array
console.log(" ");
console.log("2. Menambahkan isi number dlm array dgn metode looping");
let data =[2,5,6,10];
let hasil=0;
for(let i=0;i<data.length;i++)
{
    hasil=hasil+data[i];    
}
console.log(hasil);

//looping : while
console.log(" ");
console.log("4. Metode looping While...Do...");
let index=0;
while (index<5)
{ 
    console.log("index ke ", index);
    index++;
}

// contoh pake while
console.log(" ");
console.log("5. Metode Looping While Do untuk hitung isi number dlm array");
let data1=[2,4,5,6];
let hasil1=0;
let k=0;
while(k<data1.length)
{
    hasil1=hasil1+data1[k];
    k++;
}
console.log(hasil1);

//looping do..while
// perulangan do akan melakukan perintah 1x baru mengecek kondisi
console.log(" ");
console.log("6. Metode Looping Do..While (agak berbeda dgn lainnya)");
let j=6;
do {
    console.log(j); //akan ngeprint 6 krn dilakukan dl br di while di cek 6<6 itu false
}
while (j<6);

//pisahin ganjil dan genap dlm bentuk array
console.log(" ");
console.log("7. Memisahkan Bilangan Ganjil dan Genap");
let ganjil=[];
let genap=[];

for(let a=0;a<20;a++)
{
    if(a%2==0)
    {
        genap.push(a);
    }
    else {ganjil.push(a)}
}
console.log(ganjil);
console.log(genap);

// tampilan text fizzbuzz
//jika modulus/sisa bagi 3 dan 5 = 0 tampilkan tulisan fizzbus
//jika sisa bagi 3 =0 maka tampilkan fizz
//jika sisa bagi 5 =0 maka tampilkan bus
console.log(" ");
console.log("8. Menampilkan text FIZZBUS, FIZZ dan BUS");
for (let b=1;b<=50;b++)
{
    if(b%3==0 && b%5==0)
    {console.log(b, "fizzbus krn habis dibagi 3 dan 5");}
    else if (b%3==0)
    {console.log(b, "fizz krn habis dibagi 3");}
    else if(b%5==0)
    {console.log(b, "bus krn habis di bagi 5");}
}

//looping array bil prima
const prompt =require('prompt-sync')();
console.log(" ");
console.log("9. Mennggunakan Array menampung Bilangan Prima ");
const angkaPertama=prompt("isi angka pertama :");
const angkaKedua=prompt("isi angka kedua :");
let tampung=[];
for(c=angkaPertama;c<=angkaKedua;c++)
{
    let cek=0;
    for(d=2;d<c;d++) //pengecekan d<c untuk looping tidak smpai ke bil itu sndiri
    //krn bil prima hnya habis dibagi 1 dan diri sndiri.jd dicek apkh bil tsb habis dibagi sblm diri sndiri
    //bil bil tsb habis dibagi sblm diri sndiri maka bkn bil prima dgn pengecekan modulus if dibawah.
    {
        if(c%d==0)
        { 
            cek=1;
            break;
        }
    }
    if (cek==0 && c>1)
    { 
        tampung.push(c);
    }

}
console.log(tampung);

//belajar angka fibonacci
const jumFibo = prompt("Hitung berapa banyak angka Fibonacci : ")
let fibo=[]
fibo.push(angkaPertama);
fibo.push(angkaKedua);
for (let i=1;i<jumFibo-2;i++)
{
   fibo.push()

}
