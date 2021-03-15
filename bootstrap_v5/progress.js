Vue.component("Spinner",{
    props:[
        "animated",
        "striped",
        "size",
        "type"
    ],
    data: function(){
        return {
            colors:[
                "info",
                "success",
                "warning",
                "danger"
            ]
        };
    },
    template:`
        <div class="progress">
            <div v-bind:class='classExt' v-bind:style='sizeExt'>
                <slot/>
            </div>
        </div>`,
    computed:{
        classExt:function(){
            var clss = "progress-bar";
            clss+=(this.striped!==undefined)?" progress-bar-striped":"";
            clss+=(this.animated!==undefined)?" progress-bar-animated":"";
            clss+=(this.colors.indexOf(this.type)>=0)?" bg-"+this.type:"";
            return clss;
        },
        sizeExt:function(){
            var size = (this.size!==undefined)?{width:this.size}:"";
            return size;
        }
    }
});




<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>