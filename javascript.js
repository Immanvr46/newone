const books =[
    {
      "url": "https://www.anapioficeandfire.com/api/books/1",
      "name": "A Game of Thrones",
      "isbn": "978-0553103540",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 694,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardcover",
      "released": "1996-08-01T00:00:00",
      "characters": [
        "https://www.anapioficeandfire.com/api/characters/2",
        "https://www.anapioficeandfire.com/api/characters/12",
        "https://www.anapioficeandfire.com/api/characters/13",
        "https://www.anapioficeandfire.com/api/characters/16",
        "https://www.anapioficeandfire.com/api/characters/20",
      ],
    },
  
  
    {
        "url": "https://www.anapioficeandfire.com/api/books/2",
        "name": "A Clash of Kings",
        "isbn": "978-0553108033",
        "authors": [
          "George R. R. Martin"
        ],
        "numberOfPages": 768,
        "publisher": "Bantam Books",
        "country": "United States",
        "mediaType": "Hardback",
        "released": "1999-02-02T00:00:00",
        "characters": [
          "https://www.anapioficeandfire.com/api/characters/2",
          "https://www.anapioficeandfire.com/api/characters/12",
          "https://www.anapioficeandfire.com/api/characters/13",
          "https://www.anapioficeandfire.com/api/characters/16",
          "https://www.anapioficeandfire.com/api/characters/20",
        ],
    },
  ];
  
  
  
  
            function createBooks(books) {
                books.forEach((books) => {
                    document.body.innerHTML +=  `<div>
          <h5><span> Book Name : </span>${books.name}</h5>
          <p><span>isbn : </span>${books.isbn}</p>
          <h5><span>Author Name :</span>${books.authors}</h5> 
          </div>
          <div>
          <p><span>Page No : </span>${books.numberOfPages}</p>
          <p><span>Publisher : </span>${books.publisher}</p>
          <p><span>Country : </span>${books.country}</p>
          <p><span>Media Type : </span>${books.mediaType}</p>
          <p><span>Release : </span>${books.released}</p>
          <p><span>Characters : </span>${books.characters}</p>
          </div>
          </div>`
      });
  }
  async function createBooks(books){
    try{
        const result = await fetch.get("https://www.anapioficeandfire.com/api/books")
         const final= result.json()
        console.log(final);
    }
    catch(error){
        console.log(error);
    }
  };
fetch("https://www.anapioficeandfire.com/api/books");