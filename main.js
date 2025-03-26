let inputs = document.getElementById("input");
        let sub = document.querySelector(".submit")
        let re = document.querySelector(".restart")
        let error = document.querySelector(".Error")
        let your_guess = document.getElementsByClassName("your-guess")
        let hl = document.getElementsByClassName("high-low")
        let ran_val;
        let inp_val;
        Random();
        sub.addEventListener("click", myFunction)
        console.log(ran_val)
        function Random() {
            ran_val = Math.floor(Math.random() * 101)
        }
        function myFunction() {
            let inputValue = inputs.value.trim();
            inp_val = parseInt(inputValue)
            if (inputValue == "") {
                error.textContent = "You Entered Nothing"
            }
            else if (inputValue !== inp_val.toString()) {
                error.textContent = "You Entered invalid character";
            }
            else if (inp_val < 0 || inp_val > 100) {

                error.textContent = "You Entered invalid Number"

            }
            else {
                error.textContent = ""
                your_guess[0].innerHTML += inp_val + " ";

                if (inp_val < ran_val) {
                    hl[0].textContent = "Too Low"
                }
                else if (inp_val > ran_val) {
                    hl[0].textContent = "Too High"
                }
                else {
                    hl[0].textContent = "Correct. Congratulation "
                    sub.disabled = true;
                }
            }
            inputs.value = "";

        }
        function Restart() {
            sub.disabled = false;
            hl[0].textContent = ""
            error.textContent = ""
            your_guess[0].textContent = "Your Guess:"
            Random()
            console.log(ran_val)
        }