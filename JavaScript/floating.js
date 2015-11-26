javascript: initialFlow = 0;
img1 = .1;
img1 = .05;
img2 = .25;
img2 = .24;
img3 = 1.6;
img3 = .24;
img4 = 300;
img4 = 200;
img5 = 300;
img5 = 200;
imgCollection = document.getElementsByTagName("img");
imgLength = imgCollection.length;

function startFlow() {
    for (i = 0; i - imgLength; i++) {
        inFlow = imgCollection[i].style;
        inFlow.position = 'absolute';
        inFlow.left = (Math.sin(initialFlow * img1 + i * img2 + img3) * img4 + img5) + "px";
        inFlow.top = (Math.cos(initialFlow * img1 + i * img2 + img3) * img4 + img5) + "px"
    }
    initialFlow++
}
setInterval('startFlow()', 5);
void(0);