# LearnJS_TS
Hello!

## Project Overview
This project is designed to help users learn JavaScript and TypeScript through practical examples and demos.

## Subdirectory Overview

### api-demo
The `api-demo` directory contains a simple API that can be interacted with using various methods. Below are instructions on how to use the API endpoints:

1. **Using POSTMAN**:
   To post to the endpoints via POSTMAN, use the following JSON format:
   ```json
   {
       "key": "username",
       "description": "This is a sample username key"
   }
   ```
   
    ```json
    {
        "name": "AsamSLN"
    }
    ```

    ``` json
    {
        "name": "Asam pavan",
        "age": 22
    } 
    ```

2. **Using Terminal**:
   For terminal commands, refer to the `post_requirments.sh` file for easy understanding. Here are some examples:
   - To get user data:
     ```bash
     curl -X GET http://localhost:3000/user -H "Content-Type: application/json"
     ```
   - To post user data:
     ```bash
     curl -X POST http://localhost:3000/user \
     -H "Content-Type: application/json" \
     -d '{"name": "Kalyan", "age": 22}'
     ```

   - To post a name:
     ```bash
     curl -X POST http://localhost:3000/name \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe"}'
     ```

   - To post data:
     ```bash
     curl -X POST http://localhost:3000/data \
     -H "Content-Type: application/json" \
     -d '{"key": "username", "description": "Sample data for username"}'
     ```

Have a great learning journey!
