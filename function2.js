//Latihan membuat struk penjualan
//input : cash
//output : nama barang belanjaan, total harga, cash, total uang kembalian

let stokBarang=[ //array
    {
    nama:"Ultra Milk",
    harga:10000
},
{
    nama:"chitato",
    harga:11900
},
{
    nama:"roti coklat",
    harga:12000
}]

function hitung(cash) {
    let transaksi={
    product:stokBarang,
    totalHarga:stokBarang[0].harga+stokBarang[1].harga+stokBarang[2].harga,
    cash:cash,
    kembalian:0
}
transaksi.kembalian=cash-transaksi.totalHarga;
return transaksi;

}
console.log(hitung(50000));

//latihan bilangan prima
//bilangan prima ada bilangan yg cm habis dibagi diri sendiri dan habis dibagi 2

function bilPrima(a){
    let tampung=0;
    if (a==1){
        console.log(a + " bukan bilangan prima");
    }
    else{
    for(let i=2;i<a;i++)//melakukan looping untuk pembagian mencari bil prima
    {
       
        if (a%i==0) //pengecekan bilangan a habis dibagi oleh angka brp saja
        {
            tampung=tampung+1;
            
        }
    }
        if (tampung==1 || a==2) 
        //krn bil prima cm habis dibagi diri sndiri dan dibagi 2 jd kl tampung lbh dr 2 brrti bkn bil prima
        {
            console.log(a+ " adalah bilangan prima");
        }
        
        else
        {
            console.log (a+ " bukan bilangan prima")
        }
      
    }
}
bilPrima(2);

//latihan bilFibonacci
 const prompt=require('prompt-sync')();
 let Fibo=[];
 let angkaKe1=prompt('angka pertama: ');
 let angkaKe2=prompt('angka kedua: ');
 let angkaKe3=prompt('perlu berapa hitungan:')
 Fibo.push(Number(angkaKe1));
 Fibo.push(Number(angkaKe2));
 Fibo.push(Fibo[0]+Fibo[1])
 //console.log(Fibo.length); //3 array jd hasil 3 pdhl hitungan array indeks ke2
for(let a=Fibo.length;a<angkaKe3;a++)
{
    if(Fibo.length<angkaKe3){
    let tampung=Fibo[a-2]+Fibo[a-1];
    Fibo.push(tampung);}
}
console.log(Fibo);



