var com, player, result;
var btn_scissors = document.getElementById('scissors');
var btn_stone = document.getElementById('stone');
var btn_paper = document.getElementById('paper');

btn_scissors.addEventListener('click', function () {
    alert('你出了剪刀');
    player = '剪刀';
    com_init();
    alert('電腦出' + com);
    judge();
    alert(result);
})

btn_stone.addEventListener('click', function () {
    alert('你出了石頭');
    player = '石頭';
    com_init();
    alert('電腦出' + com);
    judge();
    alert(result);
})

btn_paper.addEventListener('click', function () {
    alert('你出了布');
    player = '布';
    com_init();
    alert('電腦出' + com);
    judge();
    alert(result);
})

function com_init() {
    var gestures = ['剪刀', '石頭', '布'];
    com = gestures[Math.floor(Math.random() * 3)];
}

function judge() {
    if (player == '剪刀') {
        if (com == '剪刀') {
            result = '平手';
        } else if (com == '石頭') {
            result = '你' + '輸' + '電腦';
        } else if (com == '布') {
            result = '你' + '贏' + '電腦';
        }
    } else if (player == '石頭') {
        if (com == '剪刀') {
            result = '你' + '贏' + '電腦';
        } else if (com == '石頭') {
            result = '平手';
        } else if (com == '布') {
            result = '你' + '輸' + '電腦';
        }
    } else if (player == '布') {
        if (com == '剪刀') {
            result = '你' + '輸' + '電腦';
        } else if (com == '石頭') {
            result = '你' + '贏' + '電腦';
        } else if (com == '布') {
            result = '平手';
        }
    }
}

