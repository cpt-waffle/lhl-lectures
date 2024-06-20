import './Note.css';

const Note = (props) => {
  console.log(props);
  return (
    <article className="note">
      {/*<% if, for loops does not work %>*/}
      <h1>{props.title ? props.title : 'no title given :('}</h1>
      {false && 'hello'}
      <p>{props.children}</p>
    </article>
  )
}


export default Note;