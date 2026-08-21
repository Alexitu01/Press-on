using Microsoft.EntityFrameworkCore;
using Models;

namespace Repositories;

public class ProductRepository(AppDbContext _appDbContext)
{
    public async Task<List<Product>> GetAllProducts()
    {
        var list = await _appDbContext.Products.ToListAsync();
        return list;
    }
}