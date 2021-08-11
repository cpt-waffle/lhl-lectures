------------------- AGENDA ---------------------

- AJAX (What is it and why)
- Building an App with an API 


-- Tinyapp - an app that would use a template engine called
EJS and it would COMPILE back into HTML

HTML is only read by your browser (and js)

-- Tweeter - a client side rendering app, --- all of the assets (like css, js, icons, etc) load first
THEN the data comes, and then the data gets populated onto the html as a view


DATA------

ServerSide
Tinyapp -- Data was accessible via templateVars and they data was embedded into the EJS


ClientSide
Tweeter -- data is sent out as a JSON/XML object (raw) and its up to the front-end to use...


AJAX -----

Microsoft developed a way to call a server, and ask for data without making your page REFRESH

