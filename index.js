const graph = require('graph-data-structure')
const busStops = graph()
const token = 'AIzaSyC6aOt8cIrLBCRg7KEdzBc3IdICjKTm8H4';

var distance = require('google-distance');
distance.apiKey = token;


var x;
busStops.addNode('red oak lane')
busStops.addNode('lipman hall')
busStops.addNode('college hall')
busStops.addNode('socam')
busStops.addNode('biel road')
busStops.addNode('henderson')
busStops.addNode('gibbons')
busStops.addNode('the yard')
busStops.addNode('college ave student center')
busStops.addNode('student activities center')
busStops.addNode('hill center')
busStops.addNode('allison road classrooms/science buildings')
busStops.addNode('busch student center')
busStops.addNode('the plaza at livingston campus')
busStops.addNode('livingston student center')
busStops.addNode('werblin recreation center')
busStops.addNode('stadium west lot')

x = new Array('RexB', 'RexL', 'EE', 'F')
busStops.addEdge('red oak lane', 'lipman hall', x)

x = new Array('EE', 'F')
busStops.addEdge('lipman hall', 'biel road', x)

x = new Array('RexB', 'RexL')
busStops.addEdge('lipman hall', '', x)

x = new Array('EE', 'F')
busStops.addEdge('biel road', 'henderson', x)

x = new Array('EE', 'F')
busStops.addEdge('henderson', 'gibbons', x)

x = new Array('EE', 'F')
busStops.addEdge('gibbons', 'college hall', x)

x = new Array('RexB')
busStops.addEdge('college hall', 'hill center', x)

x = new Array('RexB', 'A', 'C', 'B')
busStops.addEdge('hill center', 'allison road classrooms/science buildings', x)

x = new Array('RexB')
busStops.addEdge('hill center', 'red oak lane', x)

x = new Array('H', 'C')
busStops.addEdge('hill center', 'stadium west lot', x)

x = new Array('RexB', 'H', 'C')
busStops.addEdge('allison road classrooms/science buildings', 'hill center', x)

x = new Array('A', 'B')
busStops.addEdge('allison road classrooms/science buildings', 'busch student center', x)

x = new Array('RexL')
busStops.addEdge('livingston student center', 'red oak lane', x)

x = new Array('B')
busStops.addEdge('livingston student center', 'hill center', x)

x = new Array('EE')
busStops.addEdge('college hall', 'socam', x)

x = new Array('RexL')
busStops.addEdge('college hall', 'the plaza at livingston campus', x)

x = new Array('F')
busStops.addEdge('college hall', 'student activities center', x)

x = new Array('EE')
busStops.addEdge('socam', 'student activities center', x)

x = new Array('EE')
busStops.addEdge('socam', 'red oak lane', x)

x = new Array('EE', 'F')
busStops.addEdge('student activities center', 'college ave student center', x)

x = new Array('LX')
busStops.addEdge('student activities center', 'the plaza at livingston campus', x)

x = new Array('H')
busStops.addEdge('student activities center', 'werblin recreation center', x)

x = new Array('A')
busStops.addEdge('student activities center', 'stadium west lot', x)

x = new Array('EE', 'F', 'LX', 'A', 'H')
busStops.addEdge('college ave student center', 'the yard', x)

x = new Array('EE')
busStops.addEdge('the yard', 'socam', x)

x = new Array('F')
busStops.addEdge('the yard', 'red oak lane', x)

x = new Array('LX', 'H', 'A')
busStops.addEdge('the yard', 'student activities center', x)

x = new Array('RexL', 'LX', 'B')
busStops.addEdge('the plaza at livingston campus', 'livingston student center', x)

x = new Array('B')
busStops.addEdge('busch student center', 'the plaza at livingston campus', x)

x = new Array('H')
busStops.addEdge('busch student center', 'allison road classrooms/science buildings', x)

x = new Array('A')
busStops.addEdge('busch student center', 'werblin recreation center', x)

x = new Array('LX')
busStops.addEdge('livingston student center', 'college ave student center', x)

x = new Array('H')
busStops.addEdge('werblin recreation center', 'busch student center', x)

x = new Array('A')
busStops.addEdge('werblin recreation center', 'college ave student center', x)

x = new Array('H')
busStops.addEdge('stadium west lot', 'college ave student center', x)

x = new Array('C', 'A')
busStops.addEdge('stadium west lot', 'hill center', x)

//CHANGE THESE VARIABLES WITH GOOGLE MAPS / GOOGLE DISTANCE API
// var source = 'socam';
// var destination = 'the plaza at livingston campus';

const prompt = require("prompt-sync")();

let source = prompt("Where are you starting from?");
source.toLowerCase();
let destination = prompt("Where are you trying to go?");
destination.toLowerCase();





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