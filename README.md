# Calc Bookmarklet für EBIL
Calc Bookmarklet für EBIL ist ein Addon für das *Bilanzanalyse Tool EBIL* zur einfachen Berechnung von Summen.

## Haben Sie nicht auch während der Arbeit mit EBIL den Bedarf einzelne bereits eingegebene Posten zu addieren bzw. zu subtrahieren?
Das passiert regelmäßig bspw. wenn die Bilanzsumme der eingegebenen Werte noch nicht mit der tatsächlichen Bilanzsumme übereinstimmt und Sie sich auf die Suche nach Fehlern bei der Eingabe begeben. Vorallem auch bei IFRS-Abschlüssen, da hier das Gliederungsschema von Bilanz und GuV in der Regel nicht mit dem Schema EBILs übereinstimmt.

Heute nutzen Sie Ihren Taschenrechner. **Calc Bookmarklet für EBIL** ermöglicht eine direkte Summenbildung beliebiger bereits eingegebener Posten. Durch einen **Klick** auf das jeweilige Eingabefeld wird der Wert der aktuellen Summe aufgeschlagen bzw. von ihr subtrahiert. Das besondere an Calc Bookmarklet für EBIL ist, Sie sehen nicht nur eine Summe sondern Calc Bookmarklet für EBIL **führt** die einzelnen **Positionen mit der Bezeichnung** des Wertes, entsprechend der Bezeichnung des Postens in EBIL, auf.
Sie können sogar Werte über Tabreiter hinweg oder aus Detailpositionen in die Summe übernehmen.

Auch die Installation ist besonders einfach. Sie benötigen keinen langen Entwicklungs-/Testprozess, da der Taschenrechner nur in Ihrem Browser läuft. Sie fügen einfach einen **neuen Eintrag in Ihren Favoriten** hinzu und **starten** den Rechner mit einem **Klick auf den Favoriteneintrag**.

