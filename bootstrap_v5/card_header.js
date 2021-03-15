Vue.component("CardHeader",{
    template:`
        <div v-bind:class='card-header'>
            <slot/>
        </div>`
});  