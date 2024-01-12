function search() {
   let towns = Array.from(document.getElementsByTagName('li'));
   
   let resultElement = document.getElementById('result')
   let result = [];
   
   
   
   let searchedText = document.getElementById('searchText').value;

   towns.forEach((town) =>{
      if (town.textContent.includes(searchedText) || town === searchedText) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         result.push(result);
      }

   })
   resultElement.textContent = `${result.length} matches found`;


}
