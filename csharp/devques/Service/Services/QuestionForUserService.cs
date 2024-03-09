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
    public class QuestionForUserService : IService<QuestionForUserDto>
    {
        private readonly IRepository<QuestionForUser> repository;
        private readonly IMapper mapper;
        public QuestionForUserService(IRepository<QuestionForUser> repository, IMapper map)
        {
            this.repository = repository;
            mapper = map;
        }
        public QuestionForUserDto Add(QuestionForUserDto item)
        {
            if (!IsValidQuestionForUser(item))
            {
                throw new InvalidOperationException("Duplicate question rating detected");
            }

            return mapper.Map<QuestionForUserDto>(repository.Add(mapper.Map<QuestionForUser>(item)));
        }

        private bool IsValidQuestionForUser(QuestionForUserDto questionForUserDto)
        {
            
            bool isDuplicate = repository.GetAll()
                .Any(qfu => qfu.IdQues != questionForUserDto.IdQues && qfu.UserId == questionForUserDto.UserId && qfu.QuestionId == questionForUserDto.QuestionId);

            return !isDuplicate;
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<QuestionForUserDto> GetAll()
        {
            return mapper.Map<List<QuestionForUserDto>>(repository.GetAll());
        }

        public QuestionForUserDto GetById(int id)
        {
            return mapper.Map<QuestionForUserDto>(repository.Get(id));
        }

        public void Update(int id, QuestionForUserDto entity)
        {
            repository.Update(id, mapper.Map<QuestionForUser>(entity));
        }
    }
}
