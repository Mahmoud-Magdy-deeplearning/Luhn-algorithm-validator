# Random Token Generator with Luhn Algorithm Validation

https://github.com/Mahmoud-Magdy-deeplearning/Luhn-algorithm-validator/assets/59231851/2c6d5d1d-9f71-48ad-88a4-da2ff50f0418

## Overview

This repository contains three projects aimed at generating random tokens based on selected digits and validating them using the Luhn algorithm. The projects are organized as follows:

1. **frontend folder**: This is a React application responsible for the user interface. It allows users to choose specific digits from 0 to 9 and generate a random 16-digit token based on the selected digits. If no specific digits are chosen, it generates a completely random 16-digit token. This application runs on port `8080`.

2. **generator folder**: This is a Java Spring Boot REST API project responsible for generating tokens. It communicates with the frontend to create tokens based on user specifications. This project runs on port `8081`.

3. **validator folder**: This is another Java Spring Boot REST API project that handles the validation of tokens using the Luhn algorithm. It verifies the validity of tokens received from the frontend. This project also runs on port `8082`.


## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (for the frontend)
- Java Development Kit (JDK)
- Maven (for building Java projects)

## Features

- Generate random tokens based on selected digits.
- Validate tokens using the Luhn algorithm.
- User-friendly interface for selecting digits (frontend).
- REST API endpoints for token generation and validation.

## Tools Used

- **Frontend**: React
- **Generator**: Java Spring Boot
- **Validator**: Java Spring Boot

## Running the Entire Project

- For convenience, there are `start.bat` and `start.sh` files provided to run the entire project. These scripts will handle the necessary steps to start the frontend, generator, and validator components.

### Frontend Application

1. Navigate to the `frontend` folder.
2. Install the necessary dependencies using `npm install`.
3. Run the application using `npm start`. The application will be accessible at [http://localhost:8080](http://localhost:8080).

### Generator API

1. Navigate to the `generator` folder.
2. Build and run the Spring Boot application. It will be accessible at [http://localhost:8081](http://localhost:8081).

### Validator API

1. Navigate to the `validator` folder.
2. Build and run the Spring Boot application. It will also be accessible at [http://localhost:8082](http://localhost:8082).

### Author
Contact: [Mahmoud Magdy](mailto:mahmoudmagdymahmoud1@gmail.com)
