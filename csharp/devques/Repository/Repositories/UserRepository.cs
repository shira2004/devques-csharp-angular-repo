using Common.Dto;
using Microsoft.EntityFrameworkCore;
using Repository.Entities;
using Repository.Interface;
using System.Collections.Generic;
using System.Linq;

namespace Repository.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IContext context;

        public UserRepository(IContext context)
        {
            this.context = context;
        }

        public User Add(User entity)
        {
            this.context.user.Add(entity);
            this.context.save(); // Assuming Save() is a method to save changes
            return entity;
        }

        public void Delete(User entity)
        {
            this.context.user.Remove(entity);
            this.context.save(); // Assuming Save() is a method to save changes
        }

        public User Get(int id)
        {
            return this.context.user.FirstOrDefault(x => x.UserId == id);
        }

        public List<User> GetAll()
        {
            return this.context.user.ToList();
        }

        public void Update(int id, User entity)
        {
            var userEntity = this.context.user.FirstOrDefault(x => x.UserId == id);
            if (userEntity != null)
            {
                userEntity.FirstName = entity.FirstName;
                userEntity.LastName = entity.LastName;
                userEntity.Email = entity.Email;
                userEntity.Password = entity.Password;

                this.context.save(); // Assuming Save() is a method to save changes
            }
        }

        public User GetUserByEmail(string email)
        {
            return this.context.user.FirstOrDefault(x => x.Email == email);
        }
    }
}
