// Just a testing JavaScript file
const wtf = require("./bin/index");

var ponies = [];

wtf.create({
    name: "howdy"
    ,what: "I guess is just a Hello Pony function? Yay~~"
    ,do: function (name,lovePony,callback) {
        console.log("Howdy,my name is Rainbow Dash,and welcome to Ponyville " + name);

        if(lovePony){
            console.log("Yay! Me too");
            callback();
        }else{
            console.log("Soon you are going to love it as much as I do");
        }
    }
});

wtf.create({
    name: "addPony"
    ,what: "Add one pony to the ponies array, and then log it out"
    ,do: function(name) {
        ponies.push(name);
        ponies.forEach(function (pName) {
            console.log(pName + " is a cool pony");
        });
    }
});

wtf.call("addPony", ["Rainbow Dash"]);

wtf.call("howdy",[
    "Felix"
    ,true
    ,function () {
        console.log("Call back function");
    }
]);
