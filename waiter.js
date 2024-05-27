function handle(event){
    event.preventDefault()
    const user={
        "price":event.target.pri.value,
        "dish":event.target.dis.value,
        "table":event.target.tab.value
    }
    axios.post("https://crudcrud.com/api/447c1dc8417e445692f57f70e995c70e/waiter",user)
    .then((res)=>{
        shows(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/447c1dc8417e445692f57f70e995c70e/waiter")
    .then((res)=>{
        console.log(res)
        for(var i=0;i<res.data.length;i++){
            shows(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})
function shows(user){
    const ta1=document.getElementById('ta')
    const ta2=document.getElementById('t')
    const ta3=document.getElementById('y')
    const gh=document.createElement('li')
    gh.textContent=user.price+' - '+user.table+' - '+user.dish
    const gy=document.createElement('button')
    gy.textContent='Delete Order'
    gh.appendChild(gy)
    if (user.table=="Table 1"){
        ta1.appendChild(gh)
    }else if (user.table=="Table 2"){
        ta2.appendChild(gh)
    }else {
        ta3.appendChild(gh)
    }
    gy.addEventListener('click',()=>{
        if (user.table=="Table 1"){
            ta1.removeChild(gh)
        }else if (user.table=="Table 2"){
            ta2.removeChild(gh)
        }else {
            ta3.removeChild(gh)
        }
        axios.delete(`https://crudcrud.com/api/447c1dc8417e445692f57f70e995c70e/waiter/${user._id}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
}
