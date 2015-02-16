// AGPL
// EBIL Rechner
var toPublish = function(){
function MyRechner(){
    /*CHECK*/
    var isinDetailDLG=$(".text_b2").length>0;
    var getDesc = function(el){
        try{
        if(isinDetailDLG){
            return $($($(el).parent().parent().children()[0]).children()[0]).val();
        }else{
             return $($(el).parent().parent().children()[1]).text().replace(/\s/g,"");
        }
        }catch(e){
         return "";   
        }
    };
	/*CSS*/
	var css = "";
    css = ".myrechner_added{border-bottom-color:blue;}#myrechn_dlg{position:fixed;top:50px;right:20px;width:180px;height:200px;border-radius: 4px;padding: 5px;background-color: rgb(235, 235, 235);box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.26);}.myre_pos_div{font-size: 7pt!important;overflow: auto;background-color:white;width:160px;height:120px;}#myre_result{background-color:rgb(197, 195, 195);height:20px;text-align:right;font-weight: bold;}.myre_pos_div td:nth-child(3){text-align:right;} .myre_pos_div td:nth-child(4){font-size: 6.5pt!important;}.myre_pos_div table{border-spacing: 2px;border-collapse: separate;white-space: nowrap;}";
	var c=document.createElement("style");
	$(c).attr("type","text/css").attr("id","myre_css").html(css);
	$("head").append(c);
    /*DLG*/
    var dlg=document.createElement("div");
    $(dlg).attr("id","myrechn_dlg");
    $("body").append(dlg);
    var table=document.createElement("table");
    var pos_div=document.createElement("div");
    var detail_pos_table = document.createElement("table"); $(table).append($(document.createElement("tr")).append($(document.createElement("td")).append($(pos_div))));
    $(pos_div).addClass("myre_pos_div").append(detail_pos_table);
    $(dlg).append(table);
    var method = document.createElement("button");
    $(method).text("Plus").click(function(){
        window.myre_method_plus=!window.myre_method_plus;
        $(method).text(window.myre_method_plus?"Plus":"Minus");
    });
    window.myre_method_plus=true;
    var clear = document.createElement("button");
    $(clear).text("Clear").click(function(){
       sessionStorage.myre='{"sum":0,"vals":[]}';
       $(".myrechner_added").removeClass("myrechner_added");
       $("#myre_result").text("0");
       $(pos_div).find("tr").detach();
    });
    var exit = document.createElement("button");
    $(exit).text("Exit").click(function(){
      $("#myrecss,#myrechn_dlg").detach();
      $(".myrechner_added").removeClass("myrechner_added");
        $("input").unbind("click.myre");
    });
 $(table).append($(document.createElement("tr")).append($(document.createElement("td")).attr("id","myre_result")));   $(table).append($(document.createElement("tr")).append($(document.createElement("td")).append(method).append(clear)));
 $(table).append($(document.createElement("tr")).append($(document.createElement("td")).append(exit)));
    /*detail el*/
    var createPosition = function(data){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        var td4=document.createElement("td");
        $(tr).append(td1).append(td2).append(td3).append(td4);
        $(td2).text((data.p?"+":"-"));
        $(td3).text(data.v);
        $(td4).text(data.t);
        return tr;
    };
    /*clickhandler*/
    $("input").bind("click.myre",function(){
        try{
            debugger;
            if(!sessionStorage.myre){sessionStorage.myre='{"sum":0,"vals":[]}';}
            var oo = JSON.parse(sessionStorage.myre);
            var v=parseInt($(this).val().replace(/\./g,""));
            var title=getDesc(this);
            if(isNaN(Number(v)))return;
            lv_id = $(this).attr("id");
            oo.sum+=((window.myre_method_plus?1:-1)*v);
            var nr = oo.vals.push({id:lv_id,v:v,p:window.myre_method_plus,t:title});
            $("#myre_result").text(oo.sum);
            $(detail_pos_table).append($(createPosition(oo.vals[nr-1])))[0].scrollTop = pos_div.scrollHeight;
            sessionStorage.myre = JSON.stringify(oo);
            $(this).addClass("myrechner_added");
        }catch(e){
        alert(e.toString());
        };
    });
    /*startup*/
    if(sessionStorage.myre){
        var oo = JSON.parse(sessionStorage.myre);
        $("#myre_result").text(oo.sum);
        for(var k in oo.vals){
            try{$("#"+oo.vals[k].id).addClass("myrechner_added");}catch(e){};
            $(detail_pos_table).append($(createPosition(oo.vals[k])));
        }
    }
};
MyRechner();
};
