using Microsoft.EntityFrameworkCore;
using Repository.Entities;
using Repository.Interface;

namespace DevQues.Model
{
    public class Db : IContext
    {
        public DbSet<User> user { get; set; }
        public DbSet<Answer> answers { get; set; }
        public DbSet<Category> categories { get; set; }
        public DbSet<Company> companies { get; set; }
        public DbSet<Question> questions { get; set; }

        
        public void save()
        {
            throw new NotImplementedException();
        }
    }
}
