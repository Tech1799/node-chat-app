const chat = new Vue({
    el: '#chat',
    data: {
        items: [],
        newItem: ''
    },
    methods: {
        addItem: function(){
            if(this.newItem != ''){
                this.items.push({name: this.newItem})
                this.newItem = ''
            }
        }
    },
    computed: {
        changed_item: function(){
            if(this.newItem.length > 1){
                return this.newItem
            }
        }
    }
})