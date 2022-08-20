// code your solution here
const superbowlWin = (arr) => {
    let year;
    arr.find((element) => {
        if (element.result === "W") {
            year = element.year;
            return true;
        }
        return false;
    });
    return year;
}; 