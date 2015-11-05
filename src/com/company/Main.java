package com.company;

import java.sql.*;

public class Main {

    public static void createTables(Connection conn) throws SQLException {
        Statement stmt = conn.createStatement();
        stmt.execute("CREATE TABLE IF NOT EXISTS users (id IDENTITY , name VARCHAR , password VARCHAR , url VARCHAR)");
    }

    public static void insertUser (Connection conn , String username, String password , String url) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO users VALUES (NULL , ? , ? , ?)");
        stmt.setString(1, username);
        stmt.setString(2, password);
        stmt.setString(3 , url);
        stmt.execute();
    }

    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:h2:./main");

    }
}
