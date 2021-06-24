let myArr = null;

fetch("https://striveschool-api.herokuapp.com/books")
    .then(res => res.json())
    .then(datas => {
        console.log(datas)
        // myArr = datas;
        // console.log(myArr)

        const displayHtml = function () {
            let row = document.querySelector(".row")
            datas.forEach(ele => {
                let col = document.createElement("div")
                col.classList.add("col-12", "col-md-3", "mb-3", "d-flex")
                col.insertAdjacentHTML(`afterbegin`, `<div class="card" style="width: 18rem;">
                <img src="${ele.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${ele.title}</h5>
                  <p class="card-text">${ele.price}</p>
                  <p class="card-text">${ele.category}</p>
                  <a href="#" class="btn btn-primary">Buy</a>
                </div>
              </div>`)
              row.appendChild(col)
            });
        }
        displayHtml()


        

        let linkBtn = document.querySelectorAll("a")
        let badge = document.querySelector("span.badge")
        let count = 0;
        linkBtn.forEach(elem => {
          elem.addEventListener("click", function(){
            let btnn = document.querySelector(".btn-primary")
            btnn.classList.remove("btn-primary")
            btnn.classList.add("btn-danger")
            
            count += 1;
            // console.log(count)
            badge.innerText = count
            
          })
        })


        




    })
    .catch(err => console.log(err))

