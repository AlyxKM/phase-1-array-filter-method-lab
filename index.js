function findMatching(drivers, name){
    return drivers.filter( matchingDrivers => matchingDrivers.toLowerCase() === name.toLowerCase()
    )
};

function fuzzyMatch(drivers, letters){
    return drivers.filter( matchingDrivers => matchingDrivers.toLowerCase().indexOf(letters.toLowerCase()) === 0
    )
};

function matchName(drivers, name){
    return drivers.filter( matchingDriver => matchingDriver.name === name)

};


