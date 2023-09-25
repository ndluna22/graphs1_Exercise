class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex); //use adding function to add list nodes
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2); //including the opposite of each other
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2); //including the opposite of each other
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let firstStack = [];
    let seen = new Set(firstStack);

    while (firstStack.length > 0) {
      let currStack = firstStack.pop();

      if (currStack === start) return true;

      for (let nextStack of currStack.adjacent) {
        if (!seen.has(nextStack)) {
          firstStack.push(nextStack);
          seen.add(nextStack);
        }
      }
    }
    return false;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let firstQueue = [];
    let seen = new Set(firstQueue);

    while (firstQueue.length > 0) {
      let currQueue = firstQueue.shift();

      if (currQueue === nextQueue) return true;

      for (let nextQueue of currQueue.adjacent) {
        if (!seen.has(nextQueue)) {
          firstQueue.push(nextQueue);
          seen.add(nextQueue);
        }
      }
    }
    return false;
  }
}

module.exports = { Graph, Node };
