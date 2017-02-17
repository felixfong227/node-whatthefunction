# What the function

A little Node module that help you create and keep tracking your function

## Create a function
```javascript
var wtf = require("node-whatthefunction");
wtf.create({
   // The name of the function(You will use it when ever you want to call that function)
   name: "hellopony",
   // Description about your function
   what: "A demo function what tell's you how to use this module",
   do: function(name) {
       // The code block you want to be using at this function
       console.log("Nice to meet you " + name);
   }
});
```

## Calling a function
```javascript
var wtf = require("node-whatthefunction");
wtf.call("hellopony"[
    // The arguments you want to pass in
    "Felix"
]);
```

Please fork this project,and make it AWESOME!