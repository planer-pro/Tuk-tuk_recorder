var firstStart = true;
var oldDate, result;
var times = [];
var humErr = 200;

//keyboard processing
var stdin = process.stdin;

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (key) {//keyb press key event

    if (key == 'p') {//play and erase
        console.log("play");
        play(0);
    }
    else if (key == 'e') {//exit program
        process.exit();

    } else {//store
        if (!firstStart) {
            result = new Date() - oldDate;
        } else {
            result = 0;
            firstStart = false;
        }
        times.push(result);
        console.log(result);
        oldDate = new Date();
    }

    function play(index) {
        console.log(times[index]);
        index++;
    
        if (index < times.length) {
            setTimeout(function () {
                play(index);
            }, times[index])
        }else{
            times = [];
            firstStart = true;
        }
    }
});