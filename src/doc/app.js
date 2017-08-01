/*  初始化css */
function addCSS(cssText) {
    var style = document.createElement('style'),head = document.head || document.getElementsByTagName('head')[0];
	    style.type = 'text/css';
	    if (style.styleSheet) {var func = function() {try {style.styleSheet.cssText = cssText;} catch (e) {}};if (style.styleSheet.disabled) {setTimeout(func, 10);} else {func();}} else {var textNode = document.createTextNode(cssText);style.appendChild(textNode);}
	    head.appendChild(style);
}
addCSS('html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}a{background-color:transparent}a:active,a:hover{outline:0}body{font-family:"Helvetica Neue",Helvetica,Arial,serif;font-size:15px;font-weight:400;line-height:1.5;color:#666;background:#fafafa url(./img/body-bg.jpg) 0 0 repeat}p{margin-top:0}a{color:#2879d0}a:hover{color:#2268b2}header{padding-top:40px;padding-bottom:40px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;background:#2e7bcf url(./img/header-bg.jpg) 0 0 repeat-x;border-bottom:solid 1px #275da1}header h1{width:540px;margin-top:0;margin-bottom:0.2em;font-size:72px;font-weight:normal;line-height:1;color:#fff;letter-spacing:-1px}header h2{width:540px;margin-top:0;margin-bottom:0;font-size:26px;font-weight:normal;line-height:1.3;color:#9ddcff;letter-spacing:0}.inner{position:relative;width:940px;margin:0 auto}#content-wrapper{padding-top:30px;border-top:solid 1px #fff}#main-content{float:left;width:690px}#main-content img{max-width:100%}aside#sidebar{float:right;width:200px;min-height:504px;padding-left:20px;font-size:12px;line-height:1.3;background:transparent url(./img/sidebar-bg.jpg) 0 0 no-repeat; overflow: auto;height: 450px;}}aside#sidebar p.repo-owner,aside#sidebar p.repo-owner a{font-weight:bold;}#downloads{margin-bottom:40px}a.button{width:134px;height:58px;padding-top:22px;padding-left:68px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:23px;line-height:1.2;color:#fff}a.button small{display:block;font-size:11px}header a.button{position:absolute;top:0;right:0;background:transparent url(./img/github-button.png) 0 0 no-repeat}aside a.button{display:block;width:138px;padding-left:64px;margin-bottom:20px;font-size:21px;background:transparent url(./img/download-button.png) 0 0 no-repeat}code,pre{margin-bottom:30px;font-family:Monaco,"Bitstream Vera Sans Mono","Lucida Console",Terminal,monospace;font-size:13px;color:#222}code{padding:0 3px;background-color:#f2f8fc;border:solid 1px #dbe7f3}pre{padding:20px;overflow:auto;text-shadow:none;background:#fff;border:solid 1px #f2f2f2}pre code{padding:0;color:#2879d0;background-color:#fff;border:none}ul,ol,dl{margin-bottom:20px}hr{height:0;margin-top:1em;margin-bottom:1em;border:0;border-top:solid 1px #ddd}table{width:100%;border:1px solid #ebebeb}th{font-weight:500}td{font-weight:300;text-align:center;border:1px solid #ebebeb}form{padding:20px;background:#f2f2f2}#main-content h1{margin-top:0;margin-bottom:0;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:2.8em;font-weight:normal;color:#474747;text-indent:6px;letter-spacing:-1px}#main-content h1:before{padding-right:0.3em;margin-left:-0.9em;color:#9ddcff;content:"/"}#main-content h2{margin-bottom:8px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:22px;font-weight:bold;color:#474747;text-indent:4px}#main-content h2:before{padding-right:0.3em;margin-left:-1.5em;content:"//";color:#9ddcff}#main-content h3{margin-top:24px;margin-bottom:8px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:18px;font-weight:bold;color:#474747;text-indent:3px}#main-content h3:before{padding-right:0.3em;margin-left:-2em;content:"///";color:#9ddcff}#main-content h4{margin-bottom:8px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:15px;font-weight:bold;color:#474747;text-indent:3px}h4:before{padding-right:0.3em;margin-left:-2.8em;content:"////";color:#9ddcff}#main-content h5{margin-bottom:8px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:14px;color:#474747;text-indent:3px}h5:before{padding-right:0.3em;margin-left:-3.2em;content:"/////";color:#9ddcff}#main-content h6{margin-bottom:8px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:.8em;color:#474747;text-indent:3px}h6:before{padding-right:0.3em;margin-left:-3.7em;content:"//////";color:#9ddcff}p{margin-bottom:20px}a{text-decoration:none}p a{font-weight:400;overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}blockquote{padding:0 0 0 30px;margin-bottom:20px;font-size:1.6em;border-left:10px solid #e9e9e9}ul{list-style-position:inside;list-style:disc;padding-left:20px}ol{list-style-position:inside;list-style:decimal;padding-left:3px}dl dd{font-style:italic;font-weight:100}footer{padding-top:20px;padding-bottom:30px;margin-top:40px;font-size:13px;color:#aaa;background:#f4f4f4}footer a{color:#666}footer a:hover{color:#444}.clearfix:after{display:block;height:0;clear:both;visibility:hidden;content:"."}.clearfix{display:inline-block}* html .clearfix{height:1%}.clearfix{display:block}svg{width:690px;height:400px}@media only screen and (min-width:768px) and (max-width:959px){.inner{width:740px}header h1,header h2{width:340px}header h1{font-size:60px}header h2{font-size:30px}#main-content{width:490px}#main-content h1:before,#main-content h2:before,#main-content h3:before,#main-content h4:before,#main-content h5:before,#main-content h6:before{padding-right:0;margin-left:0;content:none}}@media only screen and (max-width:767px){.inner{width:93%}header{padding:20px 0}header .inner{position:relative}header h1,header h2{width:100%}header h1{font-size:48px}header h2{font-size:24px}header a.button{position:relative;display:inline-block;width:auto;height:auto;padding:5px 10px;margin-top:15px;font-size:13px;line-height:1;color:#2879d0;text-align:center;background-color:#9ddcff;background-image:none;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px}header a.button small{display:inline;font-size:13px}#main-content,aside#sidebar{float:none;width:100%!important}aside#sidebar{min-height:0;padding:20px 0;margin-top:20px;background-image:none;border-top:solid 1px #ddd}aside#sidebar a.button{display:none}#main-content h1:before,#main-content h2:before,#main-content h3:before,#main-content h4:before,#main-content h5:before,#main-content h6:before{padding-right:0;margin-left:0;content:none}}#sidebar{position:fixed;left:50%;margin-left:250px}#sidebar p{margin-bottom:0px;line-height:20px}canvas{margin:0 auto}.highlight{word-wrap: break-word;word-break: break-all;}.toolbox ul li{font-size:12px;}.toolbox .tbtitle{font-size: 18px;padding:10px 0;}.toolbox p{font-size:14px;text-indent:2em;color:#777} .toolbox table{margin-bottom:25px;border-spacing: 0; border-collapse: collapse;}.toolbox table tbody tr td{padding:6px 8px;text-align:left;font-size:12px}.toolbox table tbody tr:nth-child(odd){background-color: #F6F4F0;}.toolbox table thead th{padding:6px 8px;border: 1px solid #ddd;border-bottom-width: 2px;color: #ffffff;background-color: #555555;} .tbtitle small{font-size:14px;color:#C2A9A9;padding-left:10px}.btn{margin:4px 3px 0 0;float:left; display:inline-block;*display:inline;*zoom:1;padding:4px 10px 4px;margin-bottom:0;font-size:13px;line-height:18px;*line-height:20px;color:#333333;text-align:center;text-shadow:0 1px 1px rgba(255,255,255,0.75);vertical-align:middle;cursor:pointer;background-color:#f5f5f5;background-image:-moz-linear-gradient(top,#ffffff,#e6e6e6);background-image:-ms-linear-gradient(top,#ffffff,#e6e6e6);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ffffff),to(#e6e6e6));background-image:-webkit-linear-gradient(top,#ffffff,#e6e6e6);background-image:-o-linear-gradient(top,#ffffff,#e6e6e6);background-image:linear-gradient(top,#ffffff,#e6e6e6);background-repeat:repeat-x;border-color:#e6e6e6 #e6e6e6 #bfbfbf;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);border:1px solid #cccccc;border-bottom-color:#b3b3b3;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.btn:hover{color:#333333;text-decoration:none;background-color:#e6e6e6;*background-color:#d9d9d9;background-position:0 -15px}table img{float: left;}'.replace(/url\((.*?)\)/igm,function(a,b){return 'url('+require(b+'')+')'}));
/* 初始化骨架 */
(function(title,pathName){
	document.getElementById('app').innerHTML='<header><div class="inner"><a href="https://jsgu.github.io/"><h1>jsgu.github.io</h1></a><h2>'+title+'---实例源码</h2><a href="https://github.com/jsgu/jsgu.github.io/tree/master/src/'+pathName+'" class="button"><small>Follow me on</small> GitHub</a></div></header><div id="content-wrapper"><div class="inner clearfix"><section id="main-content"></section><aside id="sidebar"></aside></div></div>';
}('JSGU在线工具','jsgutool'))

