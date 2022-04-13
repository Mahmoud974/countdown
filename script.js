const title = document.querySelector("h1");
console.log(new Date());
const getDate = () => {
  const now = new Date().getTime();
  const purposeDate = new Date("April 19, 2024 19:24:20").getTime();
  const resultat = purposeDate - now;
  const days = Math.floor(resultat / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (resultat % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((resultat % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((resultat % (1000 * 60)) / 1000);
  title.textContent = `${days}d ${hours}h ${minutes}m ${seconds}`;
};
getDate();
const myInterval = setInterval(() => {
  getDate();
}, 1000);
