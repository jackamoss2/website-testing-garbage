const defaultMaterial = "red";
const backgroundMaterial = "gray";
let idCounter = 0;

function createMesh (geometry, material = defaultMaterial) {
    let mesh = {id: idCounter, geometry: geometry, material: material}
    meshes.push(mesh);
    idCounter++;
}

function removeMesh (id) {
    for (let i=0; i<meshes.length; i++) {
        if (i==id) {
            meshes.splice(i, 1);
        }
    }
}

let meshes = [];

createMesh("FG geometry");
createMesh("EG geometry", backgroundMaterial);
createMesh("three time!!!");
createMesh("may 4th");
removeMesh(0);

console.log(meshes);