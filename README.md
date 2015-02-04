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
 
 ![Lesezeichenmenü](/../master/docs/firefox_ready.PNG?raw=true "Favoriten Eintrag")
3. Wählen Sie den ersten Posten aus der in die Summe einbezogen werden soll. **Klicken** Sie in das entsprechende **Feld**. Im Rechner wird eine neue Position mit dem entsprechenden Wert und der Bezeichnung hinzugefügt. Das Feld wird **blau** unterlegt. Das sind Hinweise für Sie, dass der Posten in die Summe einbezogen wurde.
 
 ![Lesezeichenmenü](/../master/docs/calc_first_pos.png?raw=true "Oberfläche")
4. Für weitere Posten gehen Sie wie in Punkt 3 vor. Ein wechseln zwischen Tabs oder in Detailwerte bzw. das **Schließen** des Rechner Fensters ist **bedenkenlos möglich**. Sollte das Fenster geschlossen sein und Sie möchten weitere Felder Ihrer Summe hinzufügen **öffnen Sie den Rechner einfach neu**. Dazu klicken Sie auf den entsprechenden Eintrag in Ihren Favoriten. Ihre zuvor addierten Werte sind wieder vorhanden.
5. **Subtrahieren** von Werten kann durch das Umschalten zwischen Plus und Minus Modus erfolgen. Der Button unter dem Rechenergebnis kann durch ein Klicken zwischen Plus und Minus umgeschaltet werden. Die nächsten angelickten Posten werden je nach eingestelltem Modus entweder addiert oder subtrahiert.
 
 ![Lesezeichenmenü](/../master/docs/calc_subtract.png?raw=true "Subtrahieren")
6. Um eine neue Rechnung zu beginnen und alle vorherigen **Positionen zu löschen** klicken sie auf den **"Clear" Button.** Alle zuvor summierten Posten werden gelöscht. Es kann mit einer neuen Rechnung begonnen werden.
 
 ![Lesezeichenmenü](/../master/docs/calc_clear.png?raw=true "Zurücksetzen")

