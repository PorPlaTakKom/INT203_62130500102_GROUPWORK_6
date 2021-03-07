const app = {
    data() {
        return {
            msg: 'Hello, Vue3'
        }
    },
    created(){
        console.log("created msg!!")
    }
}
let mountApp = Vue.createApp(app).mount('#app')