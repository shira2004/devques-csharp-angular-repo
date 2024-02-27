using AutoMapper;
using Common.Dto;
using Repository.Entities;
using Repository.Interface;
using Repository.Repositories;
using Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class QuestionService : IQuestion<QuestionDto>
    {
        private readonly IRepository<Question> repository;
        private readonly IMapper mapper;
        public QuestionService(IRepository<Question> repository, IMapper map)
        {
            this.repository = repository;
            mapper = map;
        }
        public QuestionDto Add(QuestionDto item)
        {
            return mapper.Map<QuestionDto>(repository.Add(mapper.Map<Question>(item)));
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<QuestionDto> GetAll()
        {
            return mapper.Map<List<QuestionDto>>(repository.GetAll());
        }

        public List<QuestionDto> GetByCategory(int[] categoryIds)
        {
            return mapper.Map<List<QuestionDto>>(repository.GetAll().Where(q => categoryIds.Contains(q.CategoryId)));
        }

        public QuestionDto GetById(int id)
        {
            return mapper.Map<QuestionDto>(repository.Get(id));
        }

        public void Update(int id, QuestionDto entity)
        {
            repository.Update(id, mapper.Map<Question>(entity));
        }
    }
}
