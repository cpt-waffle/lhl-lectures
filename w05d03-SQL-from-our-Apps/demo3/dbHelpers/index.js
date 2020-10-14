module.exports = (db) => {
    const getUsers = () => {
        return db.query("SELECT * FROM students").then(response => {
            return response.rows;
        })
    }

    const getMarks = () => {
        return db.query(`
            SELECT name, quiz_results.mark, total  FROM students
            JOIN quiz_results
            ON students.id = quiz_results.student_id
            JOIN quizes
            ON quizes.id = quiz_results.quiz_id;`
        ).then(response => {
            console.log(response);
            return response.rows;
        })
    }

    return { getUsers, getMarks };
}