function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello, I'm " + identify(context);
    console.log(greeting);
}

var me = {
    name: "Jon"
};

var you = {
    name: "Subscriber"
};

identify(you);
speak(me);
