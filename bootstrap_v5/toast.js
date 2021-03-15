Vue.component("Toast",{
    template:`
        <div v-bind:class='toast'>
            <slot/>
        </div>`
});  