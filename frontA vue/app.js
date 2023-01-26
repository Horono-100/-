 new Vue ({
    el:"#app",
    data:{
       text : "Grape",
    },
    mounted() {
        this.requestMessage()
    },
    methods: {
        onClickUpdate : function() {
            this.requestMessage()
        },
        requestMessage: function(){
            const request = new XMLHttpRequest()
            request.open("GET","https://catfact.ninja/fact",true)
            request.responseType ="json"
            request.onload = ()=> {
                this.text = request.response.fact
                console.log(request.response.fact, request.status)
            }
            request.send()
        },
    },
    computed: {
       
    }
 })
 