var wbl,ckl,wcl;
function load() {
	var sho=new ActiveXObject("WScript.Shell");
	var wps=sho.RegRead("HKEY_CURRENT_USER\\Control Panel\\Desktop\\WallPaper");
	if(wps) wp.src=wps;
	else wp.style.display="none";

	wbl=awb.length;
	ckl=ack.length;
	wcl=awc.length;

	rst();
	ids.checked=ds;
	imm.checked=mm;
	chg(-1,0);
}
System.Gadget.onSettingsClosing=function(e) {
	if(e.closeAction==e.Action.commit) {
		System.Gadget.Settings.write("ck",ck);
		System.Gadget.Settings.write("wc",wc);
		System.Gadget.Settings.write("wb",wb);
		System.Gadget.Settings.write("ds",ds);
		System.Gadget.Settings.write("mm",mm);
	}
};
function chg(n,a) {
	switch(n) {
	case 0:
		ck+=a;
		if(ck<0) ck=ckl-1;
		else if(ck>=ckl) ck=0;
		break;
	case 1:
		wc+=a;
		if(wc<0) wc=wcl-1;
		else if(wc>=wcl) wc=0;
		break;
	case 2:
		wb+=a;
		if(wb<0) wb=wbl-1;
		else if(wb>=wbl) wb=0;
	default:
	}
	ick.innerText=ck+1+" / "+ckl;
	iwc.innerText=wc+1+" / "+wcl;
	iwb.innerText=wb+1+" / "+wbl;
	ds=ids.checked;
	mm=imm.checked;

	var bn=awc[wc][0];
	var scl="Color(255,"+awc[wc][1]+")";

	bg.src="images/"+awb[wb]+".png";
	ix.src="images/"+ack[ck][0]+".png";
	ix.brightness=bn;
	ix.addShadow(scl,2,100,1,1);
	sh.src="images/"+ack[ck][1]+".png";
	sh.brightness=bn;
	sh.addShadow(scl,2,100,1,1);
	lh.src="images/"+ack[ck][2]+".png";
	lh.brightness=bn;
	lh.addShadow(scl,2,100,1,1);
	if(!ds) eh.style.visibility="hidden";
	else {
		eh.style.visibility="visible";
		eh.src="images/"+ack[ck][3]+".png";
		eh.brightness=bn;
		eh.addShadow(scl,2,100,1,1);
	}
	clearTimeout(tm);
	cm=cs=-1;
	ud();
}
function oss() {
	System.Shell.execute("timedate.cpl");
}
