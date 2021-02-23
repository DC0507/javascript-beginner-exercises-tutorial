function fizzBuzz() {  
    // Your code here
    for (var i=1; i <= 100; i++){
        var msg = "";
        
        if (i%3==0){
            msg = msg.concat("Fizz");
        };

        if (i%5==0){
            msg = msg.concat("Buzz");
        };

        if (i%3 != 0 && i%5 != 0){
            console.log(i);
        } else {
            console.log(msg);
        }
        }
        
    }

fizzBuzz();