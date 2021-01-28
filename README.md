# DjangoAuth
Django rest service for registering users, logging in and logging out. Needed for capstone later.

backend directory contains the REST API for handling authentication and authorization.

frontend directory contains a basic React js app with a form for loggin in.

Endpoints:
- <code>POST /api/auth/register</code>
  - register a user with a username, email and password
  - request body should be a JSON object with <code>username</code>, <code>password</code> and <code>email</code>
- <code>POST /api/auth/login</code>
  - creates a token for the user if the credentials could be authenticated
  - request body should be a JSON object with <code>username</code> and <code>password</code>
- <code>POST /api/auth/logout</code>
  - destroys the access token for the user
  - header should have <code>Authorization</code> with value <code>Token \<user access token\></code>
- <code>GET /api/auth/user</code>
  - gets info for the user
  - header should have <code>Authorization</code> with value <code>Token \<user access token\></code>
