function removeHtmlTag(e,t){if(e.indexOf("<")!=-1){var n=e.split("<");for(var r=0;r<n.length;r++){if(n[r].indexOf(">")!=-1){n[r]=n[r].substring(n[r].indexOf(">")+1,n[r].length)}}e=n.join("")}t=t<e.length-1?t:e.length-2;while(e.charAt(t-1)!=" "&&e.indexOf(" ",t)!=-1)t++;e=e.substring(0,t-1);return e+"..."}function masSummaryAndThumb(e,t){var n=document.getElementById(e);var r="";var i=n.getElementsByTagName("img");var s=400;if(i.length>=1){r='<a href="'+t+'"><span style="float:left; padding:0px 10px 5px 0px;"><span class="play-button"></span><img src="'+i[0].src+'"/></span></a>';s=400}var o=r+'<div class="entry">'+removeHtmlTag(n.innerHTML,s)+"</div>";n.innerHTML=o}function removeHtmlTag(e,t){var n=e.split("<");for(var r=0;r<n.length;r++){if(n[r].indexOf(">")!=-1){n[r]=n[r].substring(n[r].indexOf(">")+1,n[r].length)}}n=n.join("");n=n.substring(0,t-1);return n}function showrecentposts0(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0;img=new Array;for(var t=0;t<numposts;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;var o;if(t==e.feed.entry.length)break;for(var u=0;u<n.link.length;u++){if(n.link[u].rel=="alternate"){o=n.link[u].href;break}}for(var u=0;u<n.link.length;u++){if(n.link[u].rel=="replies"&&n.link[u].type=="text/html"){i=n.link[u].title.split(" ")[0];break}}if("content"in n){var f=n.content.$t}else if("summary"in n){var f=n.summary.$t}else var f="";postdate=n.published.$t;if(j>imgr.length-1)j=0;img[t]=imgr[j];s=f;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!="")img[t]=d;var l=[1,2,3,4,5,6,7,8,9,10,11,12];var h=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];var p=postdate.split("-")[2].substring(0,2);var v=postdate.split("-")[1];var m=postdate.split("-")[0];for(var g=0;g<l.length;g++){if(parseInt(v)==l[g]){v=h[g];break}}var y=v+" "+p+" "+m;var w='<div class="crott"><a href="'+o+'">'+r+"</a><p>"+removeHtmlTag(f,summaryPost1)+"... </p></div>";document.write(w);j++}}function showrecentposts(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0;img=new Array;for(var t=0;t<numposts;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;var o;if(t==e.feed.entry.length)break;for(var u=0;u<n.link.length;u++){if(n.link[u].rel=="alternate"){o=n.link[u].href;break}}for(var u=0;u<n.link.length;u++){if(n.link[u].rel=="replies"&&n.link[u].type=="text/html"){i=n.link[u].title.split(" ")[0];break}}if("content"in n){var f=n.content.$t}else if("summary"in n){var f=n.summary.$t}else var f="";postdate=n.published.$t;if(j>imgr.length-1)j=0;img[t]=imgr[j];s=f;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!="")img[t]=d;var l=[1,2,3,4,5,6,7,8,9,10,11,12];var h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var p=postdate.split("-")[2].substring(0,2);var v=postdate.split("-")[1];var m=postdate.split("-")[0];for(var g=0;g<l.length;g++){if(parseInt(v)==l[g]){v=h[g];break}}var y=p+" "+v+" "+m;var w='<a href="'+o+'"><img src="'+img[t]+'"/></a>';document.write(w);j++}}function showrecentposts2(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0;img=new Array;for(var t=0;t<numposts1;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;var o;if(t==e.feed.entry.length)break;for(var u=0;u<n.link.length;u++){if(n.link[u].rel=="alternate"){o=n.link[u].href;break}}for(var u=0;u<n.link.length;u++){if(n.link[u].rel=="replies"&&n.link[u].type=="text/html"){i=n.link[u].title.split(" ")[0];break}}if("content"in n){var f=n.content.$t}else if("summary"in n){var f=n.summary.$t}else var f="";postdate=n.published.$t;if(j>imgr.length-1)j=0;img[t]=imgr[j];s=f;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!="")img[t]=d;var l=[1,2,3,4,5,6,7,8,9,10,11,12];var h=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];var p=postdate.split("-")[2].substring(0,2);var v=postdate.split("-")[1];var m=postdate.split("-")[0];for(var g=0;g<l.length;g++){if(parseInt(v)==l[g]){v=h[g];break}}var y=p+" "+v+" "+m;var w='<li class="car"><div class="thumb"><a href="'+o+'"><span class="play-dong"></span><img width="170" height="128" src="'+img[t]+'"/></a></div><h3><a class="slider_title" href="'+o+'">'+r+"</a></h3></li>";document.write(w);j++}}function showrecentposts1(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0;img=new Array;for(var t=0;t<numposts2;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;var o;if(t==e.feed.entry.length)break;for(var u=0;u<n.link.length;u++){if(n.link[u].rel=="alternate"){o=n.link[u].href;break}}for(var u=0;u<n.link.length;u++){if(n.link[u].rel=="replies"&&n.link[u].type=="text/html"){i=n.link[u].title.split(" ")[0];break}}if("content"in n){var f=n.content.$t}else if("summary"in n){var f=n.summary.$t}else var f="";postdate=n.published.$t;if(j>imgr.length-1)j=0;img[t]=imgr[j];s=f;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!="")img[t]=d;var l=[1,2,3,4,5,6,7,8,9,10,11,12];var h=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];var p=postdate.split("-")[2].substring(0,2);var v=postdate.split("-")[1];var m=postdate.split("-")[0];for(var g=0;g<l.length;g++){if(parseInt(v)==l[g]){v=h[g];break}}var y=p+" "+v+" "+m;var w='<div class="column"><a href="'+o+'"><span class="play-button"></span><img class="column_img" src="'+img[t]+'"/></a><h3><a href="'+o+'">'+r+"</a></h3></div>";document.write(w);j++}}function showrecentposts6(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0;img=new Array;document.write("<ul>");for(var t=0;t<numposts6;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;var o;if(t==e.feed.entry.length)break;for(var u=0;u<n.link.length;u++){if(n.link[u].rel=="alternate"){o=n.link[u].href;break}}for(var u=0;u<n.link.length;u++){if(n.link[u].rel=="replies"&&n.link[u].type=="text/html"){i=n.link[u].title.split(" ")[0];break}}if("content"in n){var f=n.content.$t}else if("summary"in n){var f=n.summary.$t}else var f="";postdate=n.published.$t;if(j>imgr.length-1)j=0;img[t]=imgr[j];s=f;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!="")img[t]=d;var l=[1,2,3,4,5,6,7,8,9,10,11,12];var h=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];var p=postdate.split("-")[2].substring(0,2);var v=postdate.split("-")[1];var m=postdate.split("-")[0];for(var g=0;g<l.length;g++){if(parseInt(v)==l[g]){v=h[g];break}}var y=p+" "+v+" "+m;var w=' <li class="featuredPost2"><a href="'+o+'"><img width="107" height="80" class="alignleft" src="'+img[t]+'"/></a><h3 class="entry-title"><a href="'+o+'">'+r+"</a></h3>"+removeHtmlTag(f,summaryPost)+"...</li>";document.write(w);j++}document.write("</ul>")}function related_results_labels_thumbs(e){for(var t=0;t<e.feed.entry.length;t++){var n=e.feed.entry[t];relatedTitles[relatedTitlesNum]=n.title.$t;try{thumburl[relatedTitlesNum]=n.media$thumbnail.url}catch(r){s=n.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!=""){thumburl[relatedTitlesNum]=d}else thumburl[relatedTitlesNum]="http://1.bp.blogspot.com/-QjSndGbF0No/T-Nt3HgKsDI/AAAAAAAAG9o/cN6_Oy306rc/s1600/no-video.gif"}if(relatedTitles[relatedTitlesNum].length>35)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,47)+"...";for(var i=0;i<n.link.length;i++){if(n.link[i].rel=="alternate"){relatedUrls[relatedTitlesNum]=n.link[i].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var e=new Array(0);var t=new Array(0);var n=new Array(0);for(var r=0;r<relatedUrls.length;r++){if(!contains_thumbs(e,relatedUrls[r])){e.length+=1;e[e.length-1]=relatedUrls[r];t.length+=1;n.length+=1;t[t.length-1]=relatedTitles[r];n[n.length-1]=thumburl[r]}}relatedTitles=t;relatedUrls=e;thumburl=n}function contains_thumbs(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return true;return false}function printRelatedLabels_thumbs(){for(var e=0;e<relatedUrls.length;e++){if(relatedUrls[e]==currentposturl||!relatedTitles[e]){relatedUrls.splice(e,1);relatedTitles.splice(e,1);thumburl.splice(e,1);e--}}var t=Math.floor((relatedTitles.length-1)*Math.random());var e=0;if(relatedTitles.length>0)document.write("<h2>"+relatedpoststitle+"</h2>");document.write('<div style="clear: both;"/>');while(e<relatedTitles.length&&e<50&&e<maxresults){document.write('<a style="text-decoration:none;margin:0 8px 10px 5px;float:left;;border:1px solid #ccc;box-shadow:0 0 4px #bbb;-moz-box-shadow:0 0 4px #bbb;-webkit-box-shadow:0 0 4px #bbb;');if(e!=0)document.write('"');else document.write('"');document.write(' href="'+relatedUrls[t]+'" title="'+relatedTitles[t]+'"><div class="play-button"><img class="maskolis_img" src="'+thumburl[t]+'"/><br/></div><h3 class="maskolis_titles">'+relatedTitles[t]+"</h3></a>");if(t<relatedTitles.length-1){t++}else{t=0}e++}document.write("</div>");relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)}imgr=new Array;imgr[0]="http://1.bp.blogspot.com/-QjSndGbF0No/T-Nt3HgKsDI/AAAAAAAAG9o/cN6_Oy306rc/s1600/no-video.gif";showRandomImg=true;aBold=true;summaryPost=100;summaryPost1=200;numposts=6;numposts1=10;numposts2=6;numposts6=3;Title1="Animales";Title2="Deportes";Title3="Humor";Title4="Infantiles";Title5="Musica";Title6="Terror";var relatedTitles=new Array;var relatedTitlesNum=0;var relatedUrls=new Array;var thumburl=new Array;jQuery(document).ready(function(){$(".tabber").hide();$("ul.tab-view li:first").addClass("active").show();$(".tabber:first").show();$("ul.tab-view li").click(function(){$("ul.tab-view li").removeClass("active");$(this).addClass("active");$(".tabber").hide();var e=$(this).find("a").attr("href");$(e).fadeIn();return false})});jQuery.cookie=function(e,t,n){if(arguments.length>1&&String(t)!=="[object Object]"){n=jQuery.extend({},n);if(t===null||t===undefined){n.expires=-1}if(typeof n.expires==="number"){var r=n.expires,i=n.expires=new Date;i.setDate(i.getDate()+r)}t=String(t);return document.cookie=[encodeURIComponent(e),"=",n.raw?t:encodeURIComponent(t),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}n=t||{};var s,o=n.raw?function(e){return e}:decodeURIComponent;return(s=(new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)")).exec(document.cookie))?o(s[1]):null};jQuery(document).ready(function(){var e=jQuery(".post"),t=jQuery("a.bar_view");$dat=jQuery("a.dat_view");$dat.click(function(){e.removeClass("bar");jQuery(this).addClass("active");t.removeClass("active");jQuery.cookie("dat_style",0);return false});t.click(function(){e.addClass("bar");jQuery(this).addClass("active");$dat.removeClass("active");jQuery.cookie("dat_style",1);return false});if(jQuery.cookie("dat_style")==0){e.removeClass("bar");$dat.addClass("active")}else{e.addClass("bar");t.addClass("active")}});jQuery(document).ready(function(){$(".paging").show();$(".paging a:first").addClass("active");var e=$(".sompret").width();var t=$(".image_reel img").size();var n=e*t;$(".image_reel").css({width:n});rotate=function(){var t=$active.attr("rel")-1;var n=t*e;$(".paging a").removeClass("active");$active.addClass("active");$(".crott").stop(true,true).slideUp("slow");$(".crott").eq($(".paging a.active").attr("rel")-1).slideDown("slow");$(".image_reel").animate({left:-n},500)};rotateSwitch=function(){$(".crott").eq($(".paging a.active").attr("rel")-1).slideDown("slow");play=setInterval(function(){$active=$(".paging a.active").next();if($active.length===0){$active=$(".paging a:first")}rotate()},1e4)};rotateSwitch();$(".paging a").click(function(){$active=$(this);clearInterval(play);rotate();rotateSwitch();return false})});$(function(){var e=$("#pull");menu=$(".top-wrapper ul");menuHeight=menu.height();$(e).on("click",function(e){e.preventDefault();menu.slideToggle()})})