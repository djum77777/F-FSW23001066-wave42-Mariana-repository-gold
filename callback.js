//contoh sync dijalankan sesuai urutan
//console.log("hallo binarian");
//console.log("javascript");
//console.log("Developer");

//contoh satu async
//console.log("satu");

//setTimeout(()=>
//{
//    console.log("dua");
//},0) 
//settimeout ini akan di jalankan stlh loading
//jdnya log "tiga" yg jln dl 
//console.log("tiga");

//contoh dua async

//function tesAsync ()
//{
//    console.log("Saya Mariana");
//}

//console.log("nama kamu?");
//setTimeout(tesAsync,1000);
//console.log("loading...");

//contoh tiga
//let j="."

//setTimeout(()=>{
//    for(let i=0;i<10;i++)
//    {
//        j=j+".";
//       console.log("loading",j);
//    }
//    console.log("terima kasih sudah menunggu");
//},1000)
//console.log("mohon menunggu");

//callback
//function hallo(nilai,callback) {
//    callback(nilai*nilai)        
//    }

//hallo(5,console.log);

//callback itu ddlm function ada function
//1 function menjalankan functionnya sendiri
//function namaFunction (value,paraCallback)
//function download(url,cb)
//{
//    console.log("download from",url);
//    cb()
//}
//const url1="url1.com"
//const url2="url2.com"
//const url3="url3.com"

//praktek dlm function , dipanggil function lg dgn fungsi callback
//download(url1,function()
//{
//    download(url2,function(){
//        download(url3,function(){
//            console.log("download selesai");
//        })
//    })
//})

//contoh callback pake arrow function
// const arrowFunction=(url,cb)=>{isi functionnya})
//download(url1,()=>{
//    download(url2,()=>{
//        download(url3,()=>{
//            console.log("download selesai");
//        })
//    })
//})

//set interval 
//misal mau dijalankan tiap 5 detik
//setInterval(()=>{
//    console.log("hallo");
//},5000)

//set interval contoh 2
let data=[]
function hitung(){
    data.push("muncul iklan")
}
setInterval(()=>{
    hitung();
    console.log(data);
},3000)

//fundamental:variable, tipe data, array, object, kondisi, function, looping

