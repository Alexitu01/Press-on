using System.Security.Cryptography.X509Certificates;
namespace Models;
public class Product
{
    public required int Id {get; set;}

    public required string Name {get; set;}
    
    public required double Price {get; set;}

    public int Quantity {get; set;}

    public int Size {get; set;}

    public string? ImageUrl {get; set;}

    public string? Details {get; set;}
}