// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(drivers){
  drivers.concat('Ralph')
  return drivers
}

drivers.push('Ralph')

drivers