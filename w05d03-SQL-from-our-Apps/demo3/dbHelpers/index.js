module.exports = (pool) => {
 
const getAllStudents = () => {
    const queryString = 'SELECT * FROM students;';
    return pool.query(queryString).then(data => {
        console.log('LINE 30: ', data.rows);
        return data.rows;  
    })
}

return {getAllStudents}
}