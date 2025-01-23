#!/bin/bash

# Function to display output with a title
# Make sure to up the server by "node index.js"
print_section() {
    echo -e "\n==============================="
    echo "$1"
    echo "==============================="
}

# Step 1: GET Default Values
print_section "Fetching Default User"
curl -s -X GET http://localhost:3000/user -H "Content-Type: application/json" | jq .

print_section "Fetching Default Name"
curl -s -X GET http://localhost:3000/name -H "Content-Type: application/json" | jq .

print_section "Fetching Default Data"
curl -s -X GET http://localhost:3000/data -H "Content-Type: application/json" | jq .

# Step 2: POST New Values
print_section "Posting New User"
curl -s -X POST http://localhost:3000/user \
-H "Content-Type: application/json" \
-d '{"name": "Asam SLN", "age": 22}' | jq .

print_section "Posting New Name"
curl -s -X POST http://localhost:3000/name \
-H "Content-Type: application/json" \
-d '{"name": "Kalyan"}' | jq .

print_section "Posting New Data"
curl -s -X POST http://localhost:3000/data \
-H "Content-Type: application/json" \
-d '{"key": "username", "description": "Indian names for demo"}' | jq .

# Step 3: GET Updated Values
print_section "Fetching Updated User"
curl -s -X GET http://localhost:3000/user -H "Content-Type: application/json" | jq .

print_section "Fetching Updated Name"
curl -s -X GET http://localhost:3000/name -H "Content-Type: application/json" | jq .

print_section "Fetching Updated Data"
curl -s -X GET http://localhost:3000/data -H "Content-Type: application/json" | jq .

# Step 4: UPDATE (PUT) Operations
print_section "Updating User"
curl -s -X PUT http://localhost:3000/user/1 \
-H "Content-Type: application/json" \
-d '{"name": "Updated Asam SLN", "age": 30}' | jq .

print_section "Fetching Updated User"
curl -s -X GET http://localhost:3000/user -H "Content-Type: application/json" | jq .

print_section "Updating Name"
curl -s -X PUT http://localhost:3000/name/1 \
-H "Content-Type: application/json" \
-d '{"name": "Updated Kalyan"}' | jq .

print_section "Fetching Updated Name"
curl -s -X GET http://localhost:3000/name -H "Content-Type: application/json" | jq .

print_section "Updating Data"
curl -s -X PUT http://localhost:3000/data/1 \
-H "Content-Type: application/json" \
-d '{"key": "updated_key", "description": "Updated description for the key"}' | jq .

print_section "Fetching Updated Data"
curl -s -X GET http://localhost:3000/data -H "Content-Type: application/json" | jq .

# Step 5: DELETE Operations
print_section "Deleting User"
curl -s -X DELETE http://localhost:3000/user/1 -H "Content-Type: application/json" | jq .

print_section "Deleting Name"
curl -s -X DELETE http://localhost:3000/name/1 -H "Content-Type: application/json" | jq .

print_section "Deleting Data"
curl -s -X DELETE http://localhost:3000/data/1 -H "Content-Type: application/json" | jq .
