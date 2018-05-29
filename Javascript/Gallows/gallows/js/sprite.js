function createSprite(selector){
    let $el = $(selector);
    let current = 0;
    let frames = [
        'frame1',
        'frame2',
        'frame3',
        'frame4',
        'frame5',
        'frame6',
        'frame7',
        'frame8',
        'frame9'
    ]; 
    let last = frames.length -1; 
    $el.addClass(frames[current]);

    var hasNext = function(){
        return current+ 1 <= last;
    };

    var moveFrame = function(from, to) {
        $el.removeClass(from)
            .addClass(to);
    };

    var isFinish = function(){
        return !hasNext();
    };

    var reset = function(){
        moveFrame(frames[current], frames[0])
        current = 0;
    };

    var nextFrame = function() {
        if(hasNext()) moveFrame(frames[current], frames[++current]);
    };

    return {
        nextFrame: nextFrame,
        reset: reset,
        isFinish: isFinish,
    };
}