var sh,lh,eh;
function load() {
	if(System.Gadget.Settings.read("sa")!=true) {
		System.Gadget.Settings.write("ck",0);
		System.Gadget.Settings.write("wc",0);
		System.Gadget.Settings.write("wb",0);
		System.Gadget.Settings.write("ds",true);
		System.Gadget.Settings.write("mm",true);
		System.Gadget.Settings.write("sa",true);
	}
	System.Gadget.settingsUI="settings.html";
	sc();
}
System.Gadget.onSettingsClosed=function(e) {
	if(e.closeAction==e.Action.commit) sc();
};
function sc() {
	rst();
	var bn=awc[wc][0];
	var scl="Color(255,"+awc[wc][1]+")";

	clearTimeout(tm);
	bg.removeObjects();
	bg.src="images/"+awb[wb]+".png";
	var ix=bg.addImageObject("images/"+ack[ck][0]+".png",0,0);
	ix.brightness=bn;
	ix.addShadow(scl,2,100,1,1);
	sh=bg.addImageObject("images/"+ack[ck][1]+".png",58,0);
	sh.brightness=bn;
	sh.addShadow(scl,2,100,1,1);
	lh=bg.addImageObject("images/"+ack[ck][2]+".png",58,0);
	lh.brightness=bn;
	lh.addShadow(scl,2,100,1,1);
	if(ds) {
		eh=bg.addImageObject("images/"+ack[ck][3]+".png",58,0);
		eh.brightness=bn;
		eh.addShadow(scl,2,100,1,1);
	}
	cm=cs=-1;
	ud();
}
