Vue.component("CardBody",{
    template:`
        <div v-bind:class='card-body'>
            <slot/>
        </div>`
});  