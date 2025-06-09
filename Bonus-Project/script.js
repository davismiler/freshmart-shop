function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll on #main
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    // Tell ScrollTrigger to update on Locomotive Scroll update
    locoScroll.on("scroll", ScrollTrigger.update);

    // Proxy ScrollTrigger scroll methods to use Locomotive Scroll's scroll position
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // Refresh ScrollTrigger and update Locomotive Scroll on window update
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // Refresh ScrollTrigger to account for changes (like pin spacing)
    ScrollTrigger.refresh();
}

function textSplitting() {
    var allh1 = document.querySelectorAll("#page2 h1");
    allh1.forEach(function (elem) {
        var clutter = "";
        var h1Text = elem.textContent;
        console.log(h1Text);
        var splittedText = h1Text.split("");
        splittedText.forEach(function (e) {
            clutter += `<span>${e}</span>`;
        });
        elem.innerHTML = clutter;
    });
}
 
function gsapAnimation() {
    gsap.to("#page2 h1 span", {
        color: "red",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page2 h1",
            scroller: "#main",
            markers: true,
            start: "top 50%",
            end: "top 10%",
            scrub: 2
        }
    });
}

// Call functions in order
locoScroll();
textSplitting();
gsapAnimation();