/* 基本结构 */
function tpl(id,title,tpStr){
	return '<h4 id="'+title+'">'+title+'</h4><div class="toolbox">'+tpStr+'</div>';
}
/* js 原生数据合并 */
function extend(orig,option){var orig=orig||{},option=option||{};for(var name in option){if(typeof option[name]==="object"&&orig[name]){for(var namec in option[name]){orig[name][namec]=option[name][namec];}}else{orig[name]=option[name];}}
return orig;}
/* 渲染文档模板 */
function docTpl(ops){var orig={title:'',subTitle:'',description:'',ulList:[],tables:{columns:[],data:[]}};var op=extend(orig,ops),str='';if(op.subTitle){str+='<div class="tbtitle" id="'+op.title+'">'+op.title+'<small>'+op.subTitle+'</small></div>';}else{str+='<div class="tbtitle"  id="'+op.title+'">'+op.title+'</div>';}if(op.description){str+='<p>'+op.description+'</p>';}if(op.ulList.length>0){var ulListStr="";for(var i=0;i<op.ulList.length;i++){ulListStr+='<li>'+op.ulList[i]+'</li>';}str+='<ul>'+ulListStr+'</ul>';}if(op.tables.data.length>0){var thStr='',trStr='';for(var i=0;i<op.tables.columns.length;i++){thStr+='<th>'+op.tables.columns[i]+'</th>';}for(var i=0;i<op.tables.data.length;i++){var dd=op.tables.data,tdStr='';for(var j=0;j<dd[i].length;j++){tdStr+='<td>'+dd[i][j]+'</td>';}trStr+='<tr>'+tdStr+'</tr>';}str+='<table><thead><tr>'+thStr+'</tr></thead><tbody>'+trStr+'</tbody></table>'}return str;}
function docEach(arr){var docStr='';for (var i = 0; i < arr.length; i++) {docStr+=docTpl(arr[i]);}return docStr;}
/*===================================实例员源码===============================================*/
var canvasBase={
	roundedRect:function(ctx,x,y,width,height,radius){
	  ctx.beginPath();
	  ctx.moveTo(x,y+radius);
	  ctx.lineTo(x,y+height-radius);
	  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
	  ctx.lineTo(x+width-radius,y+height);
	  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
	  ctx.lineTo(x+width,y+radius);
	  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
	  ctx.lineTo(x+radius,y);
	  ctx.quadraticCurveTo(x,y,x,y+radius);
	  ctx.stroke();
	}
}

