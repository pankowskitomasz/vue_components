Vue.component("NavItem",{
    template:`
        <li v-bind:class='nav-item'>
            <slot/>
        </li>`
});  