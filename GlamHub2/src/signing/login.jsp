<%@ page import="com.mongodb.client.MongoCollection" %>
<%@ page import="com.mongodb.client.MongoDatabase" %>
<%@ page import="com.mongodb.client.MongoClients" %>
<%@ page import="org.bson.Document" %>
<%@ page import="javax.servlet.http.HttpSession" %>

<%
    String email = request.getParameter("email");
    String password = request.getParameter("password");

    MongoDatabase database = MongoDBConnection.getDatabase();
    MongoCollection<Document> collection = database.getCollection("users");

    // Check user credentials
    Document user = collection.find(new Document("email", email)
                            .append("password", password)).first();
    if (user != null) {
        HttpSession session = request.getSession();
        session.setAttribute("userEmail", email);
        out.println("Login successful!");
    } else {
        out.println("Invalid email or password.");
    }
%>
