// http://svgcuts.com/blog/2016/10/11/free-jack-o-lantern-svg-file/
// ~Mary :)
// OCTOBER 11, 2016

var Moto = function(terrain)
{
	Vehicule.call(this, terrain);
	var instanceMoto = this;
	this.calques = 3;
	this.espace = 5;
	
	this.afficher = function(dessin)
	{	
	dessin.save();
	dessin.translate(instanceMoto.xPixel, instanceMoto.yPixel);
	dessin.scale(0.2,0.2);
	
	if(this.calculerCalque()==1)
	{
	// #layer2
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -18.322690, -6.541822);
	dessin.restore();
	
// #layer1
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -12.327638, -4.108537);
	
// #g2786-3
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -0.033582, 1.675549);
	
// #path27199-2
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(402.943550, 102.864930);
	dessin.lineTo(403.783950, 108.726670);
	dessin.lineTo(413.868770, 116.542300);
	dessin.lineTo(416.109840, 125.474460);
	dessin.lineTo(418.350910, 126.590980);
	dessin.lineTo(437.680150, 112.355350);
	dessin.bezierCurveTo(445.444460, 110.997590, 451.785000, 109.842500, 450.006040, 109.843170);
	dessin.lineTo(448.605370, 106.772750);
	dessin.lineTo(415.269440, 103.423190);
	dessin.fill();
	
// #path25431-9
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(237.356590, 27.577074);
	dessin.bezierCurveTo(237.356590, 27.577074, 238.941270, 23.234830, 243.299130, 21.261083);
	dessin.bezierCurveTo(247.656990, 19.287335, 279.746690, 11.392346, 282.916050, 11.392346);
	dessin.bezierCurveTo(286.085400, 11.392346, 324.117640, 9.813347, 324.117640, 9.813347);
	dessin.lineTo(324.909980, 17.708337);
	dessin.lineTo(269.842460, 20.471584);
	dessin.bezierCurveTo(269.842460, 20.471584, 261.522910, 22.445331, 258.353550, 23.234830);
	dessin.bezierCurveTo(255.184200, 24.024328, 248.845490, 28.761323, 248.845490, 28.761323);
	dessin.fill();
	
// #path24546-8
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(230.621710, 104.553220);
	dessin.lineTo(242.110620, 109.684970);
	dessin.lineTo(267.465440, 41.393306);
	dessin.lineTo(267.861610, 27.182325);
	dessin.lineTo(253.995690, 25.603327);
	dessin.lineTo(248.449330, 29.550822);
	dessin.fill();
	dessin.stroke();
	
// #path23663-9
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(170.800160, 128.632940);
	dessin.lineTo(141.087470, 202.451090);
	dessin.lineTo(159.311260, 206.793340);
	dessin.lineTo(184.666080, 138.896430);
	dessin.fill();
	
// #path8703-5
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(197, 48, 52)';
	dessin.moveTo(403.725450, 105.792320);
	dessin.bezierCurveTo(403.725450, 105.792320, 381.843770, 115.411410, 377.982290, 125.030500);
	dessin.bezierCurveTo(374.120820, 134.649580, 361.249240, 188.516460, 357.387770, 193.646650);
	dessin.bezierCurveTo(353.526300, 198.776830, 350.951990, 207.113370, 350.951990, 207.113370);
	dessin.bezierCurveTo(350.951990, 207.113370, 352.418080, 227.740470, 351.595570, 237.894450);
	dessin.bezierCurveTo(363.277360, 241.297390, 368.328610, 242.383350, 368.328610, 242.383350);
	dessin.bezierCurveTo(368.328610, 242.383350, 361.892820, 213.526090, 365.110720, 209.037180);
	dessin.bezierCurveTo(368.328610, 204.548280, 371.546510, 201.983180, 371.546510, 201.983180);
	dessin.bezierCurveTo(371.546510, 201.983180, 375.917350, 201.822140, 394.715340, 202.624460);
	dessin.bezierCurveTo(410.965710, 188.195830, 430.755750, 167.354470, 436.547960, 144.268670);
	dessin.bezierCurveTo(442.340170, 121.182860, 438.478700, 111.563780, 438.478700, 111.563780);
	dessin.bezierCurveTo(438.478700, 111.563780, 424.319970, 116.693960, 420.458500, 121.824130);
	dessin.bezierCurveTo(416.597020, 126.954310, 415.926750, 125.876660, 415.926750, 125.876660);
	dessin.bezierCurveTo(415.926750, 125.876660, 416.597020, 119.900310, 412.091970, 115.411410);
	dessin.bezierCurveTo(407.586920, 110.922500, 403.081860, 105.792320, 403.725450, 105.792320);
	dessin.fill();
	
// #path8623-8
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(125, 0, 0)';
	dessin.moveTo(134.258490, 120.159120);
	dessin.bezierCurveTo(134.258490, 120.159120, 160.133210, 113.161150, 167.525990, 115.739350);
	dessin.bezierCurveTo(174.918770, 118.317550, 203.380970, 130.840240, 207.447000, 134.891690);
	dessin.bezierCurveTo(211.513020, 138.943150, 233.321720, 160.305380, 235.539550, 167.303360);
	dessin.bezierCurveTo(237.757380, 174.301320, 245.889440, 220.708920, 245.889440, 220.708920);
	dessin.lineTo(242.932330, 222.918810);
	dessin.bezierCurveTo(242.932330, 222.918810, 222.887720, 218.512670, 221.123640, 217.394090);
	dessin.bezierCurveTo(217.057610, 214.815890, 210.034470, 197.873430, 210.404100, 191.243780);
	dessin.bezierCurveTo(210.773740, 184.614120, 199.314940, 163.251900, 195.988190, 159.200440);
	dessin.bezierCurveTo(192.661440, 155.148990, 174.918770, 131.576860, 164.199230, 126.788780);
	dessin.bezierCurveTo(153.479710, 122.000690, 134.997760, 120.895750, 134.258490, 120.159120);
	dessin.fill();
	
// #path5804-0
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(197, 48, 52)';
	dessin.moveTo(63.272287, 141.703580);
	dessin.bezierCurveTo(64.510687, 137.480620, 92.233331, 112.205050, 111.540690, 105.792320);
	dessin.bezierCurveTo(130.848060, 99.379596, 164.957730, 95.531963, 182.977930, 103.868500);
	dessin.bezierCurveTo(200.998140, 112.205050, 225.262730, 128.046140, 235.107810, 148.034060);
	dessin.bezierCurveTo(243.345540, 164.770690, 247.705450, 193.265220, 247.335810, 205.189550);
	dessin.bezierCurveTo(247.048780, 214.162810, 245.405070, 223.786450, 245.405070, 223.786450);
	dessin.bezierCurveTo(245.405070, 223.786450, 240.543540, 217.656210, 236.394970, 190.440280);
	dessin.bezierCurveTo(235.199580, 182.598130, 233.660970, 164.549660, 216.526570, 145.741930);
	dessin.bezierCurveTo(198.858880, 126.348820, 170.367460, 116.020470, 160.726620, 116.516350);
	dessin.bezierCurveTo(139.244500, 117.621290, 118.620060, 125.671770, 107.679220, 130.801940);
	dessin.bezierCurveTo(96.738383, 135.932120, 72.843427, 149.481090, 67.038061, 146.916010);
	dessin.bezierCurveTo(63.270912, 145.251510, 62.133741, 145.586040, 63.272287, 141.703580);
	dessin.fill();
	
// #path8699-5
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(52, 48, 52)';
	dessin.moveTo(281.212260, 87.445970);
	dessin.bezierCurveTo(281.212260, 87.445970, 286.040650, 95.693555, 286.040650, 101.879250);
	dessin.bezierCurveTo(286.040650, 108.064930, 286.040650, 115.625220, 286.040650, 115.625220);
	dessin.bezierCurveTo(286.040650, 115.625220, 290.869050, 105.315740, 295.007670, 106.003040);
	dessin.bezierCurveTo(299.146290, 106.690330, 300.525830, 104.628440, 308.113310, 112.188730);
	dessin.bezierCurveTo(315.700780, 119.749010, 337.564310, 135.295920, 336.205210, 137.785210);
	dessin.bezierCurveTo(333.424440, 142.878330, 327.426890, 142.762720, 327.426890, 142.762720);
	dessin.bezierCurveTo(327.426890, 142.762720, 316.390560, 136.244180, 312.941700, 134.182280);
	dessin.bezierCurveTo(309.492850, 132.120390, 305.354230, 131.433090, 305.354230, 131.433090);
	dessin.lineTo(327.426890, 156.175850);
	dessin.bezierCurveTo(327.426890, 156.175850, 349.310840, 196.654060, 349.310840, 203.527050);
	dessin.bezierCurveTo(349.310840, 210.400040, 352.614350, 213.576090, 358.132520, 204.641220);
	dessin.bezierCurveTo(363.650690, 195.706330, 372.951750, 155.488550, 375.021060, 143.117170);
	dessin.bezierCurveTo(377.090370, 130.745790, 383.654040, 122.686230, 394.000590, 115.813250);
	dessin.bezierCurveTo(404.347150, 108.940250, 408.819830, 103.941140, 402.611890, 101.879250);
	dessin.bezierCurveTo(396.403960, 99.817351, 373.641520, 101.191950, 373.641520, 101.191950);
	dessin.bezierCurveTo(373.641520, 101.191950, 333.373450, 110.886540, 325.096200, 109.511950);
	dessin.bezierCurveTo(316.818960, 108.137340, 296.220190, 93.704068, 293.461110, 90.267575);
	dessin.bezierCurveTo(290.702030, 86.831081, 282.591800, 86.758671, 281.212260, 87.445970);
	dessin.fill();
	
// #path8705-0
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(197, 48, 52)';
	dessin.moveTo(173.289110, 101.077070);
	dessin.lineTo(190.847810, 40.813863);
	dessin.bezierCurveTo(190.847810, 40.813863, 210.357460, 29.636010, 222.550990, 29.150017);
	dessin.bezierCurveTo(234.744540, 28.664023, 250.840000, 29.636010, 252.790970, 32.551972);
	dessin.bezierCurveTo(254.741940, 35.467934, 257.180640, 36.925914, 255.229680, 42.271844);
	dessin.bezierCurveTo(253.278720, 47.617774, 228.891640, 110.796950, 228.891640, 110.796950);
	dessin.lineTo(224.989700, 115.170890);
	dessin.lineTo(198.651670, 111.282940);
	dessin.fill();
	dessin.stroke();
	
// #path8707-9
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(210, 48, 52)';
	dessin.moveTo(268.075950, 26.421047);
	dessin.bezierCurveTo(265.088440, 30.585621, 264.728710, 29.395629, 260.806840, 31.897864);
	dessin.bezierCurveTo(259.168630, 34.443224, 257.582170, 39.974625, 260.933800, 43.251919);
	dessin.bezierCurveTo(262.369130, 44.655412, 269.809340, 41.434454, 269.809340, 41.434454);
	dessin.bezierCurveTo(269.809340, 41.434454, 281.567720, 28.178030, 288.396100, 22.832100);
	dessin.bezierCurveTo(296.905290, 20.835730, 310.417000, 19.906202, 310.417000, 19.906202);
	dessin.bezierCurveTo(310.417000, 19.906202, 306.112030, 18.949141, 305.954790, 16.028189);
	dessin.bezierCurveTo(305.692790, 11.160801, 309.368980, 8.252291, 309.368980, 8.252291);
	dessin.bezierCurveTo(309.368980, 8.252291, 296.280640, 6.077739, 285.957390, 10.619928);
	dessin.bezierCurveTo(275.634130, 15.162117, 273.882760, 18.326379, 268.075950, 26.421047);
	dessin.fill();
	
// #path9582-9
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(224, 47, 44)';
	dessin.moveTo(328.806430, 7.375662);
	dessin.bezierCurveTo(328.806430, 7.375662, 327.426890, 3.595518, 325.702470, 3.595518);
	dessin.bezierCurveTo(323.978040, 3.595518, 322.598500, 11.499454, 322.598500, 14.248649);
	dessin.bezierCurveTo(322.598500, 16.997845, 324.322930, 23.527183, 327.082010, 23.527183);
	dessin.bezierCurveTo(329.841090, 23.527183, 329.841090, 20.090689, 331.565520, 19.747040);
	dessin.bezierCurveTo(333.289940, 19.403390, 357.431910, 16.654195, 359.156340, 16.310546);
	dessin.bezierCurveTo(360.880760, 15.966897, 364.674500, 13.905000, 363.984730, 12.530403);
	dessin.bezierCurveTo(363.294960, 11.155805, 360.535880, 5.657415, 360.535880, 5.657415);
	dessin.fill();
	dessin.stroke();
	
// #path10457-1
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(188, 37, 38)';
	dessin.moveTo(186.713680, 19.403390);
	dessin.bezierCurveTo(186.713680, 19.403390, 183.954600, 17.341494, 182.230170, 17.341494);
	dessin.bezierCurveTo(180.505740, 17.341494, 177.401780, 19.403390, 177.401780, 19.403390);
	dessin.lineTo(162.916590, 20.777988);
	dessin.bezierCurveTo(162.916590, 20.777988, 160.847280, 18.372443, 159.467740, 18.372443);
	dessin.bezierCurveTo(158.088200, 18.372443, 154.294460, 21.808936, 154.294460, 23.527183);
	dessin.bezierCurveTo(154.294460, 25.245430, 156.708660, 32.805716, 158.088200, 32.805716);
	dessin.bezierCurveTo(159.467740, 32.805716, 163.606370, 30.743820, 163.606370, 30.743820);
	dessin.lineTo(177.056890, 29.712872);
	dessin.bezierCurveTo(177.056890, 29.712872, 178.436430, 32.805716, 179.815970, 32.805716);
	dessin.bezierCurveTo(181.195510, 32.805716, 184.989250, 32.805716, 186.368790, 31.087470);
	dessin.bezierCurveTo(187.748330, 29.369223, 184.644370, 28.681924, 184.644370, 28.681924);
	dessin.bezierCurveTo(184.644370, 28.681924, 181.195510, 27.994625, 180.850630, 25.932729);
	dessin.bezierCurveTo(180.505740, 23.870833, 181.885280, 21.808936, 183.264830, 21.465287);
	dessin.bezierCurveTo(184.644370, 21.121638, 187.403450, 19.747040, 186.713680, 19.403390);
	dessin.fill();
	dessin.stroke();
	
// #path11334-5
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.fillStyle = 'rgb(155, 37, 38)';
	dessin.moveTo(363.294930, 10.124870);
	dessin.bezierCurveTo(363.294940, 13.095653, 361.962800, 15.529232, 360.286530, 15.620697);
	dessin.bezierCurveTo(358.610240, 15.712157, 357.196080, 13.428432, 357.092880, 10.463280);
	dessin.bezierCurveTo(356.989670, 7.498128, 358.234750, 4.923958, 359.904670, 4.649954);
	dessin.bezierCurveTo(361.574600, 4.375949, 363.065410, 6.501208, 363.271420, 9.449492);
	dessin.fill();
	
// #path11336-2
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(175, 14, 12)';
	dessin.moveTo(247.168640, 210.664600);
	dessin.bezierCurveTo(262.653140, 211.527280, 280.137940, 214.268320, 283.534770, 213.422160);
	dessin.bezierCurveTo(286.931590, 212.575990, 292.176620, 209.818430, 293.025830, 205.587610);
	dessin.bezierCurveTo(293.875040, 201.356790, 286.971450, 198.191200, 286.971450, 198.191200);
	dessin.lineTo(265.331780, 145.141660);
	dessin.bezierCurveTo(265.331780, 145.141660, 261.605160, 145.509970, 261.605160, 142.125310);
	dessin.bezierCurveTo(261.605160, 138.740650, 266.700410, 131.125180, 269.248030, 126.894360);
	dessin.bezierCurveTo(271.795650, 122.663540, 272.644850, 118.432720, 272.644850, 118.432720);
	dessin.bezierCurveTo(272.644850, 118.432720, 257.359130, 115.048060, 253.113080, 115.048060);
	dessin.bezierCurveTo(248.867050, 115.048060, 239.525770, 119.278880, 239.525770, 119.278880);
	dessin.lineTo(242.922600, 110.817240);
	dessin.lineTo(231.882910, 104.047920);
	dessin.lineTo(225.089250, 115.894220);
	dessin.lineTo(198.983680, 111.882470);
	dessin.lineTo(217.446390, 126.894360);
	dessin.lineTo(221.692420, 119.278880);
	dessin.bezierCurveTo(221.692420, 119.278880, 229.555140, 121.488760, 233.801180, 124.873420);
	dessin.bezierCurveTo(238.047210, 128.258080, 234.430530, 128.586680, 234.430530, 128.586680);
	dessin.lineTo(228.336300, 139.696350);
	dessin.bezierCurveTo(228.336300, 139.696350, 242.073400, 157.356260, 242.073400, 166.664070);
	dessin.bezierCurveTo(242.073400, 175.971870, 247.240290, 185.583040, 247.168640, 210.664600);
	dessin.fill();
	
// #path13090-0
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 48, 0)';
	dessin.moveTo(166.120750, 99.619543);
	dessin.bezierCurveTo(143.330790, 98.059727, 123.110600, 100.750950, 103.864520, 110.203430);
	dessin.bezierCurveTo(93.732996, 115.270760, 82.708982, 122.836880, 74.513334, 130.529940);
	dessin.bezierCurveTo(69.777340, 135.162500, 61.603527, 141.200470, 63.994716, 145.583630);
	dessin.bezierCurveTo(70.927518, 144.223790, 73.146026, 139.136480, 80.924700, 132.368750);
	dessin.bezierCurveTo(94.308579, 120.724270, 109.342440, 110.836360, 127.386860, 108.605750);
	dessin.bezierCurveTo(139.090890, 106.497900, 148.507860, 106.264360, 162.913900, 107.024190);
	dessin.bezierCurveTo(166.205940, 107.197820, 176.152090, 107.641150, 177.337140, 104.362110);
	dessin.bezierCurveTo(175.874430, 103.772180, 167.633780, 99.469557, 166.120750, 99.619543);
	dessin.fill();
	
// #path13969-9
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(224.435740, 30.211534);
	dessin.bezierCurveTo(215.217350, 30.730105, 204.719020, 32.086620, 196.787710, 37.658910);
	dessin.bezierCurveTo(192.724420, 40.904061, 188.278950, 46.510737, 187.936110, 52.078727);
	dessin.bezierCurveTo(186.335620, 56.039048, 184.373860, 60.123746, 183.529710, 64.451228);
	dessin.bezierCurveTo(182.486930, 69.712975, 179.768200, 74.487740, 179.239010, 79.863263);
	dessin.bezierCurveTo(178.578290, 84.927923, 177.767430, 90.121022, 175.030000, 94.543713);
	dessin.bezierCurveTo(172.648050, 98.892770, 177.125800, 104.764230, 181.826160, 101.939520);
	dessin.bezierCurveTo(187.313570, 99.328804, 188.385690, 92.645815, 189.392450, 87.292258);
	dessin.bezierCurveTo(190.974470, 79.367981, 197.478820, 58.100347, 197.507350, 54.888693);
	dessin.bezierCurveTo(199.317240, 50.890413, 201.203780, 44.971579, 207.163360, 42.681077);
	dessin.bezierCurveTo(215.618660, 39.431375, 226.351650, 39.630216, 235.681800, 42.381166);
	dessin.bezierCurveTo(240.194840, 44.139078, 236.916390, 51.157110, 242.034180, 51.907389);
	dessin.bezierCurveTo(248.088600, 52.522904, 251.777640, 44.990089, 249.293560, 39.996498);
	dessin.bezierCurveTo(246.729340, 35.216212, 244.729310, 34.548319, 237.357410, 31.308119);
	dessin.bezierCurveTo(232.131070, 29.473094, 228.277930, 30.514990, 224.435740, 30.211534);
	dessin.fill();
	
// #path14848-7
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(174.582760, 22.832641);
	dessin.bezierCurveTo(172.692210, 22.641798, 170.812340, 22.990791, 168.938130, 23.165520);
	dessin.bezierCurveTo(166.312030, 23.299296, 163.676220, 23.121350, 161.053870, 23.234210);
	dessin.bezierCurveTo(159.998690, 23.172260, 159.360950, 22.195126, 158.367580, 21.970012);
	dessin.bezierCurveTo(157.235940, 21.666538, 158.956830, 21.094391, 159.251420, 20.681564);
	dessin.bezierCurveTo(159.903080, 20.193750, 160.562820, 19.709976, 161.283150, 19.326132);
	dessin.bezierCurveTo(161.156340, 20.251357, 160.418300, 20.952766, 160.220610, 21.864458);
	dessin.bezierCurveTo(159.865850, 22.923115, 159.783380, 24.043268, 159.645780, 25.143763);
	dessin.bezierCurveTo(158.239900, 25.926076, 156.834010, 26.708391, 155.428140, 27.490701);
	dessin.bezierCurveTo(155.647570, 25.694406, 155.703570, 23.782750, 156.613990, 22.168506);
	dessin.bezierCurveTo(157.569490, 20.539750, 159.323330, 19.683367, 160.857950, 18.709574);
	dessin.bezierCurveTo(161.940260, 18.123785, 162.719930, 19.295168, 163.560630, 19.757088);
	dessin.bezierCurveTo(164.417000, 20.349619, 165.474140, 20.027817, 166.438680, 20.101765);
	dessin.bezierCurveTo(168.646810, 20.086075, 170.865380, 20.211198, 173.065960, 19.999530);
	dessin.bezierCurveTo(174.415090, 19.788704, 175.777550, 19.699008, 177.141560, 19.700505);
	dessin.bezierCurveTo(177.657520, 19.618315, 178.840610, 19.636605, 177.867860, 20.166554);
	dessin.bezierCurveTo(176.772830, 21.055251, 175.677800, 21.943952, 174.582760, 22.832645);
	dessin.fill();
	
// #path15725-4
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(307.927180, 8.443536);
	dessin.bezierCurveTo(305.547840, 10.356317, 302.557680, 11.645239, 299.450520, 11.347268);
	dessin.bezierCurveTo(295.537330, 10.987850, 291.304470, 11.718090, 287.432020, 12.649593);
	dessin.bezierCurveTo(281.852510, 13.489175, 277.936700, 18.629170, 275.509450, 21.844776);
	dessin.bezierCurveTo(272.625170, 23.937526, 270.665250, 28.328560, 268.052910, 30.755240);
	dessin.bezierCurveTo(264.646120, 34.205837, 261.098670, 33.789066, 259.691200, 34.241100);
	dessin.bezierCurveTo(260.253360, 33.189428, 262.023020, 31.426177, 260.980620, 31.832509);
	dessin.bezierCurveTo(263.583040, 30.281262, 264.803410, 27.965354, 267.291390, 26.258757);
	dessin.bezierCurveTo(269.850650, 24.294810, 272.732930, 22.552449, 274.396390, 19.690332);
	dessin.bezierCurveTo(275.639530, 17.868513, 277.524020, 16.627269, 278.750190, 14.786007);
	dessin.bezierCurveTo(279.917050, 12.902211, 282.072460, 12.110254, 283.847010, 10.917623);
	dessin.bezierCurveTo(286.150570, 9.447101, 288.037220, 9.607812, 290.725410, 9.277949);
	dessin.bezierCurveTo(297.026580, 8.886116, 297.599220, 8.833065, 302.553940, 8.210441);
	dessin.bezierCurveTo(303.935680, 8.432031, 306.293100, 7.501046, 307.109760, 8.306721);
	dessin.bezierCurveTo(306.177840, 9.118455, 306.374660, 9.084302, 307.927180, 8.443536);
	dessin.fill();
	
// #path16601-0
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(356.133950, 7.968336);
	dessin.bezierCurveTo(353.513670, 8.263989, 350.871830, 8.062132, 348.255160, 8.360785);
	dessin.bezierCurveTo(346.167930, 8.360686, 344.080290, 8.515702, 342.064170, 9.114042);
	dessin.bezierCurveTo(337.596350, 10.366494, 322.903190, 6.353622, 323.773260, 4.613286);
	dessin.bezierCurveTo(323.636430, 3.261947, 326.013760, 3.597641, 327.605600, 5.341602);
	dessin.bezierCurveTo(328.822550, 6.804383, 353.410650, 9.499133, 326.382570, 9.913513);
	dessin.bezierCurveTo(325.046950, 12.734789, 324.850360, 14.549135, 325.558710, 17.433861);
	dessin.bezierCurveTo(325.648110, 18.634762, 327.283830, 20.324835, 327.960680, 22.462659);
	dessin.bezierCurveTo(327.024750, 23.100421, 325.576050, 23.848704, 325.036460, 22.317078);
	dessin.bezierCurveTo(323.973930, 20.922149, 323.507430, 19.171805, 323.455000, 17.413291);
	dessin.bezierCurveTo(323.218210, 14.688375, 322.848140, 12.069853, 323.173310, 9.379877);
	dessin.bezierCurveTo(322.288830, 5.741394, 325.187530, 4.700502, 327.387380, 3.982464);
	dessin.bezierCurveTo(329.183550, 4.471208, 327.800860, 7.738563, 330.061460, 8.048887);
	dessin.bezierCurveTo(331.482290, 8.463275, 332.979170, 7.235483, 334.434740, 7.372632);
	dessin.bezierCurveTo(337.971250, 7.437048, 340.953540, 6.977193, 344.714750, 6.700899);
	dessin.bezierCurveTo(346.520680, 6.221055, 348.646060, 6.631546, 350.491610, 6.559070);
	dessin.bezierCurveTo(352.872010, 6.279720, 355.275570, 6.564040, 357.647630, 6.202396);
	dessin.bezierCurveTo(359.241470, 6.113240, 356.729040, 7.331569, 356.274930, 7.861597);
	dessin.fill();
	
// #path18376-1
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(221, 0, 0)';
	dessin.moveTo(180.929760, 103.385120);
	dessin.bezierCurveTo(185.098650, 105.113300, 189.053110, 107.534720, 192.926050, 109.980760);
	dessin.bezierCurveTo(196.559960, 112.008860, 200.516100, 113.007110, 204.454460, 114.112960);
	dessin.bezierCurveTo(209.523390, 115.859050, 212.709810, 120.440360, 216.749990, 123.525470);
	dessin.bezierCurveTo(219.612050, 127.115190, 224.223370, 129.000780, 226.514930, 133.150400);
	dessin.bezierCurveTo(229.319730, 137.363090, 231.909260, 142.631260, 233.215550, 147.676640);
	dessin.bezierCurveTo(235.437350, 152.600720, 236.609530, 156.637430, 239.284190, 161.421860);
	dessin.bezierCurveTo(241.392070, 165.620760, 244.945350, 183.855820, 247.109600, 188.053690);
	dessin.bezierCurveTo(249.139190, 193.937710, 244.344550, 221.177080, 245.712810, 217.384680);
	dessin.bezierCurveTo(245.414190, 211.791540, 240.266790, 186.543290, 239.260740, 179.914880);
	dessin.bezierCurveTo(237.343010, 175.502570, 235.777770, 162.311230, 231.171750, 152.330530);
	dessin.bezierCurveTo(223.742700, 142.318770, 218.461530, 131.148260, 214.386100, 128.527120);
	dessin.bezierCurveTo(210.784780, 125.068100, 207.318220, 121.419390, 203.177840, 118.516190);
	dessin.bezierCurveTo(199.485680, 116.028300, 182.382360, 108.213570, 177.224400, 106.929730);
	dessin.bezierCurveTo(176.209100, 105.851240, 179.692670, 104.713050, 180.620830, 103.608770);
	dessin.lineTo(180.843530, 103.447550);
	dessin.fill();
	
// #path18379-0
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(238, 0, 0)';
	dessin.moveTo(430.520830, 115.048140);
	dessin.bezierCurveTo(425.420880, 119.031470, 422.107900, 122.217430, 417.424950, 126.723510);
	dessin.bezierCurveTo(411.715460, 117.875140, 407.071830, 114.487300, 401.387370, 116.152870);
	dessin.bezierCurveTo(391.111380, 117.739320, 381.697250, 129.180660, 378.636750, 138.579130);
	dessin.bezierCurveTo(372.364290, 150.931920, 373.087760, 169.827620, 367.647630, 182.509930);
	dessin.bezierCurveTo(365.638740, 190.017360, 361.161840, 200.117390, 358.507010, 207.399450);
	dessin.bezierCurveTo(363.494070, 204.736790, 369.500300, 198.576460, 371.691070, 192.605220);
	dessin.bezierCurveTo(376.088160, 179.167600, 381.311960, 165.994160, 385.470670, 152.470770);
	dessin.bezierCurveTo(389.146460, 145.108150, 390.947210, 136.714380, 396.293810, 130.256840);
	dessin.bezierCurveTo(401.431090, 130.838720, 410.392450, 136.613310, 415.945980, 135.096990);
	dessin.bezierCurveTo(426.032570, 131.915770, 427.268320, 123.458370, 436.527750, 118.777140);
	dessin.bezierCurveTo(441.550780, 115.949460, 436.578950, 112.175020, 433.067540, 113.510600);
	dessin.bezierCurveTo(432.188730, 113.972220, 431.353530, 114.509960, 430.520830, 115.048140);
	dessin.fill();
	
// #path19258-3
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(135.363380, 105.947500);
	dessin.bezierCurveTo(135.363380, 112.289060, 119.441170, 124.494460, 99.405751, 133.511330);
	dessin.bezierCurveTo(79.370337, 142.528200, 62.467922, 145.095410, 61.234507, 139.308940);
	dessin.bezierCurveTo(60.001092, 133.522470, 74.882766, 121.475110, 94.842249, 112.102020);
	dessin.bezierCurveTo(114.801730, 102.728930, 132.620290, 99.420060, 135.082440, 104.629510);
	dessin.fill();
	
// #path20145-8
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(401.059420, 130.937810);
	dessin.bezierCurveTo(406.429010, 131.674390, 407.030740, 142.810720, 402.418330, 156.087340);
	dessin.bezierCurveTo(397.805930, 169.363960, 389.647550, 179.979100, 383.994010, 180.059860);
	dessin.bezierCurveTo(378.340480, 180.140660, 377.236500, 169.657760, 381.500860, 156.386110);
	dessin.bezierCurveTo(385.765230, 143.114470, 393.855640, 131.853980, 399.771700, 130.956200);
	dessin.fill();
	
// #path21022-6
	dessin.beginPath();
	dessin.globalAlpha = 0.9;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(277.677140, 21.879876);
	dessin.bezierCurveTo(277.677140, 24.734469, 274.125060, 30.228604, 269.655370, 34.287451);
	dessin.bezierCurveTo(265.185680, 38.346299, 261.414930, 39.501897, 261.139770, 36.897175);
	dessin.bezierCurveTo(260.864610, 34.292452, 264.184550, 28.869457, 268.637300, 24.650259);
	dessin.bezierCurveTo(273.090050, 20.431060, 277.065190, 18.941613, 277.614470, 21.286594);
	dessin.fill();
	
// #path21026-4
	dessin.beginPath();
	dessin.globalAlpha = 0.7;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(307.680050, 11.799838);
	dessin.bezierCurveTo(305.935840, 14.064384, 299.760940, 16.268012, 293.735080, 16.776359);
	dessin.bezierCurveTo(287.709230, 17.284706, 284.011790, 15.913918, 285.385040, 13.680667);
	dessin.bezierCurveTo(286.758300, 11.447416, 292.705580, 9.159400, 298.815970, 8.513570);
	dessin.bezierCurveTo(304.926360, 7.867740, 308.989930, 9.097673, 307.992840, 11.291166);
	dessin.fill();
	
// #path21903-4
	dessin.beginPath();
	dessin.globalAlpha = 0.1;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(399.574690, 102.955850);
	dessin.bezierCurveTo(399.574690, 109.297410, 383.652480, 121.502810, 363.617060, 130.519680);
	dessin.bezierCurveTo(343.581650, 139.536550, 326.679230, 142.103760, 325.445820, 136.317290);
	dessin.bezierCurveTo(324.212400, 130.530820, 339.094080, 118.483460, 359.053560, 109.110370);
	dessin.bezierCurveTo(379.013040, 99.737276, 396.831600, 96.428410, 399.293750, 101.637860);
	dessin.fill();
	
// #path22782-5
	dessin.beginPath();
	dessin.globalAlpha = 0.2;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(380.624380, 120.791020);
	dessin.bezierCurveTo(378.623350, 126.810980, 359.657270, 133.409220, 337.792710, 135.692030);
	dessin.bezierCurveTo(315.928140, 137.974830, 299.072830, 135.116580, 299.727840, 129.237140);
	dessin.bezierCurveTo(300.382850, 123.357710, 318.311280, 116.583510, 340.216170, 113.938760);
	dessin.bezierCurveTo(362.121060, 111.294010, 380.080080, 113.735230, 380.773570, 119.451850);
	dessin.fill();
	
// #path22786-1
	dessin.beginPath();
	dessin.globalAlpha = 0.3;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(354.173560, 111.742910);
	dessin.bezierCurveTo(367.980460, 110.361360, 369.586490, 121.448240, 357.800490, 136.780750);
	dessin.bezierCurveTo(346.014490, 152.113250, 325.099100, 166.146090, 310.566630, 168.471540);
	dessin.bezierCurveTo(296.034150, 170.796980, 293.140540, 160.573990, 304.031900, 145.384640);
	dessin.bezierCurveTo(314.923250, 130.195290, 335.660500, 115.533100, 350.863470, 112.272580);
	dessin.fill();
	
// #path26316-9
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(215.567280, 31.524569);
	dessin.bezierCurveTo(215.567280, 31.524569, 216.359620, 25.998076, 213.586440, 24.419079);
	dessin.bezierCurveTo(210.813250, 22.840080, 202.493700, 18.892585, 193.777970, 19.287335);
	dessin.bezierCurveTo(185.062250, 19.682084, 180.704390, 23.629579, 180.704390, 23.629579);
	dessin.lineTo(183.081410, 28.761323);
	dessin.bezierCurveTo(183.081410, 28.761323, 188.231600, 27.971823, 192.589460, 29.550822);
	dessin.bezierCurveTo(196.947330, 31.129819, 198.532010, 32.314068, 200.909020, 33.498317);
	dessin.bezierCurveTo(203.286040, 34.682565, 215.171110, 31.524569, 215.567280, 31.524569);
	dessin.fill();
	
// #path2601-9
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.996375;
	dessin.moveTo(269.484460, 114.309740);
	dessin.lineTo(280.861430, 85.499106);
	dessin.lineTo(280.406350, 76.945947);
	dessin.lineTo(272.214940, 71.543953);
	dessin.lineTo(272.670010, 66.592123);
	dessin.lineTo(270.394620, 58.952425);
	dessin.lineTo(263.568430, 53.087138);
	dessin.bezierCurveTo(263.568430, 53.087138, 257.197330, 67.942623, 255.377020, 71.994120);
	dessin.bezierCurveTo(253.556700, 76.045615, 251.281310, 83.698441, 251.281310, 83.698441);
	dessin.lineTo(246.275430, 99.004096);
	dessin.fill();
	
// #path1702-2
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(219.569400, 236.472600);
	dessin.lineTo(293.875040, 247.049650);
	dessin.lineTo(294.724240, 271.588410);
	dessin.lineTo(271.371040, 278.780800);
	dessin.lineTo(228.910680, 262.703690);
	dessin.lineTo(218.720190, 249.588140);
	dessin.fill();
	dessin.stroke();
	
// #path2585-0
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(55, 57, 54)';
	dessin.moveTo(245.585380, 222.918240);
	dessin.lineTo(247.086580, 219.328270);
	dessin.lineTo(251.289940, 219.328270);
	dessin.lineTo(269.604580, 242.962240);
	dessin.bezierCurveTo(269.604580, 242.962240, 268.703870, 265.100390, 269.604580, 267.493700);
	dessin.bezierCurveTo(270.505310, 269.887010, 273.507710, 282.152750, 273.507710, 282.152750);
	dessin.bezierCurveTo(273.507710, 282.152750, 264.800740, 260.014600, 264.800740, 256.424630);
	dessin.bezierCurveTo(264.800740, 252.834650, 263.900030, 245.953880, 263.900030, 245.953880);
	dessin.fill();
	dessin.stroke();
	
// #path2589-5
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(235.977700, 222.319910);
	dessin.lineTo(245.885620, 222.918240);
	dessin.lineTo(264.200260, 245.654720);
	dessin.bezierCurveTo(264.200260, 245.654720, 264.200260, 268.391190, 269.604580, 275.870300);
	dessin.bezierCurveTo(275.008910, 283.349400, 285.217070, 290.230180, 285.217070, 290.230180);
	dessin.lineTo(241.081780, 281.255260);
	dessin.bezierCurveTo(241.081780, 281.255260, 232.074580, 267.792860, 231.173860, 263.903730);
	dessin.bezierCurveTo(230.273130, 260.014600, 226.670250, 242.663070, 226.670250, 242.663070);
	dessin.fill();
	dessin.stroke();
	
// #path30950-4
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.fillStyle = 'rgb(48, 50, 50)';
	dessin.moveTo(367.301590, 203.148810);
	dessin.bezierCurveTo(362.614090, 217.901180, 363.124040, 223.485370, 368.836630, 242.491320);
	dessin.bezierCurveTo(343.313010, 225.741660, 334.602970, 252.010740, 332.972840, 275.811180);
	dessin.bezierCurveTo(335.707030, 348.840350, 355.737410, 359.067030, 389.533050, 359.490120);
	dessin.bezierCurveTo(424.751840, 359.942400, 445.120320, 317.400400, 447.208470, 273.450920);
	dessin.lineTo(447.062100, 246.342220);
	dessin.bezierCurveTo(445.068500, 222.906680, 437.523820, 200.959270, 425.445850, 194.934770);
	dessin.bezierCurveTo(403.381830, 183.929220, 409.038700, 189.461530, 396.067390, 201.292420);
	dessin.bezierCurveTo(386.158130, 201.820850, 367.943620, 203.148670, 367.301590, 203.148810);
	dessin.moveTo(398.157000, 217.090440);
	dessin.bezierCurveTo(410.023750, 216.742800, 418.454900, 214.943760, 423.898170, 231.763250);
	dessin.lineTo(425.702150, 238.415300);
	dessin.bezierCurveTo(432.608870, 269.523710, 422.926400, 308.159440, 401.861270, 326.847110);
	dessin.bezierCurveTo(383.210560, 343.392820, 370.087100, 319.181760, 367.755550, 306.284170);
	dessin.bezierCurveTo(361.880420, 273.784320, 364.726290, 258.859930, 381.720260, 229.319680);
	dessin.bezierCurveTo(386.357240, 221.259330, 391.500040, 217.285470, 398.157000, 217.090440);
	dessin.fill();
	
// #path30064-5
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.fillStyle = 'rgb(48, 50, 50)';
	dessin.moveTo(108.674850, 195.572640);
	dessin.bezierCurveTo(62.034318, 195.580640, 14.113926, 247.370630, 8.429756, 312.449240);
	dessin.bezierCurveTo(0.970432, 398.337760, 45.632741, 439.126980, 107.040590, 439.126990);
	dessin.bezierCurveTo(168.448430, 439.126990, 209.565400, 382.459820, 213.206030, 322.373300);
	dessin.lineTo(215.888690, 291.710090);
	dessin.bezierCurveTo(208.937170, 227.629230, 170.201000, 198.785760, 112.035880, 195.664820);
	dessin.bezierCurveTo(110.918570, 195.604820, 109.794220, 195.572420, 108.674850, 195.572620);
	dessin.moveTo(123.198210, 230.414400);
	dessin.bezierCurveTo(143.887480, 229.939110, 163.075140, 242.383900, 172.565290, 265.379060);
	dessin.lineTo(175.710480, 274.473560);
	dessin.bezierCurveTo(187.752120, 317.004130, 170.871050, 369.825830, 134.144690, 395.375080);
	dessin.bezierCurveTo(101.627830, 417.995940, 69.205624, 403.869420, 55.607545, 367.262020);
	dessin.bezierCurveTo(40.280517, 326.000100, 54.814374, 280.506660, 86.686902, 248.887340);
	dessin.bezierCurveTo(96.745397, 238.908750, 111.592020, 230.681040, 123.198210, 230.414400);
	dessin.fill();
	
// #line1424-9
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(114.895660, 405.605650);
	dessin.lineTo(114.868030, 405.553530);
	dessin.stroke();
	
// #line1490-2
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.moveTo(160.261340, 432.040650);
	dessin.lineTo(160.237660, 432.034760);
	dessin.stroke();
	
// #line1540-4
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(159.413730, 354.698060);
	dessin.lineTo(159.320980, 355.013700);
	dessin.stroke();
	
// #path1558-9
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(165.763310, 347.477540);
	dessin.lineTo(165.670610, 347.793150);
	dessin.moveTo(172.113920, 340.257000);
	dessin.lineTo(172.021220, 340.572610);
	dessin.stroke();
	
// #line1598-8
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(159.347640, 355.064820);
	dessin.lineTo(159.320980, 355.013700);
	dessin.stroke();
	
// #path1602-2
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(184.814010, 325.817890);
	dessin.lineTo(184.814010, 325.817890);
	dessin.lineTo(184.722210, 326.133490);
	dessin.moveTo(191.165520, 318.598330);
	dessin.lineTo(191.165520, 318.598330);
	dessin.lineTo(191.072820, 318.912950);
	dessin.stroke();
	
// #line1630-9
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(165.698180, 347.844270);
	dessin.lineTo(165.670560, 347.793150);
	dessin.stroke();
	
// #line1652-4
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(172.048750, 340.624690);
	dessin.lineTo(172.021120, 340.572630);
	dessin.stroke();
	
// #line1702-6
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(184.748890, 326.184630);
	dessin.lineTo(184.722240, 326.133510);
	dessin.stroke();
	
// #polyline1776-4
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.moveTo(66.923000, 434.092000);
	dessin.lineTo(66.923000, 434.092000);
	dessin.lineTo(66.387000, 434.227000);
	dessin.stroke();
	dessin.restore();
	
// #polyline1778-4
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.moveTo(67.109000, 434.092000);
	dessin.lineTo(67.109000, 434.092000);
	dessin.lineTo(66.573000, 434.226000);
	dessin.stroke();
	dessin.restore();
	
// #path1782-2
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.moveTo(72.623379, 429.200210);
	dessin.lineTo(72.623379, 429.200210);
	dessin.lineTo(72.366831, 429.264110);
	dessin.moveTo(72.781255, 429.236610);
	dessin.lineTo(72.781255, 429.236610);
	dessin.lineTo(72.525694, 429.299510);
	dessin.stroke();
	
// #path2026-3
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(251.098250, 272.780740);
	dessin.lineTo(251.050850, 272.773740);
	dessin.bezierCurveTo(251.022250, 272.772770, 250.991650, 272.778740, 250.962050, 272.784540);
	dessin.stroke();
	
// #path2150-5
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(71.499500, 429.362440);
	dessin.lineTo(71.578440, 429.350640);
	dessin.bezierCurveTo(71.612970, 429.348640, 71.648500, 429.354640, 71.684019, 429.360640);
	dessin.stroke();
	
// #path2262-9
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(71.541929, 428.040040);
	dessin.bezierCurveTo(71.482729, 427.999740, 71.424508, 427.959440, 71.363332, 427.923050);
	dessin.bezierCurveTo(71.313012, 427.892550, 71.260712, 427.865050, 71.208416, 427.837550);
	dessin.moveTo(71.542915, 428.040070);
	dessin.bezierCurveTo(71.512325, 428.006670, 71.480755, 427.973270, 71.440296, 427.950570);
	dessin.lineTo(71.421546, 427.940570);
	dessin.stroke();
	
// #path2302-7
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(185.681340, 324.832740);
	dessin.bezierCurveTo(185.721840, 324.818040, 185.762240, 324.803240, 185.802710, 324.789440);
	dessin.bezierCurveTo(185.844110, 324.773740, 185.884610, 324.759940, 185.927040, 324.745140);
	dessin.bezierCurveTo(185.969440, 324.729440, 186.012840, 324.714640, 186.055310, 324.698940);
	dessin.stroke();
	
// #path2310-9
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(172.981210, 339.271840);
	dessin.bezierCurveTo(173.021610, 339.257140, 173.061110, 339.243340, 173.101590, 339.228540);
	dessin.bezierCurveTo(173.142990, 339.213840, 173.184490, 339.200040, 173.225910, 339.184340);
	dessin.bezierCurveTo(173.268310, 339.168640, 173.311710, 339.154840, 173.354190, 339.139140);
	dessin.stroke();
	
// #path2314-9
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(166.630640, 346.492380);
	dessin.bezierCurveTo(166.671140, 346.477580, 166.711540, 346.463880, 166.751020, 346.449080);
	dessin.bezierCurveTo(166.792420, 346.434380, 166.833920, 346.419580, 166.875350, 346.404880);
	dessin.bezierCurveTo(166.918750, 346.389180, 166.961150, 346.374380, 167.004610, 346.358680);
	dessin.stroke();
	
// #path2318-3
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(160.280080, 353.712930);
	dessin.bezierCurveTo(160.319580, 353.698130, 160.359980, 353.684430, 160.400460, 353.669630);
	dessin.bezierCurveTo(160.441860, 353.654930, 160.483360, 353.639130, 160.524790, 353.625430);
	dessin.bezierCurveTo(160.567190, 353.609730, 160.611590, 353.594930, 160.653060, 353.579230);
	dessin.stroke();
	
// #path2322-6
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(147.578960, 368.152050);
	dessin.bezierCurveTo(147.619360, 368.137350, 147.659860, 368.124550, 147.700320, 368.109750);
	dessin.bezierCurveTo(147.741720, 368.094050, 147.783220, 368.080250, 147.824650, 368.064550);
	dessin.bezierCurveTo(147.867050, 368.049750, 147.909550, 368.035050, 147.952930, 368.018350);
	dessin.stroke();
	
// #path2326-4
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(134.878820, 382.593120);
	dessin.bezierCurveTo(134.919320, 382.578420, 134.958720, 382.564620, 134.999200, 382.549820);
	dessin.bezierCurveTo(135.040600, 382.535120, 135.082100, 382.520320, 135.123530, 382.505520);
	dessin.bezierCurveTo(135.166930, 382.489820, 135.209330, 382.475020, 135.251800, 382.460320);
	dessin.stroke();
	
// #path2338-6
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(115.829110, 404.252780);
	dessin.bezierCurveTo(115.869610, 404.238980, 115.909010, 404.224280, 115.949490, 404.209480);
	dessin.bezierCurveTo(115.990890, 404.194680, 116.032390, 404.180980, 116.073810, 404.165280);
	dessin.bezierCurveTo(116.116210, 404.149580, 116.158710, 404.135780, 116.202090, 404.120080);
	dessin.stroke();
	
// #path2414-1
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(173.546600, 339.975810);
	dessin.bezierCurveTo(173.616700, 339.868650, 173.686710, 339.761480, 173.704480, 339.639560);
	dessin.bezierCurveTo(173.721280, 339.535350, 173.699480, 339.420300, 173.637380, 339.335750);
	dessin.bezierCurveTo(173.573280, 339.247250, 173.463710, 339.192210, 173.355170, 339.139110);
	dessin.moveTo(172.987130, 339.802770);
	dessin.bezierCurveTo(173.045330, 339.822470, 173.104550, 339.842070, 173.162760, 339.861770);
	dessin.bezierCurveTo(173.223960, 339.882370, 173.286100, 339.902070, 173.348270, 339.919770);
	dessin.bezierCurveTo(173.414370, 339.940370, 173.481480, 339.958170, 173.547590, 339.977770);
	dessin.moveTo(172.987130, 339.802770);
	dessin.bezierCurveTo(173.045330, 339.738870, 173.102570, 339.674960, 173.129210, 339.593340);
	dessin.bezierCurveTo(173.149910, 339.531440, 173.153910, 339.457670, 173.124210, 339.402620);
	dessin.bezierCurveTo(173.096610, 339.348520, 173.038410, 339.310220, 172.981140, 339.271840);
	dessin.stroke();
	
// #path2418-5
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(166.636560, 347.023300);
	dessin.bezierCurveTo(166.694760, 347.043000, 166.753980, 347.062600, 166.812200, 347.081300);
	dessin.bezierCurveTo(166.874400, 347.101900, 166.935540, 347.121600, 166.997710, 347.140300);
	dessin.bezierCurveTo(167.062810, 347.160900, 167.129930, 347.178600, 167.197020, 347.197300);
	dessin.moveTo(166.636560, 347.023260);
	dessin.bezierCurveTo(166.693760, 346.959360, 166.752010, 346.894480, 166.779640, 346.813840);
	dessin.bezierCurveTo(166.800340, 346.751940, 166.802340, 346.677190, 166.773640, 346.623120);
	dessin.bezierCurveTo(166.746040, 346.568020, 166.688740, 346.529720, 166.630560, 346.492340);
	dessin.stroke();
	
// #path2422-4
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(160.846460, 354.415910);
	dessin.bezierCurveTo(160.917460, 354.308740, 160.986580, 354.201570, 161.004340, 354.078670);
	dessin.bezierCurveTo(161.020140, 353.975440, 160.998340, 353.859430, 160.937240, 353.774870);
	dessin.bezierCurveTo(160.873140, 353.686370, 160.764560, 353.632300, 160.654050, 353.578230);
	dessin.moveTo(160.286000, 354.242870);
	dessin.bezierCurveTo(160.345200, 354.263570, 160.403420, 354.283170, 160.462630, 354.302870);
	dessin.bezierCurveTo(160.523830, 354.322570, 160.585970, 354.342170, 160.648130, 354.360870);
	dessin.bezierCurveTo(160.714230, 354.380570, 160.780350, 354.399170, 160.846460, 354.418870);
	dessin.moveTo(160.286000, 354.242890);
	dessin.bezierCurveTo(160.345200, 354.179990, 160.401450, 354.115080, 160.429080, 354.034450);
	dessin.bezierCurveTo(160.449780, 353.972550, 160.452780, 353.898760, 160.423080, 353.842720);
	dessin.bezierCurveTo(160.395480, 353.788620, 160.337280, 353.751320, 160.280000, 353.712950);
	dessin.stroke();
	
// #path2436-6
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(148.146320, 368.856010);
	dessin.bezierCurveTo(148.215420, 368.749820, 148.286440, 368.642660, 148.304200, 368.518770);
	dessin.bezierCurveTo(148.320000, 368.415530, 148.297200, 368.299510, 148.237100, 368.215950);
	dessin.bezierCurveTo(148.173000, 368.127450, 148.063440, 368.073390, 147.953910, 368.018320);
	dessin.moveTo(147.585860, 368.682970);
	dessin.bezierCurveTo(147.645060, 368.702670, 147.703280, 368.722270, 147.761500, 368.741970);
	dessin.bezierCurveTo(147.823700, 368.762570, 147.884840, 368.781270, 147.947010, 368.799970);
	dessin.bezierCurveTo(148.013110, 368.820570, 148.079230, 368.838270, 148.146320, 368.857970);
	dessin.moveTo(147.585860, 368.682960);
	dessin.bezierCurveTo(147.644060, 368.619060, 147.701310, 368.555130, 147.728940, 368.474510);
	dessin.bezierCurveTo(147.750640, 368.412610, 147.752640, 368.337860, 147.722940, 368.281820);
	dessin.bezierCurveTo(147.695340, 368.228720, 147.638040, 368.190320, 147.579860, 368.152040);
	dessin.stroke();
	
// #path2482-0
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.418803;
	dessin.moveTo(116.394500, 404.956730);
	dessin.bezierCurveTo(116.464600, 404.849570, 116.534620, 404.742410, 116.552380, 404.619510);
	dessin.bezierCurveTo(116.568180, 404.517260, 116.546380, 404.401230, 116.485280, 404.316690);
	dessin.bezierCurveTo(116.420180, 404.228190, 116.311620, 404.174110, 116.202090, 404.120040);
	dessin.moveTo(115.834040, 404.783690);
	dessin.bezierCurveTo(115.893240, 404.803390, 115.951460, 404.822990, 116.009680, 404.842690);
	dessin.bezierCurveTo(116.071880, 404.863390, 116.133020, 404.881990, 116.195180, 404.900690);
	dessin.bezierCurveTo(116.261280, 404.921390, 116.327400, 404.939090, 116.394500, 404.958690);
	dessin.stroke();
	
// #path2484-4
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(115.834040, 404.783690);
	dessin.bezierCurveTo(115.892240, 404.719790, 115.949490, 404.654900, 115.977120, 404.575260);
	dessin.bezierCurveTo(115.997820, 404.512360, 116.000820, 404.438590, 115.971120, 404.382560);
	dessin.bezierCurveTo(115.942520, 404.328460, 115.886220, 404.291160, 115.828040, 404.252780);
	dessin.stroke();
	
// #path2486-5
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.418803;
	dessin.moveTo(160.032410, 419.763560);
	dessin.bezierCurveTo(160.022410, 419.819560, 160.013710, 419.872700, 160.004810, 419.928730);
	dessin.bezierCurveTo(159.995810, 419.986730, 159.988010, 420.043780, 159.982110, 420.101790);
	dessin.bezierCurveTo(159.976110, 420.163690, 159.970310, 420.224680, 159.965310, 420.286630);
	dessin.moveTo(159.967310, 420.286630);
	dessin.bezierCurveTo(160.128150, 420.293630, 160.288980, 420.300430, 160.445870, 420.277630);
	dessin.bezierCurveTo(160.625460, 420.253030, 160.801090, 420.190130, 160.956010, 420.101640);
	dessin.bezierCurveTo(161.103030, 420.018040, 161.231300, 419.911870, 161.360570, 419.805690);
	dessin.moveTo(160.967850, 419.441910);
	dessin.bezierCurveTo(161.010250, 419.478310, 161.054650, 419.515610, 161.097110, 419.553010);
	dessin.bezierCurveTo(161.141510, 419.592310, 161.185910, 419.631710, 161.228340, 419.672960);
	dessin.bezierCurveTo(161.273740, 419.716260, 161.318140, 419.760460, 161.362540, 419.804710);
	dessin.stroke();
	
// #path2504-2
	dessin.beginPath();
	dessin.moveTo(234.097970, 269.684670);
	dessin.lineTo(241.384930, 281.236170);
	dessin.lineTo(258.938770, 284.865110);
	dessin.lineTo(285.436280, 289.816450);
	dessin.lineTo(291.728630, 290.145820);
	dessin.lineTo(303.983750, 288.825410);
	dessin.lineTo(314.251610, 287.835340);
	dessin.bezierCurveTo(314.251610, 287.835340, 324.519470, 285.855180, 324.850020, 285.855180);
	dessin.bezierCurveTo(325.181560, 285.855180, 241.383940, 263.743260, 241.383940, 263.743260);
	
// #path2506-5
	dessin.beginPath();
	dessin.moveTo(212.642620, 277.451880);
	dessin.lineTo(216.005380, 307.608240);
	dessin.lineTo(213.062960, 333.576230);
	dessin.lineTo(200.872960, 369.595370);
	dessin.lineTo(189.523650, 389.280780);
	dessin.lineTo(165.984340, 417.342950);
	dessin.lineTo(139.082270, 434.515330);
	dessin.lineTo(102.932610, 440.379070);
	dessin.lineTo(73.088127, 434.095510);
	dessin.bezierCurveTo(73.088127, 434.095510, 51.650539, 425.718730, 51.650539, 425.300880);
	dessin.bezierCurveTo(51.650539, 424.883030, 75.609209, 395.982180, 75.609209, 395.982180);
	dessin.lineTo(96.626452, 407.290820);
	dessin.lineTo(114.701280, 404.359950);
	dessin.lineTo(134.037140, 395.564330);
	dessin.lineTo(145.806800, 385.931040);
	dessin.bezierCurveTo(145.806800, 385.931040, 156.735770, 372.109370, 157.156110, 372.109370);
	dessin.bezierCurveTo(157.576450, 372.109370, 167.244390, 355.774680, 167.244390, 355.774680);
	dessin.lineTo(174.390250, 338.602290);
	dessin.lineTo(177.753010, 322.686440);
	
// #path2508-5
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(97.896367, 408.136380);
	dessin.bezierCurveTo(134.822580, 417.763750, 175.095760, 386.203400, 187.847200, 337.646640);
	dessin.bezierCurveTo(200.598650, 289.087920, 181.000320, 241.918440, 144.074110, 232.291060);
	dessin.stroke();
	
// #path2510-1
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(144.074110, 232.291060);
	dessin.bezierCurveTo(107.147900, 222.663670, 66.874719, 254.224040, 54.123272, 302.780790);
	dessin.bezierCurveTo(41.371825, 351.339500, 60.970157, 398.508980, 97.897353, 408.136380);
	dessin.stroke();
	
// #path2512-4
	dessin.beginPath();
	dessin.moveTo(184.347290, 270.559710);
	dessin.bezierCurveTo(175.832840, 250.066130, 160.907640, 237.542260, 143.861960, 233.098250);
	dessin.lineTo(144.286260, 231.481880);
	dessin.bezierCurveTo(161.463160, 235.961300, 176.253190, 249.527340, 184.833750, 270.177260);
	dessin.lineTo(184.347290, 270.559710);
	
// #path2514-5
	dessin.beginPath();
	dessin.moveTo(98.108513, 407.329170);
	dessin.bezierCurveTo(116.402390, 412.098620, 135.690890, 407.064690, 151.819900, 394.426780);
	dessin.lineTo(152.055730, 394.995070);
	dessin.bezierCurveTo(135.628730, 407.868950, 116.317540, 413.801510, 97.684221, 408.944560);
	dessin.lineTo(98.108513, 407.329170);
	
// #path2518-1
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(151.776490, 202.959580);
	dessin.bezierCurveTo(102.531010, 190.120110, 48.822586, 232.208470, 31.816380, 296.965230);
	dessin.bezierCurveTo(14.811162, 361.721980, 40.947533, 424.629360, 90.193991, 437.467840);
	dessin.stroke();
	
// #path2520-4
	dessin.beginPath();
	dessin.moveTo(151.564340, 203.766780);
	dessin.bezierCurveTo(127.111320, 197.391770, 101.384440, 204.253460, 79.824498, 221.147590);
	dessin.lineTo(79.587684, 220.579310);
	dessin.bezierCurveTo(101.445620, 203.450190, 127.196180, 195.688890, 151.987640, 202.152380);
	dessin.lineTo(151.564340, 203.766780);
	
// #path2524-5
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(70.390421, 432.535180);
	dessin.bezierCurveTo(71.807358, 432.904870, 73.227255, 433.228340, 74.448821, 433.465290);
	dessin.moveTo(133.482600, 198.437880);
	dessin.bezierCurveTo(132.961610, 198.289430, 132.439640, 198.147850, 131.996600, 198.032820);
	dessin.bezierCurveTo(82.752111, 185.187450, 29.039736, 227.270890, 12.027610, 292.025690);
	dessin.bezierCurveTo(-4.984515, 356.780470, 21.145936, 419.689820, 70.389434, 432.534210);
	dessin.moveTo(71.138358, 432.725930);
	dessin.lineTo(90.933048, 437.656620);
	dessin.moveTo(131.246690, 197.841090);
	dessin.lineTo(151.035450, 202.770810);
	dessin.moveTo(91.966150, 406.207360);
	dessin.bezierCurveTo(127.450750, 410.301360, 162.829780, 378.954340, 174.652720, 334.358860);
	dessin.bezierCurveTo(186.671030, 288.592380, 169.950970, 244.058850, 136.813790, 230.934260);
	dessin.moveTo(57.895522, 371.273670);
	dessin.lineTo(109.122340, 333.729610);
	dessin.moveTo(100.018810, 330.387750);
	dessin.lineTo(53.518410, 358.558090);
	dessin.moveTo(50.787155, 343.268510);
	dessin.lineTo(111.997650, 301.743530);
	dessin.moveTo(50.276032, 329.932540);
	dessin.lineTo(104.330800, 334.207450);
	dessin.moveTo(100.497370, 319.884340);
	dessin.lineTo(73.203574, 393.941090);
	dessin.moveTo(64.590451, 383.558620);
	dessin.lineTo(125.892720, 340.891160);
	dessin.moveTo(111.518110, 341.368000);
	dessin.lineTo(83.724036, 402.131060);
	dessin.moveTo(93.566617, 406.808090);
	dessin.lineTo(111.517120, 341.368000);
	dessin.moveTo(105.768460, 406.774660);
	dessin.lineTo(129.245610, 352.349250);
	dessin.moveTo(115.830090, 404.865310);
	dessin.lineTo(106.247020, 353.781760);
	dessin.moveTo(128.287500, 401.045620);
	dessin.lineTo(122.537850, 357.122620);
	dessin.moveTo(137.870570, 396.272230);
	dessin.lineTo(131.641380, 359.032970);
	dessin.moveTo(150.807520, 388.632860);
	dessin.lineTo(144.578330, 347.574870);
	dessin.moveTo(160.390590, 378.607280);
	dessin.lineTo(136.433900, 359.510800);
	dessin.moveTo(167.576910, 365.717670);
	dessin.lineTo(144.578330, 347.575870);
	dessin.moveTo(75.582568, 261.638270);
	dessin.lineTo(104.330800, 334.207450);
	dessin.moveTo(66.642839, 272.756170);
	dessin.lineTo(112.955760, 322.749350);
	dessin.moveTo(60.415618, 284.811040);
	dessin.lineTo(118.225860, 306.516900);
	dessin.moveTo(54.726161, 300.571570);
	dessin.lineTo(118.225860, 306.516900);
	dessin.moveTo(51.518318, 315.465900);
	dessin.lineTo(109.122340, 333.729610);
	dessin.moveTo(84.075310, 250.840870);
	dessin.lineTo(124.934610, 295.535670);
	dessin.moveTo(97.372416, 240.589170);
	dessin.lineTo(120.142080, 311.768110);
	dessin.moveTo(108.348740, 235.029240);
	dessin.lineTo(117.746310, 324.658700);
	dessin.moveTo(119.518470, 231.689350);
	dessin.lineTo(110.080450, 327.522730);
	dessin.moveTo(130.496770, 230.581290);
	dessin.lineTo(120.143070, 311.768110);
	dessin.moveTo(132.427790, 230.610790);
	dessin.lineTo(135.474800, 311.291270);
	dessin.moveTo(146.065320, 232.847540);
	dessin.lineTo(118.225860, 306.516900);
	dessin.moveTo(154.161400, 240.155590);
	dessin.lineTo(126.371280, 305.084390);
	dessin.moveTo(162.786360, 249.225490);
	dessin.lineTo(114.393420, 295.535670);
	dessin.stroke();
	
// #path2526-9
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(119.733580, 368.068470);
	dessin.bezierCurveTo(137.827150, 372.785820, 157.560670, 357.321230, 163.808610, 333.529040);
	dessin.bezierCurveTo(170.056550, 309.736850, 160.453750, 286.624040, 142.360170, 281.906700);
	dessin.bezierCurveTo(124.266590, 277.189360, 104.534070, 292.653950, 98.286123, 316.446130);
	dessin.bezierCurveTo(92.038180, 340.238320, 101.640990, 363.351130, 119.733580, 368.068470);
	dessin.lineTo(119.733580, 368.068470);
	dessin.lineTo(119.733580, 368.068470);
	dessin.fill();
	dessin.stroke();
	
// #path28300-0
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(20, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.777778;
	dessin.fillStyle = 'rgb(133, 121, 121)';
	dessin.moveTo(164.928590, 329.755670);
	dessin.bezierCurveTo(161.439870, 353.298280, 144.014380, 370.382110, 125.576080, 368.336590);
	dessin.bezierCurveTo(107.137770, 366.291080, 94.355211, 345.856020, 96.708835, 322.187490);
	dessin.bezierCurveTo(99.062460, 298.518950, 115.701030, 280.177120, 134.284230, 280.765550);
	dessin.bezierCurveTo(152.867430, 281.353990, 166.674290, 300.659890, 165.464680, 324.364650);
	dessin.fill();
	dessin.stroke();
	
// #path2528-9
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(146.713600, 283.469980);
	dessin.bezierCurveTo(129.869220, 282.915450, 113.872430, 298.085080, 108.347760, 318.833320);
	dessin.bezierCurveTo(102.642510, 340.559820, 110.154450, 361.719030, 125.446720, 368.894350);
	dessin.stroke();
	
// #polygon2530-5
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(141.003000, 311.015000);
	dessin.lineTo(105.487000, 330.647000);
	dessin.lineTo(148.272000, 283.153000);
	dessin.fill();
	dessin.restore();
	
// #polyline2532-2
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(148.272000, 283.153000);
	dessin.lineTo(141.003000, 311.015000);
	dessin.lineTo(105.487000, 330.647000);
	dessin.stroke();
	dessin.restore();
	
// #polygon2534-6
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(142.619000, 346.549000);
	dessin.lineTo(156.751000, 347.357000);
	dessin.lineTo(137.773000, 317.879000);
	dessin.lineTo(130.908000, 336.858000);
	dessin.fill();
	dessin.restore();
	
// #polyline2536-0
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(137.773000, 317.879000);
	dessin.lineTo(130.908000, 336.858000);
	dessin.lineTo(142.619000, 346.549000);
	dessin.lineTo(156.751000, 347.357000);
	dessin.stroke();
	dessin.restore();
	
// #polygon2538-2
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(185.825000, 233.485000);
	dessin.lineTo(152.713000, 315.457000);
	dessin.fill();
	dessin.restore();
	
// #line2540-0
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(189.351960, 231.994130);
	dessin.lineTo(156.679520, 312.588100);
	dessin.stroke();
	
// #path2542-4
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(64.830225, 145.706520);
	dessin.bezierCurveTo(64.830225, 145.706520, 64.830225, 150.756180, 83.581947, 143.181680);
	dessin.bezierCurveTo(102.333670, 135.607190, 137.337740, 109.901720, 170.246000, 117.931420);
	dessin.bezierCurveTo(195.078910, 123.991800, 223.967260, 145.706520, 232.076170, 169.946060);
	dessin.bezierCurveTo(240.185070, 194.184610, 238.664530, 219.433890, 245.760070, 222.464080);
	dessin.moveTo(64.830225, 145.706520);
	dessin.bezierCurveTo(60.775772, 142.676320, 63.309682, 139.140780, 75.473041, 129.042440);
	dessin.bezierCurveTo(87.636400, 118.942150, 131.222020, 80.563359, 194.065550, 109.348190);
	dessin.bezierCurveTo(256.909070, 138.131040, 249.307340, 221.454340, 245.760070, 222.465070);
	dessin.moveTo(245.760070, 222.464080);
	dessin.bezierCurveTo(245.760070, 222.464080, 230.555620, 221.958710, 223.967260, 218.928530);
	dessin.bezierCurveTo(217.378900, 215.899330, 216.872710, 213.878880, 213.324440, 199.738640);
	dessin.bezierCurveTo(209.777170, 185.599400, 191.215560, 120.182160, 133.439850, 120.687510);
	dessin.stroke();
	
// #path2544-7
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(234.609090, 125.506900);
	dessin.lineTo(192.545000, 239.128150);
	dessin.bezierCurveTo(192.545000, 239.128150, 183.328990, 204.700800, 183.376350, 207.775240);
	dessin.lineTo(220.926170, 119.950890);
	dessin.bezierCurveTo(220.926170, 119.951880, 227.007360, 115.407580, 234.609090, 125.506900);
	dessin.lineTo(234.609090, 125.506900);
	dessin.fill();
	dessin.stroke();
	
// #polyline2548-6
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(179.769000, 208.853000);
	dessin.lineTo(149.887000, 278.710000);
	dessin.lineTo(138.984000, 279.518000);
	dessin.lineTo(128.485000, 308.996000);
	dessin.lineTo(104.661000, 327.167000);
	dessin.stroke();
	dessin.restore();
	
// #path2550-7
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(109.265410, 324.101240);
	dessin.bezierCurveTo(109.265410, 324.101240, 108.468140, 344.350020, 112.851170, 348.716360);
	dessin.stroke();
	
// #path2552-6
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(112.851170, 348.716360);
	dessin.bezierCurveTo(117.234200, 353.082710, 166.640510, 352.686470, 166.640510, 352.686470);
	dessin.lineTo(169.031350, 346.730310);
	dessin.lineTo(161.858840, 339.187300);
	dessin.lineTo(167.039150, 334.422760);
	dessin.lineTo(168.632710, 312.587120);
	dessin.lineTo(194.929920, 244.697920);
	dessin.lineTo(193.734990, 213.334190);
	dessin.bezierCurveTo(193.734990, 213.334190, 192.937720, 210.951910, 183.375370, 207.776220);
	dessin.stroke();
	
// #polygon2554-9
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(137.658000, 201.257000);
	dessin.lineTo(164.990000, 130.857000);
	dessin.fill();
	dessin.restore();
	
// #line2556-7
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(141.824390, 200.307920);
	dessin.lineTo(168.793550, 131.091400);
	dessin.stroke();
	
// #polygon2558-4
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(155.465000, 206.640000);
	dessin.lineTo(178.656000, 143.281000);
	dessin.fill();
	dessin.restore();
	
// #path2560-6
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(159.394990, 205.600420);
	dessin.lineTo(182.278130, 143.306550);
	dessin.moveTo(126.811360, 231.125980);
	dessin.lineTo(93.826126, 317.342800);
	dessin.bezierCurveTo(93.826126, 317.342800, 92.869990, 326.393050, 96.694536, 329.728030);
	dessin.moveTo(166.641500, 352.686470);
	dessin.lineTo(174.890520, 356.484530);
	dessin.moveTo(167.039150, 334.423740);
	dessin.lineTo(180.836520, 339.248250);
	dessin.moveTo(168.402800, 323.087580);
	dessin.lineTo(183.539160, 326.858110);
	dessin.moveTo(168.402800, 323.087580);
	dessin.lineTo(181.917970, 311.775980);
	dessin.moveTo(172.728600, 305.851290);
	dessin.lineTo(181.917970, 298.309250);
	dessin.moveTo(190.435380, 42.709599);
	dessin.bezierCurveTo(197.255630, 27.759227, 262.387370, 20.624225, 255.908530, 41.010649);
	dessin.bezierCurveTo(249.429700, 61.397073, 228.628550, 112.025410, 228.628550, 112.025410);
	dessin.bezierCurveTo(228.628550, 112.025410, 228.968970, 119.161400, 199.983920, 111.685230);
	dessin.moveTo(190.435380, 42.709599);
	dessin.lineTo(174.408010, 101.152320);
	dessin.moveTo(242.609460, 112.364610);
	dessin.lineTo(237.493290, 126.295410);
	dessin.lineTo(234.083160, 128.673740);
	dessin.moveTo(242.609460, 112.364610);
	dessin.bezierCurveTo(242.609460, 112.364610, 242.268050, 107.948120, 233.060920, 104.888440);
	dessin.moveTo(241.245800, 109.986280);
	dessin.lineTo(265.115670, 44.747750);
	dessin.stroke();
	
// #path2562-7
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 2.791955;
	dessin.lineCap = 'round';
	dessin.moveTo(192.948570, 22.598468);
	dessin.bezierCurveTo(216.798700, 31.353766, 215.543590, 120.160320, 149.640230, 275.885660);
	dessin.moveTo(186.506250, 20.929997);
	dessin.bezierCurveTo(186.506250, 22.180613, 216.171150, 15.719095, 216.171150, 30.103150);
	dessin.stroke();
	
// #path2564-9
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(310.082700, 20.280109);
	dessin.lineTo(291.120800, 21.822732);
	dessin.bezierCurveTo(291.120800, 21.822732, 287.251850, 22.594536, 282.220540, 28.377653);
	dessin.bezierCurveTo(277.189230, 34.161754, 270.610740, 43.415529, 261.711460, 43.030119);
	dessin.moveTo(309.065380, 7.857516);
	dessin.lineTo(288.668790, 9.599726);
	dessin.bezierCurveTo(288.668790, 9.599726, 287.307110, 9.783583, 284.951800, 10.802167);
	dessin.bezierCurveTo(282.578720, 11.828616, 278.005250, 14.192202, 272.767720, 20.214235);
	dessin.lineTo(270.816960, 22.506049);
	dessin.bezierCurveTo(268.612620, 25.123298, 266.208960, 28.373720, 263.145180, 30.171973);
	dessin.bezierCurveTo(262.852120, 30.344031, 262.570900, 30.540669, 262.236400, 30.578030);
	dessin.stroke();
	
// #path2566-7
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(263.146160, 30.170990);
	dessin.bezierCurveTo(258.229310, 32.232737, 255.749670, 43.767511, 265.115670, 44.747750);
	dessin.stroke();
	
// #path2568-8
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(309.065380, 7.857516);
	dessin.bezierCurveTo(303.504200, 10.255514, 304.278780, 19.894699, 310.082700, 20.280109);
	dessin.moveTo(306.600540, 11.026334);
	dessin.lineTo(322.080290, 10.255514);
	dessin.moveTo(307.034700, 18.320613);
	dessin.lineTo(323.245610, 17.265651);
	dessin.moveTo(329.432370, 7.942070);
	dessin.bezierCurveTo(328.658780, 2.157969, 321.692500, -0.540885, 322.466100, 13.725188);
	dessin.moveTo(322.693040, 14.084052);
	dessin.bezierCurveTo(322.693040, 14.084052, 325.949240, 31.462900, 330.978570, 19.123878);
	dessin.moveTo(309.065380, 7.857516);
	dessin.bezierCurveTo(309.065380, 7.857516, 311.067450, 6.903822, 311.708820, 10.411841);
	dessin.moveTo(310.619480, 20.552452);
	dessin.bezierCurveTo(310.683580, 20.552452, 311.963400, 20.106084, 312.219940, 18.639166);
	dessin.moveTo(327.222110, 7.432778);
	dessin.lineTo(359.455460, 4.939411);
	dessin.moveTo(328.259160, 19.068820);
	dessin.lineTo(360.825030, 15.950144);
	dessin.moveTo(360.825030, 15.951127);
	dessin.bezierCurveTo(365.616570, 15.561785, 363.759550, 5.329737, 359.455460, 4.940394);
	dessin.stroke();
	
// #path2570-1
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(359.455460, 4.939411);
	dessin.bezierCurveTo(356.186440, 8.382539, 357.120860, 14.492075, 360.825030, 15.950144);
	dessin.moveTo(327.819080, 11.232803);
	dessin.bezierCurveTo(326.388330, 13.133308, 326.627120, 14.795880, 327.342490, 16.221504);
	dessin.stroke();
	
// #path2572-3
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(281.145010, 12.212060);
	dessin.bezierCurveTo(281.145010, 12.212060, 238.880620, 16.090740, 237.490330, 28.558560);
	dessin.moveTo(272.348360, 20.713695);
	dessin.bezierCurveTo(272.012870, 20.766785, 271.672450, 20.821846, 271.327100, 20.877888);
	dessin.bezierCurveTo(264.050000, 22.072462, 254.392930, 24.046706, 248.068020, 27.324658);
	dessin.bezierCurveTo(246.576090, 28.097444, 245.233160, 28.754215, 244.654940, 29.783614);
	dessin.moveTo(184.227900, 21.308524);
	dessin.bezierCurveTo(184.227900, 21.308524, 203.210510, 18.282269, 208.146110, 31.522875);
	dessin.moveTo(185.467220, 29.026558);
	dessin.bezierCurveTo(185.467220, 29.026558, 187.019340, 28.799441, 189.221710, 28.829920);
	dessin.bezierCurveTo(191.983560, 28.869250, 195.966960, 29.125860, 198.804790, 31.432421);
	dessin.bezierCurveTo(199.647450, 32.116721, 200.342100, 33.036003, 200.792050, 34.244342);
	dessin.moveTo(184.227900, 21.308524);
	dessin.bezierCurveTo(180.052080, 22.065580, 181.712740, 29.223196, 185.467220, 29.026558);
	dessin.moveTo(186.506250, 20.929997);
	dessin.bezierCurveTo(184.227900, 15.256013, 176.650840, 17.206660, 176.650840, 24.795896);
	dessin.bezierCurveTo(176.650840, 32.447073, 182.825760, 36.729844, 189.222700, 28.829920);
	dessin.moveTo(176.874820, 30.364678);
	dessin.lineTo(162.129200, 31.676252);
	dessin.bezierCurveTo(161.602290, 34.562895, 154.756390, 33.512849, 155.283310, 25.378927);
	dessin.bezierCurveTo(155.810220, 17.245987, 161.865750, 18.295050, 162.656120, 19.869136);
	dessin.bezierCurveTo(163.445500, 21.443221, 177.401730, 19.606624, 177.401730, 19.606624);
	dessin.moveTo(266.758560, 27.363002);
	dessin.bezierCurveTo(266.758560, 27.363002, 251.600490, 23.355524, 249.124800, 29.828840);
	dessin.moveTo(245.760070, 222.464080);
	dessin.lineTo(264.099340, 245.742060);
	dessin.bezierCurveTo(264.099340, 245.742060, 264.099340, 290.213660, 291.801640, 289.703390);
	dessin.bezierCurveTo(319.503950, 289.191150, 336.947270, 280.502700, 336.947270, 280.502700);
	dessin.moveTo(285.132370, 289.703390);
	dessin.bezierCurveTo(284.619270, 289.703390, 242.552230, 281.012980, 242.552230, 281.012980);
	dessin.bezierCurveTo(242.552230, 281.012980, 228.701570, 270.789790, 227.162280, 242.675490);
	dessin.moveTo(227.162280, 242.675490);
	dessin.lineTo(235.948070, 222.393280);
	dessin.moveTo(228.188470, 238.074170);
	dessin.lineTo(219.980890, 237.052630);
	dessin.lineTo(219.467790, 249.831150);
	dessin.lineTo(229.214660, 262.100350);
	dessin.moveTo(271.280720, 277.946420);
	dessin.lineTo(295.905430, 271.301040);
	dessin.lineTo(295.392340, 248.298360);
	dessin.lineTo(270.254530, 242.675490);
	dessin.stroke();
	
// #path2574-5
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(270.255520, 242.675490);
	dessin.bezierCurveTo(270.255520, 242.675490, 266.663840, 264.144410, 272.306920, 274.878870);
	dessin.moveTo(289.750240, 249.831150);
	dessin.lineTo(290.775450, 271.301040);
	dessin.stroke();
	
// #path2576-2
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(270.255520, 242.675490);
	dessin.lineTo(251.273890, 219.161540);
	dessin.lineTo(246.671800, 219.516480);
	dessin.moveTo(256.775870, 226.297540);
	dessin.lineTo(284.620260, 230.407270);
	dessin.bezierCurveTo(284.620260, 230.407270, 294.367130, 230.919500, 298.985000, 227.340700);
	dessin.bezierCurveTo(303.601890, 223.762880, 301.036400, 198.203880, 301.036400, 198.203880);
	dessin.lineTo(281.730140, 182.118920);
	dessin.moveTo(287.697850, 199.225430);
	dessin.bezierCurveTo(288.210950, 199.225430, 266.151730, 146.574660, 266.151730, 146.574660);
	dessin.bezierCurveTo(266.151730, 146.574660, 257.430060, 141.973350, 267.176930, 129.706100);
	dessin.bezierCurveTo(276.924790, 117.437860, 277.436900, 92.901398, 271.280720, 88.302040);
	dessin.moveTo(252.812190, 81.144424);
	dessin.lineTo(275.346030, 98.346298);
	dessin.moveTo(246.142920, 98.524261);
	dessin.bezierCurveTo(246.142920, 99.036502, 272.584190, 117.928470, 272.584190, 117.928470);
	dessin.bezierCurveTo(272.584190, 117.928470, 248.442970, 111.412880, 241.526030, 118.459400);
	dessin.moveTo(275.384510, 209.959890);
	dessin.bezierCurveTo(275.384510, 209.959890, 271.576740, 172.723560, 269.794720, 155.292610);
	dessin.moveTo(268.203130, 207.915840);
	dessin.lineTo(259.995550, 127.150780);
	dessin.moveTo(261.020760, 205.871780);
	dessin.lineTo(252.812190, 124.594490);
	dessin.moveTo(253.326280, 205.871780);
	dessin.lineTo(245.630810, 122.038210);
	dessin.moveTo(243.857660, 172.373540);
	dessin.bezierCurveTo(242.013470, 154.338920, 238.448440, 119.481920, 238.448440, 119.481920);
	dessin.moveTo(271.280720, 88.301056);
	dessin.lineTo(273.579790, 83.390027);
	dessin.bezierCurveTo(273.579790, 83.390027, 283.273380, 87.253960, 284.935020, 94.979859);
	dessin.bezierCurveTo(286.596670, 102.706740, 287.982030, 106.294390, 286.596670, 114.021290);
	dessin.moveTo(286.595680, 114.022260);
	dessin.bezierCurveTo(286.595680, 114.022260, 294.350350, 101.879880, 300.997920, 107.122240);
	dessin.bezierCurveTo(307.644500, 112.366570, 333.400980, 133.891540, 333.400980, 133.891540);
	dessin.bezierCurveTo(333.400980, 133.891540, 340.602100, 138.858610, 333.400980, 141.617420);
	dessin.moveTo(333.400980, 141.617420);
	dessin.bezierCurveTo(333.400980, 141.617420, 330.631250, 145.756650, 322.876570, 140.514300);
	dessin.bezierCurveTo(315.122890, 135.269970, 305.982860, 123.681110, 288.812850, 138.582330);
	dessin.moveTo(279.396540, 87.529253);
	dessin.bezierCurveTo(286.596670, 86.149839, 289.919960, 86.425132, 297.121080, 93.876721);
	dessin.bezierCurveTo(304.322200, 101.327330, 318.723450, 112.366570, 335.063610, 109.881080);
	dessin.bezierCurveTo(351.403780, 107.398520, 366.082300, 104.362440, 373.005160, 102.155180);
	dessin.bezierCurveTo(379.928030, 99.947908, 391.561510, 100.499490, 399.038920, 101.327330);
	dessin.bezierCurveTo(406.516320, 102.155180, 409.008790, 107.398520, 395.991910, 114.572840);
	dessin.bezierCurveTo(382.976020, 121.749150, 379.098190, 128.371910, 375.774900, 141.064880);
	dessin.bezierCurveTo(372.451610, 153.758840, 364.696940, 205.638770, 352.510890, 209.226430);
	dessin.moveTo(369.681870, 202.603660);
	dessin.lineTo(393.499440, 201.775820);
	dessin.bezierCurveTo(393.499440, 201.775820, 395.991910, 202.328370, 400.977830, 197.636580);
	dessin.bezierCurveTo(405.962770, 192.945800, 446.951320, 151.275290, 438.365830, 112.917160);
	dessin.moveTo(404.577400, 109.054200);
	dessin.bezierCurveTo(404.577400, 109.054200, 415.100830, 113.469710, 415.100830, 120.920320);
	dessin.bezierCurveTo(415.100830, 128.371910, 418.424120, 127.267780, 420.640300, 122.852290);
	dessin.bezierCurveTo(422.855500, 118.436790, 429.779350, 113.745000, 446.396780, 110.434600);
	dessin.moveTo(446.396780, 110.434600);
	dessin.bezierCurveTo(453.320630, 110.158340, 458.582840, 104.638700, 405.685500, 102.707730);
	dessin.stroke();
	
// #path2578-8
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(284.658740, 117.885210);
	dessin.bezierCurveTo(284.658740, 118.160500, 281.889000, 128.923470, 272.749960, 134.993680);
	dessin.stroke();
	
// #path2580-6
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(279.396540, 87.529253);
	dessin.bezierCurveTo(279.396540, 87.529253, 283.550650, 80.354923, 279.672820, 76.767266);
	dessin.bezierCurveTo(275.794990, 73.179610, 262.224560, 62.141347, 253.916340, 75.387852);
	dessin.stroke();
	
// #path2582-7
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 2.791955;
	dessin.lineCap = 'round';
	dessin.moveTo(262.779100, 52.759757);
	dessin.bezierCurveTo(262.779100, 52.759757, 276.073250, 57.450552, 272.748970, 70.145488);
	dessin.stroke();
	
// #path2584-6
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(306.512730, 131.869110);
	dessin.bezierCurveTo(306.512730, 131.869110, 341.261230, 168.771150, 347.205270, 193.828700);
	dessin.bezierCurveTo(353.148310, 218.885260, 352.692440, 233.009770, 350.863060, 241.664770);
	dessin.moveTo(353.149300, 237.108680);
	dessin.bezierCurveTo(354.521830, 237.564880, 368.695150, 242.119990, 368.695150, 242.119990);
	dessin.moveTo(369.681870, 202.603660);
	dessin.bezierCurveTo(364.579520, 205.673170, 360.008020, 217.062440, 368.695150, 242.119000);
	dessin.stroke();
	
// #line2586-2
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(365.951050, 206.128390);
	dessin.lineTo(362.750120, 197.473370);
	dessin.stroke();
	
// #path28303-8
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(20, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.464027;
	dessin.fillStyle = 'rgb(133, 121, 121)';
	dessin.moveTo(431.605910, 273.611060);
	dessin.bezierCurveTo(431.605910, 293.367720, 417.095040, 308.799450, 401.901090, 304.913200);
	dessin.bezierCurveTo(386.858120, 301.065560, 381.206370, 294.650260, 381.206370, 274.893600);
	dessin.bezierCurveTo(381.206370, 255.136950, 386.956960, 241.839580, 402.544670, 243.591470);
	dessin.bezierCurveTo(425.367990, 246.156560, 429.614960, 251.144830, 431.390720, 269.214780);
	dessin.fill();
	dessin.stroke();
	
// #path2588-1
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(350.863060, 241.664770);
	dessin.lineTo(413.045480, 264.899490);
	dessin.lineTo(419.446360, 269.911790);
	dessin.lineTo(427.676640, 269.911790);
	dessin.lineTo(430.419730, 277.656370);
	dessin.lineTo(423.561010, 284.034330);
	dessin.lineTo(351.777750, 261.711010);
	dessin.lineTo(345.833720, 260.343410);
	dessin.lineTo(345.833720, 266.721340);
	dessin.bezierCurveTo(345.833720, 266.721340, 337.146590, 273.099300, 337.603440, 273.099300);
	dessin.bezierCurveTo(338.061280, 273.099300, 336.947270, 280.501730, 336.947270, 280.501730);
	dessin.stroke();
	
// #path2590-2
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(347.205270, 256.698720);
	dessin.lineTo(349.948360, 245.764680);
	dessin.moveTo(351.777750, 257.610130);
	dessin.lineTo(354.520840, 246.676100);
	dessin.stroke();
	
// #path2592-5
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(288.812850, 138.582330);
	dessin.bezierCurveTo(315.199850, 167.859720, 339.432830, 194.739130, 340.804380, 215.240580);
	dessin.bezierCurveTo(342.175930, 235.742040, 332.574110, 243.941850, 334.403500, 249.409360);
	dessin.bezierCurveTo(336.232880, 254.876870, 333.030960, 263.076660, 329.831010, 266.267110);
	dessin.stroke();
	
// #path2594-7
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(291.151390, 136.489120);
	dessin.bezierCurveTo(309.804440, 157.186220, 327.362230, 176.721200, 336.711450, 193.665490);
	dessin.bezierCurveTo(340.931670, 201.315690, 343.503070, 208.488040, 343.940190, 215.032160);
	dessin.bezierCurveTo(344.818380, 228.147900, 341.454630, 236.488290, 339.092410, 242.301880);
	dessin.bezierCurveTo(338.220150, 244.447210, 337.457410, 246.149110, 337.327160, 247.622910);
	dessin.bezierCurveTo(337.302460, 247.905080, 337.302460, 248.170530, 337.385360, 248.418300);
	dessin.bezierCurveTo(338.070150, 250.464310, 338.226050, 252.815120, 337.949760, 255.214100);
	dessin.bezierCurveTo(337.462320, 259.462470, 335.599390, 263.844530, 333.518380, 266.735110);
	dessin.moveTo(343.141910, 251.289220);
	dessin.bezierCurveTo(344.618050, 251.563530, 346.201750, 249.720050, 346.677350, 247.171610);
	dessin.bezierCurveTo(347.153940, 244.624170, 346.343830, 242.336290, 344.867690, 242.062970);
	dessin.bezierCurveTo(343.391550, 241.788660, 341.807860, 243.632140, 341.331270, 246.179580);
	dessin.bezierCurveTo(340.855670, 248.727020, 341.665770, 251.015880, 343.141910, 251.289220);
	dessin.stroke();
	
// #path2612-0
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(317.121990, 273.543700);
	dessin.bezierCurveTo(312.099560, 273.543700, 314.610780, 276.045920, 309.817270, 277.865800);
	dessin.bezierCurveTo(305.023760, 279.685680, 307.534970, 280.368010, 307.078120, 282.187890);
	dessin.bezierCurveTo(306.622250, 284.007770, 304.339960, 285.826680, 304.111040, 283.324460);
	dessin.bezierCurveTo(303.882120, 280.822250, 301.599820, 280.595120, 297.491100, 281.050340);
	dessin.bezierCurveTo(293.382380, 281.505570, 283.338500, 279.685680, 286.534510, 274.909350);
	dessin.moveTo(320.545930, 275.135470);
	dessin.bezierCurveTo(316.437210, 276.500150, 317.806780, 278.320030, 313.242190, 279.457570);
	dessin.bezierCurveTo(308.676610, 280.594140, 310.046190, 284.006800, 311.187830, 285.143360);
	dessin.stroke();
	
// #path31940-2
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.113985;
	dessin.lineCap = 'round';
	dessin.moveTo(287.697850, 199.225430);
	dessin.bezierCurveTo(287.697850, 199.225430, 292.246660, 198.556860, 292.452880, 203.694010);
	dessin.bezierCurveTo(292.659110, 208.832160, 287.708710, 212.530910, 286.677580, 211.708000);
	dessin.bezierCurveTo(285.646450, 210.886040, 285.234000, 215.613220, 273.272920, 213.352870);
	dessin.bezierCurveTo(261.312830, 211.091530, 248.526850, 209.653130, 249.351750, 210.064100);
	dessin.stroke();
	
// #path2618-6
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(319.500000, 175.461740);
	dessin.bezierCurveTo(316.747040, 172.260480, 311.837700, 175.048500, 311.927870, 183.006730);
	dessin.bezierCurveTo(312.018170, 190.794710, 317.434790, 188.037710, 315.140650, 193.067710);
	dessin.bezierCurveTo(312.845530, 198.097700, 329.827060, 199.013050, 329.827060, 199.013050);
	dessin.lineTo(329.598140, 229.654130);
	dessin.moveTo(409.825790, 304.712760);
	dessin.bezierCurveTo(419.167120, 306.203270, 428.839980, 294.339130, 431.429150, 278.217780);
	dessin.bezierCurveTo(434.018320, 262.095450, 428.543970, 247.816590, 419.201660, 246.327050);
	dessin.stroke();
	
// #path2620-4
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(419.201660, 246.327050);
	dessin.bezierCurveTo(412.511660, 245.260300, 405.650960, 251.042440, 401.272860, 260.499730);
	dessin.moveTo(397.206570, 275.838460);
	dessin.bezierCurveTo(395.696880, 290.967770, 401.220570, 303.295970, 409.825790, 304.712760);
	dessin.stroke();
	
// #path2622-4
	dessin.beginPath();
	dessin.moveTo(419.068450, 247.151950);
	dessin.bezierCurveTo(414.529510, 246.428320, 409.767580, 248.575610, 405.969670, 253.235920);
	dessin.lineTo(405.766410, 252.706970);
	dessin.bezierCurveTo(409.786330, 247.776280, 414.531490, 244.738230, 419.333880, 245.504130);
	dessin.lineTo(419.068450, 247.151950);
	
// #path2624-0
	dessin.beginPath();
	dessin.moveTo(399.416830, 294.035320);
	dessin.bezierCurveTo(401.776090, 300.189110, 405.679580, 303.205520, 409.958020, 303.887860);
	dessin.lineTo(409.692590, 305.536670);
	dessin.bezierCurveTo(405.313500, 304.837620, 401.474150, 300.774090, 399.058650, 294.474800);
	dessin.lineTo(399.416830, 294.035320);
	
// #path2626-1
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(419.200670, 246.327050);
	dessin.lineTo(399.669430, 243.991980);
	dessin.moveTo(409.825790, 304.712760);
	dessin.lineTo(392.638030, 301.209660);
	dessin.stroke();
	
// #path2628-5
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(406.674190, 244.828670);
	dessin.bezierCurveTo(405.152660, 243.704890, 403.540360, 243.041250, 402.012910, 242.824940);
	dessin.stroke();
	
// #path2630-1
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(402.012910, 242.823960);
	dessin.bezierCurveTo(395.922840, 241.852570, 389.692660, 246.557120, 385.312580, 254.535700);
	dessin.moveTo(380.017820, 272.335360);
	dessin.bezierCurveTo(378.509120, 287.463690, 384.031820, 299.791900, 392.637040, 301.209660);
	dessin.stroke();
	
// #path2632-3
	dessin.beginPath();
	dessin.moveTo(406.563680, 245.147240);
	dessin.bezierCurveTo(405.059910, 244.037220, 403.389390, 243.861220, 401.880680, 243.648850);
	dessin.lineTo(402.146110, 242.000050);
	dessin.bezierCurveTo(403.690340, 242.219290, 405.244430, 243.372570, 406.783720, 244.510130);
	dessin.lineTo(406.563680, 245.147240);
	
// #path2634-5
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(391.465800, 334.294950);
	dessin.bezierCurveTo(409.677790, 336.769640, 428.114740, 311.938200, 432.643810, 278.833260);
	dessin.bezierCurveTo(437.174850, 245.728300, 426.084060, 216.884480, 407.873070, 214.409790);
	dessin.stroke();
	
// #path2636-6
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(407.873070, 214.408810);
	dessin.bezierCurveTo(393.758950, 212.492580, 379.510640, 226.974940, 371.572440, 249.401490);
	dessin.moveTo(367.208150, 266.509970);
	dessin.bezierCurveTo(367.009820, 267.687820, 366.830240, 268.862730, 366.694070, 269.871480);
	dessin.bezierCurveTo(362.163030, 302.976440, 373.253820, 331.820250, 391.464820, 334.293960);
	dessin.stroke();
	
// #path2638-5
	dessin.beginPath();
	dessin.moveTo(428.619950, 235.359580);
	dessin.bezierCurveTo(423.810650, 222.852440, 416.149710, 216.377160, 407.759590, 215.236660);
	dessin.lineTo(407.985550, 213.581950);
	dessin.bezierCurveTo(416.473360, 214.735230, 424.088900, 222.257600, 428.953460, 234.909280);
	dessin.lineTo(428.619950, 235.359580);
	
// #path2640-5
	dessin.beginPath();
	dessin.moveTo(391.579280, 333.468090);
	dessin.bezierCurveTo(400.559460, 334.688220, 409.735020, 329.543190, 417.085130, 319.644450);
	dessin.lineTo(417.286420, 320.166520);
	dessin.bezierCurveTo(409.732060, 330.342520, 400.584130, 336.375380, 391.353320, 335.121800);
	dessin.lineTo(391.579280, 333.468090);
	
// #path2642-2
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(381.936010, 330.178340);
	dessin.bezierCurveTo(393.259670, 330.355310, 404.280400, 320.397560, 411.968960, 304.826800);
	dessin.moveTo(421.048800, 246.799980);
	dessin.bezierCurveTo(418.902680, 231.337360, 413.180660, 220.012990, 405.682540, 214.243640);
	dessin.moveTo(398.887950, 302.766030);
	dessin.lineTo(377.403000, 324.563340);
	dessin.moveTo(392.638030, 332.348230);
	dessin.lineTo(392.638030, 301.209660);
	dessin.moveTo(395.762990, 302.766030);
	dessin.lineTo(406.700840, 323.785640);
	dessin.moveTo(406.700840, 305.879800);
	dessin.lineTo(400.841660, 326.899390);
	dessin.moveTo(380.527960, 287.586590);
	dessin.lineTo(380.918700, 327.288730);
	dessin.moveTo(384.043660, 297.317210);
	dessin.lineTo(371.542840, 310.550920);
	dessin.moveTo(396.935220, 243.991980);
	dessin.lineTo(391.076050, 220.637310);
	dessin.moveTo(395.372250, 217.912900);
	dessin.bezierCurveTo(395.372250, 218.302230, 385.313570, 254.536690, 385.313570, 254.536690);
	dessin.moveTo(381.700180, 232.314650);
	dessin.bezierCurveTo(382.090930, 232.703990, 391.856550, 245.548370, 391.856550, 245.548370);
	dessin.moveTo(396.935220, 243.991980);
	dessin.lineTo(408.262820, 216.744860);
	dessin.moveTo(401.623150, 215.577830);
	dessin.bezierCurveTo(402.013890, 215.577830, 406.673210, 244.828670, 406.673210, 244.828670);
	dessin.moveTo(402.012910, 242.823960);
	dessin.lineTo(419.982150, 226.476470);
	dessin.moveTo(414.122980, 220.637310);
	dessin.lineTo(411.388770, 245.937720);
	dessin.moveTo(387.961940, 359.902100);
	dessin.bezierCurveTo(413.952280, 363.433720, 440.265270, 327.994670, 446.731280, 280.746540);
	dessin.bezierCurveTo(453.197290, 233.499390, 437.369240, 192.334250, 411.377910, 188.801660);
	dessin.stroke();
	
// #path2644-3
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(411.376930, 188.801660);
	dessin.bezierCurveTo(410.698060, 188.710260, 410.021170, 188.644350, 409.439000, 188.611890);
	dessin.moveTo(380.658200, 202.223170);
	dessin.bezierCurveTo(374.282970, 208.858710, 368.790860, 217.330840, 364.569650, 226.455830);
	dessin.moveTo(353.339730, 263.159250);
	dessin.bezierCurveTo(353.056540, 264.841490, 352.801970, 266.517820, 352.607580, 267.958200);
	dessin.bezierCurveTo(346.141580, 315.205350, 361.970620, 356.370490, 387.961940, 359.902100);
	dessin.stroke();
	
// #path2646-4
	dessin.beginPath();
	dessin.moveTo(358.280270, 330.098690);
	dessin.bezierCurveTo(365.155770, 347.979960, 376.078810, 357.444120, 388.074430, 359.075230);
	dessin.lineTo(387.848470, 360.729950);
	dessin.bezierCurveTo(375.756150, 359.086060, 364.877510, 348.573790, 357.945770, 330.549000);
	dessin.lineTo(358.280270, 330.098690);
	
// #path2648-0
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(370.621240, 357.720400);
	dessin.bezierCurveTo(370.724840, 357.735100, 370.829440, 357.747900, 370.917250, 357.758700);
	dessin.stroke();
	
// #path2650-5
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(333.911120, 281.819190);
	dessin.bezierCurveTo(332.578050, 323.283220, 348.283760, 354.483750, 370.621240, 357.720400);
	dessin.moveTo(370.877780, 357.754800);
	dessin.lineTo(388.217500, 359.935510);
	dessin.stroke();
	
// #path2516-0
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(90.193991, 437.467840);
	dessin.bezierCurveTo(139.439460, 450.307320, 193.147890, 408.217970, 210.153110, 343.462190);
	dessin.bezierCurveTo(227.158330, 278.705440, 201.021960, 215.799040, 151.776490, 202.959580);
	dessin.stroke();
	
// #path2546-2
	dessin.beginPath();
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(183.376350, 207.776220);
	dessin.lineTo(153.892020, 276.458850);
	dessin.lineTo(143.133760, 277.253260);
	dessin.lineTo(130.944520, 305.454400);
	dessin.lineTo(109.266400, 324.101240);
	dessin.bezierCurveTo(109.266400, 324.101240, 108.469130, 344.350020, 112.852160, 348.716360);
	dessin.bezierCurveTo(117.235190, 353.082710, 166.641500, 352.686470, 166.641500, 352.686470);
	dessin.lineTo(169.032330, 346.730310);
	dessin.lineTo(161.859830, 339.187300);
	dessin.lineTo(167.040130, 334.422760);
	dessin.lineTo(168.633700, 312.587120);
	dessin.lineTo(194.930900, 244.697920);
	dessin.lineTo(193.735980, 213.334190);
	dessin.bezierCurveTo(193.734990, 213.334190, 192.937720, 210.951910, 183.376350, 207.776220);
	dessin.fill();
	
// #path28082-6
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(182.923030, 207.844600);
	dessin.lineTo(194.519450, 212.656440);
	dessin.lineTo(195.444850, 244.464110);
	dessin.lineTo(169.395150, 311.135220);
	dessin.lineTo(166.664690, 335.621420);
	dessin.lineTo(162.458770, 339.812250);
	dessin.lineTo(169.615550, 347.134450);
	dessin.lineTo(167.450340, 353.415690);
	dessin.lineTo(113.751020, 351.134190);
	dessin.lineTo(110.087190, 342.283310);
	dessin.lineTo(108.673330, 323.932250);
	dessin.lineTo(130.981350, 304.790000);
	dessin.lineTo(143.096460, 276.892770);
	dessin.lineTo(153.893860, 276.644660);
	dessin.fill();
	dessin.stroke();
	
// #path28308-9
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(428.435730, 270.705090);
	dessin.lineTo(418.911180, 271.180340);
	dessin.lineTo(412.187960, 265.039480);
	dessin.lineTo(350.164850, 242.720490);
	dessin.bezierCurveTo(350.164850, 242.720490, 352.799570, 221.495200, 348.877700, 205.305660);
	dessin.bezierCurveTo(344.955820, 189.116110, 330.994940, 155.986800, 313.020550, 139.989220);
	dessin.bezierCurveTo(304.663570, 132.551340, 276.251040, 97.105800, 252.653370, 82.802874);
	dessin.bezierCurveTo(245.893600, 92.986144, 250.746380, 89.925369, 247.608740, 98.119720);
	dessin.bezierCurveTo(271.775810, 116.743380, 283.148290, 128.680830, 312.460290, 164.552670);
	dessin.bezierCurveTo(342.090630, 200.814080, 343.060560, 208.476760, 340.753810, 228.473440);
	dessin.bezierCurveTo(339.353140, 240.615610, 334.380760, 244.662990, 334.800970, 249.861780);
	dessin.bezierCurveTo(335.152340, 254.209120, 336.954500, 256.778970, 331.229260, 264.202090);
	dessin.bezierCurveTo(325.504020, 271.625200, 333.323970, 279.285270, 309.523010, 279.356870);
	dessin.bezierCurveTo(306.721690, 279.365870, 309.032560, 281.203350, 313.425660, 286.811630);
	dessin.bezierCurveTo(324.254560, 286.007180, 335.908220, 280.184110, 335.908220, 280.184110);
	dessin.lineTo(337.672340, 272.296870);
	dessin.lineTo(344.705890, 266.239020);
	dessin.lineTo(344.705890, 258.898620);
	dessin.lineTo(422.022850, 283.854310);
	dessin.lineTo(428.829380, 278.354710);
	dessin.fill();
	
// #path31849-1
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(336.379590, 137.158280);
	dessin.bezierCurveTo(336.379590, 137.158280, 299.712950, 106.254160, 298.638670, 105.937010);
	dessin.bezierCurveTo(297.350830, 105.556820, 294.249330, 105.393630, 292.785770, 106.908990);
	dessin.bezierCurveTo(291.529190, 108.210060, 288.226610, 112.306130, 288.226610, 112.306130);
	dessin.lineTo(287.014930, 112.459740);
	dessin.lineTo(286.932930, 106.908990);
	dessin.bezierCurveTo(286.932930, 106.908990, 285.957440, 93.301176, 284.006480, 90.871208);
	dessin.bezierCurveTo(282.055510, 88.441240, 273.830620, 83.714260, 273.830620, 83.714260);
	dessin.lineTo(271.576730, 88.139403);
	dessin.bezierCurveTo(271.576730, 88.139403, 273.154230, 88.927232, 274.251640, 92.329189);
	dessin.bezierCurveTo(275.349060, 95.731144, 275.714870, 94.273163, 275.227130, 101.563070);
	dessin.bezierCurveTo(274.739380, 108.852980, 273.276160, 121.974800, 270.837460, 124.890760);
	dessin.bezierCurveTo(268.398750, 127.806730, 261.570360, 138.012590, 262.058110, 139.956560);
	dessin.bezierCurveTo(262.545850, 141.900530, 266.935520, 147.246470, 266.935520, 147.246470);
	dessin.lineTo(280.879880, 181.066590);
	dessin.lineTo(301.816710, 198.025170);
	dessin.bezierCurveTo(301.816710, 198.025170, 302.001530, 221.183980, 301.513780, 224.099940);
	dessin.bezierCurveTo(301.026040, 227.015900, 297.981490, 229.614760, 294.079560, 230.100750);
	dessin.bezierCurveTo(290.177620, 230.586740, 258.887790, 227.435420, 258.887790, 227.435420);
	dessin.lineTo(270.593580, 242.501220);
	dessin.lineTo(294.736790, 247.847150);
	dessin.lineTo(295.224530, 270.202850);
	dessin.lineTo(271.325200, 278.464750);
	dessin.bezierCurveTo(271.325200, 278.464750, 282.726400, 289.430330, 286.140590, 288.944340);
	dessin.bezierCurveTo(289.554770, 288.458350, 312.081010, 289.232490, 314.246450, 286.726640);
	dessin.bezierCurveTo(316.469210, 284.154470, 308.393550, 282.838690, 309.856780, 280.894720);
	dessin.bezierCurveTo(311.320000, 278.950740, 321.074820, 280.408720, 324.489020, 278.464750);
	dessin.bezierCurveTo(327.903210, 276.520780, 334.243840, 270.688850, 333.756110, 268.258880);
	dessin.bezierCurveTo(333.268370, 265.828910, 314.734190, 262.426960, 314.734190, 262.426960);
	dessin.lineTo(317.660640, 256.109050);
	dessin.bezierCurveTo(317.660640, 256.109050, 322.659990, 254.529560, 326.439980, 251.978090);
	dessin.bezierCurveTo(330.219980, 249.426630, 327.354490, 249.973370, 332.292870, 244.445190);
	dessin.bezierCurveTo(332.597710, 238.188020, 334.487710, 228.893400, 334.487710, 228.893400);
	dessin.lineTo(329.122550, 228.893390);
	dessin.bezierCurveTo(329.122550, 228.893390, 328.939650, 208.481670, 328.878690, 198.761790);
	dessin.bezierCurveTo(320.282260, 199.490790, 314.246450, 194.873840, 314.246450, 194.873840);
	dessin.bezierCurveTo(314.246450, 194.873840, 316.010090, 193.165870, 315.709680, 190.985890);
	dessin.bezierCurveTo(315.562120, 189.915140, 311.490520, 188.178480, 311.563870, 182.724000);
	dessin.bezierCurveTo(311.663270, 175.334210, 313.150950, 175.422640, 314.423600, 174.277950);
	dessin.bezierCurveTo(316.435530, 172.212480, 319.057140, 174.277950, 319.057140, 174.277950);
	dessin.lineTo(288.344710, 137.894900);
	dessin.bezierCurveTo(288.344710, 137.894900, 300.101900, 130.236690, 304.979310, 130.236690);
	dessin.bezierCurveTo(309.856730, 130.236690, 323.025750, 139.956560, 323.025750, 139.956560);
	dessin.bezierCurveTo(323.025750, 139.956560, 324.573350, 143.221990, 327.903160, 142.872520);
	dessin.bezierCurveTo(335.446260, 142.080870, 336.379590, 137.158280, 336.379590, 137.158280);
	dessin.fill();
	
// #path32005-2
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(314.213400, 243.110290);
	dessin.bezierCurveTo(314.213400, 243.110290, 317.580850, 236.202180, 322.532970, 233.241550);
	dessin.bezierCurveTo(327.485070, 230.280940, 332.437190, 227.715070, 333.625700, 228.701940);
	dessin.bezierCurveTo(334.814210, 229.688810, 332.635270, 237.189050, 332.635270, 239.557550);
	dessin.bezierCurveTo(332.635270, 241.926040, 332.635270, 246.268290, 330.654430, 247.452540);
	dessin.bezierCurveTo(328.673580, 248.636790, 324.513810, 255.347530, 323.325300, 255.347530);
	dessin.bezierCurveTo(322.136800, 255.347530, 317.580850, 256.531780, 317.580850, 256.531780);
	dessin.fill();
	dessin.stroke();
	
// #path31967-4
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(316.285320, 259.507340);
	dessin.bezierCurveTo(314.342080, 267.414450, 308.914970, 272.891060, 304.161390, 271.741890);
	dessin.bezierCurveTo(299.407810, 270.592710, 297.126520, 263.252590, 299.065090, 255.344340);
	dessin.bezierCurveTo(301.003650, 247.436100, 306.428510, 241.952240, 311.184000, 243.093630);
	dessin.bezierCurveTo(315.939490, 244.235020, 318.226120, 251.569740, 316.292240, 259.479100);
	dessin.fill();
	
// #path31981-8
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(315.600000, 263.045150);
	dessin.bezierCurveTo(315.600000, 263.045150, 313.421070, 267.387390, 312.232560, 268.769010);
	dessin.bezierCurveTo(311.044050, 270.150640, 307.478530, 272.124380, 307.478530, 272.124380);
	dessin.lineTo(330.060180, 275.282380);
	dessin.bezierCurveTo(330.060180, 275.282380, 332.635270, 273.900760, 333.229530, 271.927000);
	dessin.bezierCurveTo(333.823780, 269.953260, 333.229530, 265.808390, 331.446760, 265.611020);
	dessin.bezierCurveTo(329.664010, 265.413640, 315.005740, 263.242520, 315.600000, 263.045150);
	dessin.fill();
	dessin.stroke();
	
// #path31991-6
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(332.493740, 271.428670);
	dessin.bezierCurveTo(331.790730, 273.573090, 330.214750, 274.865790, 328.934650, 274.348020);
	dessin.bezierCurveTo(327.654560, 273.830250, 327.133330, 271.689260, 327.757530, 269.512960);
	dessin.bezierCurveTo(328.381740, 267.336670, 329.925630, 265.912160, 331.244150, 266.295950);
	dessin.bezierCurveTo(332.562670, 266.679750, 333.178950, 268.733040, 332.635910, 270.932970);
	dessin.fill();
	
// #g31950-1
	dessin.save();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 0.040932);
	
// #g31928-8
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -0.741455, 0.494303);
	
// #path2596-9
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(328.617000, 279.144230);
	dessin.bezierCurveTo(330.113000, 279.422240, 331.718000, 277.548230, 332.201000, 274.956230);
	dessin.bezierCurveTo(332.683000, 272.364240, 331.862000, 270.038230, 330.366000, 269.759230);
	dessin.stroke();
	
// #path2598-3
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(330.366000, 269.760240);
	dessin.bezierCurveTo(328.870000, 269.481240, 327.265000, 271.356240, 326.782000, 273.948240);
	dessin.bezierCurveTo(326.300000, 276.540230, 327.121000, 278.866240, 328.617000, 279.145240);
	dessin.stroke();
	
// #path2600-7
	dessin.beginPath();
	dessin.moveTo(330.210000, 270.595240);
	dessin.bezierCurveTo(329.595000, 270.480230, 328.822000, 270.426240, 328.289000, 271.049240);
	dessin.lineTo(328.098000, 270.505240);
	dessin.bezierCurveTo(328.862000, 269.613230, 329.640000, 268.761230, 330.521000, 268.925230);
	dessin.lineTo(330.210000, 270.595240);
	
// #path2602-0
	dessin.beginPath();
	dessin.moveTo(327.144000, 277.194230);
	dessin.bezierCurveTo(327.476000, 278.133240, 328.130000, 278.190230, 328.772000, 278.309240);
	dessin.lineTo(328.460000, 279.978230);
	dessin.bezierCurveTo(327.716000, 279.839230, 327.153000, 278.721230, 326.770000, 277.631240);
	dessin.lineTo(327.144000, 277.194230);
	
// #path2604-0
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(330.366000, 269.760240);
	dessin.lineTo(313.695000, 267.537240);
	dessin.moveTo(328.617000, 279.144230);
	dessin.lineTo(304.904000, 276.096230);
	dessin.moveTo(302.821000, 276.559240);
	dessin.bezierCurveTo(307.616000, 277.739240, 313.160000, 271.963230, 315.205000, 263.659240);
	dessin.bezierCurveTo(317.249000, 255.354230, 315.019000, 247.666240, 310.225000, 246.485230);
	dessin.stroke();
	
// #g31923-8
	
// #path2606-1
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(310.224000, 246.485230);
	dessin.bezierCurveTo(305.430000, 245.304240, 299.885000, 251.080230, 297.841000, 259.384230);
	dessin.bezierCurveTo(295.796000, 267.689230, 298.027000, 275.378240, 302.820000, 276.559240);
	dessin.stroke();
	
// #path2608-3
	dessin.beginPath();
	dessin.moveTo(310.022000, 247.309240);
	dessin.bezierCurveTo(307.755000, 246.751240, 305.200000, 247.448240, 303.082000, 249.655240);
	dessin.lineTo(302.922000, 249.101240);
	dessin.bezierCurveTo(305.285000, 246.639240, 307.900000, 245.038240, 310.428000, 245.661240);
	dessin.lineTo(310.022000, 247.309240);
	
// #path2610-8
	dessin.beginPath();
	dessin.moveTo(297.966000, 270.435230);
	dessin.bezierCurveTo(298.916000, 273.712240, 300.853000, 275.200240, 303.024000, 275.734240);
	dessin.lineTo(302.618000, 277.383240);
	dessin.bezierCurveTo(300.346000, 276.823240, 298.561000, 274.280240, 297.567000, 270.851230);
	dessin.lineTo(297.966000, 270.435230);
	
// #path2614-5
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(316.239000, 260.134230);
	dessin.bezierCurveTo(316.239000, 260.134230, 322.948000, 259.441240, 325.030000, 256.896230);
	dessin.bezierCurveTo(327.112000, 254.351240, 331.276000, 248.336230, 331.276000, 248.336230);
	dessin.lineTo(333.358000, 232.836230);
	dessin.bezierCurveTo(333.358000, 232.836230, 330.583000, 229.598230, 321.097000, 237.232240);
	dessin.bezierCurveTo(311.612000, 244.867230, 312.769000, 246.717230, 313.000000, 248.105230);
	dessin.stroke();
	dessin.restore();
	
// #path2616-6
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(329.771000, 237.744240);
	dessin.lineTo(328.981000, 243.192240);
	dessin.bezierCurveTo(328.981000, 243.192240, 326.296000, 247.772230, 326.691000, 243.745240);
	dessin.bezierCurveTo(327.086000, 239.718230, 327.244000, 238.297240, 327.323000, 237.428240);
	dessin.bezierCurveTo(327.402000, 236.559240, 329.771000, 235.059240, 329.771000, 237.744240);
	dessin.stroke();
	
// #path31946-9
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(322.426000, 239.480230);
	dessin.bezierCurveTo(321.321000, 240.507240, 320.136000, 240.586230, 321.321000, 242.481230);
	dessin.bezierCurveTo(322.506000, 244.377240, 324.007000, 246.825230, 324.243000, 243.745240);
	dessin.bezierCurveTo(324.480000, 240.666240, 324.164000, 238.455230, 322.426000, 239.480230);
	dessin.stroke();
	
// #path31944-4
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(320.768000, 246.983240);
	dessin.bezierCurveTo(320.768000, 249.351240, 320.137000, 250.379230, 318.794000, 250.141230);
	dessin.bezierCurveTo(317.451000, 249.905240, 317.530000, 249.430240, 317.689000, 247.693230);
	dessin.bezierCurveTo(317.846000, 245.956230, 318.636000, 245.640230, 319.426000, 245.798240);
	dessin.bezierCurveTo(320.215000, 245.956230, 320.689000, 246.114240, 320.768000, 246.983240);
	dessin.stroke();
	
// #path31942-3
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(318.478000, 256.459230);
	dessin.bezierCurveTo(319.173000, 256.580230, 319.878000, 255.865240, 320.053000, 254.861230);
	dessin.bezierCurveTo(320.228000, 253.858240, 319.805000, 252.947240, 319.110000, 252.826230);
	dessin.bezierCurveTo(318.415000, 252.706230, 317.710000, 253.421230, 317.535000, 254.424240);
	dessin.bezierCurveTo(317.361000, 255.427230, 317.783000, 256.338230, 318.478000, 256.459230);
	dessin.stroke();
	dessin.restore();
	
// #path2619-2
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(255, 255, 255)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(241, 255, 255)';
	dessin.moveTo(278.946590, 90.064175);
	dessin.bezierCurveTo(282.319010, 98.534279, 282.266330, 107.674920, 281.475070, 114.090860);
	dessin.bezierCurveTo(281.265990, 116.695060, 279.511280, 120.949330, 279.439950, 122.417240);
	dessin.bezierCurveTo(280.852860, 120.507710, 284.556490, 118.183150, 284.743600, 116.641000);
	dessin.bezierCurveTo(280.785530, 113.379610, 285.225580, 94.311380, 278.946590, 90.064175);
	dessin.moveTo(298.681090, 112.892590);
	dessin.bezierCurveTo(306.264410, 114.649220, 313.207510, 119.545920, 317.675550, 126.361830);
	dessin.bezierCurveTo(319.534190, 126.250010, 323.219480, 131.953490, 325.975720, 130.263860);
	dessin.bezierCurveTo(318.183800, 123.101980, 311.237980, 114.932260, 298.681090, 112.892590);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	
// #path6760
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.fillStyle = 'rgb(145, 111, 111)';
	dessin.moveTo(463.051140, 138.166530);
	dessin.bezierCurveTo(463.051140, 138.166530, 492.618070, 153.225470, 498.494740, 133.391750);
	dessin.bezierCurveTo(504.371400, 113.558020, 489.312450, 112.639790, 489.312450, 112.639790);
	dessin.bezierCurveTo(489.312450, 112.639790, 482.150280, 94.826166, 468.376860, 111.170630);
	dessin.bezierCurveTo(454.603440, 127.515090, 453.868850, 124.576760, 463.051140, 138.166530);
	dessin.fill();
	dessin.stroke();
	
// #path6762
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(444.994690, 157.507140);
	dessin.bezierCurveTo(444.994690, 157.507140, 449.409830, 171.661560, 461.096970, 158.675850);
	dessin.bezierCurveTo(472.784100, 145.690140, 454.213810, 140.962770, 454.344400, 147.248430);
	dessin.bezierCurveTo(454.488890, 154.203100, 448.081990, 134.048040, 441.486970, 142.820240);
	dessin.bezierCurveTo(430.432490, 157.524060, 444.994690, 157.507140, 444.994690, 157.507140);
	dessin.stroke();
	
// #path6764
	dessin.save();
	dessin.beginPath();
	dessin.transform(1.038857, 0.000000, 0.000000, 1.038857, 5.038962, 4.108537);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.125000;
	dessin.fillStyle = 'rgb(108, 83, 83)';
	dessin.moveTo(429.547120, 153.427110);
	dessin.bezierCurveTo(427.736420, 153.123290, 425.919220, 151.468030, 424.682180, 148.995730);
	dessin.bezierCurveTo(424.441380, 148.514480, 424.175150, 147.889540, 424.090540, 147.606980);
	dessin.lineTo(423.936720, 147.093220);
	dessin.lineTo(422.795010, 147.019720);
	dessin.bezierCurveTo(422.167070, 146.979320, 421.240510, 146.829210, 420.735970, 146.686220);
	dessin.bezierCurveTo(415.858520, 145.303820, 415.426390, 141.491500, 419.462680, 135.453140);
	dessin.bezierCurveTo(421.285050, 132.726830, 422.370860, 131.842580, 423.755250, 131.957380);
	dessin.bezierCurveTo(425.430570, 132.096310, 426.901070, 133.398930, 429.654610, 137.183240);
	dessin.bezierCurveTo(430.429980, 138.248860, 431.196880, 139.243130, 431.358840, 139.392720);
	dessin.bezierCurveTo(432.317210, 140.277920, 433.079030, 139.558730, 433.087820, 137.760490);
	dessin.bezierCurveTo(433.091820, 136.957440, 433.441910, 136.402620, 434.166050, 136.052070);
	dessin.bezierCurveTo(435.858040, 135.232990, 438.711980, 135.892070, 440.453010, 137.503950);
	dessin.bezierCurveTo(442.478180, 139.378910, 442.675190, 142.024770, 441.014560, 145.045910);
	dessin.bezierCurveTo(439.290170, 148.183050, 435.495570, 151.830400, 432.763660, 152.976610);
	dessin.bezierCurveTo(432.100860, 153.254700, 430.654720, 153.584020, 430.278300, 153.542590);
	dessin.bezierCurveTo(430.209500, 153.534590, 429.880520, 153.483090, 429.547120, 153.427120);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	dessin.restore();
	dessin.restore();
	}
	if(this.calculerCalque()==2)
	{
	// #layer2
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -18.322690, -6.541822);
	dessin.restore();
	
// #g5843
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -12.327638, -4.108537);
	
// #g5841
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -0.033582, 1.675549);
	
// #path5533
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(402.943550, 102.864930);
	dessin.lineTo(403.783950, 108.726670);
	dessin.lineTo(413.868770, 116.542300);
	dessin.lineTo(416.109840, 125.474460);
	dessin.lineTo(418.350910, 126.590980);
	dessin.lineTo(437.680150, 112.355350);
	dessin.bezierCurveTo(445.444460, 110.997590, 451.785000, 109.842500, 450.006040, 109.843170);
	dessin.lineTo(448.605370, 106.772750);
	dessin.lineTo(415.269440, 103.423190);
	dessin.fill();
	
// #path5535
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(237.356590, 27.577074);
	dessin.bezierCurveTo(237.356590, 27.577074, 238.941270, 23.234830, 243.299130, 21.261083);
	dessin.bezierCurveTo(247.656990, 19.287335, 279.746690, 11.392346, 282.916050, 11.392346);
	dessin.bezierCurveTo(286.085400, 11.392346, 324.117640, 9.813347, 324.117640, 9.813347);
	dessin.lineTo(324.909980, 17.708337);
	dessin.lineTo(269.842460, 20.471584);
	dessin.bezierCurveTo(269.842460, 20.471584, 261.522910, 22.445331, 258.353550, 23.234830);
	dessin.bezierCurveTo(255.184200, 24.024328, 248.845490, 28.761323, 248.845490, 28.761323);
	dessin.fill();
	
// #path5537
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(230.621710, 104.553220);
	dessin.lineTo(242.110620, 109.684970);
	dessin.lineTo(267.465440, 41.393306);
	dessin.lineTo(267.861610, 27.182325);
	dessin.lineTo(253.995690, 25.603327);
	dessin.lineTo(248.449330, 29.550822);
	dessin.fill();
	dessin.stroke();
	
// #path5539
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(170.800160, 128.632940);
	dessin.lineTo(141.087470, 202.451090);
	dessin.lineTo(159.311260, 206.793340);
	dessin.lineTo(184.666080, 138.896430);
	dessin.fill();
	
// #path5541
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(197, 48, 52)';
	dessin.moveTo(403.725450, 105.792320);
	dessin.bezierCurveTo(403.725450, 105.792320, 381.843770, 115.411410, 377.982290, 125.030500);
	dessin.bezierCurveTo(374.120820, 134.649580, 361.249240, 188.516460, 357.387770, 193.646650);
	dessin.bezierCurveTo(353.526300, 198.776830, 350.951990, 207.113370, 350.951990, 207.113370);
	dessin.bezierCurveTo(350.951990, 207.113370, 352.418080, 227.740470, 351.595570, 237.894450);
	dessin.bezierCurveTo(363.277360, 241.297390, 368.328610, 242.383350, 368.328610, 242.383350);
	dessin.bezierCurveTo(368.328610, 242.383350, 361.892820, 213.526090, 365.110720, 209.037180);
	dessin.bezierCurveTo(368.328610, 204.548280, 371.546510, 201.983180, 371.546510, 201.983180);
	dessin.bezierCurveTo(371.546510, 201.983180, 375.917350, 201.822140, 394.715340, 202.624460);
	dessin.bezierCurveTo(410.965710, 188.195830, 430.755750, 167.354470, 436.547960, 144.268670);
	dessin.bezierCurveTo(442.340170, 121.182860, 438.478700, 111.563780, 438.478700, 111.563780);
	dessin.bezierCurveTo(438.478700, 111.563780, 424.319970, 116.693960, 420.458500, 121.824130);
	dessin.bezierCurveTo(416.597020, 126.954310, 415.926750, 125.876660, 415.926750, 125.876660);
	dessin.bezierCurveTo(415.926750, 125.876660, 416.597020, 119.900310, 412.091970, 115.411410);
	dessin.bezierCurveTo(407.586920, 110.922500, 403.081860, 105.792320, 403.725450, 105.792320);
	dessin.fill();
	
// #path5543
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(125, 0, 0)';
	dessin.moveTo(134.258490, 120.159120);
	dessin.bezierCurveTo(134.258490, 120.159120, 160.133210, 113.161150, 167.525990, 115.739350);
	dessin.bezierCurveTo(174.918770, 118.317550, 203.380970, 130.840240, 207.447000, 134.891690);
	dessin.bezierCurveTo(211.513020, 138.943150, 233.321720, 160.305380, 235.539550, 167.303360);
	dessin.bezierCurveTo(237.757380, 174.301320, 245.889440, 220.708920, 245.889440, 220.708920);
	dessin.lineTo(242.932330, 222.918810);
	dessin.bezierCurveTo(242.932330, 222.918810, 222.887720, 218.512670, 221.123640, 217.394090);
	dessin.bezierCurveTo(217.057610, 214.815890, 210.034470, 197.873430, 210.404100, 191.243780);
	dessin.bezierCurveTo(210.773740, 184.614120, 199.314940, 163.251900, 195.988190, 159.200440);
	dessin.bezierCurveTo(192.661440, 155.148990, 174.918770, 131.576860, 164.199230, 126.788780);
	dessin.bezierCurveTo(153.479710, 122.000690, 134.997760, 120.895750, 134.258490, 120.159120);
	dessin.fill();
	
// #path5545
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(197, 48, 52)';
	dessin.moveTo(63.272287, 141.703580);
	dessin.bezierCurveTo(64.510687, 137.480620, 92.233331, 112.205050, 111.540690, 105.792320);
	dessin.bezierCurveTo(130.848060, 99.379596, 164.957730, 95.531963, 182.977930, 103.868500);
	dessin.bezierCurveTo(200.998140, 112.205050, 225.262730, 128.046140, 235.107810, 148.034060);
	dessin.bezierCurveTo(243.345540, 164.770690, 247.705450, 193.265220, 247.335810, 205.189550);
	dessin.bezierCurveTo(247.048780, 214.162810, 245.405070, 223.786450, 245.405070, 223.786450);
	dessin.bezierCurveTo(245.405070, 223.786450, 240.543540, 217.656210, 236.394970, 190.440280);
	dessin.bezierCurveTo(235.199580, 182.598130, 233.660970, 164.549660, 216.526570, 145.741930);
	dessin.bezierCurveTo(198.858880, 126.348820, 170.367460, 116.020470, 160.726620, 116.516350);
	dessin.bezierCurveTo(139.244500, 117.621290, 118.620060, 125.671770, 107.679220, 130.801940);
	dessin.bezierCurveTo(96.738383, 135.932120, 72.843427, 149.481090, 67.038061, 146.916010);
	dessin.bezierCurveTo(63.270912, 145.251510, 62.133741, 145.586040, 63.272287, 141.703580);
	dessin.fill();
	
// #path5547
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(52, 48, 52)';
	dessin.moveTo(281.212260, 87.445970);
	dessin.bezierCurveTo(281.212260, 87.445970, 286.040650, 95.693555, 286.040650, 101.879250);
	dessin.bezierCurveTo(286.040650, 108.064930, 286.040650, 115.625220, 286.040650, 115.625220);
	dessin.bezierCurveTo(286.040650, 115.625220, 290.869050, 105.315740, 295.007670, 106.003040);
	dessin.bezierCurveTo(299.146290, 106.690330, 300.525830, 104.628440, 308.113310, 112.188730);
	dessin.bezierCurveTo(315.700780, 119.749010, 337.564310, 135.295920, 336.205210, 137.785210);
	dessin.bezierCurveTo(333.424440, 142.878330, 327.426890, 142.762720, 327.426890, 142.762720);
	dessin.bezierCurveTo(327.426890, 142.762720, 316.390560, 136.244180, 312.941700, 134.182280);
	dessin.bezierCurveTo(309.492850, 132.120390, 305.354230, 131.433090, 305.354230, 131.433090);
	dessin.lineTo(327.426890, 156.175850);
	dessin.bezierCurveTo(327.426890, 156.175850, 349.310840, 196.654060, 349.310840, 203.527050);
	dessin.bezierCurveTo(349.310840, 210.400040, 352.614350, 213.576090, 358.132520, 204.641220);
	dessin.bezierCurveTo(363.650690, 195.706330, 372.951750, 155.488550, 375.021060, 143.117170);
	dessin.bezierCurveTo(377.090370, 130.745790, 383.654040, 122.686230, 394.000590, 115.813250);
	dessin.bezierCurveTo(404.347150, 108.940250, 408.819830, 103.941140, 402.611890, 101.879250);
	dessin.bezierCurveTo(396.403960, 99.817351, 373.641520, 101.191950, 373.641520, 101.191950);
	dessin.bezierCurveTo(373.641520, 101.191950, 333.373450, 110.886540, 325.096200, 109.511950);
	dessin.bezierCurveTo(316.818960, 108.137340, 296.220190, 93.704068, 293.461110, 90.267575);
	dessin.bezierCurveTo(290.702030, 86.831081, 282.591800, 86.758671, 281.212260, 87.445970);
	dessin.fill();
	
// #path5549
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(197, 48, 52)';
	dessin.moveTo(173.289110, 101.077070);
	dessin.lineTo(190.847810, 40.813863);
	dessin.bezierCurveTo(190.847810, 40.813863, 210.357460, 29.636010, 222.550990, 29.150017);
	dessin.bezierCurveTo(234.744540, 28.664023, 250.840000, 29.636010, 252.790970, 32.551972);
	dessin.bezierCurveTo(254.741940, 35.467934, 257.180640, 36.925914, 255.229680, 42.271844);
	dessin.bezierCurveTo(253.278720, 47.617774, 228.891640, 110.796950, 228.891640, 110.796950);
	dessin.lineTo(224.989700, 115.170890);
	dessin.lineTo(198.651670, 111.282940);
	dessin.fill();
	dessin.stroke();
	
// #path5551
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(210, 48, 52)';
	dessin.moveTo(268.075950, 26.421047);
	dessin.bezierCurveTo(265.088440, 30.585621, 264.728710, 29.395629, 260.806840, 31.897864);
	dessin.bezierCurveTo(259.168630, 34.443224, 257.582170, 39.974625, 260.933800, 43.251919);
	dessin.bezierCurveTo(262.369130, 44.655412, 269.809340, 41.434454, 269.809340, 41.434454);
	dessin.bezierCurveTo(269.809340, 41.434454, 281.567720, 28.178030, 288.396100, 22.832100);
	dessin.bezierCurveTo(296.905290, 20.835730, 310.417000, 19.906202, 310.417000, 19.906202);
	dessin.bezierCurveTo(310.417000, 19.906202, 306.112030, 18.949141, 305.954790, 16.028189);
	dessin.bezierCurveTo(305.692790, 11.160801, 309.368980, 8.252291, 309.368980, 8.252291);
	dessin.bezierCurveTo(309.368980, 8.252291, 296.280640, 6.077739, 285.957390, 10.619928);
	dessin.bezierCurveTo(275.634130, 15.162117, 273.882760, 18.326379, 268.075950, 26.421047);
	dessin.fill();
	
// #path5553
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(224, 47, 44)';
	dessin.moveTo(328.806430, 7.375662);
	dessin.bezierCurveTo(328.806430, 7.375662, 327.426890, 3.595518, 325.702470, 3.595518);
	dessin.bezierCurveTo(323.978040, 3.595518, 322.598500, 11.499454, 322.598500, 14.248649);
	dessin.bezierCurveTo(322.598500, 16.997845, 324.322930, 23.527183, 327.082010, 23.527183);
	dessin.bezierCurveTo(329.841090, 23.527183, 329.841090, 20.090689, 331.565520, 19.747040);
	dessin.bezierCurveTo(333.289940, 19.403390, 357.431910, 16.654195, 359.156340, 16.310546);
	dessin.bezierCurveTo(360.880760, 15.966897, 364.674500, 13.905000, 363.984730, 12.530403);
	dessin.bezierCurveTo(363.294960, 11.155805, 360.535880, 5.657415, 360.535880, 5.657415);
	dessin.fill();
	dessin.stroke();
	
// #path5555
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(188, 37, 38)';
	dessin.moveTo(186.713680, 19.403390);
	dessin.bezierCurveTo(186.713680, 19.403390, 183.954600, 17.341494, 182.230170, 17.341494);
	dessin.bezierCurveTo(180.505740, 17.341494, 177.401780, 19.403390, 177.401780, 19.403390);
	dessin.lineTo(162.916590, 20.777988);
	dessin.bezierCurveTo(162.916590, 20.777988, 160.847280, 18.372443, 159.467740, 18.372443);
	dessin.bezierCurveTo(158.088200, 18.372443, 154.294460, 21.808936, 154.294460, 23.527183);
	dessin.bezierCurveTo(154.294460, 25.245430, 156.708660, 32.805716, 158.088200, 32.805716);
	dessin.bezierCurveTo(159.467740, 32.805716, 163.606370, 30.743820, 163.606370, 30.743820);
	dessin.lineTo(177.056890, 29.712872);
	dessin.bezierCurveTo(177.056890, 29.712872, 178.436430, 32.805716, 179.815970, 32.805716);
	dessin.bezierCurveTo(181.195510, 32.805716, 184.989250, 32.805716, 186.368790, 31.087470);
	dessin.bezierCurveTo(187.748330, 29.369223, 184.644370, 28.681924, 184.644370, 28.681924);
	dessin.bezierCurveTo(184.644370, 28.681924, 181.195510, 27.994625, 180.850630, 25.932729);
	dessin.bezierCurveTo(180.505740, 23.870833, 181.885280, 21.808936, 183.264830, 21.465287);
	dessin.bezierCurveTo(184.644370, 21.121638, 187.403450, 19.747040, 186.713680, 19.403390);
	dessin.fill();
	dessin.stroke();
	
// #path5557
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.fillStyle = 'rgb(155, 37, 38)';
	dessin.moveTo(363.294930, 10.124870);
	dessin.bezierCurveTo(363.294940, 13.095653, 361.962800, 15.529232, 360.286530, 15.620697);
	dessin.bezierCurveTo(358.610240, 15.712157, 357.196080, 13.428432, 357.092880, 10.463280);
	dessin.bezierCurveTo(356.989670, 7.498128, 358.234750, 4.923958, 359.904670, 4.649954);
	dessin.bezierCurveTo(361.574600, 4.375949, 363.065410, 6.501208, 363.271420, 9.449492);
	dessin.fill();
	
// #path5559
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(175, 14, 12)';
	dessin.moveTo(247.168640, 210.664600);
	dessin.bezierCurveTo(262.653140, 211.527280, 280.137940, 214.268320, 283.534770, 213.422160);
	dessin.bezierCurveTo(286.931590, 212.575990, 292.176620, 209.818430, 293.025830, 205.587610);
	dessin.bezierCurveTo(293.875040, 201.356790, 286.971450, 198.191200, 286.971450, 198.191200);
	dessin.lineTo(265.331780, 145.141660);
	dessin.bezierCurveTo(265.331780, 145.141660, 261.605160, 145.509970, 261.605160, 142.125310);
	dessin.bezierCurveTo(261.605160, 138.740650, 266.700410, 131.125180, 269.248030, 126.894360);
	dessin.bezierCurveTo(271.795650, 122.663540, 272.644850, 118.432720, 272.644850, 118.432720);
	dessin.bezierCurveTo(272.644850, 118.432720, 257.359130, 115.048060, 253.113080, 115.048060);
	dessin.bezierCurveTo(248.867050, 115.048060, 239.525770, 119.278880, 239.525770, 119.278880);
	dessin.lineTo(242.922600, 110.817240);
	dessin.lineTo(231.882910, 104.047920);
	dessin.lineTo(225.089250, 115.894220);
	dessin.lineTo(198.983680, 111.882470);
	dessin.lineTo(217.446390, 126.894360);
	dessin.lineTo(221.692420, 119.278880);
	dessin.bezierCurveTo(221.692420, 119.278880, 229.555140, 121.488760, 233.801180, 124.873420);
	dessin.bezierCurveTo(238.047210, 128.258080, 234.430530, 128.586680, 234.430530, 128.586680);
	dessin.lineTo(228.336300, 139.696350);
	dessin.bezierCurveTo(228.336300, 139.696350, 242.073400, 157.356260, 242.073400, 166.664070);
	dessin.bezierCurveTo(242.073400, 175.971870, 247.240290, 185.583040, 247.168640, 210.664600);
	dessin.fill();
	
// #path5561
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 48, 0)';
	dessin.moveTo(166.120750, 99.619543);
	dessin.bezierCurveTo(143.330790, 98.059727, 123.110600, 100.750950, 103.864520, 110.203430);
	dessin.bezierCurveTo(93.732996, 115.270760, 82.708982, 122.836880, 74.513334, 130.529940);
	dessin.bezierCurveTo(69.777340, 135.162500, 61.603527, 141.200470, 63.994716, 145.583630);
	dessin.bezierCurveTo(70.927518, 144.223790, 73.146026, 139.136480, 80.924700, 132.368750);
	dessin.bezierCurveTo(94.308579, 120.724270, 109.342440, 110.836360, 127.386860, 108.605750);
	dessin.bezierCurveTo(139.090890, 106.497900, 148.507860, 106.264360, 162.913900, 107.024190);
	dessin.bezierCurveTo(166.205940, 107.197820, 176.152090, 107.641150, 177.337140, 104.362110);
	dessin.bezierCurveTo(175.874430, 103.772180, 167.633780, 99.469557, 166.120750, 99.619543);
	dessin.fill();
	
// #path5563
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(224.435740, 30.211534);
	dessin.bezierCurveTo(215.217350, 30.730105, 204.719020, 32.086620, 196.787710, 37.658910);
	dessin.bezierCurveTo(192.724420, 40.904061, 188.278950, 46.510737, 187.936110, 52.078727);
	dessin.bezierCurveTo(186.335620, 56.039048, 184.373860, 60.123746, 183.529710, 64.451228);
	dessin.bezierCurveTo(182.486930, 69.712975, 179.768200, 74.487740, 179.239010, 79.863263);
	dessin.bezierCurveTo(178.578290, 84.927923, 177.767430, 90.121022, 175.030000, 94.543713);
	dessin.bezierCurveTo(172.648050, 98.892770, 177.125800, 104.764230, 181.826160, 101.939520);
	dessin.bezierCurveTo(187.313570, 99.328804, 188.385690, 92.645815, 189.392450, 87.292258);
	dessin.bezierCurveTo(190.974470, 79.367981, 197.478820, 58.100347, 197.507350, 54.888693);
	dessin.bezierCurveTo(199.317240, 50.890413, 201.203780, 44.971579, 207.163360, 42.681077);
	dessin.bezierCurveTo(215.618660, 39.431375, 226.351650, 39.630216, 235.681800, 42.381166);
	dessin.bezierCurveTo(240.194840, 44.139078, 236.916390, 51.157110, 242.034180, 51.907389);
	dessin.bezierCurveTo(248.088600, 52.522904, 251.777640, 44.990089, 249.293560, 39.996498);
	dessin.bezierCurveTo(246.729340, 35.216212, 244.729310, 34.548319, 237.357410, 31.308119);
	dessin.bezierCurveTo(232.131070, 29.473094, 228.277930, 30.514990, 224.435740, 30.211534);
	dessin.fill();
	
// #path5565
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(174.582760, 22.832641);
	dessin.bezierCurveTo(172.692210, 22.641798, 170.812340, 22.990791, 168.938130, 23.165520);
	dessin.bezierCurveTo(166.312030, 23.299296, 163.676220, 23.121350, 161.053870, 23.234210);
	dessin.bezierCurveTo(159.998690, 23.172260, 159.360950, 22.195126, 158.367580, 21.970012);
	dessin.bezierCurveTo(157.235940, 21.666538, 158.956830, 21.094391, 159.251420, 20.681564);
	dessin.bezierCurveTo(159.903080, 20.193750, 160.562820, 19.709976, 161.283150, 19.326132);
	dessin.bezierCurveTo(161.156340, 20.251357, 160.418300, 20.952766, 160.220610, 21.864458);
	dessin.bezierCurveTo(159.865850, 22.923115, 159.783380, 24.043268, 159.645780, 25.143763);
	dessin.bezierCurveTo(158.239900, 25.926076, 156.834010, 26.708391, 155.428140, 27.490701);
	dessin.bezierCurveTo(155.647570, 25.694406, 155.703570, 23.782750, 156.613990, 22.168506);
	dessin.bezierCurveTo(157.569490, 20.539750, 159.323330, 19.683367, 160.857950, 18.709574);
	dessin.bezierCurveTo(161.940260, 18.123785, 162.719930, 19.295168, 163.560630, 19.757088);
	dessin.bezierCurveTo(164.417000, 20.349619, 165.474140, 20.027817, 166.438680, 20.101765);
	dessin.bezierCurveTo(168.646810, 20.086075, 170.865380, 20.211198, 173.065960, 19.999530);
	dessin.bezierCurveTo(174.415090, 19.788704, 175.777550, 19.699008, 177.141560, 19.700505);
	dessin.bezierCurveTo(177.657520, 19.618315, 178.840610, 19.636605, 177.867860, 20.166554);
	dessin.bezierCurveTo(176.772830, 21.055251, 175.677800, 21.943952, 174.582760, 22.832645);
	dessin.fill();
	
// #path5567
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(307.927180, 8.443536);
	dessin.bezierCurveTo(305.547840, 10.356317, 302.557680, 11.645239, 299.450520, 11.347268);
	dessin.bezierCurveTo(295.537330, 10.987850, 291.304470, 11.718090, 287.432020, 12.649593);
	dessin.bezierCurveTo(281.852510, 13.489175, 277.936700, 18.629170, 275.509450, 21.844776);
	dessin.bezierCurveTo(272.625170, 23.937526, 270.665250, 28.328560, 268.052910, 30.755240);
	dessin.bezierCurveTo(264.646120, 34.205837, 261.098670, 33.789066, 259.691200, 34.241100);
	dessin.bezierCurveTo(260.253360, 33.189428, 262.023020, 31.426177, 260.980620, 31.832509);
	dessin.bezierCurveTo(263.583040, 30.281262, 264.803410, 27.965354, 267.291390, 26.258757);
	dessin.bezierCurveTo(269.850650, 24.294810, 272.732930, 22.552449, 274.396390, 19.690332);
	dessin.bezierCurveTo(275.639530, 17.868513, 277.524020, 16.627269, 278.750190, 14.786007);
	dessin.bezierCurveTo(279.917050, 12.902211, 282.072460, 12.110254, 283.847010, 10.917623);
	dessin.bezierCurveTo(286.150570, 9.447101, 288.037220, 9.607812, 290.725410, 9.277949);
	dessin.bezierCurveTo(297.026580, 8.886116, 297.599220, 8.833065, 302.553940, 8.210441);
	dessin.bezierCurveTo(303.935680, 8.432031, 306.293100, 7.501046, 307.109760, 8.306721);
	dessin.bezierCurveTo(306.177840, 9.118455, 306.374660, 9.084302, 307.927180, 8.443536);
	dessin.fill();
	
// #path5569
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(356.133950, 7.968336);
	dessin.bezierCurveTo(353.513670, 8.263989, 350.871830, 8.062132, 348.255160, 8.360785);
	dessin.bezierCurveTo(346.167930, 8.360686, 344.080290, 8.515702, 342.064170, 9.114042);
	dessin.bezierCurveTo(337.596350, 10.366494, 322.903190, 6.353622, 323.773260, 4.613286);
	dessin.bezierCurveTo(323.636430, 3.261947, 326.013760, 3.597641, 327.605600, 5.341602);
	dessin.bezierCurveTo(328.822550, 6.804383, 353.410650, 9.499133, 326.382570, 9.913513);
	dessin.bezierCurveTo(325.046950, 12.734789, 324.850360, 14.549135, 325.558710, 17.433861);
	dessin.bezierCurveTo(325.648110, 18.634762, 327.283830, 20.324835, 327.960680, 22.462659);
	dessin.bezierCurveTo(327.024750, 23.100421, 325.576050, 23.848704, 325.036460, 22.317078);
	dessin.bezierCurveTo(323.973930, 20.922149, 323.507430, 19.171805, 323.455000, 17.413291);
	dessin.bezierCurveTo(323.218210, 14.688375, 322.848140, 12.069853, 323.173310, 9.379877);
	dessin.bezierCurveTo(322.288830, 5.741394, 325.187530, 4.700502, 327.387380, 3.982464);
	dessin.bezierCurveTo(329.183550, 4.471208, 327.800860, 7.738563, 330.061460, 8.048887);
	dessin.bezierCurveTo(331.482290, 8.463275, 332.979170, 7.235483, 334.434740, 7.372632);
	dessin.bezierCurveTo(337.971250, 7.437048, 340.953540, 6.977193, 344.714750, 6.700899);
	dessin.bezierCurveTo(346.520680, 6.221055, 348.646060, 6.631546, 350.491610, 6.559070);
	dessin.bezierCurveTo(352.872010, 6.279720, 355.275570, 6.564040, 357.647630, 6.202396);
	dessin.bezierCurveTo(359.241470, 6.113240, 356.729040, 7.331569, 356.274930, 7.861597);
	dessin.fill();
	
// #path5571
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(221, 0, 0)';
	dessin.moveTo(180.929760, 103.385120);
	dessin.bezierCurveTo(185.098650, 105.113300, 189.053110, 107.534720, 192.926050, 109.980760);
	dessin.bezierCurveTo(196.559960, 112.008860, 200.516100, 113.007110, 204.454460, 114.112960);
	dessin.bezierCurveTo(209.523390, 115.859050, 212.709810, 120.440360, 216.749990, 123.525470);
	dessin.bezierCurveTo(219.612050, 127.115190, 224.223370, 129.000780, 226.514930, 133.150400);
	dessin.bezierCurveTo(229.319730, 137.363090, 231.909260, 142.631260, 233.215550, 147.676640);
	dessin.bezierCurveTo(235.437350, 152.600720, 236.609530, 156.637430, 239.284190, 161.421860);
	dessin.bezierCurveTo(241.392070, 165.620760, 244.945350, 183.855820, 247.109600, 188.053690);
	dessin.bezierCurveTo(249.139190, 193.937710, 244.344550, 221.177080, 245.712810, 217.384680);
	dessin.bezierCurveTo(245.414190, 211.791540, 240.266790, 186.543290, 239.260740, 179.914880);
	dessin.bezierCurveTo(237.343010, 175.502570, 235.777770, 162.311230, 231.171750, 152.330530);
	dessin.bezierCurveTo(223.742700, 142.318770, 218.461530, 131.148260, 214.386100, 128.527120);
	dessin.bezierCurveTo(210.784780, 125.068100, 207.318220, 121.419390, 203.177840, 118.516190);
	dessin.bezierCurveTo(199.485680, 116.028300, 182.382360, 108.213570, 177.224400, 106.929730);
	dessin.bezierCurveTo(176.209100, 105.851240, 179.692670, 104.713050, 180.620830, 103.608770);
	dessin.lineTo(180.843530, 103.447550);
	dessin.fill();
	
// #path5573
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(238, 0, 0)';
	dessin.moveTo(430.520830, 115.048140);
	dessin.bezierCurveTo(425.420880, 119.031470, 422.107900, 122.217430, 417.424950, 126.723510);
	dessin.bezierCurveTo(411.715460, 117.875140, 407.071830, 114.487300, 401.387370, 116.152870);
	dessin.bezierCurveTo(391.111380, 117.739320, 381.697250, 129.180660, 378.636750, 138.579130);
	dessin.bezierCurveTo(372.364290, 150.931920, 373.087760, 169.827620, 367.647630, 182.509930);
	dessin.bezierCurveTo(365.638740, 190.017360, 361.161840, 200.117390, 358.507010, 207.399450);
	dessin.bezierCurveTo(363.494070, 204.736790, 369.500300, 198.576460, 371.691070, 192.605220);
	dessin.bezierCurveTo(376.088160, 179.167600, 381.311960, 165.994160, 385.470670, 152.470770);
	dessin.bezierCurveTo(389.146460, 145.108150, 390.947210, 136.714380, 396.293810, 130.256840);
	dessin.bezierCurveTo(401.431090, 130.838720, 410.392450, 136.613310, 415.945980, 135.096990);
	dessin.bezierCurveTo(426.032570, 131.915770, 427.268320, 123.458370, 436.527750, 118.777140);
	dessin.bezierCurveTo(441.550780, 115.949460, 436.578950, 112.175020, 433.067540, 113.510600);
	dessin.bezierCurveTo(432.188730, 113.972220, 431.353530, 114.509960, 430.520830, 115.048140);
	dessin.fill();
	
// #path5575
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(135.363380, 105.947500);
	dessin.bezierCurveTo(135.363380, 112.289060, 119.441170, 124.494460, 99.405751, 133.511330);
	dessin.bezierCurveTo(79.370337, 142.528200, 62.467922, 145.095410, 61.234507, 139.308940);
	dessin.bezierCurveTo(60.001092, 133.522470, 74.882766, 121.475110, 94.842249, 112.102020);
	dessin.bezierCurveTo(114.801730, 102.728930, 132.620290, 99.420060, 135.082440, 104.629510);
	dessin.fill();
	
// #path5577
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(401.059420, 130.937810);
	dessin.bezierCurveTo(406.429010, 131.674390, 407.030740, 142.810720, 402.418330, 156.087340);
	dessin.bezierCurveTo(397.805930, 169.363960, 389.647550, 179.979100, 383.994010, 180.059860);
	dessin.bezierCurveTo(378.340480, 180.140660, 377.236500, 169.657760, 381.500860, 156.386110);
	dessin.bezierCurveTo(385.765230, 143.114470, 393.855640, 131.853980, 399.771700, 130.956200);
	dessin.fill();
	
// #path5579
	dessin.beginPath();
	dessin.globalAlpha = 0.9;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(277.677140, 21.879876);
	dessin.bezierCurveTo(277.677140, 24.734469, 274.125060, 30.228604, 269.655370, 34.287451);
	dessin.bezierCurveTo(265.185680, 38.346299, 261.414930, 39.501897, 261.139770, 36.897175);
	dessin.bezierCurveTo(260.864610, 34.292452, 264.184550, 28.869457, 268.637300, 24.650259);
	dessin.bezierCurveTo(273.090050, 20.431060, 277.065190, 18.941613, 277.614470, 21.286594);
	dessin.fill();
	
// #path5581
	dessin.beginPath();
	dessin.globalAlpha = 0.7;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(307.680050, 11.799838);
	dessin.bezierCurveTo(305.935840, 14.064384, 299.760940, 16.268012, 293.735080, 16.776359);
	dessin.bezierCurveTo(287.709230, 17.284706, 284.011790, 15.913918, 285.385040, 13.680667);
	dessin.bezierCurveTo(286.758300, 11.447416, 292.705580, 9.159400, 298.815970, 8.513570);
	dessin.bezierCurveTo(304.926360, 7.867740, 308.989930, 9.097673, 307.992840, 11.291166);
	dessin.fill();
	
// #path5583
	dessin.beginPath();
	dessin.globalAlpha = 0.1;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(399.574690, 102.955850);
	dessin.bezierCurveTo(399.574690, 109.297410, 383.652480, 121.502810, 363.617060, 130.519680);
	dessin.bezierCurveTo(343.581650, 139.536550, 326.679230, 142.103760, 325.445820, 136.317290);
	dessin.bezierCurveTo(324.212400, 130.530820, 339.094080, 118.483460, 359.053560, 109.110370);
	dessin.bezierCurveTo(379.013040, 99.737276, 396.831600, 96.428410, 399.293750, 101.637860);
	dessin.fill();
	
// #path5585
	dessin.beginPath();
	dessin.globalAlpha = 0.2;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(380.624380, 120.791020);
	dessin.bezierCurveTo(378.623350, 126.810980, 359.657270, 133.409220, 337.792710, 135.692030);
	dessin.bezierCurveTo(315.928140, 137.974830, 299.072830, 135.116580, 299.727840, 129.237140);
	dessin.bezierCurveTo(300.382850, 123.357710, 318.311280, 116.583510, 340.216170, 113.938760);
	dessin.bezierCurveTo(362.121060, 111.294010, 380.080080, 113.735230, 380.773570, 119.451850);
	dessin.fill();
	
// #path5587
	dessin.beginPath();
	dessin.globalAlpha = 0.3;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(354.173560, 111.742910);
	dessin.bezierCurveTo(367.980460, 110.361360, 369.586490, 121.448240, 357.800490, 136.780750);
	dessin.bezierCurveTo(346.014490, 152.113250, 325.099100, 166.146090, 310.566630, 168.471540);
	dessin.bezierCurveTo(296.034150, 170.796980, 293.140540, 160.573990, 304.031900, 145.384640);
	dessin.bezierCurveTo(314.923250, 130.195290, 335.660500, 115.533100, 350.863470, 112.272580);
	dessin.fill();
	
// #path5589
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(215.567280, 31.524569);
	dessin.bezierCurveTo(215.567280, 31.524569, 216.359620, 25.998076, 213.586440, 24.419079);
	dessin.bezierCurveTo(210.813250, 22.840080, 202.493700, 18.892585, 193.777970, 19.287335);
	dessin.bezierCurveTo(185.062250, 19.682084, 180.704390, 23.629579, 180.704390, 23.629579);
	dessin.lineTo(183.081410, 28.761323);
	dessin.bezierCurveTo(183.081410, 28.761323, 188.231600, 27.971823, 192.589460, 29.550822);
	dessin.bezierCurveTo(196.947330, 31.129819, 198.532010, 32.314068, 200.909020, 33.498317);
	dessin.bezierCurveTo(203.286040, 34.682565, 215.171110, 31.524569, 215.567280, 31.524569);
	dessin.fill();
	
// #path5591
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.996375;
	dessin.moveTo(269.484460, 114.309740);
	dessin.lineTo(280.861430, 85.499106);
	dessin.lineTo(280.406350, 76.945947);
	dessin.lineTo(272.214940, 71.543953);
	dessin.lineTo(272.670010, 66.592123);
	dessin.lineTo(270.394620, 58.952425);
	dessin.lineTo(263.568430, 53.087138);
	dessin.bezierCurveTo(263.568430, 53.087138, 257.197330, 67.942623, 255.377020, 71.994120);
	dessin.bezierCurveTo(253.556700, 76.045615, 251.281310, 83.698441, 251.281310, 83.698441);
	dessin.lineTo(246.275430, 99.004096);
	dessin.fill();
	
// #path5593
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(219.569400, 236.472600);
	dessin.lineTo(293.875040, 247.049650);
	dessin.lineTo(294.724240, 271.588410);
	dessin.lineTo(271.371040, 278.780800);
	dessin.lineTo(228.910680, 262.703690);
	dessin.lineTo(218.720190, 249.588140);
	dessin.fill();
	dessin.stroke();
	
// #path5595
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(55, 57, 54)';
	dessin.moveTo(245.585380, 222.918240);
	dessin.lineTo(247.086580, 219.328270);
	dessin.lineTo(251.289940, 219.328270);
	dessin.lineTo(269.604580, 242.962240);
	dessin.bezierCurveTo(269.604580, 242.962240, 268.703870, 265.100390, 269.604580, 267.493700);
	dessin.bezierCurveTo(270.505310, 269.887010, 273.507710, 282.152750, 273.507710, 282.152750);
	dessin.bezierCurveTo(273.507710, 282.152750, 264.800740, 260.014600, 264.800740, 256.424630);
	dessin.bezierCurveTo(264.800740, 252.834650, 263.900030, 245.953880, 263.900030, 245.953880);
	dessin.fill();
	dessin.stroke();
	
// #path5597
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(235.977700, 222.319910);
	dessin.lineTo(245.885620, 222.918240);
	dessin.lineTo(264.200260, 245.654720);
	dessin.bezierCurveTo(264.200260, 245.654720, 264.200260, 268.391190, 269.604580, 275.870300);
	dessin.bezierCurveTo(275.008910, 283.349400, 285.217070, 290.230180, 285.217070, 290.230180);
	dessin.lineTo(241.081780, 281.255260);
	dessin.bezierCurveTo(241.081780, 281.255260, 232.074580, 267.792860, 231.173860, 263.903730);
	dessin.bezierCurveTo(230.273130, 260.014600, 226.670250, 242.663070, 226.670250, 242.663070);
	dessin.fill();
	dessin.stroke();
	
// #path5599
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.fillStyle = 'rgb(48, 50, 50)';
	dessin.moveTo(367.301590, 203.148810);
	dessin.bezierCurveTo(362.614090, 217.901180, 363.124040, 223.485370, 368.836630, 242.491320);
	dessin.bezierCurveTo(343.313010, 225.741660, 334.602970, 252.010740, 332.972840, 275.811180);
	dessin.bezierCurveTo(335.707030, 348.840350, 355.737410, 359.067030, 389.533050, 359.490120);
	dessin.bezierCurveTo(424.751840, 359.942400, 445.120320, 317.400400, 447.208470, 273.450920);
	dessin.lineTo(447.062100, 246.342220);
	dessin.bezierCurveTo(445.068500, 222.906680, 437.523820, 200.959270, 425.445850, 194.934770);
	dessin.bezierCurveTo(403.381830, 183.929220, 409.038700, 189.461530, 396.067390, 201.292420);
	dessin.bezierCurveTo(386.158130, 201.820850, 367.943620, 203.148670, 367.301590, 203.148810);
	dessin.moveTo(398.157000, 217.090440);
	dessin.bezierCurveTo(410.023750, 216.742800, 418.454900, 214.943760, 423.898170, 231.763250);
	dessin.lineTo(425.702150, 238.415300);
	dessin.bezierCurveTo(432.608870, 269.523710, 422.926400, 308.159440, 401.861270, 326.847110);
	dessin.bezierCurveTo(383.210560, 343.392820, 370.087100, 319.181760, 367.755550, 306.284170);
	dessin.bezierCurveTo(361.880420, 273.784320, 364.726290, 258.859930, 381.720260, 229.319680);
	dessin.bezierCurveTo(386.357240, 221.259330, 391.500040, 217.285470, 398.157000, 217.090440);
	dessin.fill();
	
// #path5601
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.fillStyle = 'rgb(48, 50, 50)';
	dessin.moveTo(108.674850, 195.572640);
	dessin.bezierCurveTo(62.034318, 195.580640, 14.113926, 247.370630, 8.429756, 312.449240);
	dessin.bezierCurveTo(0.970432, 398.337760, 45.632741, 439.126980, 107.040590, 439.126990);
	dessin.bezierCurveTo(168.448430, 439.126990, 209.565400, 382.459820, 213.206030, 322.373300);
	dessin.lineTo(215.888690, 291.710090);
	dessin.bezierCurveTo(208.937170, 227.629230, 170.201000, 198.785760, 112.035880, 195.664820);
	dessin.bezierCurveTo(110.918570, 195.604820, 109.794220, 195.572420, 108.674850, 195.572620);
	dessin.moveTo(123.198210, 230.414400);
	dessin.bezierCurveTo(143.887480, 229.939110, 163.075140, 242.383900, 172.565290, 265.379060);
	dessin.lineTo(175.710480, 274.473560);
	dessin.bezierCurveTo(187.752120, 317.004130, 170.871050, 369.825830, 134.144690, 395.375080);
	dessin.bezierCurveTo(101.627830, 417.995940, 69.205624, 403.869420, 55.607545, 367.262020);
	dessin.bezierCurveTo(40.280517, 326.000100, 54.814374, 280.506660, 86.686902, 248.887340);
	dessin.bezierCurveTo(96.745397, 238.908750, 111.592020, 230.681040, 123.198210, 230.414400);
	dessin.fill();
	
// #line5603
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(114.895660, 405.605650);
	dessin.lineTo(114.868030, 405.553530);
	dessin.stroke();
	
// #line5605
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.moveTo(160.261340, 432.040650);
	dessin.lineTo(160.237660, 432.034760);
	dessin.stroke();
	
// #line5607
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(159.413730, 354.698060);
	dessin.lineTo(159.320980, 355.013700);
	dessin.stroke();
	
// #path5609
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(165.763310, 347.477540);
	dessin.lineTo(165.670610, 347.793150);
	dessin.moveTo(172.113920, 340.257000);
	dessin.lineTo(172.021220, 340.572610);
	dessin.stroke();
	
// #line5611
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(159.347640, 355.064820);
	dessin.lineTo(159.320980, 355.013700);
	dessin.stroke();
	
// #path5613
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(184.814010, 325.817890);
	dessin.lineTo(184.814010, 325.817890);
	dessin.lineTo(184.722210, 326.133490);
	dessin.moveTo(191.165520, 318.598330);
	dessin.lineTo(191.165520, 318.598330);
	dessin.lineTo(191.072820, 318.912950);
	dessin.stroke();
	
// #line5615
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(165.698180, 347.844270);
	dessin.lineTo(165.670560, 347.793150);
	dessin.stroke();
	
// #line5617
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(172.048750, 340.624690);
	dessin.lineTo(172.021120, 340.572630);
	dessin.stroke();
	
// #line5619
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(184.748890, 326.184630);
	dessin.lineTo(184.722240, 326.133510);
	dessin.stroke();
	
// #polyline5621
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.moveTo(66.923000, 434.092000);
	dessin.lineTo(66.923000, 434.092000);
	dessin.lineTo(66.387000, 434.227000);
	dessin.stroke();
	dessin.restore();
	
// #polyline5623
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.moveTo(67.109000, 434.092000);
	dessin.lineTo(67.109000, 434.092000);
	dessin.lineTo(66.573000, 434.226000);
	dessin.stroke();
	dessin.restore();
	
// #path5625
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.moveTo(72.623379, 429.200210);
	dessin.lineTo(72.623379, 429.200210);
	dessin.lineTo(72.366831, 429.264110);
	dessin.moveTo(72.781255, 429.236610);
	dessin.lineTo(72.781255, 429.236610);
	dessin.lineTo(72.525694, 429.299510);
	dessin.stroke();
	
// #path5627
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(251.098250, 272.780740);
	dessin.lineTo(251.050850, 272.773740);
	dessin.bezierCurveTo(251.022250, 272.772770, 250.991650, 272.778740, 250.962050, 272.784540);
	dessin.stroke();
	
// #path5629
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(71.499500, 429.362440);
	dessin.lineTo(71.578440, 429.350640);
	dessin.bezierCurveTo(71.612970, 429.348640, 71.648500, 429.354640, 71.684019, 429.360640);
	dessin.stroke();
	
// #path5631
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(71.541929, 428.040040);
	dessin.bezierCurveTo(71.482729, 427.999740, 71.424508, 427.959440, 71.363332, 427.923050);
	dessin.bezierCurveTo(71.313012, 427.892550, 71.260712, 427.865050, 71.208416, 427.837550);
	dessin.moveTo(71.542915, 428.040070);
	dessin.bezierCurveTo(71.512325, 428.006670, 71.480755, 427.973270, 71.440296, 427.950570);
	dessin.lineTo(71.421546, 427.940570);
	dessin.stroke();
	
// #path5633
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(185.681340, 324.832740);
	dessin.bezierCurveTo(185.721840, 324.818040, 185.762240, 324.803240, 185.802710, 324.789440);
	dessin.bezierCurveTo(185.844110, 324.773740, 185.884610, 324.759940, 185.927040, 324.745140);
	dessin.bezierCurveTo(185.969440, 324.729440, 186.012840, 324.714640, 186.055310, 324.698940);
	dessin.stroke();
	
// #path5635
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(172.981210, 339.271840);
	dessin.bezierCurveTo(173.021610, 339.257140, 173.061110, 339.243340, 173.101590, 339.228540);
	dessin.bezierCurveTo(173.142990, 339.213840, 173.184490, 339.200040, 173.225910, 339.184340);
	dessin.bezierCurveTo(173.268310, 339.168640, 173.311710, 339.154840, 173.354190, 339.139140);
	dessin.stroke();
	
// #path5637
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(166.630640, 346.492380);
	dessin.bezierCurveTo(166.671140, 346.477580, 166.711540, 346.463880, 166.751020, 346.449080);
	dessin.bezierCurveTo(166.792420, 346.434380, 166.833920, 346.419580, 166.875350, 346.404880);
	dessin.bezierCurveTo(166.918750, 346.389180, 166.961150, 346.374380, 167.004610, 346.358680);
	dessin.stroke();
	
// #path5639
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(160.280080, 353.712930);
	dessin.bezierCurveTo(160.319580, 353.698130, 160.359980, 353.684430, 160.400460, 353.669630);
	dessin.bezierCurveTo(160.441860, 353.654930, 160.483360, 353.639130, 160.524790, 353.625430);
	dessin.bezierCurveTo(160.567190, 353.609730, 160.611590, 353.594930, 160.653060, 353.579230);
	dessin.stroke();
	
// #path5641
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(147.578960, 368.152050);
	dessin.bezierCurveTo(147.619360, 368.137350, 147.659860, 368.124550, 147.700320, 368.109750);
	dessin.bezierCurveTo(147.741720, 368.094050, 147.783220, 368.080250, 147.824650, 368.064550);
	dessin.bezierCurveTo(147.867050, 368.049750, 147.909550, 368.035050, 147.952930, 368.018350);
	dessin.stroke();
	
// #path5643
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(134.878820, 382.593120);
	dessin.bezierCurveTo(134.919320, 382.578420, 134.958720, 382.564620, 134.999200, 382.549820);
	dessin.bezierCurveTo(135.040600, 382.535120, 135.082100, 382.520320, 135.123530, 382.505520);
	dessin.bezierCurveTo(135.166930, 382.489820, 135.209330, 382.475020, 135.251800, 382.460320);
	dessin.stroke();
	
// #path5645
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(115.829110, 404.252780);
	dessin.bezierCurveTo(115.869610, 404.238980, 115.909010, 404.224280, 115.949490, 404.209480);
	dessin.bezierCurveTo(115.990890, 404.194680, 116.032390, 404.180980, 116.073810, 404.165280);
	dessin.bezierCurveTo(116.116210, 404.149580, 116.158710, 404.135780, 116.202090, 404.120080);
	dessin.stroke();
	
// #path5647
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(173.546600, 339.975810);
	dessin.bezierCurveTo(173.616700, 339.868650, 173.686710, 339.761480, 173.704480, 339.639560);
	dessin.bezierCurveTo(173.721280, 339.535350, 173.699480, 339.420300, 173.637380, 339.335750);
	dessin.bezierCurveTo(173.573280, 339.247250, 173.463710, 339.192210, 173.355170, 339.139110);
	dessin.moveTo(172.987130, 339.802770);
	dessin.bezierCurveTo(173.045330, 339.822470, 173.104550, 339.842070, 173.162760, 339.861770);
	dessin.bezierCurveTo(173.223960, 339.882370, 173.286100, 339.902070, 173.348270, 339.919770);
	dessin.bezierCurveTo(173.414370, 339.940370, 173.481480, 339.958170, 173.547590, 339.977770);
	dessin.moveTo(172.987130, 339.802770);
	dessin.bezierCurveTo(173.045330, 339.738870, 173.102570, 339.674960, 173.129210, 339.593340);
	dessin.bezierCurveTo(173.149910, 339.531440, 173.153910, 339.457670, 173.124210, 339.402620);
	dessin.bezierCurveTo(173.096610, 339.348520, 173.038410, 339.310220, 172.981140, 339.271840);
	dessin.stroke();
	
// #path5649
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(166.636560, 347.023300);
	dessin.bezierCurveTo(166.694760, 347.043000, 166.753980, 347.062600, 166.812200, 347.081300);
	dessin.bezierCurveTo(166.874400, 347.101900, 166.935540, 347.121600, 166.997710, 347.140300);
	dessin.bezierCurveTo(167.062810, 347.160900, 167.129930, 347.178600, 167.197020, 347.197300);
	dessin.moveTo(166.636560, 347.023260);
	dessin.bezierCurveTo(166.693760, 346.959360, 166.752010, 346.894480, 166.779640, 346.813840);
	dessin.bezierCurveTo(166.800340, 346.751940, 166.802340, 346.677190, 166.773640, 346.623120);
	dessin.bezierCurveTo(166.746040, 346.568020, 166.688740, 346.529720, 166.630560, 346.492340);
	dessin.stroke();
	
// #path5651
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(160.846460, 354.415910);
	dessin.bezierCurveTo(160.917460, 354.308740, 160.986580, 354.201570, 161.004340, 354.078670);
	dessin.bezierCurveTo(161.020140, 353.975440, 160.998340, 353.859430, 160.937240, 353.774870);
	dessin.bezierCurveTo(160.873140, 353.686370, 160.764560, 353.632300, 160.654050, 353.578230);
	dessin.moveTo(160.286000, 354.242870);
	dessin.bezierCurveTo(160.345200, 354.263570, 160.403420, 354.283170, 160.462630, 354.302870);
	dessin.bezierCurveTo(160.523830, 354.322570, 160.585970, 354.342170, 160.648130, 354.360870);
	dessin.bezierCurveTo(160.714230, 354.380570, 160.780350, 354.399170, 160.846460, 354.418870);
	dessin.moveTo(160.286000, 354.242890);
	dessin.bezierCurveTo(160.345200, 354.179990, 160.401450, 354.115080, 160.429080, 354.034450);
	dessin.bezierCurveTo(160.449780, 353.972550, 160.452780, 353.898760, 160.423080, 353.842720);
	dessin.bezierCurveTo(160.395480, 353.788620, 160.337280, 353.751320, 160.280000, 353.712950);
	dessin.stroke();
	
// #path5653
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(148.146320, 368.856010);
	dessin.bezierCurveTo(148.215420, 368.749820, 148.286440, 368.642660, 148.304200, 368.518770);
	dessin.bezierCurveTo(148.320000, 368.415530, 148.297200, 368.299510, 148.237100, 368.215950);
	dessin.bezierCurveTo(148.173000, 368.127450, 148.063440, 368.073390, 147.953910, 368.018320);
	dessin.moveTo(147.585860, 368.682970);
	dessin.bezierCurveTo(147.645060, 368.702670, 147.703280, 368.722270, 147.761500, 368.741970);
	dessin.bezierCurveTo(147.823700, 368.762570, 147.884840, 368.781270, 147.947010, 368.799970);
	dessin.bezierCurveTo(148.013110, 368.820570, 148.079230, 368.838270, 148.146320, 368.857970);
	dessin.moveTo(147.585860, 368.682960);
	dessin.bezierCurveTo(147.644060, 368.619060, 147.701310, 368.555130, 147.728940, 368.474510);
	dessin.bezierCurveTo(147.750640, 368.412610, 147.752640, 368.337860, 147.722940, 368.281820);
	dessin.bezierCurveTo(147.695340, 368.228720, 147.638040, 368.190320, 147.579860, 368.152040);
	dessin.stroke();
	
// #path5655
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.418803;
	dessin.moveTo(116.394500, 404.956730);
	dessin.bezierCurveTo(116.464600, 404.849570, 116.534620, 404.742410, 116.552380, 404.619510);
	dessin.bezierCurveTo(116.568180, 404.517260, 116.546380, 404.401230, 116.485280, 404.316690);
	dessin.bezierCurveTo(116.420180, 404.228190, 116.311620, 404.174110, 116.202090, 404.120040);
	dessin.moveTo(115.834040, 404.783690);
	dessin.bezierCurveTo(115.893240, 404.803390, 115.951460, 404.822990, 116.009680, 404.842690);
	dessin.bezierCurveTo(116.071880, 404.863390, 116.133020, 404.881990, 116.195180, 404.900690);
	dessin.bezierCurveTo(116.261280, 404.921390, 116.327400, 404.939090, 116.394500, 404.958690);
	dessin.stroke();
	
// #path5657
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(115.834040, 404.783690);
	dessin.bezierCurveTo(115.892240, 404.719790, 115.949490, 404.654900, 115.977120, 404.575260);
	dessin.bezierCurveTo(115.997820, 404.512360, 116.000820, 404.438590, 115.971120, 404.382560);
	dessin.bezierCurveTo(115.942520, 404.328460, 115.886220, 404.291160, 115.828040, 404.252780);
	dessin.stroke();
	
// #path5659
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.418803;
	dessin.moveTo(160.032410, 419.763560);
	dessin.bezierCurveTo(160.022410, 419.819560, 160.013710, 419.872700, 160.004810, 419.928730);
	dessin.bezierCurveTo(159.995810, 419.986730, 159.988010, 420.043780, 159.982110, 420.101790);
	dessin.bezierCurveTo(159.976110, 420.163690, 159.970310, 420.224680, 159.965310, 420.286630);
	dessin.moveTo(159.967310, 420.286630);
	dessin.bezierCurveTo(160.128150, 420.293630, 160.288980, 420.300430, 160.445870, 420.277630);
	dessin.bezierCurveTo(160.625460, 420.253030, 160.801090, 420.190130, 160.956010, 420.101640);
	dessin.bezierCurveTo(161.103030, 420.018040, 161.231300, 419.911870, 161.360570, 419.805690);
	dessin.moveTo(160.967850, 419.441910);
	dessin.bezierCurveTo(161.010250, 419.478310, 161.054650, 419.515610, 161.097110, 419.553010);
	dessin.bezierCurveTo(161.141510, 419.592310, 161.185910, 419.631710, 161.228340, 419.672960);
	dessin.bezierCurveTo(161.273740, 419.716260, 161.318140, 419.760460, 161.362540, 419.804710);
	dessin.stroke();
	
// #path5661
	dessin.beginPath();
	dessin.moveTo(234.097970, 269.684670);
	dessin.lineTo(241.384930, 281.236170);
	dessin.lineTo(258.938770, 284.865110);
	dessin.lineTo(285.436280, 289.816450);
	dessin.lineTo(291.728630, 290.145820);
	dessin.lineTo(303.983750, 288.825410);
	dessin.lineTo(314.251610, 287.835340);
	dessin.bezierCurveTo(314.251610, 287.835340, 324.519470, 285.855180, 324.850020, 285.855180);
	dessin.bezierCurveTo(325.181560, 285.855180, 241.383940, 263.743260, 241.383940, 263.743260);
	
// #path5663
	dessin.beginPath();
	dessin.moveTo(212.642620, 277.451880);
	dessin.lineTo(216.005380, 307.608240);
	dessin.lineTo(213.062960, 333.576230);
	dessin.lineTo(200.872960, 369.595370);
	dessin.lineTo(189.523650, 389.280780);
	dessin.lineTo(165.984340, 417.342950);
	dessin.lineTo(139.082270, 434.515330);
	dessin.lineTo(102.932610, 440.379070);
	dessin.lineTo(73.088127, 434.095510);
	dessin.bezierCurveTo(73.088127, 434.095510, 51.650539, 425.718730, 51.650539, 425.300880);
	dessin.bezierCurveTo(51.650539, 424.883030, 75.609209, 395.982180, 75.609209, 395.982180);
	dessin.lineTo(96.626452, 407.290820);
	dessin.lineTo(114.701280, 404.359950);
	dessin.lineTo(134.037140, 395.564330);
	dessin.lineTo(145.806800, 385.931040);
	dessin.bezierCurveTo(145.806800, 385.931040, 156.735770, 372.109370, 157.156110, 372.109370);
	dessin.bezierCurveTo(157.576450, 372.109370, 167.244390, 355.774680, 167.244390, 355.774680);
	dessin.lineTo(174.390250, 338.602290);
	dessin.lineTo(177.753010, 322.686440);
	
// #path5665
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(97.896367, 408.136380);
	dessin.bezierCurveTo(134.822580, 417.763750, 175.095760, 386.203400, 187.847200, 337.646640);
	dessin.bezierCurveTo(200.598650, 289.087920, 181.000320, 241.918440, 144.074110, 232.291060);
	dessin.stroke();
	
// #path5667
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(144.074110, 232.291060);
	dessin.bezierCurveTo(107.147900, 222.663670, 66.874719, 254.224040, 54.123272, 302.780790);
	dessin.bezierCurveTo(41.371825, 351.339500, 60.970157, 398.508980, 97.897353, 408.136380);
	dessin.stroke();
	
// #path5669
	dessin.beginPath();
	dessin.moveTo(184.347290, 270.559710);
	dessin.bezierCurveTo(175.832840, 250.066130, 160.907640, 237.542260, 143.861960, 233.098250);
	dessin.lineTo(144.286260, 231.481880);
	dessin.bezierCurveTo(161.463160, 235.961300, 176.253190, 249.527340, 184.833750, 270.177260);
	dessin.lineTo(184.347290, 270.559710);
	
// #path5671
	dessin.beginPath();
	dessin.moveTo(98.108513, 407.329170);
	dessin.bezierCurveTo(116.402390, 412.098620, 135.690890, 407.064690, 151.819900, 394.426780);
	dessin.lineTo(152.055730, 394.995070);
	dessin.bezierCurveTo(135.628730, 407.868950, 116.317540, 413.801510, 97.684221, 408.944560);
	dessin.lineTo(98.108513, 407.329170);
	
// #path5673
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(151.776490, 202.959580);
	dessin.bezierCurveTo(102.531010, 190.120110, 48.822586, 232.208470, 31.816380, 296.965230);
	dessin.bezierCurveTo(14.811162, 361.721980, 40.947533, 424.629360, 90.193991, 437.467840);
	dessin.stroke();
	
// #path5675
	dessin.beginPath();
	dessin.moveTo(151.564340, 203.766780);
	dessin.bezierCurveTo(127.111320, 197.391770, 101.384440, 204.253460, 79.824498, 221.147590);
	dessin.lineTo(79.587684, 220.579310);
	dessin.bezierCurveTo(101.445620, 203.450190, 127.196180, 195.688890, 151.987640, 202.152380);
	dessin.lineTo(151.564340, 203.766780);
	
// #path5677
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(70.390421, 432.535180);
	dessin.bezierCurveTo(71.807358, 432.904870, 73.227255, 433.228340, 74.448821, 433.465290);
	dessin.moveTo(133.482600, 198.437880);
	dessin.bezierCurveTo(132.961610, 198.289430, 132.439640, 198.147850, 131.996600, 198.032820);
	dessin.bezierCurveTo(82.752111, 185.187450, 29.039736, 227.270890, 12.027610, 292.025690);
	dessin.bezierCurveTo(-4.984515, 356.780470, 21.145936, 419.689820, 70.389434, 432.534210);
	dessin.moveTo(71.138358, 432.725930);
	dessin.lineTo(90.933048, 437.656620);
	dessin.moveTo(131.246690, 197.841090);
	dessin.lineTo(151.035450, 202.770810);
	dessin.moveTo(91.966150, 406.207360);
	dessin.bezierCurveTo(127.450750, 410.301360, 162.829780, 378.954340, 174.652720, 334.358860);
	dessin.bezierCurveTo(186.671030, 288.592380, 169.950970, 244.058850, 136.813790, 230.934260);
	dessin.moveTo(57.895522, 371.273670);
	dessin.lineTo(109.122340, 333.729610);
	dessin.moveTo(100.018810, 330.387750);
	dessin.lineTo(53.518410, 358.558090);
	dessin.moveTo(50.787155, 343.268510);
	dessin.lineTo(111.997650, 301.743530);
	dessin.moveTo(50.276032, 329.932540);
	dessin.lineTo(104.330800, 334.207450);
	dessin.moveTo(100.497370, 319.884340);
	dessin.lineTo(73.203574, 393.941090);
	dessin.moveTo(64.590451, 383.558620);
	dessin.lineTo(125.892720, 340.891160);
	dessin.moveTo(111.518110, 341.368000);
	dessin.lineTo(83.724036, 402.131060);
	dessin.moveTo(93.566617, 406.808090);
	dessin.lineTo(111.517120, 341.368000);
	dessin.moveTo(105.768460, 406.774660);
	dessin.lineTo(129.245610, 352.349250);
	dessin.moveTo(115.830090, 404.865310);
	dessin.lineTo(106.247020, 353.781760);
	dessin.moveTo(128.287500, 401.045620);
	dessin.lineTo(122.537850, 357.122620);
	dessin.moveTo(137.870570, 396.272230);
	dessin.lineTo(131.641380, 359.032970);
	dessin.moveTo(150.807520, 388.632860);
	dessin.lineTo(144.578330, 347.574870);
	dessin.moveTo(160.390590, 378.607280);
	dessin.lineTo(136.433900, 359.510800);
	dessin.moveTo(167.576910, 365.717670);
	dessin.lineTo(144.578330, 347.575870);
	dessin.moveTo(75.582568, 261.638270);
	dessin.lineTo(104.330800, 334.207450);
	dessin.moveTo(66.642839, 272.756170);
	dessin.lineTo(112.955760, 322.749350);
	dessin.moveTo(60.415618, 284.811040);
	dessin.lineTo(118.225860, 306.516900);
	dessin.moveTo(54.726161, 300.571570);
	dessin.lineTo(118.225860, 306.516900);
	dessin.moveTo(51.518318, 315.465900);
	dessin.lineTo(109.122340, 333.729610);
	dessin.moveTo(84.075310, 250.840870);
	dessin.lineTo(124.934610, 295.535670);
	dessin.moveTo(97.372416, 240.589170);
	dessin.lineTo(120.142080, 311.768110);
	dessin.moveTo(108.348740, 235.029240);
	dessin.lineTo(117.746310, 324.658700);
	dessin.moveTo(119.518470, 231.689350);
	dessin.lineTo(110.080450, 327.522730);
	dessin.moveTo(130.496770, 230.581290);
	dessin.lineTo(120.143070, 311.768110);
	dessin.moveTo(132.427790, 230.610790);
	dessin.lineTo(135.474800, 311.291270);
	dessin.moveTo(146.065320, 232.847540);
	dessin.lineTo(118.225860, 306.516900);
	dessin.moveTo(154.161400, 240.155590);
	dessin.lineTo(126.371280, 305.084390);
	dessin.moveTo(162.786360, 249.225490);
	dessin.lineTo(114.393420, 295.535670);
	dessin.stroke();
	
// #path5679
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(119.733580, 368.068470);
	dessin.bezierCurveTo(137.827150, 372.785820, 157.560670, 357.321230, 163.808610, 333.529040);
	dessin.bezierCurveTo(170.056550, 309.736850, 160.453750, 286.624040, 142.360170, 281.906700);
	dessin.bezierCurveTo(124.266590, 277.189360, 104.534070, 292.653950, 98.286123, 316.446130);
	dessin.bezierCurveTo(92.038180, 340.238320, 101.640990, 363.351130, 119.733580, 368.068470);
	dessin.lineTo(119.733580, 368.068470);
	dessin.lineTo(119.733580, 368.068470);
	dessin.fill();
	dessin.stroke();
	
// #path5681
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(20, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.777778;
	dessin.fillStyle = 'rgb(133, 121, 121)';
	dessin.moveTo(164.928590, 329.755670);
	dessin.bezierCurveTo(161.439870, 353.298280, 144.014380, 370.382110, 125.576080, 368.336590);
	dessin.bezierCurveTo(107.137770, 366.291080, 94.355211, 345.856020, 96.708835, 322.187490);
	dessin.bezierCurveTo(99.062460, 298.518950, 115.701030, 280.177120, 134.284230, 280.765550);
	dessin.bezierCurveTo(152.867430, 281.353990, 166.674290, 300.659890, 165.464680, 324.364650);
	dessin.fill();
	dessin.stroke();
	
// #path5683
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(146.713600, 283.469980);
	dessin.bezierCurveTo(129.869220, 282.915450, 113.872430, 298.085080, 108.347760, 318.833320);
	dessin.bezierCurveTo(102.642510, 340.559820, 110.154450, 361.719030, 125.446720, 368.894350);
	dessin.stroke();
	
// #polygon5685
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(105.487000, 330.647000);
	dessin.lineTo(148.272000, 283.153000);
	dessin.lineTo(141.003000, 311.015000);
	dessin.fill();
	dessin.restore();
	
// #polyline5687
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(148.272000, 283.153000);
	dessin.lineTo(141.003000, 311.015000);
	dessin.lineTo(105.487000, 330.647000);
	dessin.stroke();
	dessin.restore();
	
// #polygon5689
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(130.908000, 336.858000);
	dessin.lineTo(142.619000, 346.549000);
	dessin.lineTo(156.751000, 347.357000);
	dessin.lineTo(137.773000, 317.879000);
	dessin.fill();
	dessin.restore();
	
// #polyline5691
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(137.773000, 317.879000);
	dessin.lineTo(130.908000, 336.858000);
	dessin.lineTo(142.619000, 346.549000);
	dessin.lineTo(156.751000, 347.357000);
	dessin.stroke();
	dessin.restore();
	
// #polygon5693
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(152.713000, 315.457000);
	dessin.lineTo(185.825000, 233.485000);
	dessin.fill();
	dessin.restore();
	
// #line5695
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(189.351960, 231.994130);
	dessin.lineTo(156.679520, 312.588100);
	dessin.stroke();
	
// #path5697
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(64.830225, 145.706520);
	dessin.bezierCurveTo(64.830225, 145.706520, 64.830225, 150.756180, 83.581947, 143.181680);
	dessin.bezierCurveTo(102.333670, 135.607190, 137.337740, 109.901720, 170.246000, 117.931420);
	dessin.bezierCurveTo(195.078910, 123.991800, 223.967260, 145.706520, 232.076170, 169.946060);
	dessin.bezierCurveTo(240.185070, 194.184610, 238.664530, 219.433890, 245.760070, 222.464080);
	dessin.moveTo(64.830225, 145.706520);
	dessin.bezierCurveTo(60.775772, 142.676320, 63.309682, 139.140780, 75.473041, 129.042440);
	dessin.bezierCurveTo(87.636400, 118.942150, 131.222020, 80.563359, 194.065550, 109.348190);
	dessin.bezierCurveTo(256.909070, 138.131040, 249.307340, 221.454340, 245.760070, 222.465070);
	dessin.moveTo(245.760070, 222.464080);
	dessin.bezierCurveTo(245.760070, 222.464080, 230.555620, 221.958710, 223.967260, 218.928530);
	dessin.bezierCurveTo(217.378900, 215.899330, 216.872710, 213.878880, 213.324440, 199.738640);
	dessin.bezierCurveTo(209.777170, 185.599400, 191.215560, 120.182160, 133.439850, 120.687510);
	dessin.stroke();
	
// #path5699
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(234.609090, 125.506900);
	dessin.lineTo(192.545000, 239.128150);
	dessin.bezierCurveTo(192.545000, 239.128150, 183.328990, 204.700800, 183.376350, 207.775240);
	dessin.lineTo(220.926170, 119.950890);
	dessin.bezierCurveTo(220.926170, 119.951880, 227.007360, 115.407580, 234.609090, 125.506900);
	dessin.lineTo(234.609090, 125.506900);
	dessin.fill();
	dessin.stroke();
	
// #polyline5701
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(179.769000, 208.853000);
	dessin.lineTo(149.887000, 278.710000);
	dessin.lineTo(138.984000, 279.518000);
	dessin.lineTo(128.485000, 308.996000);
	dessin.lineTo(104.661000, 327.167000);
	dessin.stroke();
	dessin.restore();
	
// #path5703
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(109.265410, 324.101240);
	dessin.bezierCurveTo(109.265410, 324.101240, 108.468140, 344.350020, 112.851170, 348.716360);
	dessin.stroke();
	
// #path5705
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(112.851170, 348.716360);
	dessin.bezierCurveTo(117.234200, 353.082710, 166.640510, 352.686470, 166.640510, 352.686470);
	dessin.lineTo(169.031350, 346.730310);
	dessin.lineTo(161.858840, 339.187300);
	dessin.lineTo(167.039150, 334.422760);
	dessin.lineTo(168.632710, 312.587120);
	dessin.lineTo(194.929920, 244.697920);
	dessin.lineTo(193.734990, 213.334190);
	dessin.bezierCurveTo(193.734990, 213.334190, 192.937720, 210.951910, 183.375370, 207.776220);
	dessin.stroke();
	
// #polygon5707
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(164.990000, 130.857000);
	dessin.lineTo(137.658000, 201.257000);
	dessin.fill();
	dessin.restore();
	
// #line5709
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(141.824390, 200.307920);
	dessin.lineTo(168.793550, 131.091400);
	dessin.stroke();
	
// #polygon5711
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(178.656000, 143.281000);
	dessin.lineTo(155.465000, 206.640000);
	dessin.fill();
	dessin.restore();
	
// #path5713
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(159.394990, 205.600420);
	dessin.lineTo(182.278130, 143.306550);
	dessin.moveTo(126.811360, 231.125980);
	dessin.lineTo(93.826126, 317.342800);
	dessin.bezierCurveTo(93.826126, 317.342800, 92.869990, 326.393050, 96.694536, 329.728030);
	dessin.moveTo(166.641500, 352.686470);
	dessin.lineTo(174.890520, 356.484530);
	dessin.moveTo(167.039150, 334.423740);
	dessin.lineTo(180.836520, 339.248250);
	dessin.moveTo(168.402800, 323.087580);
	dessin.lineTo(183.539160, 326.858110);
	dessin.moveTo(168.402800, 323.087580);
	dessin.lineTo(181.917970, 311.775980);
	dessin.moveTo(172.728600, 305.851290);
	dessin.lineTo(181.917970, 298.309250);
	dessin.moveTo(190.435380, 42.709599);
	dessin.bezierCurveTo(197.255630, 27.759227, 262.387370, 20.624225, 255.908530, 41.010649);
	dessin.bezierCurveTo(249.429700, 61.397073, 228.628550, 112.025410, 228.628550, 112.025410);
	dessin.bezierCurveTo(228.628550, 112.025410, 228.968970, 119.161400, 199.983920, 111.685230);
	dessin.moveTo(190.435380, 42.709599);
	dessin.lineTo(174.408010, 101.152320);
	dessin.moveTo(242.609460, 112.364610);
	dessin.lineTo(237.493290, 126.295410);
	dessin.lineTo(234.083160, 128.673740);
	dessin.moveTo(242.609460, 112.364610);
	dessin.bezierCurveTo(242.609460, 112.364610, 242.268050, 107.948120, 233.060920, 104.888440);
	dessin.moveTo(241.245800, 109.986280);
	dessin.lineTo(265.115670, 44.747750);
	dessin.stroke();
	
// #path5715
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 2.791955;
	dessin.lineCap = 'round';
	dessin.moveTo(192.948570, 22.598468);
	dessin.bezierCurveTo(216.798700, 31.353766, 215.543590, 120.160320, 149.640230, 275.885660);
	dessin.moveTo(186.506250, 20.929997);
	dessin.bezierCurveTo(186.506250, 22.180613, 216.171150, 15.719095, 216.171150, 30.103150);
	dessin.stroke();
	
// #path5717
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(310.082700, 20.280109);
	dessin.lineTo(291.120800, 21.822732);
	dessin.bezierCurveTo(291.120800, 21.822732, 287.251850, 22.594536, 282.220540, 28.377653);
	dessin.bezierCurveTo(277.189230, 34.161754, 270.610740, 43.415529, 261.711460, 43.030119);
	dessin.moveTo(309.065380, 7.857516);
	dessin.lineTo(288.668790, 9.599726);
	dessin.bezierCurveTo(288.668790, 9.599726, 287.307110, 9.783583, 284.951800, 10.802167);
	dessin.bezierCurveTo(282.578720, 11.828616, 278.005250, 14.192202, 272.767720, 20.214235);
	dessin.lineTo(270.816960, 22.506049);
	dessin.bezierCurveTo(268.612620, 25.123298, 266.208960, 28.373720, 263.145180, 30.171973);
	dessin.bezierCurveTo(262.852120, 30.344031, 262.570900, 30.540669, 262.236400, 30.578030);
	dessin.stroke();
	
// #path5719
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(263.146160, 30.170990);
	dessin.bezierCurveTo(258.229310, 32.232737, 255.749670, 43.767511, 265.115670, 44.747750);
	dessin.stroke();
	
// #path5721
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(309.065380, 7.857516);
	dessin.bezierCurveTo(303.504200, 10.255514, 304.278780, 19.894699, 310.082700, 20.280109);
	dessin.moveTo(306.600540, 11.026334);
	dessin.lineTo(322.080290, 10.255514);
	dessin.moveTo(307.034700, 18.320613);
	dessin.lineTo(323.245610, 17.265651);
	dessin.moveTo(329.432370, 7.942070);
	dessin.bezierCurveTo(328.658780, 2.157969, 321.692500, -0.540885, 322.466100, 13.725188);
	dessin.moveTo(322.693040, 14.084052);
	dessin.bezierCurveTo(322.693040, 14.084052, 325.949240, 31.462900, 330.978570, 19.123878);
	dessin.moveTo(309.065380, 7.857516);
	dessin.bezierCurveTo(309.065380, 7.857516, 311.067450, 6.903822, 311.708820, 10.411841);
	dessin.moveTo(310.619480, 20.552452);
	dessin.bezierCurveTo(310.683580, 20.552452, 311.963400, 20.106084, 312.219940, 18.639166);
	dessin.moveTo(327.222110, 7.432778);
	dessin.lineTo(359.455460, 4.939411);
	dessin.moveTo(328.259160, 19.068820);
	dessin.lineTo(360.825030, 15.950144);
	dessin.moveTo(360.825030, 15.951127);
	dessin.bezierCurveTo(365.616570, 15.561785, 363.759550, 5.329737, 359.455460, 4.940394);
	dessin.stroke();
	
// #path5723
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(359.455460, 4.939411);
	dessin.bezierCurveTo(356.186440, 8.382539, 357.120860, 14.492075, 360.825030, 15.950144);
	dessin.moveTo(327.819080, 11.232803);
	dessin.bezierCurveTo(326.388330, 13.133308, 326.627120, 14.795880, 327.342490, 16.221504);
	dessin.stroke();
	
// #path5725
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(281.145010, 12.212060);
	dessin.bezierCurveTo(281.145010, 12.212060, 238.880620, 16.090740, 237.490330, 28.558560);
	dessin.moveTo(272.348360, 20.713695);
	dessin.bezierCurveTo(272.012870, 20.766785, 271.672450, 20.821846, 271.327100, 20.877888);
	dessin.bezierCurveTo(264.050000, 22.072462, 254.392930, 24.046706, 248.068020, 27.324658);
	dessin.bezierCurveTo(246.576090, 28.097444, 245.233160, 28.754215, 244.654940, 29.783614);
	dessin.moveTo(184.227900, 21.308524);
	dessin.bezierCurveTo(184.227900, 21.308524, 203.210510, 18.282269, 208.146110, 31.522875);
	dessin.moveTo(185.467220, 29.026558);
	dessin.bezierCurveTo(185.467220, 29.026558, 187.019340, 28.799441, 189.221710, 28.829920);
	dessin.bezierCurveTo(191.983560, 28.869250, 195.966960, 29.125860, 198.804790, 31.432421);
	dessin.bezierCurveTo(199.647450, 32.116721, 200.342100, 33.036003, 200.792050, 34.244342);
	dessin.moveTo(184.227900, 21.308524);
	dessin.bezierCurveTo(180.052080, 22.065580, 181.712740, 29.223196, 185.467220, 29.026558);
	dessin.moveTo(186.506250, 20.929997);
	dessin.bezierCurveTo(184.227900, 15.256013, 176.650840, 17.206660, 176.650840, 24.795896);
	dessin.bezierCurveTo(176.650840, 32.447073, 182.825760, 36.729844, 189.222700, 28.829920);
	dessin.moveTo(176.874820, 30.364678);
	dessin.lineTo(162.129200, 31.676252);
	dessin.bezierCurveTo(161.602290, 34.562895, 154.756390, 33.512849, 155.283310, 25.378927);
	dessin.bezierCurveTo(155.810220, 17.245987, 161.865750, 18.295050, 162.656120, 19.869136);
	dessin.bezierCurveTo(163.445500, 21.443221, 177.401730, 19.606624, 177.401730, 19.606624);
	dessin.moveTo(266.758560, 27.363002);
	dessin.bezierCurveTo(266.758560, 27.363002, 251.600490, 23.355524, 249.124800, 29.828840);
	dessin.moveTo(245.760070, 222.464080);
	dessin.lineTo(264.099340, 245.742060);
	dessin.bezierCurveTo(264.099340, 245.742060, 264.099340, 290.213660, 291.801640, 289.703390);
	dessin.bezierCurveTo(319.503950, 289.191150, 336.947270, 280.502700, 336.947270, 280.502700);
	dessin.moveTo(285.132370, 289.703390);
	dessin.bezierCurveTo(284.619270, 289.703390, 242.552230, 281.012980, 242.552230, 281.012980);
	dessin.bezierCurveTo(242.552230, 281.012980, 228.701570, 270.789790, 227.162280, 242.675490);
	dessin.moveTo(227.162280, 242.675490);
	dessin.lineTo(235.948070, 222.393280);
	dessin.moveTo(228.188470, 238.074170);
	dessin.lineTo(219.980890, 237.052630);
	dessin.lineTo(219.467790, 249.831150);
	dessin.lineTo(229.214660, 262.100350);
	dessin.moveTo(271.280720, 277.946420);
	dessin.lineTo(295.905430, 271.301040);
	dessin.lineTo(295.392340, 248.298360);
	dessin.lineTo(270.254530, 242.675490);
	dessin.stroke();
	
// #path5727
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(270.255520, 242.675490);
	dessin.bezierCurveTo(270.255520, 242.675490, 266.663840, 264.144410, 272.306920, 274.878870);
	dessin.moveTo(289.750240, 249.831150);
	dessin.lineTo(290.775450, 271.301040);
	dessin.stroke();
	
// #path5729
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(270.255520, 242.675490);
	dessin.lineTo(251.273890, 219.161540);
	dessin.lineTo(246.671800, 219.516480);
	dessin.moveTo(256.775870, 226.297540);
	dessin.lineTo(284.620260, 230.407270);
	dessin.bezierCurveTo(284.620260, 230.407270, 294.367130, 230.919500, 298.985000, 227.340700);
	dessin.bezierCurveTo(303.601890, 223.762880, 301.036400, 198.203880, 301.036400, 198.203880);
	dessin.lineTo(281.730140, 182.118920);
	dessin.moveTo(287.697850, 199.225430);
	dessin.bezierCurveTo(288.210950, 199.225430, 266.151730, 146.574660, 266.151730, 146.574660);
	dessin.bezierCurveTo(266.151730, 146.574660, 257.430060, 141.973350, 267.176930, 129.706100);
	dessin.bezierCurveTo(276.924790, 117.437860, 277.436900, 92.901398, 271.280720, 88.302040);
	dessin.moveTo(252.812190, 81.144424);
	dessin.lineTo(275.346030, 98.346298);
	dessin.moveTo(246.142920, 98.524261);
	dessin.bezierCurveTo(246.142920, 99.036502, 272.584190, 117.928470, 272.584190, 117.928470);
	dessin.bezierCurveTo(272.584190, 117.928470, 248.442970, 111.412880, 241.526030, 118.459400);
	dessin.moveTo(275.384510, 209.959890);
	dessin.bezierCurveTo(275.384510, 209.959890, 271.576740, 172.723560, 269.794720, 155.292610);
	dessin.moveTo(268.203130, 207.915840);
	dessin.lineTo(259.995550, 127.150780);
	dessin.moveTo(261.020760, 205.871780);
	dessin.lineTo(252.812190, 124.594490);
	dessin.moveTo(253.326280, 205.871780);
	dessin.lineTo(245.630810, 122.038210);
	dessin.moveTo(243.857660, 172.373540);
	dessin.bezierCurveTo(242.013470, 154.338920, 238.448440, 119.481920, 238.448440, 119.481920);
	dessin.moveTo(271.280720, 88.301056);
	dessin.lineTo(273.579790, 83.390027);
	dessin.bezierCurveTo(273.579790, 83.390027, 283.273380, 87.253960, 284.935020, 94.979859);
	dessin.bezierCurveTo(286.596670, 102.706740, 287.982030, 106.294390, 286.596670, 114.021290);
	dessin.moveTo(286.595680, 114.022260);
	dessin.bezierCurveTo(286.595680, 114.022260, 294.350350, 101.879880, 300.997920, 107.122240);
	dessin.bezierCurveTo(307.644500, 112.366570, 333.400980, 133.891540, 333.400980, 133.891540);
	dessin.bezierCurveTo(333.400980, 133.891540, 340.602100, 138.858610, 333.400980, 141.617420);
	dessin.moveTo(333.400980, 141.617420);
	dessin.bezierCurveTo(333.400980, 141.617420, 330.631250, 145.756650, 322.876570, 140.514300);
	dessin.bezierCurveTo(315.122890, 135.269970, 305.982860, 123.681110, 288.812850, 138.582330);
	dessin.moveTo(279.396540, 87.529253);
	dessin.bezierCurveTo(286.596670, 86.149839, 289.919960, 86.425132, 297.121080, 93.876721);
	dessin.bezierCurveTo(304.322200, 101.327330, 318.723450, 112.366570, 335.063610, 109.881080);
	dessin.bezierCurveTo(351.403780, 107.398520, 366.082300, 104.362440, 373.005160, 102.155180);
	dessin.bezierCurveTo(379.928030, 99.947908, 391.561510, 100.499490, 399.038920, 101.327330);
	dessin.bezierCurveTo(406.516320, 102.155180, 409.008790, 107.398520, 395.991910, 114.572840);
	dessin.bezierCurveTo(382.976020, 121.749150, 379.098190, 128.371910, 375.774900, 141.064880);
	dessin.bezierCurveTo(372.451610, 153.758840, 364.696940, 205.638770, 352.510890, 209.226430);
	dessin.moveTo(369.681870, 202.603660);
	dessin.lineTo(393.499440, 201.775820);
	dessin.bezierCurveTo(393.499440, 201.775820, 395.991910, 202.328370, 400.977830, 197.636580);
	dessin.bezierCurveTo(405.962770, 192.945800, 446.951320, 151.275290, 438.365830, 112.917160);
	dessin.moveTo(404.577400, 109.054200);
	dessin.bezierCurveTo(404.577400, 109.054200, 415.100830, 113.469710, 415.100830, 120.920320);
	dessin.bezierCurveTo(415.100830, 128.371910, 418.424120, 127.267780, 420.640300, 122.852290);
	dessin.bezierCurveTo(422.855500, 118.436790, 429.779350, 113.745000, 446.396780, 110.434600);
	dessin.moveTo(446.396780, 110.434600);
	dessin.bezierCurveTo(453.320630, 110.158340, 458.582840, 104.638700, 405.685500, 102.707730);
	dessin.stroke();
	
// #path5731
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(284.658740, 117.885210);
	dessin.bezierCurveTo(284.658740, 118.160500, 281.889000, 128.923470, 272.749960, 134.993680);
	dessin.stroke();
	
// #path5733
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(279.396540, 87.529253);
	dessin.bezierCurveTo(279.396540, 87.529253, 283.550650, 80.354923, 279.672820, 76.767266);
	dessin.bezierCurveTo(275.794990, 73.179610, 262.224560, 62.141347, 253.916340, 75.387852);
	dessin.stroke();
	
// #path5735
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 2.791955;
	dessin.lineCap = 'round';
	dessin.moveTo(262.779100, 52.759757);
	dessin.bezierCurveTo(262.779100, 52.759757, 276.073250, 57.450552, 272.748970, 70.145488);
	dessin.stroke();
	
// #path5737
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(306.512730, 131.869110);
	dessin.bezierCurveTo(306.512730, 131.869110, 341.261230, 168.771150, 347.205270, 193.828700);
	dessin.bezierCurveTo(353.148310, 218.885260, 352.692440, 233.009770, 350.863060, 241.664770);
	dessin.moveTo(353.149300, 237.108680);
	dessin.bezierCurveTo(354.521830, 237.564880, 368.695150, 242.119990, 368.695150, 242.119990);
	dessin.moveTo(369.681870, 202.603660);
	dessin.bezierCurveTo(364.579520, 205.673170, 360.008020, 217.062440, 368.695150, 242.119000);
	dessin.stroke();
	
// #line5739
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(365.951050, 206.128390);
	dessin.lineTo(362.750120, 197.473370);
	dessin.stroke();
	
// #path5741
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(20, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.464027;
	dessin.fillStyle = 'rgb(133, 121, 121)';
	dessin.moveTo(431.605910, 273.611060);
	dessin.bezierCurveTo(431.605910, 293.367720, 417.095040, 308.799450, 401.901090, 304.913200);
	dessin.bezierCurveTo(386.858120, 301.065560, 381.206370, 294.650260, 381.206370, 274.893600);
	dessin.bezierCurveTo(381.206370, 255.136950, 386.956960, 241.839580, 402.544670, 243.591470);
	dessin.bezierCurveTo(425.367990, 246.156560, 429.614960, 251.144830, 431.390720, 269.214780);
	dessin.fill();
	dessin.stroke();
	
// #path5743
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(350.863060, 241.664770);
	dessin.lineTo(413.045480, 264.899490);
	dessin.lineTo(419.446360, 269.911790);
	dessin.lineTo(427.676640, 269.911790);
	dessin.lineTo(430.419730, 277.656370);
	dessin.lineTo(423.561010, 284.034330);
	dessin.lineTo(351.777750, 261.711010);
	dessin.lineTo(345.833720, 260.343410);
	dessin.lineTo(345.833720, 266.721340);
	dessin.bezierCurveTo(345.833720, 266.721340, 337.146590, 273.099300, 337.603440, 273.099300);
	dessin.bezierCurveTo(338.061280, 273.099300, 336.947270, 280.501730, 336.947270, 280.501730);
	dessin.stroke();
	
// #path5745
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(347.205270, 256.698720);
	dessin.lineTo(349.948360, 245.764680);
	dessin.moveTo(351.777750, 257.610130);
	dessin.lineTo(354.520840, 246.676100);
	dessin.stroke();
	
// #path5747
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(288.812850, 138.582330);
	dessin.bezierCurveTo(315.199850, 167.859720, 339.432830, 194.739130, 340.804380, 215.240580);
	dessin.bezierCurveTo(342.175930, 235.742040, 332.574110, 243.941850, 334.403500, 249.409360);
	dessin.bezierCurveTo(336.232880, 254.876870, 333.030960, 263.076660, 329.831010, 266.267110);
	dessin.stroke();
	
// #path5749
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(291.151390, 136.489120);
	dessin.bezierCurveTo(309.804440, 157.186220, 327.362230, 176.721200, 336.711450, 193.665490);
	dessin.bezierCurveTo(340.931670, 201.315690, 343.503070, 208.488040, 343.940190, 215.032160);
	dessin.bezierCurveTo(344.818380, 228.147900, 341.454630, 236.488290, 339.092410, 242.301880);
	dessin.bezierCurveTo(338.220150, 244.447210, 337.457410, 246.149110, 337.327160, 247.622910);
	dessin.bezierCurveTo(337.302460, 247.905080, 337.302460, 248.170530, 337.385360, 248.418300);
	dessin.bezierCurveTo(338.070150, 250.464310, 338.226050, 252.815120, 337.949760, 255.214100);
	dessin.bezierCurveTo(337.462320, 259.462470, 335.599390, 263.844530, 333.518380, 266.735110);
	dessin.moveTo(343.141910, 251.289220);
	dessin.bezierCurveTo(344.618050, 251.563530, 346.201750, 249.720050, 346.677350, 247.171610);
	dessin.bezierCurveTo(347.153940, 244.624170, 346.343830, 242.336290, 344.867690, 242.062970);
	dessin.bezierCurveTo(343.391550, 241.788660, 341.807860, 243.632140, 341.331270, 246.179580);
	dessin.bezierCurveTo(340.855670, 248.727020, 341.665770, 251.015880, 343.141910, 251.289220);
	dessin.stroke();
	
// #path5751
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(317.121990, 273.543700);
	dessin.bezierCurveTo(312.099560, 273.543700, 314.610780, 276.045920, 309.817270, 277.865800);
	dessin.bezierCurveTo(305.023760, 279.685680, 307.534970, 280.368010, 307.078120, 282.187890);
	dessin.bezierCurveTo(306.622250, 284.007770, 304.339960, 285.826680, 304.111040, 283.324460);
	dessin.bezierCurveTo(303.882120, 280.822250, 301.599820, 280.595120, 297.491100, 281.050340);
	dessin.bezierCurveTo(293.382380, 281.505570, 283.338500, 279.685680, 286.534510, 274.909350);
	dessin.moveTo(320.545930, 275.135470);
	dessin.bezierCurveTo(316.437210, 276.500150, 317.806780, 278.320030, 313.242190, 279.457570);
	dessin.bezierCurveTo(308.676610, 280.594140, 310.046190, 284.006800, 311.187830, 285.143360);
	dessin.stroke();
	
// #path5753
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.113985;
	dessin.lineCap = 'round';
	dessin.moveTo(287.697850, 199.225430);
	dessin.bezierCurveTo(287.697850, 199.225430, 292.246660, 198.556860, 292.452880, 203.694010);
	dessin.bezierCurveTo(292.659110, 208.832160, 287.708710, 212.530910, 286.677580, 211.708000);
	dessin.bezierCurveTo(285.646450, 210.886040, 285.234000, 215.613220, 273.272920, 213.352870);
	dessin.bezierCurveTo(261.312830, 211.091530, 248.526850, 209.653130, 249.351750, 210.064100);
	dessin.stroke();
	
// #path5755
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(319.500000, 175.461740);
	dessin.bezierCurveTo(316.747040, 172.260480, 311.837700, 175.048500, 311.927870, 183.006730);
	dessin.bezierCurveTo(312.018170, 190.794710, 317.434790, 188.037710, 315.140650, 193.067710);
	dessin.bezierCurveTo(312.845530, 198.097700, 329.827060, 199.013050, 329.827060, 199.013050);
	dessin.lineTo(329.598140, 229.654130);
	dessin.moveTo(409.825790, 304.712760);
	dessin.bezierCurveTo(419.167120, 306.203270, 428.839980, 294.339130, 431.429150, 278.217780);
	dessin.bezierCurveTo(434.018320, 262.095450, 428.543970, 247.816590, 419.201660, 246.327050);
	dessin.stroke();
	
// #path5757
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(419.201660, 246.327050);
	dessin.bezierCurveTo(412.511660, 245.260300, 405.650960, 251.042440, 401.272860, 260.499730);
	dessin.moveTo(397.206570, 275.838460);
	dessin.bezierCurveTo(395.696880, 290.967770, 401.220570, 303.295970, 409.825790, 304.712760);
	dessin.stroke();
	
// #path5759
	dessin.beginPath();
	dessin.moveTo(419.068450, 247.151950);
	dessin.bezierCurveTo(414.529510, 246.428320, 409.767580, 248.575610, 405.969670, 253.235920);
	dessin.lineTo(405.766410, 252.706970);
	dessin.bezierCurveTo(409.786330, 247.776280, 414.531490, 244.738230, 419.333880, 245.504130);
	dessin.lineTo(419.068450, 247.151950);
	
// #path5761
	dessin.beginPath();
	dessin.moveTo(399.416830, 294.035320);
	dessin.bezierCurveTo(401.776090, 300.189110, 405.679580, 303.205520, 409.958020, 303.887860);
	dessin.lineTo(409.692590, 305.536670);
	dessin.bezierCurveTo(405.313500, 304.837620, 401.474150, 300.774090, 399.058650, 294.474800);
	dessin.lineTo(399.416830, 294.035320);
	
// #path5763
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(419.200670, 246.327050);
	dessin.lineTo(399.669430, 243.991980);
	dessin.moveTo(409.825790, 304.712760);
	dessin.lineTo(392.638030, 301.209660);
	dessin.stroke();
	
// #path5765
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(406.674190, 244.828670);
	dessin.bezierCurveTo(405.152660, 243.704890, 403.540360, 243.041250, 402.012910, 242.824940);
	dessin.stroke();
	
// #path5767
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(402.012910, 242.823960);
	dessin.bezierCurveTo(395.922840, 241.852570, 389.692660, 246.557120, 385.312580, 254.535700);
	dessin.moveTo(380.017820, 272.335360);
	dessin.bezierCurveTo(378.509120, 287.463690, 384.031820, 299.791900, 392.637040, 301.209660);
	dessin.stroke();
	
// #path5769
	dessin.beginPath();
	dessin.moveTo(406.563680, 245.147240);
	dessin.bezierCurveTo(405.059910, 244.037220, 403.389390, 243.861220, 401.880680, 243.648850);
	dessin.lineTo(402.146110, 242.000050);
	dessin.bezierCurveTo(403.690340, 242.219290, 405.244430, 243.372570, 406.783720, 244.510130);
	dessin.lineTo(406.563680, 245.147240);
	
// #path5771
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(391.465800, 334.294950);
	dessin.bezierCurveTo(409.677790, 336.769640, 428.114740, 311.938200, 432.643810, 278.833260);
	dessin.bezierCurveTo(437.174850, 245.728300, 426.084060, 216.884480, 407.873070, 214.409790);
	dessin.stroke();
	
// #path5773
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(407.873070, 214.408810);
	dessin.bezierCurveTo(393.758950, 212.492580, 379.510640, 226.974940, 371.572440, 249.401490);
	dessin.moveTo(367.208150, 266.509970);
	dessin.bezierCurveTo(367.009820, 267.687820, 366.830240, 268.862730, 366.694070, 269.871480);
	dessin.bezierCurveTo(362.163030, 302.976440, 373.253820, 331.820250, 391.464820, 334.293960);
	dessin.stroke();
	
// #path5775
	dessin.beginPath();
	dessin.moveTo(428.619950, 235.359580);
	dessin.bezierCurveTo(423.810650, 222.852440, 416.149710, 216.377160, 407.759590, 215.236660);
	dessin.lineTo(407.985550, 213.581950);
	dessin.bezierCurveTo(416.473360, 214.735230, 424.088900, 222.257600, 428.953460, 234.909280);
	dessin.lineTo(428.619950, 235.359580);
	
// #path5777
	dessin.beginPath();
	dessin.moveTo(391.579280, 333.468090);
	dessin.bezierCurveTo(400.559460, 334.688220, 409.735020, 329.543190, 417.085130, 319.644450);
	dessin.lineTo(417.286420, 320.166520);
	dessin.bezierCurveTo(409.732060, 330.342520, 400.584130, 336.375380, 391.353320, 335.121800);
	dessin.lineTo(391.579280, 333.468090);
	
// #path5779
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(381.936010, 330.178340);
	dessin.bezierCurveTo(393.259670, 330.355310, 404.280400, 320.397560, 411.968960, 304.826800);
	dessin.moveTo(421.048800, 246.799980);
	dessin.bezierCurveTo(418.902680, 231.337360, 413.180660, 220.012990, 405.682540, 214.243640);
	dessin.moveTo(398.887950, 302.766030);
	dessin.lineTo(377.403000, 324.563340);
	dessin.moveTo(392.638030, 332.348230);
	dessin.lineTo(392.638030, 301.209660);
	dessin.moveTo(395.762990, 302.766030);
	dessin.lineTo(406.700840, 323.785640);
	dessin.moveTo(406.700840, 305.879800);
	dessin.lineTo(400.841660, 326.899390);
	dessin.moveTo(380.527960, 287.586590);
	dessin.lineTo(380.918700, 327.288730);
	dessin.moveTo(384.043660, 297.317210);
	dessin.lineTo(371.542840, 310.550920);
	dessin.moveTo(396.935220, 243.991980);
	dessin.lineTo(391.076050, 220.637310);
	dessin.moveTo(395.372250, 217.912900);
	dessin.bezierCurveTo(395.372250, 218.302230, 385.313570, 254.536690, 385.313570, 254.536690);
	dessin.moveTo(381.700180, 232.314650);
	dessin.bezierCurveTo(382.090930, 232.703990, 391.856550, 245.548370, 391.856550, 245.548370);
	dessin.moveTo(396.935220, 243.991980);
	dessin.lineTo(408.262820, 216.744860);
	dessin.moveTo(401.623150, 215.577830);
	dessin.bezierCurveTo(402.013890, 215.577830, 406.673210, 244.828670, 406.673210, 244.828670);
	dessin.moveTo(402.012910, 242.823960);
	dessin.lineTo(419.982150, 226.476470);
	dessin.moveTo(414.122980, 220.637310);
	dessin.lineTo(411.388770, 245.937720);
	dessin.moveTo(387.961940, 359.902100);
	dessin.bezierCurveTo(413.952280, 363.433720, 440.265270, 327.994670, 446.731280, 280.746540);
	dessin.bezierCurveTo(453.197290, 233.499390, 437.369240, 192.334250, 411.377910, 188.801660);
	dessin.stroke();
	
// #path5781
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(411.376930, 188.801660);
	dessin.bezierCurveTo(410.698060, 188.710260, 410.021170, 188.644350, 409.439000, 188.611890);
	dessin.moveTo(380.658200, 202.223170);
	dessin.bezierCurveTo(374.282970, 208.858710, 368.790860, 217.330840, 364.569650, 226.455830);
	dessin.moveTo(353.339730, 263.159250);
	dessin.bezierCurveTo(353.056540, 264.841490, 352.801970, 266.517820, 352.607580, 267.958200);
	dessin.bezierCurveTo(346.141580, 315.205350, 361.970620, 356.370490, 387.961940, 359.902100);
	dessin.stroke();
	
// #path5783
	dessin.beginPath();
	dessin.moveTo(358.280270, 330.098690);
	dessin.bezierCurveTo(365.155770, 347.979960, 376.078810, 357.444120, 388.074430, 359.075230);
	dessin.lineTo(387.848470, 360.729950);
	dessin.bezierCurveTo(375.756150, 359.086060, 364.877510, 348.573790, 357.945770, 330.549000);
	dessin.lineTo(358.280270, 330.098690);
	
// #path5785
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(370.621240, 357.720400);
	dessin.bezierCurveTo(370.724840, 357.735100, 370.829440, 357.747900, 370.917250, 357.758700);
	dessin.stroke();
	
// #path5787
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(333.911120, 281.819190);
	dessin.bezierCurveTo(332.578050, 323.283220, 348.283760, 354.483750, 370.621240, 357.720400);
	dessin.moveTo(370.877780, 357.754800);
	dessin.lineTo(388.217500, 359.935510);
	dessin.stroke();
	
// #path5789
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(90.193991, 437.467840);
	dessin.bezierCurveTo(139.439460, 450.307320, 193.147890, 408.217970, 210.153110, 343.462190);
	dessin.bezierCurveTo(227.158330, 278.705440, 201.021960, 215.799040, 151.776490, 202.959580);
	dessin.stroke();
	
// #path5791
	dessin.beginPath();
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(183.376350, 207.776220);
	dessin.lineTo(153.892020, 276.458850);
	dessin.lineTo(143.133760, 277.253260);
	dessin.lineTo(130.944520, 305.454400);
	dessin.lineTo(109.266400, 324.101240);
	dessin.bezierCurveTo(109.266400, 324.101240, 108.469130, 344.350020, 112.852160, 348.716360);
	dessin.bezierCurveTo(117.235190, 353.082710, 166.641500, 352.686470, 166.641500, 352.686470);
	dessin.lineTo(169.032330, 346.730310);
	dessin.lineTo(161.859830, 339.187300);
	dessin.lineTo(167.040130, 334.422760);
	dessin.lineTo(168.633700, 312.587120);
	dessin.lineTo(194.930900, 244.697920);
	dessin.lineTo(193.735980, 213.334190);
	dessin.bezierCurveTo(193.734990, 213.334190, 192.937720, 210.951910, 183.376350, 207.776220);
	dessin.fill();
	
// #path5793
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(182.923030, 207.844600);
	dessin.lineTo(194.519450, 212.656440);
	dessin.lineTo(195.444850, 244.464110);
	dessin.lineTo(169.395150, 311.135220);
	dessin.lineTo(166.664690, 335.621420);
	dessin.lineTo(162.458770, 339.812250);
	dessin.lineTo(169.615550, 347.134450);
	dessin.lineTo(167.450340, 353.415690);
	dessin.lineTo(113.751020, 351.134190);
	dessin.lineTo(110.087190, 342.283310);
	dessin.lineTo(108.673330, 323.932250);
	dessin.lineTo(130.981350, 304.790000);
	dessin.lineTo(143.096460, 276.892770);
	dessin.lineTo(153.893860, 276.644660);
	dessin.fill();
	dessin.stroke();
	
// #path5795
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(428.435730, 270.705090);
	dessin.lineTo(418.911180, 271.180340);
	dessin.lineTo(412.187960, 265.039480);
	dessin.lineTo(350.164850, 242.720490);
	dessin.bezierCurveTo(350.164850, 242.720490, 352.799570, 221.495200, 348.877700, 205.305660);
	dessin.bezierCurveTo(344.955820, 189.116110, 330.994940, 155.986800, 313.020550, 139.989220);
	dessin.bezierCurveTo(304.663570, 132.551340, 276.251040, 97.105800, 252.653370, 82.802874);
	dessin.bezierCurveTo(245.893600, 92.986144, 250.746380, 89.925369, 247.608740, 98.119720);
	dessin.bezierCurveTo(271.775810, 116.743380, 283.148290, 128.680830, 312.460290, 164.552670);
	dessin.bezierCurveTo(342.090630, 200.814080, 343.060560, 208.476760, 340.753810, 228.473440);
	dessin.bezierCurveTo(339.353140, 240.615610, 334.380760, 244.662990, 334.800970, 249.861780);
	dessin.bezierCurveTo(335.152340, 254.209120, 336.954500, 256.778970, 331.229260, 264.202090);
	dessin.bezierCurveTo(325.504020, 271.625200, 333.323970, 279.285270, 309.523010, 279.356870);
	dessin.bezierCurveTo(306.721690, 279.365870, 309.032560, 281.203350, 313.425660, 286.811630);
	dessin.bezierCurveTo(324.254560, 286.007180, 335.908220, 280.184110, 335.908220, 280.184110);
	dessin.lineTo(337.672340, 272.296870);
	dessin.lineTo(344.705890, 266.239020);
	dessin.lineTo(344.705890, 258.898620);
	dessin.lineTo(422.022850, 283.854310);
	dessin.lineTo(428.829380, 278.354710);
	dessin.fill();
	
// #path5797
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(336.379590, 137.158280);
	dessin.bezierCurveTo(336.379590, 137.158280, 299.712950, 106.254160, 298.638670, 105.937010);
	dessin.bezierCurveTo(297.350830, 105.556820, 294.249330, 105.393630, 292.785770, 106.908990);
	dessin.bezierCurveTo(291.529190, 108.210060, 288.226610, 112.306130, 288.226610, 112.306130);
	dessin.lineTo(287.014930, 112.459740);
	dessin.lineTo(286.932930, 106.908990);
	dessin.bezierCurveTo(286.932930, 106.908990, 285.957440, 93.301176, 284.006480, 90.871208);
	dessin.bezierCurveTo(282.055510, 88.441240, 273.830620, 83.714260, 273.830620, 83.714260);
	dessin.lineTo(271.576730, 88.139403);
	dessin.bezierCurveTo(271.576730, 88.139403, 273.154230, 88.927232, 274.251640, 92.329189);
	dessin.bezierCurveTo(275.349060, 95.731144, 275.714870, 94.273163, 275.227130, 101.563070);
	dessin.bezierCurveTo(274.739380, 108.852980, 273.276160, 121.974800, 270.837460, 124.890760);
	dessin.bezierCurveTo(268.398750, 127.806730, 261.570360, 138.012590, 262.058110, 139.956560);
	dessin.bezierCurveTo(262.545850, 141.900530, 266.935520, 147.246470, 266.935520, 147.246470);
	dessin.lineTo(280.879880, 181.066590);
	dessin.lineTo(301.816710, 198.025170);
	dessin.bezierCurveTo(301.816710, 198.025170, 302.001530, 221.183980, 301.513780, 224.099940);
	dessin.bezierCurveTo(301.026040, 227.015900, 297.981490, 229.614760, 294.079560, 230.100750);
	dessin.bezierCurveTo(290.177620, 230.586740, 258.887790, 227.435420, 258.887790, 227.435420);
	dessin.lineTo(270.593580, 242.501220);
	dessin.lineTo(294.736790, 247.847150);
	dessin.lineTo(295.224530, 270.202850);
	dessin.lineTo(271.325200, 278.464750);
	dessin.bezierCurveTo(271.325200, 278.464750, 282.726400, 289.430330, 286.140590, 288.944340);
	dessin.bezierCurveTo(289.554770, 288.458350, 312.081010, 289.232490, 314.246450, 286.726640);
	dessin.bezierCurveTo(316.469210, 284.154470, 308.393550, 282.838690, 309.856780, 280.894720);
	dessin.bezierCurveTo(311.320000, 278.950740, 321.074820, 280.408720, 324.489020, 278.464750);
	dessin.bezierCurveTo(327.903210, 276.520780, 334.243840, 270.688850, 333.756110, 268.258880);
	dessin.bezierCurveTo(333.268370, 265.828910, 314.734190, 262.426960, 314.734190, 262.426960);
	dessin.lineTo(317.660640, 256.109050);
	dessin.bezierCurveTo(317.660640, 256.109050, 322.659990, 254.529560, 326.439980, 251.978090);
	dessin.bezierCurveTo(330.219980, 249.426630, 327.354490, 249.973370, 332.292870, 244.445190);
	dessin.bezierCurveTo(332.597710, 238.188020, 334.487710, 228.893400, 334.487710, 228.893400);
	dessin.lineTo(329.122550, 228.893390);
	dessin.bezierCurveTo(329.122550, 228.893390, 328.939650, 208.481670, 328.878690, 198.761790);
	dessin.bezierCurveTo(320.282260, 199.490790, 314.246450, 194.873840, 314.246450, 194.873840);
	dessin.bezierCurveTo(314.246450, 194.873840, 316.010090, 193.165870, 315.709680, 190.985890);
	dessin.bezierCurveTo(315.562120, 189.915140, 311.490520, 188.178480, 311.563870, 182.724000);
	dessin.bezierCurveTo(311.663270, 175.334210, 313.150950, 175.422640, 314.423600, 174.277950);
	dessin.bezierCurveTo(316.435530, 172.212480, 319.057140, 174.277950, 319.057140, 174.277950);
	dessin.lineTo(288.344710, 137.894900);
	dessin.bezierCurveTo(288.344710, 137.894900, 300.101900, 130.236690, 304.979310, 130.236690);
	dessin.bezierCurveTo(309.856730, 130.236690, 323.025750, 139.956560, 323.025750, 139.956560);
	dessin.bezierCurveTo(323.025750, 139.956560, 324.573350, 143.221990, 327.903160, 142.872520);
	dessin.bezierCurveTo(335.446260, 142.080870, 336.379590, 137.158280, 336.379590, 137.158280);
	dessin.fill();
	
// #path5799
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(314.213400, 243.110290);
	dessin.bezierCurveTo(314.213400, 243.110290, 317.580850, 236.202180, 322.532970, 233.241550);
	dessin.bezierCurveTo(327.485070, 230.280940, 332.437190, 227.715070, 333.625700, 228.701940);
	dessin.bezierCurveTo(334.814210, 229.688810, 332.635270, 237.189050, 332.635270, 239.557550);
	dessin.bezierCurveTo(332.635270, 241.926040, 332.635270, 246.268290, 330.654430, 247.452540);
	dessin.bezierCurveTo(328.673580, 248.636790, 324.513810, 255.347530, 323.325300, 255.347530);
	dessin.bezierCurveTo(322.136800, 255.347530, 317.580850, 256.531780, 317.580850, 256.531780);
	dessin.fill();
	dessin.stroke();
	
// #path5801
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(316.285320, 259.507340);
	dessin.bezierCurveTo(314.342080, 267.414450, 308.914970, 272.891060, 304.161390, 271.741890);
	dessin.bezierCurveTo(299.407810, 270.592710, 297.126520, 263.252590, 299.065090, 255.344340);
	dessin.bezierCurveTo(301.003650, 247.436100, 306.428510, 241.952240, 311.184000, 243.093630);
	dessin.bezierCurveTo(315.939490, 244.235020, 318.226120, 251.569740, 316.292240, 259.479100);
	dessin.fill();
	
// #path5803
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(315.600000, 263.045150);
	dessin.bezierCurveTo(315.600000, 263.045150, 313.421070, 267.387390, 312.232560, 268.769010);
	dessin.bezierCurveTo(311.044050, 270.150640, 307.478530, 272.124380, 307.478530, 272.124380);
	dessin.lineTo(330.060180, 275.282380);
	dessin.bezierCurveTo(330.060180, 275.282380, 332.635270, 273.900760, 333.229530, 271.927000);
	dessin.bezierCurveTo(333.823780, 269.953260, 333.229530, 265.808390, 331.446760, 265.611020);
	dessin.bezierCurveTo(329.664010, 265.413640, 315.005740, 263.242520, 315.600000, 263.045150);
	dessin.fill();
	dessin.stroke();
	
// #path5805
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(332.493740, 271.428670);
	dessin.bezierCurveTo(331.790730, 273.573090, 330.214750, 274.865790, 328.934650, 274.348020);
	dessin.bezierCurveTo(327.654560, 273.830250, 327.133330, 271.689260, 327.757530, 269.512960);
	dessin.bezierCurveTo(328.381740, 267.336670, 329.925630, 265.912160, 331.244150, 266.295950);
	dessin.bezierCurveTo(332.562670, 266.679750, 333.178950, 268.733040, 332.635910, 270.932970);
	dessin.fill();
	
// #g5837
	dessin.save();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 0.040932);
	
// #g5827
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -0.741455, 0.494303);
	
// #path5807
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(328.617000, 279.144230);
	dessin.bezierCurveTo(330.113000, 279.422240, 331.718000, 277.548230, 332.201000, 274.956230);
	dessin.bezierCurveTo(332.683000, 272.364240, 331.862000, 270.038230, 330.366000, 269.759230);
	dessin.stroke();
	
// #path5809
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(330.366000, 269.760240);
	dessin.bezierCurveTo(328.870000, 269.481240, 327.265000, 271.356240, 326.782000, 273.948240);
	dessin.bezierCurveTo(326.300000, 276.540230, 327.121000, 278.866240, 328.617000, 279.145240);
	dessin.stroke();
	
// #path5811
	dessin.beginPath();
	dessin.moveTo(330.210000, 270.595240);
	dessin.bezierCurveTo(329.595000, 270.480230, 328.822000, 270.426240, 328.289000, 271.049240);
	dessin.lineTo(328.098000, 270.505240);
	dessin.bezierCurveTo(328.862000, 269.613230, 329.640000, 268.761230, 330.521000, 268.925230);
	dessin.lineTo(330.210000, 270.595240);
	
// #path5813
	dessin.beginPath();
	dessin.moveTo(327.144000, 277.194230);
	dessin.bezierCurveTo(327.476000, 278.133240, 328.130000, 278.190230, 328.772000, 278.309240);
	dessin.lineTo(328.460000, 279.978230);
	dessin.bezierCurveTo(327.716000, 279.839230, 327.153000, 278.721230, 326.770000, 277.631240);
	dessin.lineTo(327.144000, 277.194230);
	
// #path5815
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(330.366000, 269.760240);
	dessin.lineTo(313.695000, 267.537240);
	dessin.moveTo(328.617000, 279.144230);
	dessin.lineTo(304.904000, 276.096230);
	dessin.moveTo(302.821000, 276.559240);
	dessin.bezierCurveTo(307.616000, 277.739240, 313.160000, 271.963230, 315.205000, 263.659240);
	dessin.bezierCurveTo(317.249000, 255.354230, 315.019000, 247.666240, 310.225000, 246.485230);
	dessin.stroke();
	
// #g5823
	
// #path5817
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(310.224000, 246.485230);
	dessin.bezierCurveTo(305.430000, 245.304240, 299.885000, 251.080230, 297.841000, 259.384230);
	dessin.bezierCurveTo(295.796000, 267.689230, 298.027000, 275.378240, 302.820000, 276.559240);
	dessin.stroke();
	
// #path5819
	dessin.beginPath();
	dessin.moveTo(310.022000, 247.309240);
	dessin.bezierCurveTo(307.755000, 246.751240, 305.200000, 247.448240, 303.082000, 249.655240);
	dessin.lineTo(302.922000, 249.101240);
	dessin.bezierCurveTo(305.285000, 246.639240, 307.900000, 245.038240, 310.428000, 245.661240);
	dessin.lineTo(310.022000, 247.309240);
	
// #path5821
	dessin.beginPath();
	dessin.moveTo(297.966000, 270.435230);
	dessin.bezierCurveTo(298.916000, 273.712240, 300.853000, 275.200240, 303.024000, 275.734240);
	dessin.lineTo(302.618000, 277.383240);
	dessin.bezierCurveTo(300.346000, 276.823240, 298.561000, 274.280240, 297.567000, 270.851230);
	dessin.lineTo(297.966000, 270.435230);
	
// #path5825
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(316.239000, 260.134230);
	dessin.bezierCurveTo(316.239000, 260.134230, 322.948000, 259.441240, 325.030000, 256.896230);
	dessin.bezierCurveTo(327.112000, 254.351240, 331.276000, 248.336230, 331.276000, 248.336230);
	dessin.lineTo(333.358000, 232.836230);
	dessin.bezierCurveTo(333.358000, 232.836230, 330.583000, 229.598230, 321.097000, 237.232240);
	dessin.bezierCurveTo(311.612000, 244.867230, 312.769000, 246.717230, 313.000000, 248.105230);
	dessin.stroke();
	dessin.restore();
	
// #path5829
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(329.771000, 237.744240);
	dessin.lineTo(328.981000, 243.192240);
	dessin.bezierCurveTo(328.981000, 243.192240, 326.296000, 247.772230, 326.691000, 243.745240);
	dessin.bezierCurveTo(327.086000, 239.718230, 327.244000, 238.297240, 327.323000, 237.428240);
	dessin.bezierCurveTo(327.402000, 236.559240, 329.771000, 235.059240, 329.771000, 237.744240);
	dessin.stroke();
	
// #path5831
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(322.426000, 239.480230);
	dessin.bezierCurveTo(321.321000, 240.507240, 320.136000, 240.586230, 321.321000, 242.481230);
	dessin.bezierCurveTo(322.506000, 244.377240, 324.007000, 246.825230, 324.243000, 243.745240);
	dessin.bezierCurveTo(324.480000, 240.666240, 324.164000, 238.455230, 322.426000, 239.480230);
	dessin.stroke();
	
// #path5833
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(320.768000, 246.983240);
	dessin.bezierCurveTo(320.768000, 249.351240, 320.137000, 250.379230, 318.794000, 250.141230);
	dessin.bezierCurveTo(317.451000, 249.905240, 317.530000, 249.430240, 317.689000, 247.693230);
	dessin.bezierCurveTo(317.846000, 245.956230, 318.636000, 245.640230, 319.426000, 245.798240);
	dessin.bezierCurveTo(320.215000, 245.956230, 320.689000, 246.114240, 320.768000, 246.983240);
	dessin.stroke();
	
// #path5835
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(318.478000, 256.459230);
	dessin.bezierCurveTo(319.173000, 256.580230, 319.878000, 255.865240, 320.053000, 254.861230);
	dessin.bezierCurveTo(320.228000, 253.858240, 319.805000, 252.947240, 319.110000, 252.826230);
	dessin.bezierCurveTo(318.415000, 252.706230, 317.710000, 253.421230, 317.535000, 254.424240);
	dessin.bezierCurveTo(317.361000, 255.427230, 317.783000, 256.338230, 318.478000, 256.459230);
	dessin.stroke();
	dessin.restore();
	
// #path5839
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(255, 255, 255)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(241, 255, 255)';
	dessin.moveTo(278.946590, 90.064175);
	dessin.bezierCurveTo(282.319010, 98.534279, 282.266330, 107.674920, 281.475070, 114.090860);
	dessin.bezierCurveTo(281.265990, 116.695060, 279.511280, 120.949330, 279.439950, 122.417240);
	dessin.bezierCurveTo(280.852860, 120.507710, 284.556490, 118.183150, 284.743600, 116.641000);
	dessin.bezierCurveTo(280.785530, 113.379610, 285.225580, 94.311380, 278.946590, 90.064175);
	dessin.moveTo(298.681090, 112.892590);
	dessin.bezierCurveTo(306.264410, 114.649220, 313.207510, 119.545920, 317.675550, 126.361830);
	dessin.bezierCurveTo(319.534190, 126.250010, 323.219480, 131.953490, 325.975720, 130.263860);
	dessin.bezierCurveTo(318.183800, 123.101980, 311.237980, 114.932260, 298.681090, 112.892590);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	
// #path5845
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.fillStyle = 'rgb(255, 204, 0)';
	dessin.moveTo(435.626310, 149.150410);
	dessin.bezierCurveTo(435.626310, 149.150410, 470.687720, 139.281280, 471.077290, 126.815000);
	dessin.bezierCurveTo(471.466860, 114.348720, 475.492430, 134.216850, 473.544580, 138.112560);
	dessin.bezierCurveTo(471.596720, 142.008280, 484.004980, 146.246940, 488.779770, 121.087490);
	dessin.bezierCurveTo(493.554550, 95.928040, 495.574660, 143.859550, 492.452680, 147.899750);
	dessin.bezierCurveTo(489.330710, 151.939950, 495.574660, 158.367550, 503.838710, 155.245570);
	dessin.bezierCurveTo(512.102760, 152.123600, 500.533090, 174.161070, 477.393740, 164.978800);
	dessin.bezierCurveTo(454.254390, 155.796510, 429.186760, 162.775050, 429.186760, 162.775050);
	dessin.lineTo(435.626310, 149.150410);
	dessin.fill();
	dessin.stroke();
	
// #path5853
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(464.684370, 136.600150);
	dessin.lineTo(470.592870, 145.625220);
	dessin.lineTo(466.827020, 150.949360);
	dessin.lineTo(479.033580, 158.545990);
	dessin.lineTo(474.034080, 163.805210);
	dessin.stroke();
	
// #path5901
	dessin.save();
	dessin.beginPath();
	dessin.transform(1.038857, 0.000000, 0.000000, 1.038857, 6.159087, 4.108537);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.088388;
	dessin.fillStyle = 'rgb(255, 102, 0)';
	dessin.moveTo(449.146050, 152.728600);
	dessin.bezierCurveTo(438.847720, 149.577190, 426.392110, 148.916290, 413.800530, 150.853170);
	dessin.bezierCurveTo(412.320400, 151.080850, 408.444730, 151.829960, 408.307220, 151.914940);
	dessin.bezierCurveTo(408.265920, 151.940540, 408.232120, 151.928240, 408.232120, 151.887740);
	dessin.bezierCurveTo(408.232120, 151.847240, 409.481720, 149.172280, 411.009020, 145.943440);
	dessin.lineTo(413.785930, 140.072820);
	dessin.lineTo(415.185370, 139.642250);
	dessin.bezierCurveTo(424.248660, 136.853740, 433.135820, 133.031330, 438.726100, 129.517280);
	dessin.bezierCurveTo(439.382380, 129.104740, 440.165040, 128.592650, 440.465340, 128.379310);
	dessin.lineTo(441.011340, 127.991410);
	dessin.lineTo(441.270440, 128.370230);
	dessin.bezierCurveTo(441.412950, 128.578580, 442.627720, 130.428680, 443.969940, 132.481560);
	dessin.lineTo(446.410340, 136.214070);
	dessin.lineTo(444.557470, 138.832700);
	dessin.bezierCurveTo(443.538390, 140.272940, 442.721490, 141.478650, 442.742130, 141.512050);
	dessin.bezierCurveTo(442.762730, 141.545450, 445.367260, 143.181980, 448.529880, 145.148800);
	dessin.bezierCurveTo(451.692500, 147.115610, 454.280630, 148.748270, 454.281270, 148.776930);
	dessin.bezierCurveTo(454.282270, 148.827630, 452.825200, 150.383140, 451.096990, 152.175910);
	dessin.lineTo(450.241140, 153.063740);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	
// #path5923
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(464.294800, 240.745510);
	dessin.lineTo(513.121060, 218.929530);
	dessin.stroke();
	
// #path5927
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(467.411370, 268.794640);
	dessin.lineTo(526.626190, 241.784370);
	dessin.stroke();
	
// #path5923-9
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(456.286220, 211.881320);
	dessin.lineTo(505.112480, 190.065340);
	dessin.stroke();
	
// #path5923-9-0
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(460.693720, 298.929340);
	dessin.lineTo(509.519980, 277.113360);
	dessin.stroke();
	dessin.restore();
	dessin.restore();
	dessin.restore();
	}
	if(this.calculerCalque()==3)
	{
	// #layer2
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -18.322690, -6.541822);
	dessin.restore();
	
// #g6682
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -12.327638, -4.108537);
	
// #g6666
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -0.033582, 1.675549);
	
// #path6358
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(402.943550, 102.864930);
	dessin.lineTo(403.783950, 108.726670);
	dessin.lineTo(413.868770, 116.542300);
	dessin.lineTo(416.109840, 125.474460);
	dessin.lineTo(418.350910, 126.590980);
	dessin.lineTo(437.680150, 112.355350);
	dessin.bezierCurveTo(445.444460, 110.997590, 451.785000, 109.842500, 450.006040, 109.843170);
	dessin.lineTo(448.605370, 106.772750);
	dessin.lineTo(415.269440, 103.423190);
	dessin.fill();
	
// #path6360
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(237.356590, 27.577074);
	dessin.bezierCurveTo(237.356590, 27.577074, 238.941270, 23.234830, 243.299130, 21.261083);
	dessin.bezierCurveTo(247.656990, 19.287335, 279.746690, 11.392346, 282.916050, 11.392346);
	dessin.bezierCurveTo(286.085400, 11.392346, 324.117640, 9.813347, 324.117640, 9.813347);
	dessin.lineTo(324.909980, 17.708337);
	dessin.lineTo(269.842460, 20.471584);
	dessin.bezierCurveTo(269.842460, 20.471584, 261.522910, 22.445331, 258.353550, 23.234830);
	dessin.bezierCurveTo(255.184200, 24.024328, 248.845490, 28.761323, 248.845490, 28.761323);
	dessin.fill();
	
// #path6362
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(230.621710, 104.553220);
	dessin.lineTo(242.110620, 109.684970);
	dessin.lineTo(267.465440, 41.393306);
	dessin.lineTo(267.861610, 27.182325);
	dessin.lineTo(253.995690, 25.603327);
	dessin.lineTo(248.449330, 29.550822);
	dessin.fill();
	dessin.stroke();
	
// #path6364
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(170.800160, 128.632940);
	dessin.lineTo(141.087470, 202.451090);
	dessin.lineTo(159.311260, 206.793340);
	dessin.lineTo(184.666080, 138.896430);
	dessin.fill();
	
// #path6366
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(197, 48, 52)';
	dessin.moveTo(403.725450, 105.792320);
	dessin.bezierCurveTo(403.725450, 105.792320, 381.843770, 115.411410, 377.982290, 125.030500);
	dessin.bezierCurveTo(374.120820, 134.649580, 361.249240, 188.516460, 357.387770, 193.646650);
	dessin.bezierCurveTo(353.526300, 198.776830, 350.951990, 207.113370, 350.951990, 207.113370);
	dessin.bezierCurveTo(350.951990, 207.113370, 352.418080, 227.740470, 351.595570, 237.894450);
	dessin.bezierCurveTo(363.277360, 241.297390, 368.328610, 242.383350, 368.328610, 242.383350);
	dessin.bezierCurveTo(368.328610, 242.383350, 361.892820, 213.526090, 365.110720, 209.037180);
	dessin.bezierCurveTo(368.328610, 204.548280, 371.546510, 201.983180, 371.546510, 201.983180);
	dessin.bezierCurveTo(371.546510, 201.983180, 375.917350, 201.822140, 394.715340, 202.624460);
	dessin.bezierCurveTo(410.965710, 188.195830, 430.755750, 167.354470, 436.547960, 144.268670);
	dessin.bezierCurveTo(442.340170, 121.182860, 438.478700, 111.563780, 438.478700, 111.563780);
	dessin.bezierCurveTo(438.478700, 111.563780, 424.319970, 116.693960, 420.458500, 121.824130);
	dessin.bezierCurveTo(416.597020, 126.954310, 415.926750, 125.876660, 415.926750, 125.876660);
	dessin.bezierCurveTo(415.926750, 125.876660, 416.597020, 119.900310, 412.091970, 115.411410);
	dessin.bezierCurveTo(407.586920, 110.922500, 403.081860, 105.792320, 403.725450, 105.792320);
	dessin.fill();
	
// #path6368
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(125, 0, 0)';
	dessin.moveTo(134.258490, 120.159120);
	dessin.bezierCurveTo(134.258490, 120.159120, 160.133210, 113.161150, 167.525990, 115.739350);
	dessin.bezierCurveTo(174.918770, 118.317550, 203.380970, 130.840240, 207.447000, 134.891690);
	dessin.bezierCurveTo(211.513020, 138.943150, 233.321720, 160.305380, 235.539550, 167.303360);
	dessin.bezierCurveTo(237.757380, 174.301320, 245.889440, 220.708920, 245.889440, 220.708920);
	dessin.lineTo(242.932330, 222.918810);
	dessin.bezierCurveTo(242.932330, 222.918810, 222.887720, 218.512670, 221.123640, 217.394090);
	dessin.bezierCurveTo(217.057610, 214.815890, 210.034470, 197.873430, 210.404100, 191.243780);
	dessin.bezierCurveTo(210.773740, 184.614120, 199.314940, 163.251900, 195.988190, 159.200440);
	dessin.bezierCurveTo(192.661440, 155.148990, 174.918770, 131.576860, 164.199230, 126.788780);
	dessin.bezierCurveTo(153.479710, 122.000690, 134.997760, 120.895750, 134.258490, 120.159120);
	dessin.fill();
	
// #path6370
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(197, 48, 52)';
	dessin.moveTo(63.272287, 141.703580);
	dessin.bezierCurveTo(64.510687, 137.480620, 92.233331, 112.205050, 111.540690, 105.792320);
	dessin.bezierCurveTo(130.848060, 99.379596, 164.957730, 95.531963, 182.977930, 103.868500);
	dessin.bezierCurveTo(200.998140, 112.205050, 225.262730, 128.046140, 235.107810, 148.034060);
	dessin.bezierCurveTo(243.345540, 164.770690, 247.705450, 193.265220, 247.335810, 205.189550);
	dessin.bezierCurveTo(247.048780, 214.162810, 245.405070, 223.786450, 245.405070, 223.786450);
	dessin.bezierCurveTo(245.405070, 223.786450, 240.543540, 217.656210, 236.394970, 190.440280);
	dessin.bezierCurveTo(235.199580, 182.598130, 233.660970, 164.549660, 216.526570, 145.741930);
	dessin.bezierCurveTo(198.858880, 126.348820, 170.367460, 116.020470, 160.726620, 116.516350);
	dessin.bezierCurveTo(139.244500, 117.621290, 118.620060, 125.671770, 107.679220, 130.801940);
	dessin.bezierCurveTo(96.738383, 135.932120, 72.843427, 149.481090, 67.038061, 146.916010);
	dessin.bezierCurveTo(63.270912, 145.251510, 62.133741, 145.586040, 63.272287, 141.703580);
	dessin.fill();
	
// #path6372
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(52, 48, 52)';
	dessin.moveTo(281.212260, 87.445970);
	dessin.bezierCurveTo(281.212260, 87.445970, 286.040650, 95.693555, 286.040650, 101.879250);
	dessin.bezierCurveTo(286.040650, 108.064930, 286.040650, 115.625220, 286.040650, 115.625220);
	dessin.bezierCurveTo(286.040650, 115.625220, 290.869050, 105.315740, 295.007670, 106.003040);
	dessin.bezierCurveTo(299.146290, 106.690330, 300.525830, 104.628440, 308.113310, 112.188730);
	dessin.bezierCurveTo(315.700780, 119.749010, 337.564310, 135.295920, 336.205210, 137.785210);
	dessin.bezierCurveTo(333.424440, 142.878330, 327.426890, 142.762720, 327.426890, 142.762720);
	dessin.bezierCurveTo(327.426890, 142.762720, 316.390560, 136.244180, 312.941700, 134.182280);
	dessin.bezierCurveTo(309.492850, 132.120390, 305.354230, 131.433090, 305.354230, 131.433090);
	dessin.lineTo(327.426890, 156.175850);
	dessin.bezierCurveTo(327.426890, 156.175850, 349.310840, 196.654060, 349.310840, 203.527050);
	dessin.bezierCurveTo(349.310840, 210.400040, 352.614350, 213.576090, 358.132520, 204.641220);
	dessin.bezierCurveTo(363.650690, 195.706330, 372.951750, 155.488550, 375.021060, 143.117170);
	dessin.bezierCurveTo(377.090370, 130.745790, 383.654040, 122.686230, 394.000590, 115.813250);
	dessin.bezierCurveTo(404.347150, 108.940250, 408.819830, 103.941140, 402.611890, 101.879250);
	dessin.bezierCurveTo(396.403960, 99.817351, 373.641520, 101.191950, 373.641520, 101.191950);
	dessin.bezierCurveTo(373.641520, 101.191950, 333.373450, 110.886540, 325.096200, 109.511950);
	dessin.bezierCurveTo(316.818960, 108.137340, 296.220190, 93.704068, 293.461110, 90.267575);
	dessin.bezierCurveTo(290.702030, 86.831081, 282.591800, 86.758671, 281.212260, 87.445970);
	dessin.fill();
	
// #path6374
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(197, 48, 52)';
	dessin.moveTo(173.289110, 101.077070);
	dessin.lineTo(190.847810, 40.813863);
	dessin.bezierCurveTo(190.847810, 40.813863, 210.357460, 29.636010, 222.550990, 29.150017);
	dessin.bezierCurveTo(234.744540, 28.664023, 250.840000, 29.636010, 252.790970, 32.551972);
	dessin.bezierCurveTo(254.741940, 35.467934, 257.180640, 36.925914, 255.229680, 42.271844);
	dessin.bezierCurveTo(253.278720, 47.617774, 228.891640, 110.796950, 228.891640, 110.796950);
	dessin.lineTo(224.989700, 115.170890);
	dessin.lineTo(198.651670, 111.282940);
	dessin.fill();
	dessin.stroke();
	
// #path6376
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(210, 48, 52)';
	dessin.moveTo(268.075950, 26.421047);
	dessin.bezierCurveTo(265.088440, 30.585621, 264.728710, 29.395629, 260.806840, 31.897864);
	dessin.bezierCurveTo(259.168630, 34.443224, 257.582170, 39.974625, 260.933800, 43.251919);
	dessin.bezierCurveTo(262.369130, 44.655412, 269.809340, 41.434454, 269.809340, 41.434454);
	dessin.bezierCurveTo(269.809340, 41.434454, 281.567720, 28.178030, 288.396100, 22.832100);
	dessin.bezierCurveTo(296.905290, 20.835730, 310.417000, 19.906202, 310.417000, 19.906202);
	dessin.bezierCurveTo(310.417000, 19.906202, 306.112030, 18.949141, 305.954790, 16.028189);
	dessin.bezierCurveTo(305.692790, 11.160801, 309.368980, 8.252291, 309.368980, 8.252291);
	dessin.bezierCurveTo(309.368980, 8.252291, 296.280640, 6.077739, 285.957390, 10.619928);
	dessin.bezierCurveTo(275.634130, 15.162117, 273.882760, 18.326379, 268.075950, 26.421047);
	dessin.fill();
	
// #path6378
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(224, 47, 44)';
	dessin.moveTo(328.806430, 7.375662);
	dessin.bezierCurveTo(328.806430, 7.375662, 327.426890, 3.595518, 325.702470, 3.595518);
	dessin.bezierCurveTo(323.978040, 3.595518, 322.598500, 11.499454, 322.598500, 14.248649);
	dessin.bezierCurveTo(322.598500, 16.997845, 324.322930, 23.527183, 327.082010, 23.527183);
	dessin.bezierCurveTo(329.841090, 23.527183, 329.841090, 20.090689, 331.565520, 19.747040);
	dessin.bezierCurveTo(333.289940, 19.403390, 357.431910, 16.654195, 359.156340, 16.310546);
	dessin.bezierCurveTo(360.880760, 15.966897, 364.674500, 13.905000, 363.984730, 12.530403);
	dessin.bezierCurveTo(363.294960, 11.155805, 360.535880, 5.657415, 360.535880, 5.657415);
	dessin.fill();
	dessin.stroke();
	
// #path6380
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(188, 37, 38)';
	dessin.moveTo(186.713680, 19.403390);
	dessin.bezierCurveTo(186.713680, 19.403390, 183.954600, 17.341494, 182.230170, 17.341494);
	dessin.bezierCurveTo(180.505740, 17.341494, 177.401780, 19.403390, 177.401780, 19.403390);
	dessin.lineTo(162.916590, 20.777988);
	dessin.bezierCurveTo(162.916590, 20.777988, 160.847280, 18.372443, 159.467740, 18.372443);
	dessin.bezierCurveTo(158.088200, 18.372443, 154.294460, 21.808936, 154.294460, 23.527183);
	dessin.bezierCurveTo(154.294460, 25.245430, 156.708660, 32.805716, 158.088200, 32.805716);
	dessin.bezierCurveTo(159.467740, 32.805716, 163.606370, 30.743820, 163.606370, 30.743820);
	dessin.lineTo(177.056890, 29.712872);
	dessin.bezierCurveTo(177.056890, 29.712872, 178.436430, 32.805716, 179.815970, 32.805716);
	dessin.bezierCurveTo(181.195510, 32.805716, 184.989250, 32.805716, 186.368790, 31.087470);
	dessin.bezierCurveTo(187.748330, 29.369223, 184.644370, 28.681924, 184.644370, 28.681924);
	dessin.bezierCurveTo(184.644370, 28.681924, 181.195510, 27.994625, 180.850630, 25.932729);
	dessin.bezierCurveTo(180.505740, 23.870833, 181.885280, 21.808936, 183.264830, 21.465287);
	dessin.bezierCurveTo(184.644370, 21.121638, 187.403450, 19.747040, 186.713680, 19.403390);
	dessin.fill();
	dessin.stroke();
	
// #path6382
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.fillStyle = 'rgb(155, 37, 38)';
	dessin.moveTo(363.294930, 10.124870);
	dessin.bezierCurveTo(363.294940, 13.095653, 361.962800, 15.529232, 360.286530, 15.620697);
	dessin.bezierCurveTo(358.610240, 15.712157, 357.196080, 13.428432, 357.092880, 10.463280);
	dessin.bezierCurveTo(356.989670, 7.498128, 358.234750, 4.923958, 359.904670, 4.649954);
	dessin.bezierCurveTo(361.574600, 4.375949, 363.065410, 6.501208, 363.271420, 9.449492);
	dessin.fill();
	
// #path6384
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(175, 14, 12)';
	dessin.moveTo(247.168640, 210.664600);
	dessin.bezierCurveTo(262.653140, 211.527280, 280.137940, 214.268320, 283.534770, 213.422160);
	dessin.bezierCurveTo(286.931590, 212.575990, 292.176620, 209.818430, 293.025830, 205.587610);
	dessin.bezierCurveTo(293.875040, 201.356790, 286.971450, 198.191200, 286.971450, 198.191200);
	dessin.lineTo(265.331780, 145.141660);
	dessin.bezierCurveTo(265.331780, 145.141660, 261.605160, 145.509970, 261.605160, 142.125310);
	dessin.bezierCurveTo(261.605160, 138.740650, 266.700410, 131.125180, 269.248030, 126.894360);
	dessin.bezierCurveTo(271.795650, 122.663540, 272.644850, 118.432720, 272.644850, 118.432720);
	dessin.bezierCurveTo(272.644850, 118.432720, 257.359130, 115.048060, 253.113080, 115.048060);
	dessin.bezierCurveTo(248.867050, 115.048060, 239.525770, 119.278880, 239.525770, 119.278880);
	dessin.lineTo(242.922600, 110.817240);
	dessin.lineTo(231.882910, 104.047920);
	dessin.lineTo(225.089250, 115.894220);
	dessin.lineTo(198.983680, 111.882470);
	dessin.lineTo(217.446390, 126.894360);
	dessin.lineTo(221.692420, 119.278880);
	dessin.bezierCurveTo(221.692420, 119.278880, 229.555140, 121.488760, 233.801180, 124.873420);
	dessin.bezierCurveTo(238.047210, 128.258080, 234.430530, 128.586680, 234.430530, 128.586680);
	dessin.lineTo(228.336300, 139.696350);
	dessin.bezierCurveTo(228.336300, 139.696350, 242.073400, 157.356260, 242.073400, 166.664070);
	dessin.bezierCurveTo(242.073400, 175.971870, 247.240290, 185.583040, 247.168640, 210.664600);
	dessin.fill();
	
// #path6386
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 48, 0)';
	dessin.moveTo(166.120750, 99.619543);
	dessin.bezierCurveTo(143.330790, 98.059727, 123.110600, 100.750950, 103.864520, 110.203430);
	dessin.bezierCurveTo(93.732996, 115.270760, 82.708982, 122.836880, 74.513334, 130.529940);
	dessin.bezierCurveTo(69.777340, 135.162500, 61.603527, 141.200470, 63.994716, 145.583630);
	dessin.bezierCurveTo(70.927518, 144.223790, 73.146026, 139.136480, 80.924700, 132.368750);
	dessin.bezierCurveTo(94.308579, 120.724270, 109.342440, 110.836360, 127.386860, 108.605750);
	dessin.bezierCurveTo(139.090890, 106.497900, 148.507860, 106.264360, 162.913900, 107.024190);
	dessin.bezierCurveTo(166.205940, 107.197820, 176.152090, 107.641150, 177.337140, 104.362110);
	dessin.bezierCurveTo(175.874430, 103.772180, 167.633780, 99.469557, 166.120750, 99.619543);
	dessin.fill();
	
// #path6388
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(224.435740, 30.211534);
	dessin.bezierCurveTo(215.217350, 30.730105, 204.719020, 32.086620, 196.787710, 37.658910);
	dessin.bezierCurveTo(192.724420, 40.904061, 188.278950, 46.510737, 187.936110, 52.078727);
	dessin.bezierCurveTo(186.335620, 56.039048, 184.373860, 60.123746, 183.529710, 64.451228);
	dessin.bezierCurveTo(182.486930, 69.712975, 179.768200, 74.487740, 179.239010, 79.863263);
	dessin.bezierCurveTo(178.578290, 84.927923, 177.767430, 90.121022, 175.030000, 94.543713);
	dessin.bezierCurveTo(172.648050, 98.892770, 177.125800, 104.764230, 181.826160, 101.939520);
	dessin.bezierCurveTo(187.313570, 99.328804, 188.385690, 92.645815, 189.392450, 87.292258);
	dessin.bezierCurveTo(190.974470, 79.367981, 197.478820, 58.100347, 197.507350, 54.888693);
	dessin.bezierCurveTo(199.317240, 50.890413, 201.203780, 44.971579, 207.163360, 42.681077);
	dessin.bezierCurveTo(215.618660, 39.431375, 226.351650, 39.630216, 235.681800, 42.381166);
	dessin.bezierCurveTo(240.194840, 44.139078, 236.916390, 51.157110, 242.034180, 51.907389);
	dessin.bezierCurveTo(248.088600, 52.522904, 251.777640, 44.990089, 249.293560, 39.996498);
	dessin.bezierCurveTo(246.729340, 35.216212, 244.729310, 34.548319, 237.357410, 31.308119);
	dessin.bezierCurveTo(232.131070, 29.473094, 228.277930, 30.514990, 224.435740, 30.211534);
	dessin.fill();
	
// #path6390
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(174.582760, 22.832641);
	dessin.bezierCurveTo(172.692210, 22.641798, 170.812340, 22.990791, 168.938130, 23.165520);
	dessin.bezierCurveTo(166.312030, 23.299296, 163.676220, 23.121350, 161.053870, 23.234210);
	dessin.bezierCurveTo(159.998690, 23.172260, 159.360950, 22.195126, 158.367580, 21.970012);
	dessin.bezierCurveTo(157.235940, 21.666538, 158.956830, 21.094391, 159.251420, 20.681564);
	dessin.bezierCurveTo(159.903080, 20.193750, 160.562820, 19.709976, 161.283150, 19.326132);
	dessin.bezierCurveTo(161.156340, 20.251357, 160.418300, 20.952766, 160.220610, 21.864458);
	dessin.bezierCurveTo(159.865850, 22.923115, 159.783380, 24.043268, 159.645780, 25.143763);
	dessin.bezierCurveTo(158.239900, 25.926076, 156.834010, 26.708391, 155.428140, 27.490701);
	dessin.bezierCurveTo(155.647570, 25.694406, 155.703570, 23.782750, 156.613990, 22.168506);
	dessin.bezierCurveTo(157.569490, 20.539750, 159.323330, 19.683367, 160.857950, 18.709574);
	dessin.bezierCurveTo(161.940260, 18.123785, 162.719930, 19.295168, 163.560630, 19.757088);
	dessin.bezierCurveTo(164.417000, 20.349619, 165.474140, 20.027817, 166.438680, 20.101765);
	dessin.bezierCurveTo(168.646810, 20.086075, 170.865380, 20.211198, 173.065960, 19.999530);
	dessin.bezierCurveTo(174.415090, 19.788704, 175.777550, 19.699008, 177.141560, 19.700505);
	dessin.bezierCurveTo(177.657520, 19.618315, 178.840610, 19.636605, 177.867860, 20.166554);
	dessin.bezierCurveTo(176.772830, 21.055251, 175.677800, 21.943952, 174.582760, 22.832645);
	dessin.fill();
	
// #path6392
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(307.927180, 8.443536);
	dessin.bezierCurveTo(305.547840, 10.356317, 302.557680, 11.645239, 299.450520, 11.347268);
	dessin.bezierCurveTo(295.537330, 10.987850, 291.304470, 11.718090, 287.432020, 12.649593);
	dessin.bezierCurveTo(281.852510, 13.489175, 277.936700, 18.629170, 275.509450, 21.844776);
	dessin.bezierCurveTo(272.625170, 23.937526, 270.665250, 28.328560, 268.052910, 30.755240);
	dessin.bezierCurveTo(264.646120, 34.205837, 261.098670, 33.789066, 259.691200, 34.241100);
	dessin.bezierCurveTo(260.253360, 33.189428, 262.023020, 31.426177, 260.980620, 31.832509);
	dessin.bezierCurveTo(263.583040, 30.281262, 264.803410, 27.965354, 267.291390, 26.258757);
	dessin.bezierCurveTo(269.850650, 24.294810, 272.732930, 22.552449, 274.396390, 19.690332);
	dessin.bezierCurveTo(275.639530, 17.868513, 277.524020, 16.627269, 278.750190, 14.786007);
	dessin.bezierCurveTo(279.917050, 12.902211, 282.072460, 12.110254, 283.847010, 10.917623);
	dessin.bezierCurveTo(286.150570, 9.447101, 288.037220, 9.607812, 290.725410, 9.277949);
	dessin.bezierCurveTo(297.026580, 8.886116, 297.599220, 8.833065, 302.553940, 8.210441);
	dessin.bezierCurveTo(303.935680, 8.432031, 306.293100, 7.501046, 307.109760, 8.306721);
	dessin.bezierCurveTo(306.177840, 9.118455, 306.374660, 9.084302, 307.927180, 8.443536);
	dessin.fill();
	
// #path6394
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(356.133950, 7.968336);
	dessin.bezierCurveTo(353.513670, 8.263989, 350.871830, 8.062132, 348.255160, 8.360785);
	dessin.bezierCurveTo(346.167930, 8.360686, 344.080290, 8.515702, 342.064170, 9.114042);
	dessin.bezierCurveTo(337.596350, 10.366494, 322.903190, 6.353622, 323.773260, 4.613286);
	dessin.bezierCurveTo(323.636430, 3.261947, 326.013760, 3.597641, 327.605600, 5.341602);
	dessin.bezierCurveTo(328.822550, 6.804383, 353.410650, 9.499133, 326.382570, 9.913513);
	dessin.bezierCurveTo(325.046950, 12.734789, 324.850360, 14.549135, 325.558710, 17.433861);
	dessin.bezierCurveTo(325.648110, 18.634762, 327.283830, 20.324835, 327.960680, 22.462659);
	dessin.bezierCurveTo(327.024750, 23.100421, 325.576050, 23.848704, 325.036460, 22.317078);
	dessin.bezierCurveTo(323.973930, 20.922149, 323.507430, 19.171805, 323.455000, 17.413291);
	dessin.bezierCurveTo(323.218210, 14.688375, 322.848140, 12.069853, 323.173310, 9.379877);
	dessin.bezierCurveTo(322.288830, 5.741394, 325.187530, 4.700502, 327.387380, 3.982464);
	dessin.bezierCurveTo(329.183550, 4.471208, 327.800860, 7.738563, 330.061460, 8.048887);
	dessin.bezierCurveTo(331.482290, 8.463275, 332.979170, 7.235483, 334.434740, 7.372632);
	dessin.bezierCurveTo(337.971250, 7.437048, 340.953540, 6.977193, 344.714750, 6.700899);
	dessin.bezierCurveTo(346.520680, 6.221055, 348.646060, 6.631546, 350.491610, 6.559070);
	dessin.bezierCurveTo(352.872010, 6.279720, 355.275570, 6.564040, 357.647630, 6.202396);
	dessin.bezierCurveTo(359.241470, 6.113240, 356.729040, 7.331569, 356.274930, 7.861597);
	dessin.fill();
	
// #path6396
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(221, 0, 0)';
	dessin.moveTo(180.929760, 103.385120);
	dessin.bezierCurveTo(185.098650, 105.113300, 189.053110, 107.534720, 192.926050, 109.980760);
	dessin.bezierCurveTo(196.559960, 112.008860, 200.516100, 113.007110, 204.454460, 114.112960);
	dessin.bezierCurveTo(209.523390, 115.859050, 212.709810, 120.440360, 216.749990, 123.525470);
	dessin.bezierCurveTo(219.612050, 127.115190, 224.223370, 129.000780, 226.514930, 133.150400);
	dessin.bezierCurveTo(229.319730, 137.363090, 231.909260, 142.631260, 233.215550, 147.676640);
	dessin.bezierCurveTo(235.437350, 152.600720, 236.609530, 156.637430, 239.284190, 161.421860);
	dessin.bezierCurveTo(241.392070, 165.620760, 244.945350, 183.855820, 247.109600, 188.053690);
	dessin.bezierCurveTo(249.139190, 193.937710, 244.344550, 221.177080, 245.712810, 217.384680);
	dessin.bezierCurveTo(245.414190, 211.791540, 240.266790, 186.543290, 239.260740, 179.914880);
	dessin.bezierCurveTo(237.343010, 175.502570, 235.777770, 162.311230, 231.171750, 152.330530);
	dessin.bezierCurveTo(223.742700, 142.318770, 218.461530, 131.148260, 214.386100, 128.527120);
	dessin.bezierCurveTo(210.784780, 125.068100, 207.318220, 121.419390, 203.177840, 118.516190);
	dessin.bezierCurveTo(199.485680, 116.028300, 182.382360, 108.213570, 177.224400, 106.929730);
	dessin.bezierCurveTo(176.209100, 105.851240, 179.692670, 104.713050, 180.620830, 103.608770);
	dessin.lineTo(180.843530, 103.447550);
	dessin.fill();
	
// #path6398
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.fillStyle = 'rgb(238, 0, 0)';
	dessin.moveTo(430.520830, 115.048140);
	dessin.bezierCurveTo(425.420880, 119.031470, 422.107900, 122.217430, 417.424950, 126.723510);
	dessin.bezierCurveTo(411.715460, 117.875140, 407.071830, 114.487300, 401.387370, 116.152870);
	dessin.bezierCurveTo(391.111380, 117.739320, 381.697250, 129.180660, 378.636750, 138.579130);
	dessin.bezierCurveTo(372.364290, 150.931920, 373.087760, 169.827620, 367.647630, 182.509930);
	dessin.bezierCurveTo(365.638740, 190.017360, 361.161840, 200.117390, 358.507010, 207.399450);
	dessin.bezierCurveTo(363.494070, 204.736790, 369.500300, 198.576460, 371.691070, 192.605220);
	dessin.bezierCurveTo(376.088160, 179.167600, 381.311960, 165.994160, 385.470670, 152.470770);
	dessin.bezierCurveTo(389.146460, 145.108150, 390.947210, 136.714380, 396.293810, 130.256840);
	dessin.bezierCurveTo(401.431090, 130.838720, 410.392450, 136.613310, 415.945980, 135.096990);
	dessin.bezierCurveTo(426.032570, 131.915770, 427.268320, 123.458370, 436.527750, 118.777140);
	dessin.bezierCurveTo(441.550780, 115.949460, 436.578950, 112.175020, 433.067540, 113.510600);
	dessin.bezierCurveTo(432.188730, 113.972220, 431.353530, 114.509960, 430.520830, 115.048140);
	dessin.fill();
	
// #path6400
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(135.363380, 105.947500);
	dessin.bezierCurveTo(135.363380, 112.289060, 119.441170, 124.494460, 99.405751, 133.511330);
	dessin.bezierCurveTo(79.370337, 142.528200, 62.467922, 145.095410, 61.234507, 139.308940);
	dessin.bezierCurveTo(60.001092, 133.522470, 74.882766, 121.475110, 94.842249, 112.102020);
	dessin.bezierCurveTo(114.801730, 102.728930, 132.620290, 99.420060, 135.082440, 104.629510);
	dessin.fill();
	
// #path6402
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(401.059420, 130.937810);
	dessin.bezierCurveTo(406.429010, 131.674390, 407.030740, 142.810720, 402.418330, 156.087340);
	dessin.bezierCurveTo(397.805930, 169.363960, 389.647550, 179.979100, 383.994010, 180.059860);
	dessin.bezierCurveTo(378.340480, 180.140660, 377.236500, 169.657760, 381.500860, 156.386110);
	dessin.bezierCurveTo(385.765230, 143.114470, 393.855640, 131.853980, 399.771700, 130.956200);
	dessin.fill();
	
// #path6404
	dessin.beginPath();
	dessin.globalAlpha = 0.9;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(277.677140, 21.879876);
	dessin.bezierCurveTo(277.677140, 24.734469, 274.125060, 30.228604, 269.655370, 34.287451);
	dessin.bezierCurveTo(265.185680, 38.346299, 261.414930, 39.501897, 261.139770, 36.897175);
	dessin.bezierCurveTo(260.864610, 34.292452, 264.184550, 28.869457, 268.637300, 24.650259);
	dessin.bezierCurveTo(273.090050, 20.431060, 277.065190, 18.941613, 277.614470, 21.286594);
	dessin.fill();
	
// #path6406
	dessin.beginPath();
	dessin.globalAlpha = 0.7;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(307.680050, 11.799838);
	dessin.bezierCurveTo(305.935840, 14.064384, 299.760940, 16.268012, 293.735080, 16.776359);
	dessin.bezierCurveTo(287.709230, 17.284706, 284.011790, 15.913918, 285.385040, 13.680667);
	dessin.bezierCurveTo(286.758300, 11.447416, 292.705580, 9.159400, 298.815970, 8.513570);
	dessin.bezierCurveTo(304.926360, 7.867740, 308.989930, 9.097673, 307.992840, 11.291166);
	dessin.fill();
	
// #path6408
	dessin.beginPath();
	dessin.globalAlpha = 0.1;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(399.574690, 102.955850);
	dessin.bezierCurveTo(399.574690, 109.297410, 383.652480, 121.502810, 363.617060, 130.519680);
	dessin.bezierCurveTo(343.581650, 139.536550, 326.679230, 142.103760, 325.445820, 136.317290);
	dessin.bezierCurveTo(324.212400, 130.530820, 339.094080, 118.483460, 359.053560, 109.110370);
	dessin.bezierCurveTo(379.013040, 99.737276, 396.831600, 96.428410, 399.293750, 101.637860);
	dessin.fill();
	
// #path6410
	dessin.beginPath();
	dessin.globalAlpha = 0.2;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(380.624380, 120.791020);
	dessin.bezierCurveTo(378.623350, 126.810980, 359.657270, 133.409220, 337.792710, 135.692030);
	dessin.bezierCurveTo(315.928140, 137.974830, 299.072830, 135.116580, 299.727840, 129.237140);
	dessin.bezierCurveTo(300.382850, 123.357710, 318.311280, 116.583510, 340.216170, 113.938760);
	dessin.bezierCurveTo(362.121060, 111.294010, 380.080080, 113.735230, 380.773570, 119.451850);
	dessin.fill();
	
// #path6412
	dessin.beginPath();
	dessin.globalAlpha = 0.3;
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(354.173560, 111.742910);
	dessin.bezierCurveTo(367.980460, 110.361360, 369.586490, 121.448240, 357.800490, 136.780750);
	dessin.bezierCurveTo(346.014490, 152.113250, 325.099100, 166.146090, 310.566630, 168.471540);
	dessin.bezierCurveTo(296.034150, 170.796980, 293.140540, 160.573990, 304.031900, 145.384640);
	dessin.bezierCurveTo(314.923250, 130.195290, 335.660500, 115.533100, 350.863470, 112.272580);
	dessin.fill();
	
// #path6414
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(215.567280, 31.524569);
	dessin.bezierCurveTo(215.567280, 31.524569, 216.359620, 25.998076, 213.586440, 24.419079);
	dessin.bezierCurveTo(210.813250, 22.840080, 202.493700, 18.892585, 193.777970, 19.287335);
	dessin.bezierCurveTo(185.062250, 19.682084, 180.704390, 23.629579, 180.704390, 23.629579);
	dessin.lineTo(183.081410, 28.761323);
	dessin.bezierCurveTo(183.081410, 28.761323, 188.231600, 27.971823, 192.589460, 29.550822);
	dessin.bezierCurveTo(196.947330, 31.129819, 198.532010, 32.314068, 200.909020, 33.498317);
	dessin.bezierCurveTo(203.286040, 34.682565, 215.171110, 31.524569, 215.567280, 31.524569);
	dessin.fill();
	
// #path6416
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.996375;
	dessin.moveTo(269.484460, 114.309740);
	dessin.lineTo(280.861430, 85.499106);
	dessin.lineTo(280.406350, 76.945947);
	dessin.lineTo(272.214940, 71.543953);
	dessin.lineTo(272.670010, 66.592123);
	dessin.lineTo(270.394620, 58.952425);
	dessin.lineTo(263.568430, 53.087138);
	dessin.bezierCurveTo(263.568430, 53.087138, 257.197330, 67.942623, 255.377020, 71.994120);
	dessin.bezierCurveTo(253.556700, 76.045615, 251.281310, 83.698441, 251.281310, 83.698441);
	dessin.lineTo(246.275430, 99.004096);
	dessin.fill();
	
// #path6418
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(219.569400, 236.472600);
	dessin.lineTo(293.875040, 247.049650);
	dessin.lineTo(294.724240, 271.588410);
	dessin.lineTo(271.371040, 278.780800);
	dessin.lineTo(228.910680, 262.703690);
	dessin.lineTo(218.720190, 249.588140);
	dessin.fill();
	dessin.stroke();
	
// #path6420
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(55, 57, 54)';
	dessin.moveTo(245.585380, 222.918240);
	dessin.lineTo(247.086580, 219.328270);
	dessin.lineTo(251.289940, 219.328270);
	dessin.lineTo(269.604580, 242.962240);
	dessin.bezierCurveTo(269.604580, 242.962240, 268.703870, 265.100390, 269.604580, 267.493700);
	dessin.bezierCurveTo(270.505310, 269.887010, 273.507710, 282.152750, 273.507710, 282.152750);
	dessin.bezierCurveTo(273.507710, 282.152750, 264.800740, 260.014600, 264.800740, 256.424630);
	dessin.bezierCurveTo(264.800740, 252.834650, 263.900030, 245.953880, 263.900030, 245.953880);
	dessin.fill();
	dessin.stroke();
	
// #path6422
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(235.977700, 222.319910);
	dessin.lineTo(245.885620, 222.918240);
	dessin.lineTo(264.200260, 245.654720);
	dessin.bezierCurveTo(264.200260, 245.654720, 264.200260, 268.391190, 269.604580, 275.870300);
	dessin.bezierCurveTo(275.008910, 283.349400, 285.217070, 290.230180, 285.217070, 290.230180);
	dessin.lineTo(241.081780, 281.255260);
	dessin.bezierCurveTo(241.081780, 281.255260, 232.074580, 267.792860, 231.173860, 263.903730);
	dessin.bezierCurveTo(230.273130, 260.014600, 226.670250, 242.663070, 226.670250, 242.663070);
	dessin.fill();
	dessin.stroke();
	
// #path6424
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.fillStyle = 'rgb(48, 50, 50)';
	dessin.moveTo(367.301590, 203.148810);
	dessin.bezierCurveTo(362.614090, 217.901180, 363.124040, 223.485370, 368.836630, 242.491320);
	dessin.bezierCurveTo(343.313010, 225.741660, 334.602970, 252.010740, 332.972840, 275.811180);
	dessin.bezierCurveTo(335.707030, 348.840350, 355.737410, 359.067030, 389.533050, 359.490120);
	dessin.bezierCurveTo(424.751840, 359.942400, 445.120320, 317.400400, 447.208470, 273.450920);
	dessin.lineTo(447.062100, 246.342220);
	dessin.bezierCurveTo(445.068500, 222.906680, 437.523820, 200.959270, 425.445850, 194.934770);
	dessin.bezierCurveTo(403.381830, 183.929220, 409.038700, 189.461530, 396.067390, 201.292420);
	dessin.bezierCurveTo(386.158130, 201.820850, 367.943620, 203.148670, 367.301590, 203.148810);
	dessin.moveTo(398.157000, 217.090440);
	dessin.bezierCurveTo(410.023750, 216.742800, 418.454900, 214.943760, 423.898170, 231.763250);
	dessin.lineTo(425.702150, 238.415300);
	dessin.bezierCurveTo(432.608870, 269.523710, 422.926400, 308.159440, 401.861270, 326.847110);
	dessin.bezierCurveTo(383.210560, 343.392820, 370.087100, 319.181760, 367.755550, 306.284170);
	dessin.bezierCurveTo(361.880420, 273.784320, 364.726290, 258.859930, 381.720260, 229.319680);
	dessin.bezierCurveTo(386.357240, 221.259330, 391.500040, 217.285470, 398.157000, 217.090440);
	dessin.fill();
	
// #path6426
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.fillStyle = 'rgb(48, 50, 50)';
	dessin.moveTo(108.674850, 195.572640);
	dessin.bezierCurveTo(62.034318, 195.580640, 14.113926, 247.370630, 8.429756, 312.449240);
	dessin.bezierCurveTo(0.970432, 398.337760, 45.632741, 439.126980, 107.040590, 439.126990);
	dessin.bezierCurveTo(168.448430, 439.126990, 209.565400, 382.459820, 213.206030, 322.373300);
	dessin.lineTo(215.888690, 291.710090);
	dessin.bezierCurveTo(208.937170, 227.629230, 170.201000, 198.785760, 112.035880, 195.664820);
	dessin.bezierCurveTo(110.918570, 195.604820, 109.794220, 195.572420, 108.674850, 195.572620);
	dessin.moveTo(123.198210, 230.414400);
	dessin.bezierCurveTo(143.887480, 229.939110, 163.075140, 242.383900, 172.565290, 265.379060);
	dessin.lineTo(175.710480, 274.473560);
	dessin.bezierCurveTo(187.752120, 317.004130, 170.871050, 369.825830, 134.144690, 395.375080);
	dessin.bezierCurveTo(101.627830, 417.995940, 69.205624, 403.869420, 55.607545, 367.262020);
	dessin.bezierCurveTo(40.280517, 326.000100, 54.814374, 280.506660, 86.686902, 248.887340);
	dessin.bezierCurveTo(96.745397, 238.908750, 111.592020, 230.681040, 123.198210, 230.414400);
	dessin.fill();
	
// #line6428
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(114.895660, 405.605650);
	dessin.lineTo(114.868030, 405.553530);
	dessin.stroke();
	
// #line6430
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.moveTo(160.261340, 432.040650);
	dessin.lineTo(160.237660, 432.034760);
	dessin.stroke();
	
// #line6432
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(159.413730, 354.698060);
	dessin.lineTo(159.320980, 355.013700);
	dessin.stroke();
	
// #path6434
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(165.763310, 347.477540);
	dessin.lineTo(165.670610, 347.793150);
	dessin.moveTo(172.113920, 340.257000);
	dessin.lineTo(172.021220, 340.572610);
	dessin.stroke();
	
// #line6436
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(159.347640, 355.064820);
	dessin.lineTo(159.320980, 355.013700);
	dessin.stroke();
	
// #path6438
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(184.814010, 325.817890);
	dessin.lineTo(184.814010, 325.817890);
	dessin.lineTo(184.722210, 326.133490);
	dessin.moveTo(191.165520, 318.598330);
	dessin.lineTo(191.165520, 318.598330);
	dessin.lineTo(191.072820, 318.912950);
	dessin.stroke();
	
// #line6440
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(165.698180, 347.844270);
	dessin.lineTo(165.670560, 347.793150);
	dessin.stroke();
	
// #line6442
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(172.048750, 340.624690);
	dessin.lineTo(172.021120, 340.572630);
	dessin.stroke();
	
// #line6444
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(184.748890, 326.184630);
	dessin.lineTo(184.722240, 326.133510);
	dessin.stroke();
	
// #polyline6446
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.moveTo(66.923000, 434.092000);
	dessin.lineTo(66.923000, 434.092000);
	dessin.lineTo(66.387000, 434.227000);
	dessin.stroke();
	dessin.restore();
	
// #polyline6448
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.moveTo(67.109000, 434.092000);
	dessin.lineTo(67.109000, 434.092000);
	dessin.lineTo(66.573000, 434.226000);
	dessin.stroke();
	dessin.restore();
	
// #path6450
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.moveTo(72.623379, 429.200210);
	dessin.lineTo(72.623379, 429.200210);
	dessin.lineTo(72.366831, 429.264110);
	dessin.moveTo(72.781255, 429.236610);
	dessin.lineTo(72.781255, 429.236610);
	dessin.lineTo(72.525694, 429.299510);
	dessin.stroke();
	
// #path6452
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(251.098250, 272.780740);
	dessin.lineTo(251.050850, 272.773740);
	dessin.bezierCurveTo(251.022250, 272.772770, 250.991650, 272.778740, 250.962050, 272.784540);
	dessin.stroke();
	
// #path6454
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(71.499500, 429.362440);
	dessin.lineTo(71.578440, 429.350640);
	dessin.bezierCurveTo(71.612970, 429.348640, 71.648500, 429.354640, 71.684019, 429.360640);
	dessin.stroke();
	
// #path6456
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(71.541929, 428.040040);
	dessin.bezierCurveTo(71.482729, 427.999740, 71.424508, 427.959440, 71.363332, 427.923050);
	dessin.bezierCurveTo(71.313012, 427.892550, 71.260712, 427.865050, 71.208416, 427.837550);
	dessin.moveTo(71.542915, 428.040070);
	dessin.bezierCurveTo(71.512325, 428.006670, 71.480755, 427.973270, 71.440296, 427.950570);
	dessin.lineTo(71.421546, 427.940570);
	dessin.stroke();
	
// #path6458
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(185.681340, 324.832740);
	dessin.bezierCurveTo(185.721840, 324.818040, 185.762240, 324.803240, 185.802710, 324.789440);
	dessin.bezierCurveTo(185.844110, 324.773740, 185.884610, 324.759940, 185.927040, 324.745140);
	dessin.bezierCurveTo(185.969440, 324.729440, 186.012840, 324.714640, 186.055310, 324.698940);
	dessin.stroke();
	
// #path6460
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(172.981210, 339.271840);
	dessin.bezierCurveTo(173.021610, 339.257140, 173.061110, 339.243340, 173.101590, 339.228540);
	dessin.bezierCurveTo(173.142990, 339.213840, 173.184490, 339.200040, 173.225910, 339.184340);
	dessin.bezierCurveTo(173.268310, 339.168640, 173.311710, 339.154840, 173.354190, 339.139140);
	dessin.stroke();
	
// #path6462
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(166.630640, 346.492380);
	dessin.bezierCurveTo(166.671140, 346.477580, 166.711540, 346.463880, 166.751020, 346.449080);
	dessin.bezierCurveTo(166.792420, 346.434380, 166.833920, 346.419580, 166.875350, 346.404880);
	dessin.bezierCurveTo(166.918750, 346.389180, 166.961150, 346.374380, 167.004610, 346.358680);
	dessin.stroke();
	
// #path6464
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(160.280080, 353.712930);
	dessin.bezierCurveTo(160.319580, 353.698130, 160.359980, 353.684430, 160.400460, 353.669630);
	dessin.bezierCurveTo(160.441860, 353.654930, 160.483360, 353.639130, 160.524790, 353.625430);
	dessin.bezierCurveTo(160.567190, 353.609730, 160.611590, 353.594930, 160.653060, 353.579230);
	dessin.stroke();
	
// #path6466
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(147.578960, 368.152050);
	dessin.bezierCurveTo(147.619360, 368.137350, 147.659860, 368.124550, 147.700320, 368.109750);
	dessin.bezierCurveTo(147.741720, 368.094050, 147.783220, 368.080250, 147.824650, 368.064550);
	dessin.bezierCurveTo(147.867050, 368.049750, 147.909550, 368.035050, 147.952930, 368.018350);
	dessin.stroke();
	
// #path6468
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(134.878820, 382.593120);
	dessin.bezierCurveTo(134.919320, 382.578420, 134.958720, 382.564620, 134.999200, 382.549820);
	dessin.bezierCurveTo(135.040600, 382.535120, 135.082100, 382.520320, 135.123530, 382.505520);
	dessin.bezierCurveTo(135.166930, 382.489820, 135.209330, 382.475020, 135.251800, 382.460320);
	dessin.stroke();
	
// #path6470
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(115.829110, 404.252780);
	dessin.bezierCurveTo(115.869610, 404.238980, 115.909010, 404.224280, 115.949490, 404.209480);
	dessin.bezierCurveTo(115.990890, 404.194680, 116.032390, 404.180980, 116.073810, 404.165280);
	dessin.bezierCurveTo(116.116210, 404.149580, 116.158710, 404.135780, 116.202090, 404.120080);
	dessin.stroke();
	
// #path6472
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(173.546600, 339.975810);
	dessin.bezierCurveTo(173.616700, 339.868650, 173.686710, 339.761480, 173.704480, 339.639560);
	dessin.bezierCurveTo(173.721280, 339.535350, 173.699480, 339.420300, 173.637380, 339.335750);
	dessin.bezierCurveTo(173.573280, 339.247250, 173.463710, 339.192210, 173.355170, 339.139110);
	dessin.moveTo(172.987130, 339.802770);
	dessin.bezierCurveTo(173.045330, 339.822470, 173.104550, 339.842070, 173.162760, 339.861770);
	dessin.bezierCurveTo(173.223960, 339.882370, 173.286100, 339.902070, 173.348270, 339.919770);
	dessin.bezierCurveTo(173.414370, 339.940370, 173.481480, 339.958170, 173.547590, 339.977770);
	dessin.moveTo(172.987130, 339.802770);
	dessin.bezierCurveTo(173.045330, 339.738870, 173.102570, 339.674960, 173.129210, 339.593340);
	dessin.bezierCurveTo(173.149910, 339.531440, 173.153910, 339.457670, 173.124210, 339.402620);
	dessin.bezierCurveTo(173.096610, 339.348520, 173.038410, 339.310220, 172.981140, 339.271840);
	dessin.stroke();
	
// #path6474
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(166.636560, 347.023300);
	dessin.bezierCurveTo(166.694760, 347.043000, 166.753980, 347.062600, 166.812200, 347.081300);
	dessin.bezierCurveTo(166.874400, 347.101900, 166.935540, 347.121600, 166.997710, 347.140300);
	dessin.bezierCurveTo(167.062810, 347.160900, 167.129930, 347.178600, 167.197020, 347.197300);
	dessin.moveTo(166.636560, 347.023260);
	dessin.bezierCurveTo(166.693760, 346.959360, 166.752010, 346.894480, 166.779640, 346.813840);
	dessin.bezierCurveTo(166.800340, 346.751940, 166.802340, 346.677190, 166.773640, 346.623120);
	dessin.bezierCurveTo(166.746040, 346.568020, 166.688740, 346.529720, 166.630560, 346.492340);
	dessin.stroke();
	
// #path6476
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(160.846460, 354.415910);
	dessin.bezierCurveTo(160.917460, 354.308740, 160.986580, 354.201570, 161.004340, 354.078670);
	dessin.bezierCurveTo(161.020140, 353.975440, 160.998340, 353.859430, 160.937240, 353.774870);
	dessin.bezierCurveTo(160.873140, 353.686370, 160.764560, 353.632300, 160.654050, 353.578230);
	dessin.moveTo(160.286000, 354.242870);
	dessin.bezierCurveTo(160.345200, 354.263570, 160.403420, 354.283170, 160.462630, 354.302870);
	dessin.bezierCurveTo(160.523830, 354.322570, 160.585970, 354.342170, 160.648130, 354.360870);
	dessin.bezierCurveTo(160.714230, 354.380570, 160.780350, 354.399170, 160.846460, 354.418870);
	dessin.moveTo(160.286000, 354.242890);
	dessin.bezierCurveTo(160.345200, 354.179990, 160.401450, 354.115080, 160.429080, 354.034450);
	dessin.bezierCurveTo(160.449780, 353.972550, 160.452780, 353.898760, 160.423080, 353.842720);
	dessin.bezierCurveTo(160.395480, 353.788620, 160.337280, 353.751320, 160.280000, 353.712950);
	dessin.stroke();
	
// #path6478
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(148.146320, 368.856010);
	dessin.bezierCurveTo(148.215420, 368.749820, 148.286440, 368.642660, 148.304200, 368.518770);
	dessin.bezierCurveTo(148.320000, 368.415530, 148.297200, 368.299510, 148.237100, 368.215950);
	dessin.bezierCurveTo(148.173000, 368.127450, 148.063440, 368.073390, 147.953910, 368.018320);
	dessin.moveTo(147.585860, 368.682970);
	dessin.bezierCurveTo(147.645060, 368.702670, 147.703280, 368.722270, 147.761500, 368.741970);
	dessin.bezierCurveTo(147.823700, 368.762570, 147.884840, 368.781270, 147.947010, 368.799970);
	dessin.bezierCurveTo(148.013110, 368.820570, 148.079230, 368.838270, 148.146320, 368.857970);
	dessin.moveTo(147.585860, 368.682960);
	dessin.bezierCurveTo(147.644060, 368.619060, 147.701310, 368.555130, 147.728940, 368.474510);
	dessin.bezierCurveTo(147.750640, 368.412610, 147.752640, 368.337860, 147.722940, 368.281820);
	dessin.bezierCurveTo(147.695340, 368.228720, 147.638040, 368.190320, 147.579860, 368.152040);
	dessin.stroke();
	
// #path6480
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.418803;
	dessin.moveTo(116.394500, 404.956730);
	dessin.bezierCurveTo(116.464600, 404.849570, 116.534620, 404.742410, 116.552380, 404.619510);
	dessin.bezierCurveTo(116.568180, 404.517260, 116.546380, 404.401230, 116.485280, 404.316690);
	dessin.bezierCurveTo(116.420180, 404.228190, 116.311620, 404.174110, 116.202090, 404.120040);
	dessin.moveTo(115.834040, 404.783690);
	dessin.bezierCurveTo(115.893240, 404.803390, 115.951460, 404.822990, 116.009680, 404.842690);
	dessin.bezierCurveTo(116.071880, 404.863390, 116.133020, 404.881990, 116.195180, 404.900690);
	dessin.bezierCurveTo(116.261280, 404.921390, 116.327400, 404.939090, 116.394500, 404.958690);
	dessin.stroke();
	
// #path6482
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.moveTo(115.834040, 404.783690);
	dessin.bezierCurveTo(115.892240, 404.719790, 115.949490, 404.654900, 115.977120, 404.575260);
	dessin.bezierCurveTo(115.997820, 404.512360, 116.000820, 404.438590, 115.971120, 404.382560);
	dessin.bezierCurveTo(115.942520, 404.328460, 115.886220, 404.291160, 115.828040, 404.252780);
	dessin.stroke();
	
// #path6484
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.418803;
	dessin.moveTo(160.032410, 419.763560);
	dessin.bezierCurveTo(160.022410, 419.819560, 160.013710, 419.872700, 160.004810, 419.928730);
	dessin.bezierCurveTo(159.995810, 419.986730, 159.988010, 420.043780, 159.982110, 420.101790);
	dessin.bezierCurveTo(159.976110, 420.163690, 159.970310, 420.224680, 159.965310, 420.286630);
	dessin.moveTo(159.967310, 420.286630);
	dessin.bezierCurveTo(160.128150, 420.293630, 160.288980, 420.300430, 160.445870, 420.277630);
	dessin.bezierCurveTo(160.625460, 420.253030, 160.801090, 420.190130, 160.956010, 420.101640);
	dessin.bezierCurveTo(161.103030, 420.018040, 161.231300, 419.911870, 161.360570, 419.805690);
	dessin.moveTo(160.967850, 419.441910);
	dessin.bezierCurveTo(161.010250, 419.478310, 161.054650, 419.515610, 161.097110, 419.553010);
	dessin.bezierCurveTo(161.141510, 419.592310, 161.185910, 419.631710, 161.228340, 419.672960);
	dessin.bezierCurveTo(161.273740, 419.716260, 161.318140, 419.760460, 161.362540, 419.804710);
	dessin.stroke();
	
// #path6486
	dessin.beginPath();
	dessin.moveTo(234.097970, 269.684670);
	dessin.lineTo(241.384930, 281.236170);
	dessin.lineTo(258.938770, 284.865110);
	dessin.lineTo(285.436280, 289.816450);
	dessin.lineTo(291.728630, 290.145820);
	dessin.lineTo(303.983750, 288.825410);
	dessin.lineTo(314.251610, 287.835340);
	dessin.bezierCurveTo(314.251610, 287.835340, 324.519470, 285.855180, 324.850020, 285.855180);
	dessin.bezierCurveTo(325.181560, 285.855180, 241.383940, 263.743260, 241.383940, 263.743260);
	
// #path6488
	dessin.beginPath();
	dessin.moveTo(212.642620, 277.451880);
	dessin.lineTo(216.005380, 307.608240);
	dessin.lineTo(213.062960, 333.576230);
	dessin.lineTo(200.872960, 369.595370);
	dessin.lineTo(189.523650, 389.280780);
	dessin.lineTo(165.984340, 417.342950);
	dessin.lineTo(139.082270, 434.515330);
	dessin.lineTo(102.932610, 440.379070);
	dessin.lineTo(73.088127, 434.095510);
	dessin.bezierCurveTo(73.088127, 434.095510, 51.650539, 425.718730, 51.650539, 425.300880);
	dessin.bezierCurveTo(51.650539, 424.883030, 75.609209, 395.982180, 75.609209, 395.982180);
	dessin.lineTo(96.626452, 407.290820);
	dessin.lineTo(114.701280, 404.359950);
	dessin.lineTo(134.037140, 395.564330);
	dessin.lineTo(145.806800, 385.931040);
	dessin.bezierCurveTo(145.806800, 385.931040, 156.735770, 372.109370, 157.156110, 372.109370);
	dessin.bezierCurveTo(157.576450, 372.109370, 167.244390, 355.774680, 167.244390, 355.774680);
	dessin.lineTo(174.390250, 338.602290);
	dessin.lineTo(177.753010, 322.686440);
	
// #path6490
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(97.896367, 408.136380);
	dessin.bezierCurveTo(134.822580, 417.763750, 175.095760, 386.203400, 187.847200, 337.646640);
	dessin.bezierCurveTo(200.598650, 289.087920, 181.000320, 241.918440, 144.074110, 232.291060);
	dessin.stroke();
	
// #path6492
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(144.074110, 232.291060);
	dessin.bezierCurveTo(107.147900, 222.663670, 66.874719, 254.224040, 54.123272, 302.780790);
	dessin.bezierCurveTo(41.371825, 351.339500, 60.970157, 398.508980, 97.897353, 408.136380);
	dessin.stroke();
	
// #path6494
	dessin.beginPath();
	dessin.moveTo(184.347290, 270.559710);
	dessin.bezierCurveTo(175.832840, 250.066130, 160.907640, 237.542260, 143.861960, 233.098250);
	dessin.lineTo(144.286260, 231.481880);
	dessin.bezierCurveTo(161.463160, 235.961300, 176.253190, 249.527340, 184.833750, 270.177260);
	dessin.lineTo(184.347290, 270.559710);
	
// #path6496
	dessin.beginPath();
	dessin.moveTo(98.108513, 407.329170);
	dessin.bezierCurveTo(116.402390, 412.098620, 135.690890, 407.064690, 151.819900, 394.426780);
	dessin.lineTo(152.055730, 394.995070);
	dessin.bezierCurveTo(135.628730, 407.868950, 116.317540, 413.801510, 97.684221, 408.944560);
	dessin.lineTo(98.108513, 407.329170);
	
// #path6498
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(151.776490, 202.959580);
	dessin.bezierCurveTo(102.531010, 190.120110, 48.822586, 232.208470, 31.816380, 296.965230);
	dessin.bezierCurveTo(14.811162, 361.721980, 40.947533, 424.629360, 90.193991, 437.467840);
	dessin.stroke();
	
// #path6500
	dessin.beginPath();
	dessin.moveTo(151.564340, 203.766780);
	dessin.bezierCurveTo(127.111320, 197.391770, 101.384440, 204.253460, 79.824498, 221.147590);
	dessin.lineTo(79.587684, 220.579310);
	dessin.bezierCurveTo(101.445620, 203.450190, 127.196180, 195.688890, 151.987640, 202.152380);
	dessin.lineTo(151.564340, 203.766780);
	
// #path6502
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(70.390421, 432.535180);
	dessin.bezierCurveTo(71.807358, 432.904870, 73.227255, 433.228340, 74.448821, 433.465290);
	dessin.moveTo(133.482600, 198.437880);
	dessin.bezierCurveTo(132.961610, 198.289430, 132.439640, 198.147850, 131.996600, 198.032820);
	dessin.bezierCurveTo(82.752111, 185.187450, 29.039736, 227.270890, 12.027610, 292.025690);
	dessin.bezierCurveTo(-4.984515, 356.780470, 21.145936, 419.689820, 70.389434, 432.534210);
	dessin.moveTo(71.138358, 432.725930);
	dessin.lineTo(90.933048, 437.656620);
	dessin.moveTo(131.246690, 197.841090);
	dessin.lineTo(151.035450, 202.770810);
	dessin.moveTo(91.966150, 406.207360);
	dessin.bezierCurveTo(127.450750, 410.301360, 162.829780, 378.954340, 174.652720, 334.358860);
	dessin.bezierCurveTo(186.671030, 288.592380, 169.950970, 244.058850, 136.813790, 230.934260);
	dessin.moveTo(57.895522, 371.273670);
	dessin.lineTo(109.122340, 333.729610);
	dessin.moveTo(100.018810, 330.387750);
	dessin.lineTo(53.518410, 358.558090);
	dessin.moveTo(50.787155, 343.268510);
	dessin.lineTo(111.997650, 301.743530);
	dessin.moveTo(50.276032, 329.932540);
	dessin.lineTo(104.330800, 334.207450);
	dessin.moveTo(100.497370, 319.884340);
	dessin.lineTo(73.203574, 393.941090);
	dessin.moveTo(64.590451, 383.558620);
	dessin.lineTo(125.892720, 340.891160);
	dessin.moveTo(111.518110, 341.368000);
	dessin.lineTo(83.724036, 402.131060);
	dessin.moveTo(93.566617, 406.808090);
	dessin.lineTo(111.517120, 341.368000);
	dessin.moveTo(105.768460, 406.774660);
	dessin.lineTo(129.245610, 352.349250);
	dessin.moveTo(115.830090, 404.865310);
	dessin.lineTo(106.247020, 353.781760);
	dessin.moveTo(128.287500, 401.045620);
	dessin.lineTo(122.537850, 357.122620);
	dessin.moveTo(137.870570, 396.272230);
	dessin.lineTo(131.641380, 359.032970);
	dessin.moveTo(150.807520, 388.632860);
	dessin.lineTo(144.578330, 347.574870);
	dessin.moveTo(160.390590, 378.607280);
	dessin.lineTo(136.433900, 359.510800);
	dessin.moveTo(167.576910, 365.717670);
	dessin.lineTo(144.578330, 347.575870);
	dessin.moveTo(75.582568, 261.638270);
	dessin.lineTo(104.330800, 334.207450);
	dessin.moveTo(66.642839, 272.756170);
	dessin.lineTo(112.955760, 322.749350);
	dessin.moveTo(60.415618, 284.811040);
	dessin.lineTo(118.225860, 306.516900);
	dessin.moveTo(54.726161, 300.571570);
	dessin.lineTo(118.225860, 306.516900);
	dessin.moveTo(51.518318, 315.465900);
	dessin.lineTo(109.122340, 333.729610);
	dessin.moveTo(84.075310, 250.840870);
	dessin.lineTo(124.934610, 295.535670);
	dessin.moveTo(97.372416, 240.589170);
	dessin.lineTo(120.142080, 311.768110);
	dessin.moveTo(108.348740, 235.029240);
	dessin.lineTo(117.746310, 324.658700);
	dessin.moveTo(119.518470, 231.689350);
	dessin.lineTo(110.080450, 327.522730);
	dessin.moveTo(130.496770, 230.581290);
	dessin.lineTo(120.143070, 311.768110);
	dessin.moveTo(132.427790, 230.610790);
	dessin.lineTo(135.474800, 311.291270);
	dessin.moveTo(146.065320, 232.847540);
	dessin.lineTo(118.225860, 306.516900);
	dessin.moveTo(154.161400, 240.155590);
	dessin.lineTo(126.371280, 305.084390);
	dessin.moveTo(162.786360, 249.225490);
	dessin.lineTo(114.393420, 295.535670);
	dessin.stroke();
	
// #path6504
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(119.733580, 368.068470);
	dessin.bezierCurveTo(137.827150, 372.785820, 157.560670, 357.321230, 163.808610, 333.529040);
	dessin.bezierCurveTo(170.056550, 309.736850, 160.453750, 286.624040, 142.360170, 281.906700);
	dessin.bezierCurveTo(124.266590, 277.189360, 104.534070, 292.653950, 98.286123, 316.446130);
	dessin.bezierCurveTo(92.038180, 340.238320, 101.640990, 363.351130, 119.733580, 368.068470);
	dessin.lineTo(119.733580, 368.068470);
	dessin.lineTo(119.733580, 368.068470);
	dessin.fill();
	dessin.stroke();
	
// #path6506
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(20, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.777778;
	dessin.fillStyle = 'rgb(133, 121, 121)';
	dessin.moveTo(164.928590, 329.755670);
	dessin.bezierCurveTo(161.439870, 353.298280, 144.014380, 370.382110, 125.576080, 368.336590);
	dessin.bezierCurveTo(107.137770, 366.291080, 94.355211, 345.856020, 96.708835, 322.187490);
	dessin.bezierCurveTo(99.062460, 298.518950, 115.701030, 280.177120, 134.284230, 280.765550);
	dessin.bezierCurveTo(152.867430, 281.353990, 166.674290, 300.659890, 165.464680, 324.364650);
	dessin.fill();
	dessin.stroke();
	
// #path6508
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(146.713600, 283.469980);
	dessin.bezierCurveTo(129.869220, 282.915450, 113.872430, 298.085080, 108.347760, 318.833320);
	dessin.bezierCurveTo(102.642510, 340.559820, 110.154450, 361.719030, 125.446720, 368.894350);
	dessin.stroke();
	
// #polygon6510
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(105.487000, 330.647000);
	dessin.lineTo(148.272000, 283.153000);
	dessin.lineTo(141.003000, 311.015000);
	dessin.fill();
	dessin.restore();
	
// #polyline6512
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(148.272000, 283.153000);
	dessin.lineTo(141.003000, 311.015000);
	dessin.lineTo(105.487000, 330.647000);
	dessin.stroke();
	dessin.restore();
	
// #polygon6514
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(130.908000, 336.858000);
	dessin.lineTo(142.619000, 346.549000);
	dessin.lineTo(156.751000, 347.357000);
	dessin.lineTo(137.773000, 317.879000);
	dessin.fill();
	dessin.restore();
	
// #polyline6516
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(137.773000, 317.879000);
	dessin.lineTo(130.908000, 336.858000);
	dessin.lineTo(142.619000, 346.549000);
	dessin.lineTo(156.751000, 347.357000);
	dessin.stroke();
	dessin.restore();
	
// #polygon6518
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(152.713000, 315.457000);
	dessin.lineTo(185.825000, 233.485000);
	dessin.fill();
	dessin.restore();
	
// #line6520
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(189.351960, 231.994130);
	dessin.lineTo(156.679520, 312.588100);
	dessin.stroke();
	
// #path6522
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(64.830225, 145.706520);
	dessin.bezierCurveTo(64.830225, 145.706520, 64.830225, 150.756180, 83.581947, 143.181680);
	dessin.bezierCurveTo(102.333670, 135.607190, 137.337740, 109.901720, 170.246000, 117.931420);
	dessin.bezierCurveTo(195.078910, 123.991800, 223.967260, 145.706520, 232.076170, 169.946060);
	dessin.bezierCurveTo(240.185070, 194.184610, 238.664530, 219.433890, 245.760070, 222.464080);
	dessin.moveTo(64.830225, 145.706520);
	dessin.bezierCurveTo(60.775772, 142.676320, 63.309682, 139.140780, 75.473041, 129.042440);
	dessin.bezierCurveTo(87.636400, 118.942150, 131.222020, 80.563359, 194.065550, 109.348190);
	dessin.bezierCurveTo(256.909070, 138.131040, 249.307340, 221.454340, 245.760070, 222.465070);
	dessin.moveTo(245.760070, 222.464080);
	dessin.bezierCurveTo(245.760070, 222.464080, 230.555620, 221.958710, 223.967260, 218.928530);
	dessin.bezierCurveTo(217.378900, 215.899330, 216.872710, 213.878880, 213.324440, 199.738640);
	dessin.bezierCurveTo(209.777170, 185.599400, 191.215560, 120.182160, 133.439850, 120.687510);
	dessin.stroke();
	
// #path6524
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(234.609090, 125.506900);
	dessin.lineTo(192.545000, 239.128150);
	dessin.bezierCurveTo(192.545000, 239.128150, 183.328990, 204.700800, 183.376350, 207.775240);
	dessin.lineTo(220.926170, 119.950890);
	dessin.bezierCurveTo(220.926170, 119.951880, 227.007360, 115.407580, 234.609090, 125.506900);
	dessin.lineTo(234.609090, 125.506900);
	dessin.fill();
	dessin.stroke();
	
// #polyline6526
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(179.769000, 208.853000);
	dessin.lineTo(149.887000, 278.710000);
	dessin.lineTo(138.984000, 279.518000);
	dessin.lineTo(128.485000, 308.996000);
	dessin.lineTo(104.661000, 327.167000);
	dessin.stroke();
	dessin.restore();
	
// #path6528
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(109.265410, 324.101240);
	dessin.bezierCurveTo(109.265410, 324.101240, 108.468140, 344.350020, 112.851170, 348.716360);
	dessin.stroke();
	
// #path6530
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(112.851170, 348.716360);
	dessin.bezierCurveTo(117.234200, 353.082710, 166.640510, 352.686470, 166.640510, 352.686470);
	dessin.lineTo(169.031350, 346.730310);
	dessin.lineTo(161.858840, 339.187300);
	dessin.lineTo(167.039150, 334.422760);
	dessin.lineTo(168.632710, 312.587120);
	dessin.lineTo(194.929920, 244.697920);
	dessin.lineTo(193.734990, 213.334190);
	dessin.bezierCurveTo(193.734990, 213.334190, 192.937720, 210.951910, 183.375370, 207.776220);
	dessin.stroke();
	
// #polygon6532
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(164.990000, 130.857000);
	dessin.lineTo(137.658000, 201.257000);
	dessin.fill();
	dessin.restore();
	
// #line6534
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(141.824390, 200.307920);
	dessin.lineTo(168.793550, 131.091400);
	dessin.stroke();
	
// #polygon6536
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 2.434245);
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(178.656000, 143.281000);
	dessin.lineTo(155.465000, 206.640000);
	dessin.fill();
	dessin.restore();
	
// #path6538
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(159.394990, 205.600420);
	dessin.lineTo(182.278130, 143.306550);
	dessin.moveTo(126.811360, 231.125980);
	dessin.lineTo(93.826126, 317.342800);
	dessin.bezierCurveTo(93.826126, 317.342800, 92.869990, 326.393050, 96.694536, 329.728030);
	dessin.moveTo(166.641500, 352.686470);
	dessin.lineTo(174.890520, 356.484530);
	dessin.moveTo(167.039150, 334.423740);
	dessin.lineTo(180.836520, 339.248250);
	dessin.moveTo(168.402800, 323.087580);
	dessin.lineTo(183.539160, 326.858110);
	dessin.moveTo(168.402800, 323.087580);
	dessin.lineTo(181.917970, 311.775980);
	dessin.moveTo(172.728600, 305.851290);
	dessin.lineTo(181.917970, 298.309250);
	dessin.moveTo(190.435380, 42.709599);
	dessin.bezierCurveTo(197.255630, 27.759227, 262.387370, 20.624225, 255.908530, 41.010649);
	dessin.bezierCurveTo(249.429700, 61.397073, 228.628550, 112.025410, 228.628550, 112.025410);
	dessin.bezierCurveTo(228.628550, 112.025410, 228.968970, 119.161400, 199.983920, 111.685230);
	dessin.moveTo(190.435380, 42.709599);
	dessin.lineTo(174.408010, 101.152320);
	dessin.moveTo(242.609460, 112.364610);
	dessin.lineTo(237.493290, 126.295410);
	dessin.lineTo(234.083160, 128.673740);
	dessin.moveTo(242.609460, 112.364610);
	dessin.bezierCurveTo(242.609460, 112.364610, 242.268050, 107.948120, 233.060920, 104.888440);
	dessin.moveTo(241.245800, 109.986280);
	dessin.lineTo(265.115670, 44.747750);
	dessin.stroke();
	
// #path6540
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 2.791955;
	dessin.lineCap = 'round';
	dessin.moveTo(192.948570, 22.598468);
	dessin.bezierCurveTo(216.798700, 31.353766, 215.543590, 120.160320, 149.640230, 275.885660);
	dessin.moveTo(186.506250, 20.929997);
	dessin.bezierCurveTo(186.506250, 22.180613, 216.171150, 15.719095, 216.171150, 30.103150);
	dessin.stroke();
	
// #path6542
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(310.082700, 20.280109);
	dessin.lineTo(291.120800, 21.822732);
	dessin.bezierCurveTo(291.120800, 21.822732, 287.251850, 22.594536, 282.220540, 28.377653);
	dessin.bezierCurveTo(277.189230, 34.161754, 270.610740, 43.415529, 261.711460, 43.030119);
	dessin.moveTo(309.065380, 7.857516);
	dessin.lineTo(288.668790, 9.599726);
	dessin.bezierCurveTo(288.668790, 9.599726, 287.307110, 9.783583, 284.951800, 10.802167);
	dessin.bezierCurveTo(282.578720, 11.828616, 278.005250, 14.192202, 272.767720, 20.214235);
	dessin.lineTo(270.816960, 22.506049);
	dessin.bezierCurveTo(268.612620, 25.123298, 266.208960, 28.373720, 263.145180, 30.171973);
	dessin.bezierCurveTo(262.852120, 30.344031, 262.570900, 30.540669, 262.236400, 30.578030);
	dessin.stroke();
	
// #path6544
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(263.146160, 30.170990);
	dessin.bezierCurveTo(258.229310, 32.232737, 255.749670, 43.767511, 265.115670, 44.747750);
	dessin.stroke();
	
// #path6546
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(309.065380, 7.857516);
	dessin.bezierCurveTo(303.504200, 10.255514, 304.278780, 19.894699, 310.082700, 20.280109);
	dessin.moveTo(306.600540, 11.026334);
	dessin.lineTo(322.080290, 10.255514);
	dessin.moveTo(307.034700, 18.320613);
	dessin.lineTo(323.245610, 17.265651);
	dessin.moveTo(329.432370, 7.942070);
	dessin.bezierCurveTo(328.658780, 2.157969, 321.692500, -0.540885, 322.466100, 13.725188);
	dessin.moveTo(322.693040, 14.084052);
	dessin.bezierCurveTo(322.693040, 14.084052, 325.949240, 31.462900, 330.978570, 19.123878);
	dessin.moveTo(309.065380, 7.857516);
	dessin.bezierCurveTo(309.065380, 7.857516, 311.067450, 6.903822, 311.708820, 10.411841);
	dessin.moveTo(310.619480, 20.552452);
	dessin.bezierCurveTo(310.683580, 20.552452, 311.963400, 20.106084, 312.219940, 18.639166);
	dessin.moveTo(327.222110, 7.432778);
	dessin.lineTo(359.455460, 4.939411);
	dessin.moveTo(328.259160, 19.068820);
	dessin.lineTo(360.825030, 15.950144);
	dessin.moveTo(360.825030, 15.951127);
	dessin.bezierCurveTo(365.616570, 15.561785, 363.759550, 5.329737, 359.455460, 4.940394);
	dessin.stroke();
	
// #path6548
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(359.455460, 4.939411);
	dessin.bezierCurveTo(356.186440, 8.382539, 357.120860, 14.492075, 360.825030, 15.950144);
	dessin.moveTo(327.819080, 11.232803);
	dessin.bezierCurveTo(326.388330, 13.133308, 326.627120, 14.795880, 327.342490, 16.221504);
	dessin.stroke();
	
// #path6550
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(281.145010, 12.212060);
	dessin.bezierCurveTo(281.145010, 12.212060, 238.880620, 16.090740, 237.490330, 28.558560);
	dessin.moveTo(272.348360, 20.713695);
	dessin.bezierCurveTo(272.012870, 20.766785, 271.672450, 20.821846, 271.327100, 20.877888);
	dessin.bezierCurveTo(264.050000, 22.072462, 254.392930, 24.046706, 248.068020, 27.324658);
	dessin.bezierCurveTo(246.576090, 28.097444, 245.233160, 28.754215, 244.654940, 29.783614);
	dessin.moveTo(184.227900, 21.308524);
	dessin.bezierCurveTo(184.227900, 21.308524, 203.210510, 18.282269, 208.146110, 31.522875);
	dessin.moveTo(185.467220, 29.026558);
	dessin.bezierCurveTo(185.467220, 29.026558, 187.019340, 28.799441, 189.221710, 28.829920);
	dessin.bezierCurveTo(191.983560, 28.869250, 195.966960, 29.125860, 198.804790, 31.432421);
	dessin.bezierCurveTo(199.647450, 32.116721, 200.342100, 33.036003, 200.792050, 34.244342);
	dessin.moveTo(184.227900, 21.308524);
	dessin.bezierCurveTo(180.052080, 22.065580, 181.712740, 29.223196, 185.467220, 29.026558);
	dessin.moveTo(186.506250, 20.929997);
	dessin.bezierCurveTo(184.227900, 15.256013, 176.650840, 17.206660, 176.650840, 24.795896);
	dessin.bezierCurveTo(176.650840, 32.447073, 182.825760, 36.729844, 189.222700, 28.829920);
	dessin.moveTo(176.874820, 30.364678);
	dessin.lineTo(162.129200, 31.676252);
	dessin.bezierCurveTo(161.602290, 34.562895, 154.756390, 33.512849, 155.283310, 25.378927);
	dessin.bezierCurveTo(155.810220, 17.245987, 161.865750, 18.295050, 162.656120, 19.869136);
	dessin.bezierCurveTo(163.445500, 21.443221, 177.401730, 19.606624, 177.401730, 19.606624);
	dessin.moveTo(266.758560, 27.363002);
	dessin.bezierCurveTo(266.758560, 27.363002, 251.600490, 23.355524, 249.124800, 29.828840);
	dessin.moveTo(245.760070, 222.464080);
	dessin.lineTo(264.099340, 245.742060);
	dessin.bezierCurveTo(264.099340, 245.742060, 264.099340, 290.213660, 291.801640, 289.703390);
	dessin.bezierCurveTo(319.503950, 289.191150, 336.947270, 280.502700, 336.947270, 280.502700);
	dessin.moveTo(285.132370, 289.703390);
	dessin.bezierCurveTo(284.619270, 289.703390, 242.552230, 281.012980, 242.552230, 281.012980);
	dessin.bezierCurveTo(242.552230, 281.012980, 228.701570, 270.789790, 227.162280, 242.675490);
	dessin.moveTo(227.162280, 242.675490);
	dessin.lineTo(235.948070, 222.393280);
	dessin.moveTo(228.188470, 238.074170);
	dessin.lineTo(219.980890, 237.052630);
	dessin.lineTo(219.467790, 249.831150);
	dessin.lineTo(229.214660, 262.100350);
	dessin.moveTo(271.280720, 277.946420);
	dessin.lineTo(295.905430, 271.301040);
	dessin.lineTo(295.392340, 248.298360);
	dessin.lineTo(270.254530, 242.675490);
	dessin.stroke();
	
// #path6552
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(270.255520, 242.675490);
	dessin.bezierCurveTo(270.255520, 242.675490, 266.663840, 264.144410, 272.306920, 274.878870);
	dessin.moveTo(289.750240, 249.831150);
	dessin.lineTo(290.775450, 271.301040);
	dessin.stroke();
	
// #path6554
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(270.255520, 242.675490);
	dessin.lineTo(251.273890, 219.161540);
	dessin.lineTo(246.671800, 219.516480);
	dessin.moveTo(256.775870, 226.297540);
	dessin.lineTo(284.620260, 230.407270);
	dessin.bezierCurveTo(284.620260, 230.407270, 294.367130, 230.919500, 298.985000, 227.340700);
	dessin.bezierCurveTo(303.601890, 223.762880, 301.036400, 198.203880, 301.036400, 198.203880);
	dessin.lineTo(281.730140, 182.118920);
	dessin.moveTo(287.697850, 199.225430);
	dessin.bezierCurveTo(288.210950, 199.225430, 266.151730, 146.574660, 266.151730, 146.574660);
	dessin.bezierCurveTo(266.151730, 146.574660, 257.430060, 141.973350, 267.176930, 129.706100);
	dessin.bezierCurveTo(276.924790, 117.437860, 277.436900, 92.901398, 271.280720, 88.302040);
	dessin.moveTo(252.812190, 81.144424);
	dessin.lineTo(275.346030, 98.346298);
	dessin.moveTo(246.142920, 98.524261);
	dessin.bezierCurveTo(246.142920, 99.036502, 272.584190, 117.928470, 272.584190, 117.928470);
	dessin.bezierCurveTo(272.584190, 117.928470, 248.442970, 111.412880, 241.526030, 118.459400);
	dessin.moveTo(275.384510, 209.959890);
	dessin.bezierCurveTo(275.384510, 209.959890, 271.576740, 172.723560, 269.794720, 155.292610);
	dessin.moveTo(268.203130, 207.915840);
	dessin.lineTo(259.995550, 127.150780);
	dessin.moveTo(261.020760, 205.871780);
	dessin.lineTo(252.812190, 124.594490);
	dessin.moveTo(253.326280, 205.871780);
	dessin.lineTo(245.630810, 122.038210);
	dessin.moveTo(243.857660, 172.373540);
	dessin.bezierCurveTo(242.013470, 154.338920, 238.448440, 119.481920, 238.448440, 119.481920);
	dessin.moveTo(271.280720, 88.301056);
	dessin.lineTo(273.579790, 83.390027);
	dessin.bezierCurveTo(273.579790, 83.390027, 283.273380, 87.253960, 284.935020, 94.979859);
	dessin.bezierCurveTo(286.596670, 102.706740, 287.982030, 106.294390, 286.596670, 114.021290);
	dessin.moveTo(286.595680, 114.022260);
	dessin.bezierCurveTo(286.595680, 114.022260, 294.350350, 101.879880, 300.997920, 107.122240);
	dessin.bezierCurveTo(307.644500, 112.366570, 333.400980, 133.891540, 333.400980, 133.891540);
	dessin.bezierCurveTo(333.400980, 133.891540, 340.602100, 138.858610, 333.400980, 141.617420);
	dessin.moveTo(333.400980, 141.617420);
	dessin.bezierCurveTo(333.400980, 141.617420, 330.631250, 145.756650, 322.876570, 140.514300);
	dessin.bezierCurveTo(315.122890, 135.269970, 305.982860, 123.681110, 288.812850, 138.582330);
	dessin.moveTo(279.396540, 87.529253);
	dessin.bezierCurveTo(286.596670, 86.149839, 289.919960, 86.425132, 297.121080, 93.876721);
	dessin.bezierCurveTo(304.322200, 101.327330, 318.723450, 112.366570, 335.063610, 109.881080);
	dessin.bezierCurveTo(351.403780, 107.398520, 366.082300, 104.362440, 373.005160, 102.155180);
	dessin.bezierCurveTo(379.928030, 99.947908, 391.561510, 100.499490, 399.038920, 101.327330);
	dessin.bezierCurveTo(406.516320, 102.155180, 409.008790, 107.398520, 395.991910, 114.572840);
	dessin.bezierCurveTo(382.976020, 121.749150, 379.098190, 128.371910, 375.774900, 141.064880);
	dessin.bezierCurveTo(372.451610, 153.758840, 364.696940, 205.638770, 352.510890, 209.226430);
	dessin.moveTo(369.681870, 202.603660);
	dessin.lineTo(393.499440, 201.775820);
	dessin.bezierCurveTo(393.499440, 201.775820, 395.991910, 202.328370, 400.977830, 197.636580);
	dessin.bezierCurveTo(405.962770, 192.945800, 446.951320, 151.275290, 438.365830, 112.917160);
	dessin.moveTo(404.577400, 109.054200);
	dessin.bezierCurveTo(404.577400, 109.054200, 415.100830, 113.469710, 415.100830, 120.920320);
	dessin.bezierCurveTo(415.100830, 128.371910, 418.424120, 127.267780, 420.640300, 122.852290);
	dessin.bezierCurveTo(422.855500, 118.436790, 429.779350, 113.745000, 446.396780, 110.434600);
	dessin.moveTo(446.396780, 110.434600);
	dessin.bezierCurveTo(453.320630, 110.158340, 458.582840, 104.638700, 405.685500, 102.707730);
	dessin.stroke();
	
// #path6556
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(284.658740, 117.885210);
	dessin.bezierCurveTo(284.658740, 118.160500, 281.889000, 128.923470, 272.749960, 134.993680);
	dessin.stroke();
	
// #path6558
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(279.396540, 87.529253);
	dessin.bezierCurveTo(279.396540, 87.529253, 283.550650, 80.354923, 279.672820, 76.767266);
	dessin.bezierCurveTo(275.794990, 73.179610, 262.224560, 62.141347, 253.916340, 75.387852);
	dessin.stroke();
	
// #path6560
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 2.791955;
	dessin.lineCap = 'round';
	dessin.moveTo(262.779100, 52.759757);
	dessin.bezierCurveTo(262.779100, 52.759757, 276.073250, 57.450552, 272.748970, 70.145488);
	dessin.stroke();
	
// #path6562
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(306.512730, 131.869110);
	dessin.bezierCurveTo(306.512730, 131.869110, 341.261230, 168.771150, 347.205270, 193.828700);
	dessin.bezierCurveTo(353.148310, 218.885260, 352.692440, 233.009770, 350.863060, 241.664770);
	dessin.moveTo(353.149300, 237.108680);
	dessin.bezierCurveTo(354.521830, 237.564880, 368.695150, 242.119990, 368.695150, 242.119990);
	dessin.moveTo(369.681870, 202.603660);
	dessin.bezierCurveTo(364.579520, 205.673170, 360.008020, 217.062440, 368.695150, 242.119000);
	dessin.stroke();
	
// #line6564
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(365.951050, 206.128390);
	dessin.lineTo(362.750120, 197.473370);
	dessin.stroke();
	
// #path6566
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(20, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.464027;
	dessin.fillStyle = 'rgb(133, 121, 121)';
	dessin.moveTo(431.605910, 273.611060);
	dessin.bezierCurveTo(431.605910, 293.367720, 417.095040, 308.799450, 401.901090, 304.913200);
	dessin.bezierCurveTo(386.858120, 301.065560, 381.206370, 294.650260, 381.206370, 274.893600);
	dessin.bezierCurveTo(381.206370, 255.136950, 386.956960, 241.839580, 402.544670, 243.591470);
	dessin.bezierCurveTo(425.367990, 246.156560, 429.614960, 251.144830, 431.390720, 269.214780);
	dessin.fill();
	dessin.stroke();
	
// #path6568
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(350.863060, 241.664770);
	dessin.lineTo(413.045480, 264.899490);
	dessin.lineTo(419.446360, 269.911790);
	dessin.lineTo(427.676640, 269.911790);
	dessin.lineTo(430.419730, 277.656370);
	dessin.lineTo(423.561010, 284.034330);
	dessin.lineTo(351.777750, 261.711010);
	dessin.lineTo(345.833720, 260.343410);
	dessin.lineTo(345.833720, 266.721340);
	dessin.bezierCurveTo(345.833720, 266.721340, 337.146590, 273.099300, 337.603440, 273.099300);
	dessin.bezierCurveTo(338.061280, 273.099300, 336.947270, 280.501730, 336.947270, 280.501730);
	dessin.stroke();
	
// #path6570
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(347.205270, 256.698720);
	dessin.lineTo(349.948360, 245.764680);
	dessin.moveTo(351.777750, 257.610130);
	dessin.lineTo(354.520840, 246.676100);
	dessin.stroke();
	
// #path6572
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(288.812850, 138.582330);
	dessin.bezierCurveTo(315.199850, 167.859720, 339.432830, 194.739130, 340.804380, 215.240580);
	dessin.bezierCurveTo(342.175930, 235.742040, 332.574110, 243.941850, 334.403500, 249.409360);
	dessin.bezierCurveTo(336.232880, 254.876870, 333.030960, 263.076660, 329.831010, 266.267110);
	dessin.stroke();
	
// #path6574
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(291.151390, 136.489120);
	dessin.bezierCurveTo(309.804440, 157.186220, 327.362230, 176.721200, 336.711450, 193.665490);
	dessin.bezierCurveTo(340.931670, 201.315690, 343.503070, 208.488040, 343.940190, 215.032160);
	dessin.bezierCurveTo(344.818380, 228.147900, 341.454630, 236.488290, 339.092410, 242.301880);
	dessin.bezierCurveTo(338.220150, 244.447210, 337.457410, 246.149110, 337.327160, 247.622910);
	dessin.bezierCurveTo(337.302460, 247.905080, 337.302460, 248.170530, 337.385360, 248.418300);
	dessin.bezierCurveTo(338.070150, 250.464310, 338.226050, 252.815120, 337.949760, 255.214100);
	dessin.bezierCurveTo(337.462320, 259.462470, 335.599390, 263.844530, 333.518380, 266.735110);
	dessin.moveTo(343.141910, 251.289220);
	dessin.bezierCurveTo(344.618050, 251.563530, 346.201750, 249.720050, 346.677350, 247.171610);
	dessin.bezierCurveTo(347.153940, 244.624170, 346.343830, 242.336290, 344.867690, 242.062970);
	dessin.bezierCurveTo(343.391550, 241.788660, 341.807860, 243.632140, 341.331270, 246.179580);
	dessin.bezierCurveTo(340.855670, 248.727020, 341.665770, 251.015880, 343.141910, 251.289220);
	dessin.stroke();
	
// #path6576
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(317.121990, 273.543700);
	dessin.bezierCurveTo(312.099560, 273.543700, 314.610780, 276.045920, 309.817270, 277.865800);
	dessin.bezierCurveTo(305.023760, 279.685680, 307.534970, 280.368010, 307.078120, 282.187890);
	dessin.bezierCurveTo(306.622250, 284.007770, 304.339960, 285.826680, 304.111040, 283.324460);
	dessin.bezierCurveTo(303.882120, 280.822250, 301.599820, 280.595120, 297.491100, 281.050340);
	dessin.bezierCurveTo(293.382380, 281.505570, 283.338500, 279.685680, 286.534510, 274.909350);
	dessin.moveTo(320.545930, 275.135470);
	dessin.bezierCurveTo(316.437210, 276.500150, 317.806780, 278.320030, 313.242190, 279.457570);
	dessin.bezierCurveTo(308.676610, 280.594140, 310.046190, 284.006800, 311.187830, 285.143360);
	dessin.stroke();
	
// #path6578
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.113985;
	dessin.lineCap = 'round';
	dessin.moveTo(287.697850, 199.225430);
	dessin.bezierCurveTo(287.697850, 199.225430, 292.246660, 198.556860, 292.452880, 203.694010);
	dessin.bezierCurveTo(292.659110, 208.832160, 287.708710, 212.530910, 286.677580, 211.708000);
	dessin.bezierCurveTo(285.646450, 210.886040, 285.234000, 215.613220, 273.272920, 213.352870);
	dessin.bezierCurveTo(261.312830, 211.091530, 248.526850, 209.653130, 249.351750, 210.064100);
	dessin.stroke();
	
// #path6580
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(319.500000, 175.461740);
	dessin.bezierCurveTo(316.747040, 172.260480, 311.837700, 175.048500, 311.927870, 183.006730);
	dessin.bezierCurveTo(312.018170, 190.794710, 317.434790, 188.037710, 315.140650, 193.067710);
	dessin.bezierCurveTo(312.845530, 198.097700, 329.827060, 199.013050, 329.827060, 199.013050);
	dessin.lineTo(329.598140, 229.654130);
	dessin.moveTo(409.825790, 304.712760);
	dessin.bezierCurveTo(419.167120, 306.203270, 428.839980, 294.339130, 431.429150, 278.217780);
	dessin.bezierCurveTo(434.018320, 262.095450, 428.543970, 247.816590, 419.201660, 246.327050);
	dessin.stroke();
	
// #path6582
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(419.201660, 246.327050);
	dessin.bezierCurveTo(412.511660, 245.260300, 405.650960, 251.042440, 401.272860, 260.499730);
	dessin.moveTo(397.206570, 275.838460);
	dessin.bezierCurveTo(395.696880, 290.967770, 401.220570, 303.295970, 409.825790, 304.712760);
	dessin.stroke();
	
// #path6584
	dessin.beginPath();
	dessin.moveTo(419.068450, 247.151950);
	dessin.bezierCurveTo(414.529510, 246.428320, 409.767580, 248.575610, 405.969670, 253.235920);
	dessin.lineTo(405.766410, 252.706970);
	dessin.bezierCurveTo(409.786330, 247.776280, 414.531490, 244.738230, 419.333880, 245.504130);
	dessin.lineTo(419.068450, 247.151950);
	
// #path6586
	dessin.beginPath();
	dessin.moveTo(399.416830, 294.035320);
	dessin.bezierCurveTo(401.776090, 300.189110, 405.679580, 303.205520, 409.958020, 303.887860);
	dessin.lineTo(409.692590, 305.536670);
	dessin.bezierCurveTo(405.313500, 304.837620, 401.474150, 300.774090, 399.058650, 294.474800);
	dessin.lineTo(399.416830, 294.035320);
	
// #path6588
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(419.200670, 246.327050);
	dessin.lineTo(399.669430, 243.991980);
	dessin.moveTo(409.825790, 304.712760);
	dessin.lineTo(392.638030, 301.209660);
	dessin.stroke();
	
// #path6590
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(406.674190, 244.828670);
	dessin.bezierCurveTo(405.152660, 243.704890, 403.540360, 243.041250, 402.012910, 242.824940);
	dessin.stroke();
	
// #path6592
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(402.012910, 242.823960);
	dessin.bezierCurveTo(395.922840, 241.852570, 389.692660, 246.557120, 385.312580, 254.535700);
	dessin.moveTo(380.017820, 272.335360);
	dessin.bezierCurveTo(378.509120, 287.463690, 384.031820, 299.791900, 392.637040, 301.209660);
	dessin.stroke();
	
// #path6594
	dessin.beginPath();
	dessin.moveTo(406.563680, 245.147240);
	dessin.bezierCurveTo(405.059910, 244.037220, 403.389390, 243.861220, 401.880680, 243.648850);
	dessin.lineTo(402.146110, 242.000050);
	dessin.bezierCurveTo(403.690340, 242.219290, 405.244430, 243.372570, 406.783720, 244.510130);
	dessin.lineTo(406.563680, 245.147240);
	
// #path6596
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(391.465800, 334.294950);
	dessin.bezierCurveTo(409.677790, 336.769640, 428.114740, 311.938200, 432.643810, 278.833260);
	dessin.bezierCurveTo(437.174850, 245.728300, 426.084060, 216.884480, 407.873070, 214.409790);
	dessin.stroke();
	
// #path6598
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(407.873070, 214.408810);
	dessin.bezierCurveTo(393.758950, 212.492580, 379.510640, 226.974940, 371.572440, 249.401490);
	dessin.moveTo(367.208150, 266.509970);
	dessin.bezierCurveTo(367.009820, 267.687820, 366.830240, 268.862730, 366.694070, 269.871480);
	dessin.bezierCurveTo(362.163030, 302.976440, 373.253820, 331.820250, 391.464820, 334.293960);
	dessin.stroke();
	
// #path6600
	dessin.beginPath();
	dessin.moveTo(428.619950, 235.359580);
	dessin.bezierCurveTo(423.810650, 222.852440, 416.149710, 216.377160, 407.759590, 215.236660);
	dessin.lineTo(407.985550, 213.581950);
	dessin.bezierCurveTo(416.473360, 214.735230, 424.088900, 222.257600, 428.953460, 234.909280);
	dessin.lineTo(428.619950, 235.359580);
	
// #path6602
	dessin.beginPath();
	dessin.moveTo(391.579280, 333.468090);
	dessin.bezierCurveTo(400.559460, 334.688220, 409.735020, 329.543190, 417.085130, 319.644450);
	dessin.lineTo(417.286420, 320.166520);
	dessin.bezierCurveTo(409.732060, 330.342520, 400.584130, 336.375380, 391.353320, 335.121800);
	dessin.lineTo(391.579280, 333.468090);
	
// #path6604
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(381.936010, 330.178340);
	dessin.bezierCurveTo(393.259670, 330.355310, 404.280400, 320.397560, 411.968960, 304.826800);
	dessin.moveTo(421.048800, 246.799980);
	dessin.bezierCurveTo(418.902680, 231.337360, 413.180660, 220.012990, 405.682540, 214.243640);
	dessin.moveTo(398.887950, 302.766030);
	dessin.lineTo(377.403000, 324.563340);
	dessin.moveTo(392.638030, 332.348230);
	dessin.lineTo(392.638030, 301.209660);
	dessin.moveTo(395.762990, 302.766030);
	dessin.lineTo(406.700840, 323.785640);
	dessin.moveTo(406.700840, 305.879800);
	dessin.lineTo(400.841660, 326.899390);
	dessin.moveTo(380.527960, 287.586590);
	dessin.lineTo(380.918700, 327.288730);
	dessin.moveTo(384.043660, 297.317210);
	dessin.lineTo(371.542840, 310.550920);
	dessin.moveTo(396.935220, 243.991980);
	dessin.lineTo(391.076050, 220.637310);
	dessin.moveTo(395.372250, 217.912900);
	dessin.bezierCurveTo(395.372250, 218.302230, 385.313570, 254.536690, 385.313570, 254.536690);
	dessin.moveTo(381.700180, 232.314650);
	dessin.bezierCurveTo(382.090930, 232.703990, 391.856550, 245.548370, 391.856550, 245.548370);
	dessin.moveTo(396.935220, 243.991980);
	dessin.lineTo(408.262820, 216.744860);
	dessin.moveTo(401.623150, 215.577830);
	dessin.bezierCurveTo(402.013890, 215.577830, 406.673210, 244.828670, 406.673210, 244.828670);
	dessin.moveTo(402.012910, 242.823960);
	dessin.lineTo(419.982150, 226.476470);
	dessin.moveTo(414.122980, 220.637310);
	dessin.lineTo(411.388770, 245.937720);
	dessin.moveTo(387.961940, 359.902100);
	dessin.bezierCurveTo(413.952280, 363.433720, 440.265270, 327.994670, 446.731280, 280.746540);
	dessin.bezierCurveTo(453.197290, 233.499390, 437.369240, 192.334250, 411.377910, 188.801660);
	dessin.stroke();
	
// #path6606
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(411.376930, 188.801660);
	dessin.bezierCurveTo(410.698060, 188.710260, 410.021170, 188.644350, 409.439000, 188.611890);
	dessin.moveTo(380.658200, 202.223170);
	dessin.bezierCurveTo(374.282970, 208.858710, 368.790860, 217.330840, 364.569650, 226.455830);
	dessin.moveTo(353.339730, 263.159250);
	dessin.bezierCurveTo(353.056540, 264.841490, 352.801970, 266.517820, 352.607580, 267.958200);
	dessin.bezierCurveTo(346.141580, 315.205350, 361.970620, 356.370490, 387.961940, 359.902100);
	dessin.stroke();
	
// #path6608
	dessin.beginPath();
	dessin.moveTo(358.280270, 330.098690);
	dessin.bezierCurveTo(365.155770, 347.979960, 376.078810, 357.444120, 388.074430, 359.075230);
	dessin.lineTo(387.848470, 360.729950);
	dessin.bezierCurveTo(375.756150, 359.086060, 364.877510, 348.573790, 357.945770, 330.549000);
	dessin.lineTo(358.280270, 330.098690);
	
// #path6610
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.695182;
	dessin.lineCap = 'round';
	dessin.moveTo(370.621240, 357.720400);
	dessin.bezierCurveTo(370.724840, 357.735100, 370.829440, 357.747900, 370.917250, 357.758700);
	dessin.stroke();
	
// #path6612
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(333.911120, 281.819190);
	dessin.bezierCurveTo(332.578050, 323.283220, 348.283760, 354.483750, 370.621240, 357.720400);
	dessin.moveTo(370.877780, 357.754800);
	dessin.lineTo(388.217500, 359.935510);
	dessin.stroke();
	
// #path6614
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.672454;
	dessin.lineCap = 'round';
	dessin.moveTo(90.193991, 437.467840);
	dessin.bezierCurveTo(139.439460, 450.307320, 193.147890, 408.217970, 210.153110, 343.462190);
	dessin.bezierCurveTo(227.158330, 278.705440, 201.021960, 215.799040, 151.776490, 202.959580);
	dessin.stroke();
	
// #path6616
	dessin.beginPath();
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(183.376350, 207.776220);
	dessin.lineTo(153.892020, 276.458850);
	dessin.lineTo(143.133760, 277.253260);
	dessin.lineTo(130.944520, 305.454400);
	dessin.lineTo(109.266400, 324.101240);
	dessin.bezierCurveTo(109.266400, 324.101240, 108.469130, 344.350020, 112.852160, 348.716360);
	dessin.bezierCurveTo(117.235190, 353.082710, 166.641500, 352.686470, 166.641500, 352.686470);
	dessin.lineTo(169.032330, 346.730310);
	dessin.lineTo(161.859830, 339.187300);
	dessin.lineTo(167.040130, 334.422760);
	dessin.lineTo(168.633700, 312.587120);
	dessin.lineTo(194.930900, 244.697920);
	dessin.lineTo(193.735980, 213.334190);
	dessin.bezierCurveTo(193.734990, 213.334190, 192.937720, 210.951910, 183.376350, 207.776220);
	dessin.fill();
	
// #path6618
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(182.923030, 207.844600);
	dessin.lineTo(194.519450, 212.656440);
	dessin.lineTo(195.444850, 244.464110);
	dessin.lineTo(169.395150, 311.135220);
	dessin.lineTo(166.664690, 335.621420);
	dessin.lineTo(162.458770, 339.812250);
	dessin.lineTo(169.615550, 347.134450);
	dessin.lineTo(167.450340, 353.415690);
	dessin.lineTo(113.751020, 351.134190);
	dessin.lineTo(110.087190, 342.283310);
	dessin.lineTo(108.673330, 323.932250);
	dessin.lineTo(130.981350, 304.790000);
	dessin.lineTo(143.096460, 276.892770);
	dessin.lineTo(153.893860, 276.644660);
	dessin.fill();
	dessin.stroke();
	
// #path6620
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(428.435730, 270.705090);
	dessin.lineTo(418.911180, 271.180340);
	dessin.lineTo(412.187960, 265.039480);
	dessin.lineTo(350.164850, 242.720490);
	dessin.bezierCurveTo(350.164850, 242.720490, 352.799570, 221.495200, 348.877700, 205.305660);
	dessin.bezierCurveTo(344.955820, 189.116110, 330.994940, 155.986800, 313.020550, 139.989220);
	dessin.bezierCurveTo(304.663570, 132.551340, 276.251040, 97.105800, 252.653370, 82.802874);
	dessin.bezierCurveTo(245.893600, 92.986144, 250.746380, 89.925369, 247.608740, 98.119720);
	dessin.bezierCurveTo(271.775810, 116.743380, 283.148290, 128.680830, 312.460290, 164.552670);
	dessin.bezierCurveTo(342.090630, 200.814080, 343.060560, 208.476760, 340.753810, 228.473440);
	dessin.bezierCurveTo(339.353140, 240.615610, 334.380760, 244.662990, 334.800970, 249.861780);
	dessin.bezierCurveTo(335.152340, 254.209120, 336.954500, 256.778970, 331.229260, 264.202090);
	dessin.bezierCurveTo(325.504020, 271.625200, 333.323970, 279.285270, 309.523010, 279.356870);
	dessin.bezierCurveTo(306.721690, 279.365870, 309.032560, 281.203350, 313.425660, 286.811630);
	dessin.bezierCurveTo(324.254560, 286.007180, 335.908220, 280.184110, 335.908220, 280.184110);
	dessin.lineTo(337.672340, 272.296870);
	dessin.lineTo(344.705890, 266.239020);
	dessin.lineTo(344.705890, 258.898620);
	dessin.lineTo(422.022850, 283.854310);
	dessin.lineTo(428.829380, 278.354710);
	dessin.fill();
	
// #path6622
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.000000;
	dessin.moveTo(336.379590, 137.158280);
	dessin.bezierCurveTo(336.379590, 137.158280, 299.712950, 106.254160, 298.638670, 105.937010);
	dessin.bezierCurveTo(297.350830, 105.556820, 294.249330, 105.393630, 292.785770, 106.908990);
	dessin.bezierCurveTo(291.529190, 108.210060, 288.226610, 112.306130, 288.226610, 112.306130);
	dessin.lineTo(287.014930, 112.459740);
	dessin.lineTo(286.932930, 106.908990);
	dessin.bezierCurveTo(286.932930, 106.908990, 285.957440, 93.301176, 284.006480, 90.871208);
	dessin.bezierCurveTo(282.055510, 88.441240, 273.830620, 83.714260, 273.830620, 83.714260);
	dessin.lineTo(271.576730, 88.139403);
	dessin.bezierCurveTo(271.576730, 88.139403, 273.154230, 88.927232, 274.251640, 92.329189);
	dessin.bezierCurveTo(275.349060, 95.731144, 275.714870, 94.273163, 275.227130, 101.563070);
	dessin.bezierCurveTo(274.739380, 108.852980, 273.276160, 121.974800, 270.837460, 124.890760);
	dessin.bezierCurveTo(268.398750, 127.806730, 261.570360, 138.012590, 262.058110, 139.956560);
	dessin.bezierCurveTo(262.545850, 141.900530, 266.935520, 147.246470, 266.935520, 147.246470);
	dessin.lineTo(280.879880, 181.066590);
	dessin.lineTo(301.816710, 198.025170);
	dessin.bezierCurveTo(301.816710, 198.025170, 302.001530, 221.183980, 301.513780, 224.099940);
	dessin.bezierCurveTo(301.026040, 227.015900, 297.981490, 229.614760, 294.079560, 230.100750);
	dessin.bezierCurveTo(290.177620, 230.586740, 258.887790, 227.435420, 258.887790, 227.435420);
	dessin.lineTo(270.593580, 242.501220);
	dessin.lineTo(294.736790, 247.847150);
	dessin.lineTo(295.224530, 270.202850);
	dessin.lineTo(271.325200, 278.464750);
	dessin.bezierCurveTo(271.325200, 278.464750, 282.726400, 289.430330, 286.140590, 288.944340);
	dessin.bezierCurveTo(289.554770, 288.458350, 312.081010, 289.232490, 314.246450, 286.726640);
	dessin.bezierCurveTo(316.469210, 284.154470, 308.393550, 282.838690, 309.856780, 280.894720);
	dessin.bezierCurveTo(311.320000, 278.950740, 321.074820, 280.408720, 324.489020, 278.464750);
	dessin.bezierCurveTo(327.903210, 276.520780, 334.243840, 270.688850, 333.756110, 268.258880);
	dessin.bezierCurveTo(333.268370, 265.828910, 314.734190, 262.426960, 314.734190, 262.426960);
	dessin.lineTo(317.660640, 256.109050);
	dessin.bezierCurveTo(317.660640, 256.109050, 322.659990, 254.529560, 326.439980, 251.978090);
	dessin.bezierCurveTo(330.219980, 249.426630, 327.354490, 249.973370, 332.292870, 244.445190);
	dessin.bezierCurveTo(332.597710, 238.188020, 334.487710, 228.893400, 334.487710, 228.893400);
	dessin.lineTo(329.122550, 228.893390);
	dessin.bezierCurveTo(329.122550, 228.893390, 328.939650, 208.481670, 328.878690, 198.761790);
	dessin.bezierCurveTo(320.282260, 199.490790, 314.246450, 194.873840, 314.246450, 194.873840);
	dessin.bezierCurveTo(314.246450, 194.873840, 316.010090, 193.165870, 315.709680, 190.985890);
	dessin.bezierCurveTo(315.562120, 189.915140, 311.490520, 188.178480, 311.563870, 182.724000);
	dessin.bezierCurveTo(311.663270, 175.334210, 313.150950, 175.422640, 314.423600, 174.277950);
	dessin.bezierCurveTo(316.435530, 172.212480, 319.057140, 174.277950, 319.057140, 174.277950);
	dessin.lineTo(288.344710, 137.894900);
	dessin.bezierCurveTo(288.344710, 137.894900, 300.101900, 130.236690, 304.979310, 130.236690);
	dessin.bezierCurveTo(309.856730, 130.236690, 323.025750, 139.956560, 323.025750, 139.956560);
	dessin.bezierCurveTo(323.025750, 139.956560, 324.573350, 143.221990, 327.903160, 142.872520);
	dessin.bezierCurveTo(335.446260, 142.080870, 336.379590, 137.158280, 336.379590, 137.158280);
	dessin.fill();
	
// #path6624
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(314.213400, 243.110290);
	dessin.bezierCurveTo(314.213400, 243.110290, 317.580850, 236.202180, 322.532970, 233.241550);
	dessin.bezierCurveTo(327.485070, 230.280940, 332.437190, 227.715070, 333.625700, 228.701940);
	dessin.bezierCurveTo(334.814210, 229.688810, 332.635270, 237.189050, 332.635270, 239.557550);
	dessin.bezierCurveTo(332.635270, 241.926040, 332.635270, 246.268290, 330.654430, 247.452540);
	dessin.bezierCurveTo(328.673580, 248.636790, 324.513810, 255.347530, 323.325300, 255.347530);
	dessin.bezierCurveTo(322.136800, 255.347530, 317.580850, 256.531780, 317.580850, 256.531780);
	dessin.fill();
	dessin.stroke();
	
// #path6626
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(316.285320, 259.507340);
	dessin.bezierCurveTo(314.342080, 267.414450, 308.914970, 272.891060, 304.161390, 271.741890);
	dessin.bezierCurveTo(299.407810, 270.592710, 297.126520, 263.252590, 299.065090, 255.344340);
	dessin.bezierCurveTo(301.003650, 247.436100, 306.428510, 241.952240, 311.184000, 243.093630);
	dessin.bezierCurveTo(315.939490, 244.235020, 318.226120, 251.569740, 316.292240, 259.479100);
	dessin.fill();
	
// #path6628
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.moveTo(315.600000, 263.045150);
	dessin.bezierCurveTo(315.600000, 263.045150, 313.421070, 267.387390, 312.232560, 268.769010);
	dessin.bezierCurveTo(311.044050, 270.150640, 307.478530, 272.124380, 307.478530, 272.124380);
	dessin.lineTo(330.060180, 275.282380);
	dessin.bezierCurveTo(330.060180, 275.282380, 332.635270, 273.900760, 333.229530, 271.927000);
	dessin.bezierCurveTo(333.823780, 269.953260, 333.229530, 265.808390, 331.446760, 265.611020);
	dessin.bezierCurveTo(329.664010, 265.413640, 315.005740, 263.242520, 315.600000, 263.045150);
	dessin.fill();
	dessin.stroke();
	
// #path6630
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.lineCap = 'butt';
	dessin.miterLimit = 4;
	dessin.lineWidth = 0.887000;
	dessin.moveTo(332.493740, 271.428670);
	dessin.bezierCurveTo(331.790730, 273.573090, 330.214750, 274.865790, 328.934650, 274.348020);
	dessin.bezierCurveTo(327.654560, 273.830250, 327.133330, 271.689260, 327.757530, 269.512960);
	dessin.bezierCurveTo(328.381740, 267.336670, 329.925630, 265.912160, 331.244150, 266.295950);
	dessin.bezierCurveTo(332.562670, 266.679750, 333.178950, 268.733040, 332.635910, 270.932970);
	dessin.fill();
	
// #g6662
	dessin.save();
	dessin.transform(0.986725, 0.000000, 0.000000, 0.983189, 5.993787, 0.040932);
	
// #g6652
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -0.741455, 0.494303);
	
// #path6632
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(328.617000, 279.144230);
	dessin.bezierCurveTo(330.113000, 279.422240, 331.718000, 277.548230, 332.201000, 274.956230);
	dessin.bezierCurveTo(332.683000, 272.364240, 331.862000, 270.038230, 330.366000, 269.759230);
	dessin.stroke();
	
// #path6634
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(330.366000, 269.760240);
	dessin.bezierCurveTo(328.870000, 269.481240, 327.265000, 271.356240, 326.782000, 273.948240);
	dessin.bezierCurveTo(326.300000, 276.540230, 327.121000, 278.866240, 328.617000, 279.145240);
	dessin.stroke();
	
// #path6636
	dessin.beginPath();
	dessin.moveTo(330.210000, 270.595240);
	dessin.bezierCurveTo(329.595000, 270.480230, 328.822000, 270.426240, 328.289000, 271.049240);
	dessin.lineTo(328.098000, 270.505240);
	dessin.bezierCurveTo(328.862000, 269.613230, 329.640000, 268.761230, 330.521000, 268.925230);
	dessin.lineTo(330.210000, 270.595240);
	
// #path6638
	dessin.beginPath();
	dessin.moveTo(327.144000, 277.194230);
	dessin.bezierCurveTo(327.476000, 278.133240, 328.130000, 278.190230, 328.772000, 278.309240);
	dessin.lineTo(328.460000, 279.978230);
	dessin.bezierCurveTo(327.716000, 279.839230, 327.153000, 278.721230, 326.770000, 277.631240);
	dessin.lineTo(327.144000, 277.194230);
	
// #path6640
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(330.366000, 269.760240);
	dessin.lineTo(313.695000, 267.537240);
	dessin.moveTo(328.617000, 279.144230);
	dessin.lineTo(304.904000, 276.096230);
	dessin.moveTo(302.821000, 276.559240);
	dessin.bezierCurveTo(307.616000, 277.739240, 313.160000, 271.963230, 315.205000, 263.659240);
	dessin.bezierCurveTo(317.249000, 255.354230, 315.019000, 247.666240, 310.225000, 246.485230);
	dessin.stroke();
	
// #g6648
	
// #path6642
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.705800;
	dessin.lineCap = 'round';
	dessin.moveTo(310.224000, 246.485230);
	dessin.bezierCurveTo(305.430000, 245.304240, 299.885000, 251.080230, 297.841000, 259.384230);
	dessin.bezierCurveTo(295.796000, 267.689230, 298.027000, 275.378240, 302.820000, 276.559240);
	dessin.stroke();
	
// #path6644
	dessin.beginPath();
	dessin.moveTo(310.022000, 247.309240);
	dessin.bezierCurveTo(307.755000, 246.751240, 305.200000, 247.448240, 303.082000, 249.655240);
	dessin.lineTo(302.922000, 249.101240);
	dessin.bezierCurveTo(305.285000, 246.639240, 307.900000, 245.038240, 310.428000, 245.661240);
	dessin.lineTo(310.022000, 247.309240);
	
// #path6646
	dessin.beginPath();
	dessin.moveTo(297.966000, 270.435230);
	dessin.bezierCurveTo(298.916000, 273.712240, 300.853000, 275.200240, 303.024000, 275.734240);
	dessin.lineTo(302.618000, 277.383240);
	dessin.bezierCurveTo(300.346000, 276.823240, 298.561000, 274.280240, 297.567000, 270.851230);
	dessin.lineTo(297.966000, 270.435230);
	
// #path6650
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.698000;
	dessin.lineCap = 'round';
	dessin.moveTo(316.239000, 260.134230);
	dessin.bezierCurveTo(316.239000, 260.134230, 322.948000, 259.441240, 325.030000, 256.896230);
	dessin.bezierCurveTo(327.112000, 254.351240, 331.276000, 248.336230, 331.276000, 248.336230);
	dessin.lineTo(333.358000, 232.836230);
	dessin.bezierCurveTo(333.358000, 232.836230, 330.583000, 229.598230, 321.097000, 237.232240);
	dessin.bezierCurveTo(311.612000, 244.867230, 312.769000, 246.717230, 313.000000, 248.105230);
	dessin.stroke();
	dessin.restore();
	
// #path6654
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(329.771000, 237.744240);
	dessin.lineTo(328.981000, 243.192240);
	dessin.bezierCurveTo(328.981000, 243.192240, 326.296000, 247.772230, 326.691000, 243.745240);
	dessin.bezierCurveTo(327.086000, 239.718230, 327.244000, 238.297240, 327.323000, 237.428240);
	dessin.bezierCurveTo(327.402000, 236.559240, 329.771000, 235.059240, 329.771000, 237.744240);
	dessin.stroke();
	
// #path6656
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(322.426000, 239.480230);
	dessin.bezierCurveTo(321.321000, 240.507240, 320.136000, 240.586230, 321.321000, 242.481230);
	dessin.bezierCurveTo(322.506000, 244.377240, 324.007000, 246.825230, 324.243000, 243.745240);
	dessin.bezierCurveTo(324.480000, 240.666240, 324.164000, 238.455230, 322.426000, 239.480230);
	dessin.stroke();
	
// #path6658
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(320.768000, 246.983240);
	dessin.bezierCurveTo(320.768000, 249.351240, 320.137000, 250.379230, 318.794000, 250.141230);
	dessin.bezierCurveTo(317.451000, 249.905240, 317.530000, 249.430240, 317.689000, 247.693230);
	dessin.bezierCurveTo(317.846000, 245.956230, 318.636000, 245.640230, 319.426000, 245.798240);
	dessin.bezierCurveTo(320.215000, 245.956230, 320.689000, 246.114240, 320.768000, 246.983240);
	dessin.stroke();
	
// #path6660
	dessin.beginPath();
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 1.131000;
	dessin.lineCap = 'round';
	dessin.moveTo(318.478000, 256.459230);
	dessin.bezierCurveTo(319.173000, 256.580230, 319.878000, 255.865240, 320.053000, 254.861230);
	dessin.bezierCurveTo(320.228000, 253.858240, 319.805000, 252.947240, 319.110000, 252.826230);
	dessin.bezierCurveTo(318.415000, 252.706230, 317.710000, 253.421230, 317.535000, 254.424240);
	dessin.bezierCurveTo(317.361000, 255.427230, 317.783000, 256.338230, 318.478000, 256.459230);
	dessin.stroke();
	dessin.restore();
	
// #path6664
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(255, 255, 255)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 0.984955;
	dessin.fillStyle = 'rgb(241, 255, 255)';
	dessin.moveTo(278.946590, 90.064175);
	dessin.bezierCurveTo(282.319010, 98.534279, 282.266330, 107.674920, 281.475070, 114.090860);
	dessin.bezierCurveTo(281.265990, 116.695060, 279.511280, 120.949330, 279.439950, 122.417240);
	dessin.bezierCurveTo(280.852860, 120.507710, 284.556490, 118.183150, 284.743600, 116.641000);
	dessin.bezierCurveTo(280.785530, 113.379610, 285.225580, 94.311380, 278.946590, 90.064175);
	dessin.moveTo(298.681090, 112.892590);
	dessin.bezierCurveTo(306.264410, 114.649220, 313.207510, 119.545920, 317.675550, 126.361830);
	dessin.bezierCurveTo(319.534190, 126.250010, 323.219480, 131.953490, 325.975720, 130.263860);
	dessin.bezierCurveTo(318.183800, 123.101980, 311.237980, 114.932260, 298.681090, 112.892590);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	
// #path6668
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.fillStyle = 'rgb(255, 204, 0)';
	dessin.moveTo(435.626310, 149.150410);
	dessin.bezierCurveTo(435.626310, 149.150410, 470.687720, 139.281280, 471.077290, 126.815000);
	dessin.bezierCurveTo(471.466860, 114.348720, 475.492430, 134.216850, 473.544580, 138.112560);
	dessin.bezierCurveTo(471.596720, 142.008280, 484.004980, 146.246940, 488.779770, 121.087490);
	dessin.bezierCurveTo(493.554550, 95.928040, 495.574660, 143.859550, 492.452680, 147.899750);
	dessin.bezierCurveTo(489.330710, 151.939950, 495.574660, 158.367550, 503.838710, 155.245570);
	dessin.bezierCurveTo(512.102760, 152.123600, 500.533090, 174.161070, 477.393740, 164.978800);
	dessin.bezierCurveTo(454.254390, 155.796510, 429.186760, 162.775050, 429.186760, 162.775050);
	dessin.lineTo(435.626310, 149.150410);
	dessin.fill();
	dessin.stroke();
	
// #path6670
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(464.684370, 136.600150);
	dessin.lineTo(470.592870, 145.625220);
	dessin.lineTo(466.827020, 150.949360);
	dessin.lineTo(479.033580, 158.545990);
	dessin.lineTo(474.034080, 163.805210);
	dessin.stroke();
	
// #path6672
	dessin.save();
	dessin.beginPath();
	dessin.transform(1.038857, 0.000000, 0.000000, 1.038857, 6.159087, 4.108537);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.088388;
	dessin.fillStyle = 'rgb(255, 102, 0)';
	dessin.moveTo(449.146050, 152.728600);
	dessin.bezierCurveTo(438.847720, 149.577190, 426.392110, 148.916290, 413.800530, 150.853170);
	dessin.bezierCurveTo(412.320400, 151.080850, 408.444730, 151.829960, 408.307220, 151.914940);
	dessin.bezierCurveTo(408.265920, 151.940540, 408.232120, 151.928240, 408.232120, 151.887740);
	dessin.bezierCurveTo(408.232120, 151.847240, 409.481720, 149.172280, 411.009020, 145.943440);
	dessin.lineTo(413.785930, 140.072820);
	dessin.lineTo(415.185370, 139.642250);
	dessin.bezierCurveTo(424.248660, 136.853740, 433.135820, 133.031330, 438.726100, 129.517280);
	dessin.bezierCurveTo(439.382380, 129.104740, 440.165040, 128.592650, 440.465340, 128.379310);
	dessin.lineTo(441.011340, 127.991410);
	dessin.lineTo(441.270440, 128.370230);
	dessin.bezierCurveTo(441.412950, 128.578580, 442.627720, 130.428680, 443.969940, 132.481560);
	dessin.lineTo(446.410340, 136.214070);
	dessin.lineTo(444.557470, 138.832700);
	dessin.bezierCurveTo(443.538390, 140.272940, 442.721490, 141.478650, 442.742130, 141.512050);
	dessin.bezierCurveTo(442.762730, 141.545450, 445.367260, 143.181980, 448.529880, 145.148800);
	dessin.bezierCurveTo(451.692500, 147.115610, 454.280630, 148.748270, 454.281270, 148.776930);
	dessin.bezierCurveTo(454.282270, 148.827630, 452.825200, 150.383140, 451.096990, 152.175910);
	dessin.lineTo(450.241140, 153.063740);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	
// #path6674
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(464.294800, 240.745510);
	dessin.lineTo(513.121060, 218.929530);
	dessin.stroke();
	
// #path6676
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(467.411370, 268.794640);
	dessin.lineTo(526.626190, 241.784370);
	dessin.stroke();
	
// #path6678
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(456.286220, 211.881320);
	dessin.lineTo(505.112480, 190.065340);
	dessin.stroke();
	
// #path6680
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(460.693720, 298.929340);
	dessin.lineTo(509.519980, 277.113360);
	dessin.stroke();
	
// #path6684
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(440.319840, 131.146150);
	dessin.bezierCurveTo(440.319840, 131.146150, 496.937510, 109.849600, 496.677800, 98.941604);
	dessin.bezierCurveTo(496.418090, 88.033611, 503.170650, 108.291310, 497.456940, 112.187020);
	dessin.bezierCurveTo(491.743230, 116.082730, 513.559220, 114.005020, 516.935500, 99.720747);
	dessin.bezierCurveTo(520.311790, 85.436470, 524.207500, 104.655320, 519.272930, 118.160450);
	dessin.bezierCurveTo(514.338360, 131.665580, 544.465200, 107.512170, 537.712630, 116.082730);
	dessin.bezierCurveTo(530.960070, 124.653300, 521.610360, 126.990730, 526.025500, 130.367010);
	dessin.bezierCurveTo(530.440640, 133.743300, 559.528620, 132.704440, 540.569490, 137.379290);
	dessin.bezierCurveTo(521.610360, 142.054150, 515.636930, 150.105290, 527.324060, 151.403860);
	dessin.bezierCurveTo(539.011200, 152.702430, 549.592850, 149.501020, 528.103210, 164.129850);
	dessin.bezierCurveTo(515.948980, 172.403700, 476.549960, 171.661550, 471.875100, 167.506130);
	dessin.bezierCurveTo(468.295840, 164.324560, 427.423250, 165.075530, 427.423250, 165.075530);
	dessin.stroke();
	
// #path6686
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(475.355400, 116.129060);
	dessin.lineTo(488.026940, 120.720200);
	dessin.stroke();
	
// #path6690
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(494.638180, 137.248300);
	dessin.lineTo(512.084510, 149.368910);
	dessin.lineTo(508.595240, 170.120870);
	dessin.stroke();
	
// #path6702
	dessin.save();
	dessin.beginPath();
	dessin.transform(1.038857, 0.000000, 0.000000, 1.038857, 5.038962, 4.108537);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.125000;
	dessin.fillStyle = 'rgb(255, 102, 0)';
	dessin.moveTo(463.972880, 159.506670);
	dessin.bezierCurveTo(461.748920, 159.380260, 458.223230, 159.052900, 456.660380, 158.827690);
	dessin.bezierCurveTo(453.160190, 158.323310, 450.970520, 157.707860, 449.785830, 156.895460);
	dessin.bezierCurveTo(448.930670, 156.309030, 447.970510, 156.000700, 445.910380, 155.650950);
	dessin.bezierCurveTo(440.737180, 154.772700, 430.890280, 154.338300, 416.126590, 154.337030);
	dessin.lineTo(408.092800, 154.336350);
	dessin.lineTo(408.345750, 153.840530);
	dessin.bezierCurveTo(408.484870, 153.567820, 408.696950, 153.293020, 408.817040, 153.229850);
	dessin.bezierCurveTo(409.161150, 153.048830, 411.702310, 152.508720, 414.160380, 152.094130);
	dessin.bezierCurveTo(423.136700, 150.580180, 432.241250, 150.454050, 440.722880, 151.726150);
	dessin.bezierCurveTo(445.146790, 152.389660, 449.630890, 153.563120, 454.028950, 155.208260);
	dessin.bezierCurveTo(455.476240, 155.749640, 457.307260, 156.364510, 458.097880, 156.574640);
	dessin.bezierCurveTo(465.341110, 158.499760, 472.091440, 157.595670, 477.491730, 153.977180);
	dessin.bezierCurveTo(480.744010, 151.797960, 483.059650, 148.822060, 483.193130, 146.650110);
	dessin.bezierCurveTo(483.240330, 145.881720, 483.210330, 145.719990, 482.949360, 145.336350);
	dessin.bezierCurveTo(482.381850, 144.502150, 481.560630, 144.443120, 479.518270, 145.089740);
	dessin.bezierCurveTo(477.457140, 145.742290, 475.852530, 145.869400, 474.140340, 145.515740);
	dessin.bezierCurveTo(472.021170, 145.078010, 470.278660, 143.895380, 469.394680, 142.294870);
	dessin.bezierCurveTo(469.091090, 141.745210, 469.037680, 141.507680, 469.036630, 140.702510);
	dessin.bezierCurveTo(469.035630, 139.828350, 469.070730, 139.698900, 469.498690, 139.004990);
	dessin.bezierCurveTo(470.319350, 137.674400, 470.739340, 135.502440, 471.007680, 131.201250);
	dessin.lineTo(471.160380, 128.753660);
	dessin.lineTo(479.195530, 134.336400);
	dessin.bezierCurveTo(483.614860, 137.406910, 487.282820, 139.971290, 487.346550, 140.035010);
	dessin.bezierCurveTo(487.446050, 140.134510, 484.423510, 158.677390, 484.285200, 158.815700);
	dessin.bezierCurveTo(484.218000, 158.882800, 482.566810, 159.059870, 479.910380, 159.284680);
	dessin.bezierCurveTo(477.665620, 159.474650, 466.215560, 159.634140, 463.972880, 159.506670);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	
// #path6704
	dessin.save();
	dessin.beginPath();
	dessin.transform(1.038857, 0.000000, 0.000000, 1.038857, 5.038962, 4.108537);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.176777;
	dessin.fillStyle = 'rgb(255, 102, 0)';
	dessin.moveTo(415.121510, 138.517510);
	dessin.bezierCurveTo(416.360390, 135.573690, 418.741460, 125.358160, 418.741460, 122.986820);
	dessin.bezierCurveTo(418.741460, 122.450190, 418.776560, 122.405570, 419.059710, 122.582390);
	dessin.bezierCurveTo(419.721980, 122.995980, 436.456830, 116.005340, 448.304210, 110.366080);
	dessin.lineTo(452.499500, 108.369160);
	dessin.lineTo(458.380480, 110.500870);
	dessin.bezierCurveTo(461.615020, 111.673320, 464.400670, 112.687920, 464.570820, 112.755550);
	dessin.bezierCurveTo(464.795380, 112.844850, 464.880180, 112.792550, 464.880180, 112.564980);
	dessin.bezierCurveTo(464.880180, 112.392530, 464.929180, 112.300440, 464.989080, 112.360340);
	dessin.bezierCurveTo(465.177630, 112.548890, 464.173410, 116.710270, 463.289060, 119.405020);
	dessin.bezierCurveTo(461.395220, 125.175850, 458.755280, 129.141910, 455.816650, 130.631030);
	dessin.bezierCurveTo(454.548550, 131.273620, 452.983670, 131.382000, 452.190510, 130.882150);
	dessin.bezierCurveTo(451.436740, 130.407110, 451.338180, 130.106950, 451.612270, 129.121080);
	dessin.bezierCurveTo(452.237140, 126.873560, 452.135070, 122.640380, 451.354050, 118.411660);
	dessin.bezierCurveTo(450.675030, 114.735220, 450.059650, 113.434700, 449.115820, 113.681520);
	dessin.bezierCurveTo(448.561990, 113.826350, 448.276620, 114.757810, 448.087750, 117.037230);
	dessin.bezierCurveTo(447.992950, 118.180700, 447.841190, 119.371190, 447.750410, 119.682770);
	dessin.bezierCurveTo(446.249730, 124.833090, 437.324280, 130.818840, 423.426040, 135.995630);
	dessin.bezierCurveTo(421.216690, 136.818560, 415.293870, 138.826870, 415.076250, 138.826870);
	dessin.bezierCurveTo(415.029550, 138.826870, 415.049950, 138.687650, 415.121550, 138.517510);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	
// #path6710
	dessin.save();
	dessin.beginPath();
	dessin.transform(1.038857, 0.000000, 0.000000, 1.038857, 5.038962, 4.108537);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.176777;
	dessin.fillStyle = 'rgb(255, 127, 42)';
	dessin.moveTo(415.424610, 138.359610);
	dessin.bezierCurveTo(415.424610, 138.312710, 415.743980, 137.212820, 416.134320, 135.915470);
	dessin.bezierCurveTo(417.045290, 132.887770, 418.121120, 128.237810, 418.626810, 125.142490);
	dessin.bezierCurveTo(418.958260, 123.113650, 419.074260, 122.711810, 419.328470, 122.711810);
	dessin.bezierCurveTo(420.947160, 122.711810, 441.597510, 113.913440, 451.676440, 108.929520);
	dessin.lineTo(452.484530, 108.529920);
	dessin.lineTo(458.482340, 110.699970);
	dessin.bezierCurveTo(461.781130, 111.893500, 464.551490, 112.932360, 464.638690, 113.008550);
	dessin.bezierCurveTo(464.842950, 113.187030, 464.042470, 116.462950, 463.066800, 119.441440);
	dessin.bezierCurveTo(460.782170, 126.415920, 457.297970, 130.753110, 453.800160, 130.976700);
	dessin.bezierCurveTo(453.035160, 131.025600, 452.683530, 130.958600, 452.238360, 130.679110);
	dessin.bezierCurveTo(451.571920, 130.260700, 451.575150, 130.289120, 451.950380, 128.147770);
	dessin.bezierCurveTo(452.619990, 124.326410, 451.440180, 115.381370, 450.072990, 113.913860);
	dessin.bezierCurveTo(449.596600, 113.402510, 448.915560, 113.404040, 448.595340, 113.916860);
	dessin.bezierCurveTo(448.261590, 114.451690, 448.185470, 114.829250, 447.872920, 117.500200);
	dessin.bezierCurveTo(447.496900, 120.713600, 447.104110, 121.470600, 444.431290, 124.133110);
	dessin.bezierCurveTo(439.801750, 128.744780, 431.989360, 132.857800, 419.794140, 137.103930);
	dessin.bezierCurveTo(416.211570, 138.351310, 415.424610, 138.577400, 415.424610, 138.359300);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	
// #path6712
	dessin.save();
	dessin.beginPath();
	dessin.transform(1.038857, 0.000000, 0.000000, 1.038857, 5.038962, 4.108537);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.176777;
	dessin.fillStyle = 'rgb(255, 127, 42)';
	dessin.moveTo(463.773030, 159.364840);
	dessin.bezierCurveTo(463.189670, 159.330840, 461.439580, 159.182000, 459.883950, 159.034190);
	dessin.bezierCurveTo(454.673300, 158.539120, 451.997060, 157.941000, 449.930370, 156.809630);
	dessin.bezierCurveTo(448.435750, 155.991430, 446.716960, 155.572400, 443.178550, 155.163570);
	dessin.bezierCurveTo(437.953730, 154.559910, 427.341990, 154.184960, 415.358850, 154.180620);
	dessin.lineTo(408.310420, 154.177620);
	dessin.lineTo(408.573470, 153.779870);
	dessin.bezierCurveTo(408.912270, 153.267590, 410.206430, 152.913990, 414.187170, 152.246070);
	dessin.bezierCurveTo(419.711970, 151.319080, 422.540330, 151.096260, 428.771250, 151.097110);
	dessin.bezierCurveTo(436.334990, 151.098110, 440.879730, 151.607020, 446.802470, 153.116100);
	dessin.bezierCurveTo(449.515170, 153.807280, 450.530530, 154.125310, 455.464530, 155.829210);
	dessin.bezierCurveTo(459.466480, 157.211240, 461.635570, 157.605560, 465.275640, 157.612770);
	dessin.bezierCurveTo(469.279590, 157.620770, 472.006950, 157.017680, 475.214450, 155.415310);
	dessin.bezierCurveTo(477.389520, 154.328710, 478.506930, 153.516550, 480.309340, 151.712230);
	dessin.bezierCurveTo(482.298330, 149.721120, 483.115360, 148.345760, 483.260580, 146.744200);
	dessin.bezierCurveTo(483.374290, 145.490230, 483.088940, 144.938980, 482.168950, 144.635360);
	dessin.bezierCurveTo(481.634040, 144.458820, 481.258710, 144.505230, 479.436970, 144.973130);
	dessin.bezierCurveTo(475.503810, 145.983360, 472.662020, 145.531860, 470.623250, 143.572820);
	dessin.bezierCurveTo(469.120700, 142.129040, 468.788430, 140.651150, 469.616600, 139.095440);
	dessin.bezierCurveTo(470.276000, 137.856760, 470.718630, 135.913870, 470.944760, 133.265550);
	dessin.bezierCurveTo(471.054380, 131.981810, 471.195900, 130.510830, 471.259250, 129.996700);
	dessin.lineTo(471.374430, 129.061910);
	dessin.lineTo(478.807520, 134.239340);
	dessin.bezierCurveTo(482.895720, 137.086930, 486.464340, 139.581290, 486.737790, 139.782360);
	dessin.lineTo(487.234970, 140.147960);
	dessin.lineTo(486.228300, 146.499880);
	dessin.bezierCurveTo(485.155320, 153.270140, 484.245880, 158.600830, 484.146920, 158.699780);
	dessin.bezierCurveTo(483.791050, 159.055650, 467.556160, 159.585250, 463.773030, 159.364400);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	
// #path6714
	dessin.save();
	dessin.beginPath();
	dessin.transform(1.038857, 0.000000, 0.000000, 1.038857, 5.038962, 4.108537);
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineWidth = 0.176777;
	dessin.fillStyle = 'rgb(255, 221, 85)';
	dessin.moveTo(485.604960, 158.299020);
	dessin.bezierCurveTo(485.604960, 158.134870, 486.281130, 154.006350, 487.107560, 149.124540);
	dessin.bezierCurveTo(487.933990, 144.242720, 488.605800, 140.061470, 488.600480, 139.832860);
	dessin.bezierCurveTo(488.592480, 139.487370, 487.154220, 138.422510, 480.079810, 133.524090);
	dessin.bezierCurveTo(472.959890, 128.594160, 471.537130, 127.674320, 471.374890, 127.896200);
	dessin.bezierCurveTo(471.232000, 128.091610, 471.171820, 126.967320, 471.146240, 123.624660);
	dessin.bezierCurveTo(471.064540, 112.943670, 470.120460, 106.093900, 468.599530, 105.146270);
	dessin.bezierCurveTo(468.053810, 104.806250, 467.352710, 105.223470, 466.826920, 106.201150);
	dessin.bezierCurveTo(466.360270, 107.068870, 465.278420, 110.849010, 465.272930, 111.631020);
	dessin.bezierCurveTo(465.270930, 111.849710, 465.213930, 111.934880, 465.140350, 111.827650);
	dessin.bezierCurveTo(465.068950, 111.723610, 462.492740, 110.731450, 459.415520, 109.622850);
	dessin.lineTo(453.820570, 107.607210);
	dessin.lineTo(455.791600, 106.571580);
	dessin.bezierCurveTo(462.763550, 102.908320, 467.637720, 99.657102, 470.684970, 96.637248);
	dessin.bezierCurveTo(473.123930, 94.220215, 473.754190, 93.105121, 473.773340, 91.173129);
	dessin.bezierCurveTo(473.792240, 89.266892, 473.965360, 89.060851, 474.428990, 90.392813);
	dessin.bezierCurveTo(475.325250, 92.967665, 475.801270, 96.810467, 475.524540, 99.236870);
	dessin.bezierCurveTo(475.269710, 101.471210, 474.906260, 102.300070, 473.628340, 103.561290);
	dessin.bezierCurveTo(472.429710, 104.744250, 472.256910, 105.268430, 472.879770, 105.832110);
	dessin.bezierCurveTo(473.996830, 106.843030, 478.871180, 105.975920, 482.864920, 104.055830);
	dessin.bezierCurveTo(487.247520, 101.948780, 490.766580, 98.570533, 492.380620, 94.920900);
	dessin.bezierCurveTo(492.619670, 94.380377, 493.104520, 92.919397, 493.458080, 91.674277);
	dessin.bezierCurveTo(494.096610, 89.425571, 494.692840, 88.063861, 495.096330, 87.932707);
	dessin.bezierCurveTo(495.212160, 87.895057, 495.431340, 88.104825, 495.583390, 88.398860);
	dessin.bezierCurveTo(496.764070, 90.682042, 496.977650, 97.839593, 496.030420, 103.380250);
	dessin.bezierCurveTo(495.615860, 105.805160, 495.347850, 106.874000, 494.618340, 109.011620);
	dessin.bezierCurveTo(493.296640, 112.884480, 493.949320, 114.599650, 496.648840, 114.347570);
	dessin.bezierCurveTo(498.733440, 114.152900, 501.874350, 112.741190, 508.662650, 108.947840);
	dessin.bezierCurveTo(510.600770, 107.864810, 512.251420, 106.978680, 512.330760, 106.978680);
	dessin.bezierCurveTo(512.636160, 106.978680, 512.427060, 107.291580, 511.190600, 108.685100);
	dessin.bezierCurveTo(509.527410, 110.559500, 507.697370, 112.203720, 504.431670, 114.757740);
	dessin.bezierCurveTo(500.522670, 117.814860, 499.613710, 118.929140, 499.882370, 120.334590);
	dessin.bezierCurveTo(500.025600, 121.083850, 501.307990, 122.255460, 502.454320, 122.684350);
	dessin.bezierCurveTo(504.033180, 123.275080, 506.631920, 123.736980, 512.586080, 124.485190);
	dessin.bezierCurveTo(515.637020, 124.868570, 518.709670, 125.302510, 519.414190, 125.449490);
	dessin.bezierCurveTo(520.118710, 125.596470, 520.715020, 125.716790, 520.739320, 125.716870);
	dessin.bezierCurveTo(520.763620, 125.716950, 520.783520, 125.787370, 520.783520, 125.873310);
	dessin.bezierCurveTo(520.783520, 126.109590, 518.634670, 126.857660, 515.895980, 127.574780);
	dessin.bezierCurveTo(506.538020, 130.025150, 500.774690, 132.588960, 497.978740, 135.545270);
	dessin.bezierCurveTo(495.722820, 137.930570, 495.950760, 140.060500, 498.594330, 141.297580);
	dessin.bezierCurveTo(500.503230, 142.190860, 501.994630, 142.389860, 510.271120, 142.855650);
	dessin.bezierCurveTo(515.432060, 143.146100, 515.697640, 143.429550, 513.152270, 145.930520);
	dessin.bezierCurveTo(510.540820, 148.496410, 503.661670, 153.472420, 500.896140, 154.795930);
	dessin.bezierCurveTo(497.962000, 156.200150, 494.030580, 157.317740, 489.082250, 158.154290);
	dessin.bezierCurveTo(485.943340, 158.684950, 485.604960, 158.699030, 485.604960, 158.299020);
	dessin.fill();
	dessin.stroke();
	dessin.restore();
	
// #path6716
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(459.929160, 218.419670);
	dessin.lineTo(493.169010, 204.095310);
	dessin.stroke();
	
// #path6720
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(470.213320, 254.781500);
	dessin.lineTo(504.555040, 239.906200);
	dessin.stroke();
	
// #path6720-6
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(466.176740, 282.745130);
	dessin.lineTo(500.518460, 267.869830);
	dessin.stroke();
	
// #path6720-6-8
	dessin.beginPath();
	dessin.lineJoin = 'miter';
	dessin.strokeStyle = 'rgb(0, 0, 0)';
	dessin.lineCap = 'butt';
	dessin.lineWidth = 1.038857;
	dessin.moveTo(459.470040, 318.965640);
	dessin.lineTo(493.811760, 304.090340);
	dessin.stroke();
	dessin.restore();
	dessin.restore();
	dessin.restore();
	}
	
	}
}

Moto.prototype = Object.create(Artefact.prototype);
Moto.prototype.constructor = Moto;
