Vue.component("CardTitle",{
    template:`
        <h5 v-bind:class='card-title'>
            <slot/>
        </h5>`
});  