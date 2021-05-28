/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(var i=0;i<s.length;i++){
        if(s[i] == "a"){
            console.log("a");
        }else if(s[i] == "e"){
            console.log("e");
        }else if(s[i] == "i"){
            console.log("i");
        }else if(s[i] == "o"){
            console.log("o");
        }else if(s[i] == "u"){
            console.log("u");
        }
    }
    for(var i=0;i<s.length;i++){
        if(s[i] != "a" && s[i] != "e" && s[i] != "i" && s[i] != "o" && s[i] != "u"){
            console.log(s[i]);
        }
    }
}