/*===================================渲染视图===============================================*/
function $(id){	return document.getElementById(id);}

import * as d from './data'

	// tpl('tool3','HTTP状态码大全',[docTpl(data.toolStr3),docTpl(data.toolStr3a),docTpl(data.toolStr3b),docTpl(data.toolStr3c)].join('')),
$('main-content').innerHTML=[
	tpl('tool1','HTTP请求方法对照表',[docTpl(d.toolStr1),docTpl(d.toolStr1a)].join('')),
	tpl('tool2','HTTP请求头大全',[docTpl(d.toolStr2),docTpl(d.toolStr2a),docTpl(d.toolStr2b)].join('')),
	tpl('tool3','HTTP状态码大全',docEach([d.toolStr3,d.toolStr3a,d.toolStr3b,d.toolStr3c])),
	tpl('tool4','HTTP Content-type 对照表',docEach([d.toolStr4,d.toolStr4a,d.toolStr4b,d.toolStr4c,d.toolStr4d,d.toolStr4e,d.toolStr4f,d.toolStr4g,d.toolStr4h,d.toolStr4i,d.toolStr41])),
	tpl('tool5','ASCII码对照表',docEach([d.toolStr5,d.toolStr5a,d.toolStr5b,d.toolStr5c,d.toolStr5d])),
	tpl('tool6','EASCII码对照表',docEach([d.toolStr6,d.toolStr6a])),
	tpl('tool7','HTML/XML转义字符对照表',docEach([d.toolStr7,d.toolStr7a,d.toolStr7b,d.toolStr7c,d.toolStr7d,d.toolStr7e,d.toolStr7f,d.toolStr7g])),
	tpl('tool8','JavaScript特殊字符转义字符对照表',docEach([d.toolStr8])),
	tpl('tool9','TCP/UDP常见端口参考',docEach([d.toolStr9,d.toolStr9a,d.toolStr9b,d.toolStr9c,d.toolStr9d,d.toolStr9e,d.toolStr9f])),
	tpl('tool10','GB2312简体中文编码表',docEach([d.toolStr10,d.toolStr10a])),
	tpl('tool11','Java/C++/C语言/PHP/Python运算符优先级对照表',docEach([d.toolStr11,d.toolStr11a,d.toolStr11b,d.toolStr11c,d.toolStr11d,d.toolStr11e])),
	tpl('tool12','特殊符号大全',docEach([d.toolStr12])),
	tpl('tool13','UI尺寸规范对照表',docEach([d.toolStr13,d.toolStr13a])),
].join('');
/*===================================自动生成目录树===============================================*/
(function(){var mh=document.getElementById('main-content').getElementsByTagName('h4'),
	mhArr=[];for (var i = 0; i < mh.length; i++) {
		mhArr.push('<p><a href="#'+mh[i].id+'">'+mh[i].id+'</a></p>')}
		document.getElementById('sidebar').innerHTML=mhArr.join('');
}())


