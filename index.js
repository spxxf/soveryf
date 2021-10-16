const graph = require('graph-data-structure')
const busStops = graph()
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
busStops.addNode('Livingston Plaza')
busStops.addNode('Livingston Student Center')

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

x = new Array('RexB', 'A')
busStops.addEdge('Hill Center', 'Allison Road Classrooms/Science Buildings', x)

x = new Array('RexB')
busStops.addEdge('Hill Center', 'Red Oak Lane', x)

x = new Array('RexB', 'H')
busStops.addEdge('Allison Road Classrooms/Science Buildings', 'Hill Center', x)

x = new Array('RexL')
busStops.addEdge('Livingston Student Center', 'Red Oak Lane', x)

x = new Array('EE')
busStops.addEdge('College Hall', 'Socam', x)

x = new Array('RexL')
busStops.addEdge('College Hall', 'Livingston Plaza', x)

x = new Array('F')
busStops.addEdge('College Hall', 'Student Activities Center', x)

x = new Array('EE')
busStops.addEdge('Socam', 'Student Activities Center', x)

x = new Array('EE', 'F')
busStops.addEdge('Student Activities Center', 'College Ave Student Center', x)

x = new Array('EE', 'F')
busStops.addEdge('College Ave Student Center', 'The Yard', x)

x = new Array('EE')
busStops.addEdge('The Yard', 'Socam', x)

x = new Array('F')
busStops.addEdge('The Yard', 'Red Oak Lane', x)




console.log(busStops.bfs())