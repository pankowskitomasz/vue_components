Vue.component("Alert",{
    props:[
        "dimiss",
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
            var clss = "alert";
            clss+=(this.dismiss!==undefined)?" alert-dismissable":"";
            clss+=(this.colors.indexOf(this.type)>=0)?" alert-"+this.type:"";
            return clss;
        }
    }
});