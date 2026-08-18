using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.VisualBasic;
using Models;

namespace app.Pages;

public class IndexModel : PageModel
{

    public List<Product> productList = new List<Product>();

    public void OnGet()
    {
        productList.Add(new Product{
            Name = "Sunrise",
            Price = 20.20,
            Quantity = 2,
            Size = 10,
            });

        productList.Add(new Product{
            Name = "Beach",
            Price = 3,
            Quantity = 2,
            Size = 10,
            });

        productList.Add(new Product{
            Name = "Night",
            Price = 10,
            Quantity = 2,
            Size = 20,
            });

        productList.Add(new Product{
            Name = "SOmething",
            Price = 40,
            Quantity = 2,
            Size = 10,
            ImageUrl = "imgs/nail1.png",
            });
        
    }
}
