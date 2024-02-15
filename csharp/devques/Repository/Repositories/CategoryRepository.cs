using Repository.Entities;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class CategoryRepository : IRepository<Category>
    {
        private readonly IContext context;
        public CategoryRepository(IContext context)
        {
            this.context = context;
        }
        public Category Add(Category entity)
        {
            this.context.categories.Add(entity);
            this.context.save();
            return entity;
        }

 

       
        public void Delete(Category entity)
        {
            this.context.categories.Remove(entity);
            this.context.save();
        }

       

        public Category Get(int id)
        {
            return this.context.categories.FirstOrDefault(x => x.CategoryId == id);

        }

        public List<Category> GetAll()
        {
            return this.context.categories.ToList();

        }

        public void Update(int id, Category entity)
        {
            Category category = context.categories.FirstOrDefault(x => x.CategoryId == id);
            if (category != null)
            {
                category.CategoryName = entity.CategoryName;
            }

            this.context.save();
        }

        
    }
}
