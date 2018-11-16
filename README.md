# API Basejump: Timestamp Microservice

## User stories:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example usage:
```text
https://mtharmen-timestamp.herokuapp.com/September%209,%201999
https://mtharmen-timestamp.herokuapp.com/936835200
```

### Example output:
```js
{
  "unix": 936835200,
  "natural": "September 9, 1999"
}
```
