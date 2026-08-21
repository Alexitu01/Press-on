using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.VisualBasic;
using Models;
using Repositories;

namespace app.Pages;

public class IndexModel(ProductRepository pr) : PageModel
{
    private readonly ProductRepository _pr = pr;

    public List<Product> productList = new List<Product>();

    public async Task OnGet()
    {
        productList = await _pr.GetAllProducts();
    }
}