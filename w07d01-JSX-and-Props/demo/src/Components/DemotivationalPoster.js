import './DemotivationalPoster.css';

const DemotivationalPoster = (props) => {

  const defaultImg = "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg";
  const {img, title, caption} = props;
  console.log(img, title, caption);
  //  <%= %> 
  return (
    <div className="poster">
      <img src={img ? img : defaultImg} className="poster--img"/>
      <h1 className="poster--title">{title || 'no title given'}</h1>
      <h2 className="poster--caption">{caption || 'no caption given'}</h2>
    </div>
  )
}


export default DemotivationalPoster;