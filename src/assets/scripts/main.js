import {TimelineMax} from "gsap/TimelineMax";
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

const ScrollMagic = require('scrollmagic');

let scrollController = new ScrollMagic.Controller();

let Core = {
    "init":function () {
        Core.scrollAnimation();
    },
    "scrollAnimation":function(){
        let tween = new TimelineMax(),
            layer = document.querySelector('.upper-layer'),
            scene1 = document.getElementById('scene1'),
            header = document.querySelector('.upper-layer h1');

        tween.to(layer,3,{left:'-100vw',ease: Power4.easeOut},1);
        tween.to(header,3,{left:'100vw',ease: Power4.easeOut},1);

        let scene = new ScrollMagic.Scene({
            triggerElement:scene1,
            triggerHook:0,
            offset:0,
            duration: 1000
        })
            .setPin(scene1)
            .setTween(tween)
            .addTo(scrollController);

        scene.update(true);
    }

};


export default Core;
