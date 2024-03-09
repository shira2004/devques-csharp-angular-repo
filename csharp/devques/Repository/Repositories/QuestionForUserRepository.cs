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
    public class QuestionForUserRepository : IRepository<QuestionForUser>
    {
        private readonly IContext context;

        public QuestionForUserRepository(IContext context)
        {
            this.context = context;
        }

        public QuestionForUser Add(QuestionForUser entity)
        {
            this.context.userQu.Add(entity);
            this.context.save();
            return entity;
        }

       
        public void Delete(QuestionForUser entity)
        {
            this.context.userQu.Remove(entity);
            this.context.save();

        }

        public QuestionForUser Get(int id)
        {
            throw new NotImplementedException();
        }

        public List<QuestionForUser> GetAll()
        {
            return this.context.userQu.Include(q =>q.Question).ToList();
        }

       // public void Update(int id, QuestionForUser entity)
       // {
       //     var ques = context.userQuestions.FirstOrDefault(x => x.QuestionId == id);
       //     ques.Content = entity.Content;
       //
       //     this.context.save();
       // }

        public void Update(int id, QuestionForUser entity)
        {
            throw new NotImplementedException();
        }

       
      
    }
}
