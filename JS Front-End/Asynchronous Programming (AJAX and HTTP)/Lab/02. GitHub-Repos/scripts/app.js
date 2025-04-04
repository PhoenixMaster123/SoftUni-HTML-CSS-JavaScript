function loadRepos() {
   let url = "https://api.github.com/users/testnakov/repos";

   fetch(url)
   .then(onResponse)
   .then(onData)
   .catch(onError)

   function onResponse(res) {
      if(!res.ok) {
         throw new Error('Something went wrong');
      }
      return res.text();
   }

   function onData(data) {
      let output = document.getElementById('res');
      output.textContent = data;
      console.log(data)
   }
   function onError(err) {
      console.error(err)
   }
}