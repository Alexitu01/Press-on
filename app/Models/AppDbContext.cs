using System;
using System.Security.Cryptography.X509Certificates;
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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>(d =>
        {
            d.HasData(
                new Product{Id = 1, Name = "Chrome Dots", Price = 35.5, Quantity = 5, Size = 32, ImageUrl = "imgs/nail1.png"},
                new Product{Id = 2, Name = "Flowery Waters", Price = 45, Quantity = 2, Size = 32, ImageUrl = "imgs/nail2.png"},
                new Product{Id = 3, Name = "Candy Cutie", Price = 40, Quantity = 1, Size = 32, ImageUrl = "imgs/nail3.png"}
            );
        });

    }
}