module.exports = {

    functionsCallStacks: [],

    create: function (object) {

        var self = require("./index");

        // Getting the data
        var name = object.name;
        var description = object.what ||  "no description so far";
        var fun = object.do;

        // Check if the user pass in the function
        if(typeof fun !== "function"){
            console.log("Please pass in the function via the argument or the object way");
            process.exit();
        }

        // Check if the name is undefined
        if(typeof name == "undefined") {
            console.log("Please give the function a name in functino");
            process.exit();
        }

        // Check if the user pass in the description
        if(typeof object.what == "undefined"){
            console.log("Please give the function description in function: " + name);
            process.exit();
        }

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

                if(typeof args == "object"){

                    if(args.length > 0){

                        args.forEach(function (i) {
                            if(typeof i == "string"){
                                finalArgs.push('"'+i+'"')
                            }

                            else
                            {
                                finalArgs.push(i)
                            }

                        });

                    }

                }

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

    }

};