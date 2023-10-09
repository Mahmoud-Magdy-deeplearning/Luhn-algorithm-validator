@echo off

rem Start the React app
cd frontend
start cmd /k "npm i && npm start"

rem Start the validator Spring Boot app
cd ../validator
start mvn spring-boot:run

rem Start the generator Spring Boot app
cd ../generator
start mvn spring-boot:run