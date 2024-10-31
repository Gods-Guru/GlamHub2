<%@ page import="com.mongodb.client.MongoCollection" %>
<%@ page import="com.mongodb.client.MongoDatabase" %>
<%@ page import="com.mongodb.client.MongoClients" %>
<%@ page import="org.bson.Document" %>
<%@ page import="java.util.UUID" %>

<%
    String email = request.getParameter("email");
    String password = request.getParameter("password");

    MongoDatabase database = MongoDBConnection.getDatabase();
    MongoCollection<Document> collection = database.getCollection("users");

    // Check if the user already exists
    Document existingUser = collection.find(new Document("email", email)).first();
    if (existingUser == null) {
        // Create a new user
        Document newUser = new Document("email", email)
            .append("password", password); // Consider hashing passwords in production
        collection.insertOne(newUser);
        out.println("User registered successfully!");
    } else {
        out.println("Email already registered.");
    }
%>
