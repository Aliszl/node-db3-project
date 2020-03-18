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

    //raw SQL  SELECT steps.instructions FROM `schemes`JOIN steps on schemes.id = steps.id;
return db('schemes').join('steps', 'schemes.id', '=', 'steps.id').select('steps.instructions').from('schemes')

}
 function add(schemeData){
    // raw:  insert into schemes
    // (scheme_name)
    //  values 
    //  ('bring down the government');
  return db('schemes').insert(schemeData).then(id=>{
      return findById(id);
  });
 }

//  function addStep(stepData){
//     // raw: insert into steps
//     // (scheme_id, instructions, step_number)
//     //  values 
//     //  ('6','destabilise economy with viral pandemic','1');
// return db('steps').insert(stepData)
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

module.exports = { find, findById, findSteps, add, addStep };
