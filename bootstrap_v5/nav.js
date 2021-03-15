Vue.component("Nav",{
    props:[
        "tabs",
        "pills"
    ],
    template:`
        <ul v-bind:class='classExt'>
            <slot/>
        </ul>`,
    computed:{
        classExt:function(){
            var clss = "nav";
            clss+=(this.dismiss!==undefined)?" nav-tabs":"";
            clss+=(this.dismiss!==undefined)?" nav-pills":"";
            return clss;
        }
    }
});