const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power4.easeOut


const {w, h} = size










function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
	
	}})

	

	tl.set(".frame1", {opacity:1})

	
	tl.from(".logo", .6, {scale:2, ease:Power4.easeIn, opacity:0})

	tl.add(rumble)

	tl.from(".t1", .3, {x:"-=100", opacity:0}, "+=.25")


	tl.add("end", "+=1.2")
	tl.to(".t1", .3, {x:"+=100", opacity:0}, "end")
	tl.to(".logo", .6, {x:`-${size.w/2}`, y:-`${size.h/2}`, scale:.5}, "end")
	tl.add(characters, "end")

	tl.from(".t2_a", .3, {x:"-=100", opacity:0}, "+=.6")
	tl.from(".t2_b", .5, {opacity:0}, "+=.2")
	tl.from(".t2_c", .5, {opacity:0})




	return tl
}



function rumble(){
	const TIME = .05
	const tl = new TimelineMax()
	tl.from(".logo", TIME, {x:"+=6", y:"+=6", ease:Power4.easeInOut})
	tl.from(".logo", TIME, {x:"-=6", y:"-=6", ease:Power4.easeInOut})
	tl.from(".logo", TIME, {x:"+=3", y:"+=3", ease:Power4.easeInOut})
	tl.from(".logo", TIME, {x:"-=3", y:"-=3", ease:Power4.easeInOut})
}

function characters(){
	const TIME = .5
	
	const tl = new TimelineMax()
	tl.set(".frame2", {opacity:1})
	const list = [
		".char_m", 
		".char_gamer_w", 
		".char_gamer_m", 
		".char_w",
		".char_desk"
	]
	list.map(item=>{
		tl.from(item, TIME, {opacity: 0, ease:Power2.easeIn}, "-=.35")
	})
	
	tl.from(".swirl", TIME,  {opacity: 0, ease:Power2.easeIn})
	
}


export {size, init}