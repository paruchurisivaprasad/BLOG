// select box 




//




var i = 0;
var txt = ` CRICKET CAREERS`;
let typer = () => {

  if (i < txt.length) {
    document.getElementById("navbrand").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typer, 100);
  }
}

 typer();

var it = 0;
var text = `- WELCOME TO CRICKET CAREERS ..`;
let typ = () => {

  if (it < text.length) {
    document.getElementById("dem").innerHTML += text.charAt(it);
    it++;
    setTimeout(typ, 90);
  }
}
typ();


let searchbtn = document.querySelector('#clickme');






let stats = document.querySelector('#statstable');




searchbtn.addEventListener('click', () => {

  let r = new XMLHttpRequest();
  r.open('GET', 'player.json', true);
  r.send();

  r.onload = () => {

    if (r.status === 200) {
      let f = r.responseText;
      let ff = JSON.parse(f);
      gg(ff);

    }
  }

});
let gg = (user) => {

  let cards = document.querySelector('#fama');
  let inputbtn = document.querySelector('#inputvalue');
  let inputvalue = inputbtn.value.toLowerCase();


// select



  console.log(inputvalue)
  let men;
  let k;
  let dataFound = false;
  for (let key in user) {

    console.log(key)
    if (user[key].name==inputvalue || user[key].jerseynumber == (inputvalue)) {
      dataFound = true;
      
      
        
      
      men = `
      <div class="col-lg-5 my-3">

      <div id="card1" class="card">
          <img src="${user[key].pimg}" alt="" class="img-fluid">
          <div class="card-body">
          
              <h5 class="card-title">career</h5>
              <p class="card-text"><kbd>Profile</kbd><br><br>
                  ${user[key].career}
                  </p>
                  
                  <button  id="readmore" class="btn btn-primary" style="width:150px">READ MORE</button>
          </div>
      </div>
  </div>
  <div id="statstable" class="container table-responsive-md">
  ${user[key].careerstats}
      </div>`;
      
break;

    
    
  }
  if (!dataFound) {

    men = `<h1>No Data Found</h1>`;
    

  }
  
}
  cards.innerHTML = men;
  
  let moretxt = document.querySelector('#moretext');
  let readmorebtn = document.querySelector('#readmore');
let dotted = document.querySelector('#dot');

  
  


    readmorebtn.addEventListener('click', () => {

      if (dotted.style.display === 'none') {

        dotted.style.display = 'inline';
        readmorebtn.innerHTML = 'READMORE';
        moretxt.style.display = 'none';

      }
      else {
        dotted.style.display = 'none';
        readmorebtn.innerHTML = 'READLESS';
        moretxt.style.display = 'block';

      }

    });

  }
  






























// prime numbers js






//end of primenumbers script
