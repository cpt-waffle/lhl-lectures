# W2D3 - Networking with TCP 
## -- Agenda

- What is Networking? 
- Networking with TCP
 (talking about HTTP)
- build server/build a client 
- (BONUS: you should be able to connect to my computer :) )
- demo

### What is Networking

- connecting mulitple computers
- making connections
- connecting to somebody in a web like fashion
- to add/share info through the web 


### How do we As People Communicate with Each other

Person A

wants to communicate with person:

Person B

Find where Person B is (location)
Walk up to Person B
Say Hi!
(social rules -- follow them)
Person B can say im busy and now convo is over :(

Person B can say Hi back --->

Person A speaks 
Person B listens
Person B speaks 
Person A listens
Person A speaks 
Person A speaks 
Person A speaks 
Person B listens
Person B speaks 
Person B speaks 
Person B speaks 
Person B speaks 
Person B speaks 
Person B speaks 
Person A listens

to exit a convo we should follow these rules:

- say "bye i gotta go" (good finished convo)
- turn around and walk away abrupt finished convo)


### TCP - Transmission Control Protocol

rules that the computers follow to connect with each other

Computer A 
Computer B

Computer A must approach computer B by knowing where it is
provide an address (IPs and PORTs)

Computer A attempts to connect with Computer B by presenting its credentials

"Hi Im Computer A, i'm at __________, these are my credentials ________, would you like to
connect ?? "

Computer B: "no"

DISCONNECT

---------------

Computer B: "yes"
and now both computers are connected with each other

Computer A can send messages 

------------------- messages ---------------------->
------------------- messages ---------------------->
------------------- messages ---------------------->
------------------- messages ---------------------->
------------------- messages ---------------------->
Computer B listens for those messages
<------------------- messages ----------------------
<------------------- messages ----------------------
<------------------- messages ----------------------
------------------- messages ---------------------->
<------------------- messages ----------------------
------------------- messages ---------------------->
<------------------- messages ----------------------

disconnect without saying anything (closing program, turning off computer, crash x_x)

disconnect but tell comptuer B that you are leaving/disconnecting



### Terminology of Connecting 

## IP

Local IP
 is an address thats given by your local area network to any device

Global IP




Networks


Ports

Servers