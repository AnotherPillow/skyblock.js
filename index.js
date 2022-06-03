const fetch = require("node-fetch");

exports.economy = async function() {
    const res = await fetch("https://skyblock.net/?server-status");
  const html = await res.text();
  let SOR = html.indexOf("<body>Array")
  let EOR = html.indexOf(`<div id="loginBar">`)
  let body = html.substring(SOR, EOR).trim();
  let p = [];
  let biglongthing = body.substring(body.indexOf(`[4] => Array`), body.indexOf(`[6]`)).replace(`[4] => Array`, ``).replace("            ", "").replace("(", "").substring(body.indexOf(`[query_data] => a:4:`), body.indexOf(";}}")).split(`"`)
  for (v in biglongthing) {
    if (v % 2 == 1) {
      p.push(biglongthing[v])
    }
  }
  return p;
}

exports.survival = async function() {
    const res = await fetch("https://skyblock.net/?server-status");
    const html = await res.text();
    let SOR = html.indexOf("<body>Array")
    let EOR = html.indexOf(`<div id="loginBar">`)
    let body = html.substring(SOR, EOR).trim();
    let p = [];
    let biglongthing = body.substring(body.indexOf(`[4] => Array`), body.indexOf(`[6]`)).replace(`[4] => Array`, ``).replace("            ", "").replace("(", "").substring(body.indexOf(`[query_data] => a:4:`), body.indexOf(";}}")).split(`"`)
    for (v in biglongthing) {
      if (v % 2 == 1) {
        p.push(biglongthing[v])
      }
    }
    return p;
  }
