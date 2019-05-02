# Google-Calender-Importer

This projects aims in importing the events/schedule into the Google Calendar

# Steps

## Preparation

- Prepare the schedule in a json format as below

```
var schedule = {"week1" : {"Task":"Accounting I: Fundamentals. Accounting II: Revenues and Expenses"},
                    "week2" : {"Task":"Stocks and Bonds. Accounting III: Financial Statements "},
}
```

- Create a new Google Script by going to [https://script.google.com/create](https://script.google.com/create)
- Replace the contencts of the script with calendar.gs
- Click `File>Save`, and name your project as "GCal"
- _IMPORTANT_: Click `Resources>Advanced Google Service` and turn on Calendar API

## Prepare the Calendar

- Go to Googe Calendar and Create a new calendar with the name of your choise.
- Execute the function `getCalanders` by clicking `Run>Run Function>getCalendars`
- Go to logs by clicking `View>Logs`
- Get the corresponding calender ID

## Customize the script

- Set the calendar ID to the ID obtained in previous step (alternateively you can type primary to add events to your primary calendar)
- Set the start date to the actual start date
- Replace the prepared JSON as the value of schedule variable in google script
- Modify the functions `getStartDate` and `getEndDate` if necessary (By default it will add events through entire week)

## Execute

- Finally save the file again by clicking `File>Save`
- Now execute the script `Run>Run Function>addEventsToCalanders`

This should add events to your calendar.
