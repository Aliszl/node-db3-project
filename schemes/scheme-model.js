function getStepsBySchemeId(id){

   // raw sql:
    // SELECT
    // id,
    // shipper.CompanyName
    // from 'order'
    // left join shipper
    //    on shipper.id = order.id;
    db('steps')
    .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
    .select('scheme_name)
}