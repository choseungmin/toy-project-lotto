function oneTicket (){

    var array = [];

    // 1. 배열의 끝에, 숫자넣기 (1부터 45까지).
    for ( var n = 1; n < 46; n++ ) 	 array.push( n );

    // 2. 배열에 들어간 숫자들을, 무작위로 재배치.
    array.sort( function(){   return Math.random() - 0.5 } );

    // 3. 임의의 위치에서부터, 6번째까지 잘라와서, 새 배열로 만들기.
    var start = Math.floor( Math.random() * 40 );     // 0부터 40 중에서 랜덤으로 시작점 설정함.
    var newArray = array.slice( start, (start + 6) );   // 'start'부터 6번째까지만 새로운 배열에 넣음.

    // 4. 새 배열에 들어있는 숫자들을, 오름차순으로 정렬.
    newArray.sort(  function(a, b){ return a - b }  );

    // 5. 숫자들 사이에, 쉼표와 공백을 넣어서, 문자로 합치기.
    return newArray.join( ", " ); 	 // 텍스트로 저장됨.
}


/* ━━━━━━━━━━━ 위의 함수를 반복 실행하여, 다섯줄짜리 로또 문장 완성하기 ━━━━━━━━━━━ */

function fiveTickets (){

    var lottoText = "";
    var alphabetical = [ "A" , "B" , "C" , "D" , "E" ];
    var br = "<br />";
    var blank = "&nbsp;";

    for ( var x = 0; x < 5; x++ ){

        var text = " " + oneTicket();

        // 9 이하일 경우, 숫자 앞에 'blank( &nbsp; )' 추가하기
        text = text.replace( /(\s\d,|\s\d$)/g , blank + "$1" );

        lottoText += alphabetical[ x ] + blank + text + br;
    }

    return lottoText;
}

function get_lotto (){

    var tag = document.getElementById( "lottoNumber" );
    var text = "";
    var p = [ "<p>" , "</p>" ];

    for ( var x = 0; x < 5; x++ ) text += p[0] + fiveTickets() + p[1];

    tag.innerHTML = text;
}