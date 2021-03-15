Vue.component("Badge",{
    props:[
        "pill",
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
        <span v-bind:class='classExt'>
            <slot/>
        </span>`,
    computed:{
        classExt:function(){
            var clss = "badge";
            clss+=(this.pill!==undefined)?" rounded-pill":"";
            clss+=(this.colors.indexOf(this.type)>=0)?" bg-"+this.type:"";
            return clss;
        }
    }
});