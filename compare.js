"use strict";

function deepEqual(a, b) {
  const akeys = Object.keys(a);
  const bkeys = Object.keys(b);

  if (akeys.length !== bkeys.length) {
    return false;
  }
  if (akeys.some(key => !bkeys.includes(key))) {
    return false;
  }
  return akeys.every((key) => {
    return akeys[key] === bkeys[key];
  });
}

function compare(specA, specB) {
  if (typeof specB === "undefined") {
    const [ name, version ] = specA.split("-");

    specB = specA;
    specA = `${ name }-${ version - 1 }`;
  }

  specA = require(`./specs/${ specA }`).spec;
  specB = require(`./specs/${ specB }`).spec;

  const report = { "add": [], "remove": [], "moved": [], "change": [] };
  const methods = [];

  Object.keys(specB).sort().filter(apiPath => !specA[apiPath]).forEach((apiPath) => {
    const [ className, methodName ] = apiPath.split("/").slice(1);

    if (!report.add.includes(`/${ className }`)) {
      report.add.push(apiPath);
    } else {
      methods.push(methodName);
    }
  });

  Object.keys(specA).sort().filter(apiPath => !specB[apiPath]).forEach((apiPath) => {
      const [ className, methodName ] = apiPath.split("/").slice(1);
      if (methods.includes(methodName)) {
        report.moved.push(apiPath);
      } else if (!report.remove.includes(`/${ className }`)) {
        report.remove.push(apiPath);
      }
  });

  Object.keys(specA).sort().filter(apiPath => specB[apiPath]).forEach((apiPath) => {
    if (!deepEqual(specA[apiPath], specB[apiPath])) {
      report.change.push(apiPath);
    }
  });

  global.console.log(report);
  global.console.log(`add        : ${ report.add.length }`);
  global.console.log(`remove     : ${ report.remove.length }`);
  global.console.log(`moved      : ${ report.moved.length }`);
  global.console.log(`change     : ${ report.change.length }`);
}

compare.apply(null, process.argv.slice(2));
