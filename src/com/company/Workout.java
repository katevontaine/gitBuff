package com.company;

import java.time.LocalDateTime;

/**
 * Created by cameronoakley on 11/5/15.
 */
public class Workout {
    ArmWorkout armWorkout;
    LegWorkout legWorkout;
    CardioWorkout cardioWorkout;
    CoreWorkout coreWorkout;
    LocalDateTime date;

    public ArmWorkout getArmWorkout() {
        return armWorkout;
    }

    public LegWorkout getLegWorkout() {
        return legWorkout;
    }

    public CardioWorkout getCardioWorkout() {
        return cardioWorkout;
    }

    public CoreWorkout getCoreWorkout() {
        return coreWorkout;
    }
}
