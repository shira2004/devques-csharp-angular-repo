using Repository.Entities;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class QuestionRepository :IRepository<Question>
    {
        private readonly IContext context;

        public QuestionRepository(IContext context)
        {
            this.context = context;
        }

        public Question Add(Question entity)
        {
            this.context.questions.Add(entity);
            this.context.save();
            return entity;
        }

  

        public void Delete(Question entity)
        {
            this.context.questions.Remove(entity);
            this.context.save();
            
        }



        public Question Get(int id)
        {
            return this.context.questions.FirstOrDefault(x => x.QuestionId == id);

        }

        public List<Question> GetAll()
        {
            return this.context.questions.ToList();
        }

        public void Update(int id, Question entity)
        {
            var ques = context.questions.FirstOrDefault(x => x.QuestionId == id);
            ques.Content = entity.Content;
            //ques.Company = entity.Company;


            this.context.save();
        }

    
    }
}
