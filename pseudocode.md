# PseudoCode
## Functionality:
    A website used to show the current time of day (hours, minutes, seconds, and AM of PM)
    in both standard and military time.

   ## Objects:
        Display: shows current time (hours, minutes, seconds, AM of PM)
        Format switch (radio button): changes the format of the time from standard to military
            stanTime = option for standard time
            milTime = option for military time

   ## Variables:
        time = the current time and date from the client
        hour = the hours from time variable
        minute = the minutes from th time variable
        seconds = the seconds from the time variable
        combinedTime = combined hour + minute + second into a string to be displayed
        amOrPm = SETS clock to am of pm


## Start Program

    FUNCTION displayTime
        time = GET the current time
        hour = GET the hours from time
        minute = GET the minutes form time
        second = GET the seconds from time
        amOrPm = the displayAmOrPm function
        combinedTime = hour + minute + second + amOrPm

    FUNCTION displayAmOrPm
        IF hour is >= 12
            then set amOrPm to PM
            return amOrPm
        Else
            set amOrPm to AM
            return amOrPm

    FUNCTION militaryTime
        IF stanTime is selected
            then the hour = the hour - 12
        Else IF milTime is selected
            then return hour

    SET the interval of the displayTime function to 1000 so it runs th function every second and updates the time without having to refresh the page