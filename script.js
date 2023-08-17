let postsArray;
        let usersArray;
        let request;
        let request2;

        let countForSelection = 4;

        let mainDiv = document.createElement("div");
        document.body.append(mainDiv);

        let resultDiv = document.createElement("div");

        let bbDiv = document.createElement("div");
        bbDiv.classList.add("bottomButtons");

        if (window.XMLHttpRequest) {
            request = new window.XMLHttpRequest();
            request2 = new window.XMLHttpRequest();
        } else {
            request = new ActiveXObject("Microsoft.XMLHTTP");
            request2 = new ActiveXObject("Microsoft.XMLHTTP");
        }
        request.open("GET", "https://jsonplaceholder.typicode.com/posts");
        request.onreadystatechange = function () {

            if (request.readyState === 4) {
                postsArray = JSON.parse(request.response);
                mainDiv.append(resultDiv, bbDiv);
            }
        };
        request.send();

        request2.open("GET", "https://jsonplaceholder.typicode.com/users");
        request2.onreadystatechange = function () {
            if (request2.readyState === 4) {
                usersArray = JSON.parse(request2.response);
                console.log(usersArray);
                document.getElementById("1").innerText = `${usersArray[0].name}`;
                document.getElementById("2").innerText = `${usersArray[1].name}`;
                document.getElementById("3").innerText = `${usersArray[2].name}`;
                document.getElementById("4").innerText = `${usersArray[3].name}`;
                document.getElementById("5").innerText = `${usersArray[4].name}`;
                document.getElementById("6").innerText = `${usersArray[5].name}`;
                document.getElementById("7").innerText = `${usersArray[6].name}`;
                document.getElementById("8").innerText = `${usersArray[7].name}`;
                document.getElementById("9").innerText = `${usersArray[8].name}`;
                document.getElementById("10").innerText = `${usersArray[9].name}`;

            }
        };
        request2.send();

        function userClick(event) {
            let uId = event.target.id;
            console.log(uId);
            let usersPosts = [];
            for (let i = 0; i < postsArray.length; i++) {
                if (postsArray[i].userId == uId) {
                    usersPosts.push(postsArray[i]);
                } else {
                    console.log(postsArray[i].userId);
                }
            }
            resultDiv.innerHTML = printResult(usersPosts.slice(0, countForSelection));
            bbDiv.innerHTML = printButtons(countOfButtons(usersPosts, countForSelection));
        }

        function countOfButtons(arr, num) {
            return Math.ceil(arr.length / num);
        }

        function printButtons(count) {
            let r = "";
            for (let i = 1; i <= count; i++) {
                r += `<button class="pb">${i}</button>`;
            }
            return r;
        }

        function printResult(arr) {
            let r = "";
            for (let i = 0; i < arr.length; i++) {
                r += `<div class="post"><h4>${arr[i].title}</h4><p>${arr[i].body}</p></div>`;
            }
            return r;
        }

        document.addEventListener('click', function (event) {
            if (event.target.classList.contains("pb")) {
                let h = event.target.innerText;
                let start = countForSelection * (h - 1);//5
                let end = countForSelection * h;//10
                resultDiv.innerHTML = printResult(postsArray.slice(start, end));
            } else {
                console.log(event.target);
            }
        });