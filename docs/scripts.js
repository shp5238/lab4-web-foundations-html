const bar = document.getElementById('bar');
const percent = document.getElementById('percent');

const download = () => {
  //fake stuff
  let progress = 0;
  const interval = setInterval(() => {
    progress++;
    bar.value = progress; // fill bar
    percent.textContent = progress + '%';
    if (progress >= 100){
      clearInterval(interval);
    }
  }, 50);
  
  //actual download, with a delay so that in local host 
  //progress bar starts, then instant download
  setTimeout(() => {
  const priv_pol = document.createElement('a'); //create a obj
    priv_pol.href = './assets/privacy_policy.pdf'; // define path
    priv_pol.download = 'privacy_policy.pdf'; // download & click
    priv_pol.click();
  }, 500);
}

