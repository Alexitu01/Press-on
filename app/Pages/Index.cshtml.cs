using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.VisualBasic;
using Models;

namespace app.Pages;

public class IndexModel : PageModel
{

    public List<Product> productList = new List<Product>();

    public void OnGet()
    {
        
    }
}