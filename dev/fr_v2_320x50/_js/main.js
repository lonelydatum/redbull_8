


import {size} from '../../_common/js/common.js'




const {w, h} = size










function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
	
	}})

	

	tl.set(".frame1", {opacity:1})

	
	
	tl.from(".logo", .4, {scale:2, ease:Power4.easeIn, opacity:0})
	tl.add(rumble)

	tl.from(".t1", .3, {x:"-=20", opacity:0}, "+=.25")
	tl.to(".t1", .3, {x:"-=20", opacity:0}, "+=1.5")
	tl.to(".logo", .5, {scale:.5, x:-280, ease:Power2.easeOut}, "-=.2")

	tl.set(".frame2", {opacity:1})
	
	
	
	

	tl.from(".t2_a", .3, {x:"-=100", opacity:0}, "+=.4")
	tl.from([".t2_b", ".t2_c"], .5, {opacity:0}, "+=.4")
	tl.from(".t2_d", .5, {opacity:0})




	return tl
}



function rumble(){
	const TIME = .04
	const tl = new TimelineMax()
	tl.from(".logo", TIME, {x:"+=2", y:"+=2", ease:Power4.easeInOut})
	tl.from(".logo", TIME, {x:"-=2", y:"-=2", ease:Power4.easeInOut})
	tl.from(".logo", TIME, {x:"+=1", y:"+=1", ease:Power4.easeInOut})
	tl.from(".logo", TIME, {x:"-=1", y:"-=1", ease:Power4.easeInOut})
}

init()