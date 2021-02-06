let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

// 여기에 코드를 작성해 주세요.
for (let i = 0; i <6; i++) {
    console.log(dataType[i]);
}

let i = 0;
while (i < 6) {
    console.log(dataType);
    i++
}
/* 결과값 = * index.js:5 number
          *  string
          *  boolean
          *  null
          *  undefined
          *  object
          *  (6) ["number", "string", "boolean", "null", "undefined", "object"]
          *  (6) ["number", "string", "boolean", "null", "undefined", "object"]
          *  (6) ["number", "string", "boolean", "null", "undefined", "object"]
          *  (6) ["number", "string", "boolean", "null", "undefined", "object"]
          *  (6) ["number", "string", "boolean", "null", "undefined", "object"]
          *  (6) ["number", "string", "boolean", "null", "undefined", "object"] */