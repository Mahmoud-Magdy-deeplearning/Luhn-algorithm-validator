#!/bin/bash

# Start the React app
cd frontend
npm i
npm start &

# Start the validator Spring Boot app
cd ../validator
mvn spring-boot:run &

# Start the generator Spring Boot app
cd ../generator
mvn spring-boot:run &

wait