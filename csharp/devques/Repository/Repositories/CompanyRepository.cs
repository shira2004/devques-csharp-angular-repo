using Repository.Entities;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class CompanyRepository :IRepository<Company>
    {
        private readonly IContext context;
        public CompanyRepository(IContext context)
        {
            this.context = context;
        }

        public Company Add(Company entity)
        {
            this.context.companies.Add(entity);
            this.context.save();
            return entity;
        }

        public void Delete(Company entity)
        {
            this.context.companies.Remove(entity);
            this.context.save();
        }
        public Company Get(int id)
        {
            return this.context.companies.FirstOrDefault(x => x.CompanyId == id);

        }

        public List<Company> GetAll()
        {
            return this.context.companies.ToList();

        }

        public void Update(int id, Company company)
        {
            Company c   = context.companies.FirstOrDefault(x => x.CompanyId == id);
            if (c != null)
            {
                c.CompanyName = company.CompanyName;
            }

            this.context.save();
        }

    }
}
