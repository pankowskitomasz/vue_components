Vue.component("PageItem",{
    template:`
        <li v-bind:class='page-item'>
            <slot/>
        </li>`
});  