# API Basejump: Timestamp Microservice

## User stories:

1. The API endpoint is GET [project_url]/api/timestamp/:date_string?
2. A date string is valid if can be successfully parsed by new Date(date_string). Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds. In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.
3. If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
4. If the date string is valid the api returns a JSON having the structure
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> } e.g. {"unix": 936835200 ,"utc": "Thu, 09 Sep 1999 00:00:00 GMT"}
5. If the date string is invalid the api returns a JSON having the structure
{"error" : "Invalid Date" }.

### Example usage:
```text
    /api/timestamp/1999-09-09
    /api/timestamp/936835200
```
### Example output:
```js
    { "unix": 936835200, "utc": "Thu, 09 Sep 1999 00:00:00 GMT" } 
```