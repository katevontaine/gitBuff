package com.company;

import jodd.json.JsonSerializer;
import spark.ModelAndView;
import spark.Session;
import spark.Spark;
import java.sql.*;
import java.time.LocalDateTime;

public class Main {
    static LocalDateTime lastWorkoutTime = null;
    static Workout lastWorkout = null;

    public static void createTables(Connection conn) throws SQLException {
        Statement stmt = conn.createStatement();
        stmt.execute("CREATE TABLE IF NOT EXISTS users (id IDENTITY(1,1) , name VARCHAR , " +
                "password VARCHAR , url VARCHAR)");
        stmt.execute("CREATE TABLE IF NOT EXISTS arms (id IDENTITY(1,1) , arm VARCHAR)");
        stmt.execute("CREATE TABLE IF NOT EXISTS legs (id IDENTITY(1,1) , leg VARCHAR)");
        stmt.execute("CREATE TABLE IF NOT EXISTS cardios (id IDENTITY(1,1) , cardio VARCHAR)");
        stmt.execute("CREATE TABLE IF NOT EXISTS cores (id IDENTITY(1,1) , core VARCHAR)");
        stmt.execute("CREATE TABLE IF NOT EXISTS notes (id IDENTITY(1,1) , note VARCHAR , note_date TIMESTAMP)");

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

    public static void insertNote(Connection conn , int userId , String text , LocalDateTime noteDate) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO notes Values (NULL , ? , ? , ?)");
        stmt.setInt(1, userId);
        stmt.setString(2, text);
        stmt.setTimestamp(3, Timestamp.valueOf(noteDate));
        stmt.execute();
    }

    public static void insertArm(Connection conn) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO arms VALUES (NULL, ?)");
        stmt.setString(1, "Curls");
        stmt.execute();
        stmt.setString(1, "Bench press");
        stmt.execute();
        stmt.setString(1, "Push ups ");
        stmt.execute();
        stmt.setString(1, "Pull ups");
        stmt.execute();
        stmt.setString(1, "Dips");
        stmt.execute();
    }

    public static void insertLeg(Connection conn) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO legs VALUES (NULL, ?)");
        stmt.setString(1, "Squats");
        stmt.execute();
        stmt.setString(1, "Lunges");
        stmt.execute();
        stmt.setString(1, "Box jumps");
        stmt.execute();
        stmt.setString(1, "Step ups");
        stmt.execute();
        stmt.setString(1, "Calf raises");
        stmt.execute();
    }

    public static void insertCardio(Connection conn) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO cardios VALUES (NULL, ?)");
        stmt.setString(1, "Run");
        stmt.execute();
        stmt.setString(1, "Bike");
        stmt.execute();
        stmt.setString(1, "Swim");
        stmt.execute();
        stmt.setString(1, "Row");
        stmt.execute();
        stmt.setString(1, "Jump rope");
        stmt.execute();
    }

    public static void insertCore(Connection conn) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO cores VALUES (NULL, ?)");
        stmt.setString(1, "Sit ups");
        stmt.execute();
        stmt.setString(1, "Crunches");
        stmt.execute();
        stmt.setString(1, "V ups ");
        stmt.execute();
        stmt.setString(1, "Plank");
        stmt.execute();
        stmt.setString(1, "Flutter kick");
        stmt.execute();
    }

    public static Workout createWorkout(Connection conn) throws SQLException {
        Statement stmt = conn.createStatement();
        ArmWorkout armName = null;
        LegWorkout legName = null;
        CardioWorkout cardioName = null;
        CoreWorkout coreName = null;

        insertArm(conn);

        ResultSet resultsArm = stmt.executeQuery("SELECT * FROM arms ORDER BY RAND() LIMIT 1");
        if(resultsArm.next()) {
            armName = new ArmWorkout();
            armName.id = resultsArm.getInt("id");
            armName.arm = resultsArm.getString("arm");
        }

        insertLeg(conn);

        ResultSet resultsLeg = stmt.executeQuery("SELECT * FROM legs ORDER BY RAND() LIMIT 1");
        if(resultsLeg.next()) {
            legName = new LegWorkout();
            legName.id = resultsLeg.getInt("id");
            legName.leg = resultsLeg.getString("leg");
        }

        insertCardio(conn);

        ResultSet resultsCardio = stmt.executeQuery("SELECT * FROM cardios ORDER BY RAND() LIMIT 1");
        if(resultsCardio.next()) {
            cardioName = new CardioWorkout();
            cardioName.id = resultsCardio.getInt("id");
            cardioName.cardio = resultsCardio.getString("cardio");
        }

        insertCore(conn);

        ResultSet resultsCore = stmt.executeQuery("SELECT * FROM cores ORDER BY RAND() LIMIT 1");
        if(resultsCore.next()) {
            coreName = new CoreWorkout();
            coreName.id = resultsCore.getInt("id");
            coreName.core = resultsCore.getString("core");
        }


        Workout workout = new Workout();
        workout.armWorkout = armName;
        workout.legWorkout = legName;
        workout.cardioWorkout = cardioName;
        workout.coreWorkout = coreName;
        return workout;
    }


    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:h2:./main");

        createTables(conn);

        if (selectUser(conn, "alice") == null) {
            insertUser(conn, "alice", "1245", "");
        }


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
                    } else if (!password.equals(user.password)) {
                        Spark.halt(403);
                    }
                    return "";
                })
        );

        Spark.get("/randomWorkout",
                (request, response) -> {
                    if (lastWorkoutTime == null || lastWorkoutTime.isBefore(LocalDateTime.now().minusDays(1))) {
                        lastWorkoutTime = LocalDateTime.now();
                        lastWorkout = createWorkout(conn);
                    }
                    JsonSerializer serializer = new JsonSerializer();
                    return serializer.serialize(lastWorkout);
                });
        Spark.post(
                "/create-note",
                ((request, response) -> {
                    String id = request.queryParams("userId");
                    int userId = Integer.valueOf(id);
                    String note = request.queryParams("note");
                    String noteDateStr = request.queryParams("noteDate");
                    try {
                        LocalDateTime noteDate = LocalDateTime.parse(noteDateStr);
                        insertNote(conn, userId , note , noteDate );
                    }catch (Exception e){
                        System.out.println("failure to create note");

                    }
                    return "";

                })
        );
        }
}
