new Vue({
    el: "#app",
    data: {
     array: [
      "Apple","Grape","Strawberry"
     ],
     inputText: ""
    },
    methods: {
      onClickAdd: function() {
        this.array.push(this.inputText)

      },
      onClickDelete: function(index) {
        this.array.splice(index,1)
      }
    }
  })
  