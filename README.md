# Namaste-React
Exercises/Code practice while learning react in namaste-react course.


>> NPM does not stands for Node Package Manager
>> BUNDELERS : Parcel, Webpack, Vite, Rollup etc


>> ~ : used for automatically installing latest patch
>> ^ : used for automatically installing latest minor version


>> React.createElement create an Object which after transpilation by babel get converted into the HTML which modify the DOM
>>JSX : Javascript syntax extension which allow us to write HTML like code inside our javasript file
Since it is not feasible to write React.createElement("type", {props}, children/content) for writing big applications , Thats why We have JSX; JSX internally does React.createElement("type", {props}, children/content)









>> React.createElement => Object => HTML (DOM)



<!-- 

  What tasks a bundler do?
  z: BUNDLING
  a: Hot Module Replacement (HMR), it uses live server for that and live server uses file watcher algorithm
  b: Minify code
  c: Clean the code
  d: Optimize the code
  e: Compression of media files
  f: Create cache
  g: Create DEV and PRODUCTION build
  h: also make sure that build is compatible with older browsers
  i: do transpilation
  j: handle port numbers
  k: https on dev

  Parcel do all above : without any configurations

  :File Watcher Algorithm: (written in C++)
-->