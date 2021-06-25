let myArr = null;
window.onload = function(){ 
fetch("https://striveschool-api.herokuapp.com/books")
    .then(res => res.json())
    .then(datas => {
        console.log(datas)
        myArr = datas;
        // console.log(myArr)

        const displayHtml = function () {
            let row = document.querySelector(".row")
            myArr.forEach(ele => {
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

        
        // console.log(datas[0].title)
        

        let buttonList = document.querySelectorAll("a")      // grabing the list button links
        let badge = document.querySelector("span.badge")
        let count = 0;

        
        
        buttonList.forEach( button => {
          button.addEventListener("click", function( event){
            button.classList.remove("btn-primary")
            button.classList.add("btn-danger")
            let title = event.target.parentNode.childNodes[1];
            title.closest("h5").style.color = "red"
            
            // console.log("event", event.target.parentNode.childNodes[1]);
            // console.log("button", button);
            
           

            count += 1;
           
            badge.innerText = count
            let list = document.querySelector("ul")
            
            list.insertAdjacentHTML(`afterbegin`, 
              `<li class="list-group-item bg-primary w-50 d-flex justify-content-between">
                <p>${title.innerText}</p>
                <button type="button" class="btn btn-danger ml-5 remove">Remove</button>
              </li>`
            )

            let removeButton = document.querySelectorAll(".remove")
            removeButton.forEach(list => {
              list.addEventListener("click", function(){
                let listItem = document.querySelectorAll("li")
                listItem.forEach(item => {
                  item.remove()
                })
                count=0
              })
            })
            
              
            
          })
             
        })


          let theSearch = document.querySelector(".form-control")
          theSearch.addEventListener("keyup", function(){
            let search = this.value.toLowerCase()
            let allH5 = document.querySelectorAll("h5")
            let cols = document.querySelectorAll(".col-12")
            
            for (let i of allH5){
              let item = i.innerHTML.toLowerCase()
              if (item.indexOf(search) == -1){i.parentElement.parentElement.classList.add("d-none")}
              else {i.parentElement.parentElement.classList.remove("d-none")}
            }
          })
          
      //   let h55 = document.querySelectorAll("h5")
      //   let searchBtn = document.querySelector(".btn-outline-success")
      //   searchBtn.addEventListener("click", function(){
      //   let searchBar = document.querySelector("input").value
      //   let val = searchBar.split("")
      //   let threeVal = val.slice(0, 3)
        
        
      //   h55.forEach(h5 => {
      //     let h5Text = h5.innerText
      //     console.log(h5Text)
      //     let chars = h5Text.split("")
      //     if (chars.includes(threeVal)){
      //       console.log("its here")
      //     }
      //   })

        
        
      // })

    })
    .catch(err => console.log(err))
  }
