// Your Db functions go here...

module.exports = (db) => {
  const getStudents = () => {
      console.log("DO I RUN!?")
      return db.query('SELECT * FROM students;')
        .then(res => {
        //   console.log(res);
          return res.rows;
      })
  }


  return { getStudents }
}