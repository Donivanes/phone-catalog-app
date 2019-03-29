# phone-catalog-app

## Ecosystem

| Project | Description |
|---------|-------------|
| [react]               | Single page application |
| [redux]               | Large-scale state management |
| [react-router]        | Single-page application routing |
| [express]             | minimal and flexible Node.js web application framework |
| [docker]              | build, secure and manage applications |
| [parcel]              | web application bundler |

## To run the application 📦🚀

Clone the application:
````
git clone https://github.com/Girgetto/phone-catalog-app.git
````

Run the server:
````
cd server/
yarn start
````

Run the client:
````
cd client/
yarn dev
````

Run tests server:
`````
cd server/
yarn test
`````

Run tests in client:
`````
cd client/
yarn test
`````


## To run with docker run 🐳

Build the docker image:

  ```docker build -t phonecatalog```
  
Run the Docker image:
  
  ```docker run -p 1234:1234 -p 3000:3000 phonecatalog```