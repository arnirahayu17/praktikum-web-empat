const input = document.querySelector(".input");
const kurs = document.querySelector(".kurs");
const btnHitung = document.querySelector(".hitung");
const result = document.querySelector(".result");

	btnHitung.addEventListener("click", function() {
		if (kurs.value == "usd") {
			result.innerHTML = "Hasil: " + parseInt(input.value) * 9915;
		}
		else if (kurs.value == "sgd") {
			result.innerHTML = "Hasil: " + parseInt(input.value) * 13.472;
		}

		else if (kurs.value == "myr") {
            result.innerHTML = "Hasil: " + parseInt(input.value) * 874;
        }
        else if (kurs.value == "jpy") {
			result.innerHTML = "Hasil: " + parseInt(input.value) * 120;
		}

		else if (kurs.value == "euro") {
            result.innerHTML = "Hasil: " + parseInt(input.value) * 15888;
        }
        else if (kurs.value == "sar") {
            result.innerHTML = "Hasil: " + parseInt(input.value) * 3592;
        }
	})