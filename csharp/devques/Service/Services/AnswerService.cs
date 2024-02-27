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
    public class AnswerService : IService<AnswerDto>
    {
        private readonly IRepository<Answer> repository;
        private readonly IMapper mapper;
        public AnswerService(IRepository<Answer> repository, IMapper map)
        {
            this.repository = repository;
            mapper = map;
        }
        public AnswerDto Add(AnswerDto item)
        {
            return mapper.Map<AnswerDto>(repository.Add(mapper.Map<Answer>(item)));
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<AnswerDto> GetAll()
        {
            return mapper.Map<List<AnswerDto>>(repository.GetAll());
        }

        public AnswerDto GetById(int id)
        {
            return mapper.Map<AnswerDto>(repository.Get(id));
        }

        public void Update(int id, AnswerDto entity)
        {
            repository.Update(id, mapper.Map<Answer>(entity));
        }
    }
}
