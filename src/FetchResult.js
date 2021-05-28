import React, { Component } from 'react'
import axios from 'axios';
const baseUrl = "https://cors-anywhere.herokuapp.com/http://proedge.me/test.php?rollnumber=";
// const baseUrl = "http://proedge.me/test.php?rollnumber=";

let links = [];


const FetchResult = () => {
    (async () => {
        let TableOfResult="<table className='tableResult'><thead><tr><th>S.No</th><th>Roll Number</th><th>Result</th></tr></thead><tbody>"
        let rollNums = document.getElementById("rollNumbers").value;
        if(rollNums.length === 0) {
            alert("Please Enter Roll Numbers");
            return ;
        }
        document.getElementById("load").style.display = "block";
        rollNums = rollNums.split(',');
        for(let ind = 0 ; ind < rollNums.length; ind++) {
            if(rollNums[ind].length >= 1) {
                links.push(baseUrl + rollNums[ind]);
            }
        }
        links = await Promise.all(links.map(async (url) => {
            const response = await axios.get(url)
            return response.data;
        }));
        for(let ind = 0; ind < links.length; ind++) {
            TableOfResult += "<tr><td>" + (ind + 1) + "</td><td>"+rollNums[ind]+"</td><td>"+links[ind]+"</td></tr>";
          }
        TableOfResult += "</tbody></table>";
        document.getElementById("load").style.display = "none";
        document.getElementById("result").innerHTML = TableOfResult;
        links = [];
        TableOfResult = "";
    })()
}

export default FetchResult;
