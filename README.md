# Springboot and React Template Project

This is a basic foundation of an app that uses Springboot as the backend and React for the frontend.

## How to use

- Run the following Git command in the folder you wish to clone to project to
  - `git clone https://github.com/SiAust/spring-react-template.git`
- Start Springboot
  - `cd ./spring-react-template`
  - `./mvnw spring-boot:run`
  - Test Springboot by calling an API endpoint with Curl
    - `curl http://localhost:8080/api/hello` - response should be `hello world`
- Start React
  - `cd ./app`
  - `npm install` - install project dependencies
  - `npm start`
- Open your browser (if not automatically opened) at `http://localhost:3000`

## To be added

- H2 database
