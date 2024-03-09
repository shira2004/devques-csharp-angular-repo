using Microsoft.EntityFrameworkCore;
using Repository.Entities;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class UserRatingsRepository : IRepository<UserRatings>
    {
        private readonly IContext context;

        public UserRatingsRepository(IContext context)
        {
            this.context = context;
        }

        public UserRatings Add(UserRatings entity)
        {
            this.context.UserRatings.Add(entity);
            this.context.save();
            return entity;
        }



        public void Delete(UserRatings entity)
        {
            this.context.UserRatings.Remove(entity);
            this.context.save();

        }



        public UserRatings Get(int id)
        {
            return this.context.UserRatings.FirstOrDefault(x => x.AnsId == id);

        }

        public List<UserRatings> GetAll()
        {
            return this.context.UserRatings.Include(u => u.User).ToList();
        }

        public void Update(int id, UserRatings entity)
        {
           
        }


    }
}
