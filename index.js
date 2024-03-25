// Code your solution here
function findMatching(driver, query){
    return driver.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
  
function fuzzyMatch(driver, query){
    const matchingDrivers = driver.filter(driver =>
        driver.toLowerCase().startsWith(query.toLowerCase())
    );

    return matchingDrivers;

}
    
function matchName(driver, query){
    const matchingDrivers = driver.filter(drivers =>
        drivers.name.toLowerCase() === query.toLowerCase()
    );

    return matchingDrivers;
}  
