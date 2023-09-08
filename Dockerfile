# Dockerfile created with reference to https://faun.pub/ci-cd-pipeline-with-react-app-using-github-actions-1b219d4e162f adding required insturction, info and references wherever required by GHkrishna
# Other references: 
# Node docs: https://nodejs.org/en/docs/guides/nodejs-docker-webapp 

# Setting up the node environment
# A node image is used to setup a node environment
# Here node 18 version is used since I had v18.13.0 running on my machine
# 'alpine' is nothing but a type if node image used depending on what preinstalled packages we want in our environment. More about that here: https://hub.docker.com/_/node
# 'AS development' suggests that we need to use the specified node image in the development.
FROM node:18-alpine AS development
# Environment variables are stored in NODE_ENV
# By using the below command we are suggesting to used environment variables as if we are in development server. More info here: https://www.geeksforgeeks.org/what-is-node_env-in-node-js/
# However we are not using any environment variables in this build
ENV NODE_ENV development
# Adding a working directory, where all our build will be stored inside the container
WORKDIR /app
# Cache and install dependencies. This helps in installing all the required packahes from the package.json and packahe-lock.json in our container/node environment/workdir
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files. i.e. copy all the files from our repo/local root dir to the containers root dir
# More about the command here https://stackoverflow.com/questions/47270150/copy-command-in-dockerfile-for-asp-net Even though it is for .NET, it's still useful to undertand why to copy everything after above two COPY commands and more
COPY . .
# Expose port for our application. Our react application listens on port 3000
EXPOSE 3000
# Start the app.
CMD ["npm","start"]