## Installieren<a name="install"></a>
Zur Installation müssen Sie in Ihrem Browser einen **neuen Favoriteneintrag anlegen**. Nennen Sie diesen bspw. Calc Bookmarklet für EBIL. In das Adressen/URL Feld des Favoriteneintrags **kopieren** sie Bitte die folgende Zeile. Speichern Sie diesen neuen Eintrag. Ihr Rechner für EBIL ist nun einsatzbereit.
```
javascript:%20(function%20(){function%20MyRechner(){%20%20%20%20/*CHECK*/%20%20%20%20var%20isinDetailDLG=$(".text_b2").length>0;%20%20%20%20var%20getDesc%20=%20function(el){%20%20%20%20%20%20%20%20try{%20%20%20%20%20%20%20%20if(isinDetailDLG){%20%20%20%20%20%20%20%20%20%20%20%20return%20$($($(el).parent().parent().children()[0]).children()[0]).val();%20%20%20%20%20%20%20%20}else{%20%20%20%20%20%20%20%20%20%20%20%20%20return%20$($(el).parent().parent().children()[1]).text().replace(/\s/g,"");%20%20%20%20%20%20%20%20}%20%20%20%20%20%20%20%20}catch(e){%20%20%20%20%20%20%20%20%20return%20"";%20%20%20%20%20%20%20%20%20%20%20}%20%20%20%20};/*CSS*/var%20css%20=%20"";%20%20%20%20css%20=%20".myrechner_added{border-bottom-color:blue;}#myrechn_dlg{position:fixed;top:50px;right:20px;width:180px;height:200px;border-radius:%204px;padding:%205px;background-color:%20rgb(235,%20235,%20235);box-shadow:%202px%202px%205px%202px%20rgba(0,%200,%200,%200.26);}.myre_pos_div{font-size:%2010pt;overflow:%20auto;background-color:white;width:160px;height:120px;}#myre_result{background-color:rgb(197,%20195,%20195);height:20px;text-align:right;font-weight:%20bold;}.myre_pos_div%20td:nth-child(3){text-align:right;}%20.myre_pos_div%20td:nth-child(4){font-size:%209pt}";var%20c=document.createElement("style");$(c).attr("type","text/css").attr("id","myre_css").html(css);$("head").append(c);%20%20%20%20/*DLG*/%20%20%20%20var%20dlg=document.createElement("div");%20%20%20%20$(dlg).attr("id","myrechn_dlg");%20%20%20%20$("body").append(dlg);%20%20%20%20var%20table=document.createElement("table");%20%20%20%20var%20pos_div=document.createElement("div");%20%20%20%20var%20detail_pos_table%20=%20document.createElement("table");%20$(table).append($(document.createElement("tr")).append($(document.createElement("td")).append($(pos_div))));%20%20%20%20$(pos_div).addClass("myre_pos_div").append(detail_pos_table);%20%20%20%20$(dlg).append(table);%20%20%20%20var%20method%20=%20document.createElement("button");%20%20%20%20$(method).text("Plus").click(function(){%20%20%20%20%20%20%20%20window.myre_method_plus=!window.myre_method_plus;%20%20%20%20%20%20%20%20$(method).text(window.myre_method_plus?"Plus":"Minus");%20%20%20%20});%20%20%20%20window.myre_method_plus=true;%20%20%20%20var%20clear%20=%20document.createElement("button");%20%20%20%20$(clear).text("Clear").click(function(){%20%20%20%20%20%20%20sessionStorage.myre='{"sum":0,"vals":[]}';%20%20%20%20%20%20%20$(".myrechner_added").removeClass("myrechner_added");%20%20%20%20%20%20%20$("#myre_result").text("0");%20%20%20%20%20%20%20$(pos_div).find("tr").detach();%20%20%20%20});%20%20%20%20var%20exit%20=%20document.createElement("button");%20%20%20%20$(exit).text("Exit").click(function(){%20%20%20%20%20%20$("#myrecss,#myrechn_dlg").detach();%20%20%20%20%20%20$(".myrechner_added").removeClass("myrechner_added");%20%20%20%20%20%20%20%20$("input").unbind("click.myre");%20%20%20%20});%20$(table).append($(document.createElement("tr")).append($(document.createElement("td")).attr("id","myre_result")));%20%20%20$(table).append($(document.createElement("tr")).append($(document.createElement("td")).append(method).append(clear)));%20$(table).append($(document.createElement("tr")).append($(document.createElement("td")).append(exit)));%20%20%20%20/*detail%20el*/%20%20%20%20var%20createPosition%20=%20function(data){%20%20%20%20%20%20%20%20var%20tr=document.createElement("tr");%20%20%20%20%20%20%20%20var%20td1=document.createElement("td");%20%20%20%20%20%20%20%20var%20td2=document.createElement("td");%20%20%20%20%20%20%20%20var%20td3=document.createElement("td");%20%20%20%20%20%20%20%20var%20td4=document.createElement("td");%20%20%20%20%20%20%20%20$(tr).append(td1).append(td2).append(td3).append(td4);%20%20%20%20%20%20%20%20$(td2).text((data.p?"+":"-"));%20%20%20%20%20%20%20%20$(td3).text(data.v);%20%20%20%20%20%20%20%20$(td4).text(data.t);%20%20%20%20%20%20%20%20return%20tr;%20%20%20%20};%20%20%20%20/*clickhandler*/%20%20%20%20$("input").bind("click.myre",function(){%20%20%20%20%20%20%20%20try{%20%20%20%20%20%20%20%20%20%20%20%20debugger;%20%20%20%20%20%20%20%20%20%20%20%20if(!sessionStorage.myre){sessionStorage.myre='{"sum":0,"vals":[]}';}%20%20%20%20%20%20%20%20%20%20%20%20var%20oo%20=%20JSON.parse(sessionStorage.myre);%20%20%20%20%20%20%20%20%20%20%20%20var%20v=parseInt($(this).val().replace(/\./g,""));%20%20%20%20%20%20%20%20%20%20%20%20var%20title=getDesc(this);%20%20%20%20%20%20%20%20%20%20%20%20if(isNaN(Number(v)))return;%20%20%20%20%20%20%20%20%20%20%20%20lv_id%20=%20$(this).attr("id");%20%20%20%20%20%20%20%20%20%20%20%20oo.sum+=((window.myre_method_plus?1:-1)*v);%20%20%20%20%20%20%20%20%20%20%20%20var%20nr%20=%20oo.vals.push({id:lv_id,v:v,p:window.myre_method_plus,t:title});%20%20%20%20%20%20%20%20%20%20%20%20$("#myre_result").text(oo.sum);%20%20%20%20%20%20%20%20%20%20%20%20$(detail_pos_table).append($(createPosition(oo.vals[nr-1])))[0].scrollTop%20=%20pos_div.scrollHeight;%20%20%20%20%20%20%20%20%20%20%20%20sessionStorage.myre%20=%20JSON.stringify(oo);%20%20%20%20%20%20%20%20%20%20%20%20$(this).addClass("myrechner_added");%20%20%20%20%20%20%20%20}catch(e){%20%20%20%20%20%20%20%20alert(e.toString());%20%20%20%20%20%20%20%20};%20%20%20%20});%20%20%20%20/*startup*/%20%20%20%20if(sessionStorage.myre){%20%20%20%20%20%20%20%20var%20oo%20=%20JSON.parse(sessionStorage.myre);%20%20%20%20%20%20%20%20$("#myre_result").text(oo.sum);%20%20%20%20%20%20%20%20for(var%20k%20in%20oo.vals){%20%20%20%20%20%20%20%20%20%20%20%20try{$("#"+oo.vals[k].id).addClass("myrechner_added");}catch(e){};%20%20%20%20%20%20%20%20%20%20%20%20$(detail_pos_table).append($(createPosition(oo.vals[k])));%20%20%20%20%20%20%20%20}%20%20%20%20}};MyRechner();}());
```

