using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Query;

namespace Models;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products {get; set;}

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        
    }
}