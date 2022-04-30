# Realtime-Comment-System
##This Project is based on HTML,CSs And Javascript for frontend and Nodejs,Mongodb,Socket.io for backend.

#FRONTEND:-
##HTML
>HTML stands for HyperText Markup Language. "Markup language" means that, rather than using a programming language to perform functions, HTML uses tags to identify different types of content and the purposes they each serve to the webpage.

##CSS
>HTML provides the raw tools needed to structure content on a website. CSS, on the other hand, helps to style this content so it appears to the user the way it was intended to be seen. These languages are kept separate to ensure websites are built correctly before they're reformatted.

##Javascript
>JavaScript is a logic-based programming language that can be used to modify website content and make it behave in different ways in response to a user's actions. Common uses for JavaScript include confirmation boxes, calls-to-action, and adding new identities to existing information.
>We use lots of function like for adding comment,displaying comment,and animation.
>Also use SOCKET.IO for realtime changing data.


##SOCKET.IO
>What Socket.IO is
>Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
>It is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection.
##How it works
>The bidirectional channel between the Socket.IO server (Node.js) and the Socket.IO client (browser, Node.js, or another programming language) is established with a WebSocket connection whenever possible, and will use HTTP long-polling as fallback.

>The Socket.IO codebase is split into two distinct layers:

>the low-level plumbing: what we call Engine.IO, the engine inside Socket.IO
>the high-level API: Socket.IO itself


#WORKING OF REALTIME COMMENT SYSTEM-

1.Open this site in 2 different tab.
2.User registration on user1 side.
![Screenshot (20)](https://user-images.githubusercontent.com/62016867/166115508-afc449b9-aad8-4ee2-8313-af7e18363adf.png)

3.User registration on user1 side.
![Screenshot (21)](https://user-images.githubusercontent.com/62016867/166115606-eff3fa4a-5626-4356-b5f4-1cabc9f1824d.png)

4.At the  same time many user can also register themself.

#FROM HERE THE MAIN WORK START
5.When user 1 is typing.........."Typing"animation will visible to other users that user1 is typing
![Screenshot (22)](https://user-images.githubusercontent.com/62016867/166115709-635969fe-f17e-4204-8a6a-e7f0ef5a45ef.png)


6.Same with the user2
![Screenshot (23)](https://user-images.githubusercontent.com/62016867/166115729-bd25c971-7b25-4247-9331-9861f6bdcfcd.png)
###This can onlyhappen with the help of socket.io

7.In that time when user1 post his/her comment..other registered user can se that comment with realtime change(With the help of SOCKET.IO)

#8.multiple user at same time

![Screenshot (26)](https://user-images.githubusercontent.com/62016867/166115935-8124ae68-8ef4-4906-95c3-c73fad2dbef6.png)



9.Comments are updating in realtime
10.And for storing data we use MONGOdb,by creating schemas and updating data
![Screenshot (29)](https://user-images.githubusercontent.com/62016867/166115996-6f6dd508-bad9-4fe4-9690-ba804bbfdac2.png)

