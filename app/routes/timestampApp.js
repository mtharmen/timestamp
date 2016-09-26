'use strict';

module.exports = function(app) {
    
    function formatDate(date) {
      var year = date.getFullYear();
      var month = ['January','February','March','April','May','June','July','August','September','October','November','December'][date.getMonth()];
      var day = date.getDate();
      return month + ' ' + day + ', ' + year;
    }
    
    function ParseDate(raw) {
      
      var parsed = {unix: '', natural: ''};
      
      // Checking to see if it's purely numbers, ie in unix time
      if (raw.match(/^[0-9]+$/) !== null) {
        raw *= 1000; //convert to milliseconds
      }
      var date = new Date(raw);
      
      if (date.toString() === 'Invalid Date') {
        return {error: 'Incorrect format, see main page for correct usage'};
      }
      
      parsed.unix = date.getTime() / 1000;
      parsed.natural = formatDate(date);
      return parsed;
    }
    
    app.get('/:date', function(req, res){
      var rawDate = req.params.date;
      var parsed = ParseDate(rawDate);
    
      res.json(parsed);
    });
};