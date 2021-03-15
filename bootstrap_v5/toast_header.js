Vue.component("ToastHeader",{
    template:`
        <div v-bind:class='toast-header'>
            <slot/>
        </div>`
});  