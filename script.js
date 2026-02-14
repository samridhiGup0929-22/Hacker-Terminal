        const messages = [
            "Initializing hack",
            "Reading system files",
            "Password files detected",
            "Sending all passwords and personal files to server",
            "Cleaning up"
        ];

        const  terminal = document.getElementById('terminal');

        function randomDelay() {
            return Math.floor(Math.random() * 7000) + 1000; // 1 to 7 seconds
        }

        async function startHack(){
            for(const message of messages){ 
                const line = document.createElement('div'); //👉 Browser me ek naya <div> ban raha hai Jaise terminal ki ek new line 📟
                line.classList.add("line", "dots"); //👉 Us line ko "line" aur "dots" class de raha hai 🆔..Equivalent HTML: <div class="line dots"></div>
                line.textContent = message; //👉 Us line me message set kar raha hai 📝..Equivalent HTML: <div class="line dots">Initializing hack</div>
                terminal.appendChild(line); //👉 Us line ko terminal me add kar raha hai ➕

                await new Promise(resolve => setTimeout(resolve, randomDelay())); //👉 Random delay ke liye wait kar raha hai ⏳
                line.classList.remove("dots"); //👉 Dots class hata raha hai taaki dots blink na kare ❌..Equivalent HTML: <div class="line">Initializing hack</div>
                line.textContent = message + "..."; //👉 Dots hata kar message ke end me three dots add kar raha hai ➕..Equivalent HTML: <div class="line">Initializing hack...</div>
            }
        }
        startHack();