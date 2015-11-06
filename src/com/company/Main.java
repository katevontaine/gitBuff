package com.company;

import spark.ModelAndView;
import spark.Session;
import spark.Spark;
import spark.template.mustache.MustacheTemplateEngine;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;

public class Main {

    public static void createTables(Connection conn) throws SQLException {
        Statement stmt = conn.createStatement();
        stmt.execute("CREATE TABLE IF NOT EXISTS users (id IDENTITY(1,1) , name VARCHAR , password VARCHAR , url VARCHAR)");
        stmt.execute("CREATE TABLE IF NOT EXISTS workouts (id IDENTITY(1,1) , name VARCHAR)");
    }

    public static void insertUser (Connection conn , String name, String password , String url) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO users VALUES (NULL , ? , ? , ?)");
        stmt.setString(1, name);
        stmt.setString(2, password);
        stmt.setString(3 , "https://slack-imgs.com/?url=https%3A%2F%2" + //generic pic url
                "Fwww.placecage.com%2Fc%2F200%2F300&width=200&height=300");
        stmt.execute();
    }

    public static User selectUser (Connection conn , String name) throws SQLException {
        User user = null;
        PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE name = ?");
        stmt.setString(1, name);
        ResultSet results = stmt.executeQuery();
        if (results.next()){
            user = new User();
            user.id = results.getInt("id");
            user.password = results.getString("password");
        }
        return user;
    }

    public static void insertWorkout(Connection conn, String name) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO workouts VALUES (NULL,?)");
        stmt.setString(1, name);
        stmt.execute();
    }

    public static void populateWorkouts(Connection conn) throws SQLException {
        Workout workout = new Workout();
        }
    public static void testUser(Connection conn) throws SQLException {
        insertUser(conn, "alice", "1245", "" );
    }


    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:h2:./main");

        createTables(conn);

        testUser(conn);

        Spark.externalStaticFileLocation(".");
        Spark.init();


        Spark.post(
                "/login",
                ((request, response) -> {
                    String username = request.queryParams("username");
                    String password = request.queryParams("password");
                    String url = request.queryParams("url");

                    if (username.isEmpty() || password.isEmpty()) {
                        Spark.halt(403);
                    }

                    User user = selectUser(conn, username);
                    if (user == null) {
                        insertUser(conn, username, password, url);
                    }
                    else if (!password.equals(user.password)) {
                        Spark.halt(403);
                    }
                    return "";
                })
        );

    }
}
