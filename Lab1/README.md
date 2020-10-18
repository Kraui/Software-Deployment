# Software Deployment 
## Christoph Enke
### Task

Creating an ARM-Template which:

* creates an Azure Storage Account Free Tier)
* creates an Azure Web-App for node.js (Free Tier)
* uses paramters

### 1. Setting up Visual Studio Code

For this task I worked with Visual Studio Code. So the first thing to do was to install the necessary tools. You need the follwing apps to work with azure in Visual Studio Code

* Azure App Service
* Azure Account
* Azure Resource Manager

### 2. Login

The next step consists of login into your Azure Account. So open a powershell terminal in Visual Studio Code and type in the following command.

```
az login
```

Your browser will then open and you have to login in.

### 3. Create an Azure Storage Account

First thing to do is create a storage account. So create a new folder and within a new file called `azuredeploy.json`. With the following command you can create a new storage account withing the ressource group `enkegroup`. The name of the storage is `storageenke`.

```
az deployment group create --name storageenke --resource-group enkegroup --template-file "azuredeploy.json"
```

### 4. Create a Web-App

Next a file called `azuredeploy.parameters.json` is needed where all parameters are stored.

So execute the following command and create the web-app.

```
az deployment group create --name enkewebapp --resource-group enkegroup --template-file "azuredeploy.json" --parameters "azuredeploy.parameters.json"
```

Now you can store parameters in there and your webapp is also created already. So the task is finished.

### Website

Link to the github repository with the code:

```
https://softwaredeploymentweb.azurewebsites.net/
```