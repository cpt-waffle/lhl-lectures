# W2D3 - Networking with TCP 
## -- Agenda

- What is Networking? 
- Networking with TCP
 (talking about HTTP)
- build server/build a client 
- (BONUS: you should be able to connect to my computer :) )
- demo


### What is Networking ?

- making connections
- transfering data 
- communication between things 

### How to Communicate between 2 people ?

See a person, or know where they are
Approach the person
Greet -- have a way to say who you are and ask if they want to talk or have a conversation 
exchange of words on information

- when I speak, the other person listens
- when they speak, i listen
- no talking over each other
- no screaming
- no nonstop banter
- if we did not understand something, we can ask to reclarify to get a better sense
of the topic

to end a convo:
say your goodbyes, "Hey i gotta go, thank you" leave

if you gotta end a convo very abruptly:
walk away...

### Rules of Communication between Two Computers
### Transmission Control Protocol
### TCP 

Before connecting to a computer, we must know where they are located, 
and thier address 

Attempting to connect:

We give our credentials to the the computer, and see if we are allowed to connect

if connection gets established we can messages(payloads) between each computer

Computer A --------------------------> Computer B
Computer B <-------------------------- Computer A
Computer A --------------------------> Computer B
Computer A --------------------------> Computer B
Computer A --------------------------> Computer B
Computer A --------------------------> Computer B
Computer B <-------------------------- Computer A
Computer B <-------------------------- Computer A
Computer B <-------------------------- Computer A
Computer B <-------------------------- Computer A
Computer A --------------------------> Computer B
Computer B <-------------------------- Computer A

If we want disconnect, we fire an event to tell the other computer that we are
disconnecting.

if connection breaks, the other computer will realize they are no longer connected
because there has been no response for quite some time, and cannot reach the other 
computer.


### HTTP 
### HyperText Transfer Protocol

Before connecting to a computer, we must know where they are located, 
and thier address 

Attempting to connect:

We give our credentials to the the computer, and see if we are allowed to connect

if connection gets established we can messages(payloads) between each computer

A Computer once connected, can only send 1 message called a REQUEST

-----------------------------------------------> REQ

The Computer that we are connected to can only send one message, and its called RESPONSE

<----------------------------------------------- RES


exchange has been done, disconnect



### Credentials 

IP 

local IP

Global IP

PORTS

Services 

