
// promise ambil data dari API
function dataUser()
{
    return new Promise((resolve,reject)=>
    {
        //ambil data dr api pake fecth
        fetch("https://jsonplaceholder.typicode.com/users")
        .then ((response)=>
        {
            return response.json()
        })
        .then((res)=>
        {
            console.log(res);
            resolve(res)
        })
        .catch((err)=>
        {
            console.log(err);
            reject(err)
        })
    })
}
dataUser();

//async await
let isLoading=false //kl buat loading data berat perlu
async function getDataUsers()
{
    try
    {
    isLoading=true;
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    console.log('async await',users);
    isLoading=false
    document.getElementById("isLoading").innerHTML=''
    users.map((item)=>{
        document.getElementById("content").innerHTML += //+untuk tampilkan smua data
        `
        <ul>
        <li>Name :${item.name}</li>
        <li>Email :${item.email}</li>
        <li>Address :${item.address.city}</li>
        </ul>
        `
        })
    }
    catch (error)
    {
    console.log(error);
    }
}
getDataUsers();
if (isLoading)
{
    document.getElementById("isLoading").innerHTML="loading.."
}
