using AutoMapper;
using Common.Dto;
using Repository.Entities;
using Repository.Interface;
using Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class CompanyService : IService<CompanyDto>
    {
        private readonly IRepository<Company> repository;
        private readonly IMapper mapper;
        public CompanyService(IRepository<Company> repository, IMapper map)
        {
            this.repository = repository;
            mapper = map;
        }
        public CompanyDto Add(CompanyDto item)
        {
            return mapper.Map<CompanyDto>(repository.Add(mapper.Map<Company>(item)));
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<CompanyDto> GetAll()
        {
            return mapper.Map<List<CompanyDto>>(repository.GetAll());
        }

        public CompanyDto GetById(int id)
        {
            return mapper.Map<CompanyDto>(repository.Get(id));
        }

        public void Update(int id, CompanyDto entity)
        {
            repository.Update(id, mapper.Map<Company>(entity));
        }
    }
}
