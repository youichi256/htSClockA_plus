var ck,wc,wb,ds,mm;
var tm,cm,cs;
function rst() {
	ck=System.Gadget.Settings.read("ck");
	wc=System.Gadget.Settings.read("wc");
	wb=System.Gadget.Settings.read("wb");
	ds=System.Gadget.Settings.read("ds");
	mm=System.Gadget.Settings.read("mm");
}
function ud() {
	var d=new Date();
	var t=Math.floor(d.getTime()/1000);
	if(cs!=t) {
		cs=t;
		var ns=d.getSeconds();
		var nm=d.getMinutes();
		if(ds) eh.rotation=ns*6;
		if(!mm) lh.rotation=nm*6+ns/10;
		t=Math.floor(t/60);
		if(cm!=t) {
			cm=t;
			sh.rotation=d.getHours()*30+nm/2;
			if(mm) lh.rotation=nm*6;
		}
	}
	tm=setTimeout(ud,ds?100:1000);
}
var awb=["bg0","bg1","bg2","bg3","bg4"];
var ack=[
	["idx0","shd0","lhd0","ehd0"],
	["idx1","shd1","lhd1","ehd1"],
	["idx2","shd2","lhd2","ehd2"],
	["idx3","shd3","lhd3","ehd3"]
];
var awc=[
	[1.0, "0,0,0"],
	[0.75,"0,0,0"],
	[0.25,"255,255,255"],
	[0.0, "255,255,255"]
];
