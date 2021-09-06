


import {size} from '../../_common/js/common.js'




const {w, h} = size










function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
	
	}})

	

	tl.set(".frame1", {opacity:1})

	
	
	tl.add("in")
	tl.from(".char_m", .5, {x:"-=200"}, "in")
	tl.from(".char_w", .5, {x:"+=200"}, "in")
	tl.from(".t1", .6, {opacity:0}, "in+=.2")

	tl.add("out", "+=1.5")
	tl.to(".t1", .3, {opacity:0}, "out")
	tl.to(".char_m", .3, {x:"-=50", opacity:0}, "out")
	tl.to(".char_w", .3, {x:"+=50", opacity:0}, "out")
	
	tl.set(".frame2", {opacity:1})
	tl.from(".logo", .4, {scale:2, ease:Power4.easeIn, opacity:0})
	
	tl.add(rumble)
	

	tl.from(".t2_a", .3, {x:"-=100", opacity:0}, "+=.4")
	tl.from(".t2_b", .5, {opacity:0}, "+=.4")
	tl.from(".t2_c", .5, {opacity:0})




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