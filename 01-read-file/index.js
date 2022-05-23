const {readFile} = require('fs/promises');

const FunctionReadFile = async() => {
  const result = await readFile('../HTML-builder/01-read-file/text.txt','UTF-8');
  console.log(result);
};

FunctionReadFile();