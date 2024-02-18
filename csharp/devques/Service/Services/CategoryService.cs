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
    public class CategoryService : IService<CategoryDto>
    {
        private readonly IRepository<Category> repository;
        private readonly IMapper mapper;
        public CategoryService(IRepository<Category> repository, IMapper map)
        {
            this.repository = repository;
            mapper = map;
        }
        public CategoryDto Add(CategoryDto item)
        {
            return mapper.Map<CategoryDto>(repository.Add(mapper.Map<Category>(item)));
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<CategoryDto> GetAll()
        {
            return mapper.Map<List<CategoryDto>>(repository.GetAll());
        }

        public CategoryDto GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(int id, CategoryDto entity)
        {
            throw new NotImplementedException();
        }
    }
}
