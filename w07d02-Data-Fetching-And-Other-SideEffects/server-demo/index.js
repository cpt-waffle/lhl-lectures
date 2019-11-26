const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

let number = 0;

const data = [
  {
    profile: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
    name: 'Mr. Woofers'
  },
  {
    profile: 'https://www.dogstrust.org.uk/help-advice/buyer-advice/154124lrg_buyer-advice.jpg',
    name: 'Mrs. Bark'
  },
  {
    profile: 'https://www.dogstrust.org.uk/help-advice/buyer-advice/154124lrg_buyer-advice.jpg',
    name: 'Mrs. Bark'
  },
  {
    profile: 'https://www.dogstrust.org.uk/help-advice/buyer-advice/154124lrg_buyer-advice.jpg',
    name: 'Mrs. Bark'
  }
]


app.get('/', (req, res) => {
  console.log("HIT ", number);
  number++;
  setTimeout(() => res.json({data}), 1000)
});




app.listen(3001, () => console.log('server is running on port 3001'));