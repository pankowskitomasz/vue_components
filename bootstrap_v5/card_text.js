Vue.component("CardText",{
    template:`
        <p v-bind:class='card-text'>
            <slot/>
        </p>`
});  