function distanceFromHqInBlocks(value) {
    if(value >= 42) {
        return (value - 42)
    }
    else{
        return (42 - value)
    }
}
function distanceFromHqInFeet(value) {
    if(value >= 42) {
        return ((value - 42) * 264)
    }
    else{
        return ((42 - value) * 264)
    }
}
function distanceTravelledInFeet(start, end) {
    if(start < end) {
        return ((end - start) * 264)
    }
    else{
        return ((start - end) * 264)
    }
}
function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination)
    console.log(feet)
    if(feet <= 400) {
        return(0)
    }
    else if(feet > 400 && feet <= 2000) {
        return((feet - 400) * .02)
    } 
    else if(feet > 2000 && feet <= 2500) {
        return(25) 
    }
    else {
        return(`cannot travel that far`)
    }
}