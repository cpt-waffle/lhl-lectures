const express = require('express');

const app = express();

const demoArray = [
	{
		title: 'Investment',
		caption: " sometimes you really should know what you're doing",
		image: 'https://cdn.corporatefinanceinstitute.com/assets/income-investing-1024x576.jpeg'
	},
	{
		title: 'Planes',
		caption: 'They only crash once',
		image: 'https://preview.redd.it/f9831zm7pv371.jpg?width=640&crop=smart&auto=webp&s=cfb3d24b2599196fbf8680c98fd73b953654260d'
	},
	{
		title: 'Patience',
		caption: 'Is for people where they have no places to be',
		image: 'https://www.geotab.com/CMS-Media-production/Blog/NA/_2018/July/traffic_congestion/blog-traffic-congestion-hero@2x.jpg'
	},
  {
    title: "Leadership",
    caption: "Sometimes your boss has no idea how this will pan out.",
    image: "https://www.hospitalitynet.org/picture/153120105.jpg?t=1603369280"
  }
]


app.get('/demoposters', (req,res) => {
  // database call goes here...
  return res.json(demoArray)
})


app.listen(8080, () => console.log("Server is on!"));
