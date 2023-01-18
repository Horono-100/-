new Vue ({
    el:"#app",
    data: {
        leftList: [
            "Apple","Grape","Strawberry"
        ],
        rightList: [
            "Peach","Watermelon"
        ],
        selectItem:"", 
    },
    methods: {
        onClickMove: function(index) {
            if (this.selectItem === "") {
                return 
            }

            if (index=== 0) {
                let hoge = this.leftList.filter(v => v !== this.selectItem)
                this.leftList = hoge

                this.rightList.push(this.selectItem)
            } else  {
                let hoge = this.rightList.filter(v => v !== this.selectItem)
                this.rightList = hoge

                this.leftList.push(this.selectItem)
            }

            this.selectItem = ""
        },
        onClickItem: function(item) { 
           console.log(item)
           this.selectItem = item
        },

    },
})