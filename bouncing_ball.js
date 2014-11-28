

$(document).ready(function () {
    var ball = $('.ball');
    var messageArea = $('.message_area');
    var levelBox = $('.level_box');
    var level = 1;
    var duration = 1500;

    ballBounce(duration);
    renderLevel();

    $('body').on('click', ball, function () {
        var message = getMessage();
        messageArea.show();

        if (!ball.hasClass('paused')) {

            level++;
            stopBall ();
            renderLevel();
            renderMessage(message, level);
            pauseAndHideBall ();

            setTimeout(function () {
                goAwayMessage();
                duration = duration * 0.9;
                ballBounce(duration);
                moveAndShowBall ();
                messageArea.hide();
            }, 2000);
        }
    });


    function stopBall () {
        ball.stop(true); //stop ball when clicked
    }

    function moveAndShowBall () {
        ball.removeClass('paused');  //make ball visible and moving again
        ball.removeClass('hidden');
    }

    function pauseAndHideBall () {
        ball.addClass('paused'); //hide ball when clicked
        ball.addClass('hidden');
    }

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

    function renderLevel () {
        var currentLevel = 'Level' + ' ' + '-' + ' ' + getLevel();
        return levelBox.text(currentLevel);  //find level and update in box

    }

    function renderMessage (randomMessage) {
        messageArea.text(randomMessage);   //show the message
    }

    function getLevel () {
        return level;   //find current level
    }

    function goAwayMessage () {
        messageArea.empty();  //make message time out
    }

});