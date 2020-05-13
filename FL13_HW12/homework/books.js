window.books = [{
        bookName: 'Harry Potter and the Philosopher`s Stone ',
        author: 'Joanne Rowling',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg',
        plot: `This is the tale of Harry Potter, an ordinary eleven-year-old boy serving as a sort 
        of slave for his aunt and uncle who learns that he is actually a wizard and has been invited
        to attend the Hogwarts School for Witchcraft and Wizardry.`
    },
    {
        bookName: 'Harry Potter and the Chamber of Secrets',
        author: 'Joanne Rowling',
        imageUrl: `https://i.pinimg.com/originals/5a/5b/38/5a5b38587f83cb006066f3dc24c7622c.jpg`,
        plot: `The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry,
         during which a series of messages on the walls of the school's corridors warn that the 
         "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils
          who do not come from all-magical families.`
    },
    {
        bookName: 'Harry Potter and the Prisoner of Azkaban',
        author: 'Joanne Rowling',
        imageUrl: `https://images-na.ssl-images-amazon.com/images/I/51iwe6zFDZL._SX326_BO1,204,203,200_.jpg`,
        plot: `The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of
         Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates
          Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord
           Voldemort's old allies.`
    }
];

function Book(name, author, imageUrl, plot) {
    this.bookName = name || 'New book';
    this.author = author || 'Author';
    this.imageUrl = imageUrl || 'https://christinthecity.files.wordpress.com/2019/07/new-book-page.png?w=640';
    this.plot = plot || 'Plot of this book';
}