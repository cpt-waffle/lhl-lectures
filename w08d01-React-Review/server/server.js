const express = require("express");

const app = express();

const posters = [
	{id: 1, img: 'https://images.ctfassets.net/hrltx12pl8hq/12wPNuS1sirO3hOes6l7Ds/9c69a51705b4a3421d65d6403ec815b1/non_cheesy_stock_photos_cover-edit.jpg', title: 'hats', subtitle: 'not for everyone'},
	{id: 2, img: 'https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg?cs=srgb&dl=pexels-anna-shvets-4587955.jpg&fm=jpg', title:'Cats', subtitle: 'cats'},
  {id: 3, img: 'https://i.kym-cdn.com/entries/icons/original/000/030/115/cover4.jpg', title: 'Teams', subtitle: 'share victory, blame defeat on someone else'},
  {id: 4, img: 'https://i.ytimg.com/vi/CSHbSe7iW_E/maxresdefault.jpg', title: 'Leadership', subtitle: 'sometimes following blindly is not a good idea'},
  {id: 5, img: 'https://media.istockphoto.com/id/157402340/photo/left-behind.jpg?s=612x612&w=0&k=20&c=ttF1xIAwRdL2v0UoL6Y_xdbpSQJzdVIokVdBBrM2I3Q=', title: 'Getting', subtitle: 'sometimes you gotta be creative'},
]


app.get('/posters', (req, res) => {
  return res.json(posters);
})


app.listen(8080, console.log(`Server is listening on port 8080`));