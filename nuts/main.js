const defaultMaterial = "red";
const backgroundMaterial = "gray";
let idCounter = 0;

// !!! why class? why not bunch of functions? !!!

function createMesh (geometry, material = defaultMaterial) {
    let mesh = {id: idCounter, geometry: geometry, material: material}
    meshManager.meshes.push(mesh);
    idCounter++;
}

class MeshManager {
    constructor() {
        this.meshes = [];
    }
    add(mesh) {
        this.meshes.push(mesh);
    }
    remove(id) {
        for (let i=0; i<this.meshes.length; i++) {
            if (i==id) {
                this.meshes.splice(i, 1);
            }
        }
    }
}

meshManager = new MeshManager();

createMesh("FG geometry");
createMesh("EG geometry", backgroundMaterial);
createMesh("three time!!!");
createMesh("may 4th");
meshManager.remove(2);


console.log(meshManager.meshes);