//Iterate through object
const obj = {
  foo: 'bar',
  comes: 'is',
  from: 'object'
};
for(let key in obj) {
  if(obj.hasOwnProperty(key)) {
    let valueOfKey = obj[key];
    console.log('%s: %s', key, valueOfKey);
  }
}

//Iterate through array of objects
const objArr = [{
  some: 'value',
  dummy: 'string'
},
{
  iterate: 'better',
  without: 'hassle'
}];
for(let obj of objArr) {
  console.log('incoming object => %s', JSON.stringify(obj));
  
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      let valueOfKey = obj[key];
      console.log('key => %s: value => %s', key, valueOfKey);
    }
  }
}

//Iterate through arrays in objects
const arrObjArr = [{
  foo: ['bar', 'buz', 278, {prop: 'erty'}],
  tar: 'ball'
},
{
  lang: 'en',
  city: 'Chicago'
}];
for(let obj of arrObjArr) {
  
  console.log('all object values => ', _getObjectValues(obj, true));
  
  _getObjectValues(obj, false, values => {
    values.forEach( (value, valueIndex) => {
      value.constructor === Array 
      ? 
      value.forEach((item, index) => {
        if(typeof item === 'object') item = JSON.stringify(item);
        console.log('index => %s: item => %s', index, item);
      })
      : 
      console.log('key => %s: value => %s', Object.keys(obj)[valueIndex], value);  
    })
  });
  
}

function _getObjectValues(obj, plain, cb) {
  let values = [];
    
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) { 
      values.push(obj[key]);
    }
  }
  
  if(!plain && cb) {
    cb(values);
  } else {
    return values;
  };
}
