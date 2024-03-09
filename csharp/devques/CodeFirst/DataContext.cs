using Microsoft.EntityFrameworkCore;
using Repository.Entities;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeFirst
{
    public class DataContext : DbContext, IContext
    {
        public DbSet<User> user { get; set; }
        public DbSet<Answer> answers { get; set; }
        public DbSet<Category> categories { get; set; }
        public DbSet<Company> companies { get; set; }
        public DbSet<Question> questions { get; set; }
        public DbSet<QuestionForUser> userQuestions { get; set; }

        public DbSet<UserRatings> UserRatings { get; set; }

        
        public object Response { get ; set; }
        public DbSet<QuestionForUser> userQu { get; set; }

        //public DbSet<QuestionForUser>  { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public void save()
        {
            SaveChanges();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=DESKTOP-SSNMLFD;database=DevQues;trusted_connection=true;");
        }

    }
}
