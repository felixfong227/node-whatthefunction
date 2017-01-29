module.exports = {

    functionsCallStacks: [],

    create: function (object,fun) {

        var self = require("./index");

        // Getting the data
        var name = object.name || "anonymous";
        var description = object.what || "no description so far";

        // Creating the function and push the functions to the functionsCallStack
        self.functionsCallStacks.push({

            name: name,
            description: description,
            doWhat: fun

        });

    },

    // Calling the function from the functionsCallStack

    call: function (name,args,callback) {

        // Finding the function from the callstack

        var self = require("./index");
        var stack = self.functionsCallStacks

        for(key in stack){

            if( name == stack[key].name ){
                var info = stack[key];
                var finalArgs = [];

                args.forEach(function (i) {
                    if(typeof i == "string"){
                        finalArgs.push('"'+i+'"')
                    }

                    else
                    {
                        finalArgs.push(i)
                    }

                });

                var query = 'info.doWhat('+ finalArgs +')';
                eval(query)

                var throwBackObject = {
                    name: info.name,
                    description: info.description
                }

                try{
                    callback(throwBackObject);
                }catch (e){

                    if(!e.message.includes("callback is not a function")){
                        // No callback function is made
                        console.log(e)
                    }

                }

            }

        }

    },

    // Show the info about that function

    what: function (name,callback) {

        var stack = require("./index").functionsCallStacks;

        for(key in stack){

            if(name == stack[key].name){

                // Fount the function
                var returnObject = {
                    "name": stack[key].name,
                    "description:": stack[key].description
                };
                callback(returnObject)

            }

        }

    }


};