const write = document.querySelector("input");
const btn = document.querySelector(".count");
const p = document.querySelector(".outer");

btn.addEventListener('click', () => {
    const vowel_count = string => [...string].filter(c => 'aeiou'.includes(c.toLowerCase())).length;
    if (write.value) {
        document.querySelector(".outer").innerHTML = `
         <p>Kelime içinde ${vowel_count(write.value)} sesli harf var kelime:<span style="color:red ;">${write.value}</span></p>

        `;
    } else {
        document.querySelector(".outer").innerText = "Giriş yapınız";
    }
});