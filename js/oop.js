

function StopWatch() {

    let timer = 0;
    let interval;
    let status = "canStart";

    this.start = function() {

        if(status == "canStart" || status == "started") {

            status = "started";

            $('.sen').html("");
            interval = setInterval(() => {
                timer += 1;

                let min = Math.floor(timer / 600);
                let sec = Math.floor((timer % 600) / 10);
                let mil = "0" + timer % 10;

                if(min <= 9) {
                    min = "0" + min;
                }
                if(sec <= 9) {
                    sec = "0" + sec;
                }

                $('.min').html(min);
                $('.sec').html(sec);
                $('.mil').html(mil);


            }, 100);

        }
        


    }

    this.pause = function() {

        if(status == "started") {
            clearInterval(interval);
        }
        
    }

    this.end = function() {
        
        if(status == "started") {
            clearInterval(interval);

            let min = Math.floor(timer / 600);
            let sec = Math.floor((timer % 600) / 10);
            let mil = timer % 10;

            $('.sen').html(`You ran for ${min} mins, ${sec} secs and ${mil} milliseconds`);

            status = "ended";
            timer = 0;
        }
        
        
    }

    this.reset = function() {
        
        if(status == "ended") {
            $('.min').html("00");
            $('.sec').html("00");
            $('.mil').html("00");
            status = "canStart";
        }
        
    }


}

let newStopWatch = new StopWatch;

$('.start').click(() => {
   newStopWatch.start();
});

$('.pause').click(() => {
    newStopWatch.pause();
 });

 $('.end').click(() => {
    newStopWatch.end();
 });

 $('.reset').click(() => {
   newStopWatch.reset();
});