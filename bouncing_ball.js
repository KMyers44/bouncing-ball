

$(document).ready(function () {
    var ball = $('.ball');
    var counter = 1;
    var duration = 1500;

    ballBounce(duration);

    $('body').on('click', ball, function () {
        var message = getMessage();
        var level = getLevel();

        if (!ball.hasClass('paused')) {

            ball.stop(true);

            appendLevel(message, level);
            renderMessage(appendLevel(message, level));
            counter++;
            ball.addClass('paused');
            ball.addClass('animation');

            setTimeout(function () {
                goAwayMessage();
                duration = duration * 0.9;
                ballBounce(duration);
                ball.removeClass('paused');
                ball.removeClass('animation');
            }, 2000);
        }
    });


    function ballBounce (duration) {
       ball.animate({top: '500px'}, duration);
       ball.animate({top: '0'}, duration, function() {
           ballBounce(duration);
       });
    }


    function getMessage () {
        var messages = [
            "Awesome!",
            "You've got mad skills!",
            "Nice work!",
            "Amazing!",
            "You're really good at this!",
            "Holy smokes!",
            "Impressive!",
            "You've got some fast fingers!"
        ];
        //choose message at random
        return messages[Math.floor(Math.random() * messages.length)];
    }


    function appendLevel (message, level) {
        var message = getMessage();
        var currentLevel = ' Level' + '-' + getLevel();
        var result = message.concat(currentLevel);

        //append level after random message
        return result;
    }


    //show the message
    function renderMessage (randomMessage) {
        $('.message_area').text(randomMessage);
    }


    //find current level
    function getLevel () {
        return counter;
    }


    //make message time out
    function goAwayMessage () {
        $('.message_area').empty();
    }

});