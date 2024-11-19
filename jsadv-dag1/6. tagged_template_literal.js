const sql = {
  query(strings, expr1) {
    return strings[0] + expr1.replace(' OR ', '') + strings[1];
    // return strings[0] + expr1 + strings[1];
  }
}

const value = "'' OR '1' = '1";
const result = sql.query`select * from mytable where id = ${value}`;   // value = 'OR' moet eruit
console.log(result);

