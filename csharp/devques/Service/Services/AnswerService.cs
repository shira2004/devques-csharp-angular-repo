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
    public class AnswerService : IAnswer<AnswerDto>
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

        public string EncodeImageToBase64(string imagePath)
        {
            try
            {
                byte[] imageBytes = System.IO.File.ReadAllBytes(imagePath);
                return Convert.ToBase64String(imageBytes);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error encoding image: {ex.Message}");
                return null;
            }
        }

        public List<AnswerDto> GetAll()
        {
            return mapper.Map<List<AnswerDto>>(repository.GetAll());
        }

        public List<AnswerDto> GetByCategory(int[] categoryIds)
        {
            return mapper.Map<List<AnswerDto>>(repository.GetAll().Where(q => categoryIds.Contains(q.CategoryId)));
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