Details wie der Rechner zu [installieren](#install) oder zu [verwenden](#function) ist entnehmen Sie Bitte den folgenden Abschnitten.

### Demo

Überzeugen Sie sich selbst vom Nutzen von Calc Bookmarklet für EBIL in der folgenden Demo.

  * [Zur Demo hier.](http://jsfiddle.net/jschyma/qo2hnpot/embedded/result/)

## Wie funktioniert das Bookmarklet?<a name="function"></a>
Die Funktionalität für den Rechner, der Programmcode, wird dabei in einem Bookmark (Favoriten Einträg) hinterlegt und bei Bedarf durch Aufruf des Bookmarks während der Arbeit mit EBIL gestartet.

Im folgenden wird anhand von Screenshots in einer Schritt zu Schritt Anleitung die Benutzung des Addons dargestellt und erklärt. Für Informationen bezüglich der Installation des Calc Bookmarklet für EBIL springen Sie bitte direkt zum Punkt [Installieren](#install). Calc Bookmarklet für EBIL ist in der folgenden Anleitung bereits installiert.

1. Sie befinden sich auf der Seite von EBIL. Die Arbeit mit EBIL führen Sie wie gewohnt durch. Während der Arbeit besteht Bedarf einzelne Positionen die Sie bereits eingegeben haben zu summieren.
2. Sie **starten** den Rechner. **Calc Bookmarklet für EBIL** wird durch einen **Klick** auf den bereits im Punkt [Installieren](#install) angelegten **Favoriteneintrag** gestartet.
3. Wählen Sie den ersten Posten aus der in die Summe einbezogen werden soll. **Klicken** Sie in das entsprechende **Feld**. Im Rechner wird eine neue Position mit dem entsprechenden Wert und der Bezeichnung hinzugefügt. Das Feld wird **blau** unterlegt. Das sind Hinweise für Sie, dass der Posten in die Summe einbezogen wurde.
4. Für weitere Posten gehen Sie wie in Punkt 3 vor. Ein wechseln zwischen Tabs oder in Detailwerte bzw. das **Schließen** des Rechner Fensters ist **bedenkenlos möglich**. Sollte das Fenster geschlossen sein und Sie möchten weitere Felder Ihrer Summe hinzufügen **öffnen Sie den Rechner einfach neu**. Dazu klicken Sie auf den entsprechenden Eintrag in Ihren Favoriten. Ihre zuvor addierten Werte sind wieder vorhanden.
5. **Subtrahieren** von Werten kann durch das Umschalten zwischen Plus und Minus Modus erfolgen. Der Button unter dem Rechenergebnis kann durch ein Klicken zwischen Plus und Minus umgeschaltet werden. Die nächsten angelickten Posten werden je nach eingestelltem Modus entweder addiert oder subtrahiert.
6. Um eine neue Rechnung zu beginnen und alle vorherigen **Positionen zu löschen** klicken sie auf den **"Clear" Button.** Alle zuvor summierten Posten werden gelöscht. Es kann mit einer neuen Rechnung begonnen werden.

## Installieren<a name="install"></a>
Zur Installation müssen Sie in Ihrem Browser einen **neuen Favoriteneintrag anlegen**. Nennen Sie diesen bspw. Calc Bookmarklet für EBIL. In das Adressen/URL Feld des Favoriteneintrags **kopieren** sie Bitte die folgende Zeile. Speichern Sie diesen neuen Eintrag. Ihr Rechner für EBIL ist nun einsatzbereit.
```
javascript: (function (){function MyRechner(){    /*CHECK*/    var isinDetailDLG=$(".text_b2").length>0;    var getDesc = function(el){        try{        if(isinDetailDLG){            return $($($(el).parent().parent().children()[0]).children()[0]).val();        }else{             return $($(el).parent().parent().children()[1]).text().replace(/\s/g,"");        }        }catch(e){         return "";           }    };	/*CSS*/	var css = "";    css = ".myrechner_added{border-bottom-color:blue;}#myrechn_dlg{position:fixed;top:50px;right:20px;width:180px;height:200px;border-radius: 4px;padding: 5px;background-color: rgb(235, 235, 235);box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.26);}.myre_pos_div{overflow: auto;background-color:white;width:160px;height:120px;}#myre_result{background-color:grey;height:20px;}";	var c=document.createElement("style");	$(c).attr("type","text/css").attr("id","myre_css").html(css);	$("head").append(c);    /*DLG*/    var dlg=document.createElement("div");    $(dlg).attr("id","myrechn_dlg");    $("body").append(dlg);    var table=document.createElement("table");    var pos_div=document.createElement("div"); $(table).append($(document.createElement("tr")).append($(document.createElement("td")).append($(pos_div))));    $(pos_div).addClass("myre_pos_div");    $(dlg).append(table);    var method = document.createElement("button");    $(method).text("Plus").click(function(){        window.myre_method_plus=!window.myre_method_plus;        $(method).text(window.myre_method_plus?"Plus":"Minus");    });    window.myre_method_plus=true;    var clear = document.createElement("button");    $(clear).text("Clear").click(function(){       sessionStorage.myre='{"sum":0,"vals":[]}';       $(".myrechner_added").removeClass("myrechner_added");       $("#myre_result").text("0");       $(pos_div).find("div").detach();    });    var exit = document.createElement("button");    $(exit).text("Exit").click(function(){      $("#myrecss,#myrechn_dlg").detach();      $(".myrechner_added").removeClass("myrechner_added");        $("input").unbind("click.myre");    }); $(table).append($(document.createElement("tr")).append($(document.createElement("td")).attr("id","myre_result")));   $(table).append($(document.createElement("tr")).append($(document.createElement("td")).append(method).append(clear))); $(table).append($(document.createElement("tr")).append($(document.createElement("td")).append(exit)));    /*clickhandler*/    $("input").bind("click.myre",function(){        try{            debugger;            if(!sessionStorage.myre){sessionStorage.myre='{"sum":0,"vals":[]}';}            var oo = JSON.parse(sessionStorage.myre);            var v=parseInt($(this).val().replace(/\./g,""));            var title=getDesc(this);            if(isNaN(Number(v)))return;            lv_id = $(this).attr("id");            oo.sum+=((window.myre_method_plus?1:-1)*v);            oo.vals.push({id:lv_id,v:v,p:window.myre_method_plus,t:title});            $("#myre_result").text(oo.sum);            $(pos_div).append($(document.createElement("div")).text((window.myre_method_plus?"+":"-")+v+" : "+title))[0].scrollTop = pos_div.scrollHeight;            sessionStorage.myre = JSON.stringify(oo);            $(this).addClass("myrechner_added");        }catch(e){        alert(e.toString());        };    });    /*startup*/    if(sessionStorage.myre){        var oo = JSON.parse(sessionStorage.myre);        $("#myre_result").text(oo.sum);        for(var k in oo.vals){            try{$("#"+oo.vals[k].id).addClass("myrechner_added");}catch(e){};            $(pos_div).append($(document.createElement("div")).text((oo.vals[k].p?"+":"-")+oo.vals[k].v+" : "+oo.vals[k].t));        }    }};MyRechner();}());
```

####Eine Schritt zu Schritt Anleitung für Firefox erhalten Sie hier:

1. Firefox Lesezeichen Menü starten.
2. Neues Lesezeichen anlegen.
3. Namen vergeben.
4. In das Feld Adresse/URL den oben stehenden Text vollständig kopieren.
5. Lesezeichen Menü beenden.
6. Das Lesezeichen ist angelegt und kann verwendet werden.

## Lizenz
Calc Bookmarklet für EBIL ist nach [AGPL](LICENSE)lizenziert und damit frei für die Verwendung von jedem für den dieses Tool nützlich ist.

Entwickelt wurde Calc Bookmarklet für EBIL von Jens Schyma.
## Weiterentwicklung/Contribution
Zusätzliche Anregungen bezüglich Funktionalität oder Weiterentwicklungen des Programmcodes sind gerne willkommen. Nutzen Sie dazu Bitte die Funktionen Issues und Pull Requests.

## Links
  * [EBIL](http://www.ebil.de)
