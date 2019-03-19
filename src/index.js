import Vue from "vue"
import App from "./app.vue"

import "./assets/images/u=6317361,3477497139&fm=23&gp=0.jpg"
import "./assets/styles/test.css"

const root  = document.createElement('div')
document.body.appendChild(root)

new Vue({
	render: (h) => h(App)
}).$mount(root)
