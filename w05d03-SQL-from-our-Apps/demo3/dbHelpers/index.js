module.exports = (pool) => {
    const getStudents = () => {
        return pool.query('SELECT * FROM students;').then(output => {
            console.log("INSIDE OF INDEX.JS HELPER!!");
            return output.rows;
          }).catch(e => {
            console.log(e);
        })
    }

    const getMarks = () => {
        const q = `SELECT name, mark, total  FROM students JOIN
        quiz_results ON quiz_results.student_id = students.id 
        JOIN quizes
        ON quiz_results.quiz_id = quizes.id;`;
        return pool.query(q).then(res => {
            return res.rows;
        })
    }

    return { getStudents, getMarks }
}