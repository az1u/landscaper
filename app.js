var account = 0;




alert("Welcome to the Jungle Landscaper")


for (let counter = 1; counter <= 5; counter++){
    
    alert('Your Balance is $' + account + '. Using just your teeth you can spend the day cutting lawns and make $1. You can do this as much as you want')
    let userInput = prompt("Type 'teeth' to cut the lawn")
   
    if (userInput.toLowerCase() === 'teeth'){
            account += 1
    }
    else if(userInput.toLowerCase()==='quit'){
            break;
    }
}

alert("Congrats you now have $" + account + ".")
userInput = prompt("you may now upgrade your tool to Rusty Scissors \n would you like to upgrade")
if( userInput.toLowerCase() === 'yes'){
    account = account - 5
}


for (let counter = 1; counter <= 5; counter++){
    
    alert('Your Balance is $' + account + '. Using your rusty scissors you can spend the day cutting lawns and make $5. You can do this as much as you want')
    let userInput = prompt("Type 'rusty scissors' to cut the lawn")
   
    if (userInput.toLowerCase() === 'rusty scissors'){
            account += 5
    }
    else if(userInput.toLowerCase()==='quit'){
            break;
    }
}

alert("Congrats you now have $" + account + ".")