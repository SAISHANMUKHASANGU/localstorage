const email=document.getElementById("Email")
const password=document.getElementById("password")
const login=document.getElementById("vineetha")

let spanner=document.createElement('div')



login.addEventListener('click',(event)=>{
    event.preventDefault()

    spanner.textContent=""

    let existingUsers=JSON.parse(localStorage.getItem("users")) || []
    let user=existingUsers.some((user)=>user.email===email.value && user.password===password.value)

    let logins=JSON.parse(localStorage.getItem("logins")) || []

    if(user)
    {
        
        const data={
            email:email.value
        }

        logins.push(data)

        window.location.href='./index.html'

    }
    else{
        console.log("vinu")
        spanner.textContent="invalid credentials"
        login.before(spanner)
        return

    }


})

