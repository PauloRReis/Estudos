Vue.component('list-item', {
    template: '<li v-bind:title="item.name" v-on:click="showName()" > {{item.name}} </li>',
    props: ['item', 'id'],
    methods: {
        showName: function(){
            alert(this.item.name);
        }
    }
})

app = new Vue({
    el: '#app',
    data: {
        animais: [
            {id: 1, name: 'Dog'},
            {id: 2, name: 'Cat'},
        ]
    }
})