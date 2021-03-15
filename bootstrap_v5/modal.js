Vue.component("Modal",{
    template:`
        <div v-bind:class='modal' tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <slot/>
                </div>
            </div>
        </div>`
});  
