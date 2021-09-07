


import {size, rumble} from '../../_common/js/common.js'




const {w, h} = size





function init_v2(){
	
	const tl = new TimelineMax()

	

	tl.set(".frame1", {opacity:1})

	tl.add("start")
	tl.from(".logo", .6, {scale:2, ease:Power4.easeIn, opacity:0}, "start")
	tl.from(".char_m", .4, {x:"-=200", opacity:0, ease:Back.easeInOut}, "start")
	tl.from(".char_w", .4, {x:"+=200", opacity:0, ease:Back.easeInOut}, "start")

	tl.add(rumble)

	tl.from(".t1", .3, {x:"-=40", opacity:0}, "+=.6")


	tl.add("end", "+=1.2")
	tl.to(".t1", .3, {x:"+=40", opacity:0}, "end")
	tl.to(".logo", .6, {x:-600, scale:.5}, "end")
	tl.to(".char_m", .3, {x:"-=100",  opacity:0, ease:Power3.easeInOut}, "end")
	tl.to(".char_w", .3, {x:"+=100",  opacity:0, ease:Power3.easeInOut}, "end")

	tl.set(".frame2", {opacity:1})
	
	tl.from(".char_desk", .5, {opacity:0})
	tl.from(".swirl", .5, {opacity:0}, "-=.3")

	tl.from(".t2_a", .3, {x:"-=100", opacity:0}, "+=.2")
	tl.from([".t2_b", ".t2_c"], .5, {opacity:0}, "+=.2")	
	tl.from(".t2_d", .5, {opacity:0})
	

}





init_v2()