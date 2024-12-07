// const category=document.getElementById("category")
// const price=document.getElementById("price")
// const add=document.getElementById("add")
// const date=document.getElementById("date")
// const record=document.getElementById("records")

// add.addEventListener('click',(event)=>{
//     event.preventDefault();
//     record.innerHTML="";

//     const expense={
//         date:date.value,
//         category:category.value,
//         price:price.value
//     };
    
//     console.log(expense.category)

//     let existingexpenses=JSON.parse(localStorage.getItem("expenses")) || [] // if any variable named users is present then we get it or else a empty array is created for users
//     console.log(existingexpenses)
//     let exp=existingexpenses.some((user)=>user.date==expense.date && user.category.trim().toLowerCase()==expense.category.trim().toLowerCase())
//     console.log(exp)
    
//     if(exp)
//     {
//         console.log("hi")
//         let addable=existingexpenses.find((user)=>user.date==expense.date && user.category.trim().toLowerCase()==expense.category.trim().toLowerCase())
//         console.log(addable)
//         addable.price=parseInt(addable.price)+parseInt(expense.price)
//         console.log(addable.price)
//         existingexpenses.find((user)=>user.date==expense.date && user.category.trim().toLowerCase()==expense.category.trim().toLowerCase()).price=addable.price
//         localStorage.setItem("expenses",JSON.stringify(existingexpenses))
//     }
//     else{
//         existingexpenses.push(expense)
//         localStorage.setItem("expenses",JSON.stringify(existingexpenses))

//     }

//     for(element of existingexpenses){
//         console.log(element)
//         let divi=document.createElement('div');

//         divi.classList.add("elements")
//         divi.innerHTML=`
//         <h4>date:${element.date}</h4>
//         <h4>Category:${element.category}</h4>
//         <h4>expense:${element.price}</h4>
//         `

//         record.appendChild(divi)
//     };
// })


const category=document.getElementById("category")
const price=document.getElementById("price")
const add=document.getElementById("add")
const date=document.getElementById("date")
const record=document.getElementById("records")

add.addEventListener('click',(event)=>{
    event.preventDefault();
    record.innerHTML="";

    const expense={
        date:date.value,
        category:category.value,
        price:price.value
    };
    
    console.log(expense.category)

    let existingexpenses=JSON.parse(localStorage.getItem("expenses")) || [] // if any variable named users is present then we get it or else a empty array is created for users
    console.log(existingexpenses)
    let exp=existingexpenses.some((user)=>user.date==expense.date && user.category.trim().toLowerCase()==expense.category.trim().toLowerCase())
    console.log(exp)
    
    if(exp)
    {
        console.log("hi")
        let addable=existingexpenses.find((user)=>user.date==expense.date && user.category.trim().toLowerCase()==expense.category.trim().toLowerCase())
        console.log(addable)
        addable.price=parseInt(addable.price)+parseInt(expense.price)
        console.log(addable.price)
        existingexpenses.find((user)=>user.date==expense.date && user.category.trim().toLowerCase()==expense.category.trim().toLowerCase()).price=addable.price
        localStorage.setItem("expenses",JSON.stringify(existingexpenses))
    }
    else{
        existingexpenses.push(expense)
        // divi.classList.add("elements")
        divi.innerHTML=`
        <h4>date:${element.date}</h4>
        <h4>Category:${element.category}</h4>
        <h4>expense:${element.price}</h4>
        `        
        localStorage.setItem("expenses",JSON.stringify(existingexpenses))

    }

    divi.classList.add("elements")

    // for(element of existingexpenses){
    //     console.log(element)
    //     let divi=document.createElement('div');

    //     divi.classList.add("elements")
    //     divi.innerHTML=`
    //     <h4>date:${element.date}</h4>
    //     <h4>Category:${element.category}</h4>
    //     <h4>expense:${element.price}</h4>
    //     `

    //     record.appendChild(divi)
    // };
})