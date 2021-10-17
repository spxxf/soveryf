const graph = require('graph-data-structure')
const busStops = graph()
const token = 'AIzaSyC6aOt8cIrLBCRg7KEdzBc3IdICjKTm8H4';

var distance = require('google-distance');
distance.apiKey = token;


var x;
busStops.addNode('Red Oak Lane')
busStops.addNode('Lipman Hall')
busStops.addNode('College Hall')
busStops.addNode('Socam')
busStops.addNode('Biel Road')
busStops.addNode('Henderson')
busStops.addNode('Gibbons')
busStops.addNode('The Yard')
busStops.addNode('College Ave Student Center')
busStops.addNode('Student Activities Center')
busStops.addNode('Hill Center')
busStops.addNode('Allison Road Classrooms/Science Buildings')
busStops.addNode('Busch Student Center')
busStops.addNode('The Plaza at Livingston Campus')
busStops.addNode('Livingston Student Center')
busStops.addNode('Werblin Recreation Center')
busStops.addNode('Stadium West Lot')

x = new Array('RexB', 'RexL', 'EE', 'F')
busStops.addEdge('Red Oak Lane', 'Lipman Hall', x)

x = new Array('EE', 'F')
busStops.addEdge('Lipman Hall', 'Biel Road', x)

x = new Array('RexB', 'RexL')
busStops.addEdge('Lipman Hall', 'College Hall', x)

x = new Array('EE', 'F')
busStops.addEdge('Biel Road', 'Henderson', x)

x = new Array('EE', 'F')
busStops.addEdge('Henderson', 'Gibbons', x)

x = new Array('EE', 'F')
busStops.addEdge('Gibbons', 'College Hall', x)

x = new Array('RexB')
busStops.addEdge('College Hall', 'Hill Center', x)

x = new Array('RexB', 'A', 'C', 'B')
busStops.addEdge('Hill Center', 'Allison Road Classrooms/Science Buildings', x)

x = new Array('RexB')
busStops.addEdge('Hill Center', 'Red Oak Lane', x)

x = new Array('H', 'C')
busStops.addEdge('Hill Center', 'Stadium West Lot', x)

x = new Array('RexB', 'H', 'C')
busStops.addEdge('Allison Road Classrooms/Science Buildings', 'Hill Center', x)

x = new Array('A', 'B')
busStops.addEdge('Allison Road Classrooms/Science Buildings', 'Busch Student Center', x)

x = new Array('RexL')
busStops.addEdge('Livingston Student Center', 'Red Oak Lane', x)

x = new Array('B')
busStops.addEdge('Livingston Student Center', 'Hill Center', x)

x = new Array('EE')
busStops.addEdge('College Hall', 'Socam', x)

x = new Array('RexL')
busStops.addEdge('College Hall', 'The Plaza at Livingston Campus', x)

x = new Array('F')
busStops.addEdge('College Hall', 'Student Activities Center', x)

x = new Array('EE')
busStops.addEdge('Socam', 'Student Activities Center', x)

x = new Array('EE')
busStops.addEdge('Socam', 'Red Oak Lane', x)

x = new Array('EE', 'F')
busStops.addEdge('Student Activities Center', 'College Ave Student Center', x)

x = new Array('LX')
busStops.addEdge('Student Activities Center', 'The Plaza at Livingston Campus', x)

x = new Array('H')
busStops.addEdge('Student Activities Center', 'Werblin Recreation Center', x)

x = new Array('A')
busStops.addEdge('Student Activities Center', 'Stadium West Lot', x)

x = new Array('EE', 'F', 'LX', 'A', 'H')
busStops.addEdge('College Ave Student Center', 'The Yard', x)

x = new Array('EE')
busStops.addEdge('The Yard', 'Socam', x)

x = new Array('F')
busStops.addEdge('The Yard', 'Red Oak Lane', x)

x = new Array('LX', 'H', 'A')
busStops.addEdge('The Yard', 'Student Activities Center', x)

x = new Array('RexL', 'LX', 'B')
busStops.addEdge('The Plaza at Livingston Campus', 'Livingston Student Center', x)

x = new Array('B')
busStops.addEdge('Busch Student Center', 'The Plaza at Livingston Campus', x)

x = new Array('H')
busStops.addEdge('Busch Student Center', 'Allison Road Classrooms/Science Buildings', x)

x = new Array('A')
busStops.addEdge('Busch Student Center', 'Werblin Recreation Center', x)

x = new Array('LX')
busStops.addEdge('Livingston Student Center', 'College Ave Student Center', x)

x = new Array('H')
busStops.addEdge('Werblin Recreation Center', 'Busch Student Center', x)

x = new Array('A')
busStops.addEdge('Werblin Recreation Center', 'College Ave Student Center', x)

x = new Array('H')
busStops.addEdge('Stadium West Lot', 'College Ave Student Center', x)

x = new Array('C', 'A')
busStops.addEdge('Stadium West Lot', 'Hill Center', x)

//CHANGE THESE VARIABLES WITH GOOGLE MAPS / GOOGLE DISTANCE API
// var source = 'Socam';
// var destination = 'The Plaza at Livingston Campus';

const prompt = require("prompt-sync")();

const source = prompt("Where are you starting from?");
const destination = prompt("Where are you trying to go?");



distance.get(
    {
      origin: source,
      destination: destination,
      units: 'imperial',
    },
    function(err, data) {
      if (err) return console.log(err);
      console.log(data);
});







console.log(...busStops.shortestPath(source, destination))