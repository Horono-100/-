new Vue ({
    el: "#app",
    data: {
        message: "apple",
        items: [
            1,2,3
        ],
        color: '',
    },
    methods: {
        change: function(){
            
        }
}
})
//  const btnElement = document.getElementById("btn");
//         let message =  "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter)."
        
//         const textElement = document.getElementById("name");
//         textElement.textContent = message
        
//         const onClickUpdate = ()=> {
//             let request = new XMLHttpRequest();
//             request.open ('GET',"https://catfact.ninja/fact",true)
//             request.responseType ="json"
//             request.onload =()=> {
//                 const data =request.response;
//                 console.log(data.fact);
//                 textElement.textContent = data.fact;

//             }
//             request.send();
//         }
//         btn.addEventListener('click',onClickUpdate)