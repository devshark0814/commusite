# make project
  ~~~sh
  vue init webpack XXX
  ~~~

# init vue setting
## config/index.js
### line:16
 ~~~javascript
  host: '0.0.0.0'
 ~~~
### line:21
 ~~~javascript
  poll: true
 ~~~

## build/webpack.dev.conf.js
### line:44
 ~~~javascript
  ignored: /node_modules/,
 ~~~