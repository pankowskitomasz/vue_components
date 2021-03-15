Vue.component("Card",{
    template:`
        <div v-bind:class='card'>
            <slot/>
        </div>`
});  