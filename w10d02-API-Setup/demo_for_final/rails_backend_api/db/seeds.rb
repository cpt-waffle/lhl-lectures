puts "Creating Cats!"
Cat.destroy_all

Cat.create(name: 'Puma', img: 'https://2static.fjcdn.com/pictures/Derp+cat_9720f6_6005436.jpg')
Cat.create(name: 'Rosy', img: 'https://i.redd.it/6xvh1f7btgl31.jpg')
Cat.create(name: 'Mr Buttons', img: 'https://live.staticflickr.com/1614/25492212465_7ff33b58bb_b.jpg')
Cat.create(name: 'Luna', img: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg')