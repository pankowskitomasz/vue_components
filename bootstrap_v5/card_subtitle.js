Vue.component("CardSubtitle",{
    template:`
        <h5 v-bind:class='card-subtitle'>
            <slot/>
        </h5>`
});  