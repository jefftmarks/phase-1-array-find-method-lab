function superbowlWin(array) {

    function searchWin(element) {
        return (element.result === 'W');
    }
        
    if (array.find(searchWin)) {
        return array.find(searchWin).year;
    } else {
        return undefined;
    }

}