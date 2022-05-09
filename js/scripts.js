window.onload = function() {
    const startPage = document.getElementById('start-page');
    const startButton = document.getElementById('start');
    const europeMap = document.getElementById('europe-page');
    const europeMapNoName= document.getElementById('europe-page-noname');

    startButton.onclick = function() {
        startPage.style = "display: none";
        europeMap.style = "display: flex";
        europeMapNoName.style = "display: flex";
        const game = new Game();
        game.start();
    }
}

window.onload = function (updateClock) {
    let totalTime = 10;
    
        function updateClock() {
            document.getElementById('countdown').innerHTML = totalTime;
                if(totalTime==0){
                    alert('Final');
                 }else{
            totalTime-=1;
        setTimeout("updateClock()",1000);
    }
}
}



/*
function countdownMap {

    if (const getTime = dateTo => {
        let now = new Date(),
            minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
           
     
        return {
            minutes
           
        }
    };)




}

*/
