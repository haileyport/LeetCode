/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    answer = 0;
    temp = ''
    for(let i=0; i<s.length; i++) {
        switch(s[i]){
            case "I":
                answer += 1;
                temp = "I";
                break;
            case "V":
                if(temp === "I"){
                    answer += 3;
                } else {
                    answer += 5;
                }
                temp = "V";
                break;
            case "X":
                if(temp === "I") {
                    answer += 8;
                } else {
                    answer += 10;
                }
                temp = "X";
                break;
            case "L":
                if(temp === "X") {
                    answer += 30;
                } else {
                    answer += 50;
                }
                temp = "L";
                break;
            case "C":
                if(temp === "X") {
                    answer += 80;
                } else {
                    answer += 100;
                }
                temp = "C";
                break;
            case "D":
                if(temp === "C") {
                    answer += 300;
                } else {
                    answer += 500;
                }
                temp = "D";
                break;
            case "M":
                if(temp === "C") {
                    answer += 800;
                } else {
                    answer += 1000;
                }
                temp = "M";
                break;
            default:
                answer += 0;
                break;
        }
    }
    return answer;
};