package com.company;

import java.time.LocalDateTime;

/**
 * Created by holdenhughes on 11/8/15.
 */
public class Note {
    int id;
    LocalDateTime noteDate;
    String text;

    public int getId() {
        return id;
    }

    public LocalDateTime getNoteDate() {
        return noteDate;
    }

    public String getText() {
        return text;
    }
}
