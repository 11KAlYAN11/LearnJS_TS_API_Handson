1) If you are posting to this endpoints via POSTMAN Use This: 

{
    "key": "username",
    "description": "This is a sample username key"
}

/*{
    "name": "AsamSLN"
}*/

/*{
    "name": "Asam pavan",
    "age": 22
}*/

2) Via Terminal: 

(For easy understaing refer post.requirments.sh file)
- If you are posting to this endpoints via Terminal Use This:    
curl -X GET http://localhost:3000/user -H "Content-Type: a
pplication/json"

Got Posting: 
curl -X POST http://localhost:3000/user \
-H "Content-Type: application/json" \
-d '{"name": "Kalyan", "age": 22}'

curl -X POST http://localhost:3000/name \
-H "Content-Type: application/json" \
-d '{"name": "John Doe"}'

curl -X POST http://localhost:3000/data \
-H "Content-Type: application/json" \
-d '{"key": "username", "description": "Sample data for username"}'


for All Terminal commnads plz refer "post_requirments.sh" files