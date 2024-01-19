//belajar mengenai object
//dlm object ada yg namanya key dan value
let biodata=
{
    nama: "Mariana",
    alamat://dlm property object kt bs buat property object lg
    {
        provinsi:"DKI",
        kota:"Jakarta Utara",
        kelurahan:"Pademangan",
        Kodepos:"14410"
    },
    agama: "Kristen",
    Kewarganegaraan:"Indonesia",
    hobi:["jogging","basket"] //dlm pbject ada array jg bs
}
//console.log(biodata);
//console.log(biodata.alamat); //manggil data alamat saja
//console.log(biodata.hobi[0]); //manggil data hobi array index ke 0

//object constructor : buat objectnya dulu, nnti baru kt masukin datanya
const student=new Object()
student.nama="Djumi"
student.umur=12
student.jurusan=["Akuntansi","Informatika"]
student.alamat={
    jalan:"Duyung",
    kota:"Medan"
}
console.log(student);

//constructor function nama functionnya huruf pertama harus capital
function User(){
    (this.nama="Djumi"),(this.umur=18)
}
const murid=new User()
console.log(murid);

//atau

function User2(a,b){
    this.nama=a;this.age=b
}
const murid2=new User2("Day",19)
console.log(murid2);

//object assign menggabungkan dua atau lebih object menjadi satu

//object pertama
const namaSaya={
    nama:"Maria"
}
//object kedua
const umur={
    age: 20
}

const gabungSaja=Object.assign({},namaSaya,umur)
console.log(gabungSaja);

//ES6 Class mirip dgn constructor function
class StudentLagi{
    constructor(nama,usia){
        this.name=nama;this.age=usia
    }
}
const dataStudent2=new StudentLagi("Ana",15)
console.log('contoh class',dataStudent2);

const myInfo={
    name:"Robert",
    age:25,
    hobbies:["fishing","riding"],
    family:{
        father:"Djuned",
        mother:"Siti",
        siblings:["Andrew","Celine"]
    }
}
console.log(myInfo);
const namaDia=myInfo.name //nampung object name untuk di panggil
console.log(namaDia);
const bapak=myInfo.family.father //nampung ddan panggil nama father
console.log(bapak);
const siblings=myInfo.family.siblings
console.log(siblings);

//atau bisa panggil dgn cara destructuring
const {name,age,hobbies}=myInfo
//trus mau panggil apa tinggal dipanggil
console.log('panggil dgn destructuring ',hobbies);

//latihan Object for__in
const myData={
    name:"Robert",
    age:25
}
console.log('--contoh for in--');
for(const key in myData){
    //console.log(key); //mau tau keynya aja(propety dlm object)
    console.log(myInfo[key]); //manggil value nya aja
    //console.log(key,myInfo[key]); //atau langsung manggil ke2nya
}

//latihan object for__of
console.log('--contoh for of--');
for(const[key,value]of Object.entries(myData)){
    console.log(key,value);//hampir sama dgn for__in
} 

console.log('--contoh for each--');
Object.keys(myData).forEach((key)=>{
    console.log(key,myData[key]);
})