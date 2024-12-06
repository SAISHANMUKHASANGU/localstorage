const submit=document.getElementById("submit");
const data=document.getElementById("users")
const email=document.getElementById("email")
const name=document.getElementById("uname")
const password=document.getElementById("password")
const cpassword=document.getElementById("cpassword")
let spanner=document.createElement("span")
const view=document.getElementById("passwordreveailer")
const view1=document.getElementById("passwordreveailer1")
const div=document.getElementById("users")

// let users=[];
{/* <input type="Email" placeholder="Enter your email" required id="email">
                 <input type="text" placeholder="Enter Username" id="">
                <input type="password" name="" id="" placeholder="password">
                <input type="password" placeholder="confirm password"></input> */}

view.addEventListener("click",(event)=>{
    event.preventDefault()

    if(password.type==="password")
    {
        password.setAttribute('type','text')
    }
    else{
        password.setAttribute('type','password')
    }
})

view1.addEventListener("click",(event)=>{
    event.preventDefault()

    if(cpassword.type==="password")
        {
            cpassword.setAttribute('type','text')
        }
        else{
            cpassword.setAttribute('type','password')
        }
})


submit.addEventListener('click',(event)=>{
    event.preventDefault()
    
    spanner.textContent=""

    if(email.value==='')
    {
        spanner.textContent="email is mandatory"
        email.after(spanner)
        return
    }

    if(password.value!==cpassword.value){
        spanner.textContent="password not matched"
        submit.before (spanner)
        return
    }


    let existingUsers=JSON.parse(localStorage.getItem("users")) || [] // if any variable named users is present then we get it or else a empty array is created for users
    let user=existingUsers.some((user)=>user.email===email.value) // if any user with the mail id is present then it will return false or else it will be true 

    if(user)
    {
        spanner.textContent="user is already present"
        submit.before (spanner)
        return
    }
    else
    {
        const userdata={
            email:email.value,
            username:name.value,
            password:password.value
        }

        existingUsers.push(userdata)
        localStorage.setItem("users",JSON.stringify(existingUsers))

    }

    

    // let existance=users.some((u)=>u.email===userdata.email)
    // console.log(existance)

    // console.log(userdata)

    // users.push(userdata) 

    // if (existance){
    //     spanner.textContent="user with the provided mail already exists"
    //     submit.before (spanner)
    //     return
    // }
    // else{
    //     const li=document.createElement("div")
    //     li.innerHTML=`
    //     <p>name:${userdata.email}</p>`

    //     div.appendChild(li)

    // }



    email.value=""
    password.value=""
    name.value=""
    cpassword.value=""

})

