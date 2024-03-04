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
    public class AnswerRepository : IRepository<Answer>
    {
        private readonly IContext context;
        public AnswerRepository(IContext context)
        {
            this.context = context;
        }
        public Answer Add(Answer entity)
        {
            this.context.answers.Add(entity);
            this.context.save();
            return entity;
        }

        public void Delete(Answer entity)
        {
            this.context.answers.Remove(entity);
            this.context.save();
        }


    

        public Answer Get(int id)
        {
            return this.context.answers.FirstOrDefault(x => x.AnswerId == id);

        }

        public List<Answer> GetAll()
        {
            return this.context.answers.Include(u => u.User).ToList(); 
        }

        public void Update(int id , Answer entity)
        {
            var ans = context.answers.FirstOrDefault(x => x.AnswerId == id);
            ans.Rating = entity.Rating;
            ans.Content = entity.Content;
            this.context.save();
        }

      
    }
}
