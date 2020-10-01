const fs = require('fs').promises;
const PATHMOCIventors = __dirname + '/inventors.json';

async function readMocInventor(){
    return JSON.parse(await fs.readFile(PATHMOCIventors, 'utf8'));
}

async function writeMocInventor(inventors){
    await fs.writeFile(PATHMOCIventors, JSON.stringify(inventors, null, ' '));
}

async function getAllInventors(){
   return (await readMocInventor());
}

async function getInventor(id){
    let data = await getAllInventors();
    let inventor = data.inventors.find(inventor => inventor._id == id);
    return inventor;
}

async function pushInventor(inventor){
    const data = await getAllInventors();
    data.inventors.push(inventor);
    await writeMocInventor(data);
}

async function updateInventor(inventor){
    const data = await getAllInventors();
    const index = data.inventors.findIndex(value => value._id == inventor._id);
    data.inventors[index].first = inventor.first;
    data.inventors[index].last = inventor.last;
    data.inventors[index].year = inventor.year;
    data.inventors[index].img = inventor.img;

    await writeMocInventor(data);
}

async function deleteInventor(id){
    const data = await getAllInventors();
    data.inventors.splice(
        data.inventors.findIndex(value => value._id == id),
        1
    );
    await writeMocInventor(data);
}

module.exports = {getAllInventors, getInventor, pushInventor, updateInventor, deleteInventor}