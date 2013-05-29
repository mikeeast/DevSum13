namespace Example.Models
{
    public class Book
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public Author Author { get; set; }
    }
}