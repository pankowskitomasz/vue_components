Vue.component("Spinner",{
    props:[
        "grow",
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
        <div v-bind:class='classExt'>
            <slot/>
        </div>`,
    computed:{
        classExt:function(){
            var clss = "spinner";
            clss+=(this.grow!==undefined)?"-grow":"-border";
            clss+=(this.colors.indexOf(this.type)>=0)?" text-"+this.type:"";
            return clss;
        }
    }
});