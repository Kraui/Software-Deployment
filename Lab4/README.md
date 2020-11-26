# Lab4
## Kubernetes 
#### Christoph Enke

### Erste Einstellungen

Zu allererst wird folgender Befehl zum einloggen ausgeführt

`az login`

Nun wird folgender Befehl ausgeführt zum erstellen der kubernetes 

`az aks create -g -groupname- -n -aksname- --node-count 1`

Als nächstes installieren wir azure cli

`az aks install-cli`

Nun holen wir uns die credentials

`az aks get-credentials --resource-group myresourcegroup --name myaks`

### Hochladen der sql und wordpress Files

Zu aller erst müssen wir sich verbinden, im Azure Portal kann man sich mit der Bash verbinden. Es werden folgende 2 Befehle ausgeführt um sich anzumelden.

`az account set --subscription 66a873d7-8b5e-4461-9b6c-ee180ae3147c`
`az aks get-credentials --resource-group ramajgroup --name myaks`

Nun müsse wir die files noch applien, dies geht mit folgenden Command

`kubectl apply -f /home/ramaj/mysql-deployment.yaml`
`kubectl apply -f /home/ramaj/wordpress-deployment.yaml`

Nun holen wir sich die Services und können die externe IP somit auslesen. Die geben wir im Browser ein und es sollte die Wordpress Seite kommen.

Für die externe IP der Bash Befehl

`kubectl get services wordpress`