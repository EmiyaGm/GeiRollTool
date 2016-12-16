/**
 * Created by 午后的阳光 on 2016/5/14.
 */
var ran=0;
var range=0;
var myNumber;
/*将产生随机数的方法进行封装*/
function sjs(range) {
    ran=Math.random()*range;//[0,range)的随机数
    var result=parseInt(ran);//将数字转换成整数
    return result;
}
/*对显示随机数的方法进行封装*/
function showRandomNum() {
    var figure=sjs(range);
    $("#first").html(figure);
    var figure2=sjs(range);
    $("#second").html(figure2);
    var figure3=sjs(range);
    $("#third").html(figure3);
}
$(function () {
    /*点击开始按钮,产生的事件*/
    $("#start").click(function () {
        /*将开始标签禁用，停止标签启用*/
        $("#start")[0].disabled=true;
        $("#stop")[0].disabled=false;
        range=prompt("请输入随机数范围：","");
        myNumber=setInterval(showRandomNum,1);//多长时间运行一次
    });
    /*点击结束按钮*/
    $("#stop").click(function () {
        /*将开始标签启用，停止标签禁用*/
        $("#start")[0].disabled=false;
        $("#stop")[0].disabled=true;
        clearInterval(myNumber);
    });
});
