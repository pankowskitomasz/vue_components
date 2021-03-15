Vue.component("ToastBody",{
    template:`
        <div v-bind:class='toast-body'>
            <slot/>
        </div>`
});  