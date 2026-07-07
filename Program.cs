// See https://aka.ms/new-console-template for more information
var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/", () => "Welcome to Press-on");

app.Run();