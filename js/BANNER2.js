(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._88045ae91dd5e6e114d473311df7e9e7 = function() {
	this.initialize(img._88045ae91dd5e6e114d473311df7e9e7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,818,545);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFF5").s().p("AToEMQgmgJgWgQIARg6QAaAQAfAJQAiALAiAAQAbgBAVgGQAVgHAOgMQAPgNAIgQQAHgRAAgUQAAgUgGgPQgFgPgNgMQgMgNgTgMIgvgVQgigMgZgNQgbgPgSgSQgTgUgJgWQgKgYAAgbQAAggANgbQAMgbAXgTQAXgUAggLQAhgLAmAAQAnAAAhAIQAbAHAVALIgUA5Qg1gZgxAAQgaAAgVAHQgTAHgMANQgMALgGAOQgGAOAAAOQAAAUAHAOQAGAPANAMQANALAUALIAxAVQAjAOAZAPQAaAPARASQARATAIAXQAJAZAAAdQAAAfgLAcQgMAdgXAUQgZAXgiAMQglAMgvAAQgmAAgngKgAghESQgagFgYgJQgZgJgVgMQgVgOgSgRQgSgSgOgVQgOgWgKgYQgKgbgFgcQgFgeAAghQAAgeAFgeQAFgcAKgaQALgaAOgWQAPgXASgTQATgSAWgOQAXgQAZgJQAagLAdgFQAcgFAfAAQBDAAA9AYIgRA5QgVgKgbgGQgdgGggAAQguAAgnAPQgnAOgcAcQgcAegOAoQgPA8AAAiQAAAxAOApQANAoAbAbQAbAdAmAPQAaAKA9AGQAfAAAfgHQAegFAVgLIAPA3QgWALgiAHQgpAIgtAAgAOAEOIixoaIBMAAIBUEJQArCKAOA/IACAAQAPg/AuiJIBbkKIBLAAIjBIagAJKEOIiskRQglg7hAh5IgCABQAGCFAABZIAADmIhCAAIAAoaIBMAAICtEQQAoA/A5BwIABgBQgGhIgCiUIAAjiIBCAAIAAIagAo8EOIAAoaIBFAAIAAIagArWEOIg6ipIi/AAIg4CpIhIAAIC3oaIBUAAIC4IagAseAuIg1ibQgLgggRhCIgBAAIgcBiIg0CbICiAAgA1NEOIAAnfIikAAIAAg7IGPAAIAAA7IilAAIAAHfg");
	this.shape.setTransform(154.1,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,7.2,304.5,55.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AZBBqQgKgCgIgEQgJgDgHgGQgIgGgFgGQgHgIgEgIQgGgIgDgKQgDgKgCgKQgCgLAAgMQAAgLACgMQACgLAEgKQADgKAFgJQAFgJAHgHQAHgHAHgFQAIgGAIgEQAJgEAKgCQAKgCAKAAQALAAAKACQAJACAJAEIAQAJQAIAGAFAHIAMAPQAEAIADAKIAFAUIACAXQAAAMgCAMQgCAMgEALQgDAKgGAIQgEAJgHAHQgHAHgIAFQgIAFgIAEQgJADgJACQgKACgKAAQgKAAgKgCgAZIhTQgIACgHADQgMAHgIAMQgJAMgEAQQgEAQAAAQQAAARAFAQQAEAPAIAMQAJAMAMAGQANAHAQAAQAPAAANgHQAMgGAJgMQAJgMAEgQQAEgQABgRQgBgQgDgPQgFgPgIgMQgIgMgMgIQgHgDgHgCQgIgCgIAAQgJAAgGACgAiHBqQgKgCgIgEQgJgDgHgGQgIgGgFgGQgHgIgEgIQgGgIgDgKQgDgKgCgKQgCgLAAgMQAAgLACgMQACgLAEgKQADgKAFgJQAFgJAHgHQAHgHAHgFQAIgGAIgEQAJgEAKgCQAKgCAKAAQALAAAKACQAJACAJAEIAQAJQAIAGAFAHIAMAPQAEAIADAKIAFAUIACAXQAAAMgCAMQgCAMgEALQgDAKgGAIQgEAJgHAHQgHAHgIAFQgIAFgIAEQgJADgJACQgKACgKAAQgKAAgKgCgAiAhTQgIACgHADQgMAHgIAMQgJAMgEAQQgEAQAAAQQAAARAFAQQAEAPAIAMQAJAMAMAGQANAHAQAAQAPAAANgHQAMgGAJgMQAIgMAFgQQAEgQABgRQgBgQgDgPQgFgPgIgMQgIgMgMgIQgHgDgHgCQgIgCgIAAQgJAAgGACgA+qBqQgKgCgIgEQgJgDgHgGQgIgGgFgGQgHgIgEgIQgGgIgDgKQgDgKgCgKQgCgLAAgMQAAgLACgMQACgLAEgKQADgKAFgJQAFgJAHgHQAHgHAHgFQAIgGAIgEQAJgEAKgCQAKgCAKAAQALAAAJACQAKACAJAEIAQAJQAIAGAFAHIAMAPQAEAIADAKIAFAUIACAXQAAAMgCAMQgCAMgEALQgDAKgGAIQgEAJgHAHQgHAHgIAFQgIAFgIAEQgJADgJACQgKACgKAAQgKAAgKgCgA+jhTQgIACgHADQgMAHgIAMQgJAMgEAQQgEAQAAAQQAAARAFAQQAEAPAIAMQAJAMAMAGQANAHAQAAQAPAAANgHQAMgGAJgMQAJgMAEgQQAEgQABgRQgBgQgDgPQgFgPgIgMQgIgMgMgIQgHgDgHgCQgIgCgIAAQgJAAgGACgATeBnQgPgDgJgGIAIgWQAJAFAMAEQAOAFANgBQAKAAAIgDQAIgCAGgFQAGgFADgGQACgHAAgIQABgHgDgGQgCgFgFgFIgMgJIgSgJQgNgEgKgFQgKgGgIgHQgGgHgEgJQgEgJAAgLQAAgMAFgKQAEgLAKgHQAIgIAMgFQAOgEAOAAQAPAAANADQAKADAIAEIgHAXQgVgLgTAAQgJABgIADQgIACgFAFQgEAEgCAGQgDAFAAAGQAAAHADAFQACAHAFAEQAFAEAIAFIASAIQAPAFAJAGQAKAFAHAHQAHAIADAJQADAJAAALQAAAMgEAMQgFALgJAIQgKAIgNAEQgOAGgSAAQgPAAgPgFgApkBnQgPgDgIgGIAGgWQAKAFAMAEQANAFAOgBQAKAAAIgDQAIgCAGgFQAFgFADgGQADgHABgIQAAgHgDgGQgCgFgEgFIgNgJIgSgJQgNgEgKgFQgLgGgGgHQgHgHgFgJQgDgJAAgLQAAgMAFgKQAEgLAJgHQAKgIALgFQANgEAQAAQAPAAAMADQAKADAJAEIgIAXQgUgLgUAAQgJABgJADQgHACgFAFQgFAEgCAGQgCAFAAAGQAAAHACAFQADAHAFAEQAFAEAIAFIATAIQAOAFAJAGQAKAFAGAHQAIAIACAJQAEAJAAALQAAAMgFAMQgEALgJAIQgKAIgNAEQgOAGgSAAQgPAAgPgFgAeABpIAAjRIBwAAIAAAXIhVAAIAABCIBRAAIAAAWIhRAAIAABLIBaAAIAAAXgAdFBpQgIgYgFgbQgDgLgDgHQgEgIgFgEQgFgFgGgCQgHgCgJgBIgaAAIAABbIgbAAIAAjNQANgEAngBQAWAAAOAEQAOAEALAJQAHAHAFALQAEAKAAALQAAALgEAJQgDAIgFAHQgFAGgHAGQgHAEgJACIAAABQAMAEAIALQAHAKAEARIAJAlQAEAPADAGgAb0hRIAABLIAbAAQALAAAJgCQAJgDAGgFQAGgFADgIQADgHAAgJQABgKgEgHQgDgIgGgEQgHgGgJgBQgIgDgMAAQgRAAgJADgAWSBpIAAi5IhAAAIAAgYICbAAIAAAYIhAAAIAAC5gAP+BpIAAjRIAbAAIAAC6IBZAAIAAAXgAO0BpIAAjRIAbAAIAADRgAN4BpIgWhCIhKAAIgWBCIgcAAIBHjRIAhAAIBHDRgANdASIgVg8QgFgMgGgaIgBAAIgeBiIA/AAgAKEBpIAAi5IhAAAIAAgYICbAAIAAAYIhAAAIAAC5gAHDBpIAAjRIBxAAIAAAXIhWAAIAABCIBRAAIAAAWIhRAAIAABLIBbAAIAAAXgAGJBpQgIgYgGgbQgCgLgDgHQgEgIgFgEQgFgFgGgCQgIgCgIgBIgaAAIAABbIgbAAIAAjNQANgEAngBQAWAAAOAEQAPAEAJAJQAIAHAFALQAEAKAAALQAAALgDAJQgEAIgEAHQgGAGgHAGQgIAEgHACIAAABQALAEAIALQAHAKAEARIAJAlQAEAPADAGgAE4hRIAABLIAbAAQAMAAAIgCQAJgDAGgFQAGgFAEgIQACgHAAgJQABgKgEgHQgDgIgGgEQgHgGgJgBQgIgDgLAAQgSAAgJADgACRBpIhChpQgPgYgYguIAAAAQACAzAAAiIAABaIgaAAIAAjRIAdAAIBEBpQAPAZAWArIAAAAQgCgcAAg5IAAhYIAZAAIAADRgAkPBpIAAjRIAbAAIAADRgAlYBpIAAhiIhlAAIAABiIgbAAIAAjRIAbAAIAABYIBlAAIAAhYIAbAAIAADRgAqsBpIgWhCIhLAAIgWBCIgbAAIBHjRIAgAAIBHDRgArIASIgUg8QgFgMgGgaIgBAAIgfBiIA/AAgAvFBpIAAjRIBwAAIAAAXIhVAAIAABGIBPAAIAAAVIhPAAIAABfgAyfBpIAAjRIBxAAIAAAXIhWAAIAABCIBRAAIAAAWIhRAAIAABLIBbAAIAAAXgAzpBpIhDhpQgOgYgYguIgBAAQACAzAAAiIAABaIgaAAIAAjRIAeAAIBDBpQAPAZAWArIABAAQgDgcAAg5IAAhYIAaAAIAADRgA20BpIAAjRIAbAAIAADRgA5GBpIAAjRIAbAAIAAC6IBZAAIAAAXgA6RBpIhChpQgPgYgYguIAAAAQACAzAAAiIAABaIgaAAIAAjRIAdAAIBEBpQAPAZAWArIAAAAQgCgcAAg5IAAhYIAZAAIAADRg");
	this.shape.setTransform(206.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,4,407.4,21.6);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(544.5,285.6,1,1,0,0,0,247.5,18.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:206.8,regY:14.8,x:503.8,y:281.9,alpha:0.001},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.002},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.004},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.005},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.006},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.008},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.009},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.01},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// TAI C
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-156.4,234.8,1,1,0,0,0,160.5,83);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:154.1,regY:35,x:-117.9,y:186.4,alpha:0.001},0).wait(1).to({x:-72.9,y:186},0).wait(1).to({x:-28,y:185.6,alpha:0.002},0).wait(1).to({x:16.9,y:185.2},0).wait(1).to({x:61.8,y:184.8,alpha:0.003},0).wait(1).to({x:106.8,y:184.4,alpha:0.004},0).wait(1).to({x:151.7,y:184},0).wait(1).to({x:196.6,y:183.6,alpha:0.005},0).wait(1).to({x:241.5,y:183.2},0).wait(1).to({x:286.5,y:182.8,alpha:0.006},0).wait(1).to({x:331.4,y:182.4},0).wait(1).to({x:376.3,y:182,alpha:0.007},0).wait(1).to({x:421.2,y:181.6,alpha:0.008},0).wait(1).to({x:466.2,y:181.2},0).wait(1).to({x:511.1,y:180.8,alpha:0.009},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.01},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// BACKGROUND
	this.instance_2 = new lib._88045ae91dd5e6e114d473311df7e9e7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-3,1.252,0.629);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(197,167,1339.1,343);
// library properties:
lib.properties = {
	width: 1024,
	height: 340,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_88045ae91dd5e6e114d473311df7e9e7.jpg", id:"_88045ae91dd5e6e114d473311df7e9e7"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;