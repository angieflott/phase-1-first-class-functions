function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
    return function named() {
        console.log ("The man is Dave.")
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('The man has no name.')
    }
}