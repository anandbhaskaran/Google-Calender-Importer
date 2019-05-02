var calendarId = '0j4r23eg12898bgv10d4s7evdk@group.calendar.google.com';
var startDate = 'May 6, 2019'
var schedule = {"week1" : {"Task":"Accounting I: Fundamentals. Accounting II: Revenues and Expenses"},
                "week2" : {"Task":"Stocks and Bonds. Accounting III: Financial Statements "},
                "week3" : {"Task":"Accounting IV: Working with Ratios. Managerial Accounting "},
                "week4" : {"Assignment":"Accounting Group Project. Creating Financial Statements in Excel (optional, but recommended if you have Excel)"},
                "week5" : {"Assignment":"Accounting Group Project Due. Submit Accounting Group Project by the end of the week. Creating Financial Statements in Excel (optional, but recommended if you have Excel)"},
                "week6" : {"Task":"Microeconomics I: Supply and Demand (review if needed). Microeconomics II: Shape Your Economic Worldview "},
                "week7" : {"Task":"Microeconomics III: Markets and Externalities. Macroeconomics: Economic Fluctuations  "},
                "week8" : {"Task":"Macroeconomics: US Fiscal and Monetary Policy. Macroeconomics: International Trade  "},
                "week9" : {"Assignment":"Markets & Economies Case Study Presentation "},
                "week10" : {"Task":"One-Variable Statistics (review if needed). Probability Fundamentals  "},
                "week11" : {"Task":"Probability Distributions. Excel for One-Variable Statistics (optional, but recommended if you have Excel)."},
                "week12" : {"Task":"Two-Variable Statistics (review if needed). Regression Analysis "},
                "week13" : {"Break":"Break - Spend this time getting caught up with the schedule, if needed. "},
                "week14" : {"Task":"Excel for Two-Variable Statistics and Regression Analysis (optional, but recommended if you have Excel). Data Collection"},
                "week15" : {"Task":"Statistical Inference: Making Data-Driven Decisions"},
                "week16" : {"Task":"Advanced Statistical Inference "},
                "week17" : {"Task":"Midterm Review. Midterm Exam Practice (optional)"},
                "week18" : {"Exam":"Midterm Exam: ccounting, Markets & Economies, and Data & Decisions  "},
                "week19" : {"Task":"Organizational Behavior: Working in Groups and Teams. rganizational Structure and Culture "},
                "week20" : {"Task":"Corporate Governance "},
                "week21" : {"Task": "Theories of Leadership. Developing a Corporate Philosophy"},
                "week22" : {"Task":"Business Ethics and Social Responsibility. The Art of Negotiation  "},
                "week23" : {"Task":"Marketing Fundamentals (review if needed). Marketing Mechanics "},
                "week24" : {"Task":"Brand Development and Management. A/B Testing for Marketers   "},
                "week25" : {"Task":"Digital Marketing Fundamentals "},
                "week26" : {"Task":"Pricing I: Fundamentals. Pricing II: Price Segmentation to Maximize Profit"},
                "week27" : {"Task":"Pricing III: E-Commerce Pricing "},
                "week28" : {"Assignment":"Marketing Group Project"},
                "week29" : {"Task":"Finance: Time Value of Money (review if needed). Cost of Capital I: Capital Structure. Cost of Capital II: The Modigliani-Miller Theorem "},
                "week30" : {"Task":"Capital Budgeting. Modern Portfolio Theory"},
                "week31" : {"Task":"Valuation I: Discounted Free Cash Flow. Valuation II: Equity & Market Valuations. Excel for Finance"},
                "week32" : {"Break":"Break Week"},
                "week33" : {"Assignment":"Marketing Group Project Due. Submit Marketing Group Project by the end of the week "},
                "week34" : {"Task":"Capital Budgeting. Modern Portfolio TheoryProject Management.Marketing Project Presentation Due. Submit Marketing Project Presentation by the end of the week "},
                "week35" : {"Task":"Operations Management Fundamentals. Operations Management: Managing Uncertainty of Demand "},
                "week36" : {"Break":"Winter Break"},
                "week37" : {"Break":"Winter Break"},
                "week38" : {"Task":"Forecasting Fundamentals. Supply Chain Management "},
                "week39" : {"Task":"Strategy I: Business-Level Strategy. Strategy II: Corporate-Level Strategy "},
                "week40" : {"Task":"Mergers & Acquisitions I: Theory and Practice. Strategy III: International Strategy."},
                "week41" : {"Task":"Innovation Fundamentals. Balanced Scorecard "},
                "week42" : {"Task":"Strategy Case Study"},
                "week43" : {"Task":"Customer Discovery. Customer Validation"},
                "week44" : {"Task":"Developing a Business Plan. Venture Capital"},
                "week45" : {"Task":"Final Exam Review. Final Exam Practice: Operations Management (optional)"},
                "week46" : {"Exam":"Final Exam: Leading Organizations, Marketing & Pricing, Finance, Supply Chain & Operations, Strategy & Innovation"}
               }

function addEventsToCalanders() {
  var schedulekeys = Object.keys(schedule);
  Logger.log('Schedule: ' + Object.keys(schedule).length);
  for (i = 0; i < Object.keys(schedule).length; i++) {
    var start = new getStartDate(i+1);
    var end = new getEndDate(i+1);
    var type = Object.keys(schedule['week'+(i+1)]);
    var color = 11;
    switch(type[0]){
      case 'Task' : color = 9; break;
      case 'Exam' : color = 11; break;
      case 'Assignment' : color = 6; break;
      case 'Break' : color = 10; break;
    }
   event = {
    summary: 'Smartly Week ' + (i+1),
    description: schedule['week'+(i+1)][type[0]],
    start: {
      dateTime: start.toISOString()
    },
    end: {
      dateTime: end.toISOString()
    },
    // Red background. Use Calendar.Colors.get() for the full list.
    colorId: color
  };
  
    Logger.log('Event ID: ' + JSON.stringify(event));
    event = Calendar.Events.insert(event, calendarId);
    Logger.log('Event ID: ' + event.id);
  }
}
function getStartDate(week) {
  var startD = new Date(startDate);
  var date = new Date();
  date.setDate(startD.getDate() + (week -1)*7);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  Logger.log('Start date: ' + date.toISOString());
  return date;
}

function getEndDate(week) {
  var startD = new Date(startDate);
  var date = new Date();
  date.setDate(startD.getDate() + 7 + (week -1)*7 );
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

// Utility function to see the script is working.
function listUpcomingEvents() {
  var calendarId = 'primary';
  var optionalArgs = {
    timeMin: (new Date()).toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime'
  };
  var response = Calendar.Events.list(calendarId, optionalArgs);
  var events = response.items;
  if (events.length > 0) {
    for (i = 0; i < events.length; i++) {
      var event = events[i];
      var when = event.start.dateTime;
      if (!when) {
        when = event.start.date;
      }
      Logger.log('%s (%s)', event.summary, when);
    }
  } else {
    Logger.log('No upcoming events found.');
  }
}

// Gets the list of calendars and their corresponding IDs.
function getCalanders() {
  var response = Calendar.CalendarList.list();
  for(i = 0 ; i<response.items.length ; i++){
    Logger.log("(" + response.items[i].summary + ')' + response.items[i].id);
  }
}