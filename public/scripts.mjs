

const canvas = document.getElementById("mycanvas");
canvas.width = 640;
canvas.height =480;
const context = canvas.getContext('2d');

// estabish socket connection
//const socket = io();

// Attempt to preload font - still not working 
const myfont = new FontFace('Press Start', 'url(https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK3nRivN04w.woff2)');
document.fonts.add(myfont);
myfont.load().then( () => {
    context.font = "24px 'Press Start 2P'";
    context.fillStyle = 'black';
    context.fillText ("This is just a test", 100, 100);
    context.font = "16px 'Press Start 2P'";
    context.fillText ("I would be interested to know", 100, 170);
    context.fillText ("if this actually works.", 100, 230);
});

