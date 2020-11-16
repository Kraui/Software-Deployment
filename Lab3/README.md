# Software Deployment - Lab 3
## Christoph Enke - BIT 18

The task for Lab 3 consists of setting up a "Wordpress" with external MySQL DB in 2 containers. Container 1 should be made by standard code while the second container is made by the user.

## Part 1

Create a docker compose file which uses Wordpress and MySQL images to set up a Wordpress container infrastructur. After this step execute the following command in a shell to run it:

`docker-compose up -d`

## Part 2

Afterwards you have to go back to the parent folder where the docker-compose file is located and execute the command docker-compose up -d, then you can log in to Wordpress when going to localhost:80 and also install it.

The second part consists of creating the images himself. These are based on the linux system 

`debian:jessie.`

In the "Teil2" folder there is the "docker-compose.yml" which containts both images for compiling. In the folders "SQL" and "Wordpress" contains the code each image.

In the "SQL" folder there is the "docker entrypoint" file which is crucial for the deplaoment. The "Dockerfile" contains the code for building. The files "init.sql" and "install.sh" are used for building.

In the "Wordpress" is the "docker-entrypoint" file for running and the "Dockerfile" with the code for building the immage.

The code for building is as followed

`docker build -t (image name) .`

##Deploying

After that, execute the following command in the root folder to start docker images.

`docker-compose up -d`

Now call the Website with 

`http://localhost:80`

and it should run and the task is finished