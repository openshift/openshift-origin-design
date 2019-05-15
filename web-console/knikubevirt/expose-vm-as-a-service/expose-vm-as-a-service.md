# Expose VM as a Network Service

The user should be able to expose a VM as a network service. This means that they would be exposing some of the ports on its default interface to the cluster internally or to the outside world. 
In order for it to be actually useful, we need to bind it to a service.

## Expose From VM List

![Expose From VM List](img/Expose_01.png)

We added a new action called “Expose VM as network service”. Clicking on that will open the expose as network popup. 

![Pop up](img/Expose_02.png)

![Pop up open types](img/Expose_03.png)

The user can select between 3 network service types:
-  Cluster IP (Default) - Exposing the VM to inside the cluster 
-  Load Balancer - Exposing the VM to the Internet 
-  Node Port - Exposes the Service to the Internet on the same port of each selected Node in the cluster  

![3 network types](img/Expose_04a.png)

The user can choose between TCP or UDP protocol. 
TCP (Transmission Control Protocol) guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent. 
TCP is connection oriented, whereas UDP (User Datagram Protocol) is connection-less. This means that TCP tracks all data sent, requiring acknowledgment for each octet (generally). 
UDP does not use acknowledgments at all, and is usually used for protocols where a few lost datagrams do not matter.


![choosing protocols](img/Expose_04_b.png)

The name is the only required field in the menu. All other parts can be predefined, meaning they will have a default value using kubernetes capabilities. 


![The service is now created](img/Expose_05a.png)

The Service is ready for use. The user can see it in the services list

![The service is added to the list](img/Expose_05b.png)

## Expose From VM Page 

![Expose from the VM page](img/Expose_06.png)

The user would go through the same flow.
The Service is ready for use,  and the user can see it in the services list. 
###Services on the Overview tab
![Services on the overview tab](img/Expose_010Services.png)


