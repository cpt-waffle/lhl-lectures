# ---------------- AGENDA ---------------

Security :)

- hashing passwords
- bcryptJS (bcrypt)
- middleware (bonus)
- encrypted cookies (cookie-session)
- HTTPS
- REST
- cleanup of server.js

### Security Part 1

 ### Passwords

 Plain text passwords are stored, can be used maliciously.


NEVER EVER EVER KEEP PASSWORDS AS PLAINTEXT
if they can be read by anyone, they can be stolen, re-used, in other apps, websites, etc.
People very rarely change their passwords. 

### Hashing

plaintext-string -----------> algo ------SALT----------> 9tiueskjfpij034jtgpodifj34635

hashing is only one way --------->


To dehash a password, a hacker must try out different passwords until the hash matches the other hash.