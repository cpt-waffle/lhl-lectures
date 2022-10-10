
const Form = (props) => {

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.addMeme(evt.target.title.value, evt.target.img.value);
  }

  return (<form onSubmit={onSubmit}>
    <p>title:<input type="text" name="title"/></p>
    <p>img:<input type="text" name="img"/></p>
    <button>Sumbit!</button>
  </form>)
}

export default Form;