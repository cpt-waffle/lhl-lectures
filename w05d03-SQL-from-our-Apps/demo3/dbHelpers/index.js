module.exports = (pool) => {
    console.log("INITIALIZING FUNCTIONS......");
    const getStudents = () => {
        return pool.query('SELECT * FROM students;').then(response => {
            console.log(response.rows)
            console.log("FROM THE GET STUDENTS FUNCTION!!!!!")
            return response.rows;
        }).catch(e => console.log(e))
    }


    const getQuizes = () => {
        return pool.query('SELECT * FROM quizes').then(response => {
            return response.rows;
        })
    }

    return { getStudents, getQuizes };
}