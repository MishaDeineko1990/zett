$.getJSON("https://spreadsheets.google.com/feeds/list/1LXe-5O1uVBmMTz6tDJIY-9LbnjYdOTxZvDuw5D7Izfw/od6/public/values?alt=json", function(data) {
    //first row "title" column https://docs.google.com/spreadsheets/d/1LXe-5O1uVBmMTz6tDJIY-9LbnjYdOTxZvDuw5D7Izfw/edit?usp=sharing
    // console.log(data.feed.entry[0]['gsx$title']['$t']);
    console.log(data);
});

