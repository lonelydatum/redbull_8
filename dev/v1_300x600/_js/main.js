


import {init} from '../../_common/js/common.js'

const tl = init()
tl.from(".logo", .4, {scale:2, ease:Power3.easeInOut, opacity:0})

tl.from(".logo", .05, {x:"+=1", y:"+=1", ease:Power4.easeInOut})
tl.from(".logo", .05, {x:"-=1", y:"-=1", ease:Power4.easeInOut})
tl.from(".logo", .05, {x:"+=1", y:"+=1", ease:Power4.easeInOut})
tl.from(".logo", .05, {x:"-=1", y:"-=1", ease:Power4.easeInOut})

tl.from(".t1", .3, {x:"-=300"}, .7)


tl.add("end", "+=1")
tl.to(".t1", .3, {x:"+=300"}, "end")
tl.to(".logo", .3, {x:-150, y:-300, scale:.5}, "end")

tl.set(".frame2", {opacity:1})
tl.from(".char_m", .3, {opacity:0})
tl.from(".char_gamer_w", .3, {opacity:0})
tl.from(".char_gamer_m", .3, {opacity:0})
tl.from(".char_w", .3, {opacity:0})
tl.from(".char_desk", .3, {opacity:0})



tl.from(".t2_a", .3, {x:"-=300"})
tl.from(".t2_b", .3, {opacity:0})
tl.from(".t2_c", .3, {opacity:0})



module.exports = {};