/*===================================居中显示遮罩层==============================================*/
function centerModal(mdlId) { //居中显示遮罩层
	var modalToCenter = document.getElementById(mdlId), currH = 0, currW = 0;
	modalToCenter.style.display = 'block';
	currH = modalToCenter.offsetHeight;
	currW = modalToCenter.offsetWidth;
	if ((document.documentElement && Number(document.documentElement.clientHeight) !== 0 && document.documentElement.clientHeight < currH + 20) || (document.body.offsetHeight && document.body.offsetHeight < currH + 20) || (window.innerHeight && window.innerHeight < currH + 20)) {
		modalToCenter.style.position = 'absolute';
		modalToCenter.style.top = "20px";
		modalToCenter.style.marginTop = '0px';
		window.scroll(0, 0);
	} else {
		modalToCenter.style.position = 'fixed';
		modalToCenter.style.top = "50%";
		modalToCenter.style.marginTop = -(currH / 2) + 'px';
	}
	modalToCenter.style.left = "50%";
	modalToCenter.style.marginLeft = -(currW / 2) + 'px';
}



// var dsa='<div class="ui_guifan"><h5>iPhone界面尺寸</h5><div id="mod_tad_1"><table><thead><tr><th>设备</th><th>分辨率</th><th>PPI</th><th>状态栏高度</th><th>导航栏高度</th><th>标签栏高度</th></tr></thead><tbody><tr><td class="tad_fir"><img src="./img/uiimg/iphone_6p.png"><p>iPhone6 plus设计版</p></td><td><span>1242×2208 px</span></td><td><span>401PPI</span></td><td><span>60px</span></td><td><span>132px</span></td><td><span>146px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/iphone_6p.png"><p>iPhone6 plus放大版</p></td><td><span>1125×2001 px</span></td><td><span>401PPI</span></td><td><span>54px</span></td><td><span>132px</span></td><td><span>146px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/iphone_6p.png"><p>iPhone6 plus物理版</p></td><td><span>1080×1920 px</span></td><td><span>401PPI</span></td><td><span>54px</span></td><td><span>132px</span></td><td><span>146px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/iphone_6.png"><p>iPhone6</p></td><td><span>750×1334 px</span></td><td><span>326PPI</span></td><td><span>40px</span></td><td><span>88px</span></td><td><span>98px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/iphone_5.png"><p>iPhone5 - 5C - 5S</p></td><td><span>640×1136 px</span></td><td><span>326PPI</span></td><td><span>40px</span></td><td><span>88px</span></td><td><span>98px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/iphone_4.png"><p>iPhone4 - 4S</p></td><td><span>640×960 px</span></td><td><span>326PPI</span></td><td><span>40px</span></td><td><span>88px</span></td><td><span>98px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/iphone_3.png"><p class="tad_td">iPhone &amp; iPod Touch第一代、第二代、第三代</p></td><td><span>320×480 px</span></td><td><span>163PPI</span></td><td><span>20px</span></td><td><span>44px</span></td><td><span>49px</span></td></tr></tbody></table></div><img src="./img/uiimg/iph.png" width="862" height="650"><h5>iPhone图标尺寸：</h5><div id="mod_tad_1"><table><thead><tr><th>设备</th><th>App Store</th><th>程序应用</th><th>主屏幕</th><th>Spotlight搜索</th><th>标签栏</th><th>工具栏和导航栏</th></tr></thead><tbody><tr><td class="tad_fir2"><img src="./img/uiimg/iphone_6p.png"><p>iPhone6 Plus<em>(@3×)</em></p></td><td><span>1024×1024 px</span></td><td><span>180×180 px</span></td><td><span>114×114 px</span></td><td><span>87×87 px</span></td><td><span>75×75 px</span></td><td><span>66×66 px</span></td></tr><tr><td class="tad_fir2"><img src="./img/uiimg/iphone_6.png"><p>iPhone6<em>(@2×)</em></p></td><td><span>1024×1024 px</span></td><td><span>120×120 px</span></td><td><span>114×114 px</span></td><td><span>58×58 px</span></td><td><span>75×75 px</span></td><td><span>44×44 px</span></td></tr><tr><td class="tad_fir2"><img src="./img/uiimg/iphone_5.png"><p>iPhone5 - 5C - 5S<em>(@2×)</em></p></td><td><span>1024×1024 px</span></td><td><span>120×120 px</span></td><td><span>114×114 px</span></td><td><span>58×58 px</span></td><td><span>75×75 px</span></td><td><span>44×44 px</span></td></tr><tr><td class="tad_fir2"><img src="./img/uiimg/iphone_4.png"><p>iPhone4 - 4S<em>(@2×)</em></p></td><td><span>1024×1024 px</span></td><td><span>120×120 px</span></td><td><span>114×114 px</span></td><td><span>58×58 px</span></td><td><span>75×75 px</span></td><td><span>44×44 px</span></td></tr><tr><td class="tad_fir2"><img src="./img/uiimg/iphone_3.png"><p class="tad_td">iPhone &amp; iPod Touch第一代、第二代、第三代</p></td><td><span>1024×1024 px</span></td><td><span>120×120 px</span></td><td><span>57×57 px</span></td><td><span>29×29 px</span></td><td><span>38×38 px</span></td><td><span>30×30 px</span></td></tr></tbody></table></div><br><img src="./img/uiimg/iph-ico.png" width="877" height="403"><br><h5>iPad的设计尺寸</h5><div id="mod_tad_1"><table><thead><tr><th>设备</th><th>尺寸</th><th>分辨率</th><th>状态栏高度</th><th>导航栏高度</th><th>标签栏高度</th></tr></thead><tbody><tr><td class="tad_fir"><img src="./img/uiimg/ipad_s.png"><p class="tad_td">iPad 3 - 4 - 5 - 6 - Air - Air2 - mini2</p></td><td><span>2048×1536 px</span></td><td><span>264PPI</span></td><td><span>40px</span></td><td><span>88px</span></td><td><span>98px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/ipad_s.png"><p>iPad 1 - 2</p></td><td><span>1024×768 px</span></td><td><span>132PPI</span></td><td><span>20px</span></td><td><span>44px</span></td><td><span>49px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/ipad_s.png"><p>iPad Mini</p></td><td><span>1024×768 px</span></td><td><span>163PPI</span></td><td><span>20px</span></td><td><span>44px</span></td><td><span>49px</span></td></tr></tbody></table></div><br><img src="./img/uiimg/ipa.png" width="875" height="323"><h5>iPad图标尺寸：</h5><div id="mod_tad_1"><table><thead><tr><th>设备</th><th>App Store</th><th>程序应用</th><th>主屏幕</th><th>Spotlight搜索</th><th>标签栏</th><th>工具栏和导航栏</th></tr></thead><tbody><tr><td class="tad_fir"><img src="./img/uiimg/ipad_s.png"><p class="tad_td">iPad 3 - 4 - 5 - 6 - Air - Air2 - mini2</p></td><td><span>1024×1024 px</span></td><td><span>180×180 px</span></td><td><span>144×144 px</span></td><td><span>100×100 px</span></td><td><span>50×50 px</span></td><td><span>44×44 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/ipad_s.png"><p>iPad 1 - 2</p></td><td><span>1024×1024 px</span></td><td><span>90×90 px</span></td><td><span>72×72 px</span></td><td><span>50×50 px</span></td><td><span>25×25 px</span></td><td><span>22×22 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/ipad_s.png"><p>iPad Mini</p></td><td><span>1024×1024 px</span></td><td><span>90×90 px</span></td><td><span>72×72 px</span></td><td><span>50×50 px</span></td><td><span>25×25 px</span></td><td><span>22×22 px</span></td></tr></tbody></table></div><br><h3><img src="./img/uiimg/ipa-ico.png" width="882" height="403"></h3><h5>Android SDK模拟机的尺寸</h5><div id="mod_tad_1"><table><thead><tr><th>屏幕大小</th><th>低密度（120）</th><th>中等密度（160）</th><th>高密度（240）</th><th>超高密度（320）</th></tr></thead><tbody><tr><td class="tad_fir_1"><p>小屏幕</p></td><td><span>&emsp;&emsp;QVGA（240×320）</span></td><td><span>&nbsp;</span></td><td><span>&emsp;&emsp;&emsp;&emsp;&emsp;480×640</span></td><td><span>&nbsp;</span></td></tr><tr><td class="tad_fir_1"><p>普通屏幕</p></td><td><span> WQVGA400（240×400） WQVGA432（240×432）</span></td><td><span>&emsp;&emsp;HVGA（320×480）</span></td><td><span> WVGA800（480×800） WVGA854（480×854） 600×1024</span></td><td><span>&emsp;&emsp;640×960</span></td></tr><tr><td class="tad_fir_1"><p>大屏幕</p></td><td><span> WVGA800 *（480×800） WVGA854 *（480×854）</span></td><td><span> WVGA800 *（480×800） WVGA854 *（480×854） 600x1024</span></td><td><span>&nbsp;</span></td><td><span>&nbsp;</span></td></tr><tr><td class="tad_fir_1"><p>超大屏幕</p></td><td><span>&emsp;&emsp;&emsp;1024×600</span></td><td><span> 1024×768 1280×768WXGA（1280×800）</span></td><td><span> 1536×1152 1920×1152 1920×1200</span></td><td><span> 2048×1536 2560×1600</span></td></tr></tbody></table></div><h5>Android的图标尺寸</h5><div id="mod_tad_1"><table><thead><tr><th>屏幕大小</th><th>启动图标</th><th>操作栏图标</th><th>上下文图标</th><th>系统通知图标(白色)</th><th>最细笔画</th></tr></thead><tbody><tr><td class="tad_fir_1"><p>320×480 px</p></td><td><span>48×48 px</span></td><td><span>32×32 px</span></td><td><span>16×16 px</span></td><td><span>24×24 px</span></td><td><span>不小于2 px</span></td></tr><tr><td class="tad_fir_1"><p>480×800px 480×854px 540×960px</p></td><td><span>72×72 px</span></td><td><span>48×48 px</span></td><td><span>24×24 px</span></td><td><span>36×36 px</span></td><td><span>不小于3 px</span></td></tr><tr><td class="tad_fir_1"><p>720×1280 px</p></td><td><span>48×48 dp</span></td><td><span>32×32 dp</span></td><td><span>16×16 dp</span></td><td><span>24×24 dp</span></td><td><span>不小于2 dp</span></td></tr><tr><td class="tad_fir_1"><p>1080×1920 px</p></td><td><span>144×144 px</span></td><td><span>96×96 px</span></td><td><span>48×48 px</span></td><td><span>72×72 px</span></td><td><span>不小于6 px</span></td></tr></tbody></table></div><h5>Android安卓系统dp/sp/px换算表</h5><div id="mod_tad_1"><table><thead><tr><th>名称</th><th>分辨率</th><th>比率 rate (针对320px)</th><th>比率 rate (针对640px)</th><th>比率 rate (针对750px)</th></tr></thead><tbody><tr><td class="tad_fir_1"><p>idpi</p></td><td><span>240×320</span></td><td><span>0.75</span></td><td><span>0.375</span></td><td><span>0.32</span></td></tr><tr><td class="tad_fir_1"><p>mdpi</p></td><td><span>320×480</span></td><td><span>1</span></td><td><span>0.5</span></td><td><span>0.4267</span></td></tr><tr><td class="tad_fir_1"><p>hdpi</p></td><td><span>480×800</span></td><td><span>1.5</span></td><td><span>0.75</span></td><td><span>0.64</span></td></tr><tr><td class="tad_fir_1"><p>xhdpi</p></td><td><span>720×1280</span></td><td><span>2.25</span></td><td><span>1.125</span></td><td><span>1.042</span></td></tr><tr><td class="tad_fir_1"><p>xxhdpi</p></td><td><span>1080×1920</span></td><td><span>3.375</span></td><td><span>1.6875</span></td><td><span>1.5</span></td></tr></tbody></table></div><h5>主流Android手机分辨率和尺寸</h5><div id="mod_tad_1"><table><thead><tr><th>设备</th><th>分辨率</th><th>尺寸</th><th>设备</th><th>分辨率</th><th>尺寸</th></tr></thead><tbody><tr><td class="tad_fir"><img src="./img/uiimg/Android_mx2.png"><p>魅族MX2</p></td><td><span>4.4英寸</span></td><td><span>800×1280 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_mx3.png"><p>魅族MX3</p></td><td><span>5.1英寸</span></td><td><span>1080×1280 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_mx4.png"><p>魅族MX4</p></td><td><span>5.36英寸</span></td><td><span>1152×1920 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_mx4p.png"><p>魅族MX4 Pro<em>未上市</em></p></td><td><span>5.5英寸</span></td><td><span>1536×2560 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_s4.png"><p>三星GALAXY Note 4</p></td><td><span>5.7英寸</span></td><td><span>1440×2560 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_s3.png"><p>三星GALAXY Note 3</p></td><td><span>5.7英寸</span></td><td><span>1080×1920 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_s5.png"><p>三星GALAXY S5</p></td><td><span>5.1英寸</span></td><td><span>1080×1920 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_s2.png"><p>三星GALAXY Note II</p></td><td><span>5.5英寸</span></td><td><span>720×1280 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_L36h.png"><p>索尼Xperia Z3</p></td><td><span>5.2英寸</span></td><td><span>1080×1920 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_s6.png"><p>索尼XL39h</p></td><td><span>6.44英寸</span></td><td><span>1080×1920 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_h1.png"><p>HTC Desire 820</p></td><td><span>5.5英寸</span></td><td><span>720×1280 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_b.png"><p>HTC One M8</p></td><td><span>4.7英寸</span></td><td><span>1080×1920 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_v1.png"><p>OPPO Find 7</p></td><td><span>5.5英寸</span></td><td><span>1440×2560 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_o1.png"><p>OPPO N1</p></td><td><span>5.9英寸</span></td><td><span>1080×1920 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_o2.png"><p>OPPO R3</p></td><td><span>5英寸</span></td><td><span>720×1280 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_o3.png"><p>OPPO N1 Mini</p></td><td><span>5英寸</span></td><td><span>720×1280 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_m4.png"><p>小米M4</p></td><td><span>5英寸</span></td><td><span>1080×1920 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_m4n.png"><p>小米红米Note</p></td><td><span>5.5英寸</span></td><td><span>720×1280 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_m3.png"><p>小米M3</p></td><td><span>5英寸</span></td><td><span>1080×1920 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_m1.png"><p>小米红米1S</p></td><td><span>4.7英寸</span></td><td><span>720×1280 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_m3s.png"><p>小米M3S<em>未上市</em></p></td><td><span>5英寸</span></td><td><span>1080×1920 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_m2s.png"><p>小米M2S</p></td><td><span>4.3英寸</span></td><td><span>720×1280 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_h6.png"><p>华为荣耀6</p></td><td><span>5英寸</span></td><td><span>1080×1920 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_t1.png"><p>锤子T1</p></td><td><span>4.95英寸</span></td><td><span>1080×1920 px</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/Android_L1.png"><p>LG G3</p></td><td><span>5.5英寸</span></td><td><span>1440×2560 px</span></td><td class="tad_fir"><img src="./img/uiimg/Android_t2.png"><p>OnePlus One</p></td><td><span>5.5英寸</span></td><td><span>1080×1920 px</span></td></tr></tbody></table></div><h5>主流浏览器的界面参数与份额</h5><div id="mod_tad_1"><table><thead><tr><th>浏览器</th><th>状态栏</th><th>菜单栏</th><th>滚动条</th><th>市场份额(国内)</th></tr></thead><tbody><tr><td class="tad_fir"><img src="./img/uiimg/google.png"><p>Chrome 浏览器</p></td><td><span>22 px（浮动出现）</span></td><td><span>60 px</span></td><td><span>15 px</span></td><td><span>8%</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/huofu.png"><p>火狐浏览器</p></td><td><span>20 px</span></td><td><span>132 px</span></td><td><span>15 px</span></td><td><span>1%</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/ie9.png"><p>IE浏览器</p></td><td><span>24 px</span></td><td><span>120 px</span></td><td><span>15 px</span></td><td><span>35%</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/360.png"><p>360 浏览器</p></td><td><span>24 px</span></td><td><span>140 px</span></td><td><span>15 px</span></td><td><span>28%</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/aoyou.png"><p>遨游浏览器</p></td><td><span>24 px</span></td><td><span>147 px</span></td><td><span>15 px</span></td><td><span>1%</span></td></tr><tr><td class="tad_fir"><img src="./img/uiimg/sougou.png"><p>搜狗浏览器</p></td><td><span>25 px</span></td><td><span>163 px</span></td><td><span>15 px</span></td><td><span>5%</span></td></tr></tbody></table></div><h5>系统分辨率统计</h5><div id="mod_tad_1"><table><thead><tr><th>分辨率</th><th>占有率</th><th>分辨率</th><th>占有率</th></tr></thead><tbody><tr><td class="tad_fir_1"><p>1366×768</p></td><td><span>15%</span></td><td class="tad_fir_1"><p>1440×900</p></td><td><span>13%</span></td></tr><tr><td class="tad_fir_1"><p>1920×1080</p></td><td><span>11%</span></td><td class="tad_fir_1"><p>1600×900</p></td><td><span>5%</span></td></tr><tr><td class="tad_fir_1"><p>1280×800</p></td><td><span>4%</span></td><td class="tad_fir_1"><p>1280×1024</p></td><td><span>3%</span></td></tr><tr><td class="tad_fir_1"><p>1680×1050</p></td><td><span>2.8%</span></td><td class="tad_fir_1"><p>320×480</p></td><td><span>2.4%</span></td></tr><tr><td class="tad_fir_1"><p>480×800</p></td><td><span>2%</span></td><td class="tad_fir_1"><p>1280×768</p></td><td><span>1%</span></td></tr></tbody></table></div><br><a href="http://tongji.baidu.com/data/screen" target="_blank" rel="nofollow">&gt;&gt; 查看最新分辨率使用情况</a></div>'
// .replace(/src=\"(.*?)\"/igm,function(a,b){
// 	return 'src="'+require(b+'')+'"';
// });