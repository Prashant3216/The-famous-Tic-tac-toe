# Step 1: Build the application
# pre-configured environment as node 18
FROM node:18 AS build
# defining the work directory:: everything will be copied here and all subsequent command will run from this directory
WORKDIR /dist/src/app
#this will copy file such as package.json and package-lock.json from the project in /app directory
COPY package*.json ./
# this will install the package that used in the project
RUN npm install
# this will copy all the files in the /app directory
COPY . .
#Runs your build script (often defined in package.json for React or other frontend frameworks). This generates production-ready files in a build/ directory
RUN npm run build

#step 2: serve the application
FROM nginx:1.23

# COPY --from=build: Copies files from the build stage.
# /app/build: The production files created earlier.
# /usr/share/nginx/html: The default location where Nginx serves files.
COPY --from=build /dist/src/app/dist/demo /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf

# Documents that the container will listen on port 80 (HTTP). This doesn’t publish the port but signals intent.
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]
