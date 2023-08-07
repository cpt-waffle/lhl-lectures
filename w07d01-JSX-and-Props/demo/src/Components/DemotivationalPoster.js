import './DemotivationalPoster.css';

const DemotivationalPoster = (props) => {

  console.log(props);
  const defaultImg = 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&auto=format&w=2270&ar=2:1&fit=crop';

  const truthy = '';
  // 0
  // false
  // null
  // undefined
  // ''
  // NaN
  let img = '';
  if (!props.img) {
    img = defaultImg;
  } else {
    img = props.img
  }



  return (
    <div className="poster">
      <img className="poster--img" src={img}/>
      {}
      {/* if (---) {...} */}
      {/* <h1>{truthy && props.title}</h1> */}
      <h1>{props.title|| 'NO TITLE'}</h1>

      {/* if else equivalent */}
      {truthy ? <h1>this was truthy</h1> : <h1>This was Falsey</h1>}
      <p>{props.info}</p>
    </div>
  )

}

export default DemotivationalPoster;