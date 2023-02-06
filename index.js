const findMatching = (driversNames, string) => {
    return driversNames.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (driversNames, string) => {
    return driversNames.filter(driver => driver.charAt(0) === string.charAt(0))
}

const matchName = (driverObjs, string) => {
    return driverObjs.filter(driver => driver.name === string)
}