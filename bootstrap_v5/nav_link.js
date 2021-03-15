Vue.component("NavLink",{
    template:`
        <a v-bind:class='nav-link'>
            <slot/>
        </a>`
});  