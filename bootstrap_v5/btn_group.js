Vue.component("BtnGroup",{
    props:[
        "vertical"
    ],
    template:`
        <div v-bind:class='classExt'>
            <slot/>
        </div>`,
    computed:{
        classExt:function(){
            var clss = "btn-group";
            clss+=(this.vertical!==undefined)?" btn-group-vertical":"";
            return clss;
        }
    }
});  