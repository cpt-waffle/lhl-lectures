import useForm from '../hooks/useForm';

const Form = props => {

  const img = useForm();
  const title = useForm();
  const subtitle = useForm();

  const onSubmit = evt => {
    evt.preventDefault();
    props.addPoster(img.val, title.val, subtitle.val);
  }

  console.log(img, title, subtitle)


  return (
    <form onSubmit={onSubmit}>
      <h1>Add a new poster here!</h1>

      <p>Img: <input type="text" name="img" value={img.val} onChange={img.onChangeVal}/></p>
      <p>Title: <input type="text" name="title" value={title.val} onChange={title.onChangeVal}/></p>
      <p>SubTitle: <input type="text" name="subtitle" value={subtitle.val} onChange={subtitle.onChangeVal}/></p>
      <br/>
      <button>Submit!</button>
    </form>
  )
}

export default Form;