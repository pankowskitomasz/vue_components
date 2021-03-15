Vue.component("Btn",{
    props:[
        "outline",
        "type"
    ],
    data: function(){
        return {
            colors:[
                "primary",
                "secondary",
                "info",
                "success",
                "warning",
                "danger",
                "light",
                "dark"
            ]
        };
    },
    template:`
        <button v-bind:class='classExt'>
            <slot/>
        </button>`,
    computed:{
        classExt:function(){
            var clss = "btn";
            clss+=(this.outline!==undefined)?" btn-outline-":" btn-";
            clss+=(this.colors.indexOf(this.type)>=0)?this.type:"";
            return clss;
        }
    }
});