####Eine Schritt zu Schritt Anleitung für Firefox erhalten Sie hier:

1. Firefox Lesezeichen Menü starten.
 
 ![Lesezeichenmenü](/../master/docs/firefox_fav.PNG?raw=true "Optional Title")
 ![Lesezeichenmenü](/../master/docs/firefox_fav_verw.PNG?raw=true "Optional Title")
2. Neues Lesezeichen anlegen.
 
 ![Lesezeichenmenü](/../master/docs/firefox_fav_verw_3.PNG?raw=true "Optional Title")
3. Namen vergeben.
4. In das Feld Adresse/URL den oben stehenden Text vollständig kopieren.
 
 ![Lesezeichenmenü](/../master/docs/firefox_fav_neu.PNG?raw=true "Optional Title")
5. Lesezeichen Menü beenden.
6. Das Lesezeichen ist angelegt und kann verwendet werden.
 
 ![Lesezeichenmenü](/../master/docs/firefox_ready.PNG?raw=true "Optional Title")

## Lizenz
Calc Bookmarklet für EBIL ist nach [AGPL](LICENSE)lizenziert und damit frei für die Verwendung von jedem für den dieses Tool nützlich ist.

Entwickelt wurde Calc Bookmarklet für EBIL von Jens Schyma.
## Weiterentwicklung/Contribution
Zusätzliche Anregungen bezüglich Funktionalität oder Weiterentwicklungen des Programmcodes sind gerne willkommen. Nutzen Sie dazu Bitte die Funktionen Issues und Pull Requests.

## Links
  * [EBIL](http://www.ebil.de)
