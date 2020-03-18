const db = require("../data/config");

function find() {
  //Raw SQL: SELECT id, scheme_name FROM `schemes`;
  return db("schemes");
}

function findById(id) {
  //     //Raw SQL: SELECT id, scheme_name FROM `schemes` WHERE Id = 1;
  return db("schemes").where("id", 1);
}

function findSteps(id){
    

}
//  function add(schemeData){

//  }

//  function addStep(stepData, id){

//  }

//  function update(changes, id){

//  }

//  function remove(id){

//  }
// function getStepsBySchemeId(id){

//    // raw sql:
//     // SELECT
//     // id,
//     // shipper.CompanyName
//     // from 'order'
//     // left join shipper
//     //    on shipper.id = order.id;
//     db('steps')
//     .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
//     .select('scheme_name')
// }

module.exports = { find, findById, findSteps };
