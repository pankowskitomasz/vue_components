Vue.component("Pagination",{
    template:`
        <ul v-bind:class='pagination'>
            <slot/>
        </ul>`
});  