function licensingPointer(data){//数据转化 目的：相同地名生成不同经纬度地址
    data.forEach(function (v,k) {
        v.choose = true;
        $.each( window.pointerAll,function(v1,k1){
            if(k1.name == v.name){
                v.choose = false
                var newname =v.name+countnum++
                window.pointerAll.push({
                    province:v.province,
                    city:v.name,
                    name:newname,
                    value:v.val,
                    txt:v.txt
                });
                window.pointerNow[newname]=[];
                var nowip1 = parseFloat(v.ip.split(',')[0])+getrandnum();
                var nowip2 = parseFloat(v.ip.split(',')[1])+getrandnum();
                window.pointerNow[newname].push(nowip2)
                window.pointerNow[newname].push(nowip1)
                return false;

            }
        })

        if(v.choose == true){
            window.pointerAll.push({
                province:v.province,
                city:v.name,
                name:v.name,
                value:v.val,
                txt:v.txt
            });

            window.pointerNow[v.name]=[];
            var nowip1 = parseFloat(v.ip.split(',')[0]);
            var nowip2 = parseFloat(v.ip.split(',')[1]);
            window.pointerNow[v.name].push(nowip2)
            window.pointerNow[v.name].push(nowip1)
        }
   })
    itemright()
}
function itemright(data){//省渲染完查找市，有数据的市select属性设为true
    var citylist_highlight = [];
    window.pointerAll.forEach(function (v,k) {
        citylist_highlight.push(v.city)
    })
    var citylist_highlight = citylist_highlight.unique3();
    window.citydata.forEach(function (v,k) {
        citylist_highlight.forEach(function(v1,k1){
                if(v1 ==v.name){
                    v.value = 3
                }
        })
    })
}
function getrandnum() {//生成随机数目
    var a = Math.random()*0.16+0.02
    if(a >0.11){
        a=a*-1
    }
    return a
}


Array.prototype.unique3 = function(){
    var res = [];
    var json = {};
    for(var i = 0; i < this.length; i++){
        if(!json[this[i]]){
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
}