// Just a testing JavaScript file
const wtf = require("./bin/index");

wtf.create({
    name: "howdy",
    what: "I guess is just a Hello Pony function? Yay~~"
},function (name,lovePony) {

    console.log("Howdy,my name is Rainbow Dash,and welcome to Ponyville " + name);

    if(lovePony){
        console.log("Yay! Me too");
    }else{
        console.log("Soon you are going to love it as much as I do");
    }

});

wtf.call("howdy",[
    "Felix",
    true
],function (info) {
    // If you forgot what does the function do,you can read the little note by the function creator
    console.log(info.description)
});

wtf.what("howdy",function (back) {
    console.log(back)
});