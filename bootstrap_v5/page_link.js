Vue.component("PageLink",{
    template:`
        <a v-bind:class='page-link'>
            <slot/>
        </a>`
});  